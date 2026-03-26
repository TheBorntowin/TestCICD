import { CommonModule } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, computed, inject, signal } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTabChangeEvent, MatTabsModule } from "@angular/material/tabs";
import { forkJoin, of } from "rxjs";
import { catchError, take } from "rxjs/operators";
import { AuthService } from "../../../auth/auth.service";
import { CircleProgressBlueComponent } from "../../../components/charts/circle-progress-blue.component";
import { InviteMemberModalComponent } from "./invite-member-modal.component";
import { WorkspaceMember, WorkspaceMemberCapacity } from "./models/workspace-member.model";
import { M2ProjectSummary, M2Workspace, M2WorkspaceService } from "./m2-workspace.service";
import { WorkspaceMemberService } from "./services/workspace-member.service";
import { WorkspaceMemberCardComponent } from "./workspace-member-card.component";
import { WorkspacePermissionService } from "./workspace-permission.service";

interface WorkspaceActivity {
    id: string;
    icon: string;
    user: string;
    action: string;
    target: string;
    timestamp: number;
}

@Component({
    selector: "app-m2-workspace-details",
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule,
        MatTabsModule,
        MatSnackBarModule,
        CircleProgressBlueComponent,
        WorkspaceMemberCardComponent,
    ],
    template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col-12 col-md mb-3 mb-xl-0 py-1 order-1 order-lg-1">
                        <h3 class="mb-1">Workspace: {{ workspace()?.name || "Details" }}</h3>
                        <p class="small mb-0">
                            <span routerLink="/app/dashboard" class="me-2 text-theme style-none"><mat-icon class="material-icons-outlined align-middle text-sm">house</mat-icon> Home</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            <span routerLink="/app/workspaces" class="me-2 text-theme style-none">Workspaces</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            Workspace Details
                        </p>
                    </div>

                    <div class="col-auto order-2 order-lg-5 mb-3 mb-xl-0">
                        <button matButton (click)="backToWorkspaces()"><mat-icon class="material-icons-outlined">arrow_back</mat-icon> Back</button>
                        <button matButton class="ms-1" (click)="refresh()"><mat-icon class="material-icons-outlined">refresh</mat-icon> Refresh</button>
                        @if (canManageWorkspace()) {
                        <button matButton="filled" class="ms-1" (click)="showPlaceholder('Edit Workspace')"><mat-icon class="material-icons-outlined">edit</mat-icon> Edit</button>
                        }
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
            <div class="row gx-3 gx-lg-4 mb-3">
                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">{{ totalMembers() }}</h1>
                            <p class="small text-secondary">Members</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6"><p class="text-secondary">In Org:</p></div>
                                <div class="col"><h3>{{ organizationMembers() }}</h3></div>
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

            <mat-card class="mb-3 mb-lg-4">
                <mat-card-content class="p-0">
                    <mat-tab-group animationDuration="300ms" (selectedTabChange)="onTabChange($event)">
                        <mat-tab>
                            <ng-template mat-tab-label>
                                <mat-icon class="me-2">overview</mat-icon>
                                Overview
                            </ng-template>

                            <div class="p-3">
                                <div class="row gx-3 gx-lg-4">
                                    <div class="col-12 col-lg-4">
                                        <mat-card class="mb-3 mb-lg-0">
                                            <div mat-card-image class="w-100 height-200 coverimg mb-3 bg-light-theme d-flex align-items-center justify-content-center">
                                                <mat-icon class="material-icons-outlined fs-1 text-theme">workspaces</mat-icon>
                                            </div>
                                            <mat-card-content class="pb-0">
                                                <h3 class="mb-1">{{ workspace()?.name }}</h3>
                                                <p class="text-secondary mb-2">{{ workspace()?.organization?.name || "Organization" }}</p>
                                                <div class="d-flex flex-wrap gap-2 mb-3">
                                                    <span class="badge" [ngClass]="workspaceTypeBadgeClass()">{{ workspaceTypeLabel() }}</span>
                                                    @if (isDefaultWorkspace()) {
                                                    <span class="badge theme-green">Default Workspace</span>
                                                    }
                                                    <span class="badge badge-light">Role: {{ currentWorkspaceRoleLabel() }}</span>
                                                    <span class="badge" [ngClass]="canManageWorkspace() ? 'theme-green' : 'theme-orange'">{{ canManageWorkspace() ? "Full Access" : "Read Only" }}</span>
                                                </div>

                                                <div class="row gx-3 mb-2">
                                                    <div class="col-4"><p class="text-secondary">Slug</p></div>
                                                    <div class="col-8"><p>{{ workspace()?.slug }}</p></div>
                                                </div>
                                                <div class="row gx-3 mb-2">
                                                    <div class="col-4"><p class="text-secondary">Owner</p></div>
                                                    <div class="col-8"><p>{{ ownerDisplayName() }}</p></div>
                                                </div>
                                                <div class="row gx-3 mb-2">
                                                    <div class="col-4"><p class="text-secondary">Health</p></div>
                                                    <div class="col-8">
                                                        <p class="mb-1">{{ completionPercent() }} %</p>
                                                        <mat-progress-bar class="mb-2" mode="determinate" [value]="completionPercent()"></mat-progress-bar>
                                                    </div>
                                                </div>
                                            </mat-card-content>
                                        </mat-card>
                                    </div>

                                    <div class="col-12 col-lg-8">
                                        <div class="row gx-3">
                                            <div class="col-6 col-md-3">
                                                <mat-card class="mb-3">
                                                    <mat-card-content class="pb-0">
                                                        <div class="row gx-2 align-items-center">
                                                            <div class="col-auto mb-3">
                                                                <app-circle-progress-blue class="avatar avatar-50 rounded-circle" [percent]="completionPercent()"></app-circle-progress-blue>
                                                            </div>
                                                            <div class="col-12 col-xl mb-3">
                                                                <h3 class="mb-1">{{ completionPercent() }}<span class="text-secondary">/100</span></h3>
                                                                <p class="small text-secondary">Delivery Health</p>
                                                            </div>
                                                        </div>
                                                    </mat-card-content>
                                                </mat-card>
                                            </div>

                                            <div class="col-6 col-md-3">
                                                <mat-card class="mb-3">
                                                    <mat-card-content class="pb-0">
                                                        <div class="row gx-2 align-items-center">
                                                            <div class="col-auto mb-3">
                                                                <app-circle-progress-blue class="avatar avatar-50 rounded-circle" [percent]="activeProjectPercent()"></app-circle-progress-blue>
                                                            </div>
                                                            <div class="col-12 col-xl mb-3">
                                                                <h3 class="mb-1">{{ activeProjectPercent() }}<span class="text-secondary">/100</span></h3>
                                                                <p class="small text-secondary">Active Ratio</p>
                                                            </div>
                                                        </div>
                                                    </mat-card-content>
                                                </mat-card>
                                            </div>

                                            <div class="col-6 col-md-3">
                                                <mat-card class="mb-3">
                                                    <mat-card-content class="pb-0">
                                                        <div class="row gx-2 align-items-center">
                                                            <div class="col-auto mb-3">
                                                                <app-circle-progress-blue class="avatar avatar-50 rounded-circle" [percent]="visibilityBalancePercent()"></app-circle-progress-blue>
                                                            </div>
                                                            <div class="col-12 col-xl mb-3">
                                                                <h3 class="mb-1">{{ publicProjects() }}<span class="text-secondary">/{{ totalProjects() }}</span></h3>
                                                                <p class="small text-secondary">Public Projects</p>
                                                            </div>
                                                        </div>
                                                    </mat-card-content>
                                                </mat-card>
                                            </div>

                                            <div class="col-6 col-md-3">
                                                <mat-card class="mb-3">
                                                    <mat-card-content class="pb-0">
                                                        <div class="row gx-2 align-items-center">
                                                            <div class="col-auto mb-3">
                                                                <app-circle-progress-blue class="avatar avatar-50 rounded-circle" [percent]="memberCoveragePercent()"></app-circle-progress-blue>
                                                            </div>
                                                            <div class="col-12 col-xl mb-3">
                                                                <h3 class="mb-1">{{ totalMembers() }}<span class="text-secondary">/{{ organizationMembers() }}</span></h3>
                                                                <p class="small text-secondary">Member Coverage</p>
                                                            </div>
                                                        </div>
                                                    </mat-card-content>
                                                </mat-card>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </mat-tab>

                        <mat-tab>
                            <ng-template mat-tab-label>
                                <mat-icon class="me-2">groups</mat-icon>
                                Members <span class="badge badge-light ms-2">{{ totalMembers() }}</span>
                            </ng-template>

                            <div class="p-3">
                                <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                                    <div>
                                        @if (memberCapacity()) {
                                        <p class="small mb-0 text-secondary">Plan: {{ memberCapacity()!.planName }} | Workspace seats {{ memberCapacity()!.currentMembers }}/{{ memberCapacity()!.maxMembers }}</p>
                                        <p class="small mb-0 text-secondary">Organization pool: {{ organizationMembers() }} members | Coverage {{ memberCoveragePercent() }}%</p>
                                        } @else {
                                        <p class="small mb-0 text-secondary">Plan capacity is loading...</p>
                                        }
                                    </div>
                                    @if (canInviteMember()) {
                                    <button matButton="filled" [disabled]="membersLoading()" (click)="openInviteModal()">
                                        <mat-icon class="material-icons-outlined">person_add</mat-icon>
                                        Invite Member
                                    </button>
                                    }
                                </div>

                                <div class="row gx-2 mb-3">
                                    <div class="col-6 col-lg-3">
                                        <mat-card class="bg-light-theme">
                                            <mat-card-content class="py-2">
                                                <p class="small text-secondary mb-1">Owners/Admins</p>
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
                                                <p class="small text-secondary mb-1">Not In Workspace</p>
                                                <h4 class="mb-0">{{ organizationMembersOutsideWorkspace() }}</h4>
                                            </mat-card-content>
                                        </mat-card>
                                    </div>
                                </div>

                                @if (membersLoading()) {
                                <p class="text-secondary mb-0">Loading members...</p>
                                } @else if (members().length === 0) {
                                <p class="text-secondary mb-0">No members found for this workspace.</p>
                                } @else {
                                @for (member of members(); track member.userId) {
                                <app-workspace-member-card [member]="member" [orgType]="normalizedOrgType()"></app-workspace-member-card>
                                }
                                }
                            </div>
                        </mat-tab>

                        <mat-tab>
                            <ng-template mat-tab-label>
                                <mat-icon class="me-2">assignment</mat-icon>
                                Projects <span class="badge badge-light ms-2">{{ totalProjects() }}</span>
                            </ng-template>

                            <div class="p-3">
                                <div class="d-flex justify-content-end mb-3">
                                    <button matButton="filled" [disabled]="!canManageWorkspace()" (click)="showPlaceholder('Create Project')">
                                        <mat-icon class="material-icons-outlined">add</mat-icon>
                                        Create Project
                                    </button>
                                </div>

                                @if (projects().length === 0) {
                                <p class="text-secondary mb-0">No projects found for this workspace.</p>
                                } @else {
                                <div class="row gx-3">
                                    @for (project of projects(); track project.id) {
                                    <div class="col-12 col-md-6">
                                        <mat-card class="mb-3 bg-light-theme">
                                            <mat-card-content>
                                                <h4 class="mb-1">{{ project.name }}</h4>
                                                <p class="text-secondary small mb-2">{{ project.description || "No description" }}</p>
                                                <div class="d-flex gap-2 align-items-center">
                                                    <span class="badge badge-light">{{ project.status || "UNKNOWN" }}</span>
                                                    <span class="badge" [ngClass]="project.visibility === 'PRIVATE' ? 'theme-orange' : 'theme-green'">{{ project.visibility || "PRIVATE" }}</span>
                                                </div>
                                            </mat-card-content>
                                        </mat-card>
                                    </div>
                                    }
                                </div>
                                }
                            </div>
                        </mat-tab>

                        <mat-tab>
                            <ng-template mat-tab-label>
                                <mat-icon class="me-2">settings</mat-icon>
                                Settings
                            </ng-template>

                            <div class="p-3">
                                @if (!canManageWorkspace()) {
                                <mat-card class="mb-3 border theme-orange">
                                    <mat-card-content>
                                        <div class="d-flex align-items-start">
                                            <mat-icon class="material-icons-outlined me-2 theme-orange">lock</mat-icon>
                                            <div>
                                                <p class="fw-medium mb-1">Read-only access</p>
                                                <p class="small mb-0">Students and employees can view this workspace but cannot change settings.</p>
                                            </div>
                                        </div>
                                    </mat-card-content>
                                </mat-card>
                                }

                                <div class="d-flex flex-wrap gap-2">
                                    <button matButton="filled" [disabled]="!canManageWorkspace()" (click)="showPlaceholder('Rename Workspace')">
                                        <mat-icon class="material-icons-outlined">edit</mat-icon>
                                        Rename
                                    </button>
                                    <button matButton="filled" [disabled]="!canManageWorkspace()" (click)="showPlaceholder('Manage Integrations')">
                                        <mat-icon class="material-icons-outlined">hub</mat-icon>
                                        Integrations
                                    </button>
                                    <button matButton="filled" [disabled]="!canManageWorkspace()" (click)="showPlaceholder('Delete Workspace')">
                                        <mat-icon class="material-icons-outlined">delete</mat-icon>
                                        Delete Workspace
                                    </button>
                                </div>
                            </div>
                        </mat-tab>

                        <mat-tab>
                            <ng-template mat-tab-label>
                                <mat-icon class="me-2">history</mat-icon>
                                Activity <span class="badge badge-light ms-2">{{ activityItems().length }}</span>
                            </ng-template>

                            <div class="p-3">
                                @if (activityItems().length === 0) {
                                <p class="text-secondary mb-0">No activity yet for this workspace.</p>
                                } @else {
                                <ul class="activity">
                                    @for (activity of activityItems(); track activity.id) {
                                    <li>
                                        <div class="row gx-3">
                                            <div class="col-auto">
                                                <div class="avatar avatar-40 rounded-circle bg-light-theme text-theme d-flex align-items-center justify-content-center">
                                                    <mat-icon class="material-icons-outlined">{{ activity.icon }}</mat-icon>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <p class="text-secondary small mb-1">{{ activity.timestamp | date : "MMM d, y, h:mm a" }}</p>
                                                <p class="mb-0">
                                                    <span class="text-theme">{{ activity.user }}</span>
                                                    {{ activity.action }}
                                                    <span class="text-theme">{{ activity.target }}</span
                                                    >.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    }
                                </ul>
                                }
                            </div>
                        </mat-tab>
                    </mat-tab-group>
                </mat-card-content>
            </mat-card>
            }
        </div>
    `,
})
export class M2WorkspaceDetailsComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly workspaceService = inject(M2WorkspaceService);
    private readonly workspaceMemberService = inject(WorkspaceMemberService);
    private readonly authService = inject(AuthService);
    private readonly dialog = inject(MatDialog);
    private readonly snackBar = inject(MatSnackBar);

    readonly permissionService = inject(WorkspacePermissionService);

    readonly workspace = signal<M2Workspace | null>(null);
    readonly members = signal<WorkspaceMember[]>([]);
    readonly memberCapacity = signal<WorkspaceMemberCapacity | null>(null);
    readonly projects = signal<M2ProjectSummary[]>([]);
    readonly isLoading = signal(true);
    readonly membersLoading = signal(false);
    readonly error = signal<string | null>(null);

    readonly totalMembers = computed(() => this.members().length);
    readonly ownerCount = computed(() => this.members().filter((m) => (m.workspaceRole || "").toUpperCase() === "OWNER").length);
    readonly organizationMembers = computed(() => Math.max(this.memberCapacity()?.organizationMembers ?? 0, this.totalMembers()));
    readonly organizationMembersOutsideWorkspace = computed(() => Math.max(0, this.organizationMembers() - this.totalMembers()));
    readonly leadershipCount = computed(() => this.members().filter((m) => {
        const role = (m.workspaceRole || "").toUpperCase();
        return role === "OWNER" || role === "ADMIN" || role === "MANAGER" || role === "TA";
    }).length);
    readonly contributorCount = computed(() => Math.max(0, this.totalMembers() - this.leadershipCount()));
    readonly joinedLast7DaysCount = computed(() => this.members().filter((m) => this.isJoinedWithinDays(m.joinedAt, 7)).length);
    readonly totalProjects = computed(() => this.projects().length);
    readonly activeProjects = computed(() => this.projects().filter((p) => this.normalizeStatus(p.status) === "ACTIVE").length);
    readonly completedProjects = computed(() => this.projects().filter((p) => {
        const status = this.normalizeStatus(p.status);
        return status === "COMPLETED" || status === "ARCHIVED";
    }).length);
    readonly publicProjects = computed(() => this.projects().filter((p) => this.normalizeVisibility(p.visibility) === "PUBLIC").length);

    readonly completionPercent = computed(() => {
        const total = this.totalProjects();
        if (total === 0) {
            return 0;
        }
        return Math.round((this.completedProjects() / total) * 100);
    });

    readonly activeProjectPercent = computed(() => {
        const total = this.totalProjects();
        if (total === 0) {
            return 0;
        }
        return Math.round((this.activeProjects() / total) * 100);
    });

    readonly visibilityBalancePercent = computed(() => {
        const total = this.totalProjects();
        if (total === 0) {
            return 0;
        }
        return Math.round((this.publicProjects() / total) * 100);
    });

    readonly memberCoveragePercent = computed(() => {
        const base = Math.max(1, this.organizationMembers());
        return Math.min(100, Math.round((this.totalMembers() / base) * 100));
    });

    readonly workspaceTypeLabel = computed(() => {
        const value = (this.workspace()?.orgType || this.workspace()?.organization?.orgType || "ENTERPRISE").toUpperCase();
        return value === "ACADEMIC" ? "Academic" : "Enterprise";
    });

    readonly workspaceTypeBadgeClass = computed(() => {
        return this.workspaceTypeLabel() === "Academic" ? "theme-violet" : "theme-blue";
    });

    readonly normalizedOrgType = computed(() => {
        const raw = this.workspace()?.orgType || this.workspace()?.organization?.orgType || "enterprise";
        return raw.toLowerCase();
    });

    readonly currentWorkspaceRoleLabel = computed(() => {
        return this.permissionService.getWorkspaceRoleForCurrentUser(this.members()) || "GLOBAL_ADMIN";
    });

    readonly ownerDisplayName = computed(() => {
        const ownerMember = this.members().find((row) => (row.workspaceRole || "").toUpperCase() === "OWNER");
        if (ownerMember?.fullName) {
            return ownerMember.fullName;
        }
        return `User #${this.workspace()?.ownerId || "-"}`;
    });

    readonly canManageWorkspace = computed(() => {
        const userId = this.authService.currentUser()?.id;
        if (userId && this.workspace()?.ownerId === userId) {
            return true;
        }
        return this.permissionService.canManageWorkspace(this.members());
    });

    readonly currentUserOrgRole = computed(() => {
        return this.normalizeOrgRole(this.authService.currentOrganization()?.membershipRole || "");
    });

    readonly currentUserPlatformRole = computed(() => {
        return (this.authService.currentUser()?.role || "").toUpperCase();
    });

    readonly currentUserWorkspaceRole = computed(() => {
        const userId = this.authService.currentUser()?.id;
        if (!userId) {
            return "";
        }
        const member = this.members().find((row) => row.userId === userId);
        return (member?.workspaceRole || "").toUpperCase();
    });

    readonly isCurrentUserWorkspaceMember = computed(() => {
        const userId = this.authService.currentUser()?.id;
        if (!userId) {
            return false;
        }
        return this.members().some((row) => row.userId === userId);
    });

    readonly canInviteMember = computed(() => {
        const platformRole = this.currentUserPlatformRole();
        if (platformRole === "ADMIN" || platformRole === "SUPER_ADMIN") {
            return true;
        }

        const currentOrgId = (this.authService.currentOrganization()?.organizationId || "").toLowerCase();
        const workspaceOrgId = (this.workspace()?.organization?.id || "").toLowerCase();
        return !!currentOrgId && !!workspaceOrgId && currentOrgId === workspaceOrgId;
    });

    readonly createdDateLabel = computed(() => {
        const createdAt = this.workspace()?.createdAt;
        return createdAt ? new Date(createdAt).toLocaleDateString() : "-";
    });

    readonly isDefaultWorkspace = computed(() => {
        const slug = (this.workspace()?.slug || "").toLowerCase();
        const name = (this.workspace()?.name || "").toLowerCase();
        return slug === "default-team" || slug === "default-course" || name === "default team" || name === "default course";
    });

    readonly activityItems = computed<WorkspaceActivity[]>(() => {
        const activities: WorkspaceActivity[] = [];

        for (const project of this.projects()) {
            activities.push({
                id: `project-${project.id}`,
                icon: "assignment",
                user: "Workspace",
                action: "project is tracked",
                target: project.name,
                timestamp: this.toTimestamp(project.createdAt),
            });
        }

        for (const member of this.members()) {
            activities.push({
                id: `member-${member.userId}`,
                icon: (member.workspaceRole || "").toUpperCase() === "OWNER" ? "verified" : "person_add",
                user: member.fullName || `User #${member.userId}`,
                action: (member.workspaceRole || "").toUpperCase() === "OWNER" ? "owns" : "joined",
                target: this.workspace()?.name || "Workspace",
                timestamp: this.toTimestamp(member.joinedAt),
            });
        }

        return activities.sort((a, b) => b.timestamp - a.timestamp).slice(0, 12);
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

    onTabChange(event: MatTabChangeEvent): void {
        if (event.index !== 1) {
            return;
        }

        const workspaceId = this.route.snapshot.paramMap.get("workspaceId");
        if (!workspaceId) {
            return;
        }

        this.loadMembers(workspaceId);
    }

    openInviteModal(): void {
        const workspaceId = this.route.snapshot.paramMap.get("workspaceId");
        if (!workspaceId) {
            return;
        }

        const dialogRef = this.dialog.open(InviteMemberModalComponent, {
            width: "700px",
            maxWidth: "95vw",
            data: {
                workspaceId,
                orgType: this.normalizedOrgType(),
                currentUserWorkspaceRole: this.currentUserWorkspaceRole(),
                currentUserOrgRole: this.currentUserOrgRole(),
            },
        });

        const instance = dialogRef.componentInstance;
        if (instance) {
            instance.memberAdded.pipe(take(1)).subscribe(() => {
                this.loadMembers(workspaceId);
            });
        }
    }

    backToWorkspaces(): void {
        this.router.navigate(["/app/workspaces"]);
    }

    showPlaceholder(action: string): void {
        this.snackBar.open(`${action} will be enabled when Module 2 write endpoints are finalized.`, "Close", { duration: 3500 });
    }

    private loadWorkspaceDetails(workspaceId: string): void {
        this.isLoading.set(true);
        this.error.set(null);
        this.members.set([]);
        this.memberCapacity.set(null);

        forkJoin({
            workspace: this.workspaceService.getWorkspaceById(workspaceId),
            projectsPage: this.workspaceService.getWorkspaceProjects(workspaceId),
        }).subscribe({
            next: ({ workspace, projectsPage }) => {
                this.workspace.set(workspace);
                this.projects.set(projectsPage?.content || []);
                this.isLoading.set(false);
                this.loadMembers(workspaceId);
            },
            error: (error: HttpErrorResponse) => {
                this.isLoading.set(false);

                if (error.status === 403) {
                    this.snackBar.open("You do not have access to this workspace.", "Close", { duration: 5000 });
                    this.router.navigate(["/app/workspaces"]);
                    return;
                }

                this.error.set(this.errorMessage(error));
            },
        });
    }

    private loadMembers(workspaceId: string): void {
        this.membersLoading.set(true);
        forkJoin({
            members: this.workspaceMemberService.getWorkspaceMembers(workspaceId).pipe(
                catchError((error: HttpErrorResponse) => {
                    this.snackBar.open(`Failed to load members: ${this.errorMessage(error)}`, "Close", { duration: 4500 });
                    return of([] as WorkspaceMember[]);
                })
            ),
            capacity: this.workspaceMemberService.getMemberCapacity(workspaceId).pipe(
                catchError(() => of(null))
            ),
        }).subscribe({
            next: ({ members, capacity }) => {
                this.members.set(members || []);
                this.memberCapacity.set(capacity);
                this.membersLoading.set(false);
            },
            error: () => {
                this.membersLoading.set(false);
            },
        });
    }

    private normalizeStatus(value?: string): string {
        return (value || "").toUpperCase().trim();
    }

    private normalizeVisibility(value?: string): string {
        return (value || "").toUpperCase().trim();
    }

    private toTimestamp(value?: string): number {
        if (!value) {
            return Date.now();
        }
        const parsed = Date.parse(value);
        return Number.isNaN(parsed) ? Date.now() : parsed;
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

    private normalizeOrgRole(raw: string): string {
        const value = (raw || "").trim().toLowerCase();
        if (value === "admin" || value === "owner") {
            return "org_admin";
        }
        if (value === "academicadmin" || value === "academic_admin") {
            return "academic_admin";
        }
        if (value === "professor" || value === "tutor") {
            return "professor";
        }
        return value;
    }

    private errorMessage(error: HttpErrorResponse): string {
        const message = (error?.error && (error.error.message || error.error.error)) || error.message || "Request failed";
        return `status=${error.status || 0} message=${message}`;
    }
}
