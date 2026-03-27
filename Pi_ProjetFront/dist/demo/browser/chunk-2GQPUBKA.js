import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-35BPSZ5W.js";
import {
  register
} from "./chunk-S5VFQUTS.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MWLO4FO4.js";
import {
  MatOption
} from "./chunk-D63GK34V.js";
import {
  MatChipsModule
} from "./chunk-5G2FMPWG.js";
import {
  MatListModule
} from "./chunk-ALLV6QEF.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-45QHUHCH.js";
import {
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-ZLA4QS3A.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import {
  MatError,
  MatFormField,
  MatLabel
} from "./chunk-XPQBAS5O.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-HGLJSDQ3.js";
import {
  CommonModule,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/task-manage/create-edit-task.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CreateEditTaskComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Title is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateEditTaskComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r1);
  }
}
function CreateEditTaskComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Type is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateEditTaskComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const priority_r2 = ctx.$implicit;
    \u0275\u0275property("value", priority_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(priority_r2);
  }
}
function CreateEditTaskComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Priority is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateEditTaskComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Effort is required.");
    \u0275\u0275elementEnd();
  }
}
function CreateEditTaskComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10)(1, "div", 18)(2, "div", 16);
    \u0275\u0275element(3, "img", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "p", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const member_r3 = ctx.$implicit;
    \u0275\u0275property("value", member_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("alt", \u0275\u0275interpolate1("", member_r3.name, " avatar"))("src", member_r3.avatarUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("- ", member_r3.title);
  }
}
register();
var CreateEditTaskComponent = class _CreateEditTaskComponent {
  constructor() {
    this.dialogRef = inject(MatDialogRef);
    this.fb = inject(FormBuilder);
    this.data = inject(MAT_DIALOG_DATA);
    this.taskTypes = ["Development", "Design", "Backend", "Bug", "Design Bug"];
    this.taskPriorities = ["High", "Medium", "Low"];
    this.taskForm = this.fb.group({
      title: ["", Validators.required],
      description: [""],
      type: [this.taskTypes[0], Validators.required],
      priority: [this.taskPriorities[1], Validators.required],
      // Default to Medium
      assignedTo: [this.data.members[0].name, Validators.required],
      // Default to first member
      assignHours: ["8h", Validators.required]
      // Default to 8h
    });
  }
  onSubmit() {
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;
      const newTask = __spreadProps(__spreadValues({}, formValue), {
        projectId: this.data.projectId,
        status: "new",
        // New tasks always start in 'new' status
        loggedHours: "0h",
        effortLogs: []
      });
      this.dialogRef.close(newTask);
    }
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  static {
    this.\u0275fac = function CreateEditTaskComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateEditTaskComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateEditTaskComponent, selectors: [["app-create-edit-task"]], decls: 52, vars: 7, consts: [["mat-dialog-title", ""], [1, "text-secondary", "ps-1"], [3, "ngSubmit", "formGroup"], [1, "mat-typography"], ["appearance", "outline", 1, "w-100", "mb-lg-2"], ["matInput", "", "formControlName", "title", "required", ""], ["matInput", "", "formControlName", "description", "rows", "3"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-md-4"], ["formControlName", "type", "required", ""], [3, "value"], ["formControlName", "priority", "required", ""], ["matInput", "", "formControlName", "assignHours", "required", ""], ["formControlName", "assignedTo", "required", ""], [1, "col"], ["matButton", "filled", "color", "primary", "type", "submit", 3, "disabled"], [1, "col-auto"], ["matButton", "", "type", "button", 1, "theme-red", 3, "click"], [1, "row", "gx-2", "align-items-center"], ["onerror", "this.onerror=null;", 1, "rounded-circle", "avatar", "avatar-30", 3, "src", "alt"], [1, "col", "maxwidth-dynamic", 2, "--mw-dynamic", "calc(100% - 30px - 0.5rem)"], [1, "mb-0", "text-truncated"], [1, "small", "text-secondary", "text-truncated"]], template: function CreateEditTaskComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1, " Create New Task");
        \u0275\u0275element(2, "br");
        \u0275\u0275elementStart(3, "small", 1);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "form", 2);
        \u0275\u0275listener("ngSubmit", function CreateEditTaskComponent_Template_form_ngSubmit_5_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(6, "mat-dialog-content", 3)(7, "mat-form-field", 4)(8, "mat-label");
        \u0275\u0275text(9, "Task Title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(10, "input", 5);
        \u0275\u0275conditionalCreate(11, CreateEditTaskComponent_Conditional_11_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-form-field", 4)(13, "mat-label");
        \u0275\u0275text(14, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "textarea", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "mat-form-field", 4)(19, "mat-label");
        \u0275\u0275text(20, "Task Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-select", 9);
        \u0275\u0275repeaterCreate(22, CreateEditTaskComponent_For_23_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(24, CreateEditTaskComponent_Conditional_24_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 8)(26, "mat-form-field", 4)(27, "mat-label");
        \u0275\u0275text(28, "Priority");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-select", 11);
        \u0275\u0275repeaterCreate(30, CreateEditTaskComponent_For_31_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(32, CreateEditTaskComponent_Conditional_32_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 8)(34, "mat-form-field", 4)(35, "mat-label");
        \u0275\u0275text(36, "Effort (hrs)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "input", 12);
        \u0275\u0275conditionalCreate(38, CreateEditTaskComponent_Conditional_38_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "mat-form-field", 4)(40, "mat-label");
        \u0275\u0275text(41, "Assigned To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-select", 13);
        \u0275\u0275repeaterCreate(43, CreateEditTaskComponent_For_44_Template, 9, 6, "mat-option", 10, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "mat-dialog-actions")(46, "div", 14)(47, "button", 15);
        \u0275\u0275text(48, "Create Task");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 16)(50, "button", 17);
        \u0275\u0275listener("click", function CreateEditTaskComponent_Template_button_click_50_listener() {
          return ctx.dialogRef.close();
        });
        \u0275\u0275text(51, "Cancel");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_4_0;
        let tmp_6_0;
        let tmp_7_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Project: ", ctx.data.projectName);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.taskForm);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(((tmp_2_0 = ctx.taskForm.get("title")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.taskForm.get("title")) == null ? null : tmp_2_0.touched) ? 11 : -1);
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.taskTypes);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_4_0 = ctx.taskForm.get("type")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.taskForm.get("type")) == null ? null : tmp_4_0.touched) ? 24 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.taskPriorities);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_6_0 = ctx.taskForm.get("priority")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.taskForm.get("priority")) == null ? null : tmp_6_0.touched) ? 32 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(((tmp_7_0 = ctx.taskForm.get("assignHours")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.taskForm.get("assignHours")) == null ? null : tmp_7_0.touched) ? 38 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.data.members);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.taskForm.invalid);
      }
    }, dependencies: [CommonModule, MatCardModule, MatIconModule, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, MatFormFieldModule, MatFormField, MatLabel, MatError, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MatListModule, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatChipsModule, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateEditTaskComponent, [{
    type: Component,
    args: [{ selector: "app-create-edit-task", standalone: true, imports: [CommonModule, MatCardModule, MatIconModule, MatDialogModule, MatButtonModule, MatFormFieldModule, FormsModule, MatListModule, MatInputModule, MatSelectModule, MatChipsModule, ReactiveFormsModule], template: `
        <h2 mat-dialog-title>
            Create New Task<br /><small class="text-secondary ps-1">Project: {{ data.projectName }}</small>
        </h2>
        <form [formGroup]="taskForm" (ngSubmit)="onSubmit()">
            <mat-dialog-content class="mat-typography">
                <!-- Title -->
                <mat-form-field appearance="outline" class="w-100 mb-lg-2">
                    <mat-label>Task Title</mat-label>
                    <input matInput formControlName="title" required />
                    @if (taskForm.get('title')?.invalid && taskForm.get('title')?.touched) {
                    <mat-error>Title is required.</mat-error>
                    }
                </mat-form-field>

                <!-- Description -->
                <mat-form-field appearance="outline" class="w-100 mb-lg-2">
                    <mat-label>Description</mat-label>
                    <textarea matInput formControlName="description" rows="3"></textarea>
                </mat-form-field>

                <div class="row gx-3 gx-lg-4">
                    <div class="col-12 col-md-4">
                        <!-- Type -->
                        <mat-form-field appearance="outline" class="w-100 mb-lg-2">
                            <mat-label>Task Type</mat-label>
                            <mat-select formControlName="type" required>
                                @for (type of taskTypes; track type) {
                                <mat-option [value]="type">{{ type }}</mat-option>
                                }
                            </mat-select>
                            @if (taskForm.get('type')?.invalid && taskForm.get('type')?.touched) {
                            <mat-error>Type is required.</mat-error>
                            }
                        </mat-form-field>
                    </div>
                    <div class="col-12 col-md-4">
                        <!-- Priority -->
                        <mat-form-field appearance="outline" class="w-100 mb-lg-2">
                            <mat-label>Priority</mat-label>
                            <mat-select formControlName="priority" required>
                                @for (priority of taskPriorities; track priority) {
                                <mat-option [value]="priority">{{ priority }}</mat-option>
                                }
                            </mat-select>
                            @if (taskForm.get('priority')?.invalid && taskForm.get('priority')?.touched) {
                            <mat-error>Priority is required.</mat-error>
                            }
                        </mat-form-field>
                    </div>
                    <div class="col-12 col-md-4">
                        <!-- Assigned Hours -->
                        <mat-form-field appearance="outline" class="w-100 mb-lg-2">
                            <mat-label>Effort (hrs)</mat-label>
                            <input matInput formControlName="assignHours" required />
                            @if (taskForm.get('assignHours')?.invalid && taskForm.get('assignHours')?.touched) {
                            <mat-error>Effort is required.</mat-error>
                            }
                        </mat-form-field>
                    </div>
                </div>

                <!-- Assigned To -->
                <mat-form-field appearance="outline" class="w-100 mb-lg-2">
                    <mat-label>Assigned To</mat-label>
                    <mat-select formControlName="assignedTo" required>
                        @for (member of data.members; track member.id) {
                        <mat-option [value]="member.name">
                            <div class="row gx-2 align-items-center">
                                <div class="col-auto">
                                    <img [src]="member.avatarUrl" alt="{{ member.name }} avatar" class="rounded-circle avatar avatar-30" onerror="this.onerror=null;" />
                                </div>
                                <div class="col maxwidth-dynamic" style="--mw-dynamic:calc(100% - 30px - 0.5rem)">
                                    <p class="mb-0 text-truncated">{{ member.name }}</p>
                                    <p class="small text-secondary text-truncated">- {{ member.title }}</p>
                                </div>
                            </div>
                        </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </mat-dialog-content>

            <mat-dialog-actions>
                <div class="col">
                    <button matButton="filled" color="primary" type="submit" [disabled]="taskForm.invalid">Create Task</button>
                </div>
                <div class="col-auto">
                    <button matButton type="button" (click)="dialogRef.close()" class="theme-red">Cancel</button>
                </div>
            </mat-dialog-actions>
        </form>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateEditTaskComponent, { className: "CreateEditTaskComponent", filePath: "src/app/pages/app/task-manage/create-edit-task.component.ts", lineNumber: 212 });
})();

export {
  CreateEditTaskComponent
};
//# sourceMappingURL=chunk-2GQPUBKA.js.map
