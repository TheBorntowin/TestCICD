import { Component, OnInit, ViewChild, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDividerModule } from "@angular/material/divider";
import { AuthService } from "../../../auth/auth.service";
import { M2TemplateService } from "./m2-template.service";

export interface CreateTemplateDialogResult { created: true; }

interface TemplateStarter {
    type: "SCRUM" | "KANBAN" | "WATERFALL" | "CUSTOM";
    icon: string;
    label: string;
    tagline: string;
    color: string;
    tags: string;
    useCaseDescription: string;
    effort: "LOW" | "MEDIUM" | "HIGH" | "";
    difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "";
    duration: number | null;
    teamStrategy: "MANUAL" | "AUTO" | "HYBRID";
    phases: string;
    roles: string;
    config: string;
}

const STARTERS: TemplateStarter[] = [
    {
        type: "SCRUM", icon: "sprint", label: "Scrum", tagline: "Iterative sprints with backlog & reviews",
        color: "#6366f1", tags: "agile, scrum, sprint, iterative",
        useCaseDescription: "Best for teams that deliver value incrementally through 2-week sprints with daily standups and retrospectives.",
        effort: "MEDIUM", difficulty: "INTERMEDIATE", duration: 90, teamStrategy: "AUTO",
        phases: '[{"name":"Product Backlog"},{"name":"Sprint Planning"},{"name":"Sprint Execution"},{"name":"Sprint Review"},{"name":"Sprint Retrospective"}]',
        roles: '[{"role":"SCRUM_MASTER","count":1},{"role":"PRODUCT_OWNER","count":1},{"role":"DEVELOPER","count":4},{"role":"QA","count":1}]',
        config: '{"methodology":"SCRUM","sprintDurationDays":14,"priority":"MEDIUM","maxTeamSize":8}',
    },
    {
        type: "KANBAN", icon: "view_kanban", label: "Kanban", tagline: "Continuous flow with visual board columns",
        color: "#0ea5e9", tags: "kanban, continuous, flow, board",
        useCaseDescription: "Best for support teams and ongoing feature work with continuous delivery and no fixed iterations.",
        effort: "LOW", difficulty: "BEGINNER", duration: 30, teamStrategy: "MANUAL",
        phases: '[{"name":"Backlog"},{"name":"Ready"},{"name":"In Progress"},{"name":"Review"},{"name":"Done"}]',
        roles: '[{"role":"KANBAN_LEAD","count":1},{"role":"DEVELOPER","count":3},{"role":"REVIEWER","count":1}]',
        config: '{"methodology":"KANBAN","wipLimit":5,"priority":"MEDIUM"}',
    },
    {
        type: "WATERFALL", icon: "water", label: "Waterfall", tagline: "Sequential phase-gate with clear milestones",
        color: "#14b8a6", tags: "waterfall, sequential, phase-gate, milestone",
        useCaseDescription: "Best for projects with fixed requirements, regulatory compliance, or when all requirements are known upfront.",
        effort: "HIGH", difficulty: "ADVANCED", duration: 180, teamStrategy: "MANUAL",
        phases: '[{"name":"Requirements"},{"name":"System Design"},{"name":"Implementation"},{"name":"Integration & Testing"},{"name":"Deployment"},{"name":"Maintenance"}]',
        roles: '[{"role":"PROJECT_MANAGER","count":1},{"role":"BUSINESS_ANALYST","count":1},{"role":"ARCHITECT","count":1},{"role":"DEVELOPER","count":5},{"role":"QA","count":2}]',
        config: '{"methodology":"WATERFALL","priority":"HIGH","approvalRequired":true}',
    },
    {
        type: "CUSTOM", icon: "tune", label: "Custom", tagline: "Build your own blueprint from scratch",
        color: "#f59e0b", tags: "", useCaseDescription: "",
        effort: "", difficulty: "", duration: null, teamStrategy: "MANUAL",
        phases: "", roles: "", config: "",
    },
];

@Component({
    selector: "app-create-template-dialog",
    standalone: true,
    imports: [
        CommonModule, FormsModule, MatDialogModule, MatButtonModule,
        MatFormFieldModule, MatInputModule, MatSelectModule,
        MatIconModule, MatSnackBarModule, MatDividerModule,
    ],
    styles: [`
        .step-track { display:flex; align-items:center; gap:0; }
        .step-node { display:flex; flex-direction:column; align-items:center; gap:4px; flex-shrink:0; }
        .step-circle { width:28px; height:28px; border-radius:50%; border:2px solid #cbd5e1; background:#fff; color:#94a3b8; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; transition:all .2s; }
        .step-label { font-size:10px; color:#94a3b8; white-space:nowrap; }
        .node-active .step-circle { border-color:var(--bs-primary,#6366f1); background:var(--bs-primary,#6366f1); color:#fff; }
        .node-active .step-label { color:var(--bs-primary,#6366f1); font-weight:600; }
        .node-done .step-circle { border-color:#22c55e; background:#22c55e; color:#fff; }
        .node-done .step-label { color:#22c55e; }
        .step-connector { flex:1; height:2px; background:#e2e8f0; margin:0 4px; margin-bottom:18px; min-width:16px; }
        .connector-done { background:#22c55e; }
        .summary-row { display:flex; justify-content:space-between; align-items:flex-start; padding:6px 0; border-bottom:1px solid rgba(0,0,0,0.06); gap:12px; }
        .summary-row span { color:#94a3b8; font-size:13px; flex-shrink:0; }
        .summary-row strong { font-size:13px; text-align:right; word-break:break-word; }
        .starter-card { border:1.5px solid rgba(0,0,0,0.1); border-radius:14px; padding:14px; cursor:pointer; transition:all .2s; height:100%; }
        .starter-card:hover { border-color:var(--bs-primary,#6366f1); background:rgba(99,102,241,0.04); transform:translateY(-2px); box-shadow:0 6px 16px rgba(0,0,0,0.08); }
        .starter-card-selected { border-color:var(--bs-primary,#6366f1); background:rgba(99,102,241,0.06); box-shadow:0 0 0 3px rgba(99,102,241,0.18); }
        .starter-icon { width:40px; height:40px; border-radius:11px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
    `],
    template: `
        <!-- Fixed header -->
        <div style="padding:20px 24px 0;">
            <div class="d-flex align-items-center justify-content-between mb-3">
                @if (mode() === 'pick') {
                    <div>
                        <h3 class="mb-0">New Template</h3>
                        <p class="small text-secondary mb-0">Choose a starting point</p>
                    </div>
                } @else {
                    <h3 class="mb-0">New Template</h3>
                }
                <button matIconButton (click)="close()"><mat-icon class="material-icons-outlined">close</mat-icon></button>
            </div>

            <!-- Step indicator (wizard mode only) -->
            @if (mode() === 'wizard') {
                <div class="step-track pb-3">
                    @for (label of stepLabels; track $index) {
                        <div class="step-node" [class.node-active]="currentStep() === $index" [class.node-done]="currentStep() > $index">
                            <div class="step-circle">
                                @if (currentStep() > $index) {
                                    <mat-icon style="font-size:14px;width:14px;height:14px;line-height:14px;">check</mat-icon>
                                } @else { {{ $index + 1 }} }
                            </div>
                            <span class="step-label">{{ label }}</span>
                        </div>
                        @if ($index < stepLabels.length - 1) {
                            <div class="step-connector" [class.connector-done]="currentStep() > $index"></div>
                        }
                    }
                </div>
            }
            <mat-divider></mat-divider>
        </div>

        <!-- Scrollable body -->
        <mat-dialog-content style="padding:16px 24px;flex:1 1 auto;overflow-y:auto;max-height:calc(90vh - 220px);">

            <!-- ============ STARTER PICKER MODE ============ -->
            @if (mode() === 'pick') {
                <p class="text-secondary small mb-3">Pick a blueprint to get started fast, or build your own from scratch.</p>
                <div class="row gx-3 gy-3">
                    @for (s of starters; track s.type) {
                        <div class="col-6">
                            <div class="starter-card" [class.starter-card-selected]="pickedType() === s.type" (click)="pickStarter(s)">
                                <div class="d-flex align-items-center gap-2 mb-2">
                                    <div class="starter-icon" [style.background]="s.color + '18'" [style.color]="s.color">
                                        <mat-icon class="material-icons-outlined">{{ s.icon }}</mat-icon>
                                    </div>
                                    <h5 class="mb-0">{{ s.label }}</h5>
                                    @if (pickedType() === s.type) {
                                        <mat-icon class="material-icons-outlined ms-auto" style="color:#22c55e;font-size:18px;width:18px;height:18px;">check_circle</mat-icon>
                                    }
                                </div>
                                <p class="text-secondary small mb-2">{{ s.tagline }}</p>
                                @if (s.phases) {
                                    <div class="d-flex gap-1 flex-wrap">
                                        <span class="badge badge-light" style="font-size:9px;">{{ phaseCount(s.phases) }} phases</span>
                                        <span class="badge badge-light" style="font-size:9px;">{{ roleCount(s.roles) }} roles</span>
                                        @if (s.duration) { <span class="badge badge-light" style="font-size:9px;">{{ s.duration }}d</span> }
                                        @if (s.effort) { <span class="badge badge-light" style="font-size:9px;">{{ s.effort | titlecase }}</span> }
                                    </div>
                                } @else {
                                    <p class="small text-secondary mb-0 fst-italic" style="font-size:11px;">All fields open — fill in your own</p>
                                }
                            </div>
                        </div>
                    }
                </div>

                @if (pickedType()) {
                    <div class="mt-3 p-3 rounded" style="background:rgba(99,102,241,0.06);border:1px solid rgba(99,102,241,0.2);">
                        <p class="small mb-0">
                            <mat-icon class="material-icons-outlined align-middle text-theme" style="font-size:14px;width:14px;height:14px;">info</mat-icon>
                            <strong class="text-theme">{{ pickedType() }}</strong> — {{ pickedStarter()?.useCaseDescription }}
                        </p>
                    </div>
                }
            }

            <!-- ============ WIZARD MODE ============ -->

            <!-- Step 0: Basics -->
            @if (mode() === 'wizard' && currentStep() === 0) {
                <form #basicsForm="ngForm">
                    <p class="text-secondary small mb-3">Review and refine your template basics.</p>

                    <mat-form-field appearance="outline" class="w-100 mb-2">
                        <mat-label>Template Name *</mat-label>
                        <input matInput name="name" [(ngModel)]="name" required minlength="3" maxlength="150"
                            placeholder="e.g. Sprint Planning Template"
                            #nameCtrl="ngModel" />
                        <mat-hint align="end">{{ name.length }}/150</mat-hint>
                        @if (nameCtrl.invalid && nameCtrl.touched) {
                            @if (nameCtrl.errors?.['required']) { <mat-error>Name is required.</mat-error> }
                            @else if (nameCtrl.errors?.['minlength']) { <mat-error>Name must be at least 3 characters.</mat-error> }
                        }
                    </mat-form-field>

                    <mat-form-field appearance="outline" class="w-100 mb-2">
                        <mat-label>Template Type *</mat-label>
                        <mat-select name="templateType" [(ngModel)]="templateType" required>
                            <mat-option value="SCRUM">Scrum</mat-option>
                            <mat-option value="KANBAN">Kanban</mat-option>
                            <mat-option value="WATERFALL">Waterfall</mat-option>
                            <mat-option value="CUSTOM">Custom</mat-option>
                        </mat-select>
                    </mat-form-field>

                    <mat-form-field appearance="outline" class="w-100 mb-2">
                        <mat-label>Use Case Description</mat-label>
                        <textarea matInput name="useCaseDescription" [(ngModel)]="useCaseDescription" rows="2" placeholder="When should teams use this template?"></textarea>
                    </mat-form-field>

                    <mat-form-field appearance="outline" class="w-100 mb-2">
                        <mat-label>Preview Image URL</mat-label>
                        <input matInput name="previewImageUrl" [(ngModel)]="previewImageUrl" placeholder="https://..." />
                        <mat-hint>Optional thumbnail shown on template cards</mat-hint>
                    </mat-form-field>
                </form>
            }

            <!-- Step 1: Complexity -->
            @if (mode() === 'wizard' && currentStep() === 1) {
                <p class="text-secondary small mb-3">Set complexity and team strategy for this template.</p>
                <form #complexityForm="ngForm">
                    <div class="row gx-3">
                        <div class="col-12 col-md-6">
                            <mat-form-field appearance="outline" class="w-100 mb-2">
                                <mat-label>Estimated Effort</mat-label>
                                <mat-select name="estimatedEffort" [(ngModel)]="estimatedEffort">
                                    <mat-option value="">— Not specified —</mat-option>
                                    <mat-option value="LOW">Low</mat-option>
                                    <mat-option value="MEDIUM">Medium</mat-option>
                                    <mat-option value="HIGH">High</mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="col-12 col-md-6">
                            <mat-form-field appearance="outline" class="w-100 mb-2">
                                <mat-label>Difficulty Level</mat-label>
                                <mat-select name="difficultyLevel" [(ngModel)]="difficultyLevel">
                                    <mat-option value="">— Not specified —</mat-option>
                                    <mat-option value="BEGINNER">Beginner</mat-option>
                                    <mat-option value="INTERMEDIATE">Intermediate</mat-option>
                                    <mat-option value="ADVANCED">Advanced</mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="col-12 col-md-6">
                            <mat-form-field appearance="outline" class="w-100 mb-2">
                                <mat-label>Estimated Duration (days)</mat-label>
                                <input matInput type="number" name="estimatedDurationDays" [(ngModel)]="estimatedDurationDays" min="1" placeholder="e.g. 30" />
                            </mat-form-field>
                        </div>
                        <div class="col-12 col-md-6">
                            <mat-form-field appearance="outline" class="w-100 mb-2">
                                <mat-label>Team Strategy</mat-label>
                                <mat-select name="teamStrategy" [(ngModel)]="teamStrategy">
                                    <mat-option value="MANUAL">Manual</mat-option>
                                    <mat-option value="AUTO">Auto</mat-option>
                                    <mat-option value="HYBRID">Hybrid</mat-option>
                                </mat-select>
                            </mat-form-field>
                        </div>
                        <div class="col-12">
                            <mat-form-field appearance="outline" class="w-100 mb-2">
                                <mat-label>Tags</mat-label>
                                <input matInput name="tags" [(ngModel)]="tags" placeholder="e.g. agile, sprint, backlog" />
                                <mat-hint>Comma-separated tags for search discovery</mat-hint>
                            </mat-form-field>
                        </div>
                    </div>
                </form>
            }

            <!-- Step 2: Structure -->
            @if (mode() === 'wizard' && currentStep() === 2) {
                <p class="text-secondary small mb-3">Define the default structure — phases, roles, and project config JSON.</p>
                <mat-form-field appearance="outline" class="w-100 mb-2">
                    <mat-label>Default Phases (JSON)</mat-label>
                    <textarea matInput [(ngModel)]="defaultPhasesJson" rows="3" placeholder='[{"name":"Planning"},{"name":"Execution"}]'></textarea>
                    @if (defaultPhasesJson) { <mat-hint>{{ phaseCount(defaultPhasesJson) }} phases parsed</mat-hint> }
                </mat-form-field>

                <mat-form-field appearance="outline" class="w-100 mb-2">
                    <mat-label>Default Roles (JSON)</mat-label>
                    <textarea matInput [(ngModel)]="defaultRolesJson" rows="3" placeholder='[{"role":"SCRUM_MASTER","count":1},{"role":"DEVELOPER","count":4}]'></textarea>
                    @if (defaultRolesJson) { <mat-hint>{{ roleCount(defaultRolesJson) }} roles parsed</mat-hint> }
                </mat-form-field>

                <mat-form-field appearance="outline" class="w-100 mb-2">
                    <mat-label>Default Project Config (JSON)</mat-label>
                    <textarea matInput [(ngModel)]="defaultProjectConfigJson" rows="3" placeholder='{"priority":"MEDIUM","methodology":"SCRUM"}'></textarea>
                    <mat-hint>Pre-fills the project creation form (optional)</mat-hint>
                </mat-form-field>
            }

            <!-- Step 3: Review -->
            @if (mode() === 'wizard' && currentStep() === 3) {
                <p class="text-secondary small mb-3">Review before creating your template.</p>
                <div class="summary-row"><span>Name</span><strong>{{ name }}</strong></div>
                <div class="summary-row"><span>Type</span><strong>{{ templateType }}</strong></div>
                <div class="summary-row"><span>Effort</span><strong>{{ estimatedEffort || '—' }}</strong></div>
                <div class="summary-row"><span>Difficulty</span><strong>{{ difficultyLevel || '—' }}</strong></div>
                <div class="summary-row"><span>Duration</span><strong>{{ estimatedDurationDays ? estimatedDurationDays + ' days' : '—' }}</strong></div>
                <div class="summary-row"><span>Team Strategy</span><strong>{{ teamStrategy }}</strong></div>
                <div class="summary-row"><span>Tags</span><strong>{{ tags || '—' }}</strong></div>
                <div class="summary-row"><span>Use Case</span><strong>{{ useCaseDescription || '—' }}</strong></div>
                <div class="summary-row"><span>Phases JSON</span><strong>{{ defaultPhasesJson ? phaseCount(defaultPhasesJson) + ' phases' : '—' }}</strong></div>
                <div class="summary-row"><span>Roles JSON</span><strong>{{ defaultRolesJson ? roleCount(defaultRolesJson) + ' roles' : '—' }}</strong></div>
                <div class="summary-row"><span>Config JSON</span><strong>{{ defaultProjectConfigJson ? '✓ provided' : '—' }}</strong></div>
                <p class="small text-secondary mt-3 mb-0">The template will be saved as <strong>DRAFT</strong>. You can publish it for review from the Templates Hub.</p>
            }
        </mat-dialog-content>

        <!-- Fixed footer -->
        <mat-divider></mat-divider>
        <mat-dialog-actions align="end" class="px-4 pb-3 pt-2">
            @if (mode() === 'pick') {
                <button matButton (click)="close()">Cancel</button>
                <button matButton="filled" [disabled]="!pickedType()" (click)="confirmPick()">
                    Continue
                    <mat-icon class="material-icons-outlined">arrow_forward</mat-icon>
                </button>
            }
            @if (mode() === 'wizard') {
                @if (currentStep() === 0) {
                    <button matButton (click)="backToPick()">
                        <mat-icon class="material-icons-outlined">arrow_back</mat-icon> Change Starter
                    </button>
                }
                @if (currentStep() > 0) {
                    <button matButton (click)="prevStep()">
                        <mat-icon class="material-icons-outlined">arrow_back</mat-icon> Back
                    </button>
                }
                @if (currentStep() < 3) {
                    <button matButton="filled" (click)="nextStep()">
                        Continue <mat-icon class="material-icons-outlined">arrow_forward</mat-icon>
                    </button>
                }
                @if (currentStep() === 3) {
                    <button matButton="filled" (click)="submit()" [disabled]="submitting()">
                        @if (submitting()) { Creating... } @else { Create Template }
                    </button>
                }
            }
        </mat-dialog-actions>
    `,
})
export class CreateTemplateDialogComponent implements OnInit {
    @ViewChild("basicsForm") basicsForm?: NgForm;

    private readonly dialogRef = inject(MatDialogRef<CreateTemplateDialogComponent>);
    private readonly templateService = inject(M2TemplateService);
    private readonly authService = inject(AuthService);
    private readonly snackBar = inject(MatSnackBar);
    private readonly dialogData = inject<{ starterType?: string } | null>(MAT_DIALOG_DATA, { optional: true });

    readonly mode = signal<"pick" | "wizard">("pick");
    readonly pickedType = signal<string>("");
    readonly currentStep = signal(0);
    readonly stepLabels = ["Basics", "Complexity", "Structure", "Review"];
    readonly submitting = signal(false);

    readonly starters: TemplateStarter[] = STARTERS;

    // Computed: find the full starter object from pickedType
    pickedStarter(): TemplateStarter | undefined {
        return this.starters.find(s => s.type === this.pickedType());
    }

    // Step 0
    name = "";
    templateType = "CUSTOM";
    previewImageUrl = "";
    useCaseDescription = "";
    // Step 1
    estimatedEffort = "";
    difficultyLevel = "";
    estimatedDurationDays: number | null = null;
    teamStrategy = "MANUAL";
    tags = "";
    // Step 2
    defaultProjectConfigJson = "";
    defaultPhasesJson = "";
    defaultRolesJson = "";

    ngOnInit(): void {
        if (this.dialogData?.starterType) {
            const starter = this.starters.find(s => s.type === this.dialogData!.starterType);
            if (starter) {
                this.pickedType.set(starter.type);
                this.applyStarter(starter);
                this.mode.set("wizard");
            }
        }
    }

    pickStarter(s: TemplateStarter): void {
        this.pickedType.set(s.type);
    }

    confirmPick(): void {
        const starter = this.pickedStarter();
        if (!starter) return;
        this.applyStarter(starter);
        this.mode.set("wizard");
        this.currentStep.set(0);
    }

    private applyStarter(s: TemplateStarter): void {
        this.templateType = s.type;
        this.estimatedEffort = s.effort;
        this.difficultyLevel = s.difficulty;
        this.estimatedDurationDays = s.duration;
        this.teamStrategy = s.teamStrategy;
        this.tags = s.tags;
        this.useCaseDescription = s.useCaseDescription;
        this.defaultProjectConfigJson = s.config;
        this.defaultPhasesJson = s.phases;
        this.defaultRolesJson = s.roles;
        if (s.type !== "CUSTOM") {
            this.name = s.label + " Template";
        }
    }

    backToPick(): void {
        this.mode.set("pick");
        this.currentStep.set(0);
    }

    nextStep(): void {
        if (this.currentStep() === 0) {
            if (this.basicsForm) {
                this.basicsForm.form.markAllAsTouched();
                if (this.basicsForm.invalid) return;
            } else {
                if (!this.name.trim() || this.name.trim().length < 3) return;
            }
        }
        if (this.currentStep() < 3) this.currentStep.update(s => s + 1);
    }

    prevStep(): void {
        if (this.currentStep() > 0) this.currentStep.update(s => s - 1);
    }

    submit(): void {
        if (this.submitting()) return;
        const userId = this.authService.currentUser()?.id;
        if (!userId) return;

        this.submitting.set(true);
        const body: Record<string, unknown> = {
            name: this.name.trim(),
            templateType: this.templateType,
            teamStrategy: this.teamStrategy,
            createdBy: userId,
        };
        if (this.previewImageUrl.trim()) body["previewImageUrl"] = this.previewImageUrl.trim();
        if (this.estimatedEffort) body["estimatedEffort"] = this.estimatedEffort;
        if (this.difficultyLevel) body["difficultyLevel"] = this.difficultyLevel;
        if (this.estimatedDurationDays) body["estimatedDurationDays"] = this.estimatedDurationDays;
        if (this.tags.trim()) body["tags"] = this.tags.trim();
        if (this.useCaseDescription.trim()) body["useCaseDescription"] = this.useCaseDescription.trim();
        if (this.defaultProjectConfigJson.trim()) body["defaultProjectConfigJson"] = this.defaultProjectConfigJson.trim();
        if (this.defaultPhasesJson.trim()) body["defaultPhasesJson"] = this.defaultPhasesJson.trim();
        if (this.defaultRolesJson.trim()) body["defaultRolesJson"] = this.defaultRolesJson.trim();

        this.templateService.create(body).subscribe({
            next: () => {
                this.snackBar.open("Template created as DRAFT.", "Close", { duration: 3500 });
                this.dialogRef.close({ created: true } as CreateTemplateDialogResult);
            },
            error: () => {
                this.submitting.set(false);
                this.snackBar.open("Failed to create template.", "Close", { duration: 4000 });
            },
        });
    }

    phaseCount(json: string): number {
        try { const a = JSON.parse(json); return Array.isArray(a) ? a.length : 0; } catch { return 0; }
    }

    roleCount(json: string): number {
        try { const a = JSON.parse(json); return Array.isArray(a) ? a.length : 0; } catch { return 0; }
    }

    close(): void { this.dialogRef.close(); }
}
