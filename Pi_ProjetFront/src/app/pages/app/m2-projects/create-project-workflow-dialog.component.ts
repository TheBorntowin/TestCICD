import { CommonModule } from "@angular/common";
import { Component, computed, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";

export interface ProjectMemberCandidate {
    userId: number;
    fullName: string;
    email: string;
    avatarUrl?: string;
    workspaceRole?: string;
}

export interface CreateProjectWorkflowDialogData {
    workspaceId: string;
    workspaceName: string;
    orgType?: string;
    members: ProjectMemberCandidate[];
}

export interface CreateProjectWorkflowDialogResult {
    payload: Record<string, unknown>;
    assignments: Array<{ userId: number; role: string }>;
}

@Component({
    selector: "app-create-project-workflow-dialog",
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
    ],
    template: `
        <div class="create-shell p-3 p-lg-4">
            <div class="d-flex align-items-center mb-3 pb-1 border-bottom">
                <h3 class="mb-0 flex-grow-1">Create Project</h3>
                <button matIconButton (click)="close()"><mat-icon class="material-icons-outlined">close</mat-icon></button>
            </div>

            <mat-stepper [linear]="true" class="workspace-stepper">
                <mat-step [completed]="isBasicsValid()">
                    <ng-template matStepLabel>Basics</ng-template>

                    <div class="step-card mt-3">
                        <p class="small text-secondary mb-3">Workspace: {{ data.workspaceName }}</p>
                        <div class="row gx-3">
                            <div class="col-12 mb-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Project Name</mat-label>
                                    <input matInput [(ngModel)]="name" placeholder="Ex: AI Automation" />
                                    <mat-hint>Use a clear, delivery-focused project title.</mat-hint>
                                </mat-form-field>
                            </div>

                            <div class="col-12 mb-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Description</mat-label>
                                    <textarea matInput rows="3" [(ngModel)]="description" placeholder="What is this project about?"></textarea>
                                </mat-form-field>
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Visibility</mat-label>
                                    <mat-select [(ngModel)]="visibility">
                                        <mat-option value="PRIVATE">Private</mat-option>
                                        <mat-option value="PUBLIC">Public</mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>

                            <div class="col-12 col-md-6 mb-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Status</mat-label>
                                    <mat-select [(ngModel)]="status">
                                        <mat-option value="PLANNING">Planning</mat-option>
                                        <mat-option value="ACTIVE">Active</mat-option>
                                        <mat-option value="ON_HOLD">On Hold</mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end gap-2 mt-3">
                        <button matButton (click)="close()">Cancel</button>
                        <button matButton="filled" matStepperNext [disabled]="!isBasicsValid()">Continue</button>
                    </div>
                </mat-step>

                <mat-step>
                    <ng-template matStepLabel>Schedule</ng-template>

                    <div class="step-card mt-3">
                        <div class="row gx-3">
                            <div class="col-12 col-md-6 mb-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Start Date</mat-label>
                                    <input matInput type="date" [(ngModel)]="startDate" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 mb-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>End Date</mat-label>
                                    <input matInput type="date" [(ngModel)]="endDate" />
                                </mat-form-field>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end gap-2 mt-3">
                        <button matButton matStepperPrevious>Back</button>
                        <button matButton="filled" matStepperNext>Continue</button>
                    </div>
                </mat-step>

                <mat-step>
                    <ng-template matStepLabel>Members</ng-template>

                    <div class="step-card mt-3">
                        <div class="invite-toolbar mb-3">
                            <mat-form-field appearance="outline" class="w-100 mb-0">
                                <mat-label>Search workspace members</mat-label>
                                <mat-icon matPrefix>search</mat-icon>
                                <input matInput [ngModel]="searchTerm()" (ngModelChange)="searchTerm.set(($event || '').toString())" placeholder="Type a name or email" />
                            </mat-form-field>
                        </div>

                        @if (filteredMembers().length === 0) {
                        <div class="empty-state">
                            <mat-icon class="material-icons-outlined">search_off</mat-icon>
                            <p class="small text-secondary mb-0">No matching workspace members.</p>
                        </div>
                        } @else {
                        <div class="member-list mb-3">
                            @for (member of filteredMembers(); track member.userId) {
                            <button type="button" class="member-row d-flex align-items-center" [class.selected]="isSelected(member.userId)" (click)="toggleMember(member.userId)">
                                <span class="avatar avatar-40 rounded-circle align-middle me-2 bg-light-theme d-flex align-items-center justify-content-center overflow-hidden">
                                    @if (member.avatarUrl) {
                                    <img class="w-100 h-100 rounded-circle" [src]="member.avatarUrl" [alt]="member.fullName" />
                                    } @else {
                                    <mat-icon class="material-icons-outlined">person</mat-icon>
                                    }
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1 text-start">
                                    <p class="mb-1">{{ member.fullName }}</p>
                                    <p class="small mb-0">{{ member.email }}</p>
                                </span>
                                <span class="badge badge-light">{{ member.workspaceRole || 'MEMBER' }}</span>
                            </button>
                            }
                        </div>
                        }

                        @if (selectedMembers().length > 0) {
                        <div class="selected-block">
                            <p class="small text-secondary mb-2">Selected members and project roles</p>
                            @for (member of selectedMembers(); track member.userId) {
                            <div class="row gx-2 align-items-center mb-2">
                                <div class="col-12 col-md">
                                    <p class="mb-0">{{ member.fullName }}</p>
                                </div>
                                <div class="col-12 col-md-5">
                                    <mat-form-field appearance="outline" class="w-100 mb-0">
                                        <mat-label>Role</mat-label>
                                        <mat-select [ngModel]="memberRole(member.userId)" (ngModelChange)="setMemberRole(member.userId, ($event || '').toString())">
                                            @for (role of roleOptions(); track role.value) {
                                            <mat-option [value]="role.value">{{ role.label }}</mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            </div>
                            }
                        </div>
                        }
                    </div>

                    <div class="d-flex justify-content-end gap-2 mt-3">
                        <button matButton matStepperPrevious>Back</button>
                        <button matButton="filled" matStepperNext>Review</button>
                    </div>
                </mat-step>

                <mat-step>
                    <ng-template matStepLabel>Review</ng-template>

                    <div class="step-card mt-3">
                        <div class="summary-row">
                            <span>Name</span>
                            <strong>{{ name.trim() }}</strong>
                        </div>
                        <div class="summary-row">
                            <span>Visibility</span>
                            <strong>{{ visibility }}</strong>
                        </div>
                        <div class="summary-row">
                            <span>Status</span>
                            <strong>{{ status }}</strong>
                        </div>
                        <div class="summary-row">
                            <span>Assigned Members</span>
                            <strong>{{ selectedMembers().length }}</strong>
                        </div>
                    </div>

                    <div class="d-flex justify-content-end gap-2 mt-3">
                        <button matButton matStepperPrevious>Back</button>
                        <button matButton="filled" [disabled]="!isBasicsValid()" (click)="submit()">
                            <mat-icon class="material-icons-outlined me-1">add_circle</mat-icon>
                            Create Project
                        </button>
                    </div>
                </mat-step>
            </mat-stepper>
        </div>
    `,
    styles: [
        `
            .create-shell {
                background: radial-gradient(circle at top right, rgba(0, 136, 255, 0.08), transparent 55%);
            }

            .workspace-stepper {
                background: transparent;
            }

            .step-card {
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 14px;
                padding: 14px;
                background: #fff;
            }

            .invite-toolbar {
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 12px;
                padding: 10px;
                background: linear-gradient(145deg, rgba(236, 247, 255, 0.7), rgba(255, 255, 255, 1));
            }

            .member-list {
                display: flex;
                flex-direction: column;
                gap: 8px;
                max-height: 240px;
                overflow: auto;
            }

            .member-row {
                width: 100%;
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 12px;
                padding: 10px;
                background: #fff;
                transition: all 0.2s ease;
            }

            .member-row:hover {
                border-color: rgba(0, 136, 255, 0.45);
                transform: translateY(-1px);
            }

            .member-row.selected {
                border-color: #0088ff;
                box-shadow: 0 0 0 2px rgba(0, 136, 255, 0.12);
                background: rgba(0, 136, 255, 0.04);
            }

            .selected-block {
                border-top: 1px dashed rgba(0, 0, 0, 0.12);
                padding-top: 10px;
            }

            .summary-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;
                padding: 10px 0;
                border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
            }

            .summary-row:last-child {
                border-bottom: 0;
            }

            .empty-state {
                display: flex;
                gap: 8px;
                align-items: center;
                justify-content: center;
                border: 1px dashed rgba(0, 0, 0, 0.2);
                border-radius: 12px;
                min-height: 70px;
            }
        `,
    ],
})
export class CreateProjectWorkflowDialogComponent {
    readonly dialogRef = inject(MatDialogRef<CreateProjectWorkflowDialogComponent>);
    readonly data = inject(MAT_DIALOG_DATA) as CreateProjectWorkflowDialogData;

    name = "";
    description = "";
    visibility: "PRIVATE" | "PUBLIC" = "PRIVATE";
    status: "PLANNING" | "ACTIVE" | "ON_HOLD" = "PLANNING";
    startDate = "";
    endDate = "";

    readonly searchTerm = signal("");
    readonly selectedUserIds = signal<number[]>([]);
    readonly rolesByUserId = signal<Record<number, string>>({});

    readonly filteredMembers = computed(() => {
        const query = this.searchTerm().trim().toLowerCase();
        if (!query) {
            return this.data.members || [];
        }
        return (this.data.members || []).filter((member) =>
            member.fullName.toLowerCase().includes(query) || member.email.toLowerCase().includes(query)
        );
    });

    readonly selectedMembers = computed(() => {
        const ids = new Set(this.selectedUserIds());
        return (this.data.members || []).filter((member) => ids.has(member.userId));
    });

    readonly roleOptions = computed(() => {
        const academic = (this.data.orgType || "").toLowerCase() === "academic";
        if (academic) {
            return [
                { value: "PROFESSOR", label: "Professor" },
                { value: "DEVELOPER", label: "Developer" },
                { value: "REVIEWER", label: "Reviewer" },
                { value: "OBSERVER", label: "Observer" },
            ];
        }
        return [
            { value: "PROJECT_MANAGER", label: "Project Manager" },
            { value: "DEVELOPER", label: "Developer" },
            { value: "REVIEWER", label: "Reviewer" },
            { value: "OBSERVER", label: "Observer" },
        ];
    });

    isBasicsValid(): boolean {
        return this.name.trim().length >= 3;
    }

    isSelected(userId: number): boolean {
        return this.selectedUserIds().includes(userId);
    }

    toggleMember(userId: number): void {
        const selected = this.selectedUserIds();
        if (selected.includes(userId)) {
            this.selectedUserIds.set(selected.filter((id) => id !== userId));
            return;
        }
        this.selectedUserIds.set([...selected, userId]);

        const currentRoles = { ...this.rolesByUserId() };
        if (!currentRoles[userId]) {
            currentRoles[userId] = this.defaultRoleForMember(userId);
            this.rolesByUserId.set(currentRoles);
        }
    }

    memberRole(userId: number): string {
        return this.rolesByUserId()[userId] || this.defaultRoleForMember(userId);
    }

    setMemberRole(userId: number, role: string): void {
        this.rolesByUserId.set({ ...this.rolesByUserId(), [userId]: role });
    }

    submit(): void {
        if (!this.isBasicsValid()) {
            return;
        }

        const payload: Record<string, unknown> = {
            name: this.name.trim(),
            description: this.description.trim() || null,
            visibility: this.visibility,
            status: this.status,
        };

        if (this.startDate) {
            payload["startDate"] = this.startDate;
        }
        if (this.endDate) {
            payload["endDate"] = this.endDate;
        }

        const assignments = this.selectedMembers().map((member) => ({
            userId: member.userId,
            role: this.memberRole(member.userId),
        }));

        this.dialogRef.close({ payload, assignments } as CreateProjectWorkflowDialogResult);
    }

    close(): void {
        this.dialogRef.close();
    }

    private defaultRoleForMember(userId: number): string {
        const member = (this.data.members || []).find((row) => row.userId === userId);
        const workspaceRole = (member?.workspaceRole || "").toUpperCase();
        const academic = (this.data.orgType || "").toLowerCase() === "academic";

        if (academic) {
            if (workspaceRole === "TA") {
                return "PROFESSOR";
            }
            return "DEVELOPER";
        }

        if (workspaceRole === "OWNER" || workspaceRole === "ADMIN" || workspaceRole === "MANAGER") {
            return "PROJECT_MANAGER";
        }
        return "DEVELOPER";
    }
}
