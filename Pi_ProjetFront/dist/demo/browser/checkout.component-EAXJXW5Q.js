import {
  MatBadge,
  MatBadgeModule
} from "./chunk-GNK5HPR7.js";
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
import {
  MatListModule
} from "./chunk-ALLV6QEF.js";
import {
  MatDivider
} from "./chunk-CWBJY2AK.js";
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-6EYB3LWQ.js";
import "./chunk-5NBIR3PL.js";
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
  RouterLink
} from "./chunk-DYOMXT5J.js";
import "./chunk-6WJUNQHU.js";
import {
  MatFormField,
  MatLabel
} from "./chunk-XPQBAS5O.js";
import "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/ecommerce/checkout.component.ts
var CheckoutComponent = class _CheckoutComponent {
  ngOnInit() {
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], decls: 195, vars: 0, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col-auto", "mb-3", "mb-md-0"], ["matIconButton", "", "routerLink", "../cart"], [1, "material-icons-outlined"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "col-auto", "mb-3", "mb-xl-0"], ["matIconButton", "filled", "routerLink", "/app/cart", "matBadge", "3", "matBadgeColor", "warn"], ["matIconButton", "", "routerLink", "/app/ecommerce"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-lg"], [1, "mb-3", "mb-lg-4"], [1, "row", "gx-3", "gx-lg-4", "mb-3"], [1, "col", "col-md"], [1, "mb-2"], [1, "text-secondary"], [1, "col-auto"], ["matIconButton", ""], [1, "mb-3"], [1, "col-12", "col-xl", "mb-3", "mb-xl-0"], [1, "text-secondary", "mb-2"], [1, "col-12", "col-xl"], [1, "pb-0"], [1, "col-12", "col-xxl-5"], ["appearance", "outline", 1, "w-100"], ["matInput", ""], [1, "row", "gx-3"], [1, "col"], ["value", "01"], ["value", "02"], ["value", "03"], ["value", "04"], ["value", "05"], ["value", "06"], ["value", "07"], ["value", "08"], ["value", "09"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "2025"], ["value", "2026"], ["value", "2027"], ["value", "2028", "selected", ""], ["value", "2029"], ["value", "2030"], ["value", "2031"], ["value", "2032"], [1, "col-12", "col-xxl-2"], [1, "row", "gx-3", "gx-lg-4", "align-items-center"], [1, "col-12", "col-lg-5"], ["matInput", "", "value", "adminuiux@1upi"], [1, "text-theme", "theme-green", "mb-3"], [1, "align-middle"], [1, "bg-light-theme", "mb-3", "mb-lg-4", "theme-orange"], [1, "text-theme"], [1, "col-12", "col-lg-5", "col-xl-4"], [1, "row", "gx-3", "mb-3"], [1, "col", "text-secondary"], [1, "col-auto", "fw-bold"], [1, "col-auto", "fw-bold", "text-theme", "theme-green"], [1, "text-theme", "theme-green"], ["href", ""], ["matButton", "filled", "routerLink", "../invoice", 1, "w-100"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4)(5, "mat-icon", 5);
        \u0275\u0275text(6, "arrow_back");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 6)(8, "h3", 7);
        \u0275\u0275text(9, "Make a Payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 8);
        \u0275\u0275text(11, "Proceed to pay for your order...");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 9)(13, "button", 10)(14, "mat-icon", 5);
        \u0275\u0275text(15, "shopping_bag");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 9)(17, "button", 11)(18, "mat-icon", 5);
        \u0275\u0275text(19, "storefront");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 13)(22, "div", 14)(23, "mat-card", 15)(24, "mat-card-content")(25, "div", 16)(26, "div", 17)(27, "h4", 18);
        \u0275\u0275text(28, "Delivery Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p", 19);
        \u0275\u0275text(30, "2000, Las Vegas Blvd S, The Venetian Resort, NV, Las Vegas, 89104");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 20)(32, "button", 21)(33, "mat-icon", 5);
        \u0275\u0275text(34, "edit_note");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(35, "mat-divider", 22);
        \u0275\u0275elementStart(36, "div", 13)(37, "div", 23)(38, "p", 24);
        \u0275\u0275text(39, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "h4", 18);
        \u0275\u0275text(41, "AdminUIUX");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 23)(43, "p", 24);
        \u0275\u0275text(44, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "h4", 18);
        \u0275\u0275text(46, "info@adminuiux.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 25)(48, "p", 24);
        \u0275\u0275text(49, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "h4", 18);
        \u0275\u0275text(51, "+016696696694A58");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(52, "mat-card", 15)(53, "mat-card-content", 26)(54, "h4", 15);
        \u0275\u0275text(55, "Credit Card Payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 13)(57, "div", 27)(58, "mat-form-field", 28)(59, "mat-label");
        \u0275\u0275text(60, "Credit Card Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(61, "input", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 27)(63, "div", 30)(64, "div", 31)(65, "mat-form-field", 28)(66, "mat-label");
        \u0275\u0275text(67, "Expiry Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "mat-select")(69, "mat-option", 32);
        \u0275\u0275text(70, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "mat-option", 33);
        \u0275\u0275text(72, "02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "mat-option", 34);
        \u0275\u0275text(74, "03");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "mat-option", 35);
        \u0275\u0275text(76, "04");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "mat-option", 36);
        \u0275\u0275text(78, "05");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "mat-option", 37);
        \u0275\u0275text(80, "06");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "mat-option", 38);
        \u0275\u0275text(82, "07");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "mat-option", 39);
        \u0275\u0275text(84, "08");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "mat-option", 40);
        \u0275\u0275text(86, "09");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "mat-option", 41);
        \u0275\u0275text(88, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "mat-option", 42);
        \u0275\u0275text(90, "11");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "mat-option", 43);
        \u0275\u0275text(92, "12");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(93, "div", 31)(94, "mat-form-field", 28)(95, "mat-label");
        \u0275\u0275text(96, "Expiry Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "mat-select")(98, "mat-option", 44);
        \u0275\u0275text(99, "2025");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "mat-option", 45);
        \u0275\u0275text(101, "2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "mat-option", 46);
        \u0275\u0275text(103, "2027");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "mat-option", 47);
        \u0275\u0275text(105, "2028");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "mat-option", 48);
        \u0275\u0275text(107, "2029");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "mat-option", 49);
        \u0275\u0275text(109, "2030");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "mat-option", 50);
        \u0275\u0275text(111, "2031");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "mat-option", 51);
        \u0275\u0275text(113, "2032");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(114, "div", 52)(115, "mat-form-field", 28)(116, "mat-label");
        \u0275\u0275text(117, "CVV");
        \u0275\u0275elementEnd();
        \u0275\u0275element(118, "input", 29);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(119, "mat-card", 15)(120, "mat-card-content", 26)(121, "h4", 15);
        \u0275\u0275text(122, "UPI Payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 53)(124, "div", 54)(125, "mat-form-field", 28)(126, "mat-label");
        \u0275\u0275text(127, "UPI Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(128, "input", 55);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "div", 20)(130, "p", 56)(131, "mat-icon", 57);
        \u0275\u0275text(132, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(133, " UPI is Valid");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(134, "mat-card", 58)(135, "mat-card-content")(136, "div", 2)(137, "div", 20)(138, "mat-icon", 59);
        \u0275\u0275text(139, "info");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 31)(141, "h4", 18);
        \u0275\u0275text(142, "Cancellation Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "p");
        \u0275\u0275text(144, "Please be advised that all merchandise is subject to a 5-day return policy from the date of receipt. Cancellations are not permitted once an order has entered the shipping process. Any returns outside of the specified 5-day period will not be accepted.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(145, "div", 60)(146, "mat-card", 15)(147, "mat-card-header", 22)(148, "h4");
        \u0275\u0275text(149, "Price Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "mat-card-content")(151, "div", 61)(152, "div", 62);
        \u0275\u0275text(153, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "div", 63);
        \u0275\u0275text(155, "$ 450.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "div", 61)(157, "div", 62);
        \u0275\u0275text(158, "Discount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "div", 64);
        \u0275\u0275text(160, "- $ 100.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(161, "div", 61)(162, "div", 62);
        \u0275\u0275text(163, "Coupon/Bank Offer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "div", 64);
        \u0275\u0275text(165, "- $ 50.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(166, "div", 61)(167, "div", 62);
        \u0275\u0275text(168, "Platform Fee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "div", 63);
        \u0275\u0275text(170, "$ 0.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(171, "mat-divider", 22);
        \u0275\u0275elementStart(172, "div", 61)(173, "div", 62)(174, "h3");
        \u0275\u0275text(175, "Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(176, "div", 20)(177, "h3");
        \u0275\u0275text(178, "$ 300.00");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(179, "mat-divider", 22);
        \u0275\u0275elementStart(180, "h4", 65);
        \u0275\u0275text(181, "You will save $150 on this order");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(182, "mat-card")(183, "mat-card-content")(184, "mat-checkbox", 22);
        \u0275\u0275text(185, "By clicking this, I agree to the ");
        \u0275\u0275elementStart(186, "a", 66);
        \u0275\u0275text(187, "Terms and Condition");
        \u0275\u0275elementEnd();
        \u0275\u0275text(188, " and ");
        \u0275\u0275elementStart(189, "a", 66);
        \u0275\u0275text(190, "Privacy Policy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(191, "button", 67)(192, "mat-icon", 5);
        \u0275\u0275text(193, "credit_card");
        \u0275\u0275elementEnd();
        \u0275\u0275text(194, " Pay for My Order");
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [RouterLink, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatIconModule, MatIcon, MatFormField, MatCheckboxModule, MatCheckbox, MatInputModule, MatInput, MatLabel, MatSelectModule, MatSelect, MatOption, MatBadgeModule, MatBadge, MatButtonModule, MatButton, MatIconButton, MatListModule, MatDivider, MatChipsModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", standalone: true, imports: [RouterLink, MatCardModule, MatIconModule, MatFormField, MatCheckboxModule, MatInputModule, MatSelectModule, MatBadgeModule, MatButtonModule, MatListModule, MatChipsModule], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col-auto mb-3 mb-md-0">
                        <button matIconButton routerLink="../cart"><mat-icon class="material-icons-outlined">arrow_back</mat-icon></button>
                    </div>
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Make a Payment</h3>
                        <p class="small opacity-50">Proceed to pay for your order...</p>
                    </div>
                    <div class="col-auto mb-3 mb-xl-0">
                        <button matIconButton="filled" routerLink="/app/cart" matBadge="3" matBadgeColor="warn"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                    </div>
                    <div class="col-auto mb-3 mb-xl-0">
                        <button matIconButton routerLink="/app/ecommerce"><mat-icon class="material-icons-outlined">storefront</mat-icon></button>
                    </div>
                </div>
            </mat-card>
        </div>

        <div class="container fade-in">
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-lg">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 gx-lg-4 mb-3">
                                <div class="col col-md">
                                    <h4 class="mb-2">Delivery Address</h4>
                                    <p class="text-secondary">2000, Las Vegas Blvd S, The Venetian Resort, NV, Las Vegas, 89104</p>
                                </div>
                                <div class="col-auto">
                                    <button matIconButton><mat-icon class="material-icons-outlined">edit_note</mat-icon></button>
                                </div>
                            </div>
                            <mat-divider class="mb-3"></mat-divider>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-12 col-xl mb-3 mb-xl-0">
                                    <p class="text-secondary mb-2">Name</p>
                                    <h4 class="mb-2">AdminUIUX</h4>
                                </div>
                                <div class="col-12 col-xl mb-3 mb-xl-0">
                                    <p class="text-secondary mb-2">Email</p>
                                    <h4 class="mb-2">info@adminuiux.com</h4>
                                </div>
                                <div class="col-12 col-xl">
                                    <p class="text-secondary mb-2">Phone</p>
                                    <h4 class="mb-2">+016696696694A58</h4>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>

                    <!-- payment -->
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h4 class="mb-3 mb-lg-4">Credit Card Payment</h4>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-12 col-xxl-5">
                                    <mat-form-field class="w-100" appearance="outline">
                                        <mat-label>Credit Card Number</mat-label>
                                        <input matInput />
                                    </mat-form-field>
                                </div>
                                <div class="col-12 col-xxl-5">
                                    <div class="row gx-3">
                                        <div class="col">
                                            <mat-form-field class="w-100" appearance="outline">
                                                <mat-label>Expiry Month</mat-label>
                                                <mat-select>
                                                    <mat-option value="01">01</mat-option>
                                                    <mat-option value="02">02</mat-option>
                                                    <mat-option value="03">03</mat-option>
                                                    <mat-option value="04">04</mat-option>
                                                    <mat-option value="05">05</mat-option>
                                                    <mat-option value="06">06</mat-option>
                                                    <mat-option value="07">07</mat-option>
                                                    <mat-option value="08">08</mat-option>
                                                    <mat-option value="09">09</mat-option>
                                                    <mat-option value="10">10</mat-option>
                                                    <mat-option value="11">11</mat-option>
                                                    <mat-option value="12">12</mat-option>
                                                </mat-select>
                                            </mat-form-field>
                                        </div>
                                        <div class="col">
                                            <mat-form-field class="w-100" appearance="outline">
                                                <mat-label>Expiry Year</mat-label>
                                                <mat-select>
                                                    <mat-option value="2025">2025</mat-option>
                                                    <mat-option value="2026">2026</mat-option>
                                                    <mat-option value="2027">2027</mat-option>
                                                    <mat-option value="2028" selected>2028</mat-option>
                                                    <mat-option value="2029">2029</mat-option>
                                                    <mat-option value="2030">2030</mat-option>
                                                    <mat-option value="2031">2031</mat-option>
                                                    <mat-option value="2032">2032</mat-option>
                                                </mat-select>
                                            </mat-form-field>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-xxl-2">
                                    <mat-form-field class="w-100" appearance="outline">
                                        <mat-label>CVV</mat-label>
                                        <input matInput />
                                    </mat-form-field>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>

                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h4 class="mb-3 mb-lg-4">UPI Payment</h4>
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col-12 col-lg-5">
                                    <mat-form-field class="w-100" appearance="outline">
                                        <mat-label>UPI Address</mat-label>
                                        <input matInput value="adminuiux@1upi" />
                                    </mat-form-field>
                                </div>
                                <div class="col-auto">
                                    <p class="text-theme theme-green mb-3"><mat-icon class="align-middle">check_circle</mat-icon> UPI is Valid</p>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                    <mat-card class="bg-light-theme mb-3 mb-lg-4 theme-orange">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto">
                                    <mat-icon class="text-theme">info</mat-icon>
                                </div>
                                <div class="col">
                                    <h4 class="mb-2">Cancellation Policy</h4>
                                    <p>Please be advised that all merchandise is subject to a 5-day return policy from the date of receipt. Cancellations are not permitted once an order has entered the shipping process. Any returns outside of the specified 5-day period will not be accepted.</p>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-lg-5 col-xl-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-header class="mb-3">
                            <h4>Price Total</h4>
                        </mat-card-header>
                        <mat-card-content>
                            <div class="row gx-3 mb-3">
                                <div class="col text-secondary">Price</div>
                                <div class="col-auto fw-bold">$ 450.00</div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col text-secondary">Discount</div>
                                <div class="col-auto fw-bold text-theme theme-green">- $ 100.00</div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col text-secondary">Coupon/Bank Offer</div>
                                <div class="col-auto fw-bold text-theme theme-green">- $ 50.00</div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col text-secondary">Platform Fee</div>
                                <div class="col-auto fw-bold">$ 0.00</div>
                            </div>

                            <mat-divider class="mb-3"></mat-divider>

                            <div class="row gx-3 mb-3">
                                <div class="col text-secondary"><h3>Total</h3></div>
                                <div class="col-auto"><h3>$ 300.00</h3></div>
                            </div>
                            <mat-divider class="mb-3"></mat-divider>

                            <h4 class="text-theme theme-green">You will save $150 on this order</h4>
                        </mat-card-content>
                    </mat-card>
                    <mat-card>
                        <mat-card-content>
                            <mat-checkbox class="mb-3">By clicking this, I agree to the <a href="">Terms and Condition</a> and <a href="">Privacy Policy</a></mat-checkbox>
                            <button matButton="filled" class="w-100" routerLink="../invoice"><mat-icon class="material-icons-outlined">credit_card</mat-icon> Pay for My Order</button>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/pages/app/ecommerce/checkout.component.ts", lineNumber: 206 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=checkout.component-EAXJXW5Q.js.map
