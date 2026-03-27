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
  MatToolbarModule
} from "./chunk-SFUPPXOD.js";
import {
  MatMenuModule
} from "./chunk-SP2SPZAY.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
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
  MatCardContent,
  MatCardImage,
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
  MatIconModule,
  SlicePipe
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/profile/subscription.component.ts
var _forTrack0 = ($index, $item) => $item.cardNumber;
var _forTrack1 = ($index, $item) => $item.id;
function SubscriptionComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "swiper-slide", 17)(1, "mat-card")(2, "mat-card-content")(3, "div", 19)(4, "div", 6)(5, "div", 20)(6, "mat-icon", 15);
    \u0275\u0275text(7, "diamond");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 21)(9, "p", 22);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "h3", 23);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24)(14, "div", 25)(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 26)(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(card_r1.cardBank);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatCardNumber(card_r1.cardNumber));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", card_r1.cardExpMonth, "/", \u0275\u0275pipeBind2(17, 5, card_r1.cardExpYear, -2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(card_r1.cardHolder);
  }
}
function SubscriptionComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-card-content")(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 24)(5, "div", 27)(6, "div", 28)(7, "figure", 29);
    \u0275\u0275element(8, "img", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 4);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h3", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 31)(14, "span", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 33)(17, "h3", 4);
    \u0275\u0275text(18, "Plan Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 34);
    \u0275\u0275text(20, "Including features of basic plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 35)(22, "div", 6)(23, "mat-icon", 15);
    \u0275\u0275text(24, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 36);
    \u0275\u0275text(26, "Free Shipping");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 35)(28, "div", 6)(29, "mat-icon", 15);
    \u0275\u0275text(30, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 36);
    \u0275\u0275text(32, "Unlimited Send Money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 35)(34, "div", 6)(35, "mat-icon", 15);
    \u0275\u0275text(36, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 36);
    \u0275\u0275text(38, "Multiple Currencies Support");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 37)(40, "div", 6)(41, "mat-icon", 15);
    \u0275\u0275text(42, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 36);
    \u0275\u0275text(44, "Unlimited Send Money");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "a", 38);
    \u0275\u0275text(46, "More details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 39)(48, "h3", 4);
    \u0275\u0275text(49, "License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 34);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 40)(53, "div", 6)(54, "div", 41)(55, "figure", 42);
    \u0275\u0275element(56, "img", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 13)(58, "h4", 44);
    \u0275\u0275text(59, "AdminUIUX");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p", 5);
    \u0275\u0275text(61, "Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 6)(63, "span", 32);
    \u0275\u0275text(64, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 40)(66, "div", 6)(67, "div", 41)(68, "figure", 42);
    \u0275\u0275element(69, "img", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "div", 13)(71, "h4", 44);
    \u0275\u0275text(72, "Jimmy McMohan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p", 5);
    \u0275\u0275text(74, "Designer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 6)(76, "span", 32);
    \u0275\u0275text(77, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "button", 46)(79, "span", 47);
    \u0275\u0275text(80, " remove_moderator ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(81, "div", 40)(82, "div", 6)(83, "div", 41)(84, "figure", 42);
    \u0275\u0275element(85, "img", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 13)(87, "h4", 44);
    \u0275\u0275text(88, "Sneha Palliwal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "p", 5);
    \u0275\u0275text(90, "Marketing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 6)(92, "button", 49)(93, "span", 47);
    \u0275\u0275text(94, " add_moderator ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(95, "div", 6)(96, "button", 50)(97, "span", 47);
    \u0275\u0275text(98, " delete ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(99, "div", 51)(100, "div", 13)(101, "a", 52);
    \u0275\u0275text(102, "Change Plan ");
    \u0275\u0275elementStart(103, "mat-icon", 53);
    \u0275\u0275text(104, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "div", 6)(106, "button", 54);
    \u0275\u0275text(107, "Cancel Subscription");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const app_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r3.title);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275interpolate(app_r3.logoImage), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r3.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r3.term);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r3.status);
    \u0275\u0275advance(36);
    \u0275\u0275textInterpolate1("", app_r3.license, " plan");
  }
}
register();
var SubscriptionComponent = class _SubscriptionComponent {
  constructor() {
    this.profile = signal({
      firstName: "Admin",
      lastName: "UIUX",
      userId: "1",
      email: "adminuiux.public@invcorp.com",
      designation: "Lead UIUX designer",
      paymentMethod: "Corporate Visa ending in 4321",
      applications: [
        {
          id: "1",
          title: "Abode Creative Loud",
          license: "5 Users",
          status: "Active",
          term: "Yearly",
          price: "$ 560.00",
          logoImage: "assets/img/category2.jpg"
        },
        {
          id: "2",
          title: "Slacknew",
          license: "Team",
          status: "Active",
          term: "Monthly",
          price: "$ 170.00",
          logoImage: "assets/img/category8.jpg"
        },
        {
          id: "3",
          title: "Bolt New App",
          license: "1 User",
          status: "Inactive",
          term: "Monthly",
          price: "$25.00",
          logoImage: "assets/img/category4.jpg"
        }
      ],
      devices: [
        {
          id: "1",
          title: "MacBook Pro M4",
          quantity: "1",
          status: "Active"
        }
      ],
      cards: [
        {
          cardBank: "Chase",
          cardHolder: "Admin UIUX",
          cardNumber: "**** **** **** 1234",
          cardExpMonth: "10",
          cardExpYear: "2027",
          cardExpense: "1520.00",
          cardExpensePer: "12%",
          cardLimit: "13580.00"
        },
        {
          cardBank: "Bank of America",
          cardHolder: "Admin UIUX",
          cardNumber: "**** **** **** 5678",
          cardExpMonth: "03",
          cardExpYear: "2025",
          cardExpense: "1524.00",
          cardExpensePer: "14%",
          cardLimit: "4582.00"
        },
        {
          cardBank: "American Express",
          cardHolder: "Admin UIUX",
          cardNumber: "**** ****** 9012",
          cardExpMonth: "07",
          cardExpYear: "2026",
          cardExpense: "1652.00",
          cardExpensePer: "11%",
          cardLimit: "5231.00"
        }
      ]
    }, ...ngDevMode ? [{ debugName: "profile" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  formatCardNumber(maskedNumber) {
    return maskedNumber.replace(/\s/g, " ");
  }
  static {
    this.\u0275fac = function SubscriptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscriptionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionComponent, selectors: [["app-subscription"]], decls: 31, vars: 0, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "text-secondary", "small"], [1, "col-auto"], [1, "container"], [1, "bg-theme", "mb-3", "mb-lg-4", "overflow-hidden"], ["mat-card-image", "", 1, "coverimg", "h-100", "w-100", "position-absolute", "top-0", "start-0", "z-index-0", "opacity-25"], ["src", "assets/img/background1.jpg", "alt", "", 2, "display", "none"], [1, "row", "gx-3", "align-items-center", "mb-3", "position-relative", "text-white", "z-index-1"], [1, "material-icons-outlined", "align-middle", "text-white"], [1, "col"], ["matButton", "elevated"], [1, "material-icons-outlined"], ["slides-per-view", "auto", "space-between", "20px", "autoplay", "true", 1, "swiper", "overflow-visible", "z-index-1"], [1, "width-240"], [1, "mb-3", "mb-lg-4"], [1, "row", "align-items-center"], [1, "avatar", "avatar-30", "rounded", "text-theme"], [1, "col", "text-end"], [1, "small", "fw-bold"], [1, "my-4", "text-theme"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-auto", "small"], [1, "col", "text-end", "small"], [1, "col-12", "col-md-6", "col-lg-3"], [1, "text-center", "mb-3", "mb-lg-4"], [1, "avatar", "avatar-100", "mb-3", "mx-auto", "rounded"], ["alt", "", 1, "mw-100", 3, "src"], [1, "text-secondary"], [1, "badge", "theme-green"], [1, "col-12", "col-md-6", "col-lg"], [1, "text-secondary", "mb-4"], [1, "row", "gx-3", "align-items-center", "mb-2"], [1, "col-auto", "ps-0"], [1, "row", "gx-3", "align-items-center", "mb-3"], ["matButton", ""], [1, "col-12", "col-md-12", "col-lg-4"], [1, "row", "gx-3", "align-items-center", "mb-3", "mb-lg-4"], [1, "position-relative", "z-index-0"], [1, "avatar", "avatar-40", "coverimg", "rounded-circle"], ["src", "assets/img/user-6.jpg", "alt", ""], [1, "mb-0"], ["src", "assets/img/user-3.jpg", "alt", ""], ["matIconButton", "", "matTooltip", "Revoke Access", 1, "theme-red", "text-theme"], [1, "material-symbols-outlined"], ["src", "assets/img/user-2.jpg", "alt", ""], ["matIconButton", "", "matTooltip", "Give Access", 1, "theme-green", "text-theme"], ["matIconButton", "", "matTooltip", "Delete", 1, "theme-red", "text-theme"], [1, "row", "gx-3"], ["routerLink", "/app/plans", "matButton", "filled"], ["iconPositionEnd", ""], ["matButton", "", 1, "theme-red", "mx-2"]], template: function SubscriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "Subscription");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Manage your subscription");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(8, "div", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 7)(10, "mat-card", 8)(11, "mat-card-content")(12, "div", 9);
        \u0275\u0275element(13, "img", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 11)(15, "div", 6)(16, "mat-icon", 12);
        \u0275\u0275text(17, "credit_card");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 13)(19, "h3");
        \u0275\u0275text(20, "Payment Method");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 6)(22, "button", 14)(23, "mat-icon", 15);
        \u0275\u0275text(24, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " Card");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "swiper-container", 16);
        \u0275\u0275repeaterCreate(27, SubscriptionComponent_For_28_Template, 21, 8, "swiper-slide", 17, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(29, SubscriptionComponent_For_30_Template, 108, 7, "mat-card", 18, _forTrack1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(27);
        \u0275\u0275repeater(ctx.profile().cards);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.profile().applications);
      }
    }, dependencies: [CommonModule, RouterLink, FormsModule, MatListModule, MatMenuModule, MatTooltipModule, MatTooltip, MatIconModule, MatIcon, MatInputModule, MatFormFieldModule, MatCardModule, MatCard, MatCardContent, MatCardImage, MatToolbarModule, MatButtonModule, MatButton, MatIconButton, SlicePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionComponent, [{
    type: Component,
    args: [{ selector: "app-subscription", standalone: true, imports: [CommonModule, RouterLink, FormsModule, MatListModule, MatMenuModule, MatTooltipModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule, MatButtonModule], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Subscription</h3>
                        <p class="text-secondary small">Manage your subscription</p>
                    </div>

                    <div class="col-auto"></div>
                </div>
            </mat-card>
        </div>

        <div class="container">
            <!-- payment method -->
            <mat-card class="bg-theme mb-3 mb-lg-4 overflow-hidden">
                <mat-card-content>
                    <div mat-card-image class="coverimg h-100 w-100 position-absolute top-0 start-0 z-index-0 opacity-25">
                        <img src="assets/img/background1.jpg" alt="" style="display: none;" />
                    </div>

                    <div class="row gx-3 align-items-center mb-3 position-relative text-white z-index-1">
                        <div class="col-auto">
                            <mat-icon class="material-icons-outlined align-middle text-white">credit_card</mat-icon>
                        </div>
                        <div class="col">
                            <h3>Payment Method</h3>
                        </div>
                        <div class="col-auto">
                            <button matButton="elevated"><mat-icon class="material-icons-outlined">add</mat-icon> Card</button>
                        </div>
                    </div>
                    <!-- Credit cards carousel card -->
                    <swiper-container slides-per-view="auto" space-between="20px" autoplay="true" class="swiper overflow-visible z-index-1">
                        @for (card of profile().cards; track card.cardNumber) {
                        <swiper-slide class="width-240">
                            <mat-card>
                                <mat-card-content>
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 rounded text-theme">
                                                <mat-icon class="material-icons-outlined">diamond</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col text-end">
                                            <p class="small fw-bold">{{ card.cardBank }}</p>
                                        </div>
                                    </div>
                                    <h3 class="my-4 text-theme">{{ formatCardNumber(card.cardNumber) }}</h3>

                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col-auto small">
                                            <p>{{ card.cardExpMonth }}/{{ card.cardExpYear | slice : -2 }}</p>
                                        </div>
                                        <div class="col text-end small">
                                            <p>{{ card.cardHolder }}</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </swiper-slide>
                        }
                    </swiper-container>
                </mat-card-content>
            </mat-card>
            @for (app of profile().applications; track app.id) {
            <mat-card class="mb-3 mb-lg-4">
                <mat-card-content>
                    <h3>{{ app.title }}</h3>
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="text-center mb-3 mb-lg-4">
                                <figure class="avatar avatar-100 mb-3 mx-auto rounded">
                                    <img src="{{ app.logoImage }}" class="mw-100" alt="" />
                                </figure>
                                <h1 class="mb-1">{{ app.price }}</h1>
                                <h3 class="text-secondary">{{ app.term }}</h3>
                                <p class="text-secondary">
                                    <span class="badge theme-green">{{ app.status }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg">
                            <h3 class="mb-1">Plan Features</h3>
                            <p class="text-secondary mb-4">Including features of basic plan</p>
                            <div class="row gx-3 align-items-center mb-2">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined">check_circle</mat-icon>
                                </div>
                                <div class="col-auto ps-0">Free Shipping</div>
                            </div>
                            <div class="row gx-3 align-items-center mb-2">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined">check_circle</mat-icon>
                                </div>
                                <div class="col-auto ps-0">Unlimited Send Money</div>
                            </div>
                            <div class="row gx-3 align-items-center mb-2">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined">check_circle</mat-icon>
                                </div>
                                <div class="col-auto ps-0">Multiple Currencies Support</div>
                            </div>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined">check_circle</mat-icon>
                                </div>
                                <div class="col-auto ps-0">Unlimited Send Money</div>
                            </div>
                            <a matButton>More details</a>
                        </div>
                        <div class="col-12 col-md-12 col-lg-4">
                            <h3 class="mb-1">License</h3>
                            <p class="text-secondary mb-4">{{ app.license }} plan</p>

                            <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                <div class="col-auto">
                                    <div class="position-relative z-index-0">
                                        <figure class="avatar avatar-40 coverimg rounded-circle">
                                            <img src="assets/img/user-6.jpg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <div class="col">
                                    <h4 class="mb-0">AdminUIUX</h4>
                                    <p class="text-secondary small">Admin</p>
                                </div>
                                <div class="col-auto"><span class="badge theme-green">Active</span></div>
                            </div>
                            <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                <div class="col-auto">
                                    <div class="position-relative z-index-0">
                                        <figure class="avatar avatar-40 coverimg rounded-circle">
                                            <img src="assets/img/user-3.jpg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <div class="col">
                                    <h4 class="mb-0">Jimmy McMohan</h4>
                                    <p class="text-secondary small">Designer</p>
                                </div>
                                <div class="col-auto">
                                    <span class="badge theme-green">Active</span>

                                    <button matIconButton matTooltip="Revoke Access" class="theme-red text-theme"><span class="material-symbols-outlined"> remove_moderator </span></button>
                                </div>
                            </div>

                            <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                <div class="col-auto">
                                    <div class="position-relative z-index-0">
                                        <figure class="avatar avatar-40 coverimg rounded-circle">
                                            <img src="assets/img/user-2.jpg" alt="" />
                                        </figure>
                                    </div>
                                </div>
                                <div class="col">
                                    <h4 class="mb-0">Sneha Palliwal</h4>
                                    <p class="text-secondary small">Marketing</p>
                                </div>
                                <div class="col-auto">
                                    <button matIconButton matTooltip="Give Access" class="theme-green text-theme"><span class="material-symbols-outlined"> add_moderator </span></button>
                                </div>
                                <div class="col-auto">
                                    <button matIconButton matTooltip="Delete" class="theme-red text-theme"><span class="material-symbols-outlined"> delete </span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-3">
                        <div class="col">
                            <a routerLink="/app/plans" matButton="filled">Change Plan <mat-icon iconPositionEnd>arrow_forward</mat-icon></a>
                        </div>
                        <div class="col-auto">
                            <button matButton class="theme-red mx-2">Cancel Subscription</button>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>
            }
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionComponent, { className: "SubscriptionComponent", filePath: "src/app/pages/app/profile/subscription.component.ts", lineNumber: 247 });
})();
export {
  SubscriptionComponent
};
//# sourceMappingURL=subscription.component-7NS6IJLF.js.map
