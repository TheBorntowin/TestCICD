import {
  PageRightComponent
} from "./chunk-BMFH3O7D.js";
import {
  Chart,
  registerables
} from "./chunk-PZSKZJEJ.js";
import {
  MatAutocompleteModule
} from "./chunk-SCEBMLYD.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-OANSMTPI.js";
import {
  MatDatepickerModule
} from "./chunk-RG7V5CFX.js";
import {
  provideNativeDateAdapter
} from "./chunk-IJRF7KWR.js";
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
  MatDialogClose,
  MatDialogContent,
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
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-WAVP7W2J.js";
import "./chunk-6LUZEZUF.js";
import "./chunk-O4BMA6W6.js";
import {
  register
} from "./chunk-S5VFQUTS.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-SP2SPZAY.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MWLO4FO4.js";
import {
  MatOption
} from "./chunk-D63GK34V.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
  MatChipsModule
} from "./chunk-5G2FMPWG.js";
import "./chunk-N5FEMAXL.js";
import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemTitle,
  MatListModule
} from "./chunk-ALLV6QEF.js";
import {
  MatDividerModule
} from "./chunk-CWBJY2AK.js";
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
  MatIconButton
} from "./chunk-ZLA4QS3A.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import {
  MatFormField,
  MatLabel,
  MatPrefix
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
import "./chunk-IRYVP2Q6.js";
import {
  CommonModule,
  MatIcon,
  MatIconModule,
  NgClass
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Inject,
  ViewChild,
  __spreadValues,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/ecommerce/orderdetails.component.ts
function CreateEditOrderModal_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 3)(1, "div", 9)(2, "div", 10)(3, "h4", 11);
    \u0275\u0275text(4, "Product");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "mat-form-field", 12)(7, "mat-label");
    \u0275\u0275text(8, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditOrderModal_Conditional_6_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.orderData.Product, $event) || (ctx_r1.orderData.Product = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 14)(11, "mat-form-field", 12)(12, "mat-label");
    \u0275\u0275text(13, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-select", 15);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditOrderModal_Conditional_6_Template_mat_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.orderData.Category, $event) || (ctx_r1.orderData.Category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "mat-option", 16);
    \u0275\u0275text(16, "Select Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-option", 17);
    \u0275\u0275text(18, "Accessories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 17);
    \u0275\u0275text(20, "Accessories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 18);
    \u0275\u0275text(22, "Clothing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-option", 19);
    \u0275\u0275text(24, "Extras");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 14)(26, "mat-form-field", 12)(27, "mat-label");
    \u0275\u0275text(28, "Sub Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditOrderModal_Conditional_6_Template_mat_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.orderData.SubCategory, $event) || (ctx_r1.orderData.SubCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "mat-option", 16);
    \u0275\u0275text(31, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-option", 21);
    \u0275\u0275text(33, "Men Shoes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-option", 22);
    \u0275\u0275text(35, "Watch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-option", 23);
    \u0275\u0275text(37, "Room Heater");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 14)(39, "mat-form-field", 12)(40, "mat-label");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditOrderModal_Conditional_6_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.orderData.Price, $event) || (ctx_r1.orderData.Price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 10)(44, "h4", 11);
    \u0275\u0275text(45, "Customer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 14)(47, "mat-form-field", 12)(48, "mat-label");
    \u0275\u0275text(49, "Orderby");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditOrderModal_Conditional_6_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.orderData.OrderBy, $event) || (ctx_r1.orderData.OrderBy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 14)(52, "mat-form-field", 12)(53, "mat-label");
    \u0275\u0275text(54, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditOrderModal_Conditional_6_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.orderData.Email, $event) || (ctx_r1.orderData.Email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 14)(57, "mat-form-field", 12)(58, "mat-label");
    \u0275\u0275text(59, "Delivered to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditOrderModal_Conditional_6_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.orderData.DeliverTo, $event) || (ctx_r1.orderData.DeliverTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 10)(62, "mat-form-field", 12)(63, "mat-label");
    \u0275\u0275text(64, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "textarea", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditOrderModal_Conditional_6_Template_textarea_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.orderData.Address, $event) || (ctx_r1.orderData.Address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 10)(67, "h4", 11);
    \u0275\u0275text(68, "Order Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 14)(70, "mat-form-field", 12)(71, "mat-label");
    \u0275\u0275text(72, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "mat-select", 29);
    \u0275\u0275twoWayListener("ngModelChange", function CreateEditOrderModal_Conditional_6_Template_mat_select_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.orderData.Status, $event) || (ctx_r1.orderData.Status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(74, "mat-option", 16);
    \u0275\u0275text(75, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "mat-option", 30);
    \u0275\u0275text(77, "Delivered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "mat-option", 31);
    \u0275\u0275text(79, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "mat-option", 32);
    \u0275\u0275text(81, "Processing");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.orderData.Product);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.orderData.Category);
    \u0275\u0275advance(15);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.orderData.SubCategory);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("Amount (", ctx_r1.orderData.Currency, ")");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.orderData.Price);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.orderData.OrderBy);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.orderData.Email);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.orderData.DeliverTo);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.orderData.Address);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.orderData.Status);
  }
}
var CreateEditOrderModal = class _CreateEditOrderModal {
  constructor(dialogRef, data, snackBar) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.snackBar = snackBar;
    this.orderData = data;
    if (!this.orderData.Status) {
      this.orderData.Status = "";
    }
  }
  updateOrder() {
    setTimeout(() => {
      this.openSnackBar("Order has been successfully updated.", "Dismiss");
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
  static {
    this.\u0275fac = function CreateEditOrderModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateEditOrderModal)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateEditOrderModal, selectors: [["app-createditorder"]], features: [\u0275\u0275ProvidersFeature([provideNativeDateAdapter()])], decls: 16, vars: 4, consts: [["mat-dialog-title", ""], [1, "text-secondary", "ps-2"], [1, "mat-typography"], [1, ""], [1, "col"], ["matButton", "filled", 3, "click"], [1, "material-icons-outlined"], [1, "col-auto"], ["matButton", "", "mat-dialog-close", "", 1, "theme-red"], [1, "row", "gx-3", "align-items-center"], [1, "col-12"], [1, "my-3"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "name", "expense", 3, "ngModelChange", "ngModel"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-4"], ["name", "category", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Accessories"], ["value", "Clothing"], ["value", "Extras"], ["name", "subcategory", 3, "ngModelChange", "ngModel"], ["value", "Men Shoes"], ["value", "Watch"], ["value", "Room Heater"], ["matInput", "", "name", "price", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "orderby", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "email", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "deliverto", 3, "ngModelChange", "ngModel"], ["matInput", "", "name", "address", 3, "ngModelChange", "ngModel"], ["name", "status", 3, "ngModelChange", "ngModel"], ["value", "Delivered"], ["value", "Cancelled"], ["value", "Processing"]], template: function CreateEditOrderModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3", 0);
        \u0275\u0275text(1);
        \u0275\u0275element(2, "br");
        \u0275\u0275elementStart(3, "small", 1);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "mat-dialog-content", 2);
        \u0275\u0275conditionalCreate(6, CreateEditOrderModal_Conditional_6_Template, 82, 10, "form", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-dialog-actions")(8, "div", 4)(9, "button", 5);
        \u0275\u0275listener("click", function CreateEditOrderModal_Template_button_click_9_listener() {
          return ctx.updateOrder();
        });
        \u0275\u0275elementStart(10, "mat-icon", 6);
        \u0275\u0275text(11, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Update");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 7)(14, "button", 8);
        \u0275\u0275text(15, "Cancel");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Order: ", ctx.orderData.Product, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("Order placed on: ", ctx.orderData.Date, " ", ctx.orderData.Time);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.orderData ? 6 : -1);
      }
    }, dependencies: [CommonModule, MatDividerModule, MatAutocompleteModule, MatOption, MatCardModule, MatFormFieldModule, MatFormField, MatLabel, MatSelectModule, MatSelect, MatInputModule, MatInput, MatSnackBarModule, MatDialogTitle, MatButtonModule, MatButton, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatIconModule, MatIcon, MatChipsModule, MatDatepickerModule, ReactiveFormsModule, MatDialogContent, MatDialogActions, MatDialogClose], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateEditOrderModal, [{
    type: Component,
    args: [{ selector: "app-createditorder", standalone: true, providers: [provideNativeDateAdapter()], imports: [CommonModule, MatDividerModule, MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatSnackBarModule, MatDialogTitle, MatButtonModule, FormsModule, MatIconModule, MatChipsModule, MatDatepickerModule, ReactiveFormsModule, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule], template: `
        <h3 mat-dialog-title>
            Order: {{ orderData.Product }} <br />
            <small class="text-secondary ps-2">Order placed on: {{ orderData.Date }} {{ orderData.Time }}</small>
        </h3>
        <mat-dialog-content class="mat-typography">
            @if (orderData) {
            <form class="">
                <div class="row gx-3 align-items-center">
                    <div class="col-12">
                        <h4 class="my-3">Product</h4>
                    </div>
                    <div class="col-12">
                        <mat-form-field appearance="outline" class="w-100">
                            <mat-label>Product Name</mat-label>
                            <input matInput [(ngModel)]="orderData.Product" name="expense" />
                        </mat-form-field>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <mat-form-field appearance="outline" class="w-100">
                            <mat-label>Category</mat-label>
                            <mat-select [(ngModel)]="orderData.Category" name="category">
                                <mat-option value="">Select Category</mat-option>
                                <mat-option value="Accessories">Accessories</mat-option>
                                <mat-option value="Accessories">Accessories</mat-option>
                                <mat-option value="Clothing">Clothing</mat-option>
                                <mat-option value="Extras">Extras</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <mat-form-field appearance="outline" class="w-100">
                            <mat-label>Sub Category</mat-label>
                            <mat-select [(ngModel)]="orderData.SubCategory" name="subcategory">
                                <mat-option value="">Select</mat-option>
                                <mat-option value="Men Shoes">Men Shoes</mat-option>
                                <mat-option value="Watch">Watch</mat-option>
                                <mat-option value="Room Heater">Room Heater</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <mat-form-field appearance="outline" class="w-100">
                            <mat-label>Amount ({{ orderData.Currency }})</mat-label>
                            <input matInput [(ngModel)]="orderData.Price" name="price" />
                        </mat-form-field>
                    </div>
                    <div class="col-12">
                        <h4 class="my-3">Customer</h4>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <mat-form-field appearance="outline" class="w-100">
                            <mat-label>Orderby</mat-label>
                            <input matInput [(ngModel)]="orderData.OrderBy" name="orderby" />
                        </mat-form-field>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <mat-form-field appearance="outline" class="w-100">
                            <mat-label>Email</mat-label>
                            <input matInput [(ngModel)]="orderData.Email" name="email" />
                        </mat-form-field>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <mat-form-field appearance="outline" class="w-100">
                            <mat-label>Delivered to</mat-label>
                            <input matInput [(ngModel)]="orderData.DeliverTo" name="deliverto" />
                        </mat-form-field>
                    </div>
                    <div class="col-12">
                        <mat-form-field appearance="outline" class="w-100">
                            <mat-label>Address</mat-label>
                            <textarea matInput [(ngModel)]="orderData.Address" name="address"></textarea>
                        </mat-form-field>
                    </div>

                    <div class="col-12">
                        <h4 class="my-3">Order Status</h4>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4">
                        <mat-form-field appearance="outline" class="w-100">
                            <mat-label>Status</mat-label>
                            <mat-select [(ngModel)]="orderData.Status" name="status">
                                <mat-option value="">Select</mat-option>
                                <mat-option value="Delivered">Delivered</mat-option>
                                <mat-option value="Cancelled">Cancelled</mat-option>
                                <mat-option value="Processing">Processing</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
            </form>
            }
        </mat-dialog-content>
        <mat-dialog-actions>
            <div class="col">
                <button matButton="filled" (click)="updateOrder()"><mat-icon class="material-icons-outlined">event</mat-icon> Update</button>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateEditOrderModal, { className: "CreateEditOrderModal", filePath: "src/app/pages/app/ecommerce/orderdetails.component.ts", lineNumber: 130 });
})();

// src/app/components/charts/polararea-chartjs-180.component.ts
var _c0 = ["chartCanvas"];
Chart.register(...registerables);
var PolarAreaChartjs180Component = class _PolarAreaChartjs180Component {
  ngAfterViewInit() {
    this.polarArea180chart();
  }
  /* chart  */
  polarArea180chart() {
    const areachartpolarArea180 = this.chartCanvas.nativeElement;
    const ctxpolarArea180 = areachartpolarArea180.getContext("2d");
    if (ctxpolarArea180) {
      this.mypolarArea180Chart = new Chart(areachartpolarArea180, {
        type: "polarArea",
        data: {
          labels: ["Food", "Transport", "Children", "Home", "Other"],
          datasets: [
            {
              label: "Expense categories",
              data: [40, 10, 15, 25, 10],
              backgroundColor: ["rgba(234, 234, 0, 0.65)", "rgb(8, 160, 70, 0.55)", "rgb(200, 0, 54, 0.60)", "rgba(52, 61, 255, 0.65)", "rgb(0, 73, 232, 0.40)"],
              borderWidth: 0
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
              position: "top"
            },
            title: {
              display: false,
              text: ""
            }
          }
        }
      });
    }
  }
  static {
    this.\u0275fac = function PolarAreaChartjs180Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PolarAreaChartjs180Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PolarAreaChartjs180Component, selectors: [["app-polararea-chartjs-180"]], viewQuery: function PolarAreaChartjs180Component_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvas = _t.first);
      }
    }, features: [\u0275\u0275ProvidersFeature([])], decls: 2, vars: 0, consts: [["chartCanvas", ""]], template: function PolarAreaChartjs180Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", null, 0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolarAreaChartjs180Component, [{
    type: Component,
    args: [{
      selector: "app-polararea-chartjs-180",
      standalone: true,
      imports: [],
      providers: [],
      template: `<canvas #chartCanvas></canvas>`
    }]
  }], null, { chartCanvas: [{
    type: ViewChild,
    args: ["chartCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PolarAreaChartjs180Component, { className: "PolarAreaChartjs180Component", filePath: "src/app/components/charts/polararea-chartjs-180.component.ts", lineNumber: 13 });
})();

// src/app/pages/app/ecommerce/orders.component.ts
var _c02 = () => [5, 10, 25, 100];
var _c1 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-red": a2 });
function OrdersComponent_th_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 85);
    \u0275\u0275text(1, "Product");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 86);
    \u0275\u0275listener("click", function OrdersComponent_td_90_Template_td_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDialog(item_r2));
    });
    \u0275\u0275elementStart(1, "p", 87);
    \u0275\u0275text(2, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65)(4, "div", 13)(5, "div", 88);
    \u0275\u0275element(6, "img", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16)(8, "h4", 90);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "mat-icon", 91);
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("alt", \u0275\u0275interpolate(item_r2.Product))("src", item_r2.productImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r2.Product, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r2.SKU);
  }
}
function OrdersComponent_th_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 85);
    \u0275\u0275text(1, "Category");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 92)(1, "p", 87);
    \u0275\u0275text(2, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r4.Category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.SubCategory);
  }
}
function OrdersComponent_th_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 85);
    \u0275\u0275text(1, "Delivery");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 92)(1, "p", 87);
    \u0275\u0275text(2, "Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r5.Address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.DeliverTo);
  }
}
function OrdersComponent_th_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 93);
    \u0275\u0275text(1, "Price");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 92)(1, "p", 87);
    \u0275\u0275text(2, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h4", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r6.Price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.Currency);
  }
}
function OrdersComponent_th_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 85);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 92)(1, "p", 87);
    \u0275\u0275text(2, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "span", 94);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c1, item_r7.Status === "Delivered", item_r7.Status === "Processing" || item_r7.Status === "Waiting", item_r7.Status === "Cancelled"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.Status, " ");
  }
}
function OrdersComponent_th_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 85);
    \u0275\u0275text(1, "Payment");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 92)(1, "p", 87);
    \u0275\u0275text(2, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "span", 95);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c1, item_r8.Payment === "Paid", item_r8.Payment === "Waiting", item_r8.Payment === "Cancelled"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r8.Payment, " ");
  }
}
function OrdersComponent_th_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 96);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 92)(1, "button", 97);
    \u0275\u0275listener("click", function OrdersComponent_td_108_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "mat-icon", 15);
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 1)(6, "button", 98);
    \u0275\u0275listener("click", function OrdersComponent_td_108_Template_button_click_6_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDialog(item_r10));
    });
    \u0275\u0275elementStart(7, "mat-icon", 15);
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 98);
    \u0275\u0275listener("click", function OrdersComponent_td_108_Template_button_click_11_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteOrder(item_r10));
    });
    \u0275\u0275elementStart(12, "mat-icon", 15);
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const actionsMenu_r11 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionsMenu_r11);
  }
}
function OrdersComponent_tr_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 99);
  }
}
function OrdersComponent_tr_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 100);
  }
}
register();
var OrdersComponent = class _OrdersComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.originalTabledata = [
      {
        Product: "Shoes",
        Category: "Accessories",
        Price: "123.00",
        OrderBy: "Anant Rai",
        Email: "anant@gmailtestid.com",
        Date: "20-1-2022",
        Time: "9:00 am",
        Status: "Delivered",
        DeliverTo: "John Johnson",
        Address: "2356, Street-5, New York 4586, US",
        Location: "Lat: 5.678167, Long: 12.078613 This can be a map also",
        Payment: "Paid",
        productImage: "assets/img/product1.jpg",
        SKU: "SKUID: SH02521",
        SubCategory: "Men Shoes",
        Currency: "USD"
      },
      {
        Product: "Timex 0214 Watch",
        Category: "Accessories",
        Price: "154.00",
        OrderBy: "Jenny Jackson",
        Email: "jenny@gmailtestid.com",
        Date: "20-1-2022",
        Time: "10:05 am",
        Status: "Processing",
        DeliverTo: "Mirae Jackson",
        Address: "2356, Street-5, New York 4586, US",
        Location: "Lat: 5.678167, Long: 12.078613This can be a map also",
        Payment: "Paid",
        productImage: "assets/img/product2.jpg",
        SKU: "SKUID: SH02631",
        SubCategory: "Watch",
        Currency: "USD"
      },
      {
        Product: "FOGG",
        Category: "Extras",
        Price: "100.00",
        OrderBy: "Millie Danial",
        Email: "millie@gmailtestid.com",
        Date: "20-1-2022",
        Time: "9:00 am",
        Status: "Delivered",
        DeliverTo: "Mark Danial",
        Address: "2356, Street-5, New York 4586, US",
        Location: "Lat: 5.678167, Long: 12.078613This can be a map also",
        Payment: "Waiting",
        productImage: "assets/img/product3.jpg",
        SKU: "SKUID: SH03560",
        SubCategory: "Men Deo",
        Currency: "USD"
      },
      {
        Product: "Room Heater Hewells",
        Category: "Appliances",
        Price: "658.00",
        OrderBy: "Nick Vedhaa",
        Email: "vedhaa@gmailtestid.com",
        Date: "20-1-2022",
        Time: "9:00 am",
        Status: "Cancelled",
        DeliverTo: "Micky Nick",
        Address: "2356, Street-5, New York 4586, US",
        Location: "Lat: 5.678167, Long: 12.078613This can be a map also",
        Payment: "Cancelled",
        productImage: "assets/img/product4.jpg",
        SKU: "SKUID: RH03674",
        SubCategory: "Room Heater",
        Currency: "USD"
      },
      {
        Product: "Shoes",
        Category: "Accessories",
        Price: "685.00",
        OrderBy: "John Johnson",
        Email: "john@gmailtestid.com",
        Date: "20-1-2022",
        Time: "9:00 am",
        Status: "Processing",
        DeliverTo: "John Johnson",
        Address: "2356, Street-5, New York 4586, US",
        Location: "Lat: 5.678167, Long: 12.078613This can be a map also",
        Payment: "Processing",
        productImage: "assets/img/product5.jpg",
        SKU: "SKUID: SH06581",
        SubCategory: "Men Shoes",
        Currency: "USD"
      },
      {
        Product: "Shoes",
        Category: "Accessories",
        Price: "685.00",
        OrderBy: "John Johnson",
        Email: "john@gmailtestid.com",
        Date: "20-1-2022",
        Time: "9:00 am",
        Status: "Delivered",
        DeliverTo: "John Johnson",
        Address: "2356, Street-5, New York 4586, US",
        Location: "Lat: 5.678167, Long: 12.078613This can be a map also",
        Payment: "Processing",
        productImage: "assets/img/product1.jpg",
        SKU: "SKUID: SH06581",
        SubCategory: "Men Shoes",
        Currency: "USD"
      },
      {
        Product: "Shoes",
        Category: "Accessories",
        Price: "123.00",
        OrderBy: "John Johnson",
        Email: "john@gmailtestid.com",
        Date: "20-1-2022",
        Time: "9:00 am",
        Status: "Delivered",
        DeliverTo: "John Johnson",
        Address: "2356, Street-5, New York 4586, US",
        Location: "Lat: 5.678167, Long: 12.078613This can be a map also",
        Payment: "Paid",
        productImage: "assets/img/product2.jpg",
        SKU: "SKUID: SH02631",
        SubCategory: "Men Shoes",
        Currency: "USD"
      },
      {
        Product: "Timex 0214 Watch",
        Category: "Accessories",
        Price: "154.00",
        OrderBy: "Mirae Jackson",
        Email: "mirae@gmailtestid.com",
        Date: "20-1-2022",
        Time: "10:05 am",
        Status: "Delivered",
        DeliverTo: "Mirae Jackson",
        Address: "2356, Street-5, New York 4586, US",
        Location: "Lat: 5.678167, Long: 12.078613This can be a map also",
        Payment: "Paid",
        productImage: "assets/img/product3.jpg",
        SKU: "SKUID: SH02521",
        SubCategory: "Watch",
        Currency: "USD"
      },
      {
        Product: "FOGG",
        Category: "Extras",
        Price: "100.00",
        OrderBy: "Millie Danial",
        Email: "millie@gmailtestid.com",
        Date: "20-1-2022",
        Time: "9:00 am",
        Status: "Delivered",
        DeliverTo: "Mark Danial",
        Address: "2356, Street-5, New York 4586, US",
        Location: "Lat: 5.678167, Long: 12.078613This can be a map also",
        Payment: "Waiting",
        productImage: "assets/img/product4.jpg",
        SKU: "SKUID: SH03560",
        SubCategory: "Men Deo",
        Currency: "USD"
      },
      {
        Product: "Room Heater Hewells",
        Category: "Appliances",
        Price: "658.00",
        OrderBy: "Nick Vedhaa",
        Email: "vedhaa@gmailtestid.com",
        Date: "20-1-2022",
        Time: "9:00 am",
        Status: "Delivered",
        DeliverTo: "Micky Nick",
        Address: "2356, Street-5, New York 4586, US",
        Location: "Lat: 5.678167, Long: 12.078613This can be a map also",
        Payment: "Cancelled",
        productImage: "assets/img/product5.jpg",
        SKU: "SKUID: RH03674",
        SubCategory: "Room Heater",
        Currency: "USD"
      }
    ];
    this.dataSource = new MatTableDataSource(this.originalTabledata);
    this.displayedColumns = ["product", "category", "deliverTo", "price", "status", "payment", "actions"];
    this.selectedItem = null;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, header) => {
      switch (header) {
        case "product":
          return item.Product;
        case "category":
          return item.Category;
        case "deliverTo":
          return item.DeliverTo;
        case "price":
          return parseFloat(item.Price);
        case "status":
          return item.Status;
        case "payment":
          return item.Payment;
        default:
          return "";
      }
    };
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = Object.values(data).join(" ").toLowerCase();
      return dataStr.indexOf(filter) !== -1;
    };
    const map = new jsVectorMap({
      selector: "#jsvectormap",
      regionStyle: {
        initial: {
          fill: "rgba(0, 73, 232, 0.15)",
          stroke: "rgba(0, 73, 232, 0.4)",
          strokeWidth: 1
        }
      },
      visualizeData: {
        scale: ["#f3faff", "#0049e8"],
        values: {
          AF: 16.63,
          AL: 11.58,
          DZ: 158.97,
          AO: 85.81,
          AG: 1.1,
          AR: 351.02,
          AM: 8.83,
          AU: 1219.72,
          AT: 366.26,
          AZ: 52.17,
          BS: 7.54,
          BH: 21.73,
          BD: 105.4,
          BB: 3.96,
          BY: 52.89,
          BE: 461.33,
          BZ: 1.43,
          BJ: 6.49,
          BT: 1.4,
          BO: 19.18,
          BA: 16.2,
          BW: 12.5,
          BR: 2023.53,
          BN: 11.96,
          BG: 44.84,
          BF: 8.67,
          BI: 1.47,
          KH: 11.36,
          CM: 21.88,
          CA: 1563.66,
          CV: 1.57,
          CF: 2.11,
          TD: 7.59,
          CL: 199.18,
          CN: 5745.13,
          CO: 283.11,
          KM: 0.56,
          CD: 12.6,
          CG: 11.88,
          CR: 35.02,
          CI: 22.38,
          HR: 59.92,
          CY: 22.75,
          CZ: 195.23,
          DK: 304.56,
          DJ: 1.14,
          DM: 0.38,
          DO: 50.87,
          EC: 61.49,
          EG: 216.83,
          SV: 21.8,
          GQ: 14.55,
          ER: 2.25,
          EE: 19.22,
          ET: 30.94,
          FJ: 3.15,
          FI: 231.98,
          FR: 2555.44,
          GA: 12.56,
          GM: 1.04,
          GE: 11.23,
          DE: 3305.9,
          GH: 18.06,
          GR: 305.01,
          GD: 0.65,
          GT: 40.77,
          GN: 4.34,
          GW: 0.83,
          GY: 2.2,
          HT: 6.5,
          HN: 15.34,
          HK: 226.49,
          HU: 132.28,
          IS: 12.77,
          IN: 1430.02,
          ID: 695.06,
          IR: 337.9,
          IQ: 84.14,
          IE: 204.14,
          IL: 201.25,
          IT: 2036.69,
          JM: 13.74,
          JP: 5390.9,
          JO: 27.13,
          KZ: 129.76,
          KE: 32.42,
          KI: 0.15,
          KR: 986.26,
          KW: 117.32,
          KG: 4.44,
          LA: 6.34,
          LV: 23.39,
          LB: 39.15,
          LS: 1.8,
          LR: 0.98,
          LY: 77.91,
          LT: 35.73,
          LU: 52.43,
          MK: 9.58,
          MG: 8.33,
          MW: 5.04,
          MY: 218.95,
          MV: 1.43,
          ML: 9.08,
          MT: 7.8,
          MR: 3.49,
          MU: 9.43,
          MX: 1004.04,
          MD: 5.36,
          MN: 5.81,
          ME: 3.88,
          MA: 91.7,
          MZ: 10.21,
          MM: 35.65,
          NA: 11.45,
          NP: 15.11,
          NL: 770.31,
          NZ: 138,
          NI: 6.38,
          NE: 5.6,
          NG: 206.66,
          NO: 413.51,
          OM: 53.78,
          PK: 174.79,
          PA: 27.2,
          PG: 8.81,
          PY: 17.17,
          PE: 153.55,
          PH: 189.06,
          PL: 438.88,
          PT: 223.7,
          QA: 126.52,
          RO: 158.39,
          RU: 1476.91,
          RW: 5.69,
          WS: 0.55,
          ST: 0.19,
          SA: 434.44,
          SN: 12.66,
          RS: 38.92,
          SC: 0.92,
          SL: 1.9,
          SG: 217.38,
          SK: 86.26,
          SI: 46.44,
          SB: 0.67,
          ZA: 354.41,
          ES: 1374.78,
          LK: 48.24,
          KN: 0.56,
          LC: 1,
          VC: 0.58,
          SD: 65.93,
          SR: 3.3,
          SZ: 3.17,
          SE: 444.59,
          CH: 422.44,
          SY: 59.63,
          TW: 426.98,
          TJ: 5.58,
          TZ: 22.43,
          TH: 312.61,
          TL: 0.62,
          TG: 3.07,
          TO: 0.3,
          TT: 21.2,
          TN: 43.86,
          TR: 729.05,
          TM: 0,
          UG: 17.12,
          UA: 136.56,
          AE: 239.65,
          GB: 2258.57,
          US: 1462.18,
          UY: 40.71,
          UZ: 37.72,
          VU: 0.72,
          VE: 285.21,
          VN: 101.99,
          YE: 30.02,
          ZM: 15.69,
          ZW: 5.57
        }
      },
      map: "world"
    });
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteOrder(order) {
  }
  saveChanges() {
    if (this.selectedItem) {
      const index = this.originalTabledata.findIndex((i) => i === this.selectedItem);
      if (index !== -1) {
        const originalItem = this.originalTabledata[index];
        originalItem.Product = this.selectedItem.Product;
        originalItem.Category = this.selectedItem.Category;
        originalItem.Status = this.selectedItem.Status;
      }
      this.selectedItem = null;
      this.dataSource.data = [...this.originalTabledata];
    }
  }
  editOrder(order) {
    this.selectedItem = __spreadValues({}, order);
  }
  openDialog(order) {
    this.selectedItem = __spreadValues({}, order);
    this.dialog.open(CreateEditOrderModal, {
      width: "990px",
      maxWidth: "990px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: this.selectedItem
    });
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrdersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], viewQuery: function OrdersComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5)(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 498, vars: 5, consts: [["searchinput", ""], ["actionsMenu", "matMenu"], [1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "col-auto", "mb-3", "mb-xl-0"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-md-6", "col-lg-3"], [1, "mb-3", "mb-lg-4"], [1, "col-auto"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-cyan"], [1, "material-icons-outlined"], [1, "col"], [1, "small", "text-secondary", "mb-1"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-yellow"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-red"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-green"], [1, "col-12", "col-md-12", "position-relative"], [1, "w-100"], [1, "col-auto", "mb-3"], [1, "avatar", "avatar-40", "text-theme", "rounded"], [1, "col", "mb-3"], [1, "text-secondary", "small"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3", "mb-3"], ["appearance", "outline", 1, "w-100", "inline-small"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "bg-none", "mb-3", "responsive-table", 3, "dataSource"], ["matColumnDef", "product"], ["mat-header-cell", "", "mat-sort-header", "", "class", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "py-2", 3, "click", 4, "matCellDef"], ["matColumnDef", "category"], ["mat-cell", "", "class", "", 4, "matCellDef"], ["matColumnDef", "deliverTo"], ["matColumnDef", "price"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "status"], ["mat-cell", "", "class", " ", 4, "matCellDef"], ["matColumnDef", "payment"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of orders", 1, "bg-none", 3, "pageSizeOptions"], [1, "text-secondary", "mb-3", "mb-lg-4"], [1, "mb-3", "mb-lg-4", "w-100"], [1, "row", "gx-3", "align-items-center", "mb-3"], [1, "avatar", "avatar-40", "bg-light-theme", "text-theme", "rounded"], [1, "small", "text-secondary"], ["matListItemIcon", "", 1, "avatar", "avatar-60", "rounded", "coverimg"], ["src", "assets/img/product6.jpg", "alt", ""], ["matListItemTitle", ""], ["matListItemLine", "", 1, "fw-bold"], [1, "text-secondary", "fw-normal"], ["matListItemLine", ""], [1, "material-icons-outlined", "text-sm", "text-theme", "theme-yellow"], [1, "text-secondary"], ["src", "assets/img/product3.jpg", "alt", ""], ["src", "assets/img/product1.jpg", "alt", ""], [1, "my-3", "text-center"], [1, "avatar", "avatar-200", "mx-auto"], [1, "row", "gx-3"], [1, "col-12", "mb-3"], [1, "avatar", "avatar-40", "bg-light-theme", "text-theme", "rounded", "theme-yellow"], [1, "col", "text-end"], [1, "avatar", "avatar-40", "bg-light-theme", "text-theme", "rounded", "theme-green"], [1, "avatar", "avatar-40", "bg-light-theme", "text-theme", "rounded", "theme-red"], [1, "col-12", "mb-0"], [1, "avatar", "avatar-40", "rounded", "bg-light-theme", "text-theme", "theme-blue"], ["src", "assets/img/user-1.jpg", "alt", "", 1, "w-100"], ["src", "assets/img/user-2.jpg", "alt", "", 1, "w-100"], ["src", "assets/img/user-3.jpg", "alt", "", 1, "w-100"], ["src", "assets/img/user-4.jpg", "alt", "", 1, "w-100"], ["src", "assets/img/user-5.jpg", "alt", "", 1, "w-100"], ["id", "jsvectormap", 1, "w-100", "height-180"], ["matListItemIcon", "", 1, "avatar", "avatar-40", "rounded", "coverimg"], ["src", "assets/img/english.png", "alt", "", 1, "w-100"], ["src", "assets/img/france.png", "alt", "", 1, "w-100"], ["src", "assets/img/german.png", "alt", "", 1, "w-100"], ["matListItemIcon", "", 1, "avatar", "avatar-40", "rounded", "bg-light-theme", "theme-blue"], [1, "text-theme"], ["mat-header-cell", "", "mat-sort-header", "", 1, ""], ["mat-cell", "", 1, "py-2", 3, "click"], [1, "mat-mobile-label"], [1, "avatar", "avatar-40", "rounded"], [1, "", 3, "src", "alt"], [1, "mb-0"], [1, "material-icons-outlined", "text-sm", "text-theme"], ["mat-cell", "", 1, ""], ["mat-header-cell", "", "mat-sort-header", ""], [1, "badge", "badge-light", 3, "ngClass"], [1, "badge", 3, "ngClass"], ["mat-header-cell", ""], ["matIconButton", "", "aria-label", "Actions", 3, "click", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "mat-card", 3)(2, "div", 4)(3, "div", 5)(4, "h3", 6);
        \u0275\u0275text(5, "Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 7);
        \u0275\u0275text(7, "Monitor your sales activity");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8);
        \u0275\u0275element(9, "app-page-right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "mat-card", 12)(14, "mat-card-content")(15, "div", 4)(16, "div", 13)(17, "div", 14)(18, "mat-icon", 15);
        \u0275\u0275text(19, "assignment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 16)(21, "p", 17);
        \u0275\u0275text(22, "Processed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h3");
        \u0275\u0275text(24, "135");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(25, "div", 11)(26, "mat-card", 12)(27, "mat-card-content")(28, "div", 4)(29, "div", 13)(30, "div", 18)(31, "mat-icon", 15);
        \u0275\u0275text(32, "add_shopping_cart");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 16)(34, "p", 17);
        \u0275\u0275text(35, "Booked");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h3");
        \u0275\u0275text(37, "523");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(38, "div", 11)(39, "mat-card", 12)(40, "mat-card-content")(41, "div", 4)(42, "div", 13)(43, "div", 19)(44, "mat-icon", 15);
        \u0275\u0275text(45, "remove_shopping_cart");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 16)(47, "p", 17);
        \u0275\u0275text(48, "Rejected");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h3");
        \u0275\u0275text(50, "13");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(51, "div", 11)(52, "mat-card", 12)(53, "mat-card-content")(54, "div", 4)(55, "div", 13)(56, "div", 20)(57, "mat-icon", 15);
        \u0275\u0275text(58, "location_on");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "div", 16)(60, "p", 17);
        \u0275\u0275text(61, "Delivered");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "h3");
        \u0275\u0275text(63, "6521");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(64, "div", 10)(65, "div", 21)(66, "mat-card", 12)(67, "mat-card-header")(68, "div", 22)(69, "div", 4)(70, "div", 23)(71, "div", 24)(72, "mat-icon", 15);
        \u0275\u0275text(73, "storefront");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "div", 25)(75, "h3", 6);
        \u0275\u0275text(76, "Orders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p", 26);
        \u0275\u0275text(78, "All in orders items");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 27)(80, "mat-form-field", 28)(81, "mat-label");
        \u0275\u0275text(82, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "mat-icon", 29);
        \u0275\u0275text(84, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "input", 30, 0);
        \u0275\u0275listener("keyup", function OrdersComponent_Template_input_keyup_85_listener($event) {
          return ctx.applyFilter($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(87, "table", 31);
        \u0275\u0275elementContainerStart(88, 32);
        \u0275\u0275template(89, OrdersComponent_th_89_Template, 2, 0, "th", 33)(90, OrdersComponent_td_90_Template, 14, 5, "td", 34);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(91, 35);
        \u0275\u0275template(92, OrdersComponent_th_92_Template, 2, 0, "th", 33)(93, OrdersComponent_td_93_Template, 8, 2, "td", 36);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(94, 37);
        \u0275\u0275template(95, OrdersComponent_th_95_Template, 2, 0, "th", 33)(96, OrdersComponent_td_96_Template, 8, 2, "td", 36);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(97, 38);
        \u0275\u0275template(98, OrdersComponent_th_98_Template, 2, 0, "th", 39)(99, OrdersComponent_td_99_Template, 8, 2, "td", 36);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(100, 40);
        \u0275\u0275template(101, OrdersComponent_th_101_Template, 2, 0, "th", 33)(102, OrdersComponent_td_102_Template, 6, 6, "td", 41);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(103, 42);
        \u0275\u0275template(104, OrdersComponent_th_104_Template, 2, 0, "th", 33)(105, OrdersComponent_td_105_Template, 6, 6, "td", 36);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(106, 43);
        \u0275\u0275template(107, OrdersComponent_th_107_Template, 2, 0, "th", 44)(108, OrdersComponent_td_108_Template, 16, 1, "td", 36);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(109, OrdersComponent_tr_109_Template, 1, 0, "tr", 45)(110, OrdersComponent_tr_110_Template, 1, 0, "tr", 46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "mat-card-content");
        \u0275\u0275element(112, "mat-paginator", 47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(113, "h3", 6);
        \u0275\u0275text(114, "Sales Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "p", 48);
        \u0275\u0275text(116, "Create future forward with detailed data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 10)(118, "div", 11)(119, "mat-card", 12)(120, "mat-card-content")(121, "div", 4)(122, "div", 13)(123, "div", 14)(124, "mat-icon", 15);
        \u0275\u0275text(125, "shopping_cart");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "div", 16)(127, "p", 17);
        \u0275\u0275text(128, "Total Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "h3");
        \u0275\u0275text(130, "320");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(131, "div", 11)(132, "mat-card", 12)(133, "mat-card-content")(134, "div", 4)(135, "div", 13)(136, "div", 18)(137, "mat-icon", 15);
        \u0275\u0275text(138, "bar_chart");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "div", 16)(140, "p", 17);
        \u0275\u0275text(141, "Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "h3");
        \u0275\u0275text(143, "$ 50.0K");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(144, "div", 11)(145, "mat-card", 12)(146, "mat-card-content")(147, "div", 4)(148, "div", 13)(149, "div", 19)(150, "mat-icon", 15);
        \u0275\u0275text(151, "paid");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(152, "div", 16)(153, "p", 17);
        \u0275\u0275text(154, "Cost");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "h3");
        \u0275\u0275text(156, "$ 36.85K");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(157, "div", 11)(158, "mat-card", 12)(159, "mat-card-content")(160, "div", 4)(161, "div", 13)(162, "div", 20)(163, "mat-icon", 15);
        \u0275\u0275text(164, "trending_up");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(165, "div", 16)(166, "p", 17);
        \u0275\u0275text(167, "Profit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "h3");
        \u0275\u0275text(169, "$ 1.31K");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(170, "div", 10)(171, "div", 11)(172, "mat-card", 49)(173, "mat-card-header")(174, "div", 22)(175, "div", 50)(176, "div", 13)(177, "div", 51)(178, "mat-icon", 15);
        \u0275\u0275text(179, "local_mall");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(180, "div", 16)(181, "h3", 6);
        \u0275\u0275text(182, "Top Selling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "p", 52);
        \u0275\u0275text(184, "Get stock in");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(185, "mat-list")(186, "mat-list-item")(187, "div", 53);
        \u0275\u0275element(188, "img", 54);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "span", 55);
        \u0275\u0275text(190, "Apparels that shine");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "span", 56);
        \u0275\u0275text(192, "$ 80.00 ");
        \u0275\u0275elementStart(193, "s", 57);
        \u0275\u0275text(194, "$ 120.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(195, "span", 58)(196, "mat-icon", 59);
        \u0275\u0275text(197, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "mat-icon", 59);
        \u0275\u0275text(199, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "mat-icon", 59);
        \u0275\u0275text(201, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "mat-icon", 59);
        \u0275\u0275text(203, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "mat-icon", 59);
        \u0275\u0275text(205, "star_half");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "span", 60);
        \u0275\u0275text(207, " 189 ratings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(208, "mat-list-item")(209, "div", 53);
        \u0275\u0275element(210, "img", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "span", 55);
        \u0275\u0275text(212, "Window Curtains");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "span", 56);
        \u0275\u0275text(214, "$ 135.00 ");
        \u0275\u0275elementStart(215, "s", 57);
        \u0275\u0275text(216, "$ 144.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(217, "span", 58)(218, "mat-icon", 59);
        \u0275\u0275text(219, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "mat-icon", 59);
        \u0275\u0275text(221, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "mat-icon", 59);
        \u0275\u0275text(223, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "mat-icon", 59);
        \u0275\u0275text(225, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "mat-icon", 59);
        \u0275\u0275text(227, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "span", 60);
        \u0275\u0275text(229, " 35 ratings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(230, "mat-list-item")(231, "div", 53);
        \u0275\u0275element(232, "img", 62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(233, "span", 55);
        \u0275\u0275text(234, "Mosaic Textured Bedsheets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(235, "span", 56);
        \u0275\u0275text(236, "$ 152.00 ");
        \u0275\u0275elementStart(237, "s", 57);
        \u0275\u0275text(238, "$180.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(239, "span", 58)(240, "mat-icon", 59);
        \u0275\u0275text(241, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "mat-icon", 59);
        \u0275\u0275text(243, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(244, "mat-icon", 59);
        \u0275\u0275text(245, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(246, "mat-icon", 59);
        \u0275\u0275text(247, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "mat-icon", 59);
        \u0275\u0275text(249, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "span", 60);
        \u0275\u0275text(251, " 152 ratings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(252, "mat-list-item")(253, "div", 53);
        \u0275\u0275element(254, "img", 54);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(255, "span", 55);
        \u0275\u0275text(256, "Apparels that shine");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(257, "span", 56);
        \u0275\u0275text(258, "$ 80.00 ");
        \u0275\u0275elementStart(259, "s", 57);
        \u0275\u0275text(260, "$ 120.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(261, "span", 58)(262, "mat-icon", 59);
        \u0275\u0275text(263, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(264, "mat-icon", 59);
        \u0275\u0275text(265, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(266, "mat-icon", 59);
        \u0275\u0275text(267, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(268, "mat-icon", 59);
        \u0275\u0275text(269, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(270, "mat-icon", 59);
        \u0275\u0275text(271, "star_half");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(272, "span", 60);
        \u0275\u0275text(273, " 189 ratings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(274, "mat-list-item")(275, "div", 53);
        \u0275\u0275element(276, "img", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(277, "span", 55);
        \u0275\u0275text(278, "Window Curtains");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "span", 56);
        \u0275\u0275text(280, "$ 135.00 ");
        \u0275\u0275elementStart(281, "s", 57);
        \u0275\u0275text(282, "$ 144.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(283, "span", 58)(284, "mat-icon", 59);
        \u0275\u0275text(285, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(286, "mat-icon", 59);
        \u0275\u0275text(287, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(288, "mat-icon", 59);
        \u0275\u0275text(289, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(290, "mat-icon", 59);
        \u0275\u0275text(291, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(292, "mat-icon", 59);
        \u0275\u0275text(293, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(294, "span", 60);
        \u0275\u0275text(295, " 35 ratings");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(296, "div", 11)(297, "mat-card", 12)(298, "mat-card-header")(299, "div", 22)(300, "div", 50)(301, "div", 13)(302, "div", 51)(303, "mat-icon", 15);
        \u0275\u0275text(304, "star");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(305, "div", 16)(306, "h3", 6);
        \u0275\u0275text(307, "Top Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(308, "p", 52);
        \u0275\u0275text(309, "Popular in selling");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(310, "mat-card-content")(311, "div", 63);
        \u0275\u0275element(312, "app-polararea-chartjs-180", 64);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(313, "div", 65)(314, "div", 66)(315, "div", 65)(316, "div", 13)(317, "div", 67)(318, "mat-icon", 15);
        \u0275\u0275text(319, "child_care");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(320, "div", 16)(321, "h4", 6);
        \u0275\u0275text(322, "40%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(323, "p", 52);
        \u0275\u0275text(324, "Kids Play");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(325, "div", 68)(326, "h4", 6);
        \u0275\u0275text(327, "254k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(328, "p", 52);
        \u0275\u0275text(329, "Units");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(330, "div", 66)(331, "div", 65)(332, "div", 13)(333, "div", 69)(334, "mat-icon", 15);
        \u0275\u0275text(335, "widgets ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(336, "div", 16)(337, "h4", 6);
        \u0275\u0275text(338, "10%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(339, "p", 52);
        \u0275\u0275text(340, "Tools");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(341, "div", 68)(342, "h4", 6);
        \u0275\u0275text(343, "325k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(344, "p", 52);
        \u0275\u0275text(345, "Units");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(346, "div", 66)(347, "div", 65)(348, "div", 13)(349, "div", 70)(350, "mat-icon", 15);
        \u0275\u0275text(351, "tv");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(352, "div", 16)(353, "h4", 6);
        \u0275\u0275text(354, "15%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(355, "p", 52);
        \u0275\u0275text(356, "Electronics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(357, "div", 68)(358, "h4", 6);
        \u0275\u0275text(359, "161k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(360, "p", 52);
        \u0275\u0275text(361, "Units");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(362, "div", 71)(363, "div", 65)(364, "div", 13)(365, "div", 72)(366, "div", 51)(367, "mat-icon", 15);
        \u0275\u0275text(368, "house");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(369, "div", 16)(370, "h4", 6);
        \u0275\u0275text(371, "25%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(372, "p", 52);
        \u0275\u0275text(373, "Decorative");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(374, "div", 68)(375, "h4", 6);
        \u0275\u0275text(376, "125k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(377, "p", 52);
        \u0275\u0275text(378, "Units");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(379, "div", 11)(380, "mat-card", 49)(381, "mat-card-header")(382, "div", 22)(383, "div", 50)(384, "div", 13)(385, "div", 51)(386, "mat-icon", 15);
        \u0275\u0275text(387, "person");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(388, "div", 16)(389, "h3", 6);
        \u0275\u0275text(390, "Top Buyer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(391, "p", 52);
        \u0275\u0275text(392, "Share offers & discounts");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(393, "mat-list")(394, "mat-list-item")(395, "div", 53);
        \u0275\u0275element(396, "img", 73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(397, "span", 55);
        \u0275\u0275text(398, "John Doe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(399, "span", 56);
        \u0275\u0275text(400, "$ 1,070.77");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(401, "span", 58)(402, "span", 60);
        \u0275\u0275text(403, "243 Units");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(404, "mat-list-item")(405, "div", 53);
        \u0275\u0275element(406, "img", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(407, "span", 55);
        \u0275\u0275text(408, "Jenny D'Souza");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(409, "span", 56);
        \u0275\u0275text(410, "$ 1,030.77");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(411, "span", 58)(412, "span", 60);
        \u0275\u0275text(413, "141 Units");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(414, "mat-list-item")(415, "div", 53);
        \u0275\u0275element(416, "img", 75);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(417, "span", 55);
        \u0275\u0275text(418, "Almandra");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(419, "span", 56);
        \u0275\u0275text(420, "$ 1,530.50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(421, "span", 58)(422, "span", 60);
        \u0275\u0275text(423, "120 Units");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(424, "mat-list-item")(425, "div", 53);
        \u0275\u0275element(426, "img", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(427, "span", 55);
        \u0275\u0275text(428, "Monty Alberto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(429, "span", 56);
        \u0275\u0275text(430, "$ 848.24");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(431, "span", 58)(432, "span", 60);
        \u0275\u0275text(433, "100 Units");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(434, "mat-list-item")(435, "div", 53);
        \u0275\u0275element(436, "img", 77);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(437, "span", 55);
        \u0275\u0275text(438, "Jackson Pvt. Ltd.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(439, "span", 56);
        \u0275\u0275text(440, "$ 3750.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(441, "span", 58)(442, "span", 60);
        \u0275\u0275text(443, "800 Units");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(444, "div", 11)(445, "mat-card", 12)(446, "mat-card-header")(447, "div", 22)(448, "div", 50)(449, "div", 13)(450, "div", 51)(451, "mat-icon", 15);
        \u0275\u0275text(452, "star");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(453, "div", 16)(454, "h3", 6);
        \u0275\u0275text(455, "Top Country");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(456, "p", 52);
        \u0275\u0275text(457, "Popular buyers country");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(458, "mat-card-content");
        \u0275\u0275element(459, "div", 78);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(460, "mat-list")(461, "mat-list-item")(462, "div", 79);
        \u0275\u0275element(463, "img", 80);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(464, "span", 55);
        \u0275\u0275text(465, "USA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(466, "span", 56);
        \u0275\u0275text(467, "$ 2,470.77 ");
        \u0275\u0275elementStart(468, "span", 60);
        \u0275\u0275text(469, "(243 Units)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(470, "mat-list-item")(471, "div", 79);
        \u0275\u0275element(472, "img", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(473, "span", 55);
        \u0275\u0275text(474, "France");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(475, "span", 56);
        \u0275\u0275text(476, "$ 3,030.77 ");
        \u0275\u0275elementStart(477, "span", 60);
        \u0275\u0275text(478, "(141 Units)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(479, "mat-list-item")(480, "div", 79);
        \u0275\u0275element(481, "img", 82);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(482, "span", 55);
        \u0275\u0275text(483, "Almandra");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(484, "span", 56);
        \u0275\u0275text(485, "$ 3,130.50 ");
        \u0275\u0275elementStart(486, "span", 60);
        \u0275\u0275text(487, "(120 Units)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(488, "mat-list-item")(489, "div", 83)(490, "h5", 84);
        \u0275\u0275text(491, "OT");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(492, "span", 55);
        \u0275\u0275text(493, "Other");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(494, "span", 56);
        \u0275\u0275text(495, "$ 7,850.50 ");
        \u0275\u0275elementStart(496, "span", 60);
        \u0275\u0275text(497, "(450 Units)");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(87);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(22);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(2);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(4, _c02));
      }
    }, dependencies: [CommonModule, NgClass, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatButtonModule, MatIconButton, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, FormsModule, MatListModule, MatList, MatListItem, MatListItemIcon, MatListItemLine, MatListItemTitle, MatInputModule, MatInput, MatSelectModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatPaginatorModule, MatPaginator, MatSortModule, MatSort, MatSortHeader, MatChipsModule, MatProgressBarModule, PageRightComponent, PolarAreaChartjs180Component], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersComponent, [{
    type: Component,
    args: [{ selector: "app-orders", standalone: true, imports: [CommonModule, MatCardModule, MatIconModule, MatMenuModule, MatButtonModule, MatFormFieldModule, FormsModule, MatListModule, MatInputModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule, MatProgressBarModule, PageRightComponent, PolarAreaChartjs180Component], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Orders</h3>
                        <p class="small opacity-50">Monitor your sales activity</p>
                    </div>

                    <div class="col-auto mb-3 mb-xl-0">
                        <app-page-right></app-page-right>
                    </div>
                </div>
            </mat-card>
        </div>

        <div class="container fade-in">
            <!-- order overview -->
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-6 col-lg-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-cyan">
                                        <mat-icon class="material-icons-outlined">assignment</mat-icon>
                                    </div>
                                </div>
                                <div class="col">
                                    <p class="small text-secondary mb-1">Processed</p>
                                    <h3>135</h3>
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
                                        <mat-icon class="material-icons-outlined">add_shopping_cart</mat-icon>
                                    </div>
                                </div>
                                <div class="col">
                                    <p class="small text-secondary mb-1">Booked</p>
                                    <h3>523</h3>
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
                                        <mat-icon class="material-icons-outlined">remove_shopping_cart</mat-icon>
                                    </div>
                                </div>
                                <div class="col">
                                    <p class="small text-secondary mb-1">Rejected</p>
                                    <h3>13</h3>
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
                                        <mat-icon class="material-icons-outlined">location_on</mat-icon>
                                    </div>
                                </div>
                                <div class="col">
                                    <p class="small text-secondary mb-1">Delivered</p>
                                    <h3>6521</h3>
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
                                            <mat-icon class="material-icons-outlined">storefront</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col mb-3">
                                        <h3 class="mb-1">Orders</h3>
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
                            <!-- Product Column -->
                            <ng-container matColumnDef="product">
                                <th mat-header-cell *matHeaderCellDef mat-sort-header class="">Product</th>
                                <td mat-cell *matCellDef="let item" class="py-2" (click)="openDialog(item)">
                                    <p class="mat-mobile-label">Product</p>
                                    <div class="row gx-3">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 rounded">
                                                <img [src]="item.productImage" alt="{{ item.Product }}" class="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h4 class="mb-0">{{ item.Product }} <mat-icon class="material-icons-outlined text-sm text-theme">edit</mat-icon></h4>
                                            <p class="text-secondary small">{{ item.SKU }}</p>
                                        </div>
                                    </div>
                                </td>
                            </ng-container>

                            <!-- Category Column -->
                            <ng-container matColumnDef="category">
                                <th mat-header-cell *matHeaderCellDef mat-sort-header class="">Category</th>
                                <td mat-cell *matCellDef="let item" class="">
                                    <p class="mat-mobile-label">Category</p>
                                    <div>
                                        <p class="mb-0">{{ item.Category }}</p>
                                        <p class="text-secondary small">{{ item.SubCategory }}</p>
                                    </div>
                                </td>
                            </ng-container>

                            <!-- delivery Column -->
                            <ng-container matColumnDef="deliverTo">
                                <th mat-header-cell *matHeaderCellDef mat-sort-header class="">Delivery</th>
                                <td mat-cell *matCellDef="let item" class="">
                                    <p class="mat-mobile-label">Delivery</p>
                                    <div>
                                        <p class="mb-0">{{ item.Address }}</p>
                                        <p class="text-secondary small">{{ item.DeliverTo }}</p>
                                    </div>
                                </td>
                            </ng-container>

                            <!-- Price Column -->
                            <ng-container matColumnDef="price">
                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Price</th>
                                <td mat-cell *matCellDef="let item" class="">
                                    <p class="mat-mobile-label">Price</p>
                                    <div>
                                        <h4 class="mb-0">{{ item.Price }}</h4>
                                        <p class="text-secondary small">{{ item.Currency }}</p>
                                    </div>
                                </td>
                            </ng-container>

                            <!-- Status Column -->
                            <ng-container matColumnDef="status">
                                <th mat-header-cell *matHeaderCellDef mat-sort-header class="">Status</th>
                                <td mat-cell *matCellDef="let item" class=" ">
                                    <p class="mat-mobile-label">Status</p>
                                    <div>
                                        <span
                                            class="badge badge-light"
                                            [ngClass]="{
                                                'theme-green': item.Status === 'Delivered',
                                                'theme-orange': item.Status === 'Processing' || item.Status === 'Waiting',
                                                'theme-red': item.Status === 'Cancelled'
                                            }">
                                            {{ item.Status }}
                                        </span>
                                    </div>
                                </td>
                            </ng-container>

                            <!-- Payment Column -->
                            <ng-container matColumnDef="payment">
                                <th mat-header-cell *matHeaderCellDef mat-sort-header class="">Payment</th>
                                <td mat-cell *matCellDef="let item" class="">
                                    <p class="mat-mobile-label">Payment</p>
                                    <div>
                                        <span
                                            class="badge"
                                            [ngClass]="{
                                                'theme-green': item.Payment === 'Paid',
                                                'theme-orange': item.Payment === 'Waiting',
                                                'theme-red': item.Payment === 'Cancelled'
                                            }">
                                            {{ item.Payment }}
                                        </span>
                                    </div>
                                </td>
                            </ng-container>

                            <!-- Actions Column -->
                            <ng-container matColumnDef="actions">
                                <th mat-header-cell *matHeaderCellDef>Actions</th>
                                <td mat-cell *matCellDef="let item" class="">
                                    <button matIconButton [matMenuTriggerFor]="actionsMenu" aria-label="Actions" (click)="$event.stopPropagation()">
                                        <mat-icon class="material-icons-outlined">more_vert</mat-icon>
                                    </button>
                                    <mat-menu #actionsMenu="matMenu">
                                        <button mat-menu-item (click)="openDialog(item)">
                                            <mat-icon class="material-icons-outlined">edit</mat-icon>
                                            <span>Edit</span>
                                        </button>
                                        <button mat-menu-item (click)="deleteOrder(item)">
                                            <mat-icon class="material-icons-outlined">delete</mat-icon>
                                            <span>Delete</span>
                                        </button>
                                    </mat-menu>
                                </td>
                            </ng-container>

                            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
                        </table>

                        <mat-card-content>
                            <!-- Paginator -->
                            <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" aria-label="Select page of orders" class="bg-none"></mat-paginator>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>

            <!-- sales overview -->
            <h3 class="mb-1">Sales Overview</h3>
            <p class="text-secondary mb-3 mb-lg-4">Create future forward with detailed data</p>
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
                <div class="col-12 col-md-6 col-lg-3">
                    <mat-card class="mb-3 mb-lg-4 w-100">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 bg-light-theme text-theme rounded">
                                            <mat-icon class="material-icons-outlined">local_mall</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="mb-1">Top Selling</h3>
                                        <p class="small text-secondary">Get stock in</p>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-list>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                    <img src="assets/img/product6.jpg" alt="" />
                                </div>
                                <span matListItemTitle>Apparels that shine</span>
                                <span matListItemLine class="fw-bold">$ 80.00 <s class="text-secondary fw-normal">$ 120.00</s></span>
                                <span matListItemLine>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star_half</mat-icon>

                                    <span class="text-secondary"> 189 ratings</span>
                                </span>
                            </mat-list-item>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                    <img src="assets/img/product3.jpg" alt="" />
                                </div>
                                <span matListItemTitle>Window Curtains</span>
                                <span matListItemLine class="fw-bold">$ 135.00 <s class="text-secondary fw-normal">$ 144.00</s></span>
                                <span matListItemLine>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>

                                    <span class="text-secondary"> 35 ratings</span>
                                </span>
                            </mat-list-item>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                    <img src="assets/img/product1.jpg" alt="" />
                                </div>
                                <span matListItemTitle>Mosaic Textured Bedsheets</span>
                                <span matListItemLine class="fw-bold">$ 152.00 <s class="text-secondary fw-normal">$180.00</s></span>
                                <span matListItemLine>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>

                                    <span class="text-secondary"> 152 ratings</span>
                                </span>
                            </mat-list-item>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                    <img src="assets/img/product6.jpg" alt="" />
                                </div>
                                <span matListItemTitle>Apparels that shine</span>
                                <span matListItemLine class="fw-bold">$ 80.00 <s class="text-secondary fw-normal">$ 120.00</s></span>
                                <span matListItemLine>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star_half</mat-icon>

                                    <span class="text-secondary"> 189 ratings</span>
                                </span>
                            </mat-list-item>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                    <img src="assets/img/product3.jpg" alt="" />
                                </div>
                                <span matListItemTitle>Window Curtains</span>
                                <span matListItemLine class="fw-bold">$ 135.00 <s class="text-secondary fw-normal">$ 144.00</s></span>
                                <span matListItemLine>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                    <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>

                                    <span class="text-secondary"> 35 ratings</span>
                                </span>
                            </mat-list-item>
                        </mat-list>
                    </mat-card>
                </div>
                <!-- Demanded Categories -->
                <div class="col-12 col-md-6 col-lg-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 bg-light-theme text-theme rounded">
                                            <mat-icon class="material-icons-outlined">star</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="mb-1">Top Categories</h3>
                                        <p class="small text-secondary">Popular in selling</p>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content>
                            <div class="my-3 text-center">
                                <app-polararea-chartjs-180 class="avatar avatar-200 mx-auto"></app-polararea-chartjs-180>
                            </div>
                            <div class="row gx-3">
                                <div class="col-12 mb-3">
                                    <div class="row gx-3">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 bg-light-theme text-theme rounded theme-yellow">
                                                <mat-icon class="material-icons-outlined">child_care</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h4 class="mb-1">40%</h4>
                                            <p class="small text-secondary">Kids Play</p>
                                        </div>
                                        <div class="col text-end">
                                            <h4 class="mb-1">254k</h4>
                                            <p class="small text-secondary">Units</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="row gx-3">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 bg-light-theme text-theme rounded theme-green">
                                                <mat-icon class="material-icons-outlined">widgets </mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h4 class="mb-1">10%</h4>
                                            <p class="small text-secondary">Tools</p>
                                        </div>
                                        <div class="col text-end">
                                            <h4 class="mb-1">325k</h4>
                                            <p class="small text-secondary">Units</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="row gx-3">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 bg-light-theme text-theme rounded theme-red">
                                                <mat-icon class="material-icons-outlined">tv</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h4 class="mb-1">15%</h4>
                                            <p class="small text-secondary">Electronics</p>
                                        </div>
                                        <div class="col text-end">
                                            <h4 class="mb-1">161k</h4>
                                            <p class="small text-secondary">Units</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-0">
                                    <div class="row gx-3">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 rounded bg-light-theme text-theme theme-blue">
                                                <div class="avatar avatar-40 bg-light-theme text-theme rounded">
                                                    <mat-icon class="material-icons-outlined">house</mat-icon>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h4 class="mb-1">25%</h4>
                                            <p class="small text-secondary">Decorative</p>
                                        </div>
                                        <div class="col text-end">
                                            <h4 class="mb-1">125k</h4>
                                            <p class="small text-secondary">Units</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- top buyer -->
                <div class="col-12 col-md-6 col-lg-3">
                    <mat-card class="mb-3 mb-lg-4 w-100">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 bg-light-theme text-theme rounded">
                                            <mat-icon class="material-icons-outlined">person</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="mb-1">Top Buyer</h3>
                                        <p class="small text-secondary">Share offers & discounts</p>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-list>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                    <img src="assets/img/user-1.jpg" class="w-100" alt="" />
                                </div>
                                <span matListItemTitle>John Doe</span>
                                <span matListItemLine class="fw-bold">$ 1,070.77</span>
                                <span matListItemLine><span class="text-secondary">243 Units</span></span>
                            </mat-list-item>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                    <img src="assets/img/user-2.jpg" class="w-100" alt="" />
                                </div>
                                <span matListItemTitle>Jenny D'Souza</span>
                                <span matListItemLine class="fw-bold">$ 1,030.77</span>
                                <span matListItemLine><span class="text-secondary">141 Units</span></span>
                            </mat-list-item>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                    <img src="assets/img/user-3.jpg" class="w-100" alt="" />
                                </div>
                                <span matListItemTitle>Almandra</span>
                                <span matListItemLine class="fw-bold">$ 1,530.50</span>
                                <span matListItemLine><span class="text-secondary">120 Units</span></span>
                            </mat-list-item>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                    <img src="assets/img/user-4.jpg" class="w-100" alt="" />
                                </div>
                                <span matListItemTitle>Monty Alberto</span>
                                <span matListItemLine class="fw-bold">$ 848.24</span>
                                <span matListItemLine><span class="text-secondary">100 Units</span></span>
                            </mat-list-item>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                    <img src="assets/img/user-5.jpg" class="w-100" alt="" />
                                </div>
                                <span matListItemTitle>Jackson Pvt. Ltd.</span>
                                <span matListItemLine class="fw-bold">$ 3750.00</span>
                                <span matListItemLine><span class="text-secondary">800 Units</span></span>
                            </mat-list-item>
                        </mat-list>
                    </mat-card>
                </div>
                <!-- top countries -->
                <div class="col-12 col-md-6 col-lg-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 bg-light-theme text-theme rounded">
                                            <mat-icon class="material-icons-outlined">star</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="mb-1">Top Country</h3>
                                        <p class="small text-secondary">Popular buyers country</p>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content>
                            <div id="jsvectormap" class="w-100 height-180"></div>
                        </mat-card-content>
                        <mat-list>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-40 rounded coverimg">
                                    <img src="assets/img/english.png" class="w-100" alt="" />
                                </div>
                                <span matListItemTitle>USA</span>
                                <span matListItemLine class="fw-bold">$ 2,470.77 <span class="text-secondary">(243 Units)</span></span>
                            </mat-list-item>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-40 rounded coverimg">
                                    <img src="assets/img/france.png" class="w-100" alt="" />
                                </div>
                                <span matListItemTitle>France</span>
                                <span matListItemLine class="fw-bold">$ 3,030.77 <span class="text-secondary">(141 Units)</span></span>
                            </mat-list-item>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-40 rounded coverimg">
                                    <img src="assets/img/german.png" class="w-100" alt="" />
                                </div>
                                <span matListItemTitle>Almandra</span>
                                <span matListItemLine class="fw-bold">$ 3,130.50 <span class="text-secondary">(120 Units)</span></span>
                            </mat-list-item>
                            <mat-list-item>
                                <div matListItemIcon class="avatar avatar-40 rounded bg-light-theme theme-blue">
                                    <h5 class="text-theme">OT</h5>
                                </div>
                                <span matListItemTitle>Other</span>
                                <span matListItemLine class="fw-bold">$ 7,850.50 <span class="text-secondary">(450 Units)</span></span>
                            </mat-list-item>
                        </mat-list>
                    </mat-card>
                </div>
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src/app/pages/app/ecommerce/orders.component.ts", lineNumber: 686 });
})();
export {
  OrdersComponent
};
//# sourceMappingURL=orders.component-JPLH4ROH.js.map
