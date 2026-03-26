import { CommonModule } from "@angular/common";
import { Component, OnInit, computed, inject, signal } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { catchError, forkJoin, of } from "rxjs";
import { M2ProjectSummary, M2Workspace, M2WorkspaceMember, M2WorkspaceService } from "./m2-workspace.service";

@Component({
    selector: "app-m2-workspace-details",
    standalone: true,
    imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatButtonModule, MatProgressBarModule, MatTabsModule, MatSnackBarModule],
    template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col-12 col-md mb-3 mb-xl-0 py-1 order-1 order-lg-1">
                        <h3 class="mb-1">Workspace: {{ workspace()?.name || 'Details' }}</h3>
                        <p class="small">
                            <span routerLink="/app/dashboard" class="me-2 text-theme style-none"><mat-icon class="material-icons-outlined align-middle text-sm">house</mat-icon> Home</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            <span routerLink="/app/workspaces" class="me-2 text-theme style-none">Workspaces</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            Workspace Details
                        </p>
                    </div>

                    <div class="col-auto order-2 order-lg-5 mb-3 mb-xl-0">
                        <button matButton (click)="backToWorkspaces()"><mat-icon class="material-icons-outlined">arrow_back</mat-icon> Back</button>
                        <button matButton="filled" class="ms-1" (click)="refresh()"><mat-icon class="material-icons-outlined">refresh</mat-icon> Refresh</button>
                    </div>
                </div>
            </mat-card>
        </div>

        <div class="container fade-in">
            @if (isLoading()) {
            <mat-card class="mb-3 mb-lg-4">
                <mat-card-content>
                    <p class="mb-0">Loading workspace details...</p>
                </mat-card-content>
            </mat-card>
            }

            @if (error()) {
            <mat-card class="mb-3 mb-lg-4 border theme-red">
                <mat-card-content>
                    <div class="d-flex align-items-start">
                        <mat-icon class="material-icons-outlined me-2 theme-red">error</mat-icon>
                        <div>
                            <p class="fw-medium mb-1">Workspace details error</p>
                            <p class="small mb-0">{{ error() }}</p>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>
            }

            @if (workspace()) {
            <div class="row gx-3 gx-lg-4">
                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">{{ totalMembers() }}</h1>
                            <p class="small text-secondary">Members</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6"><p class="text-secondary">Owners:</p></div>
                                <div class="col"><h3>{{ ownerCount() }}</h3></div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>

                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">{{ totalProjects() }}</h1>
                            <p class="small text-secondary">Projects</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6"><p class="text-secondary">Active:</p></div>
                                <div class="col"><h3>{{ activeProjects() }}</h3></div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>

                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">{{ completionPercent() }}%</h1>
                            <p class="small text-secondary">Completion</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6"><p class="text-secondary">Completed:</p></div>
                                <div class="col"><h3>{{ completedProjects() }}</h3></div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>

                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">{{ workspaceTypeLabel() }}</h1>
                            <p class="small text-secondary">Workspace Type</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6"><p class="text-secondary">Created:</p></div>
                                <div class="col"><h3>{{ createdDateLabel() }}</h3></div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>

            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-lg-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <div mat-card-image class="w-100 height-200 coverimg mb-3 bg-light-theme d-flex align-items-center justify-content-center">
                            <mat-icon class="material-icons-outlined fs-1 text-theme">workspaces</mat-icon>
                        </div>
                        <mat-card-content class="pb-0">
                            <h3 class="mb-1">{{ workspace()?.name }}</h3>
                            <p class="text-secondary">{{ workspace()?.organization?.name || 'Organization' }}</p>
                            <br />
                            <h4 class="mb-3">Workspace Details</h4>

                            <div class="row gx-3 mb-3">
                                <div class="col-4"><p class="text-secondary">Slug</p></div>
                                <div class="col-8"><p>{{ workspace()?.slug }}</p></div>
                            </div>

                            <div class="row gx-3 mb-3">
                                <div class="col-4"><p class="text-secondary">Org Type</p></div>
                                <div class="col-8">
                                    <span class="badge badge-light" [ngClass]="workspaceTypeLabel() === 'Academic' ? 'theme-green' : 'theme-blue'">{{ workspaceTypeLabel() }}</span>
                                </div>
                            </div>

                            <div class="row gx-3 mb-3">
                                <div class="col-4"><p class="text-secondary">Owner</p></div>
                                <div class="col-8"><p>User #{{ workspace()?.ownerId }}</p></div>
                            </div>

                            <div class="row gx-3 mb-2">
                                <div class="col-4"><p class="text-secondary">Health</p></div>
                                <div class="col-8">
                                    <p class="mb-1">{{ completionPercent() }} %</p>
                                    <mat-progress-bar class="mb-2" mode="determinate" [value]="completionPercent()"></mat-progress-bar>
                                </div>
                            </div>
                            <br />

                            <h4 class="mb-3">Owner Member</h4>
                            @if (ownerMember()) {
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 text-theme rounded-circle align-middle me-2 bg-light-theme d-flex align-items-center justify-content-center">
                                    <mat-icon class="material-icons-outlined">person</mat-icon>
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">{{ ownerMember()!.user?.fullName || ('User #' + ownerMember()!.userId) }}</p>
                                    <p class="text-secondary small">{{ ownerMember()!.user?.email || 'Workspace Owner' }}</p>
                                </span>
                            </div>
                            } @else {
                            <p class="text-secondary small">Owner membership data is not available.</p>
                            }
                        </mat-card-content>
                    </mat-card>
                </div>

                <div class="col-12 col-lg-8">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="p-0">
                            <mat-tab-group animationDuration="300ms">
                                <mat-tab>
                                    <ng-template mat-tab-label>
                                        <mat-icon class="me-2">groups</mat-icon>
                                        Members <span class="badge badge-light ms-2">{{ totalMembers() }}</span>
                                    </ng-template>

                                    <div class="px-3 py-3">
                                        @if (members().length === 0) {
                                        <p class="text-secondary mb-0">No members found for this workspace.</p>
                                        } @else {
                                        @for (member of members(); track member.id) {
                                        <div class="d-flex align-items-center border-bottom py-2">
                                            <span class="avatar avatar-40 text-theme rounded-circle align-middle me-2 bg-light-theme d-flex align-items-center justify-content-center">
                                                <mat-icon class="material-icons-outlined">person</mat-icon>
                                            </span>
                                            <span class="align-middle d-inline-block flex-grow-1">
                                                <p class="mb-1">{{ member.user?.fullName || ('User #' + member.userId) }}</p>
                                                <p class="text-secondary small mb-0">{{ member.user?.email || 'No email available' }}</p>
                                            </span>
                                            <span class="badge badge-light" [ngClass]="member.role === 'OWNER' ? 'theme-green' : 'theme-blue'">{{ member.role }}</span>
                                        </div>
                                        }
                                        }
                                    </div>
                                </mat-tab>

                                <mat-tab>
                                    <ng-template mat-tab-label>
                                        <mat-icon class="me-2">assignment</mat-icon>
                                        Projects <span class="badge badge-light ms-2">{{ totalProjects() }}</span>
                                    </ng-template>

                                    <div class="px-3 py-3">
                                        @if (projects().length === 0) {
                                        <p class="text-secondary mb-0">No projects found for this workspace.</p>
                                        } @else {
                                        <div class="row gx-3">
                                            @for (project of projects(); track project.id) {
                                            <div class="col-12 col-md-6">
                                                <mat-card class="mb-3 bg-light-theme">
                                                    <mat-card-content>
                                                        <h4 class="mb-1">{{ project.name }}</h4>
                                                        <p class="text-secondary small mb-2">{{ project.description || 'No description' }}</p>
                                                        <div class="d-flex gap-2 align-items-center">
                                                            <span class="badge badge-light">{{ project.status || 'UNKNOWN' }}</span>
                                                            <span class="badge" [ngClass]="project.visibility === 'PRIVATE' ? 'theme-orange' : 'theme-green'">{{ project.visibility || 'PRIVATE' }}</span>
                                                        </div>
                                                    </mat-card-content>
                                                </mat-card>
                                            </div>
                                            }
                                        </div>
                                        }
                                    </div>
                                </mat-tab>
                            </mat-tab-group>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
            }
        </div>
    `,
})
export class M2WorkspaceDetailsComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly workspaceService = inject(M2WorkspaceService);
    private readonly snackBar = inject(MatSnackBar);

    readonly workspace = signal<M2Workspace | null>(null);
    readonly members = signal<M2WorkspaceMember[]>([]);
    readonly projects = signal<M2ProjectSummary[]>([]);
    readonly isLoading = signal<boolean>(true);
    readonly error = signal<string | null>(null);

    readonly totalMembers = computed(() => this.members().length);
    readonly ownerCount = computed(() => this.members().filter((m) => m.role === "OWNER").length);
    readonly totalProjects = computed(() => this.projects().length);
    readonly activeProjects = computed(() => this.projects().filter((p) => this.normalizeStatus(p.status) === "ACTIVE").length);
    readonly completedProjects = computed(() => this.projects().filter((p) => {
        const status = this.normalizeStatus(p.status);
        return status === "COMPLETED" || status === "ARCHIVED";
    }).length);
    readonly completionPercent = computed(() => {
        const total = this.totalProjects();
        if (total === 0) {
            return 0;
        }
        return Math.round((this.completedProjects() / total) * 100);
    });
    readonly ownerMember = computed(() => this.members().find((m) => m.role === "OWNER") || null);

    readonly workspaceTypeLabel = computed(() => {
        const workspace = this.workspace();
        if (!workspace) {
            return "Unknown";
        }
        const value = (workspace.orgType || workspace.organization?.orgType || "enterprise").toString().toUpperCase();
        return value === "ACADEMIC" ? "Academic" : "Enterprise";
    });

    readonly createdDateLabel = computed(() => {
        const createdAt = this.workspace()?.createdAt;
        return createdAt ? new Date(createdAt).toLocaleDateString() : "-";
    });

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const workspaceId = params.get("workspaceId");
            if (!workspaceId) {
                this.error.set("Missing workspace id in route");
                this.isLoading.set(false);
                return;
            }
            this.loadWorkspaceDetails(workspaceId);
        });
    }

    refresh(): void {
        const workspaceId = this.route.snapshot.paramMap.get("workspaceId");
        if (!workspaceId) {
            return;
        }
        this.loadWorkspaceDetails(workspaceId);
    }

    backToWorkspaces(): void {
        this.router.navigate(["/app/workspaces"]);
    }

    private loadWorkspaceDetails(workspaceId: string): void {
        this.isLoading.set(true);
        this.error.set(null);

        forkJoin({
            workspace: this.workspaceService.getWorkspaceById(workspaceId),
            members: this.workspaceService.getWorkspaceMembers(workspaceId).pipe(catchError(() => of([]))),
            projectsPage: this.workspaceService.getWorkspaceProjects(workspaceId).pipe(catchError(() => of({ content: [] }))),
        }).subscribe({
            next: ({ workspace, members, projectsPage }) => {
                this.workspace.set(workspace);
                this.members.set(members);
                this.projects.set(projectsPage?.content || []);
                this.isLoading.set(false);
            },
            error: (error) => {
                const message = this.toErrorMessage(error);
                this.error.set(message);
                this.isLoading.set(false);
                this.snackBar.open(`Failed to load workspace details (${message})`, "Close", { duration: 5000 });
            },
        });
    }

    private normalizeStatus(value?: string): string {
        return (value || "").toUpperCase().trim();
    }

    private toErrorMessage(error: unknown): string {
        if (!error || typeof error !== "object") {
            return "Unknown error";
        }
        const typedError = error as { status?: number; message?: string; error?: { message?: string; error?: string } };
        const message = typedError?.error?.message || typedError?.error?.error || typedError?.message || "Request failed";
        return `status=${typedError.status || 0} message=${message}`;
    }
}
