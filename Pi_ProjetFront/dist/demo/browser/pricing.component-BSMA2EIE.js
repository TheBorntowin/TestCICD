import {
  CheckoutStateService
} from "./chunk-7OG4Z52K.js";
import {
  BillingService
} from "./chunk-BL2Y4C67.js";
import "./chunk-IJRF7KWR.js";
import {
  MatButtonToggleModule
} from "./chunk-A5PEKAIR.js";
import "./chunk-D63GK34V.js";
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
import "./chunk-7XFTNJ2Y.js";
import {
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule,
  MatRipple,
  MatRippleModule
} from "./chunk-ZLA4QS3A.js";
import {
  Router
} from "./chunk-DYOMXT5J.js";
import "./chunk-XPQBAS5O.js";
import "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  CommonModule,
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O4O7EFUR.js";

// src/app/billing/pages/pricing/pricing.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PricingComponent_For_45_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "mat-icon");
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Recommended ");
    \u0275\u0275elementEnd();
  }
}
function PricingComponent_For_45_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 42);
    \u0275\u0275text(2, "On Request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 34);
    \u0275\u0275text(4, "Custom pricing");
    \u0275\u0275elementEnd()();
  }
}
function PricingComponent_For_45_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 43);
    \u0275\u0275text(2, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getPrice(plan_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.billingCycle() === "monthly" ? "mo" : "mo \xB7 billed annually");
  }
}
function PricingComponent_For_45_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "mat-icon", 45);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", feature_r3, " ");
  }
}
function PricingComponent_For_45_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function PricingComponent_For_45_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const plan_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.contactUs(plan_r1));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Contact Sales ");
    \u0275\u0275elementEnd();
  }
}
function PricingComponent_For_45_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function PricingComponent_For_45_Conditional_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const plan_r1 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.choosePlan(plan_r1));
    });
    \u0275\u0275text(1, " Get Started ");
    \u0275\u0275elementStart(2, "mat-icon", 48);
    \u0275\u0275text(3, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("btn-recommended", plan_r1.recommended);
  }
}
function PricingComponent_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 29);
    \u0275\u0275conditionalCreate(2, PricingComponent_For_45_Conditional_2_Template, 4, 0, "div", 30);
    \u0275\u0275elementStart(3, "div", 31)(4, "div", 32)(5, "mat-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "h3", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 35);
    \u0275\u0275conditionalCreate(13, PricingComponent_For_45_Conditional_13_Template, 5, 0, "div")(14, PricingComponent_For_45_Conditional_14_Template, 7, 2, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 36)(16, "span", 37)(17, "mat-icon");
    \u0275\u0275text(18, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 37)(21, "mat-icon");
    \u0275\u0275text(22, "workspaces");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 37)(25, "mat-icon");
    \u0275\u0275text(26, "folder");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 37)(29, "mat-icon");
    \u0275\u0275text(30, "storage");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "ul", 38);
    \u0275\u0275repeaterCreate(33, PricingComponent_For_45_For_34_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 39);
    \u0275\u0275conditionalCreate(36, PricingComponent_For_45_Conditional_36_Template, 4, 0, "button", 40)(37, PricingComponent_For_45_Conditional_37_Template, 4, 2, "button", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plan_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("recommended-card", plan_r1.recommended)("on-request-card", plan_r1.onRequest);
    \u0275\u0275advance();
    \u0275\u0275conditional(plan_r1.recommended ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("icon-enterprise", ctx_r1.orgType() === "enterprise")("icon-academic", ctx_r1.orgType() === "academic");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(plan_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r1.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(plan_r1.onRequest ? 13 : 14);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", plan_r1.limits.users, " users");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", plan_r1.limits.workspaces, " workspaces");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", plan_r1.limits.projects, " projects");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", plan_r1.limits.storage);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(plan_r1.features);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(plan_r1.onRequest ? 36 : 37);
  }
}
var PricingComponent = class _PricingComponent {
  constructor(billing, checkoutState, router) {
    this.billing = billing;
    this.checkoutState = checkoutState;
    this.router = router;
    this.orgType = signal("enterprise", ...ngDevMode ? [{ debugName: "orgType" }] : (
      /* istanbul ignore next */
      []
    ));
    this.billingCycle = signal("monthly", ...ngDevMode ? [{ debugName: "billingCycle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.currentPlans = computed(() => this.orgType() === "enterprise" ? this.billing.enterprisePlans : this.billing.academicPlans, ...ngDevMode ? [{ debugName: "currentPlans" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  setOrgType(type) {
    this.orgType.set(type);
  }
  toggleCycle() {
    this.billingCycle.set(this.billingCycle() === "monthly" ? "annual" : "monthly");
  }
  getPrice(plan) {
    return this.billingCycle() === "monthly" ? plan.monthlyPrice : plan.annualPrice;
  }
  choosePlan(plan) {
    this.router.navigate(["/billing/checkout"], {
      queryParams: { plan: plan.id, type: this.orgType(), cycle: this.billingCycle() }
    });
  }
  contactUs(plan) {
    this.router.navigate(["/web/contactus"]);
  }
  static {
    this.\u0275fac = function PricingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingComponent)(\u0275\u0275directiveInject(BillingService), \u0275\u0275directiveInject(CheckoutStateService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingComponent, selectors: [["app-pricing"]], decls: 73, vars: 15, consts: [[1, "pricing-page"], [1, "pricing-hero", "text-center", "py-5"], [1, "container"], [1, "badge", "badge-outline-theme", "mb-3"], [1, "display-5", "fw-bold", "mb-2"], [1, "text-theme"], [1, "lead", "text-secondary", "mb-4"], [1, "org-type-selector", "mx-auto", "mb-4"], [1, "org-tab", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-3"], [1, "fw-medium"], [1, "billing-toggle", 3, "click"], [1, "toggle-track"], [1, "toggle-thumb"], [1, "badge", "badge-theme", "ms-2"], [1, "container", "mb-4"], [1, "context-banner"], [1, "mb-0", "text-secondary", "small"], [1, "container", "pb-5"], [1, "row", "gx-3", "gx-lg-4", "align-items-stretch"], [1, "col-12", "col-md-6", "col-xl-3", "mb-4"], [1, "trust-section", "mt-4"], [1, "row", "gx-4", "text-center"], [1, "col-6", "col-md-3", "mb-3"], [1, "trust-icon"], [1, "small", "mb-0", "fw-medium"], [1, "faq-note", "text-center", "mt-4", "opacity-75"], [1, "small"], [2, "font-size", "16px", "vertical-align", "middle"], ["matRipple", "", 1, "plan-card", "h-100"], [1, "recommended-badge"], [1, "plan-header"], [1, "plan-icon"], [1, "mb-0"], [1, "text-secondary", "small", "mb-0"], [1, "plan-price"], [1, "plan-limits"], [1, "limit-badge"], [1, "plan-features"], [1, "plan-cta", "mt-auto", "pt-3"], ["matButton", "outlined", 1, "w-100"], ["matButton", "filled", 1, "w-100", 3, "btn-recommended"], [1, "price-amount"], [1, "price-currency"], [1, "price-period"], [1, "feature-check"], ["matButton", "outlined", 1, "w-100", 3, "click"], ["matButton", "filled", 1, "w-100", 3, "click"], ["iconPositionEnd", ""]], template: function PricingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Pricing & Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 4);
        \u0275\u0275text(6, "Choose the right plan for your");
        \u0275\u0275element(7, "br");
        \u0275\u0275elementStart(8, "span", 5);
        \u0275\u0275text(9, "organization");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 6);
        \u0275\u0275text(11, "Transparent pricing. No hidden fees. Cancel anytime.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
        \u0275\u0275listener("click", function PricingComponent_Template_button_click_13_listener() {
          return ctx.setOrgType("enterprise");
        });
        \u0275\u0275elementStart(14, "mat-icon");
        \u0275\u0275text(15, "corporate_fare");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17, "Enterprise");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 8);
        \u0275\u0275listener("click", function PricingComponent_Template_button_click_18_listener() {
          return ctx.setOrgType("academic");
        });
        \u0275\u0275elementStart(19, "mat-icon");
        \u0275\u0275text(20, "school");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span");
        \u0275\u0275text(22, "Academic");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 9)(24, "span", 10);
        \u0275\u0275text(25, "Monthly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 11);
        \u0275\u0275listener("click", function PricingComponent_Template_div_click_26_listener() {
          return ctx.toggleCycle();
        });
        \u0275\u0275elementStart(27, "div", 12);
        \u0275\u0275element(28, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "span", 10);
        \u0275\u0275text(30, " Annual ");
        \u0275\u0275elementStart(31, "span", 14);
        \u0275\u0275text(32, "Save 20%");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(33, "div", 15)(34, "div", 16)(35, "mat-icon");
        \u0275\u0275text(36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div")(38, "strong");
        \u0275\u0275text(39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p", 17);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "div", 18)(43, "div", 19);
        \u0275\u0275repeaterCreate(44, PricingComponent_For_45_Template, 38, 18, "div", 20, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 21)(47, "div", 22)(48, "div", 23)(49, "mat-icon", 24);
        \u0275\u0275text(50, "security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p", 25);
        \u0275\u0275text(52, "GDPR Compliant");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 23)(54, "mat-icon", 24);
        \u0275\u0275text(55, "payment");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p", 25);
        \u0275\u0275text(57, "Secure Card Payment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 23)(59, "mat-icon", 24);
        \u0275\u0275text(60, "support_agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p", 25);
        \u0275\u0275text(62, "24/7 Support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 23)(64, "mat-icon", 24);
        \u0275\u0275text(65, "cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "p", 25);
        \u0275\u0275text(67, "Cancel Anytime");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(68, "div", 26)(69, "p", 27)(70, "mat-icon", 28);
        \u0275\u0275text(71, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275text(72, " Subscriptions are activated after admin validation (typically within 24\u201348h). You'll receive your login credentials by email. ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275classProp("active", ctx.orgType() === "enterprise");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.orgType() === "academic");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("text-secondary", ctx.billingCycle() === "annual");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("annual", ctx.billingCycle() === "annual");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("text-secondary", ctx.billingCycle() === "monthly");
        \u0275\u0275advance(5);
        \u0275\u0275classProp("academic-banner", ctx.orgType() === "academic");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.orgType() === "enterprise" ? "business_center" : "auto_stories");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.orgType() === "enterprise" ? "Enterprise Context" : "Academic Context");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.orgType() === "enterprise" ? "For companies, startups & NGOs. Billing per Organization. Includes ML-powered risk, churn & productivity insights." : "For universities, faculties & research labs. Includes grading workflows, plagiarism detection & academic ML signals.", " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.currentPlans());
      }
    }, dependencies: [CommonModule, MatButtonModule, MatButton, MatCardModule, MatIconModule, MatIcon, MatListModule, MatButtonToggleModule, MatChipsModule, MatRippleModule, MatRipple], styles: ["\n\n.pricing-page[_ngcontent-%COMP%] {\n  background: var(--bs-body-bg);\n}\n.pricing-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(var(--theme-color-rgb, 0,123,255), 0.06) 0%,\n      transparent 60%);\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.badge-outline-theme[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--bs-primary, #0d6efd);\n  color: var(--bs-primary, #0d6efd);\n  background: transparent;\n  padding: 4px 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 0.78rem;\n  letter-spacing: .5px;\n}\n.org-type-selector[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: var(--bs-tertiary-bg);\n  border-radius: 50px;\n  padding: 4px;\n  gap: 4px;\n}\n.org-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 24px;\n  border-radius: 50px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: .9rem;\n  transition: all .25s;\n  background: transparent;\n  color: var(--bs-secondary-color);\n}\n.org-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.org-tab.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--bs-primary, #0d6efd);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, .12);\n}\n.dark-theme[_nghost-%COMP%]   .org-tab.active[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .org-tab.active[_ngcontent-%COMP%] {\n  background: var(--bs-card-bg);\n}\n.billing-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.toggle-track[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 28px;\n  border-radius: 50px;\n  background: var(--bs-secondary-bg);\n  position: relative;\n  transition: background .3s;\n}\n.toggle-track.annual[_ngcontent-%COMP%] {\n  background: var(--bs-primary, #0d6efd);\n}\n.toggle-thumb[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #fff;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  transition: transform .3s;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, .2);\n}\n.toggle-track.annual[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] {\n  transform: translateX(24px);\n}\n.context-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  background: rgba(13, 110, 253, .07);\n  border: 1px solid rgba(13, 110, 253, .2);\n  border-radius: 12px;\n  padding: 14px 20px;\n}\n.context-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--bs-primary, #0d6efd);\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.academic-banner[_ngcontent-%COMP%] {\n  background: rgba(25, 135, 84, .07);\n  border-color: rgba(25, 135, 84, .2);\n}\n.academic-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.plan-card[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--bs-border-color);\n  border-radius: 16px;\n  padding: 24px;\n  background: var(--bs-card-bg);\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    border-color .2s;\n  position: relative;\n  overflow: hidden;\n  cursor: default;\n}\n.plan-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, .1);\n}\n.recommended-card[_ngcontent-%COMP%] {\n  border-color: var(--bs-primary, #0d6efd);\n  box-shadow: 0 6px 30px rgba(13, 110, 253, .15);\n}\n.recommended-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: var(--bs-primary, #0d6efd);\n  color: #fff;\n  font-size: .75rem;\n  font-weight: 700;\n  padding: 6px 14px;\n  border-radius: 0 16px 0 12px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.recommended-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.on-request-card[_ngcontent-%COMP%] {\n  border-style: dashed;\n  border-color: var(--bs-secondary-color);\n}\n.plan-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.plan-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.plan-icon.icon-enterprise[_ngcontent-%COMP%] {\n  background: rgba(13, 110, 253, .12);\n  color: var(--bs-primary, #0d6efd);\n}\n.plan-icon.icon-academic[_ngcontent-%COMP%] {\n  background: rgba(25, 135, 84, .12);\n  color: #198754;\n}\n.plan-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.plan-price[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.price-currency[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n  vertical-align: top;\n  margin-top: 6px;\n  display: inline-block;\n}\n.price-amount[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.price-period[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  color: var(--bs-secondary-color);\n  margin-left: 4px;\n}\n.plan-limits[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.limit-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--bs-tertiary-bg);\n  border-radius: 6px;\n  padding: 3px 8px;\n  font-size: .72rem;\n  font-weight: 600;\n}\n.limit-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.plan-features[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 16px 0;\n}\n.plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: .875rem;\n  margin-bottom: 8px;\n  color: var(--bs-body-color);\n}\n.feature-check[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n  color: #198754;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.plan-cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  font-weight: 600 !important;\n  height: 44px;\n}\n.btn-recommended[_ngcontent-%COMP%] {\n  background: var(--bs-primary, #0d6efd) !important;\n}\n.trust-section[_ngcontent-%COMP%] {\n  padding: 24px 0;\n  border-top: 1px solid var(--bs-border-color);\n}\n.trust-icon[_ngcontent-%COMP%] {\n  color: var(--bs-primary, #0d6efd);\n  display: block;\n  margin: 0 auto 6px;\n}\n.faq-note[_ngcontent-%COMP%] {\n  color: var(--bs-secondary-color);\n}\n.faq-note[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: inherit;\n}\n/*# sourceMappingURL=pricing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingComponent, [{
    type: Component,
    args: [{
      selector: "app-pricing",
      standalone: true,
      imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatRippleModule
      ],
      template: `
  <div class="pricing-page">

    <!-- Hero Section -->
    <div class="pricing-hero text-center py-5">
      <div class="container">
        <span class="badge badge-outline-theme mb-3">Pricing & Plans</span>
        <h1 class="display-5 fw-bold mb-2">Choose the right plan for your<br><span class="text-theme">organization</span></h1>
        <p class="lead text-secondary mb-4">Transparent pricing. No hidden fees. Cancel anytime.</p>

        <!-- Org Type Selector -->
        <div class="org-type-selector mx-auto mb-4">
          <button class="org-tab" [class.active]="orgType() === 'enterprise'" (click)="setOrgType('enterprise')">
            <mat-icon>corporate_fare</mat-icon>
            <span>Enterprise</span>
          </button>
          <button class="org-tab" [class.active]="orgType() === 'academic'" (click)="setOrgType('academic')">
            <mat-icon>school</mat-icon>
            <span>Academic</span>
          </button>
        </div>

        <!-- Billing Cycle Toggle -->
        <div class="d-flex align-items-center justify-content-center gap-3">
          <span [class.text-secondary]="billingCycle() === 'annual'" class="fw-medium">Monthly</span>
          <div class="billing-toggle" (click)="toggleCycle()">
            <div class="toggle-track" [class.annual]="billingCycle() === 'annual'">
              <div class="toggle-thumb"></div>
            </div>
          </div>
          <span [class.text-secondary]="billingCycle() === 'monthly'" class="fw-medium">
            Annual
            <span class="badge badge-theme ms-2">Save 20%</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Context Description -->
    <div class="container mb-4">
      <div class="context-banner" [class.academic-banner]="orgType() === 'academic'">
        <mat-icon>{{ orgType() === 'enterprise' ? 'business_center' : 'auto_stories' }}</mat-icon>
        <div>
          <strong>{{ orgType() === 'enterprise' ? 'Enterprise Context' : 'Academic Context' }}</strong>
          <p class="mb-0 text-secondary small">
            {{ orgType() === 'enterprise'
              ? 'For companies, startups & NGOs. Billing per Organization. Includes ML-powered risk, churn & productivity insights.'
              : 'For universities, faculties & research labs. Includes grading workflows, plagiarism detection & academic ML signals.'
            }}
          </p>
        </div>
      </div>
    </div>

    <!-- Plans Grid -->
    <div class="container pb-5">
      <div class="row gx-3 gx-lg-4 align-items-stretch">
        @for (plan of currentPlans(); track plan.id) {
          <div class="col-12 col-md-6 col-xl-3 mb-4">
            <div class="plan-card h-100" [class.recommended-card]="plan.recommended" [class.on-request-card]="plan.onRequest" matRipple>

              @if (plan.recommended) {
                <div class="recommended-badge">
                  <mat-icon>star</mat-icon> Recommended
                </div>
              }

              <!-- Plan Header -->
              <div class="plan-header">
                <div class="plan-icon" [class.icon-enterprise]="orgType() === 'enterprise'" [class.icon-academic]="orgType() === 'academic'">
                  <mat-icon>{{ plan.icon }}</mat-icon>
                </div>
                <div>
                  <h3 class="mb-0">{{ plan.name }}</h3>
                  <p class="text-secondary small mb-0">{{ plan.subtitle }}</p>
                </div>
              </div>

              <!-- Price -->
              <div class="plan-price">
                @if (plan.onRequest) {
                  <div>
                    <span class="price-amount">On Request</span>
                    <p class="text-secondary small mb-0">Custom pricing</p>
                  </div>
                } @else {
                  <div>
                    <span class="price-currency">$</span>
                    <span class="price-amount">{{ getPrice(plan) }}</span>
                    <span class="price-period">/ {{ billingCycle() === 'monthly' ? 'mo' : 'mo \xB7 billed annually' }}</span>
                  </div>
                }
              </div>

              <!-- Limits -->
              <div class="plan-limits">
                <span class="limit-badge"><mat-icon>people</mat-icon> {{ plan.limits.users }} users</span>
                <span class="limit-badge"><mat-icon>workspaces</mat-icon> {{ plan.limits.workspaces }} workspaces</span>
                <span class="limit-badge"><mat-icon>folder</mat-icon> {{ plan.limits.projects }} projects</span>
                <span class="limit-badge"><mat-icon>storage</mat-icon> {{ plan.limits.storage }}</span>
              </div>

              <!-- Features -->
              <ul class="plan-features">
                @for (feature of plan.features; track feature) {
                  <li>
                    <mat-icon class="feature-check">check_circle</mat-icon>
                    {{ feature }}
                  </li>
                }
              </ul>

              <!-- CTA -->
              <div class="plan-cta mt-auto pt-3">
                @if (plan.onRequest) {
                  <button matButton="outlined" class="w-100" (click)="contactUs(plan)">
                    <mat-icon>mail</mat-icon> Contact Sales
                  </button>
                } @else {
                  <button matButton="filled" class="w-100" [class.btn-recommended]="plan.recommended" (click)="choosePlan(plan)">
                    Get Started
                    <mat-icon iconPositionEnd>arrow_forward</mat-icon>
                  </button>
                }
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Trust Signals -->
      <div class="trust-section mt-4">
        <div class="row gx-4 text-center">
          <div class="col-6 col-md-3 mb-3">
            <mat-icon class="trust-icon">security</mat-icon>
            <p class="small mb-0 fw-medium">GDPR Compliant</p>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <mat-icon class="trust-icon">payment</mat-icon>
            <p class="small mb-0 fw-medium">Secure Card Payment</p>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <mat-icon class="trust-icon">support_agent</mat-icon>
            <p class="small mb-0 fw-medium">24/7 Support</p>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <mat-icon class="trust-icon">cancel</mat-icon>
            <p class="small mb-0 fw-medium">Cancel Anytime</p>
          </div>
        </div>
      </div>

      <!-- FAQ Quick Note -->
      <div class="faq-note text-center mt-4 opacity-75">
        <p class="small">
          <mat-icon style="font-size:16px;vertical-align:middle">info</mat-icon>
          Subscriptions are activated after admin validation (typically within 24\u201348h).
          You'll receive your login credentials by email.
        </p>
      </div>
    </div>
  </div>

  <style>
    .pricing-page { background: var(--bs-body-bg); }

    .pricing-hero {
      background: linear-gradient(135deg, rgba(var(--theme-color-rgb, 0,123,255), 0.06) 0%, transparent 60%);
      border-bottom: 1px solid var(--bs-border-color);
    }

    .badge-outline-theme {
      border: 1.5px solid var(--bs-primary, #0d6efd);
      color: var(--bs-primary, #0d6efd);
      background: transparent;
      padding: 4px 14px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.78rem;
      letter-spacing: .5px;
    }

    .org-type-selector {
      display: inline-flex;
      background: var(--bs-tertiary-bg);
      border-radius: 50px;
      padding: 4px;
      gap: 4px;
    }
    .org-tab {
      display: flex; align-items: center; gap: 8px;
      padding: 10px 24px; border-radius: 50px; border: none; cursor: pointer;
      font-weight: 600; font-size: .9rem; transition: all .25s;
      background: transparent; color: var(--bs-secondary-color);
    }
    .org-tab mat-icon { font-size: 18px; width: 18px; height: 18px; }
    .org-tab.active {
      background: #fff; color: var(--bs-primary, #0d6efd);
      box-shadow: 0 2px 10px rgba(0,0,0,.12);
    }
    :host-context(.dark-theme) .org-tab.active { background: var(--bs-card-bg); }

    .billing-toggle { cursor: pointer; }
    .toggle-track {
      width: 52px; height: 28px; border-radius: 50px;
      background: var(--bs-secondary-bg); position: relative; transition: background .3s;
    }
    .toggle-track.annual { background: var(--bs-primary, #0d6efd); }
    .toggle-thumb {
      width: 22px; height: 22px; border-radius: 50%; background: #fff;
      position: absolute; top: 3px; left: 3px; transition: transform .3s;
      box-shadow: 0 2px 6px rgba(0,0,0,.2);
    }
    .toggle-track.annual .toggle-thumb { transform: translateX(24px); }

    .context-banner {
      display: flex; align-items: flex-start; gap: 14px;
      background: rgba(13,110,253,.07); border: 1px solid rgba(13,110,253,.2);
      border-radius: 12px; padding: 14px 20px;
    }
    .context-banner mat-icon { color: var(--bs-primary, #0d6efd); margin-top: 2px; flex-shrink: 0; }
    .academic-banner { background: rgba(25,135,84,.07); border-color: rgba(25,135,84,.2); }
    .academic-banner mat-icon { color: #198754; }

    /* Plan Cards */
    .plan-card {
      border: 1.5px solid var(--bs-border-color); border-radius: 16px;
      padding: 24px; background: var(--bs-card-bg);
      display: flex; flex-direction: column;
      transition: transform .2s, box-shadow .2s, border-color .2s;
      position: relative; overflow: hidden; cursor: default;
    }
    .plan-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,.1); }

    .recommended-card {
      border-color: var(--bs-primary, #0d6efd);
      box-shadow: 0 6px 30px rgba(13,110,253,.15);
    }

    .recommended-badge {
      position: absolute; top: 0; right: 0;
      background: var(--bs-primary, #0d6efd); color: #fff;
      font-size: .75rem; font-weight: 700; padding: 6px 14px;
      border-radius: 0 16px 0 12px; display: flex; align-items: center; gap: 4px;
    }
    .recommended-badge mat-icon { font-size: 14px; width: 14px; height: 14px; }

    .on-request-card { border-style: dashed; border-color: var(--bs-secondary-color); }

    .plan-header { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
    .plan-icon {
      width: 48px; height: 48px; border-radius: 12px; display: flex;
      align-items: center; justify-content: center; flex-shrink: 0;
    }
    .plan-icon.icon-enterprise { background: rgba(13,110,253,.12); color: var(--bs-primary, #0d6efd); }
    .plan-icon.icon-academic { background: rgba(25,135,84,.12); color: #198754; }
    .plan-icon mat-icon { font-size: 24px; }

    .plan-price { margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--bs-border-color); }
    .price-currency { font-size: 1.4rem; font-weight: 700; vertical-align: top; margin-top: 6px; display: inline-block; }
    .price-amount { font-size: 2.8rem; font-weight: 800; line-height: 1; }
    .price-period { font-size: .8rem; color: var(--bs-secondary-color); margin-left: 4px; }

    .plan-limits {
      display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;
    }
    .limit-badge {
      display: inline-flex; align-items: center; gap: 4px;
      background: var(--bs-tertiary-bg); border-radius: 6px;
      padding: 3px 8px; font-size: .72rem; font-weight: 600;
    }
    .limit-badge mat-icon { font-size: 13px; width: 13px; height: 13px; }

    .plan-features { list-style: none; padding: 0; margin: 0 0 16px 0; }
    .plan-features li {
      display: flex; align-items: flex-start; gap: 8px;
      font-size: .875rem; margin-bottom: 8px; color: var(--bs-body-color);
    }
    .feature-check { font-size: 17px; width: 17px; height: 17px; color: #198754; margin-top: 1px; flex-shrink: 0; }

    .plan-cta button { border-radius: 10px !important; font-weight: 600 !important; height: 44px; }
    .btn-recommended { background: var(--bs-primary, #0d6efd) !important; }

    .trust-section { padding: 24px 0; border-top: 1px solid var(--bs-border-color); }
    .trust-icon { color: var(--bs-primary, #0d6efd); display: block; margin: 0 auto 6px; }

    .faq-note { color: var(--bs-secondary-color); }
    .faq-note mat-icon { color: inherit; }
  </style>
  `
    }]
  }], () => [{ type: BillingService }, { type: CheckoutStateService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingComponent, { className: "PricingComponent", filePath: "src/app/billing/pages/pricing/pricing.component.ts", lineNumber: 313 });
})();
export {
  PricingComponent
};
//# sourceMappingURL=pricing.component-BSMA2EIE.js.map
