import { CommonModule } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, computed, inject, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { forkJoin, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { M2AvailableWorkspaceMember, M2ProjectMember, M2ProjectService, M2ProjectSummary } from "./m2-project.service";
import { ProjectAddMemberModalComponent, ProjectAddMemberModalResult } from "./project-add-member-modal.component";
import { ProjectMemberCardComponent } from "./project-member-card.component";
import { ProjectMemberRoleEditDialogComponent, ProjectMemberRoleEditDialogResult } from "./project-member-role-edit-dialog.component";
import { ProjectMemberUnassignDialogComponent, ProjectMemberUnassignDialogResult } from "./project-member-unassign-dialog.component";
import { ProjectPermissionService } from "./project-permission.service";
import { M2WorkspaceMember, M2WorkspaceService } from "../m2-workspaces/m2-workspace.service";
import { AuthService } from "../../../auth/auth.service";

interface ProjectMemberView {
    userId: number;
    fullName: string;
    email: string;
    avatarUrl: string;
    role: string;
    assignedAt: string;
}

@Component({
    selector: "app-project-details",
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        ProjectMemberCardComponent,
    ],
    template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col-12 col-md mb-3 mb-xl-0 py-1 order-1 order-lg-1">
                        <h3 class="mb-1">Real Project: {{ project()?.name || "Details" }}</h3>
                        <p class="small mb-0">
                            <span routerLink="/app/dashboard" class="me-2 text-theme style-none"><mat-icon class="material-icons-outlined align-middle text-sm">house</mat-icon> Home</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            <span routerLink="/app/real-projects" class="me-2 text-theme style-none">Real Projects</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            Project Details
                        </p>
                    </div>

                    <div class="col-auto order-2 order-lg-5 mb-3 mb-xl-0">
                        <button matButton (click)="backToRealProjects()"><mat-icon class="material-icons-outlined">arrow_back</mat-icon> Back</button>
                        <button matButton class="ms-1" (click)="refresh()"><mat-icon class="material-icons-outlined">refresh</mat-icon> Refresh</button>
                        <button matButton="filled" class="ms-1" [disabled]="!canManageProjects()" (click)="openAddMemberDialog()">
                            <mat-icon class="material-icons-outlined">person_add</mat-icon>
                            Add Member
                        </button>
                    </div>
                </div>
            </mat-card>
        </div>

        <div class="container fade-in">
            @if (isLoading()) {
            <mat-card class="mb-3 mb-lg-4">
                <mat-card-content>
                    <p class="mb-0">Loading project details...</p>
                </mat-card-content>
            </mat-card>
            }

            @if (error()) {
            <mat-card class="mb-3 mb-lg-4 border theme-red">
                <mat-card-content>
                    <div class="d-flex align-items-start">
                        <mat-icon class="material-icons-outlined me-2 theme-red">error</mat-icon>
                        <div>
                            <p class="fw-medium mb-1">Project details error</p>
                            <p class="small mb-0">{{ error() }}</p>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>
            }

            @if (project()) {
            <div class="row gx-3 gx-lg-4 mb-3">
                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">{{ members().length }}</h1>
                            <p class="small text-secondary">Project Members</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6"><p class="text-secondary">Workspace:</p></div>
                                <div class="col"><h3>{{ workspaceName() }}</h3></div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>

                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">{{ availableMembers().length }}</h1>
                            <p class="small text-secondary">Available to Add</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6"><p class="text-secondary">Org Type:</p></div>
                                <div class="col"><h3>{{ workspaceOrgType() }}</h3></div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>

                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">{{ projectVisibility() }}</h1>
                            <p class="small text-secondary">Visibility</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6"><p class="text-secondary">Status:</p></div>
                                <div class="col"><h3>{{ projectStatus() }}</h3></div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>

                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">{{ canManageProjects() ? "FULL" : "READ" }}</h1>
                            <p class="small text-secondary">Access</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6"><p class="text-secondary">Created:</p></div>
                                <div class="col"><h3>{{ createdAtLabel() }}</h3></div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>

            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-lg-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h3 class="mb-1">{{ project()?.name }}</h3>
                            <p class="text-secondary small mb-2">Workspace: {{ workspaceName() }}</p>

                            <div class="d-flex gap-2 align-items-center mb-3">
                                <span class="badge" [ngClass]="visibilityClass(projectVisibility())">{{ projectVisibility() }}</span>
                                <span class="badge" [ngClass]="statusClass(projectStatus())">{{ projectStatus() }}</span>
                            </div>

                            <p class="small mb-3">{{ project()?.description || "No description available." }}</p>

                            <button matButton="filled" class="mb-3" [disabled]="!canManageProjects()" (click)="archiveProject()">
                                <mat-icon class="material-icons-outlined">archive</mat-icon>
                                Archive Project
                            </button>
                        </mat-card-content>
                    </mat-card>
                </div>

                <div class="col-12 col-lg-8">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <h3 class="mb-1">Members</h3>
                                    <p class="text-secondary small mb-0">Live project members with workspace-style management</p>
                                </div>
                                <button matButton="filled" [disabled]="!canManageProjects() || availableMembers().length === 0" (click)="openAddMemberDialog()">
                                    <mat-icon class="material-icons-outlined">person_add</mat-icon>
                                    Add Member
                                </button>
                            </div>

                            <div class="row gx-2 mb-3">
                                <div class="col-6 col-lg-3">
                                    <mat-card class="bg-light-theme">
                                        <mat-card-content class="py-2">
                                            <p class="small text-secondary mb-1">Leads</p>
                                            <h4 class="mb-0">{{ leadershipCount() }}</h4>
                                        </mat-card-content>
                                    </mat-card>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <mat-card class="bg-light-theme">
                                        <mat-card-content class="py-2">
                                            <p class="small text-secondary mb-1">Contributors</p>
                                            <h4 class="mb-0">{{ contributorCount() }}</h4>
                                        </mat-card-content>
                                    </mat-card>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <mat-card class="bg-light-theme">
                                        <mat-card-content class="py-2">
                                            <p class="small text-secondary mb-1">Joined Last 7d</p>
                                            <h4 class="mb-0">{{ joinedLast7DaysCount() }}</h4>
                                        </mat-card-content>
                                    </mat-card>
                                </div>
                                <div class="col-6 col-lg-3">
                                    <mat-card class="bg-light-theme">
                                        <mat-card-content class="py-2">
                                            <p class="small text-secondary mb-1">Available to Add</p>
                                            <h4 class="mb-0">{{ availableMembers().length }}</h4>
                                        </mat-card-content>
                                    </mat-card>
                                </div>
                            </div>

                            @if (members().length === 0) {
                            <p class="text-secondary mb-3">No members assigned to this project yet.</p>
                            } @else {
                            @for (member of members(); track member.userId) {
                            <app-project-member-card
                                [member]="member"
                                [canEditRole]="canEditMemberRole(member)"
                                [canRemoveMember]="canRemoveMember(member)"
                                (editRole)="openRoleEditDialog($event)"
                                (removeMember)="openRemoveMemberDialog($event)"></app-project-member-card>
                            }
                            }
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
            }
        </div>
    `,
})
export class ProjectDetailsComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly dialog = inject(MatDialog);
    private readonly snackBar = inject(MatSnackBar);
    private readonly projectService = inject(M2ProjectService);
    private readonly workspaceService = inject(M2WorkspaceService);
    private readonly permissionService = inject(ProjectPermissionService);
    private readonly authService = inject(AuthService);

    readonly isLoading = signal(true);
    readonly error = signal<string | null>(null);

    readonly workspaceId = signal("");
    readonly projectId = signal("");

    readonly project = signal<M2ProjectSummary | null>(null);
    readonly workspaceName = signal("-");
    readonly workspaceOrgType = signal("enterprise");

    readonly members = signal<ProjectMemberView[]>([]);
    readonly availableMembers = signal<M2AvailableWorkspaceMember[]>([]);

    readonly canManageProjects = computed(() => this.permissionService.canManageProject());
    readonly projectStatus = computed(() => (this.project()?.status || "PLANNING").toUpperCase());
    readonly projectVisibility = computed(() => (this.project()?.visibility || "PRIVATE").toUpperCase());
    readonly leadershipCount = computed(() => this.members().filter((m) => this.isManageRole(m.role)).length);
    readonly contributorCount = computed(() => Math.max(0, this.members().length - this.leadershipCount()));
    readonly joinedLast7DaysCount = computed(() => this.members().filter((m) => this.isJoinedWithinDays(m.assignedAt, 7)).length);
    readonly createdAtLabel = computed(() => {
        const createdAt = this.project()?.createdAt;
        return createdAt ? new Date(createdAt).toLocaleDateString() : "-";
    });

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const workspaceId = params.get("workspaceId") || "";
            const projectId = params.get("projectId") || "";

            if (!workspaceId || !projectId) {
                this.error.set("Missing workspaceId or projectId in route.");
                this.isLoading.set(false);
                return;
            }

            this.workspaceId.set(workspaceId);
            this.projectId.set(projectId);
            this.loadData();
        });
    }

    refresh(): void {
        this.loadData();
    }

    backToRealProjects(): void {
        this.router.navigate(["/app/real-projects"]);
    }

    openAddMemberDialog(): void {
        if (!this.canManageProjects()) {
            return;
        }

        const available = this.availableMembers();
        if (available.length === 0) {
            this.snackBar.open("No workspace members are available to add.", "Close", { duration: 3200 });
            return;
        }

        const ref = this.dialog.open(ProjectAddMemberModalComponent, {
            width: "560px",
            maxWidth: "95vw",
            data: {
                orgType: this.workspaceOrgType(),
                members: available,
            },
        });

        ref.afterClosed().subscribe((result?: ProjectAddMemberModalResult) => {
            if (!result?.userId || !result.role) {
                return;
            }

            this.projectService.addProjectMember(this.workspaceId(), this.projectId(), result.userId, result.role).subscribe({
                next: () => {
                    this.snackBar.open("Project member added.", "Close", { duration: 3000 });
                    this.loadData();
                },
                error: (error: HttpErrorResponse) => {
                    this.snackBar.open(`Failed to add project member: ${this.errorMessage(error)}`, "Close", { duration: 4200 });
                },
            });
        });
    }

    openRoleEditDialog(member: ProjectMemberView): void {
        if (!this.canEditMemberRole(member)) {
            return;
        }

        const ref = this.dialog.open(ProjectMemberRoleEditDialogComponent, {
            width: "520px",
            maxWidth: "95vw",
            data: {
                memberName: member.fullName,
                currentRole: member.role,
                orgType: this.workspaceOrgType(),
            },
        });

        ref.afterClosed().subscribe((result?: ProjectMemberRoleEditDialogResult) => {
            if (!result?.role) {
                return;
            }

            this.projectService.updateProjectMemberRole(this.workspaceId(), this.projectId(), member.userId, result.role).subscribe({
                next: () => {
                    this.snackBar.open("Project member role updated.", "Close", { duration: 3000 });
                    this.loadData();
                },
                error: (error: HttpErrorResponse) => {
                    this.snackBar.open(`Failed to update project member role: ${this.errorMessage(error)}`, "Close", { duration: 4200 });
                },
            });
        });
    }

    openRemoveMemberDialog(member: ProjectMemberView): void {
        if (!this.canRemoveMember(member)) {
            return;
        }

        const ref = this.dialog.open(ProjectMemberUnassignDialogComponent, {
            width: "520px",
            maxWidth: "95vw",
            data: {
                memberName: member.fullName,
                projectName: this.project()?.name || "Project",
            },
        });

        ref.afterClosed().subscribe((result?: ProjectMemberUnassignDialogResult) => {
            if (!result?.confirm) {
                return;
            }

            this.projectService.removeProjectMember(this.workspaceId(), this.projectId(), member.userId).subscribe({
                next: () => {
                    this.snackBar.open("Project member removed.", "Close", { duration: 3000 });
                    this.loadData();
                },
                error: (error: HttpErrorResponse) => {
                    this.snackBar.open(`Failed to remove project member: ${this.errorMessage(error)}`, "Close", { duration: 4200 });
                },
            });
        });
    }

    archiveProject(): void {
        if (!this.canManageProjects()) {
            return;
        }

        this.projectService.archiveProject(this.workspaceId(), this.projectId()).subscribe({
            next: () => {
                this.snackBar.open("Project archived.", "Close", { duration: 3200 });
                this.loadData();
            },
            error: (error: HttpErrorResponse) => {
                this.snackBar.open(`Failed to archive project: ${this.errorMessage(error)}`, "Close", { duration: 4200 });
            },
        });
    }

    statusClass(status: string): string {
        const normalized = (status || "").toUpperCase();
        if (normalized === "ACTIVE") {
            return "theme-green";
        }
        if (normalized === "ON_HOLD") {
            return "theme-orange";
        }
        if (normalized === "COMPLETED" || normalized === "ARCHIVED") {
            return "theme-blue";
        }
        return "badge-light";
    }

    visibilityClass(visibility: string): string {
        return visibility === "PRIVATE" ? "theme-orange" : "theme-green";
    }

    canEditMemberRole(member: ProjectMemberView): boolean {
        if (!this.canManageProjects()) {
            return false;
        }
        const currentUserId = this.authService.currentUser()?.id;
        return !(currentUserId && member.userId === currentUserId);
    }

    canRemoveMember(member: ProjectMemberView): boolean {
        if (!this.canManageProjects()) {
            return false;
        }
        const currentUserId = this.authService.currentUser()?.id;
        return !(currentUserId && member.userId === currentUserId);
    }

    private loadData(): void {
        const workspaceId = this.workspaceId();
        const projectId = this.projectId();
        if (!workspaceId || !projectId) {
            return;
        }

        this.isLoading.set(true);
        this.error.set(null);

        forkJoin({
            project: this.projectService.getProjectById(workspaceId, projectId),
            projectMembers: this.projectService.getProjectMembers(workspaceId, projectId),
            availableMembers: this.projectService.getAvailableWorkspaceMembers(workspaceId, projectId).pipe(catchError(() => of([]))),
            workspace: this.workspaceService.getWorkspaceById(workspaceId).pipe(catchError(() => of(null))),
            workspaceMembers: this.workspaceService.getWorkspaceMembers(workspaceId).pipe(catchError(() => of([]))),
        }).subscribe({
            next: (payload) => {
                this.project.set(payload.project);
                this.availableMembers.set(payload.availableMembers);

                this.workspaceName.set(payload.workspace?.name || "Workspace");
                this.workspaceOrgType.set(((payload.workspace?.orgType || "enterprise") + "").toLowerCase());

                this.members.set(this.mapProjectMembers(payload.projectMembers, payload.workspaceMembers));
                this.isLoading.set(false);
            },
            error: (error: HttpErrorResponse) => {
                this.project.set(null);
                this.members.set([]);
                this.availableMembers.set([]);
                this.error.set(this.errorMessage(error));
                this.isLoading.set(false);
            },
        });
    }

    private mapProjectMembers(projectMembers: M2ProjectMember[], workspaceMembers: M2WorkspaceMember[]): ProjectMemberView[] {
        const profileByUserId = new Map<number, M2WorkspaceMember>();
        for (const member of workspaceMembers || []) {
            profileByUserId.set(member.userId, member);
        }

        return (projectMembers || []).map((member) => {
            const profile = profileByUserId.get(member.userId);
            return {
                userId: member.userId,
                fullName: profile?.user?.fullName || `User #${member.userId}`,
                email: profile?.user?.email || "",
                avatarUrl: profile?.user?.avatarUrl || "",
                role: (member.role || "DEVELOPER").toUpperCase(),
                assignedAt: member.assignedAt || "",
            };
        });
    }

    private isManageRole(role: string): boolean {
        const normalized = (role || "").toUpperCase();
        return normalized === "PROJECT_MANAGER" || normalized === "PROFESSOR";
    }

    private isJoinedWithinDays(value: string | undefined, days: number): boolean {
        if (!value) {
            return false;
        }
        const ts = Date.parse(value);
        if (Number.isNaN(ts)) {
            return false;
        }
        const diff = Date.now() - ts;
        return diff >= 0 && diff <= days * 24 * 60 * 60 * 1000;
    }

    private errorMessage(error: HttpErrorResponse): string {
        const message = (error?.error && (error.error.message || error.error.error)) || error.message || "Request failed";
        return `status=${error.status || 0} message=${message}`;
    }
}
