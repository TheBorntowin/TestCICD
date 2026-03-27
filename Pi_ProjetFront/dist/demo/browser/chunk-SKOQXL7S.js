import {
  MatAutocompleteModule
} from "./chunk-SCEBMLYD.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-OANSMTPI.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "./chunk-RG7V5CFX.js";
import {
  provideNativeDateAdapter
} from "./chunk-IJRF7KWR.js";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-35BPSZ5W.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-MWLO4FO4.js";
import {
  MatOption
} from "./chunk-D63GK34V.js";
import {
  MatChipsModule
} from "./chunk-5G2FMPWG.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-CWBJY2AK.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-45QHUHCH.js";
import {
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule,
  MatMiniFabButton
} from "./chunk-ZLA4QS3A.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import {
  MatFormField,
  MatLabel,
  MatSuffix
} from "./chunk-XPQBAS5O.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-HGLJSDQ3.js";
import {
  CommonModule,
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Inject,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-O4O7EFUR.js";

// src/app/components/employee-select/employee-select2.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EmployeeSelect2Component_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSelectedNames(), " ");
  }
}
function EmployeeSelect2Component_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275element(3, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "p", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 12);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    \u0275\u0275property("value", employee_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("alt", \u0275\u0275interpolate1("", employee_r2.name, " avatar"))("src", employee_r2.avatarUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(employee_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(employee_r2.title);
  }
}
var EmployeeSelect2Component = class _EmployeeSelect2Component {
  constructor() {
    this.ALL_ID = 0;
    this.employeeList = [
      { id: 1, name: "Ava Johnson", avatarUrl: "assets/img/user-1.jpg", title: "Software Engineer" },
      { id: 2, name: "Ben Smith", avatarUrl: "assets/img/user-3.jpg", title: "Product Manager" },
      { id: 3, name: "Chloe Lee", avatarUrl: "assets/img/user-2.jpg", title: "UX Designer" },
      { id: 4, name: "David Chen", avatarUrl: "assets/img/user-5.jpg", title: "Data Analyst" },
      { id: 5, name: "Ella Garcia", avatarUrl: "assets/img/user-4.jpg", title: "Marketing Specialist" },
      { id: 6, name: "Finn O'Connell", avatarUrl: "assets/img/user-7.jpg", title: "Sales Director" },
      { id: 7, name: "Grace Kim", avatarUrl: "assets/img/user-6.jpg", title: "HR Coordinator" },
      { id: 8, name: "Henry Davis", avatarUrl: "assets/img/user-9.jpg", title: "DevOps Engineer" },
      { id: 9, name: "Ivy Ross", avatarUrl: "assets/img/user-8.jpg", title: "Financial Controller" },
      { id: 10, name: "Jack Miller", avatarUrl: "assets/img/user-9.jpg", title: "CTO" }
    ];
    this.employeeIds = computed(() => this.employeeList.map((e) => e.id), ...ngDevMode ? [{ debugName: "employeeIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedEmployees = signal(this.employeeIds(), ...ngDevMode ? [{ debugName: "selectedEmployees" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isAllSelected = computed(() => this.selectedEmployees().length === this.employeeList.length, ...ngDevMode ? [{ debugName: "isAllSelected" }] : (
      /* istanbul ignore next */
      []
    ));
    this.getMatSelectValue = computed(() => {
      const selected = this.selectedEmployees();
      if (this.isAllSelected()) {
        return [this.ALL_ID, ...selected];
      }
      return selected;
    }, ...ngDevMode ? [{ debugName: "getMatSelectValue" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  getSelectedNames() {
    const selectedIds = this.selectedEmployees();
    const names = selectedIds.map((id) => this.employeeList.find((e) => e.id === id)?.name);
    return names.join(", ");
  }
  handleSelectionChange(newSelection) {
    const isAllInNewSelection = newSelection.includes(this.ALL_ID);
    const wasAllSelected = this.isAllSelected();
    if (isAllInNewSelection) {
      this.selectedEmployees.set(this.employeeIds());
    } else if (wasAllSelected && !isAllInNewSelection) {
      this.selectedEmployees.set([]);
    } else {
      const employeeIdsOnly = newSelection.filter((id) => id !== this.ALL_ID);
      this.selectedEmployees.set(employeeIdsOnly);
    }
  }
  static {
    this.\u0275fac = function EmployeeSelect2Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmployeeSelect2Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeSelect2Component, selectors: [["app-employee-select2"]], features: [\u0275\u0275ProvidersFeature([])], decls: 15, vars: 9, consts: [["appearance", "outline", 1, "w-100"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "mat-option-all", 3, "value", "selected"], [1, "flex", "items-center", "space-x-3", "p-1", "font-extrabold", "text-indigo-600", "bg-indigo-50", "rounded-md"], [1, ""], [1, "small", "text-secondary"], [2, "min-height", "54px", 3, "value"], [1, "row", "gx-2", "align-items-center"], [1, "col-auto"], ["onerror", "this.onerror=null; this.src='https://placehold.co/40x40/ccc/black?text=NA'", 1, "rounded-circle", "avatar", "avatar-30", 3, "src", "alt"], [1, "col", "maxwidth-dynamic", 2, "--mw-dynamic", "calc(100% - 30px - 0.5rem)"], [1, "mb-0", "text-truncated"], [1, "small", "text-secondary", "text-truncated"]], template: function EmployeeSelect2Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "mat-label");
        \u0275\u0275text(2, "Team Member");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-select", 1);
        \u0275\u0275listener("ngModelChange", function EmployeeSelect2Component_Template_mat_select_ngModelChange_3_listener($event) {
          return ctx.handleSelectionChange($event);
        });
        \u0275\u0275elementStart(4, "mat-select-trigger");
        \u0275\u0275conditionalCreate(5, EmployeeSelect2Component_Conditional_5_Template, 2, 1, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-option", 2)(7, "div", 3)(8, "span", 4);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 5);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(12, "mat-divider");
        \u0275\u0275repeaterCreate(13, EmployeeSelect2Component_For_14_Template, 9, 6, "mat-option", 6, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275interpolate1("Select (0/", ctx.employeeList.length, ")"))("ngModel", ctx.getMatSelectValue());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selectedEmployees().length > 0 ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.ALL_ID)("selected", ctx.isAllSelected());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isAllSelected() ? "Deselect" : "All", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("(", ctx.selectedEmployees().length, "/", ctx.employeeList.length, ")");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.employeeList);
      }
    }, dependencies: [MatSelectModule, MatFormField, MatLabel, MatSelect, MatSelectTrigger, MatOption, MatInputModule, MatDividerModule, MatDivider, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeSelect2Component, [{
    type: Component,
    args: [{ selector: "app-employee-select2", standalone: true, imports: [MatSelectModule, MatInputModule, MatDividerModule, MatSelectModule, FormsModule], template: ` <mat-form-field class="w-100" appearance="outline">
        <mat-label>Team Member</mat-label>
        <mat-select [ngModel]="getMatSelectValue()" (ngModelChange)="handleSelectionChange($event)" multiple placeholder="Select (0/{{ employeeList.length }})">
            <mat-select-trigger>
                @if (selectedEmployees().length> 0 ) {
                <span> {{ getSelectedNames() }} </span>
                }
            </mat-select-trigger>
            <mat-option [value]="ALL_ID" [selected]="isAllSelected()" class="mat-option-all">
                <div class="flex items-center space-x-3 p-1 font-extrabold text-indigo-600 bg-indigo-50 rounded-md">
                    <span class="">
                        {{ isAllSelected() ? "Deselect" : "All" }}
                    </span>
                    <span class="small text-secondary">({{ selectedEmployees().length }}/{{ employeeList.length }})</span>
                </div>
            </mat-option>
            <mat-divider></mat-divider>

            @for (employee of employeeList; track employee.id) {
            <mat-option [value]="employee.id" style="min-height: 54px;">
                <div class="row gx-2 align-items-center">
                    <div class="col-auto">
                        <img [src]="employee.avatarUrl" alt="{{ employee.name }} avatar" class="rounded-circle avatar avatar-30" onerror="this.onerror=null; this.src='https://placehold.co/40x40/ccc/black?text=NA'" />
                    </div>
                    <div class="col maxwidth-dynamic" style="--mw-dynamic:calc(100% - 30px - 0.5rem)">
                        <p class="mb-0 text-truncated">{{ employee.name }}</p>
                        <p class="small text-secondary text-truncated">{{ employee.title }}</p>
                    </div>
                </div>
            </mat-option>
            }
        </mat-select>
    </mat-form-field>`, providers: [], schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeSelect2Component, { className: "EmployeeSelect2Component", filePath: "src/app/components/employee-select/employee-select2.component.ts", lineNumber: 57 });
})();

// src/app/pages/app/projects/createeditproject.component.ts
function CreateEditProjectModal_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 4)(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "div", 12)(5, "button", 13)(6, "mat-icon", 14);
    \u0275\u0275text(7, "photo_camera");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 17)(11, "div", 18)(12, "div", 19)(13, "mat-form-field", 20)(14, "mat-label");
    \u0275\u0275text(15, "Project Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditProjectModal_Conditional_6_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.projectData.name, $event) || (ctx_r1.projectData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 19)(18, "mat-form-field", 20)(19, "mat-label");
    \u0275\u0275text(20, "Client Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditProjectModal_Conditional_6_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.projectData.company, $event) || (ctx_r1.projectData.company = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 23)(23, "mat-form-field", 20)(24, "mat-label");
    \u0275\u0275text(25, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditProjectModal_Conditional_6_Template_mat_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.projectData.status, $event) || (ctx_r1.projectData.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "mat-option", 25);
    \u0275\u0275text(28, "Select Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-option", 26);
    \u0275\u0275text(30, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-option", 27);
    \u0275\u0275text(32, "On Hold");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-option", 28);
    \u0275\u0275text(34, "Completed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 23)(36, "mat-form-field", 20)(37, "mat-label");
    \u0275\u0275text(38, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditProjectModal_Conditional_6_Template_mat_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.projectData.priority, $event) || (ctx_r1.projectData.priority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(40, "mat-option", 25);
    \u0275\u0275text(41, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-option", 30);
    \u0275\u0275text(43, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-option", 31);
    \u0275\u0275text(45, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-option", 32);
    \u0275\u0275text(47, "Low");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 19)(49, "h4", 33);
    \u0275\u0275text(50, "Team");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 23)(52, "mat-form-field", 20)(53, "mat-label");
    \u0275\u0275text(54, "Project Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditProjectModal_Conditional_6_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.projectData.manager, $event) || (ctx_r1.projectData.manager = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 23);
    \u0275\u0275element(57, "app-employee-select2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 23)(59, "mat-form-field", 20)(60, "mat-label");
    \u0275\u0275text(61, "Due date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 35);
    \u0275\u0275elementStart(63, "mat-datepicker-toggle", 36);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditProjectModal_Conditional_6_Template_mat_datepicker_toggle_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.projectData.dueDate, $event) || (ctx_r1.projectData.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const picker_r3 = \u0275\u0275reference(65);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image:url('", ctx_r1.data.image, "')"));
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.projectData.name);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.projectData.company);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.projectData.status);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.projectData.priority);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.projectData.manager);
    \u0275\u0275advance(7);
    \u0275\u0275property("matDatepicker", picker_r3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.projectData.dueDate);
    \u0275\u0275property("for", picker_r3);
  }
}
function CreateEditProjectModal_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function CreateEditProjectModal_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateOrder());
    });
    \u0275\u0275elementStart(1, "mat-icon", 38);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Update");
    \u0275\u0275elementEnd();
  }
}
function CreateEditProjectModal_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "mat-icon", 38);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add");
    \u0275\u0275elementEnd();
  }
}
var CreateEditProjectModal = class _CreateEditProjectModal {
  constructor(dialogRef, data, snackBar) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.snackBar = snackBar;
    this.updateTimeoutId = null;
    this.projectData = data;
    if (!this.projectData.status) {
      this.projectData.status = "";
    }
  }
  updateOrder() {
    if (this.updateTimeoutId !== null) {
      clearTimeout(this.updateTimeoutId);
    }
    this.updateTimeoutId = setTimeout(() => {
      this.openSnackBar("Order has been successfully updated.", "Dismiss");
      this.updateTimeoutId = null;
    }, 1e3);
  }
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3e3,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: ["bg-light-theme", "theme-green"]
    });
  }
  ngOnDestroy() {
    if (this.updateTimeoutId !== null) {
      clearTimeout(this.updateTimeoutId);
    }
  }
  static {
    this.\u0275fac = function CreateEditProjectModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateEditProjectModal)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateEditProjectModal, selectors: [["app-createditproject"]], features: [\u0275\u0275ProvidersFeature([provideNativeDateAdapter()])], decls: 14, vars: 5, consts: [["picker", ""], ["mat-dialog-title", ""], [1, "text-secondary", "ps-2"], [1, "mat-typography"], [1, "pt-3", "pt-lg-4"], [1, "col"], ["matButton", "filled", "mat-dialog-close", ""], [1, "col-auto"], ["matButton", "", "mat-dialog-close", "", 1, "theme-red"], [1, "row", "gx-3"], [1, "col-12", "col-lg-4", "text-center"], [1, "height-180", "width-180", "lh-20", "position-relative", "d-block", "mx-auto", "my-4"], [1, "position-absolute", "bottom-0", "end-0", "z-index-1", "m-2"], ["matMiniFab", "elevated", "onclick", "this.nextElementSibling.click()"], [1, "material-icons-outlined", "mx-0"], ["type", "file", 1, "d-none"], [1, "coverimg", "avatar", "avatar-180", "mb-0", "position-relative", "z-index-0", "overflow-hidden", "rounded", "bg-light-theme"], [1, "col-12", "col-lg-8"], [1, "row", "gx-3", "align-items-center"], [1, "col-12"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "name", "name", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "company", 3, "ngModelChange", "ngModel"], [1, "col-12", "col-md-6"], ["name", "status", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Active"], ["value", "On Hold"], ["value", "Completed"], ["name", "priority", 3, "ngModelChange", "ngModel"], ["value", "High"], ["value", "Medium"], ["value", "Low"], [1, "my-3"], ["matInput", "", "name", "manager", 3, "ngModelChange", "ngModel"], ["matInput", "", 3, "matDatepicker"], ["matIconSuffix", "", "name", "dueDate", 3, "ngModelChange", "ngModel", "for"], ["matButton", "filled", "mat-dialog-close", "", 3, "click"], [1, "material-icons-outlined"]], template: function CreateEditProjectModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 1);
        \u0275\u0275text(1);
        \u0275\u0275element(2, "br");
        \u0275\u0275elementStart(3, "small", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-dialog-content", 3);
        \u0275\u0275conditionalCreate(6, CreateEditProjectModal_Conditional_6_Template, 66, 11, "form", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-dialog-actions")(8, "div", 5);
        \u0275\u0275conditionalCreate(9, CreateEditProjectModal_Conditional_9_Template, 4, 0, "button", 6)(10, CreateEditProjectModal_Conditional_10_Template, 4, 0, "button", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "button", 8);
        \u0275\u0275text(13, "Cancel");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Project: ", ctx.projectData.name, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("Due Date: ", ctx.projectData.dueDate, ", Progress: ", ctx.projectData.progress, "%");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.projectData ? 6 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.projectData.name ? 9 : 10);
      }
    }, dependencies: [CommonModule, MatDividerModule, MatAutocompleteModule, MatOption, MatCardModule, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatSelectModule, MatSelect, MatInputModule, MatInput, MatSnackBarModule, MatDialogTitle, MatButtonModule, MatButton, MatMiniFabButton, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatIconModule, MatIcon, MatChipsModule, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, ReactiveFormsModule, MatDialogContent, MatDialogActions, MatDialogClose, EmployeeSelect2Component], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateEditProjectModal, [{
    type: Component,
    args: [{ selector: "app-createditproject", standalone: true, providers: [provideNativeDateAdapter()], imports: [CommonModule, MatDividerModule, MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatSnackBarModule, MatDialogTitle, MatButtonModule, FormsModule, MatIconModule, MatChipsModule, MatDatepickerModule, ReactiveFormsModule, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, EmployeeSelect2Component], template: `
        <h3 mat-dialog-title>
            Project: {{ projectData.name }} <br />
            <small class="text-secondary ps-2">Due Date: {{ projectData.dueDate }}, Progress: {{ projectData.progress }}%</small>
        </h3>
        <mat-dialog-content class="mat-typography">
            @if (projectData) {
            <form class="pt-3 pt-lg-4">
                <div class="row gx-3">
                    <div class="col-12 col-lg-4 text-center">
                        <div class="height-180 width-180 lh-20 position-relative d-block mx-auto my-4">
                            <div class="position-absolute bottom-0 end-0 z-index-1 m-2">
                                <button matMiniFab="elevated" onclick="this.nextElementSibling.click()"><mat-icon class="material-icons-outlined mx-0">photo_camera</mat-icon></button>
                                <input type="file" class="d-none" />
                            </div>
                            <div class="coverimg avatar avatar-180 mb-0 position-relative z-index-0 overflow-hidden rounded bg-light-theme" style="background-image:url('{{ data.image }}')"></div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="row gx-3 align-items-center">
                            <div class="col-12">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Project Name</mat-label>
                                    <input matInput [(ngModel)]="projectData.name" name="name" />
                                </mat-form-field>
                            </div>
                            <div class="col-12">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Client Name</mat-label>
                                    <input matInput [(ngModel)]="projectData.company" name="company" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Status</mat-label>
                                    <mat-select [(ngModel)]="projectData.status" name="status">
                                        <mat-option value="">Select Status</mat-option>
                                        <mat-option value="Active">Active</mat-option>
                                        <mat-option value="On Hold">On Hold</mat-option>
                                        <mat-option value="Completed">Completed</mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Priority</mat-label>
                                    <mat-select [(ngModel)]="projectData.priority" name="priority">
                                        <mat-option value="">Select</mat-option>
                                        <mat-option value="High">High</mat-option>
                                        <mat-option value="Medium">Medium</mat-option>
                                        <mat-option value="Low">Low</mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="col-12">
                                <h4 class="my-3">Team</h4>
                            </div>

                            <div class="col-12 col-md-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Project Manager</mat-label>
                                    <input matInput [(ngModel)]="projectData.manager" name="manager" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6">
                                <app-employee-select2></app-employee-select2>
                            </div>
                            <div class="col-12 col-md-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Due date</mat-label>
                                    <input matInput [matDatepicker]="picker" />
                                    <mat-datepicker-toggle matIconSuffix [(ngModel)]="projectData.dueDate" name="dueDate" [for]="picker"></mat-datepicker-toggle>
                                    <mat-datepicker #picker></mat-datepicker>
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            }
        </mat-dialog-content>
        <mat-dialog-actions>
            <div class="col">
                @if (projectData.name) {
                <button matButton="filled" mat-dialog-close (click)="updateOrder()"><mat-icon class="material-icons-outlined">event</mat-icon> Update</button>
                } @else {
                <button matButton="filled" mat-dialog-close><mat-icon class="material-icons-outlined">event</mat-icon> Add</button>
                }
            </div>
            <div class="col-auto">
                <button matButton mat-dialog-close class="theme-red">Cancel</button>
            </div>
        </mat-dialog-actions>
    ` }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateEditProjectModal, { className: "CreateEditProjectModal", filePath: "src/app/pages/app/projects/createeditproject.component.ts", lineNumber: 123 });
})();

export {
  CreateEditProjectModal
};
//# sourceMappingURL=chunk-SKOQXL7S.js.map
