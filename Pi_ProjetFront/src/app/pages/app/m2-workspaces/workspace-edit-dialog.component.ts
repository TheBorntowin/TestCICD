import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

export interface WorkspaceEditDialogData {
    name: string;
    slug: string;
}

export interface WorkspaceEditDialogResult {
    name: string;
    slug?: string;
}

@Component({
    selector: "app-workspace-edit-dialog",
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
    ],
    template: `
        <h3 mat-dialog-title class="d-flex align-items-center mb-0">
            <span class="flex-grow-1">Edit Workspace</span>
            <button matIconButton (click)="close()"><mat-icon class="material-icons-outlined">close</mat-icon></button>
        </h3>

        <mat-dialog-content class="pt-2">
            <mat-form-field appearance="outline" class="w-100 mb-2">
                <mat-label>Workspace Name</mat-label>
                <input matInput [(ngModel)]="name" />
            </mat-form-field>

            <mat-form-field appearance="outline" class="w-100 mb-0">
                <mat-label>Workspace Slug</mat-label>
                <input matInput [(ngModel)]="slug" />
            </mat-form-field>
        </mat-dialog-content>

        <mat-dialog-actions align="end">
            <button matButton (click)="close()">Cancel</button>
            <button matButton="filled" [disabled]="!canSubmit()" (click)="submit()">Save</button>
        </mat-dialog-actions>
    `,
})
export class WorkspaceEditDialogComponent {
    private readonly dialogRef = inject(MatDialogRef<WorkspaceEditDialogComponent>);
    private readonly data = inject(MAT_DIALOG_DATA) as WorkspaceEditDialogData;

    name = (this.data?.name || "").trim();
    slug = (this.data?.slug || "").trim();

    canSubmit(): boolean {
        return !!this.name.trim();
    }

    submit(): void {
        if (!this.canSubmit()) {
            return;
        }
        const result: WorkspaceEditDialogResult = {
            name: this.name.trim(),
            slug: this.slug.trim() || undefined,
        };
        this.dialogRef.close(result);
    }

    close(): void {
        this.dialogRef.close();
    }
}
