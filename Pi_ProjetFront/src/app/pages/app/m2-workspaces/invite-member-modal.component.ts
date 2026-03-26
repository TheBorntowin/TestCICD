import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output, computed, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AvailableOrgMember, WorkspaceMember } from "./models/workspace-member.model";
import { WorkspaceMemberService } from "./services/workspace-member.service";

interface InviteMemberModalData {
    workspaceId: string;
    orgType: string;
    currentUserWorkspaceRole: string;
    currentUserOrgRole: string;
}

@Component({
    selector: "app-invite-member-modal",
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
    ],
    template: `
        <h3 mat-dialog-title class="d-flex align-items-center mb-0 pb-0">
            <div class="flex-grow-1">
                <div class="fw-semibold">Invite Member to Workspace</div>
                <div class="small text-secondary">{{ availableMembers().length }} available from your organization</div>
            </div>
            <button matIconButton (click)="close()"><mat-icon class="material-icons-outlined">close</mat-icon></button>
        </h3>

        <mat-dialog-content class="mat-typography pt-2">
            @if (errorMessage()) {
            <div class="alert alert-danger small mb-3" role="alert">{{ errorMessage() }}</div>
            }

            <div class="invite-toolbar mb-3">
                <mat-form-field appearance="outline" class="w-100 mb-0">
                <mat-label>Search organization members</mat-label>
                <mat-icon matPrefix>search</mat-icon>
                    <input matInput [ngModel]="searchTerm()" (ngModelChange)="searchTerm.set(($event || '').toString())" placeholder="Type a name or email" />
                    @if (searchTerm()) {
                    <button mat-icon-button matSuffix (click)="searchTerm.set('')">
                        <mat-icon class="material-icons-outlined">close</mat-icon>
                    </button>
                    }
                </mat-form-field>
            </div>

            <div class="row gx-2 mb-3">
                <div class="col-12 col-md-7">
                    <mat-form-field appearance="outline" class="w-100 mb-0">
                        <mat-label>Workspace Role</mat-label>
                        <mat-select [(ngModel)]="selectedRole">
                            @for (option of roleOptions(); track option.value) {
                            <mat-option [value]="option.value">{{ option.label }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="col-12 col-md-5">
                    <div class="stat-card h-100 d-flex align-items-center justify-content-between px-3">
                        <div>
                            <p class="small text-secondary mb-0">Showing</p>
                            <p class="mb-0 fw-semibold">{{ filteredMembers().length }} members</p>
                        </div>
                        <mat-icon class="material-icons-outlined text-theme">groups</mat-icon>
                    </div>
                </div>
            </div>

            @if (isLoading()) {
            <div class="empty-state">
                <mat-icon class="material-icons-outlined">hourglass_top</mat-icon>
                <p class="small text-secondary mb-0">Loading available members...</p>
            </div>
            } @else if (filteredMembers().length === 0 && availableMembers().length > 0) {
            <div class="empty-state">
                <mat-icon class="material-icons-outlined">search_off</mat-icon>
                <p class="small text-secondary mb-0">No members match your search.</p>
            </div>
            } @else if (availableMembers().length === 0) {
            <div class="empty-state">
                <mat-icon class="material-icons-outlined">done_all</mat-icon>
                <p class="small text-secondary mb-0">All organization members are already in this workspace.</p>
            </div>
            } @else {
            <div class="member-list">
                @for (member of filteredMembers(); track member.userId) {
                <button
                    type="button"
                    class="member-row d-flex align-items-center"
                    [class.selected]="selectedUserId() === member.userId"
                    (click)="selectedUserId.set(member.userId)">
                    <span class="avatar avatar-40 rounded-circle align-middle me-2 bg-light-theme d-flex align-items-center justify-content-center">
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
                    <span class="d-flex align-items-center gap-2">
                        <span class="badge badge-light">{{ orgRoleLabel(member.orgRole) }}</span>
                        @if (selectedUserId() === member.userId) {
                        <mat-icon class="material-icons-outlined text-theme">check_circle</mat-icon>
                        }
                    </span>
                </button>
                }
            </div>
            }
        </mat-dialog-content>

        <mat-dialog-actions align="end">
            <button matButton (click)="close()">Cancel</button>
            <button matButton="filled" [disabled]="!selectedUserId() || isSubmitting()" (click)="invite()">
                @if (isSubmitting()) {Inviting...} @else {Invite}
            </button>
        </mat-dialog-actions>
    `,
    styles: [
        `
            .invite-toolbar {
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 12px;
                padding: 10px;
                background: linear-gradient(145deg, rgba(236, 247, 255, 0.7), rgba(255, 255, 255, 1));
            }

            .stat-card {
                border-radius: 12px;
                border: 1px solid rgba(0, 136, 255, 0.2);
                background: rgba(0, 136, 255, 0.06);
            }

            .member-list {
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-height: 320px;
                overflow: auto;
                padding-right: 2px;
            }

            .member-row {
                width: 100%;
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 12px;
                padding: 10px 12px;
                background: #fff;
                transition: all 0.2s ease;
            }

            .member-row:hover {
                border-color: rgba(0, 136, 255, 0.5);
                transform: translateY(-1px);
            }

            .member-row.selected {
                border-color: #0088ff;
                box-shadow: 0 0 0 2px rgba(0, 136, 255, 0.12);
                background: rgba(0, 136, 255, 0.04);
            }

            .empty-state {
                display: flex;
                gap: 8px;
                align-items: center;
                justify-content: center;
                border: 1px dashed rgba(0, 0, 0, 0.2);
                border-radius: 12px;
                min-height: 80px;
            }
        `,
    ],
})
export class InviteMemberModalComponent implements OnInit {
    private readonly dialogRef = inject(MatDialogRef<InviteMemberModalComponent>);
    private readonly dialogData = inject(MAT_DIALOG_DATA, { optional: true }) as InviteMemberModalData | null;
    private readonly workspaceMemberService = inject(WorkspaceMemberService);
    private readonly snackBar = inject(MatSnackBar);

    @Input() workspaceId: string = "";
    @Input() orgType: string = "enterprise";
    @Input() currentUserWorkspaceRole: string = "";
    @Input() currentUserOrgRole: string = "";

    @Output() readonly memberAdded = new EventEmitter<WorkspaceMember>();

    readonly isLoading = signal(false);
    readonly isSubmitting = signal(false);
    readonly selectedUserId = signal<number | null>(null);
    readonly availableMembers = signal<AvailableOrgMember[]>([]);
    readonly errorMessage = signal<string | null>(null);
    readonly searchTerm = signal("");

    selectedRole = "";

    readonly filteredMembers = computed(() => {
        const query = this.searchTerm().trim().toLowerCase();
        if (!query) {
            return this.availableMembers();
        }
        return this.availableMembers().filter((m) =>
            m.fullName.toLowerCase().includes(query) || m.email.toLowerCase().includes(query)
        );
    });

    readonly roleOptions = computed(() => {
        const base = this.normalizedOrgType() === "academic"
            ? [
                { value: "TA", label: "Teaching Assistant" },
                { value: "STUDENT", label: "Student" },
                { value: "VIEWER", label: "Viewer" },
            ]
            : [
                { value: "MANAGER", label: "Manager" },
                { value: "EMPLOYEE", label: "Employee" },
                { value: "VIEWER", label: "Viewer" },
            ];
        return base;
    });

    ngOnInit(): void {
        if (this.dialogData) {
            this.workspaceId = this.dialogData.workspaceId || this.workspaceId;
            this.orgType = this.dialogData.orgType || this.orgType;
            this.currentUserWorkspaceRole = this.dialogData.currentUserWorkspaceRole || this.currentUserWorkspaceRole;
            this.currentUserOrgRole = this.dialogData.currentUserOrgRole || this.currentUserOrgRole;
        }

        this.selectedRole = this.defaultRole();
        this.loadAvailableMembers();
    }

    invite(): void {
        const selectedId = this.selectedUserId();
        if (!selectedId || !this.workspaceId) {
            return;
        }

        this.isSubmitting.set(true);
        this.errorMessage.set(null);

        this.workspaceMemberService.addMember(this.workspaceId, selectedId, this.selectedRole).subscribe({
            next: (member) => {
                this.memberAdded.emit(member);
                this.snackBar.open("Member added successfully", "Close", { duration: 3000 });
                this.dialogRef.close(member);
                this.isSubmitting.set(false);
            },
            error: (error) => {
                const message = error?.error?.message || error?.message || "Failed to add member";
                this.errorMessage.set(message);
                this.isSubmitting.set(false);
            },
        });
    }

    close(): void {
        this.dialogRef.close();
    }

    private loadAvailableMembers(): void {
        if (!this.workspaceId) {
            return;
        }

        this.isLoading.set(true);
        this.errorMessage.set(null);
        this.workspaceMemberService.getAvailableMembers(this.workspaceId).subscribe({
            next: (rows) => {
                this.availableMembers.set(rows || []);
                this.isLoading.set(false);
            },
            error: (error) => {
                const message = error?.error?.message || error?.message || "Failed to load available members";
                this.errorMessage.set(message);
                this.availableMembers.set([]);
                this.isLoading.set(false);
            },
        });
    }

    private normalizedOrgType(): string {
        return (this.orgType || "enterprise").toLowerCase();
    }

    private defaultRole(): string {
        return this.normalizedOrgType() === "academic" ? "STUDENT" : "EMPLOYEE";
    }

    orgRoleLabel(role: string): string {
        const normalized = (role || "").trim().toLowerCase();
        if (normalized === "org_admin" || normalized === "admin") {
            return "Org Admin";
        }
        if (normalized === "academic_admin" || normalized === "academicadmin") {
            return "Academic Admin";
        }
        if (normalized === "professor" || normalized === "tutor") {
            return "Professor";
        }
        if (normalized === "manager") {
            return "Manager";
        }
        if (normalized === "employee") {
            return "Employee";
        }
        if (normalized === "student") {
            return "Student";
        }
        if (normalized === "viewer") {
            return "Viewer";
        }
        return role || "Member";
    }
}
