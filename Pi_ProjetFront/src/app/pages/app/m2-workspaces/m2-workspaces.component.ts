import { CommonModule } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, ViewChild, computed, effect, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { AuthService } from "../../../auth/auth.service";
import { OrganizationOption } from "../../../auth/user.model";
import { M2CreateWorkspaceRequest, M2Workspace, M2WorkspaceService } from "./m2-workspace.service";

type ViewMode = "day" | "week" | "month";
type SortDirection = "asc" | "desc";
type SortColumn = "name" | "slug" | "organization" | "createdAt";
type Category = "All" | "Owned" | "Other";

interface M2WorkspaceView {
    id: string;
    name: string;
    slug: string;
    ownerId: number;
    organizationName: string;
    createdAt: string;
}

interface M2CreateWorkspaceDialogData {
    canSelectOrganization: boolean;
    organizationOptions: OrganizationOption[];
    defaultOrganizationId?: string | null;
    defaultOrganizationName?: string | null;
}

@Component({
    selector: "app-m2-create-workspace-dialog",
    standalone: true,
    imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule],
    template: `
        <div class="p-3 p-lg-4">
            <div class="d-flex align-items-center mb-3">
                <h3 class="mb-0 flex-grow-1">Create Workspace</h3>
                <button matIconButton (click)="close()"><mat-icon class="material-icons-outlined">close</mat-icon></button>
            </div>

            <div class="row gx-3">
                <div class="col-12 mb-3">
                    <mat-form-field appearance="outline" class="w-100">
                        <mat-label>Workspace Name</mat-label>
                        <input matInput [(ngModel)]="name" placeholder="Ex: Data Engineering" />
                    </mat-form-field>
                </div>
                <div class="col-12 mb-3">
                    <mat-form-field appearance="outline" class="w-100">
                        <mat-label>Workspace Slug (optional)</mat-label>
                        <input matInput [(ngModel)]="slug" placeholder="Ex: data-engineering" />
                    </mat-form-field>
                </div>

                @if (data?.canSelectOrganization) {
                <div class="col-12 mb-3">
                    <mat-form-field appearance="outline" class="w-100">
                        <mat-label>Organization</mat-label>
                        <mat-select [(ngModel)]="organizationId">
                            @for (org of data?.organizationOptions || []; track org.organizationId) {
                            <mat-option [value]="org.organizationId">{{ org.organizationName }} ({{ org.organizationSlug }})</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                } @else {
                <div class="col-12 mb-3">
                    <p class="small text-secondary mb-0">Organization: {{ data?.defaultOrganizationName || 'Current organization' }}</p>
                </div>
                }
            </div>

            <div class="d-flex justify-content-end gap-2">
                <button matButton (click)="close()">Cancel</button>
                <button matButton="filled" (click)="submit()"><mat-icon class="material-icons-outlined me-1">add_circle</mat-icon>Create Workspace</button>
            </div>
        </div>
    `,
})
export class M2CreateWorkspaceDialogComponent {
    readonly dialogRef = inject(MatDialogRef<M2CreateWorkspaceDialogComponent>);
    readonly data = inject(MAT_DIALOG_DATA, { optional: true }) as M2CreateWorkspaceDialogData | null;

    name = "";
    slug = "";
    organizationId = this.data?.defaultOrganizationId || "";

    submit(): void {
        const payload: M2CreateWorkspaceRequest = {
            name: this.name.trim(),
            slug: this.slug.trim() || undefined,
            organizationId: this.data?.canSelectOrganization ? this.organizationId || undefined : undefined,
        };
        this.dialogRef.close(payload);
    }

    close(): void {
        this.dialogRef.close();
    }
}

@Component({
    selector: "app-m2-workspaces",
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        FormsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatMenuModule,
        MatSnackBarModule,
        MatDialogModule,
    ],
    template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col col-md mb-3 mb-xl-0 py-1 order-1 order-lg-1">
                        <h3 class="mb-1">Workspaces</h3>
                        <p class="small">
                            <span routerLink="/app/dashboard" class="me-2 text-theme style-none">
                                <mat-icon class="material-icons-outlined align-middle text-sm">house</mat-icon> Home
                            </span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            Workspaces
                        </p>
                        <p class="small text-secondary mb-0">Organization: {{ organizationName() }}</p>
                        <p class="small text-secondary mb-0">Org role: {{ organizationMembershipRole() }}</p>
                    </div>

                    @if(filterOn()) {
                    <div class="col-12 col-sm-6 col-lg-auto mb-3 mb-xl-0 order-3 order-lg-2">
                        <mat-button-toggle-group [value]="viewMode()" (change)="viewMode.set($event.value)">
                            <mat-button-toggle value="day">Day</mat-button-toggle>
                            <mat-button-toggle value="week">Week</mat-button-toggle>
                            <mat-button-toggle value="month">Month</mat-button-toggle>
                        </mat-button-toggle-group>
                    </div>

                    <div class="col-12 col-sm-6 col-lg-3 col-xxl-2 mb-3 mb-xl-0 order-4 order-lg-3">
                        <mat-form-field appearance="outline" class="w-100 inline-small">
                            <mat-label>Search</mat-label>
                            <mat-icon matPrefix>search</mat-icon>
                            <input matInput [ngModel]="searchQuery()" (ngModelChange)="searchQuery.set($event)" placeholder="Search workspace" />
                        </mat-form-field>
                    </div>

                    <div class="col-12 col-sm-6 col-lg-3 col-xxl-2 mb-3 mb-xl-0 order-5 order-lg-4">
                        <mat-form-field appearance="outline" class="w-100 inline-small">
                            <mat-select [ngModel]="sortColumn()" (ngModelChange)="sortColumn.set($event)">
                                <mat-option value="name">Workspace Name</mat-option>
                                <mat-option value="slug">Slug</mat-option>
                                <mat-option value="organization">Organization</mat-option>
                                <mat-option value="createdAt">Created Date</mat-option>
                            </mat-select>
                            <mat-icon matPrefix>sort</mat-icon>
                        </mat-form-field>
                    </div>

                    <div class="col-auto mb-3 mb-xl-0 order-6 order-lg-5">
                        <button matIconButton (click)="toggleSortDirection()">
                            @if(sortDirection() === "asc") {
                            <span class="material-symbols-outlined">edit_arrow_down</span>
                            } @else {
                            <span class="material-symbols-outlined">edit_arrow_up</span>
                            }
                        </button>
                    </div>
                    }

                    <div class="col-auto order-2 order-lg-6 mb-3 mb-xl-0">
                        <button matIconButton (click)="toggleFilter()">
                            @if(filterOn()) {
                            <mat-icon class="material-icons-outlined">filter_alt_off</mat-icon>
                            } @else {
                            <mat-icon class="material-icons-outlined">filter_alt</mat-icon>
                            }
                        </button>
                    </div>
                </div>
            </mat-card>
        </div>

        <div class="container fade-in">
            @if(lastError()) {
            <mat-card class="mb-3 border theme-red">
                <mat-card-content>
                    <div class="d-flex align-items-start">
                        <mat-icon class="material-icons-outlined me-2 theme-red">error</mat-icon>
                        <div>
                            <p class="fw-medium mb-1">Workspace API Error</p>
                            <p class="small mb-0">{{ lastError() }}</p>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>
            }

            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-lg-6 col-xl-4">
                    <mat-card class="bg-theme text-white mb-3 mb-lg-4">
                        <mat-card-content>
                            <h1 class="mb-3">Create and organize<br />workspaces</h1>
                            <p class="opacity-75 mb-md-4 pb-lg-2">Create a workspace for your team and keep projects aligned inside the right organization context.</p>

                            @if (canCreateWorkspace()) {
                            <button matButton="elevated" (click)="openCreateWorkspaceDialog()"><mat-icon class="material-icons-outlined">add_circle</mat-icon> Workspace</button>
                            } @else {
                            <button matButton="elevated" disabled><mat-icon class="material-icons-outlined">lock</mat-icon> Workspace</button>
                            }
                            <button matButton="filled" class="ms-1" (click)="showCreateProjectPlaceholder()"><mat-icon class="material-icons-outlined">add</mat-icon> Create Project</button>
                            @if (!canCreateWorkspace()) {
                            <p class="small mt-2 mb-0 text-warning">Only SUPER_ADMIN, ADMIN, MANAGER, or TUTOR can create workspaces.</p>
                            }
                        </mat-card-content>
                    </mat-card>
                </div>

                <div class="col-12 col-lg-6 col-xl-8">
                    <div class="row gx-3">
                        <div class="col-6 col-md-3">
                            <mat-card class="mb-3 mb-lg-4" [class]="selectedCategory() === 'All' ? 'bg-theme text-white' : 'bg-light-theme text-theme'" (click)="selectedCategory.set('All')">
                                <mat-card-content>
                                    <h3 class="mb-1">{{ workspaceRows().length }}</h3>
                                    <p class="opacity-75">All</p>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-6 col-md-3">
                            <mat-card class="mb-3 mb-lg-4" [class]="selectedCategory() === 'Owned' ? 'bg-theme text-white' : 'bg-light-theme text-theme'" (click)="selectedCategory.set('Owned')">
                                <mat-card-content>
                                    <h3 class="mb-1">{{ ownedCount() }}</h3>
                                    <p class="opacity-75">Owned</p>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-6 col-md-3">
                            <mat-card class="mb-3 mb-lg-4" [class]="selectedCategory() === 'Other' ? 'bg-theme text-white' : 'bg-light-theme text-theme'" (click)="selectedCategory.set('Other')">
                                <mat-card-content>
                                    <h3 class="mb-1">{{ otherCount() }}</h3>
                                    <p class="opacity-75">Shared</p>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-6 col-md-3">
                            <mat-card class="mb-3 mb-lg-4 bg-light-theme text-theme">
                                <mat-card-content>
                                    <h3 class="mb-1">{{ organizationCount() }}</h3>
                                    <p class="opacity-75">Organizations</p>
                                </mat-card-content>
                            </mat-card>
                        </div>
                    </div>
                </div>
            </div>

            <mat-card class="mb-3 mb-lg-4">
                <mat-card-header>
                    <div class="w-100">
                        <div class="row gx-3 align-items-center">
                            <div class="col-auto mb-3">
                                <div class="avatar avatar-40 text-theme rounded">
                                    <mat-icon class="material-icons-outlined">grid_view</mat-icon>
                                </div>
                            </div>
                            <div class="col mb-3">
                                <h3 class="mb-1">Workspace Cards</h3>
                                <p class="text-secondary small">{{ filteredItems().length }} workspace(s) with current filters</p>
                            </div>
                        </div>
                    </div>
                </mat-card-header>
                <mat-card-content>
                    <div class="row gx-3 gx-lg-4">
                        @for (workspace of filteredItems(); track workspace.id) {
                        <div class="col-12 col-sm-6 col-lg-4">
                            <mat-card class="overflow-hidden mb-3 mb-lg-4" style="cursor: pointer" (click)="openWorkspaceDetails(workspace.id)">
                                <mat-card-content>
                                    <div class="d-flex align-items-start mb-3">
                                        <div class="avatar avatar-50 text-theme rounded bg-light-theme me-3">
                                            <mat-icon class="material-icons-outlined">workspaces</mat-icon>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h4 class="mb-1 text-truncated">{{ workspace.name }}</h4>
                                            <p class="text-secondary small mb-0">{{ workspace.slug }}</p>
                                        </div>
                                        <button matIconButton [matMenuTriggerFor]="workspaceActionMenu" (click)="selectWorkspaceForAction(workspace.id); $event.stopPropagation()"><mat-icon class="material-icons-outlined">more_vert</mat-icon></button>
                                    </div>

                                    <div class="row gx-2 mb-2">
                                        <div class="col-auto"><span class="badge badge-light">{{ workspace.organizationName }}</span></div>
                                        <div class="col-auto"><span class="badge" [ngClass]="workspace.ownerId === currentUserId() ? 'theme-green' : 'theme-orange'">{{ workspace.ownerId === currentUserId() ? 'Owner' : 'Member' }}</span></div>
                                    </div>

                                    <p class="text-secondary small mb-0">Created {{ workspace.createdAt }}</p>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        }

                        @if (!isLoading() && filteredItems().length === 0) {
                        <div class="col-12 text-center py-5">
                            <img src="assets/img/noproduct.png" alt="No workspace" class="width-300 mt-4" />
                            <h3 class="mb-1">No workspace found</h3>
                            <p class="text-secondary">Try changing filters or create a new workspace.</p>
                        </div>
                        }
                    </div>
                </mat-card-content>
            </mat-card>

            <mat-card>
                <mat-card-header>
                    <div class="w-100">
                        <div class="row gx-3 align-items-center">
                            <div class="col-auto mb-3">
                                <div class="avatar avatar-40 text-theme rounded">
                                    <mat-icon class="material-icons-outlined">dashboard</mat-icon>
                                </div>
                            </div>
                            <div class="col mb-3">
                                <h3 class="mb-1">Workspaces</h3>
                                <p class="text-secondary small">All visible workspaces grid list view</p>
                            </div>
                        </div>
                    </div>
                </mat-card-header>

                <table mat-table [dataSource]="dataSource" matSort class="bg-none mb-3 responsive-table">
                    <ng-container matColumnDef="name">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Workspace</th>
                        <td mat-cell *matCellDef="let item" class="py-2">
                            <p class="mat-mobile-label">Workspace</p>
                            <h4 class="mb-0">{{ item.name }}</h4>
                            <p class="text-secondary small mb-0">{{ item.slug }}</p>
                        </td>
                    </ng-container>

                    <ng-container matColumnDef="organization">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Organization</th>
                        <td mat-cell *matCellDef="let item" class="py-2">
                            <p class="mat-mobile-label">Organization</p>
                            {{ item.organizationName }}
                        </td>
                    </ng-container>

                    <ng-container matColumnDef="owner">
                        <th mat-header-cell *matHeaderCellDef>Owner</th>
                        <td mat-cell *matCellDef="let item" class="py-2">
                            <p class="mat-mobile-label">Owner</p>
                            <span class="badge" [ngClass]="item.ownerId === currentUserId() ? 'theme-green' : 'theme-orange'">{{ item.ownerId === currentUserId() ? 'You' : 'User #' + item.ownerId }}</span>
                        </td>
                    </ng-container>

                    <ng-container matColumnDef="createdAt">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Created</th>
                        <td mat-cell *matCellDef="let item" class="py-2">
                            <p class="mat-mobile-label">Created</p>
                            {{ item.createdAt }}
                        </td>
                    </ng-container>

                    <ng-container matColumnDef="actions">
                        <th mat-header-cell *matHeaderCellDef>Actions</th>
                        <td mat-cell *matCellDef="let item" class="py-2">
                            <button matIconButton [matMenuTriggerFor]="workspaceActionMenu" aria-label="Actions" (click)="selectWorkspaceForAction(item.id); $event.stopPropagation()">
                                <mat-icon class="material-icons-outlined">more_vert</mat-icon>
                            </button>
                        </td>
                    </ng-container>

                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                    <tr mat-row *matRowDef="let row; columns: displayedColumns" style="cursor: pointer" (click)="openWorkspaceDetails(row.id)"></tr>
                </table>

                <mat-card-content>
                    <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" aria-label="Select page"></mat-paginator>
                </mat-card-content>
            </mat-card>
        </div>

        <mat-menu #workspaceActionMenu="matMenu">
            <button mat-menu-item (click)="openSelectedWorkspaceDetails()">
                <mat-icon class="material-icons-outlined">open_in_new</mat-icon>
                <span>View details</span>
            </button>
            <button mat-menu-item (click)="openCreateWorkspaceDialog()">
                <mat-icon class="material-icons-outlined">edit</mat-icon>
                <span>Edit (placeholder)</span>
            </button>
            <button mat-menu-item (click)="showDeletePlaceholder()">
                <mat-icon class="material-icons-outlined">delete</mat-icon>
                <span>Delete (placeholder)</span>
            </button>
        </mat-menu>
    `,
})
export class M2WorkspacesComponent implements OnInit {
    private readonly workspaceService = inject(M2WorkspaceService);
    private readonly authService = inject(AuthService);
    private readonly dialog = inject(MatDialog);
    private readonly snackBar = inject(MatSnackBar);
    private readonly router = inject(Router);

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    readonly displayedColumns: string[] = ["name", "organization", "owner", "createdAt", "actions"];
    readonly dataSource = new MatTableDataSource<M2WorkspaceView>([]);

    readonly isLoading = signal(false);
    readonly filterOn = signal(true);
    readonly viewMode = signal<ViewMode>("week");
    readonly workspaceRows = signal<M2WorkspaceView[]>([]);
    readonly searchQuery = signal("");
    readonly sortColumn = signal<SortColumn>("name");
    readonly sortDirection = signal<SortDirection>("asc");
    readonly selectedCategory = signal<Category>("All");
    readonly selectedWorkspaceId = signal<string | null>(null);
    readonly lastError = signal<string | null>(null);
    readonly organizationOptions = signal<OrganizationOption[]>([]);

    readonly currentUserId = computed(() => this.authService.currentUser()?.id ?? null);
    readonly currentUserRole = computed(() => (this.authService.currentUser()?.role || "").toUpperCase());
    readonly organizationName = computed(() => this.authService.currentOrganization()?.organizationName || "Unknown");
    readonly currentOrganizationId = computed(() => this.authService.currentOrganization()?.organizationId || null);
    readonly organizationMembershipRole = computed(() => (this.authService.currentOrganization()?.membershipRole || "UNKNOWN").toUpperCase());
    readonly isGlobalAdmin = computed(() => this.currentUserRole() === "SUPER_ADMIN" || this.currentUserRole() === "ADMIN");
    readonly canCreateWorkspace = computed(() => {
        const userRole = this.currentUserRole();
        return userRole === "SUPER_ADMIN" || userRole === "ADMIN" || userRole === "MANAGER" || userRole === "TUTOR";
    });

    readonly filteredItems = computed(() => {
        const query = this.searchQuery().trim().toLowerCase();
        const category = this.selectedCategory();
        const sortColumn = this.sortColumn();
        const sortDirection = this.sortDirection();
        const currentUserId = this.currentUserId();

        const filtered = this.workspaceRows().filter((workspace) => {
            const matchesSearch =
                workspace.name.toLowerCase().includes(query) ||
                workspace.slug.toLowerCase().includes(query) ||
                workspace.organizationName.toLowerCase().includes(query);

            if (!matchesSearch) {
                return false;
            }

            if (category === "Owned") {
                return workspace.ownerId === currentUserId;
            }
            if (category === "Other") {
                return workspace.ownerId !== currentUserId;
            }
            return true;
        });

        const sorted = [...filtered].sort((a, b) => {
            let valueA = "";
            let valueB = "";

            switch (sortColumn) {
                case "name":
                    valueA = a.name;
                    valueB = b.name;
                    break;
                case "slug":
                    valueA = a.slug;
                    valueB = b.slug;
                    break;
                case "organization":
                    valueA = a.organizationName;
                    valueB = b.organizationName;
                    break;
                case "createdAt":
                    valueA = a.createdAt;
                    valueB = b.createdAt;
                    break;
            }

            return sortDirection === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        });

        return sorted;
    });

    readonly ownedCount = computed(() => this.workspaceRows().filter((row) => row.ownerId === this.currentUserId()).length);
    readonly otherCount = computed(() => this.workspaceRows().filter((row) => row.ownerId !== this.currentUserId()).length);
    readonly organizationCount = computed(() => new Set(this.workspaceRows().map((row) => row.organizationName)).size);

    constructor() {
        effect(() => {
            this.dataSource.data = this.filteredItems();
            if (this.paginator) {
                this.dataSource.paginator = this.paginator;
            }
            if (this.sort) {
                this.dataSource.sort = this.sort;
            }
        });
    }

    ngOnInit(): void {
        this.loadOrganizationOptionsForCreate();
        this.loadWorkspaces();
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (item: M2WorkspaceView, property: string): string | number => {
            switch (property) {
                case "name":
                    return item.name;
                case "organization":
                    return item.organizationName;
                case "createdAt":
                    return item.createdAt;
                default:
                    return "";
            }
        };
    }

    toggleFilter(): void {
        this.filterOn.set(!this.filterOn());
    }

    toggleSortDirection(): void {
        this.sortDirection.set(this.sortDirection() === "asc" ? "desc" : "asc");
    }

    openCreateWorkspaceDialog(): void {
        if (!this.canCreateWorkspace()) {
            this.snackBar.open("You do not have permission to create workspaces for your role.", "Close", { duration: 5000 });
            return;
        }

        if (this.isGlobalAdmin() && this.organizationOptions().length === 0) {
            this.snackBar.open("No organizations available for selection.", "Close", { duration: 5000 });
            return;
        }

        const ref = this.dialog.open(M2CreateWorkspaceDialogComponent, {
            width: "520px",
            maxWidth: "95vw",
            panelClass: "custom-dialog-container",
            autoFocus: false,
            data: {
                canSelectOrganization: this.isGlobalAdmin(),
                organizationOptions: this.organizationOptions(),
                defaultOrganizationId: this.currentOrganizationId(),
                defaultOrganizationName: this.organizationName(),
            } as M2CreateWorkspaceDialogData,
        });

        ref.afterClosed().subscribe((result?: M2CreateWorkspaceRequest) => {
            if (!result || !result.name?.trim()) {
                return;
            }

            const payload: M2CreateWorkspaceRequest = {
                ...result,
                organizationId: this.isGlobalAdmin()
                    ? result.organizationId
                    : this.currentOrganizationId() || undefined,
            };

            if (this.isGlobalAdmin() && !payload.organizationId) {
                this.snackBar.open("Select an organization before creating a workspace.", "Close", { duration: 5000 });
                return;
            }

            console.log("[M2Workspaces] createWorkspace payload fields", payload);

            this.workspaceService.createWorkspace(payload).subscribe({
                next: () => {
                    console.log("[M2Workspaces] createWorkspace success", payload);
                    this.snackBar.open("Workspace created successfully", "Close", { duration: 3000 });
                    this.loadWorkspaces();
                },
                error: (error: HttpErrorResponse) => {
                    const detail = this.getApiErrorDetail(error);
                    if (error.status === 403) {
                        this.snackBar.open("Workspace creation is forbidden for your current role.", "Close", { duration: 5000 });
                    } else {
                        this.snackBar.open(`Failed to create workspace (${detail})`, "Close", { duration: 5000 });
                    }
                    console.error("[M2Workspaces] createWorkspace failed", {
                        status: error.status,
                        url: error.url,
                        error: error.error,
                        organization: this.organizationName(),
                        orgRole: this.organizationMembershipRole(),
                    });
                },
            });
        });
    }

    private loadOrganizationOptionsForCreate(): void {
        this.authService.fetchOrganizationOptions().subscribe({
            next: (rows) => {
                this.organizationOptions.set(rows);
                console.log("[M2Workspaces] organization options raw", rows);
                rows.forEach((row, index) => {
                    console.log(`[M2Workspaces] organization option[${index}] fields`, {
                        organizationId: row.organizationId,
                        organizationName: row.organizationName,
                        organizationSlug: row.organizationSlug,
                        organizationType: row.organizationType,
                        membershipRole: row.membershipRole,
                    });
                });
            },
            error: (error: HttpErrorResponse) => {
                console.error("[M2Workspaces] loadOrganizationOptionsForCreate failed", {
                    status: error.status,
                    url: error.url,
                    error: error.error,
                });
            },
        });
    }

    showCreateProjectPlaceholder(): void {
        this.snackBar.open("Create Project integration comes in the next step.", "Close", { duration: 3000 });
    }

    showDeletePlaceholder(): void {
        this.snackBar.open("Delete workspace flow is not part of this step.", "Close", { duration: 3000 });
    }

    openWorkspaceDetails(workspaceId: string): void {
        this.router.navigate(["/app/workspace-details", workspaceId]);
    }

    selectWorkspaceForAction(workspaceId: string): void {
        this.selectedWorkspaceId.set(workspaceId);
    }

    openSelectedWorkspaceDetails(): void {
        const workspaceId = this.selectedWorkspaceId();
        if (!workspaceId) {
            this.snackBar.open("Select a workspace first", "Close", { duration: 2500 });
            return;
        }
        this.openWorkspaceDetails(workspaceId);
    }

    private loadWorkspaces(): void {
        this.isLoading.set(true);
        this.lastError.set(null);
        this.workspaceService.getWorkspaces().subscribe({
            next: (rows: M2Workspace[]) => {
                console.log("[M2Workspaces] getWorkspaces raw response", rows);
                rows.forEach((row, index) => {
                    console.log(`[M2Workspaces] workspace row[${index}] fields`, {
                        id: row.id,
                        name: row.name,
                        slug: row.slug,
                        ownerId: row.ownerId,
                        createdAt: row.createdAt,
                        organizationId: row.organization?.id,
                        organizationName: row.organization?.name,
                        organizationSlug: row.organization?.slug,
                    });
                });

                this.workspaceRows.set(rows.map((workspace) => this.mapWorkspaceRow(workspace)));
                this.isLoading.set(false);
            },
            error: (error: HttpErrorResponse) => {
                this.workspaceRows.set([]);
                this.isLoading.set(false);

                const detail = this.getApiErrorDetail(error);

                console.error("[M2Workspaces] loadWorkspaces failed", {
                    status: error.status,
                    url: error.url,
                    error: error.error,
                    organization: this.organizationName(),
                });

                this.lastError.set(detail);
                this.snackBar.open(`Failed to load workspaces (${detail})`, "Close", { duration: 6000 });
            },
        });
    }

    private getApiErrorDetail(error: HttpErrorResponse): string {
        const apiMessage = (error?.error && (error.error.message || error.error.error)) || error.message || "Request failed";
        return `status=${error.status || 0} message=${apiMessage}`;
    }

    private mapWorkspaceRow(workspace: M2Workspace): M2WorkspaceView {
        const createdAt = workspace.createdAt ? new Date(workspace.createdAt) : null;
        const row = {
            id: workspace.id,
            name: workspace.name,
            slug: workspace.slug,
            ownerId: workspace.ownerId,
            organizationName: workspace.organization?.name || "Organization",
            createdAt: createdAt ? createdAt.toLocaleDateString() : "-",
        };
        console.log("[M2Workspaces] mapped workspace view row", row);
        return row;
    }
}
