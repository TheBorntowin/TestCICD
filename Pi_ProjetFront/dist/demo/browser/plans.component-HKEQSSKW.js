import {
  MatToolbarModule
} from "./chunk-SFUPPXOD.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-A5PEKAIR.js";
import {
  MatMenuModule
} from "./chunk-SP2SPZAY.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
  MatList,
  MatListItem,
  MatListModule
} from "./chunk-ALLV6QEF.js";
import "./chunk-CWBJY2AK.js";
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import {
  MatInputModule
} from "./chunk-45QHUHCH.js";
import "./chunk-7XFTNJ2Y.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-ZLA4QS3A.js";
import {
  RouterLink
} from "./chunk-DYOMXT5J.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import "./chunk-XPQBAS5O.js";
import {
  FormsModule
} from "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  CommonModule,
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/profile/plans.component.ts
var PlansComponent = class _PlansComponent {
  constructor() {
    this.value = "";
    this.hideSingleSelectionIndicator = signal(false, ...ngDevMode ? [{ debugName: "hideSingleSelectionIndicator" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update((value) => !value);
  }
  static {
    this.\u0275fac = function PlansComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlansComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlansComponent, selectors: [["app-plans"]], decls: 171, vars: 1, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "text-secondary", "small"], [1, "col-auto", "ms-auto", "mb-3", "mb-xl-0"], ["routerLink", "/app/subscription", "matButton", "filled"], [1, "material-icons-outlined"], [1, "container"], [1, "row", "gx-3", "gx-lg-4", "justify-content-center"], [1, "col", "mb-3", "mb-lg-4"], [1, "mb-2"], [1, "text-secondary"], [1, "col-auto", "mb-3", "mb-lg-4"], ["name", "plans", 3, "hideSingleSelectionIndicator"], ["value", "monthly", "checked", ""], ["value", "yearly"], [1, "badge", "ms-2"], [1, "row", "gx-3", "gx-lg-4", "align-items-center"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "mb-3", "mb-lg-4", "bg-light-gradient", "theme-orange"], [1, "row", "gx-3", "align-items-center", "mb-3"], [1, "col-auto"], [1, "avatar", "avatar-50", "rounded", "bg-theme", "text-white"], [1, "col"], [1, "opacity-75"], [1, "opacity-75", "mb-3", "mb-lg-4"], [2, "--mat-list-list-item-one-line-container-height", "40px"], [1, "material-icons-outlined", "me-2", "align-middle"], [1, "justify-content-center", "py-4"], [1, "text-center"], [1, "text-center", "mb-2"], [1, "badge", "theme-green"], [1, "bg-theme", "mb-3", "mb-lg-4", "theme-green"], [1, "px-1", "pb-1"], [1, "text-center", "text-white", "mb-3"], [1, "shadow-none"], [1, "justify-content-center", "p-3"], ["matButton", "filled", 1, "w-100"], [1, "bg-light-gradient", "mb-3", "mb-lg-4"], ["routerLink", "/app/contact-us", "matButton", "filled", 1, "w-100"]], template: function PlansComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "Subscription Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Keep your subscription updated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "button", 7)(10, "mat-icon", 8);
        \u0275\u0275text(11, "workspace_premium");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " My Plan");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "h2", 12);
        \u0275\u0275text(17, "Take your saving to next level by upgrading plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 13);
        \u0275\u0275text(19, "Take a look at features and upgrade your current plan with us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 14)(21, "mat-button-toggle-group", 15)(22, "mat-button-toggle", 16);
        \u0275\u0275text(23, "Monthly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-button-toggle", 17);
        \u0275\u0275text(25, "Yearly ");
        \u0275\u0275elementStart(26, "span", 18);
        \u0275\u0275text(27, "Save 20%");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 19)(29, "div", 20)(30, "mat-card", 21)(31, "mat-card-content")(32, "div", 22)(33, "div", 23)(34, "div", 24)(35, "mat-icon");
        \u0275\u0275text(36, "person");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 25)(38, "h3", 4);
        \u0275\u0275text(39, "Personal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p", 26);
        \u0275\u0275text(41, "Perfect for the individuals");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "h1", 4);
        \u0275\u0275text(43, "$ 50");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p", 27);
        \u0275\u0275text(45, "Per license");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "h4", 12);
        \u0275\u0275text(47, "Basic includes:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "mat-list", 28)(49, "mat-list-item")(50, "mat-icon", 29);
        \u0275\u0275text(51, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52, " All demo access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "mat-list-item")(54, "mat-icon", 29);
        \u0275\u0275text(55, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " Unlimited Download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "mat-list-item")(58, "mat-icon", 29);
        \u0275\u0275text(59, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " No Contact list");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "mat-list-item")(62, "mat-icon", 29);
        \u0275\u0275text(63, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, " 5 transactions per day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "mat-list-item")(66, "mat-icon", 29);
        \u0275\u0275text(67, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, " 24/7 Customer Support");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "mat-card-actions", 30)(70, "div", 31)(71, "p", 32)(72, "span", 26);
        \u0275\u0275text(73, "Your next due date is:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(74, " 22-June-2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "span", 33);
        \u0275\u0275text(76, "Active");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(77, "div", 20)(78, "mat-card", 34)(79, "mat-card-content", 35)(80, "h4", 36);
        \u0275\u0275text(81, "Recommended");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "mat-card", 37)(83, "mat-card-content")(84, "div", 22)(85, "div", 23)(86, "div", 24)(87, "mat-icon");
        \u0275\u0275text(88, "group");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(89, "div", 25)(90, "h3", 4);
        \u0275\u0275text(91, "Business");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "p", 26);
        \u0275\u0275text(93, "Multiple team & customer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "h1", 4);
        \u0275\u0275text(95, "$ 100");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "p", 27);
        \u0275\u0275text(97, "Per license");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "h4", 12);
        \u0275\u0275text(99, "Basic includes:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "mat-list", 28)(101, "mat-list-item")(102, "mat-icon", 29);
        \u0275\u0275text(103, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, " All demo access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "mat-list-item")(106, "mat-icon", 29);
        \u0275\u0275text(107, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(108, " Unlimited Download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "mat-list-item")(110, "mat-icon", 29);
        \u0275\u0275text(111, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(112, " No Contact list");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "mat-list-item")(114, "mat-icon", 29);
        \u0275\u0275text(115, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(116, " 15 transactions per day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "mat-list-item")(118, "mat-icon", 29);
        \u0275\u0275text(119, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(120, " Multiple User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "mat-list-item")(122, "mat-icon", 29);
        \u0275\u0275text(123, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(124, " 24/7 Customer Support");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(125, "mat-card-actions", 38)(126, "button", 39);
        \u0275\u0275text(127, "Buy Now");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(128, "div", 20)(129, "mat-card", 40)(130, "mat-card-content")(131, "div", 22)(132, "div", 23)(133, "div", 24)(134, "mat-icon");
        \u0275\u0275text(135, "apartment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(136, "div", 25)(137, "h3", 4);
        \u0275\u0275text(138, "Ultra Pro");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "p", 26);
        \u0275\u0275text(140, "Multiple Application");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(141, "h1", 4);
        \u0275\u0275text(142, "On Request");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "p", 27);
        \u0275\u0275text(144, "Share your customization details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "h4", 12);
        \u0275\u0275text(146, "Basic includes:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "mat-list", 28)(148, "mat-list-item")(149, "mat-icon", 29);
        \u0275\u0275text(150, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(151, " All from Business plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "mat-list-item")(153, "mat-icon", 29);
        \u0275\u0275text(154, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(155, " 50 transactions per day");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "mat-list-item")(157, "mat-icon", 29);
        \u0275\u0275text(158, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(159, " Multiple user");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "mat-list-item")(161, "mat-icon", 29);
        \u0275\u0275text(162, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(163, " Merchant Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "mat-list-item")(165, "mat-icon", 29);
        \u0275\u0275text(166, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(167, " Customization as per request");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(168, "mat-card-actions", 38)(169, "button", 41);
        \u0275\u0275text(170, "Contact Us");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275property("hideSingleSelectionIndicator", ctx.hideSingleSelectionIndicator());
      }
    }, dependencies: [CommonModule, RouterLink, FormsModule, MatListModule, MatList, MatListItem, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatMenuModule, MatIconModule, MatIcon, MatInputModule, MatFormFieldModule, MatCardModule, MatCard, MatCardActions, MatCardContent, MatToolbarModule, MatButtonModule, MatButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlansComponent, [{
    type: Component,
    args: [{ selector: "app-plans", standalone: true, imports: [CommonModule, RouterLink, FormsModule, MatListModule, MatButtonToggleModule, MatMenuModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule, MatButtonModule], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Subscription Plans</h3>
                        <p class="text-secondary small">Keep your subscription updated</p>
                    </div>

                    <div class="col-auto ms-auto mb-3 mb-xl-0">
                        <button routerLink="/app/subscription" matButton="filled"><mat-icon class="material-icons-outlined">workspace_premium</mat-icon> My Plan</button>
                    </div>
                </div>
            </mat-card>
        </div>

        <div class="container">
            <div class="row gx-3 gx-lg-4 justify-content-center">
                <div class="col mb-3 mb-lg-4">
                    <h2 class="mb-2">Take your saving to next level by upgrading plans</h2>
                    <p class="text-secondary">Take a look at features and upgrade your current plan with us</p>
                </div>
                <div class="col-auto mb-3 mb-lg-4">
                    <mat-button-toggle-group name="plans" [hideSingleSelectionIndicator]="hideSingleSelectionIndicator()">
                        <mat-button-toggle value="monthly" checked>Monthly</mat-button-toggle>
                        <mat-button-toggle value="yearly">Yearly <span class="badge ms-2">Save 20%</span></mat-button-toggle>
                    </mat-button-toggle-group>
                </div>
            </div>
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col-12 col-md-6 col-lg-4">
                    <mat-card class="mb-3 mb-lg-4 bg-light-gradient theme-orange">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 rounded bg-theme text-white">
                                        <mat-icon>person</mat-icon>
                                    </div>
                                </div>
                                <div class="col">
                                    <h3 class="mb-1">Personal</h3>
                                    <p class="opacity-75">Perfect for the individuals</p>
                                </div>
                            </div>

                            <h1 class="mb-1">$ 50</h1>
                            <p class="opacity-75 mb-3 mb-lg-4">Per license</p>

                            <h4 class="mb-2">Basic includes:</h4>
                            <mat-list style="--mat-list-list-item-one-line-container-height:40px">
                                <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> All demo access</mat-list-item>
                                <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> Unlimited Download</mat-list-item>
                                <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> No Contact list</mat-list-item>
                                <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> 5 transactions per day</mat-list-item>
                                <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> 24/7 Customer Support</mat-list-item>
                            </mat-list>
                        </mat-card-content>
                        <mat-card-actions class="justify-content-center py-4">
                            <div class="text-center">
                                <p class="text-center mb-2"><span class="opacity-75">Your next due date is:</span> 22-June-2026</p>
                                <span class="badge theme-green">Active</span>
                            </div>
                        </mat-card-actions>
                    </mat-card>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <mat-card class="bg-theme mb-3 mb-lg-4 theme-green">
                        <mat-card-content class="px-1 pb-1">
                            <h4 class="text-center text-white mb-3">Recommended</h4>
                            <mat-card class="shadow-none">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center mb-3">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 rounded bg-theme text-white">
                                                <mat-icon>group</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h3 class="mb-1">Business</h3>
                                            <p class="opacity-75">Multiple team &amp; customer</p>
                                        </div>
                                    </div>

                                    <h1 class="mb-1">$ 100</h1>
                                    <p class="opacity-75 mb-3 mb-lg-4">Per license</p>

                                    <h4 class="mb-2">Basic includes:</h4>
                                    <mat-list style="--mat-list-list-item-one-line-container-height:40px">
                                        <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> All demo access</mat-list-item>
                                        <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> Unlimited Download</mat-list-item>
                                        <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> No Contact list</mat-list-item>
                                        <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> 15 transactions per day</mat-list-item>
                                        <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> Multiple User</mat-list-item>
                                        <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> 24/7 Customer Support</mat-list-item>
                                    </mat-list>
                                </mat-card-content>
                                <mat-card-actions class="justify-content-center p-3">
                                    <button matButton="filled" class="w-100">Buy Now</button>
                                </mat-card-actions>
                            </mat-card>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <mat-card class="bg-light-gradient mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 rounded bg-theme text-white">
                                        <mat-icon>apartment</mat-icon>
                                    </div>
                                </div>
                                <div class="col">
                                    <h3 class="mb-1">Ultra Pro</h3>
                                    <p class="opacity-75">Multiple Application</p>
                                </div>
                            </div>

                            <h1 class="mb-1">On Request</h1>
                            <p class="opacity-75 mb-3 mb-lg-4">Share your customization details</p>

                            <h4 class="mb-2">Basic includes:</h4>
                            <mat-list style="--mat-list-list-item-one-line-container-height:40px">
                                <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> All from Business plan</mat-list-item>
                                <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> 50 transactions per day</mat-list-item>
                                <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> Multiple user</mat-list-item>
                                <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> Merchant Account</mat-list-item>
                                <mat-list-item><mat-icon class="material-icons-outlined me-2 align-middle">check_circle</mat-icon> Customization as per request</mat-list-item>
                            </mat-list>
                        </mat-card-content>
                        <mat-card-actions class="justify-content-center p-3">
                            <button routerLink="/app/contact-us" matButton="filled" class="w-100">Contact Us</button>
                        </mat-card-actions>
                    </mat-card>
                </div>
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlansComponent, { className: "PlansComponent", filePath: "src/app/pages/app/profile/plans.component.ts", lineNumber: 160 });
})();
export {
  PlansComponent
};
//# sourceMappingURL=plans.component-HKEQSSKW.js.map
