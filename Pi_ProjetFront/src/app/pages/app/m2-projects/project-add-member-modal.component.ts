import { CommonModule } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { M2AvailableWorkspaceMember } from "./m2-project.service";

export interface ProjectAddMemberModalData {
    orgType?: string;
    members: M2AvailableWorkspaceMember[];
}

export interface ProjectAddMemberModalResult {
    userId: number;
    role: string;
}

@Component({
    selector: "app-project-add-member-modal",
    standalone: true,
    imports: [CommonModule, FormsModule, MatDialogModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
    template: `
        <h3 mat-dialog-title>Add Project Member</h3>
        <mat-dialog-content>
            <mat-form-field appearance="outline" class="w-100 mt-2">
                <mat-label>Workspace Member</mat-label>
                <mat-select [(ngModel)]="selectedUserId">
                    @for (member of data.members || []; track member.userId) {
                    <mat-option [value]="member.userId">{{ member.fullName }} ({{ member.email }})</mat-option>
                    }
                </mat-select>
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-100">
                <mat-label>Project Role</mat-label>
                <mat-select [(ngModel)]="selectedRole">
                    @for (option of roleOptions(); track option.value) {
                    <mat-option [value]="option.value">{{ option.label }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
        </mat-dialog-content>
        <mat-dialog-actions align="end">
            <button matButton (click)="close()">Cancel</button>
            <button matButton="filled" (click)="submit()" [disabled]="!selectedUserId || !selectedRole">Add</button>
        </mat-dialog-actions>
    `,
})
export class ProjectAddMemberModalComponent {
    readonly dialogRef = inject(MatDialogRef<ProjectAddMemberModalComponent>);
    readonly data = inject(MAT_DIALOG_DATA) as ProjectAddMemberModalData;

    selectedUserId: number | null = null;
    selectedRole = "";

    readonly roleOptions = computed(() => {
        const academic = (this.data?.orgType || "").toLowerCase() === "academic";
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

    close(): void {
        this.dialogRef.close();
    }

    submit(): void {
        if (!this.selectedUserId || !this.selectedRole) {
            return;
        }

        this.dialogRef.close({
            userId: this.selectedUserId,
            role: this.selectedRole,
        } as ProjectAddMemberModalResult);
    }
}
