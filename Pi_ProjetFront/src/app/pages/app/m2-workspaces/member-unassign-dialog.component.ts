import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

export interface MemberUnassignDialogData {
    memberName: string;
    memberEmail: string;
    workspaceName: string;
}

export interface MemberUnassignDialogResult {
    confirm: true;
}

@Component({
    selector: "app-member-unassign-dialog",
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
    template: `
        <h3 mat-dialog-title class="d-flex align-items-center mb-0">
            <span class="flex-grow-1">Unassign Member</span>
            <button matIconButton (click)="close()"><mat-icon class="material-icons-outlined">close</mat-icon></button>
        </h3>

        <mat-dialog-content class="pt-2">
            <div class="alert-shell mb-3 d-flex align-items-start gap-2">
                <mat-icon class="material-icons-outlined theme-orange">warning</mat-icon>
                <div>
                    <p class="mb-1 fw-medium">This removes workspace access only.</p>
                    <p class="small text-secondary mb-0">The user remains in the organization and can be re-invited later.</p>
                </div>
            </div>

            <div class="member-shell">
                <p class="mb-1"><strong>{{ data.memberName }}</strong></p>
                <p class="small text-secondary mb-0">{{ data.memberEmail || "No email" }}</p>
            </div>

            <p class="small text-secondary mt-3 mb-0">Workspace: {{ data.workspaceName }}</p>
        </mat-dialog-content>

        <mat-dialog-actions align="end">
            <button matButton (click)="close()">Cancel</button>
            <button matButton="filled" color="warn" (click)="confirm()">Unassign</button>
        </mat-dialog-actions>
    `,
    styles: [
        `
            .alert-shell {
                border: 1px solid rgba(255, 152, 0, 0.35);
                background: rgba(255, 193, 7, 0.08);
                border-radius: 12px;
                padding: 12px;
            }

            .member-shell {
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 12px;
                padding: 12px;
                background: #fff;
            }
        `,
    ],
})
export class MemberUnassignDialogComponent {
    private readonly dialogRef = inject(MatDialogRef<MemberUnassignDialogComponent>);
    readonly data = inject(MAT_DIALOG_DATA) as MemberUnassignDialogData;

    confirm(): void {
        this.dialogRef.close({ confirm: true } as MemberUnassignDialogResult);
    }

    close(): void {
        this.dialogRef.close();
    }
}
