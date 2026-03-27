import {
  SemiDoughnutChartjs180Component,
  TimelineChartComponent
} from "./chunk-LC5NPUAL.js";
import {
  PageRightComponent
} from "./chunk-BMFH3O7D.js";
import "./chunk-PZSKZJEJ.js";
import "./chunk-RG7V5CFX.js";
import "./chunk-IJRF7KWR.js";
import {
  MatPaginator,
  MatPaginatorModule,
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-W2JGJKKS.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-35BPSZ5W.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-WAVP7W2J.js";
import {
  MatTooltipModule
} from "./chunk-6LUZEZUF.js";
import {
  MatTooltip
} from "./chunk-O4BMA6W6.js";
import {
  register
} from "./chunk-S5VFQUTS.js";
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule
} from "./chunk-Y47TWKU5.js";
import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-SFUPPXOD.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-SP2SPZAY.js";
import {
  MatSelectModule
} from "./chunk-MWLO4FO4.js";
import "./chunk-D63GK34V.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
  MatChipsModule
} from "./chunk-5G2FMPWG.js";
import "./chunk-N5FEMAXL.js";
import {
  MatListModule
} from "./chunk-ALLV6QEF.js";
import "./chunk-CWBJY2AK.js";
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import "./chunk-5NBIR3PL.js";
import {
  MatProgressBarModule
} from "./chunk-ZWEWHYHK.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-45QHUHCH.js";
import "./chunk-7XFTNJ2Y.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton,
  MatMiniFabButton
} from "./chunk-ZLA4QS3A.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import {
  MatError,
  MatFormField,
  MatLabel,
  MatPrefix
} from "./chunk-XPQBAS5O.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
  ɵNgNoValidate
} from "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  CommonModule,
  DecimalPipe,
  MatIcon,
  MatIconModule,
  NgIf
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/employee/editemployee.component.ts
function EditEmployeeDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function EditEmployeeDialogComponent_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function EditEmployeeDialogComponent_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email is required ");
    \u0275\u0275elementEnd();
  }
}
var EditEmployeeDialogComponent = class _EditEmployeeDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.employeeForm = new FormGroup({
      employeeImage: new FormControl(this.data.employeeImage),
      employeeName: new FormControl("", Validators.required),
      city: new FormControl(""),
      country: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl(""),
      totalPurchaseLifetime: new FormControl(0),
      totalPurchaseThisMonth: new FormControl(0)
    });
    this.employeeForm.patchValue(data);
  }
  // Closes the dialog without saving
  onCancel() {
    this.dialogRef.close();
  }
  // Closes the dialog and returns the updated form data
  onSave() {
    if (this.employeeForm.valid) {
      this.dialogRef.close(this.employeeForm.value);
    }
  }
  static {
    this.\u0275fac = function EditEmployeeDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditEmployeeDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditEmployeeDialogComponent, selectors: [["app-edit-employee-dialog"]], decls: 62, vars: 8, consts: [["mat-dialog-title", ""], [1, "pt-2", 3, "formGroup"], [1, "row", "gx-3"], [1, "col-12", "col-lg-4", "text-center"], [1, "height-180", "width-180", "lh-20", "position-relative", "d-block", "mx-auto"], [1, "position-absolute", "bottom-0", "end-0", "z-index-1", "m-2"], ["matMiniFab", "elevated", "onclick", "this.nextElementSibling.click()"], [1, "material-icons-outlined", "mx-0"], ["type", "file", 1, "d-none"], [1, "coverimg", "avatar", "avatar-180", "mb-0", "position-relative", "z-index-0", "overflow-hidden", "rounded-circle"], [1, "col-12", "col-lg-8"], [1, "col-12", "col-lg-6"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "employeeName", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "country"], ["matInput", "", "formControlName", "email", "type", "email", "required", ""], ["matInput", "", "formControlName", "phone"], ["matInput", "", "formControlName", "totalPurchaseLifetime", "type", "number"], ["matInput", "", "formControlName", "totalPurchaseThisMonth", "type", "number"], ["matButton", "filled", "color", "primary", 3, "click", "disabled"], ["matButton", "", 1, "ms-auto", "theme-red", 3, "click"]], template: function EditEmployeeDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h4", 0);
        \u0275\u0275text(1, "Edit Employee Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "button", 6)(9, "mat-icon", 7);
        \u0275\u0275text(10, "photo_camera");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "input", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 2)(15, "div", 11)(16, "mat-form-field", 12)(17, "mat-label");
        \u0275\u0275text(18, "Employee Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 13);
        \u0275\u0275template(20, EditEmployeeDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(21, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 2)(23, "div", 11)(24, "mat-form-field", 12)(25, "mat-label");
        \u0275\u0275text(26, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 11)(29, "mat-form-field", 12)(30, "mat-label");
        \u0275\u0275text(31, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275element(32, "input", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 2)(34, "div", 11)(35, "mat-form-field", 12)(36, "mat-label");
        \u0275\u0275text(37, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "input", 17);
        \u0275\u0275template(39, EditEmployeeDialogComponent_mat_error_39_Template, 2, 0, "mat-error", 14)(40, EditEmployeeDialogComponent_mat_error_40_Template, 2, 0, "mat-error", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 11)(42, "mat-form-field", 12)(43, "mat-label");
        \u0275\u0275text(44, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "input", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 2)(47, "div", 11)(48, "mat-form-field", 12)(49, "mat-label");
        \u0275\u0275text(50, "Total Purchase (Lifetime)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(51, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 11)(53, "mat-form-field", 12)(54, "mat-label");
        \u0275\u0275text(55, "Total Purchase (This Month)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(56, "input", 20);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(57, "mat-dialog-actions")(58, "button", 21);
        \u0275\u0275listener("click", function EditEmployeeDialogComponent_Template_button_click_58_listener() {
          return ctx.onSave();
        });
        \u0275\u0275text(59, "Save");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "button", 22);
        \u0275\u0275listener("click", function EditEmployeeDialogComponent_Template_button_click_60_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(61, "Cancel");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.employeeForm);
        \u0275\u0275advance(9);
        \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image:url('", ctx.data.employeeImage, "')"));
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.employeeForm.get("employeeName")) == null ? null : tmp_2_0.invalid);
        \u0275\u0275advance(19);
        \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.employeeForm.get("email")) == null ? null : tmp_3_0.hasError("email")) && !((tmp_3_0 = ctx.employeeForm.get("email")) == null ? null : tmp_3_0.hasError("required")));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.employeeForm.get("email")) == null ? null : tmp_4_0.hasError("required"));
        \u0275\u0275advance(18);
        \u0275\u0275property("disabled", ctx.employeeForm.invalid);
      }
    }, dependencies: [CommonModule, NgIf, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatIconModule, MatIcon, MatButtonModule, MatButton, MatMiniFabButton, MatFormFieldModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditEmployeeDialogComponent, [{
    type: Component,
    args: [{ selector: "app-edit-employee-dialog", imports: [CommonModule, MatDialogModule, MatInputModule, MatIconModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule], template: `<h4 mat-dialog-title>Edit Employee Profile</h4>
        <mat-dialog-content>
            <form [formGroup]="employeeForm" class="pt-2">
                <div class="row gx-3">
                    <div class="col-12 col-lg-4 text-center">
                        <div class="height-180 width-180 lh-20 position-relative d-block mx-auto">
                            <div class="position-absolute bottom-0 end-0 z-index-1 m-2">
                                <button matMiniFab="elevated" onclick="this.nextElementSibling.click()"><mat-icon class="material-icons-outlined mx-0">photo_camera</mat-icon></button>
                                <input type="file" class="d-none" />
                            </div>
                            <div class="coverimg avatar avatar-180 mb-0 position-relative z-index-0 overflow-hidden rounded-circle" style="background-image:url('{{ data.employeeImage }}')"></div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="row gx-3">
                            <div class="col-12 col-lg-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Employee Name</mat-label>
                                    <input matInput formControlName="employeeName" required />
                                    <mat-error *ngIf="employeeForm.get('employeeName')?.invalid">Name is required</mat-error>
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-lg-6"></div>
                        </div>
                        <div class="row gx-3">
                            <div class="col-12 col-lg-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>City</mat-label>
                                    <input matInput formControlName="city" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Country</mat-label>
                                    <input matInput formControlName="country" />
                                </mat-form-field>
                            </div>
                        </div>
                        <div class="row gx-3">
                            <div class="col-12 col-lg-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Email</mat-label>
                                    <input matInput formControlName="email" type="email" required />
                                    <mat-error *ngIf="employeeForm.get('email')?.hasError('email') && !employeeForm.get('email')?.hasError('required')"> Please enter a valid email address </mat-error>
                                    <mat-error *ngIf="employeeForm.get('email')?.hasError('required')"> Email is required </mat-error>
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Phone</mat-label>
                                    <input matInput formControlName="phone" />
                                </mat-form-field>
                            </div>
                        </div>
                        <div class="row gx-3">
                            <div class="col-12 col-lg-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Total Purchase (Lifetime)</mat-label>
                                    <input matInput formControlName="totalPurchaseLifetime" type="number" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-lg-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Total Purchase (This Month)</mat-label>
                                    <input matInput formControlName="totalPurchaseThisMonth" type="number" />
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </mat-dialog-content>

        <mat-dialog-actions>
            <button matButton="filled" color="primary" [disabled]="employeeForm.invalid" (click)="onSave()">Save</button>
            <button matButton (click)="onCancel()" class="ms-auto theme-red">Cancel</button>
        </mat-dialog-actions>` }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditEmployeeDialogComponent, { className: "EditEmployeeDialogComponent", filePath: "src/app/pages/app/employee/editemployee.component.ts", lineNumber: 93 });
})();

// src/app/pages/app/employee/viewemployee.component.ts
function ViewEmployeeDrawerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-toolbar")(1, "h2", 0);
    \u0275\u0275text(2, "Employee Details");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 1);
    \u0275\u0275elementStart(4, "button", 2);
    \u0275\u0275listener("click", function ViewEmployeeDrawerComponent_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer.emit());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 3)(8, "div", 4);
    \u0275\u0275element(9, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 7)(13, "span", 8);
    \u0275\u0275text(14, "Last Login:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-card", 9)(17, "mat-card-content")(18, "h4", 10);
    \u0275\u0275text(19, "Contact Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11)(21, "div", 12)(22, "p", 8);
    \u0275\u0275text(23, "Email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 13)(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 11)(28, "div", 12)(29, "p", 8);
    \u0275\u0275text(30, "Phone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 13)(32, "p");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(34, "br");
    \u0275\u0275elementStart(35, "h4", 10);
    \u0275\u0275text(36, "Location Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 11)(38, "div", 14)(39, "p", 8);
    \u0275\u0275text(40, "City");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 15)(42, "p");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 11)(45, "div", 14)(46, "p", 8);
    \u0275\u0275text(47, "Country");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 15)(49, "p");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(51, "br");
    \u0275\u0275elementStart(52, "h4", 10);
    \u0275\u0275text(53, "Working Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 11)(55, "div", 14)(56, "p", 8);
    \u0275\u0275text(57, "Lifetime");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 15)(59, "p");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 11)(62, "div", 14)(63, "p", 8);
    \u0275\u0275text(64, "This month");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 15)(66, "p");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(68, "br");
    \u0275\u0275elementStart(69, "h4", 10);
    \u0275\u0275text(70, "Task Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 16)(72, "div", 17)(73, "h4");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 18)(76, "h4");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 19)(79, "h4");
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(81, "div", 20)(82, "div", 11)(83, "div", 21)(84, "button", 22);
    \u0275\u0275listener("click", function ViewEmployeeDrawerComponent_Conditional_0_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editEmployee.emit());
    });
    \u0275\u0275elementStart(85, "mat-icon", 23);
    \u0275\u0275text(86, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(87, " Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 24)(89, "button", 25);
    \u0275\u0275listener("click", function ViewEmployeeDrawerComponent_Conditional_0_Template_button_click_89_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer.emit());
    });
    \u0275\u0275text(90, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image:url(", ctx_r1.employee.employeeImage, ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.employee.employeeImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.employee.employeeName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.employee.lastLoginDate, ", ", ctx_r1.employee.lastVisitedTime);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.employee.email);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.employee.phone);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.employee.city);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.employee.country);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r1.employee.totalWorkingTime, " hrs");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.employee.totalWorkingTimeThisMonth, " hrs");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.employee.activeTask, " Assigned");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.employee.completedTask, " Completed");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.employee.cancelledTask, " In-Progress");
  }
}
var ViewEmployeeDrawerComponent = class _ViewEmployeeDrawerComponent {
  constructor() {
    this.employee = null;
    this.closeDrawer = new EventEmitter();
    this.editEmployee = new EventEmitter();
  }
  static {
    this.\u0275fac = function ViewEmployeeDrawerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewEmployeeDrawerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewEmployeeDrawerComponent, selectors: [["app-view-employee-drawer"]], inputs: { employee: "employee" }, outputs: { closeDrawer: "closeDrawer", editEmployee: "editEmployee" }, decls: 1, vars: 1, consts: [[1, "fw-bold"], [1, "spacer"], ["matIconButton", "", "aria-label", "theme close", 3, "click"], [1, "text-center"], [1, "avatar", "avatar-140", "coverimg", "rounded-circle", "mb-3"], ["alt", "Employee Image", 1, "d-none", 3, "src"], [1, "mb-2"], [1, ""], [1, "text-secondary"], [1, "m-3"], [1, "mb-3"], [1, "row", "gx-3", "mb-2"], [1, "col-4"], [1, "col-8"], [1, "col-5"], [1, "col-7"], [1, "mb-3", "mb-lg-2"], [1, "badge", "badge-light", "theme-blue", "me-1", "mb-2", "d-inline-block"], [1, "badge", "badge-light", "theme-green", "me-1", "mb-2", "d-inline-block"], [1, "badge", "badge-light", "theme-yellow", "me-1", "mb-2", "d-inline-block"], [1, "px-3"], [1, "col"], ["matButton", "filled", 3, "click"], [1, "material-icons-outlined"], [1, "col-auto"], ["matButton", "", 1, "theme-red", 3, "click"]], template: function ViewEmployeeDrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ViewEmployeeDrawerComponent_Conditional_0_Template, 91, 16);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.employee ? 0 : -1);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatToolbarModule, MatToolbar], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewEmployeeDrawerComponent, [{
    type: Component,
    args: [{
      selector: "app-view-employee-drawer",
      imports: [MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule],
      template: `
        @if (employee) {
        <mat-toolbar>
            <h2 class="fw-bold">Employee Details</h2>
            <span class="spacer"></span>
            <button matIconButton aria-label="theme close" (click)="closeDrawer.emit()">
                <mat-icon>close</mat-icon>
            </button>
        </mat-toolbar>
        <div class="text-center">
            <div class="avatar avatar-140 coverimg rounded-circle mb-3" style="background-image:url({{ employee.employeeImage }})">
                <img class="d-none" [src]="employee.employeeImage" alt="Employee Image" />
            </div>
            <h3 class="mb-2">{{ employee.employeeName }}</h3>
            <p class=""><span class="text-secondary ">Last Login:</span> {{ employee.lastLoginDate }}, {{ employee.lastVisitedTime }}</p>
        </div>
        <mat-card class="m-3">
            <mat-card-content>
                <h4 class="mb-3">Contact Info</h4>
                <div class="row gx-3 mb-2">
                    <div class="col-4"><p class="text-secondary">Email</p></div>
                    <div class="col-8">
                        <p>{{ employee.email }}</p>
                    </div>
                </div>
                <div class="row gx-3 mb-2">
                    <div class="col-4"><p class="text-secondary">Phone</p></div>
                    <div class="col-8">
                        <p>{{ employee.phone }}</p>
                    </div>
                </div>
                <br />
                <h4 class="mb-3">Location Info</h4>
                <div class="row gx-3 mb-2">
                    <div class="col-5"><p class="text-secondary">City</p></div>
                    <div class="col-7">
                        <p>{{ employee.city }}</p>
                    </div>
                </div>
                <div class="row gx-3 mb-2">
                    <div class="col-5">
                        <p class="text-secondary">Country</p>
                    </div>
                    <div class="col-7">
                        <p>{{ employee.country }}</p>
                    </div>
                </div>
                <br />
                <h4 class="mb-3">Working Hours</h4>
                <div class="row gx-3 mb-2">
                    <div class="col-5"><p class="text-secondary">Lifetime</p></div>
                    <div class="col-7">
                        <p>{{ employee.totalWorkingTime }} hrs</p>
                    </div>
                </div>
                <div class="row gx-3 mb-2">
                    <div class="col-5">
                        <p class="text-secondary">This month</p>
                    </div>
                    <div class="col-7">
                        <p>{{ employee.totalWorkingTimeThisMonth }} hrs</p>
                    </div>
                </div>
                <br />
                <h4 class="mb-3">Task Status</h4>
                <div class="mb-3 mb-lg-2">
                    <div class="badge badge-light theme-blue me-1 mb-2 d-inline-block">
                        <h4>{{ employee.activeTask }} Assigned</h4>
                    </div>
                    <div class="badge badge-light theme-green me-1 mb-2 d-inline-block">
                        <h4>{{ employee.completedTask }} Completed</h4>
                    </div>
                    <div class="badge badge-light theme-yellow me-1 mb-2 d-inline-block">
                        <h4>{{ employee.cancelledTask }} In-Progress</h4>
                    </div>
                </div>
            </mat-card-content>
        </mat-card>
        <div class="px-3">
            <div class="row gx-3 mb-2">
                <div class="col">
                    <button matButton="filled" (click)="editEmployee.emit()"><mat-icon class="material-icons-outlined">edit</mat-icon> Edit</button>
                </div>
                <div class="col-auto">
                    <button matButton class="theme-red" (click)="closeDrawer.emit()">Cancel</button>
                </div>
            </div>
        </div>
        }
    `
    }]
  }], null, { employee: [{
    type: Input
  }], closeDrawer: [{
    type: Output
  }], editEmployee: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewEmployeeDrawerComponent, { className: "ViewEmployeeDrawerComponent", filePath: "src/app/pages/app/employee/viewemployee.component.ts", lineNumber: 103 });
})();

// src/app/pages/app/employee/employee.component.ts
var _c0 = ["viewemployee"];
var _c1 = () => [5, 10, 25, 100];
function EmployeeComponent_th_229_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 78);
    \u0275\u0275text(1, "Employee Info");
    \u0275\u0275elementEnd();
  }
}
function EmployeeComponent_td_230_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 79)(1, "div", 80)(2, "div", 43)(3, "div", 81);
    \u0275\u0275listener("click", function EmployeeComponent_td_230_Template_div_click_3_listener() {
      const element_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEmployeeDrawer(element_r2));
    });
    \u0275\u0275element(4, "img", 82);
    \u0275\u0275elementStart(5, "mat-icon", 83);
    \u0275\u0275text(6, "visibility");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 45)(8, "h4", 49);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "mat-icon", 84);
    \u0275\u0275listener("click", function EmployeeComponent_td_230_Template_mat_icon_click_10_listener() {
      const element_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editEmployee(element_r2));
    });
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 31);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("alt", \u0275\u0275interpolate(element_r2.employeeName))("src", element_r2.employeeImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", element_r2.employeeName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", element_r2.city, ", ", element_r2.country);
  }
}
function EmployeeComponent_th_232_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 78);
    \u0275\u0275text(1, "Contact");
    \u0275\u0275elementEnd();
  }
}
function EmployeeComponent_td_233_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 85)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r4.phone);
  }
}
function EmployeeComponent_th_235_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 78);
    \u0275\u0275text(1, "Last Login");
    \u0275\u0275elementEnd();
  }
}
function EmployeeComponent_td_236_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 85)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r5.lastLoginDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r5.lastVisitedTime);
  }
}
function EmployeeComponent_th_238_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 78);
    \u0275\u0275text(1, "Working Hours");
    \u0275\u0275elementEnd();
  }
}
function EmployeeComponent_td_239_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 85)(1, "h4", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 2, element_r6.totalWorkingTime, "1.2-2"), " hrs");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("This Month: ", \u0275\u0275pipeBind2(6, 5, element_r6.totalWorkingTimeThisMonth, "1.2-2"));
  }
}
function EmployeeComponent_th_241_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 86);
    \u0275\u0275text(1, "Task");
    \u0275\u0275elementEnd();
  }
}
function EmployeeComponent_td_242_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 85)(1, "div", 87)(2, "h4", 88);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 89)(5, "h4", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 90)(8, "h4", 88);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(element_r7.activeTask);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(element_r7.completedTask);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(element_r7.cancelledTask);
  }
}
function EmployeeComponent_th_244_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 86);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function EmployeeComponent_td_245_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 85)(1, "button", 91)(2, "mat-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 2)(6, "button", 92);
    \u0275\u0275listener("click", function EmployeeComponent_td_245_Template_button_click_6_listener() {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editEmployee(element_r9));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 92);
    \u0275\u0275listener("click", function EmployeeComponent_td_245_Template_button_click_11_listener() {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.banEmployee(element_r9));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Ban");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 92);
    \u0275\u0275listener("click", function EmployeeComponent_td_245_Template_button_click_16_listener() {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteEmployee(element_r9));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const menu_r10 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
  }
}
function EmployeeComponent_tr_246_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 93);
  }
}
function EmployeeComponent_tr_247_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 94);
  }
}
function EmployeeComponent_tr_248_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 95)(1, "td", 96);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const searchinput_r11 = \u0275\u0275reference(226);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('No data matching the filter "', searchinput_r11.value, '"');
  }
}
register();
var EmployeeComponent = class _EmployeeComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.originalTabledata = [
      {
        employeeImage: "assets/img/user-1.jpg",
        employeeName: "Michael Johnson",
        city: "Los Angeles",
        country: "USA",
        email: "michael.j@email.com",
        phone: "555-234-5678",
        lastLoginDate: "2025-09-22",
        lastVisitedTime: "09:00 AM",
        totalWorkingTime: 2100.5,
        totalWorkingTimeThisMonth: 250.75,
        activeTask: 3,
        completedTask: 22,
        cancelledTask: 0
      },
      {
        employeeImage: "assets/img/user-2.jpg",
        employeeName: "Emily Williams",
        city: "Paris",
        country: "France",
        email: "emily.w@email.com",
        phone: "555-876-5432",
        lastLoginDate: "2025-09-21",
        lastVisitedTime: "04:15 PM",
        totalWorkingTime: 850,
        totalWorkingTimeThisMonth: 120,
        activeTask: 0,
        completedTask: 10,
        cancelledTask: 2
      },
      {
        employeeImage: "assets/img/user-3.jpg",
        employeeName: "David Brown",
        city: "Tokyo",
        country: "Japan",
        email: "david.b@email.com",
        phone: "555-345-6789",
        lastLoginDate: "2025-09-20",
        lastVisitedTime: "11:50 AM",
        totalWorkingTime: 350.25,
        totalWorkingTimeThisMonth: 45.5,
        activeTask: 1,
        completedTask: 5,
        cancelledTask: 0
      },
      {
        employeeImage: "assets/img/user-4.jpg",
        employeeName: "Olivia Davis",
        city: "Sydney",
        country: "Australia",
        email: "olivia.d@email.com",
        phone: "555-765-4321",
        lastLoginDate: "2025-09-19",
        lastVisitedTime: "06:30 PM",
        totalWorkingTime: 1500,
        totalWorkingTimeThisMonth: 300,
        activeTask: 2,
        completedTask: 18,
        cancelledTask: 1
      },
      {
        employeeImage: "assets/img/user-5.jpg",
        employeeName: "Daniel Wilson",
        city: "Berlin",
        country: "Germany",
        email: "daniel.w@email.com",
        phone: "555-456-7890",
        lastLoginDate: "2025-09-18",
        lastVisitedTime: "01:20 PM",
        totalWorkingTime: 675.8,
        totalWorkingTimeThisMonth: 80.25,
        activeTask: 0,
        completedTask: 9,
        cancelledTask: 0
      },
      {
        employeeImage: "assets/img/user-6.jpg",
        employeeName: "Sophia Martinez",
        city: "Madrid",
        country: "Spain",
        email: "sophia.m@email.com",
        phone: "555-654-3210",
        lastLoginDate: "2025-09-17",
        lastVisitedTime: "09:45 AM",
        totalWorkingTime: 950.9,
        totalWorkingTimeThisMonth: 150,
        activeTask: 1,
        completedTask: 14,
        cancelledTask: 0
      },
      {
        employeeImage: "assets/img/user-7.jpg",
        employeeName: "Matthew Taylor",
        city: "Toronto",
        country: "Canada",
        email: "matthew.t@email.com",
        phone: "555-543-2109",
        lastLoginDate: "2025-09-16",
        lastVisitedTime: "03:10 PM",
        totalWorkingTime: 420,
        totalWorkingTimeThisMonth: 65.75,
        activeTask: 0,
        completedTask: 7,
        cancelledTask: 1
      },
      {
        employeeImage: "assets/img/user-8.jpg",
        employeeName: "Isabella Anderson",
        city: "Rome",
        country: "Italy",
        email: "isabella.a@email.com",
        phone: "555-432-1098",
        lastLoginDate: "2025-09-15",
        lastVisitedTime: "08:00 PM",
        totalWorkingTime: 2800.5,
        totalWorkingTimeThisMonth: 450,
        activeTask: 4,
        completedTask: 30,
        cancelledTask: 2
      },
      {
        employeeImage: "assets/img/user-9.jpg",
        employeeName: "Joseph Thomas",
        city: "Dubai",
        country: "UAE",
        email: "joseph.t@email.com",
        phone: "555-321-0987",
        lastLoginDate: "2025-09-14",
        lastVisitedTime: "05:00 AM",
        totalWorkingTime: 760,
        totalWorkingTimeThisMonth: 95,
        activeTask: 1,
        completedTask: 11,
        cancelledTask: 0
      },
      {
        employeeImage: "assets/img/user-10.jpg",
        employeeName: "Ava Hernandez",
        city: "Mexico City",
        country: "Mexico",
        email: "ava.h@email.com",
        phone: "555-210-9876",
        lastLoginDate: "2025-09-13",
        lastVisitedTime: "12:00 PM",
        totalWorkingTime: 550,
        totalWorkingTimeThisMonth: 70,
        activeTask: 0,
        completedTask: 6,
        cancelledTask: 0
      },
      {
        employeeImage: "assets/img/user-1.jpg",
        employeeName: "Christopher Moore",
        city: "Shanghai",
        country: "China",
        email: "chris.m@email.com",
        phone: "555-109-8765",
        lastLoginDate: "2025-09-12",
        lastVisitedTime: "07:45 PM",
        totalWorkingTime: 1800,
        totalWorkingTimeThisMonth: 200,
        activeTask: 2,
        completedTask: 25,
        cancelledTask: 1
      },
      {
        employeeImage: "assets/img/user-2.jpg",
        employeeName: "Mia White",
        city: "Mumbai",
        country: "India",
        email: "mia.w@email.com",
        phone: "555-987-6543",
        lastLoginDate: "2025-09-11",
        lastVisitedTime: "02:30 PM",
        totalWorkingTime: 600.5,
        totalWorkingTimeThisMonth: 85,
        activeTask: 1,
        completedTask: 12,
        cancelledTask: 0
      },
      {
        employeeImage: "assets/img/user-3.jpg",
        employeeName: "James Harris",
        city: "Rio de Janeiro",
        country: "Brazil",
        email: "james.h@email.com",
        phone: "555-876-5432",
        lastLoginDate: "2025-09-10",
        lastVisitedTime: "10:15 AM",
        totalWorkingTime: 950,
        totalWorkingTimeThisMonth: 110,
        activeTask: 0,
        completedTask: 16,
        cancelledTask: 0
      },
      {
        employeeImage: "assets/img/user-4.jpg",
        employeeName: "Charlotte Clark",
        city: "Moscow",
        country: "Russia",
        email: "charlotte.c@email.com",
        phone: "555-765-4321",
        lastLoginDate: "2025-09-09",
        lastVisitedTime: "04:50 PM",
        totalWorkingTime: 1200.75,
        totalWorkingTimeThisMonth: 180.5,
        activeTask: 3,
        completedTask: 20,
        cancelledTask: 1
      },
      {
        employeeImage: "assets/img/user-5.jpg",
        employeeName: "Ethan Lewis",
        city: "Cairo",
        country: "Egypt",
        email: "ethan.l@email.com",
        phone: "555-654-3210",
        lastLoginDate: "2025-09-08",
        lastVisitedTime: "09:20 AM",
        totalWorkingTime: 320,
        totalWorkingTimeThisMonth: 55,
        activeTask: 0,
        completedTask: 4,
        cancelledTask: 0
      }
    ];
    this.dataSource = new MatTableDataSource(this.originalTabledata);
    this.displayedColumns = ["employeeName", "contactInfo", "lastVisited", "totalPurchase", "status", "actions"];
    this.selectedEmployee = signal(null, ...ngDevMode ? [{ debugName: "selectedEmployee" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, header) => {
      switch (header) {
        case "employeeName":
          return item.employeeName;
        case "contactInfo":
          return item.email;
        case "lastVisited":
          return item.lastLoginDate;
        case "totalPurchase":
          return item.totalWorkingTime;
        case "status":
          return item.activeTask;
        default:
          return "";
      }
    };
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = Object.values(data).join(" ").toLowerCase();
      return dataStr.indexOf(filter) !== -1;
    };
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editEmployee(employee) {
    this.dialog.open(EditEmployeeDialogComponent, {
      width: "990px",
      maxWidth: "990px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: __spreadValues({}, employee)
    });
  }
  banEmployee(employee) {
    console.log("Ban employee:", employee.employeeName);
  }
  deleteEmployee(employee) {
    console.log("Delete employee:", employee.employeeName);
  }
  // drawer open
  openEmployeeDrawer(employee) {
    this.selectedEmployee.set(employee);
    this.viewemployee.open();
  }
  closeEmployeeDrawer() {
    this.viewemployee.close();
    this.selectedEmployee.set(null);
  }
  static {
    this.\u0275fac = function EmployeeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmployeeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeComponent, selectors: [["app-employee"]], viewQuery: function EmployeeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(MatPaginator, 5)(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewemployee = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 254, vars: 6, consts: [["searchinput", ""], ["viewemployee", ""], ["menu", "matMenu"], ["hasBackdrop", "false", 1, "bg-none", "p-0", "m-0"], [1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "col-auto", "mb-3", "mb-xl-0"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-6", "col-sm-6", "col-md-3"], [1, "mb-3", "mb-lg-4"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-cyan"], [1, "material-icons-outlined"], [1, "col-12", "col-xl"], [1, "small", "text-secondary", "mb-1"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-yellow"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-red"], [1, "material-symbols-outlined"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-green"], [1, "col-12", "col-lg-12", "col-xl-6"], [1, "w-100"], [1, "col-auto", "mb-3", "mb-lg-4"], [1, "avatar", "avatar-40", "text-theme", "rounded"], [1, "col", "mb-3", "mb-lg-4"], [1, "pb-0"], [1, "height-200", "d-block", "mb-3", "mb-lg-4"], [1, "col-6", "col-lg-3", "col-xl", "mb-3"], [1, "text-secondary", "small"], [1, "avatar", "avatar-10", "rounded", "bg-theme", "theme-blue", "align-middle"], [1, "avatar", "avatar-10", "rounded", "bg-theme", "theme-sky", "align-middle"], [1, "avatar", "avatar-10", "rounded", "bg-light-theme", "theme-chartreuse", "align-middle"], [1, "avatar", "avatar-10", "rounded", "align-middle", "bg-theme", "theme-red"], [1, "col-12", "col-sm-6", "col-xl-3"], [1, "height-140", "w-100", "text-center", "position-relative", "mb-4"], [1, "position-absolute", "bottom-0", "mx-auto", "start-0", "w-100", "mb-0"], [1, "text-secondary", "small", "mb-1"], ["id", "semidoughnutchart", 1, "height-140", "w-100", "position-relative", "mx-auto", 2, "top", "-20px"], [1, "col-6", "mb-3"], [1, "row", "gx-3", "align-items-center", "mb-3"], [1, "col-auto"], ["src", "assets/img/user-4.jpg", "alt", "", 1, "avatar", "avatar-70", "rounded-circle"], [1, "col"], [1, "fw-bold", "mb-2"], [1, "mb-1", "text-truncated"], [1, "bg-light-theme", "shadow-none"], [1, "mb-0"], [1, "bg-light-theme", "shadow-none", "theme-green"], [1, "row", "gx-2", "justify-content-center", "mb-3"], ["matButton", "", 1, "text-theme", "theme-green"], ["matButton", "", 1, "text-theme", "theme-orange"], [1, "col-12", "col-md-12", "position-relative"], [1, "col-auto", "mb-3"], [1, "col", "mb-3"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3", "mb-3"], ["appearance", "outline", 1, "w-100", "inline-small"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "bg-none", "mb-3", "responsive-table", 3, "dataSource"], ["matColumnDef", "employeeName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "py-2 hoverview", 4, "matCellDef"], ["matColumnDef", "contactInfo"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastVisited"], ["matColumnDef", "totalPurchase"], ["matColumnDef", "status"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of employees", 1, "bg-none", 3, "pageSizeOptions"], ["mode", "over", "position", "end", 2, "--mat-sidenav-container-elevation-shadow", "0px 5px 15px rgba(0, 0, 0, 0.15)", "z-index", "12"], [3, "editEmployee", "closeDrawer", "employee"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "py-2", "hoverview"], [1, "row", "gx-3"], [1, "avatar", "avatar-40", "rounded", "coverimg", 3, "click"], [1, "", 3, "src", "alt"], [1, "hoverview-icon", "bg-light-theme", "text-theme", "rounded", "circle", "avatar", "avatar-40", "position-absolute", "start-0", "top-0"], [1, "text-sm", "text-theme", 3, "click"], ["mat-cell", ""], ["mat-header-cell", ""], ["matTooltip", "Assigned", 1, "badge", "badge-light", "theme-blue", "d-inline-block", "me-1"], [1, "px-1"], ["matTooltip", "Completed", 1, "badge", "badge-light", "theme-green", "d-inline-block", "me-1"], ["matTooltip", "In-Progress", 1, "badge", "badge-light", "theme-yellow", "d-inline-block"], ["mat-icon-button", "", "aria-label", "Actions menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell"]], template: function EmployeeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-drawer-container", 3)(1, "mat-drawer-content")(2, "div", 4)(3, "mat-card", 5)(4, "div", 6)(5, "div", 7)(6, "h3", 8);
        \u0275\u0275text(7, "Employees");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 9);
        \u0275\u0275text(9, "Manage your employee & support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 10);
        \u0275\u0275element(11, "app-page-right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "mat-card", 14)(16, "mat-card-content")(17, "div", 6)(18, "div", 10)(19, "div", 15)(20, "mat-icon", 16);
        \u0275\u0275text(21, "group");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 17)(23, "p", 18);
        \u0275\u0275text(24, "Total Employee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h2");
        \u0275\u0275text(26, "320");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(27, "div", 13)(28, "mat-card", 14)(29, "mat-card-content")(30, "div", 6)(31, "div", 10)(32, "div", 19)(33, "mat-icon", 16);
        \u0275\u0275text(34, "work");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 17)(36, "p", 18);
        \u0275\u0275text(37, "Job Applicants");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h2");
        \u0275\u0275text(39, "15");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(40, "div", 13)(41, "mat-card", 14)(42, "mat-card-content")(43, "div", 6)(44, "div", 10)(45, "div", 20)(46, "span", 21);
        \u0275\u0275text(47, " cases ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 17)(49, "p", 18);
        \u0275\u0275text(50, "Departments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "h2");
        \u0275\u0275text(52, "6");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(53, "div", 13)(54, "mat-card", 14)(55, "mat-card-content")(56, "div", 6)(57, "div", 10)(58, "div", 22)(59, "mat-icon", 16);
        \u0275\u0275text(60, "trending_up");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 17)(62, "p", 18);
        \u0275\u0275text(63, "Average Tenure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "h2");
        \u0275\u0275text(65, "2.8 Yrs");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(66, "div", 12)(67, "div", 23)(68, "mat-card", 14)(69, "mat-card-header")(70, "div", 24)(71, "div", 6)(72, "div", 25)(73, "div", 26)(74, "span", 21);
        \u0275\u0275text(75, " pace ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "div", 27)(77, "h3");
        \u0275\u0275text(78, "Performance");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(79, "mat-card-content", 28);
        \u0275\u0275element(80, "app-timeline-chart", 29);
        \u0275\u0275elementStart(81, "div", 6)(82, "div", 30)(83, "h3", 8);
        \u0275\u0275text(84, "42.5 hrs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "p", 31);
        \u0275\u0275element(86, "span", 32);
        \u0275\u0275text(87, " Productive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 30)(89, "h3", 8);
        \u0275\u0275text(90, "18.0 hrs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "p", 31);
        \u0275\u0275element(92, "span", 33);
        \u0275\u0275text(93, " Learning");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 30)(95, "h3", 8);
        \u0275\u0275text(96, "14.0 hrs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "p", 31);
        \u0275\u0275element(98, "span", 34);
        \u0275\u0275text(99, " Unproductive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div", 30)(101, "h3", 8);
        \u0275\u0275text(102, "6.5 hrs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "p", 31);
        \u0275\u0275element(104, "span", 35);
        \u0275\u0275text(105, " Idle Time");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(106, "div", 36)(107, "mat-card", 14)(108, "mat-card-header")(109, "div", 24)(110, "div", 6)(111, "div", 25)(112, "div", 26)(113, "span", 21);
        \u0275\u0275text(114, " group ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(115, "div", 27)(116, "h3");
        \u0275\u0275text(117, "Teams");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(118, "mat-card-content", 28)(119, "div", 37)(120, "div", 38)(121, "h1", 8);
        \u0275\u0275text(122, "320");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "p", 39);
        \u0275\u0275text(124, "Employee");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(125, "app-semi-doughnut-chartjs-180", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 6)(127, "div", 41)(128, "h3", 8);
        \u0275\u0275text(129, "42.5 hrs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "p", 31);
        \u0275\u0275element(131, "span", 32);
        \u0275\u0275text(132, " Developers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "div", 41)(134, "h3", 8);
        \u0275\u0275text(135, "18.0 hrs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "p", 31);
        \u0275\u0275element(137, "span", 33);
        \u0275\u0275text(138, " Sales");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(139, "div", 41)(140, "h3", 8);
        \u0275\u0275text(141, "14.0 hrs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "p", 31);
        \u0275\u0275element(143, "span", 34);
        \u0275\u0275text(144, " Designer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "div", 41)(146, "h3", 8);
        \u0275\u0275text(147, "6.5 hrs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "p", 31);
        \u0275\u0275element(149, "span", 35);
        \u0275\u0275text(150, " QA");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(151, "div", 36)(152, "mat-card", 14)(153, "mat-card-header")(154, "div", 24)(155, "div", 6)(156, "div", 25)(157, "div", 26)(158, "span", 21);
        \u0275\u0275text(159, " business_center ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(160, "div", 27)(161, "h3");
        \u0275\u0275text(162, "Top Employee");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(163, "mat-card-content", 28)(164, "div", 42)(165, "div", 43);
        \u0275\u0275element(166, "img", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "div", 45)(168, "p", 46);
        \u0275\u0275text(169, "Liana Doe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "p", 47);
        \u0275\u0275text(171, "olivia.d@email.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "p", 31);
        \u0275\u0275text(173, "Sydney, Australia");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(174, "h4", 8);
        \u0275\u0275text(175, "Working Hours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "p", 31);
        \u0275\u0275text(177, "2025-09-22, 09:00 AM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 6)(179, "div", 41)(180, "mat-card", 48)(181, "mat-card-content")(182, "h3", 49);
        \u0275\u0275text(183, "2100.50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "p", 31);
        \u0275\u0275text(185, "Life Time");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(186, "div", 41)(187, "mat-card", 50)(188, "mat-card-content")(189, "h3", 49);
        \u0275\u0275text(190, "250.75");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "p", 31);
        \u0275\u0275text(192, "This Month");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(193, "div", 51)(194, "div", 45)(195, "button", 52)(196, "mat-icon", 16);
        \u0275\u0275text(197, "call");
        \u0275\u0275elementEnd();
        \u0275\u0275text(198, " Call");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(199, "div", 43)(200, "button", 53)(201, "mat-icon", 16);
        \u0275\u0275text(202, "sms");
        \u0275\u0275elementEnd();
        \u0275\u0275text(203, " Message");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(204, "div", 12)(205, "div", 54)(206, "mat-card", 14)(207, "mat-card-header")(208, "div", 24)(209, "div", 6)(210, "div", 55)(211, "div", 26)(212, "mat-icon", 16);
        \u0275\u0275text(213, "group");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(214, "div", 56)(215, "h3", 8);
        \u0275\u0275text(216, "Employees");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "p", 31);
        \u0275\u0275text(218, "All in employee");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(219, "div", 57)(220, "mat-form-field", 58)(221, "mat-label");
        \u0275\u0275text(222, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "mat-icon", 59);
        \u0275\u0275text(224, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(225, "input", 60, 0);
        \u0275\u0275listener("keyup", function EmployeeComponent_Template_input_keyup_225_listener($event) {
          return ctx.applyFilter($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(227, "table", 61);
        \u0275\u0275elementContainerStart(228, 62);
        \u0275\u0275template(229, EmployeeComponent_th_229_Template, 2, 0, "th", 63)(230, EmployeeComponent_td_230_Template, 14, 6, "td", 64);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(231, 65);
        \u0275\u0275template(232, EmployeeComponent_th_232_Template, 2, 0, "th", 63)(233, EmployeeComponent_td_233_Template, 5, 2, "td", 66);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(234, 67);
        \u0275\u0275template(235, EmployeeComponent_th_235_Template, 2, 0, "th", 63)(236, EmployeeComponent_td_236_Template, 5, 2, "td", 66);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(237, 68);
        \u0275\u0275template(238, EmployeeComponent_th_238_Template, 2, 0, "th", 63)(239, EmployeeComponent_td_239_Template, 7, 8, "td", 66);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(240, 69);
        \u0275\u0275template(241, EmployeeComponent_th_241_Template, 2, 0, "th", 70)(242, EmployeeComponent_td_242_Template, 10, 3, "td", 66);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(243, 71);
        \u0275\u0275template(244, EmployeeComponent_th_244_Template, 2, 0, "th", 70)(245, EmployeeComponent_td_245_Template, 21, 1, "td", 66);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(246, EmployeeComponent_tr_246_Template, 1, 0, "tr", 72)(247, EmployeeComponent_tr_247_Template, 1, 0, "tr", 73)(248, EmployeeComponent_tr_248_Template, 3, 2, "tr", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "mat-card-content");
        \u0275\u0275element(250, "mat-paginator", 75);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(251, "mat-drawer", 76, 1)(253, "app-view-employee-drawer", 77);
        \u0275\u0275listener("editEmployee", function EmployeeComponent_Template_app_view_employee_drawer_editEmployee_253_listener() {
          return ctx.editEmployee(ctx.selectedEmployee());
        })("closeDrawer", function EmployeeComponent_Template_app_view_employee_drawer_closeDrawer_253_listener() {
          return ctx.closeEmployeeDrawer();
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(227);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(3);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(5, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275property("employee", ctx.selectedEmployee());
      }
    }, dependencies: [CommonModule, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatButtonModule, MatButton, MatIconButton, MatSidenavModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatDialogModule, FormsModule, MatTooltipModule, MatTooltip, MatListModule, MatInputModule, MatInput, MatSelectModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatPaginatorModule, MatPaginator, MatSortModule, MatSort, MatSortHeader, MatChipsModule, MatProgressBarModule, PageRightComponent, ViewEmployeeDrawerComponent, TimelineChartComponent, SemiDoughnutChartjs180Component, DecimalPipe], styles: ["\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  position: unset !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 20;\n}\n/*# sourceMappingURL=employee.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmployeeComponent, [{
    type: Component,
    args: [{ selector: "app-employee", standalone: true, imports: [CommonModule, MatCardModule, MatIconModule, MatMenuModule, MatButtonModule, MatSidenavModule, MatFormFieldModule, MatDialogModule, FormsModule, MatTooltipModule, MatListModule, MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule, MatProgressBarModule, PageRightComponent, ViewEmployeeDrawerComponent, TimelineChartComponent, SemiDoughnutChartjs180Component], template: `
        <mat-drawer-container class="bg-none p-0 m-0" hasBackdrop="false">
            <mat-drawer-content>
                <div class="container-fluid fade-in mb-3 mb-lg-4">
                    <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                        <div class="row gx-3 align-items-center">
                            <div class="col mb-3 mb-xl-0 py-1">
                                <h3 class="mb-1">Employees</h3>
                                <p class="small opacity-50">Manage your employee & support</p>
                            </div>

                            <div class="col-auto mb-3 mb-xl-0">
                                <app-page-right></app-page-right>
                            </div>
                        </div>
                    </mat-card>
                </div>
                <div class="container fade-in">
                    <!-- overview -->
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-6 col-sm-6 col-md-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto mb-3 mb-xl-0">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-cyan">
                                                <mat-icon class="material-icons-outlined">group</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl">
                                            <p class="small text-secondary mb-1">Total Employee</p>
                                            <h2>320</h2>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-6 col-sm-6 col-md-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto mb-3 mb-xl-0">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-yellow">
                                                <mat-icon class="material-icons-outlined">work</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl">
                                            <p class="small text-secondary mb-1">Job Applicants</p>
                                            <h2>15</h2>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-6 col-sm-6 col-md-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto mb-3 mb-xl-0">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-red">
                                                <span class="material-symbols-outlined"> cases </span>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl">
                                            <p class="small text-secondary mb-1">Departments</p>
                                            <h2>6</h2>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-6 col-sm-6 col-md-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto mb-3 mb-xl-0">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-green">
                                                <mat-icon class="material-icons-outlined">trending_up</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl">
                                            <p class="small text-secondary mb-1">Average Tenure</p>
                                            <h2>2.8 Yrs</h2>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                    </div>
                    <div class="row gx-3 gx-lg-4">
                        <!-- employee performance -->
                        <div class="col-12 col-lg-12 col-xl-6">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-header>
                                    <div class="w-100">
                                        <div class="row gx-3 align-items-center">
                                            <div class="col-auto mb-3 mb-lg-4">
                                                <div class="avatar avatar-40 text-theme rounded">
                                                    <span class="material-symbols-outlined"> pace </span>
                                                </div>
                                            </div>
                                            <div class="col mb-3 mb-lg-4">
                                                <h3>Performance</h3>
                                            </div>
                                        </div>
                                    </div>
                                </mat-card-header>
                                <mat-card-content class="pb-0">
                                    <app-timeline-chart class="height-200 d-block mb-3 mb-lg-4"></app-timeline-chart>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-6 col-lg-3 col-xl mb-3">
                                            <h3 class="mb-1">42.5 hrs</h3>
                                            <p class="text-secondary small"><span class="avatar avatar-10 rounded bg-theme theme-blue align-middle"></span> Productive</p>
                                        </div>
                                        <div class="col-6 col-lg-3 col-xl mb-3">
                                            <h3 class="mb-1">18.0 hrs</h3>
                                            <p class="text-secondary small"><span class="avatar avatar-10 rounded bg-theme theme-sky align-middle"></span> Learning</p>
                                        </div>
                                        <div class="col-6 col-lg-3 col-xl mb-3">
                                            <h3 class="mb-1">14.0 hrs</h3>
                                            <p class="text-secondary small"><span class="avatar avatar-10 rounded bg-light-theme theme-chartreuse align-middle"></span> Unproductive</p>
                                        </div>
                                        <div class="col-6 col-lg-3 col-xl mb-3">
                                            <h3 class="mb-1">6.5 hrs</h3>
                                            <p class="text-secondary small"><span class="avatar avatar-10 rounded align-middle bg-theme theme-red"></span> Idle Time</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-header>
                                    <div class="w-100">
                                        <div class="row gx-3 align-items-center">
                                            <div class="col-auto mb-3 mb-lg-4">
                                                <div class="avatar avatar-40 text-theme rounded">
                                                    <span class="material-symbols-outlined"> group </span>
                                                </div>
                                            </div>
                                            <div class="col mb-3 mb-lg-4">
                                                <h3>Teams</h3>
                                            </div>
                                        </div>
                                    </div>
                                </mat-card-header>
                                <mat-card-content class="pb-0">
                                    <div class="height-140 w-100 text-center position-relative mb-4">
                                        <div class="position-absolute bottom-0 mx-auto start-0 w-100 mb-0">
                                            <h1 class="mb-1">320</h1>
                                            <p class="text-secondary small mb-1">Employee</p>
                                        </div>
                                        <app-semi-doughnut-chartjs-180 class="height-140 w-100 position-relative mx-auto" id="semidoughnutchart" style="top:-20px"></app-semi-doughnut-chartjs-180>
                                    </div>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-6 mb-3">
                                            <h3 class="mb-1">42.5 hrs</h3>
                                            <p class="text-secondary small"><span class="avatar avatar-10 rounded bg-theme theme-blue align-middle"></span> Developers</p>
                                        </div>
                                        <div class="col-6 mb-3">
                                            <h3 class="mb-1">18.0 hrs</h3>
                                            <p class="text-secondary small"><span class="avatar avatar-10 rounded bg-theme theme-sky align-middle"></span> Sales</p>
                                        </div>
                                        <div class="col-6 mb-3">
                                            <h3 class="mb-1">14.0 hrs</h3>
                                            <p class="text-secondary small"><span class="avatar avatar-10 rounded bg-light-theme theme-chartreuse align-middle"></span> Designer</p>
                                        </div>
                                        <div class="col-6 mb-3">
                                            <h3 class="mb-1">6.5 hrs</h3>
                                            <p class="text-secondary small"><span class="avatar avatar-10 rounded align-middle bg-theme theme-red"></span> QA</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-sm-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-header>
                                    <div class="w-100">
                                        <div class="row gx-3 align-items-center">
                                            <div class="col-auto mb-3 mb-lg-4">
                                                <div class="avatar avatar-40 text-theme rounded">
                                                    <span class="material-symbols-outlined"> business_center </span>
                                                </div>
                                            </div>
                                            <div class="col mb-3 mb-lg-4">
                                                <h3>Top Employee</h3>
                                            </div>
                                        </div>
                                    </div>
                                </mat-card-header>
                                <mat-card-content class="pb-0">
                                    <div class="row gx-3 align-items-center mb-3">
                                        <div class="col-auto">
                                            <img src="assets/img/user-4.jpg" alt="" class="avatar avatar-70 rounded-circle" />
                                        </div>
                                        <div class="col">
                                            <p class="fw-bold mb-2">Liana Doe</p>
                                            <p class="mb-1 text-truncated">olivia.d@email.com</p>
                                            <p class="text-secondary small">Sydney, Australia</p>
                                        </div>
                                    </div>

                                    <h4 class="mb-1">Working Hours</h4>
                                    <p class="text-secondary small">2025-09-22, 09:00 AM</p>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-6 mb-3">
                                            <mat-card class="bg-light-theme shadow-none">
                                                <mat-card-content>
                                                    <h3 class="mb-0">2100.50</h3>
                                                    <p class="text-secondary small">Life Time</p>
                                                </mat-card-content>
                                            </mat-card>
                                        </div>
                                        <div class="col-6 mb-3">
                                            <mat-card class="bg-light-theme shadow-none theme-green">
                                                <mat-card-content>
                                                    <h3 class="mb-0">250.75</h3>
                                                    <p class="text-secondary small">This Month</p>
                                                </mat-card-content>
                                            </mat-card>
                                        </div>
                                    </div>
                                    <div class="row gx-2 justify-content-center mb-3">
                                        <div class="col">
                                            <button matButton class="text-theme theme-green"><mat-icon class="material-icons-outlined">call</mat-icon> Call</button>
                                        </div>
                                        <div class="col-auto">
                                            <button matButton class="text-theme theme-orange"><mat-icon class="material-icons-outlined">sms</mat-icon> Message</button>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                    </div>
                    <div class="row gx-3 gx-lg-4">
                        <!-- list -->
                        <div class="col-12 col-md-12 position-relative">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-header>
                                    <div class="w-100">
                                        <div class="row gx-3 align-items-center">
                                            <div class="col-auto mb-3">
                                                <div class="avatar avatar-40 text-theme rounded">
                                                    <mat-icon class="material-icons-outlined">group</mat-icon>
                                                </div>
                                            </div>
                                            <div class="col mb-3">
                                                <h3 class="mb-1">Employees</h3>
                                                <p class="text-secondary small">All in employee</p>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                                                <mat-form-field appearance="outline" class="w-100 inline-small">
                                                    <mat-label>Search</mat-label>
                                                    <mat-icon matPrefix>search</mat-icon>
                                                    <input matInput placeholder="Search" (keyup)="applyFilter($event)" #searchinput />
                                                </mat-form-field>
                                            </div>
                                        </div>
                                    </div>
                                </mat-card-header>

                                <table mat-table [dataSource]="dataSource" matSort class="bg-none mb-3 responsive-table">
                                    <ng-container matColumnDef="employeeName">
                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Employee Info</th>
                                        <td mat-cell *matCellDef="let element" class="py-2 hoverview">
                                            <div class="row gx-3">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 rounded coverimg" (click)="openEmployeeDrawer(element)">
                                                        <img [src]="element.employeeImage" alt="{{ element.employeeName }}" class="" />
                                                        <mat-icon class="hoverview-icon bg-light-theme text-theme rounded circle avatar avatar-40 position-absolute start-0 top-0">visibility</mat-icon>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <h4 class="mb-0">{{ element.employeeName }} <mat-icon class="text-sm text-theme" (click)="editEmployee(element)">edit</mat-icon></h4>
                                                    <p class="text-secondary small">{{ element.city }}, {{ element.country }}</p>
                                                </div>
                                            </div>
                                        </td>
                                    </ng-container>

                                    <ng-container matColumnDef="contactInfo">
                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Contact</th>
                                        <td mat-cell *matCellDef="let element">
                                            <p class="mb-1">{{ element.email }}</p>
                                            <p class="text-secondary small">{{ element.phone }}</p>
                                        </td>
                                    </ng-container>

                                    <ng-container matColumnDef="lastVisited">
                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Login</th>
                                        <td mat-cell *matCellDef="let element">
                                            <p class="mb-1">{{ element.lastLoginDate }}</p>
                                            <p class="text-secondary small">{{ element.lastVisitedTime }}</p>
                                        </td>
                                    </ng-container>

                                    <ng-container matColumnDef="totalPurchase">
                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Working Hours</th>
                                        <td mat-cell *matCellDef="let element">
                                            <h4 class="mb-1">{{ element.totalWorkingTime | number : "1.2-2" }} hrs</h4>
                                            <p class="text-secondary small">This Month: {{ element.totalWorkingTimeThisMonth | number : "1.2-2" }}</p>
                                        </td>
                                    </ng-container>

                                    <ng-container matColumnDef="status">
                                        <th mat-header-cell *matHeaderCellDef>Task</th>
                                        <td mat-cell *matCellDef="let element">
                                            <div class="badge badge-light theme-blue d-inline-block me-1" matTooltip="Assigned">
                                                <h4 class="px-1">{{ element.activeTask }}</h4>
                                            </div>
                                            <div class="badge badge-light theme-green d-inline-block me-1" matTooltip="Completed">
                                                <h4 class="px-1">{{ element.completedTask }}</h4>
                                            </div>
                                            <div class="badge badge-light theme-yellow d-inline-block" matTooltip="In-Progress">
                                                <h4 class="px-1">{{ element.cancelledTask }}</h4>
                                            </div>
                                        </td>
                                    </ng-container>

                                    <ng-container matColumnDef="actions">
                                        <th mat-header-cell *matHeaderCellDef>Actions</th>
                                        <td mat-cell *matCellDef="let element">
                                            <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Actions menu">
                                                <mat-icon>more_vert</mat-icon>
                                            </button>
                                            <mat-menu #menu="matMenu">
                                                <button mat-menu-item (click)="editEmployee(element)">
                                                    <mat-icon>edit</mat-icon>
                                                    <span>Edit</span>
                                                </button>
                                                <button mat-menu-item (click)="banEmployee(element)">
                                                    <mat-icon>block</mat-icon>
                                                    <span>Ban</span>
                                                </button>
                                                <button mat-menu-item (click)="deleteEmployee(element)">
                                                    <mat-icon>delete</mat-icon>
                                                    <span>Delete</span>
                                                </button>
                                            </mat-menu>
                                        </td>
                                    </ng-container>

                                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                                    <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

                                    <tr class="mat-row" *matNoDataRow>
                                        <td class="mat-cell" [attr.colspan]="displayedColumns.length">No data matching the filter "{{ searchinput.value }}"</td>
                                    </tr>
                                </table>

                                <mat-card-content>
                                    <!-- Paginator -->
                                    <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" aria-label="Select page of employees" class="bg-none"></mat-paginator>
                                </mat-card-content>
                            </mat-card>
                        </div>
                    </div>
                </div>
            </mat-drawer-content>
            <mat-drawer #viewemployee mode="over" position="end" style="--mat-sidenav-container-elevation-shadow:0px 5px 15px rgba(0, 0, 0, 0.15);z-index:12">
                <app-view-employee-drawer [employee]="selectedEmployee()" (editEmployee)="editEmployee(selectedEmployee())" (closeDrawer)="closeEmployeeDrawer()"></app-view-employee-drawer>
            </mat-drawer>
        </mat-drawer-container>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA], styles: ["/* angular:styles/component:css;3d1d77e296ed32bbcc4706a509d19ebde4ba1bf5f709e94855c3d2fc076a40e7;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/pages/app/employee/employee.component.ts */\n.mat-drawer-container {\n  position: unset !important;\n}\n.mat-drawer-container mat-drawer {\n  position: fixed;\n  z-index: 20;\n}\n/*# sourceMappingURL=employee.component.css.map */\n"] }]
  }], null, { viewemployee: [{
    type: ViewChild,
    args: ["viewemployee"]
  }], paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeComponent, { className: "EmployeeComponent", filePath: "src/app/pages/app/employee/employee.component.ts", lineNumber: 428 });
})();
export {
  EmployeeComponent
};
//# sourceMappingURL=employee.component-RIOXREX6.js.map
