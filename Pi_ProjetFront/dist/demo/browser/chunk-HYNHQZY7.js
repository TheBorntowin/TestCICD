import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-MWLO4FO4.js";
import {
  MatOption
} from "./chunk-D63GK34V.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-CWBJY2AK.js";
import {
  MatInputModule
} from "./chunk-45QHUHCH.js";
import {
  MatFormField
} from "./chunk-XPQBAS5O.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HGLJSDQ3.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-O4O7EFUR.js";

// src/app/components/employee-select/employee-select.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EmployeeSelectComponent_Conditional_3_Template(rf, ctx) {
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
function EmployeeSelectComponent_For_12_Template(rf, ctx) {
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
var EmployeeSelectComponent = class _EmployeeSelectComponent {
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
    this.\u0275fac = function EmployeeSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmployeeSelectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeSelectComponent, selectors: [["app-employee-select"]], features: [\u0275\u0275ProvidersFeature([])], decls: 13, vars: 9, consts: [["appearance", "outline", 1, "w-100", "inline-small"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [1, "mat-option-all", 3, "value", "selected"], [1, "flex", "items-center", "space-x-3", "p-1", "font-extrabold", "text-indigo-600", "bg-indigo-50", "rounded-md"], [1, ""], [1, "small", "text-secondary"], [2, "min-height", "54px", 3, "value"], [1, "row", "gx-2", "align-items-center"], [1, "col-auto"], ["onerror", "this.onerror=null; this.src='https://placehold.co/40x40/ccc/black?text=NA'", 1, "rounded-circle", "avatar", "avatar-30", 3, "src", "alt"], [1, "col", "maxwidth-dynamic", 2, "--mw-dynamic", "calc(100% - 30px - 0.5rem)"], [1, "mb-0", "text-truncated"], [1, "small", "text-secondary", "text-truncated"]], template: function EmployeeSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "mat-select", 1);
        \u0275\u0275listener("ngModelChange", function EmployeeSelectComponent_Template_mat_select_ngModelChange_1_listener($event) {
          return ctx.handleSelectionChange($event);
        });
        \u0275\u0275elementStart(2, "mat-select-trigger");
        \u0275\u0275conditionalCreate(3, EmployeeSelectComponent_Conditional_3_Template, 2, 1, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "mat-option", 2)(5, "div", 3)(6, "span", 4);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(10, "mat-divider");
        \u0275\u0275repeaterCreate(11, EmployeeSelectComponent_For_12_Template, 9, 6, "mat-option", 6, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("placeholder", \u0275\u0275interpolate1("Select (0/", ctx.employeeList.length, ")"))("ngModel", ctx.getMatSelectValue());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selectedEmployees().length > 0 ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.ALL_ID)("selected", ctx.isAllSelected());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isAllSelected() ? "Deselect" : "All", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate2("(", ctx.selectedEmployees().length, "/", ctx.employeeList.length, ")");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.employeeList);
      }
    }, dependencies: [MatSelectModule, MatFormField, MatSelect, MatSelectTrigger, MatOption, MatInputModule, MatDividerModule, MatDivider, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeSelectComponent, [{
    type: Component,
    args: [{ selector: "app-employee-select", standalone: true, imports: [MatSelectModule, MatInputModule, MatDividerModule, MatSelectModule, FormsModule], template: ` <mat-form-field class="w-100 inline-small" appearance="outline">
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeSelectComponent, { className: "EmployeeSelectComponent", filePath: "src/app/components/employee-select/employee-select.component.ts", lineNumber: 56 });
})();

export {
  EmployeeSelectComponent
};
//# sourceMappingURL=chunk-HYNHQZY7.js.map
