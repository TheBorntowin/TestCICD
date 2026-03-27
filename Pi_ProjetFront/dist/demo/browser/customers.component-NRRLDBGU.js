import {
  PageRightComponent
} from "./chunk-BMFH3O7D.js";
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

// src/app/pages/app/customers/editcustomer.component.ts
function EditCustomerDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function EditCustomerDialogComponent_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function EditCustomerDialogComponent_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email is required ");
    \u0275\u0275elementEnd();
  }
}
var EditCustomerDialogComponent = class _EditCustomerDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.customerForm = new FormGroup({
      customerImage: new FormControl(this.data.customerImage),
      customerName: new FormControl("", Validators.required),
      city: new FormControl(""),
      country: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl(""),
      totalPurchaseLifetime: new FormControl(0),
      totalPurchaseThisMonth: new FormControl(0)
    });
    this.customerForm.patchValue(data);
  }
  // Closes the dialog without saving
  onCancel() {
    this.dialogRef.close();
  }
  // Closes the dialog and returns the updated form data
  onSave() {
    if (this.customerForm.valid) {
      this.dialogRef.close(this.customerForm.value);
    }
  }
  static {
    this.\u0275fac = function EditCustomerDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditCustomerDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditCustomerDialogComponent, selectors: [["app-edit-customer-dialog"]], decls: 62, vars: 8, consts: [["mat-dialog-title", ""], [1, "pt-2", 3, "formGroup"], [1, "row", "gx-3"], [1, "col-12", "col-lg-4", "text-center"], [1, "height-180", "width-180", "lh-20", "position-relative", "d-block", "mx-auto"], [1, "position-absolute", "bottom-0", "end-0", "z-index-1", "m-2"], ["matMiniFab", "elevated", "onclick", "this.nextElementSibling.click()"], [1, "material-icons-outlined", "mx-0"], ["type", "file", 1, "d-none"], [1, "coverimg", "avatar", "avatar-180", "mb-0", "position-relative", "z-index-0", "overflow-hidden", "rounded-circle"], [1, "col-12", "col-lg-8"], [1, "col-12", "col-lg-6"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "customerName", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "country"], ["matInput", "", "formControlName", "email", "type", "email", "required", ""], ["matInput", "", "formControlName", "phone"], ["matInput", "", "formControlName", "totalPurchaseLifetime", "type", "number"], ["matInput", "", "formControlName", "totalPurchaseThisMonth", "type", "number"], ["matButton", "filled", "color", "primary", 3, "click", "disabled"], ["matButton", "", 1, "ms-auto", "theme-red", 3, "click"]], template: function EditCustomerDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h4", 0);
        \u0275\u0275text(1, "Edit Customer Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "button", 6)(9, "mat-icon", 7);
        \u0275\u0275text(10, "photo_camera");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "input", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 2)(15, "div", 11)(16, "mat-form-field", 12)(17, "mat-label");
        \u0275\u0275text(18, "Customer Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 13);
        \u0275\u0275template(20, EditCustomerDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 14);
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
        \u0275\u0275template(39, EditCustomerDialogComponent_mat_error_39_Template, 2, 0, "mat-error", 14)(40, EditCustomerDialogComponent_mat_error_40_Template, 2, 0, "mat-error", 14);
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
        \u0275\u0275listener("click", function EditCustomerDialogComponent_Template_button_click_58_listener() {
          return ctx.onSave();
        });
        \u0275\u0275text(59, "Save");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "button", 22);
        \u0275\u0275listener("click", function EditCustomerDialogComponent_Template_button_click_60_listener() {
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
        \u0275\u0275property("formGroup", ctx.customerForm);
        \u0275\u0275advance(9);
        \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image:url('", ctx.data.customerImage, "')"));
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.customerForm.get("customerName")) == null ? null : tmp_2_0.invalid);
        \u0275\u0275advance(19);
        \u0275\u0275property("ngIf", ((tmp_3_0 = ctx.customerForm.get("email")) == null ? null : tmp_3_0.hasError("email")) && !((tmp_3_0 = ctx.customerForm.get("email")) == null ? null : tmp_3_0.hasError("required")));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.customerForm.get("email")) == null ? null : tmp_4_0.hasError("required"));
        \u0275\u0275advance(18);
        \u0275\u0275property("disabled", ctx.customerForm.invalid);
      }
    }, dependencies: [CommonModule, NgIf, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatIconModule, MatIcon, MatButtonModule, MatButton, MatMiniFabButton, MatFormFieldModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditCustomerDialogComponent, [{
    type: Component,
    args: [{ selector: "app-edit-customer-dialog", imports: [CommonModule, MatDialogModule, MatInputModule, MatIconModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule], template: `<h4 mat-dialog-title>Edit Customer Profile</h4>
        <mat-dialog-content>
            <form [formGroup]="customerForm" class="pt-2">
                <div class="row gx-3">
                    <div class="col-12 col-lg-4 text-center">
                        <div class="height-180 width-180 lh-20 position-relative d-block mx-auto">
                            <div class="position-absolute bottom-0 end-0 z-index-1 m-2">
                                <button matMiniFab="elevated" onclick="this.nextElementSibling.click()"><mat-icon class="material-icons-outlined mx-0">photo_camera</mat-icon></button>
                                <input type="file" class="d-none" />
                            </div>
                            <div class="coverimg avatar avatar-180 mb-0 position-relative z-index-0 overflow-hidden rounded-circle" style="background-image:url('{{ data.customerImage }}')"></div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="row gx-3">
                            <div class="col-12 col-lg-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Customer Name</mat-label>
                                    <input matInput formControlName="customerName" required />
                                    <mat-error *ngIf="customerForm.get('customerName')?.invalid">Name is required</mat-error>
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
                                    <mat-error *ngIf="customerForm.get('email')?.hasError('email') && !customerForm.get('email')?.hasError('required')"> Please enter a valid email address </mat-error>
                                    <mat-error *ngIf="customerForm.get('email')?.hasError('required')"> Email is required </mat-error>
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
            <button matButton="filled" color="primary" [disabled]="customerForm.invalid" (click)="onSave()">Save</button>
            <button matButton (click)="onCancel()" class="ms-auto theme-red">Cancel</button>
        </mat-dialog-actions>` }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditCustomerDialogComponent, { className: "EditCustomerDialogComponent", filePath: "src/app/pages/app/customers/editcustomer.component.ts", lineNumber: 93 });
})();

// src/app/pages/app/customers/viewcustomer.component.ts
function ViewCustomerDrawerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-toolbar")(1, "h2", 0);
    \u0275\u0275text(2, "Customer Details");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 1);
    \u0275\u0275elementStart(4, "button", 2);
    \u0275\u0275listener("click", function ViewCustomerDrawerComponent_Conditional_0_Template_button_click_4_listener() {
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
    \u0275\u0275elementStart(12, "p", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-card", 8)(15, "mat-card-content")(16, "h4", 9);
    \u0275\u0275text(17, "Contact Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "p", 7);
    \u0275\u0275text(21, "Email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12)(23, "p");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 10)(26, "div", 11)(27, "p", 7);
    \u0275\u0275text(28, "Phone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 12)(30, "p");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(32, "br");
    \u0275\u0275elementStart(33, "h4", 9);
    \u0275\u0275text(34, "Location Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 10)(36, "div", 13)(37, "p", 7);
    \u0275\u0275text(38, "City");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 14)(40, "p");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 10)(43, "div", 13)(44, "p", 7);
    \u0275\u0275text(45, "Country");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 14)(47, "p");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(49, "br");
    \u0275\u0275elementStart(50, "h4", 9);
    \u0275\u0275text(51, "Purchase History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 10)(53, "div", 13)(54, "p", 7);
    \u0275\u0275text(55, "Lifetime");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 14)(57, "p");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 10)(60, "div", 13)(61, "p", 7);
    \u0275\u0275text(62, "This month");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 14)(64, "p");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(66, "br");
    \u0275\u0275elementStart(67, "h4", 9);
    \u0275\u0275text(68, "Order Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 15)(70, "div", 16)(71, "h4");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 17)(74, "h4");
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 18)(77, "h4");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(79, "div", 19)(80, "div", 10)(81, "div", 20)(82, "button", 21);
    \u0275\u0275listener("click", function ViewCustomerDrawerComponent_Conditional_0_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editCustomer.emit());
    });
    \u0275\u0275elementStart(83, "mat-icon", 22);
    \u0275\u0275text(84, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, " Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 23)(87, "button", 24);
    \u0275\u0275listener("click", function ViewCustomerDrawerComponent_Conditional_0_Template_button_click_87_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer.emit());
    });
    \u0275\u0275text(88, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image:url(", ctx_r1.customer.customerImage, ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.customer.customerImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.customer.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.customer.city);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.customer.email);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.customer.phone);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.customer.city);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.customer.country);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.customer.totalPurchaseLifetime));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatCurrency(ctx_r1.customer.totalPurchaseThisMonth));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.customer.activeOrders, " Active");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.customer.completedOrders, " Completed");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.customer.cancelledOrders, " Rejected");
  }
}
var ViewCustomerDrawerComponent = class _ViewCustomerDrawerComponent {
  constructor() {
    this.customer = null;
    this.closeDrawer = new EventEmitter();
    this.editCustomer = new EventEmitter();
  }
  formatCurrency(value) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
  }
  static {
    this.\u0275fac = function ViewCustomerDrawerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewCustomerDrawerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewCustomerDrawerComponent, selectors: [["app-view-customer-drawer"]], inputs: { customer: "customer" }, outputs: { closeDrawer: "closeDrawer", editCustomer: "editCustomer" }, decls: 1, vars: 1, consts: [[1, "fw-bold"], [1, "spacer"], ["matIconButton", "", "aria-label", "theme close", 3, "click"], [1, "text-center"], [1, "avatar", "avatar-140", "coverimg", "rounded-circle", "mb-3"], ["alt", "Customer Image", 1, "d-none", 3, "src"], [1, "mb-1"], [1, "text-secondary"], [1, "m-3"], [1, "mb-3"], [1, "row", "gx-3", "mb-2"], [1, "col-4"], [1, "col-8"], [1, "col-5"], [1, "col-7"], [1, "mb-3", "mb-lg-2"], [1, "badge", "badge-light", "theme-blue", "me-2", "mb-2", "d-inline-block"], [1, "badge", "badge-light", "theme-green", "me-2", "mb-2", "d-inline-block"], [1, "badge", "badge-light", "theme-red", "me-2", "mb-2", "d-inline-block"], [1, "px-3"], [1, "col"], ["matButton", "filled", 3, "click"], [1, "material-icons-outlined"], [1, "col-auto"], ["matButton", "", 1, "theme-red", 3, "click"]], template: function ViewCustomerDrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ViewCustomerDrawerComponent_Conditional_0_Template, 89, 15);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.customer ? 0 : -1);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatToolbarModule, MatToolbar], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCustomerDrawerComponent, [{
    type: Component,
    args: [{
      selector: "app-view-customer-drawer",
      imports: [MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule],
      template: `
        @if (customer) {
        <mat-toolbar>
            <h2 class="fw-bold">Customer Details</h2>
            <span class="spacer"></span>
            <button matIconButton aria-label="theme close" (click)="closeDrawer.emit()">
                <mat-icon>close</mat-icon>
            </button>
        </mat-toolbar>
        <div class="text-center">
            <div class="avatar avatar-140 coverimg rounded-circle mb-3" style="background-image:url({{ customer.customerImage }})">
                <img class="d-none" [src]="customer.customerImage" alt="Customer Image" />
            </div>
            <h3 class="mb-1">{{ customer.customerName }}</h3>
            <p class="text-secondary">{{ customer.city }}</p>
        </div>
        <mat-card class="m-3">
            <mat-card-content>
                <h4 class="mb-3">Contact Info</h4>
                <div class="row gx-3 mb-2">
                    <div class="col-4"><p class="text-secondary">Email</p></div>
                    <div class="col-8">
                        <p>{{ customer.email }}</p>
                    </div>
                </div>
                <div class="row gx-3 mb-2">
                    <div class="col-4"><p class="text-secondary">Phone</p></div>
                    <div class="col-8">
                        <p>{{ customer.phone }}</p>
                    </div>
                </div>
                <br />
                <h4 class="mb-3">Location Info</h4>
                <div class="row gx-3 mb-2">
                    <div class="col-5"><p class="text-secondary">City</p></div>
                    <div class="col-7">
                        <p>{{ customer.city }}</p>
                    </div>
                </div>
                <div class="row gx-3 mb-2">
                    <div class="col-5">
                        <p class="text-secondary">Country</p>
                    </div>
                    <div class="col-7">
                        <p>{{ customer.country }}</p>
                    </div>
                </div>
                <br />
                <h4 class="mb-3">Purchase History</h4>
                <div class="row gx-3 mb-2">
                    <div class="col-5"><p class="text-secondary">Lifetime</p></div>
                    <div class="col-7">
                        <p>{{ formatCurrency(customer.totalPurchaseLifetime) }}</p>
                    </div>
                </div>
                <div class="row gx-3 mb-2">
                    <div class="col-5">
                        <p class="text-secondary">This month</p>
                    </div>
                    <div class="col-7">
                        <p>{{ formatCurrency(customer.totalPurchaseThisMonth) }}</p>
                    </div>
                </div>
                <br />
                <h4 class="mb-3">Order Status</h4>
                <div class="mb-3 mb-lg-2">
                    <div class="badge badge-light theme-blue me-2 mb-2 d-inline-block">
                        <h4>{{ customer.activeOrders }} Active</h4>
                    </div>
                    <div class="badge badge-light theme-green me-2 mb-2 d-inline-block">
                        <h4>{{ customer.completedOrders }} Completed</h4>
                    </div>
                    <div class="badge badge-light theme-red me-2 mb-2 d-inline-block">
                        <h4>{{ customer.cancelledOrders }} Rejected</h4>
                    </div>
                </div>
            </mat-card-content>
        </mat-card>
        <div class="px-3">
            <div class="row gx-3 mb-2">
                <div class="col">
                    <button matButton="filled" (click)="editCustomer.emit()"><mat-icon class="material-icons-outlined">edit</mat-icon> Edit</button>
                </div>
                <div class="col-auto">
                    <button matButton class="theme-red" (click)="closeDrawer.emit()">Cancel</button>
                </div>
            </div>
        </div>
        }
    `
    }]
  }], null, { customer: [{
    type: Input
  }], closeDrawer: [{
    type: Output
  }], editCustomer: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewCustomerDrawerComponent, { className: "ViewCustomerDrawerComponent", filePath: "src/app/pages/app/customers/viewcustomer.component.ts", lineNumber: 103 });
})();

// src/app/pages/app/customers/customers.component.ts
var _c0 = ["viewcustomer"];
var _c1 = () => [5, 10, 25, 100];
function CustomersComponent_th_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Customer Info");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_td_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 51)(1, "div", 52)(2, "div", 15)(3, "div", 53);
    \u0275\u0275listener("click", function CustomersComponent_td_92_Template_div_click_3_listener() {
      const element_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCustomerDrawer(element_r2));
    });
    \u0275\u0275element(4, "img", 54);
    \u0275\u0275elementStart(5, "mat-icon", 55);
    \u0275\u0275text(6, "visibility");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 18)(8, "h4", 56);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "mat-icon", 57);
    \u0275\u0275listener("click", function CustomersComponent_td_92_Template_mat_icon_click_10_listener() {
      const element_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editCustomer(element_r2));
    });
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 28);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("alt", \u0275\u0275interpolate(element_r2.customerName))("src", element_r2.customerImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", element_r2.customerName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", element_r2.city, ", ", element_r2.country);
  }
}
function CustomersComponent_th_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Contact");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_td_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 58)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
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
function CustomersComponent_th_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Last Visited");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_td_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 58)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r5.lastVisitedDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r5.lastVisitedTime);
  }
}
function CustomersComponent_th_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Total Purchase");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_td_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 58)(1, "h4", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 28);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$ ", \u0275\u0275pipeBind2(3, 2, element_r6.totalPurchaseLifetime, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("This Month: $ ", \u0275\u0275pipeBind2(6, 5, element_r6.totalPurchaseThisMonth, "1.2-2"));
  }
}
function CustomersComponent_th_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 59);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_td_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 58)(1, "div", 60)(2, "h4", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 62)(5, "h4", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 63)(8, "h4", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(element_r7.activeOrders);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(element_r7.completedOrders);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(element_r7.cancelledOrders);
  }
}
function CustomersComponent_th_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 59);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CustomersComponent_td_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 58)(1, "button", 64)(2, "mat-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 2)(6, "button", 65);
    \u0275\u0275listener("click", function CustomersComponent_td_107_Template_button_click_6_listener() {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editCustomer(element_r9));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 65);
    \u0275\u0275listener("click", function CustomersComponent_td_107_Template_button_click_11_listener() {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.banCustomer(element_r9));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "block");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Ban");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 65);
    \u0275\u0275listener("click", function CustomersComponent_td_107_Template_button_click_16_listener() {
      const element_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteCustomer(element_r9));
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
function CustomersComponent_tr_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 66);
  }
}
function CustomersComponent_tr_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 67);
  }
}
function CustomersComponent_tr_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 68)(1, "td", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const searchinput_r11 = \u0275\u0275reference(88);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('No data matching the filter "', searchinput_r11.value, '"');
  }
}
register();
var CustomersComponent = class _CustomersComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.originalTabledata = [
      {
        customerImage: "assets/img/user-1.jpg",
        customerName: "Michael Johnson",
        city: "Los Angeles",
        country: "USA",
        email: "michael.j@email.com",
        phone: "555-234-5678",
        lastVisitedDate: "2025-09-22",
        lastVisitedTime: "09:00 AM",
        totalPurchaseLifetime: 2100.5,
        totalPurchaseThisMonth: 250.75,
        activeOrders: 3,
        completedOrders: 22,
        cancelledOrders: 0
      },
      {
        customerImage: "assets/img/user-2.jpg",
        customerName: "Emily Williams",
        city: "Paris",
        country: "France",
        email: "emily.w@email.com",
        phone: "555-876-5432",
        lastVisitedDate: "2025-09-21",
        lastVisitedTime: "04:15 PM",
        totalPurchaseLifetime: 850,
        totalPurchaseThisMonth: 120,
        activeOrders: 0,
        completedOrders: 10,
        cancelledOrders: 2
      },
      {
        customerImage: "assets/img/user-3.jpg",
        customerName: "David Brown",
        city: "Tokyo",
        country: "Japan",
        email: "david.b@email.com",
        phone: "555-345-6789",
        lastVisitedDate: "2025-09-20",
        lastVisitedTime: "11:50 AM",
        totalPurchaseLifetime: 350.25,
        totalPurchaseThisMonth: 45.5,
        activeOrders: 1,
        completedOrders: 5,
        cancelledOrders: 0
      },
      {
        customerImage: "assets/img/user-4.jpg",
        customerName: "Olivia Davis",
        city: "Sydney",
        country: "Australia",
        email: "olivia.d@email.com",
        phone: "555-765-4321",
        lastVisitedDate: "2025-09-19",
        lastVisitedTime: "06:30 PM",
        totalPurchaseLifetime: 1500,
        totalPurchaseThisMonth: 300,
        activeOrders: 2,
        completedOrders: 18,
        cancelledOrders: 1
      },
      {
        customerImage: "assets/img/user-5.jpg",
        customerName: "Daniel Wilson",
        city: "Berlin",
        country: "Germany",
        email: "daniel.w@email.com",
        phone: "555-456-7890",
        lastVisitedDate: "2025-09-18",
        lastVisitedTime: "01:20 PM",
        totalPurchaseLifetime: 675.8,
        totalPurchaseThisMonth: 80.25,
        activeOrders: 0,
        completedOrders: 9,
        cancelledOrders: 0
      },
      {
        customerImage: "assets/img/user-6.jpg",
        customerName: "Sophia Martinez",
        city: "Madrid",
        country: "Spain",
        email: "sophia.m@email.com",
        phone: "555-654-3210",
        lastVisitedDate: "2025-09-17",
        lastVisitedTime: "09:45 AM",
        totalPurchaseLifetime: 950.9,
        totalPurchaseThisMonth: 150,
        activeOrders: 1,
        completedOrders: 14,
        cancelledOrders: 0
      },
      {
        customerImage: "assets/img/user-7.jpg",
        customerName: "Matthew Taylor",
        city: "Toronto",
        country: "Canada",
        email: "matthew.t@email.com",
        phone: "555-543-2109",
        lastVisitedDate: "2025-09-16",
        lastVisitedTime: "03:10 PM",
        totalPurchaseLifetime: 420,
        totalPurchaseThisMonth: 65.75,
        activeOrders: 0,
        completedOrders: 7,
        cancelledOrders: 1
      },
      {
        customerImage: "assets/img/user-8.jpg",
        customerName: "Isabella Anderson",
        city: "Rome",
        country: "Italy",
        email: "isabella.a@email.com",
        phone: "555-432-1098",
        lastVisitedDate: "2025-09-15",
        lastVisitedTime: "08:00 PM",
        totalPurchaseLifetime: 2800.5,
        totalPurchaseThisMonth: 450,
        activeOrders: 4,
        completedOrders: 30,
        cancelledOrders: 2
      },
      {
        customerImage: "assets/img/user-9.jpg",
        customerName: "Joseph Thomas",
        city: "Dubai",
        country: "UAE",
        email: "joseph.t@email.com",
        phone: "555-321-0987",
        lastVisitedDate: "2025-09-14",
        lastVisitedTime: "05:00 AM",
        totalPurchaseLifetime: 760,
        totalPurchaseThisMonth: 95,
        activeOrders: 1,
        completedOrders: 11,
        cancelledOrders: 0
      },
      {
        customerImage: "assets/img/user-10.jpg",
        customerName: "Ava Hernandez",
        city: "Mexico City",
        country: "Mexico",
        email: "ava.h@email.com",
        phone: "555-210-9876",
        lastVisitedDate: "2025-09-13",
        lastVisitedTime: "12:00 PM",
        totalPurchaseLifetime: 550,
        totalPurchaseThisMonth: 70,
        activeOrders: 0,
        completedOrders: 6,
        cancelledOrders: 0
      },
      {
        customerImage: "assets/img/user-1.jpg",
        customerName: "Christopher Moore",
        city: "Shanghai",
        country: "China",
        email: "chris.m@email.com",
        phone: "555-109-8765",
        lastVisitedDate: "2025-09-12",
        lastVisitedTime: "07:45 PM",
        totalPurchaseLifetime: 1800,
        totalPurchaseThisMonth: 200,
        activeOrders: 2,
        completedOrders: 25,
        cancelledOrders: 1
      },
      {
        customerImage: "assets/img/user-2.jpg",
        customerName: "Mia White",
        city: "Mumbai",
        country: "India",
        email: "mia.w@email.com",
        phone: "555-987-6543",
        lastVisitedDate: "2025-09-11",
        lastVisitedTime: "02:30 PM",
        totalPurchaseLifetime: 600.5,
        totalPurchaseThisMonth: 85,
        activeOrders: 1,
        completedOrders: 12,
        cancelledOrders: 0
      },
      {
        customerImage: "assets/img/user-3.jpg",
        customerName: "James Harris",
        city: "Rio de Janeiro",
        country: "Brazil",
        email: "james.h@email.com",
        phone: "555-876-5432",
        lastVisitedDate: "2025-09-10",
        lastVisitedTime: "10:15 AM",
        totalPurchaseLifetime: 950,
        totalPurchaseThisMonth: 110,
        activeOrders: 0,
        completedOrders: 16,
        cancelledOrders: 0
      },
      {
        customerImage: "assets/img/user-4.jpg",
        customerName: "Charlotte Clark",
        city: "Moscow",
        country: "Russia",
        email: "charlotte.c@email.com",
        phone: "555-765-4321",
        lastVisitedDate: "2025-09-09",
        lastVisitedTime: "04:50 PM",
        totalPurchaseLifetime: 1200.75,
        totalPurchaseThisMonth: 180.5,
        activeOrders: 3,
        completedOrders: 20,
        cancelledOrders: 1
      },
      {
        customerImage: "assets/img/user-5.jpg",
        customerName: "Ethan Lewis",
        city: "Cairo",
        country: "Egypt",
        email: "ethan.l@email.com",
        phone: "555-654-3210",
        lastVisitedDate: "2025-09-08",
        lastVisitedTime: "09:20 AM",
        totalPurchaseLifetime: 320,
        totalPurchaseThisMonth: 55,
        activeOrders: 0,
        completedOrders: 4,
        cancelledOrders: 0
      }
    ];
    this.dataSource = new MatTableDataSource(this.originalTabledata);
    this.displayedColumns = ["customerName", "contactInfo", "lastVisited", "totalPurchase", "status", "actions"];
    this.selectedCustomer = signal(null, ...ngDevMode ? [{ debugName: "selectedCustomer" }] : (
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
        case "customerName":
          return item.customerName;
        case "contactInfo":
          return item.email;
        case "lastVisited":
          return item.lastVisitedDate;
        case "totalPurchase":
          return item.totalPurchaseLifetime;
        case "status":
          return item.activeOrders;
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
  editCustomer(customer) {
    this.dialog.open(EditCustomerDialogComponent, {
      width: "990px",
      maxWidth: "990px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: __spreadValues({}, customer)
    });
  }
  banCustomer(customer) {
    console.log("Ban customer:", customer.customerName);
  }
  deleteCustomer(customer) {
    console.log("Delete customer:", customer.customerName);
  }
  // drawer open
  openCustomerDrawer(customer) {
    this.selectedCustomer.set(customer);
    this.viewcustomer.open();
  }
  closeCustomerDrawer() {
    this.viewcustomer.close();
    this.selectedCustomer.set(null);
  }
  static {
    this.\u0275fac = function CustomersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersComponent, selectors: [["app-customers"]], viewQuery: function CustomersComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(MatPaginator, 5)(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewcustomer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 116, vars: 6, consts: [["searchinput", ""], ["viewcustomer", ""], ["menu", "matMenu"], ["hasBackdrop", "false", 1, "bg-none", "p-0", "m-0"], [1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "col-auto", "mb-3", "mb-xl-0"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-md-6", "col-lg-3"], [1, "mb-3", "mb-lg-4"], [1, "col-auto"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-cyan"], [1, "material-icons-outlined"], [1, "col"], [1, "small", "text-secondary", "mb-1"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-yellow"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-red"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-green"], [1, "col-12", "col-md-12", "position-relative"], [1, "w-100"], [1, "col-auto", "mb-3"], [1, "avatar", "avatar-40", "text-theme", "rounded"], [1, "col", "mb-3"], [1, "text-secondary", "small"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3", "mb-3"], ["appearance", "outline", 1, "w-100", "inline-small"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "bg-none", "mb-3", "responsive-table", 3, "dataSource"], ["matColumnDef", "customerName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "py-2 hoverview", 4, "matCellDef"], ["matColumnDef", "contactInfo"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastVisited"], ["matColumnDef", "totalPurchase"], ["matColumnDef", "status"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of customers", 1, "bg-none", 3, "pageSizeOptions"], ["mode", "over", "position", "end", 2, "--mat-sidenav-container-elevation-shadow", "0px 5px 15px rgba(0, 0, 0, 0.15)", "z-index", "12"], [3, "editCustomer", "closeDrawer", "customer"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "py-2", "hoverview"], [1, "row", "gx-3"], [1, "avatar", "avatar-40", "rounded", "coverimg", 3, "click"], [1, "", 3, "src", "alt"], [1, "hoverview-icon", "bg-light-theme", "text-theme", "rounded", "circle", "avatar", "avatar-40", "position-absolute", "start-0", "top-0"], [1, "mb-0"], [1, "text-sm", "text-theme", 3, "click"], ["mat-cell", ""], ["mat-header-cell", ""], ["matTooltip", "Active", 1, "badge", "badge-light", "theme-blue", "d-inline-block", "me-1"], [1, "px-1"], ["matTooltip", "Completed", 1, "badge", "badge-light", "theme-green", "d-inline-block", "me-1"], ["matTooltip", "Cancelled", 1, "badge", "badge-light", "theme-red", "d-inline-block"], ["mat-icon-button", "", "aria-label", "Actions menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell"]], template: function CustomersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-drawer-container", 3)(1, "mat-drawer-content")(2, "div", 4)(3, "mat-card", 5)(4, "div", 6)(5, "div", 7)(6, "h3", 8);
        \u0275\u0275text(7, "Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 9);
        \u0275\u0275text(9, "Manage your customer & support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 10);
        \u0275\u0275element(11, "app-page-right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "mat-card", 14)(16, "mat-card-content")(17, "div", 6)(18, "div", 15)(19, "div", 16)(20, "mat-icon", 17);
        \u0275\u0275text(21, "shopping_cart");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 18)(23, "p", 19);
        \u0275\u0275text(24, "Total Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h3");
        \u0275\u0275text(26, "320");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(27, "div", 13)(28, "mat-card", 14)(29, "mat-card-content")(30, "div", 6)(31, "div", 15)(32, "div", 20)(33, "mat-icon", 17);
        \u0275\u0275text(34, "bar_chart");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 18)(36, "p", 19);
        \u0275\u0275text(37, "Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h3");
        \u0275\u0275text(39, "$ 50.0K");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(40, "div", 13)(41, "mat-card", 14)(42, "mat-card-content")(43, "div", 6)(44, "div", 15)(45, "div", 21)(46, "mat-icon", 17);
        \u0275\u0275text(47, "paid");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 18)(49, "p", 19);
        \u0275\u0275text(50, "Cost");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "h3");
        \u0275\u0275text(52, "$ 36.85K");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(53, "div", 13)(54, "mat-card", 14)(55, "mat-card-content")(56, "div", 6)(57, "div", 15)(58, "div", 22)(59, "mat-icon", 17);
        \u0275\u0275text(60, "trending_up");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 18)(62, "p", 19);
        \u0275\u0275text(63, "Profit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "h3");
        \u0275\u0275text(65, "$ 1.31K");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(66, "div", 12)(67, "div", 23)(68, "mat-card", 14)(69, "mat-card-header")(70, "div", 24)(71, "div", 6)(72, "div", 25)(73, "div", 26)(74, "mat-icon", 17);
        \u0275\u0275text(75, "group");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "div", 27)(77, "h3", 8);
        \u0275\u0275text(78, "Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "p", 28);
        \u0275\u0275text(80, "All in orders items");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 29)(82, "mat-form-field", 30)(83, "mat-label");
        \u0275\u0275text(84, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "mat-icon", 31);
        \u0275\u0275text(86, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "input", 32, 0);
        \u0275\u0275listener("keyup", function CustomersComponent_Template_input_keyup_87_listener($event) {
          return ctx.applyFilter($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(89, "table", 33);
        \u0275\u0275elementContainerStart(90, 34);
        \u0275\u0275template(91, CustomersComponent_th_91_Template, 2, 0, "th", 35)(92, CustomersComponent_td_92_Template, 14, 6, "td", 36);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(93, 37);
        \u0275\u0275template(94, CustomersComponent_th_94_Template, 2, 0, "th", 35)(95, CustomersComponent_td_95_Template, 5, 2, "td", 38);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(96, 39);
        \u0275\u0275template(97, CustomersComponent_th_97_Template, 2, 0, "th", 35)(98, CustomersComponent_td_98_Template, 5, 2, "td", 38);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(99, 40);
        \u0275\u0275template(100, CustomersComponent_th_100_Template, 2, 0, "th", 35)(101, CustomersComponent_td_101_Template, 7, 8, "td", 38);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(102, 41);
        \u0275\u0275template(103, CustomersComponent_th_103_Template, 2, 0, "th", 42)(104, CustomersComponent_td_104_Template, 10, 3, "td", 38);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(105, 43);
        \u0275\u0275template(106, CustomersComponent_th_106_Template, 2, 0, "th", 42)(107, CustomersComponent_td_107_Template, 21, 1, "td", 38);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(108, CustomersComponent_tr_108_Template, 1, 0, "tr", 44)(109, CustomersComponent_tr_109_Template, 1, 0, "tr", 45)(110, CustomersComponent_tr_110_Template, 3, 2, "tr", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "mat-card-content");
        \u0275\u0275element(112, "mat-paginator", 47);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(113, "mat-drawer", 48, 1)(115, "app-view-customer-drawer", 49);
        \u0275\u0275listener("editCustomer", function CustomersComponent_Template_app_view_customer_drawer_editCustomer_115_listener() {
          return ctx.editCustomer(ctx.selectedCustomer());
        })("closeDrawer", function CustomersComponent_Template_app_view_customer_drawer_closeDrawer_115_listener() {
          return ctx.closeCustomerDrawer();
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(89);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(3);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(5, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275property("customer", ctx.selectedCustomer());
      }
    }, dependencies: [CommonModule, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatButtonModule, MatIconButton, MatSidenavModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatDialogModule, FormsModule, MatTooltipModule, MatTooltip, MatListModule, MatInputModule, MatInput, MatSelectModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatPaginatorModule, MatPaginator, MatSortModule, MatSort, MatSortHeader, MatChipsModule, MatProgressBarModule, PageRightComponent, ViewCustomerDrawerComponent, DecimalPipe], styles: ["\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  position: unset !important;\n}\n.mat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 20;\n}\n/*# sourceMappingURL=customers.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomersComponent, [{
    type: Component,
    args: [{ selector: "app-customers", standalone: true, imports: [CommonModule, MatCardModule, MatIconModule, MatMenuModule, MatButtonModule, MatSidenavModule, MatFormFieldModule, MatDialogModule, FormsModule, MatTooltipModule, MatListModule, MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule, MatProgressBarModule, PageRightComponent, ViewCustomerDrawerComponent], template: `
        <mat-drawer-container class="bg-none p-0 m-0" hasBackdrop="false">
            <mat-drawer-content>
                <div class="container-fluid fade-in mb-3 mb-lg-4">
                    <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                        <div class="row gx-3 align-items-center">
                            <div class="col mb-3 mb-xl-0 py-1">
                                <h3 class="mb-1">Customers</h3>
                                <p class="small opacity-50">Manage your customer & support</p>
                            </div>

                            <div class="col-auto mb-3 mb-xl-0">
                                <app-page-right></app-page-right>
                            </div>
                        </div>
                    </mat-card>
                </div>

                <div class="container fade-in">
                    <!-- sales overview -->
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-12 col-md-6 col-lg-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-cyan">
                                                <mat-icon class="material-icons-outlined">shopping_cart</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <p class="small text-secondary mb-1">Total Sales</p>
                                            <h3>320</h3>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-yellow">
                                                <mat-icon class="material-icons-outlined">bar_chart</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <p class="small text-secondary mb-1">Revenue</p>
                                            <h3>$ 50.0K</h3>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-red">
                                                <mat-icon class="material-icons-outlined">paid</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <p class="small text-secondary mb-1">Cost</p>
                                            <h3>$ 36.85K</h3>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-green">
                                                <mat-icon class="material-icons-outlined">trending_up</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <p class="small text-secondary mb-1">Profit</p>
                                            <h3>$ 1.31K</h3>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                    </div>

                    <div class="row gx-3 gx-lg-4">
                        <!-- Orders -->
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
                                                <h3 class="mb-1">Customers</h3>
                                                <p class="text-secondary small">All in orders items</p>
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
                                    <ng-container matColumnDef="customerName">
                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Customer Info</th>
                                        <td mat-cell *matCellDef="let element" class="py-2 hoverview">
                                            <div class="row gx-3">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 rounded coverimg" (click)="openCustomerDrawer(element)">
                                                        <img [src]="element.customerImage" alt="{{ element.customerName }}" class="" />
                                                        <mat-icon class="hoverview-icon bg-light-theme text-theme rounded circle avatar avatar-40 position-absolute start-0 top-0">visibility</mat-icon>
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <h4 class="mb-0">{{ element.customerName }} <mat-icon class="text-sm text-theme" (click)="editCustomer(element)">edit</mat-icon></h4>
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
                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Visited</th>
                                        <td mat-cell *matCellDef="let element">
                                            <p class="mb-1">{{ element.lastVisitedDate }}</p>
                                            <p class="text-secondary small">{{ element.lastVisitedTime }}</p>
                                        </td>
                                    </ng-container>

                                    <ng-container matColumnDef="totalPurchase">
                                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Total Purchase</th>
                                        <td mat-cell *matCellDef="let element">
                                            <h4 class="mb-1">$ {{ element.totalPurchaseLifetime | number : "1.2-2" }}</h4>
                                            <p class="text-secondary small">This Month: $ {{ element.totalPurchaseThisMonth | number : "1.2-2" }}</p>
                                        </td>
                                    </ng-container>

                                    <ng-container matColumnDef="status">
                                        <th mat-header-cell *matHeaderCellDef>Status</th>
                                        <td mat-cell *matCellDef="let element">
                                            <div class="badge badge-light theme-blue d-inline-block me-1" matTooltip="Active">
                                                <h4 class="px-1">{{ element.activeOrders }}</h4>
                                            </div>
                                            <div class="badge badge-light theme-green d-inline-block me-1" matTooltip="Completed">
                                                <h4 class="px-1">{{ element.completedOrders }}</h4>
                                            </div>
                                            <div class="badge badge-light theme-red d-inline-block" matTooltip="Cancelled">
                                                <h4 class="px-1">{{ element.cancelledOrders }}</h4>
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
                                                <button mat-menu-item (click)="editCustomer(element)">
                                                    <mat-icon>edit</mat-icon>
                                                    <span>Edit</span>
                                                </button>
                                                <button mat-menu-item (click)="banCustomer(element)">
                                                    <mat-icon>block</mat-icon>
                                                    <span>Ban</span>
                                                </button>
                                                <button mat-menu-item (click)="deleteCustomer(element)">
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
                                    <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" aria-label="Select page of customers" class="bg-none"></mat-paginator>
                                </mat-card-content>
                            </mat-card>
                        </div>
                    </div>
                </div>
            </mat-drawer-content>
            <mat-drawer #viewcustomer mode="over" position="end" style="--mat-sidenav-container-elevation-shadow:0px 5px 15px rgba(0, 0, 0, 0.15);z-index:12">
                <app-view-customer-drawer [customer]="selectedCustomer()" (editCustomer)="editCustomer(selectedCustomer())" (closeDrawer)="closeCustomerDrawer()"></app-view-customer-drawer>
            </mat-drawer>
        </mat-drawer-container>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA], styles: ["/* angular:styles/component:css;3d1d77e296ed32bbcc4706a509d19ebde4ba1bf5f709e94855c3d2fc076a40e7;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/pages/app/customers/customers.component.ts */\n.mat-drawer-container {\n  position: unset !important;\n}\n.mat-drawer-container mat-drawer {\n  position: fixed;\n  z-index: 20;\n}\n/*# sourceMappingURL=customers.component.css.map */\n"] }]
  }], null, { viewcustomer: [{
    type: ViewChild,
    args: ["viewcustomer"]
  }], paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersComponent, { className: "CustomersComponent", filePath: "src/app/pages/app/customers/customers.component.ts", lineNumber: 282 });
})();
export {
  CustomersComponent
};
//# sourceMappingURL=customers.component-NRRLDBGU.js.map
