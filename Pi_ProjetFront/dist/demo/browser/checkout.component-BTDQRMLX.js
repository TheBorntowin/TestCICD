import {
  CheckoutStateService
} from "./chunk-7OG4Z52K.js";
import {
  BillingService
} from "./chunk-BL2Y4C67.js";
import {
  MatButtonModule
} from "./chunk-ZLA4QS3A.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-DYOMXT5J.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HGLJSDQ3.js";
import {
  CommonModule,
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O4O7EFUR.js";

// src/app/billing/pages/checkout/checkout.component.ts
function CheckoutComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-icon");
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No plan selected. ");
    \u0275\u0275elementStart(5, "a", 9);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_7_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(6, "Back to pricing");
    \u0275\u0275elementEnd()()();
  }
}
function CheckoutComponent_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 38);
    \u0275\u0275elementStart(2, "mat-icon", 16);
    \u0275\u0275text(3, "menu_book");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_Conditional_8_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "input", 39);
    \u0275\u0275elementStart(2, "mat-icon", 16);
    \u0275\u0275text(3, "receipt_long");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_Conditional_8_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_8_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Valid email required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_8_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_8_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Min. 1");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_8_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" $", (tmp_2_0 = ctx_r1.selectedPlan()) == null ? null : tmp_2_0.monthlyPrice, "/mo ");
  }
}
function CheckoutComponent_Conditional_8_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Custom ");
  }
}
function CheckoutComponent_Conditional_8_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Save 20%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", (tmp_2_0 = ctx_r1.selectedPlan()) == null ? null : tmp_2_0.annualPrice, "/mo");
  }
}
function CheckoutComponent_Conditional_8_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Custom");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_8_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Processing\u2026 ");
  }
}
function CheckoutComponent_Conditional_8_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Continue to Payment \xA0\u2192 ");
  }
}
function CheckoutComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10);
    \u0275\u0275listener("ngSubmit", function CheckoutComponent_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 13)(8, "div", 14);
    \u0275\u0275element(9, "input", 15);
    \u0275\u0275elementStart(10, "mat-icon", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, CheckoutComponent_Conditional_8_Conditional_12_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, CheckoutComponent_Conditional_8_Conditional_13_Template, 4, 0, "div", 14)(14, CheckoutComponent_Conditional_8_Conditional_14_Template, 4, 0, "div", 14);
    \u0275\u0275elementStart(15, "div", 18);
    \u0275\u0275element(16, "input", 19);
    \u0275\u0275elementStart(17, "mat-icon", 16);
    \u0275\u0275text(18, "location_on");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 11)(20, "div", 12)(21, "mat-icon");
    \u0275\u0275text(22, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Admin Contact");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 20)(26, "mat-icon");
    \u0275\u0275text(27, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "This person will be the ");
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31, "Organization Admin");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, ". Login credentials will be sent to this email after activation.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 21)(34, "div", 14);
    \u0275\u0275element(35, "input", 22);
    \u0275\u0275elementStart(36, "mat-icon", 16);
    \u0275\u0275text(37, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(38, CheckoutComponent_Conditional_8_Conditional_38_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 14);
    \u0275\u0275element(40, "input", 23);
    \u0275\u0275elementStart(41, "mat-icon", 16);
    \u0275\u0275text(42, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(43, CheckoutComponent_Conditional_8_Conditional_43_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 14);
    \u0275\u0275element(45, "input", 24);
    \u0275\u0275elementStart(46, "mat-icon", 16);
    \u0275\u0275text(47, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, CheckoutComponent_Conditional_8_Conditional_48_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 25)(50, "label", 26);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 27);
    \u0275\u0275element(53, "input", 28);
    \u0275\u0275elementStart(54, "mat-icon", 16);
    \u0275\u0275text(55, "group");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(56, CheckoutComponent_Conditional_8_Conditional_56_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "div", 11)(58, "div", 12)(59, "mat-icon");
    \u0275\u0275text(60, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "Billing Cycle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 29)(64, "label", 30);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_8_Template_label_click_64_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_2_0 = ctx_r1.form.get("billingCycle")) == null ? null : tmp_2_0.setValue("monthly"));
    });
    \u0275\u0275element(65, "div", 31);
    \u0275\u0275elementStart(66, "div", 32)(67, "strong");
    \u0275\u0275text(68, "Monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "p");
    \u0275\u0275text(70, "Billed every month. Flexible cancellation.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "span", 33);
    \u0275\u0275conditionalCreate(72, CheckoutComponent_Conditional_8_Conditional_72_Template, 1, 1)(73, CheckoutComponent_Conditional_8_Conditional_73_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "label", 30);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_8_Template_label_click_74_listener() {
      let tmp_2_0;
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((tmp_2_0 = ctx_r1.form.get("billingCycle")) == null ? null : tmp_2_0.setValue("annual"));
    });
    \u0275\u0275element(75, "div", 31);
    \u0275\u0275elementStart(76, "div", 32)(77, "strong");
    \u0275\u0275text(78, "Annual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p");
    \u0275\u0275text(80, "Billed once a year.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 34);
    \u0275\u0275conditionalCreate(82, CheckoutComponent_Conditional_8_Conditional_82_Template, 4, 1)(83, CheckoutComponent_Conditional_8_Conditional_83_Template, 2, 0, "span", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(84, "button", 36);
    \u0275\u0275conditionalCreate(85, CheckoutComponent_Conditional_8_Conditional_85_Template, 1, 0)(86, CheckoutComponent_Conditional_8_Conditional_86_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "p", 37)(88, "mat-icon");
    \u0275\u0275text(89, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, " By continuing, you agree to our Terms of Service and Privacy Policy. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.isAcademic() ? "account_balance" : "domain");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isAcademic() ? "Institution Information" : "Company Information");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", (ctx_r1.isAcademic() ? "Institution" : "Company") + " Name **");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isAcademic() ? "account_balance" : "domain");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.f["orgName"].invalid && ctx_r1.f["orgName"].touched ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAcademic() ? 13 : 14);
    \u0275\u0275advance(25);
    \u0275\u0275conditional(ctx_r1.f["adminName"].invalid && ctx_r1.f["adminName"].touched ? 38 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.f["adminEmail"].invalid && ctx_r1.f["adminEmail"].touched ? 43 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.f["phone"].invalid && ctx_r1.f["phone"].touched ? 48 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Number of ", ctx_r1.isAcademic() ? "Students" : "Users", " **");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.f["numUsers"].invalid && ctx_r1.f["numUsers"].touched ? 56 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("selected", ((tmp_13_0 = ctx_r1.form.get("billingCycle")) == null ? null : tmp_13_0.value) === "monthly");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ((tmp_14_0 = ctx_r1.form.get("billingCycle")) == null ? null : tmp_14_0.value) === "monthly");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_15_0 = ctx_r1.selectedPlan()) == null ? null : tmp_15_0.monthlyPrice) !== null ? 72 : 73);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ((tmp_16_0 = ctx_r1.form.get("billingCycle")) == null ? null : tmp_16_0.value) === "annual");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ((tmp_17_0 = ctx_r1.form.get("billingCycle")) == null ? null : tmp_17_0.value) === "annual");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(!((tmp_18_0 = ctx_r1.selectedPlan()) == null ? null : tmp_18_0.onRequest) ? 82 : 83);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSubmitting() ? 85 : 86);
  }
}
function CheckoutComponent_Conditional_10_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Custom ");
  }
}
function CheckoutComponent_Conditional_10_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" $", (tmp_2_0 = ctx_r1.selectedPlan()) == null ? null : tmp_2_0.monthlyPrice, "/mo ");
  }
}
function CheckoutComponent_Conditional_10_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" $", (tmp_2_0 = ctx_r1.selectedPlan()) == null ? null : tmp_2_0.annualPrice, "/mo ");
  }
}
function CheckoutComponent_Conditional_10_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Custom ");
  }
}
function CheckoutComponent_Conditional_10_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" $", (tmp_2_0 = ctx_r1.selectedPlan()) == null ? null : tmp_2_0.monthlyPrice, "/mo ");
  }
}
function CheckoutComponent_Conditional_10_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" $", (tmp_2_0 = ctx_r1.selectedPlan()) == null ? null : tmp_2_0.annualPrice, "/mo ");
  }
}
function CheckoutComponent_Conditional_10_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "mat-icon");
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feat_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", feat_r4);
  }
}
function CheckoutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "h5", 41);
    \u0275\u0275text(2, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hr", 42);
    \u0275\u0275elementStart(4, "div", 43)(5, "div", 44)(6, "mat-icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "p", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(13, "hr", 42);
    \u0275\u0275elementStart(14, "div", 47)(15, "span", 48);
    \u0275\u0275text(16, "Base price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 49);
    \u0275\u0275conditionalCreate(18, CheckoutComponent_Conditional_10_Conditional_18_Template, 1, 0)(19, CheckoutComponent_Conditional_10_Conditional_19_Template, 1, 1)(20, CheckoutComponent_Conditional_10_Conditional_20_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 50)(22, "span", 48);
    \u0275\u0275text(23, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 49);
    \u0275\u0275conditionalCreate(25, CheckoutComponent_Conditional_10_Conditional_25_Template, 1, 0)(26, CheckoutComponent_Conditional_10_Conditional_26_Template, 1, 1)(27, CheckoutComponent_Conditional_10_Conditional_27_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "hr", 42);
    \u0275\u0275elementStart(29, "p", 51);
    \u0275\u0275text(30, "Included in this plan:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ul", 52);
    \u0275\u0275repeaterCreate(32, CheckoutComponent_Conditional_10_For_33_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "hr", 42);
    \u0275\u0275elementStart(35, "div", 53)(36, "mat-icon", 54);
    \u0275\u0275text(37, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div")(39, "p", 55);
    \u0275\u0275text(40, "Secure Checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 56);
    \u0275\u0275text(42, "Payment is manually validated by our team. Your data is protected by 256-bit SSL encryption.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedPlan().icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedPlan().name, " Plan");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.orgType() === "enterprise" ? "Enterprise" : "Academic");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(((tmp_4_0 = ctx_r1.selectedPlan()) == null ? null : tmp_4_0.onRequest) ? 18 : ctx_r1.billingCycleValue() === "monthly" ? 19 : 20);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_5_0 = ctx_r1.selectedPlan()) == null ? null : tmp_5_0.onRequest) ? 25 : ctx_r1.billingCycleValue() === "monthly" ? 26 : 27);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.selectedPlan().features.slice(0, 5));
  }
}
var CheckoutComponent = class _CheckoutComponent {
  constructor() {
    this.selectedPlan = signal(null, ...ngDevMode ? [{ debugName: "selectedPlan" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fb = inject(FormBuilder);
    this.billing = inject(BillingService);
    this.stateService = inject(CheckoutStateService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.form = this.fb.group({
      orgType: ["enterprise", Validators.required],
      orgName: ["", [Validators.required, Validators.minLength(2)]],
      adminName: ["", [Validators.required, Validators.minLength(2)]],
      adminEmail: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      numUsers: [1, [Validators.required, Validators.min(1)]],
      billingCycle: ["monthly", Validators.required],
      address: [""],
      vatNumber: [""],
      department: [""]
    });
    this.isAcademic = () => this.form.get("orgType")?.value === "academic";
    this.orgType = () => this.form.get("orgType")?.value;
    this.billingCycleValue = () => this.form.get("billingCycle")?.value;
  }
  get f() {
    return this.form.controls;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const planId = params["plan"];
      const type = params["type"];
      const cycle = params["cycle"];
      if (planId) {
        const plan = this.billing.getPlanById(planId);
        if (plan) {
          this.selectedPlan.set(plan);
          if (type)
            this.form.get("orgType")?.setValue(type);
          if (cycle)
            this.form.get("billingCycle")?.setValue(cycle);
        }
      } else if (this.stateService.hasState()) {
        const state = this.stateService.checkoutState();
        if (state) {
          this.selectedPlan.set(state.plan);
          this.form.patchValue({
            orgType: state.orgType,
            orgName: state.orgName,
            adminName: state.adminName,
            adminEmail: state.adminEmail,
            phone: state.phone,
            numUsers: state.numUsers,
            billingCycle: state.billingCycle,
            address: state.address,
            vatNumber: state.vatNumber,
            department: state.department
          });
        }
      }
    });
  }
  onSubmit() {
    if (this.form.invalid || !this.selectedPlan()) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.value;
    const state = {
      plan: this.selectedPlan(),
      orgType: v.orgType,
      billingCycle: v.billingCycle,
      orgName: v.orgName,
      adminEmail: v.adminEmail,
      adminName: v.adminName,
      phone: v.phone,
      numUsers: v.numUsers,
      address: v.address || "",
      vatNumber: v.vatNumber || void 0,
      department: v.department || void 0
    };
    this.stateService.save(state);
    this.router.navigate(["/billing/payment"]);
  }
  goBack() {
    this.router.navigate(["/billing/pricing"]);
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], decls: 11, vars: 2, consts: [[1, "checkout-page"], [1, "checkout-container"], [1, "left-col"], [1, "page-title"], [1, "page-sub"], [1, "empty-state"], [3, "formGroup"], [1, "right-col"], [1, "summary-card"], [1, "link", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-header"], [1, "fields-grid"], [1, "field-wrap"], ["formControlName", "orgName", "type", "text", 1, "f-input", 3, "placeholder"], [1, "f-icon"], [1, "f-err"], [1, "field-wrap", "full-width"], ["formControlName", "address", "placeholder", "Address", "type", "text", 1, "f-input"], [1, "info-banner"], [1, "fields-grid", "mt-3"], ["formControlName", "adminName", "placeholder", "Full Name **", "type", "text", 1, "f-input"], ["formControlName", "adminEmail", "placeholder", "Email Address **", "type", "email", 1, "f-input"], ["formControlName", "phone", "placeholder", "Phone Number **", "type", "tel", 1, "f-input"], [1, "field-wrap", "number-wrap"], [1, "number-label"], [1, "number-inner"], ["formControlName", "numUsers", "type", "number", "min", "1", 1, "f-input", "number-input"], [1, "cycle-options"], [1, "cycle-option", 3, "click"], [1, "cycle-radio"], [1, "cycle-info"], [1, "cycle-price", "ms-auto"], [1, "ms-auto", "d-flex", "align-items-center", "gap-2"], [1, "cycle-price"], ["type", "submit", 1, "submit-btn", "w-100", 3, "disabled"], [1, "legal-note"], ["formControlName", "department", "placeholder", "Faculty / Department", "type", "text", 1, "f-input"], ["formControlName", "vatNumber", "placeholder", "VAT Number (optional)", "type", "text", 1, "f-input"], [1, "save-badge"], [1, "summary-title"], [1, "summary-hr"], [1, "summary-plan-row"], [1, "plan-icon-sm"], [1, "plan-name"], [1, "plan-type"], [1, "summary-price-row"], [1, "sp-label"], [1, "sp-value"], [1, "summary-price-row", "total"], [1, "features-label"], [1, "features-list"], [1, "secure-row"], [1, "secure-icon"], [1, "secure-title"], [1, "secure-body"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        \u0275\u0275text(4, "Complete your registration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6, "Tell us about your organization to get started");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, CheckoutComponent_Conditional_7_Template, 7, 0, "div", 5)(8, CheckoutComponent_Conditional_8_Template, 91, 24, "form", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275conditionalCreate(10, CheckoutComponent_Conditional_10_Template, 43, 5, "div", 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275conditional(!ctx.selectedPlan() ? 7 : 8);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selectedPlan() ? 10 : -1);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, MatButtonModule, MatIconModule, MatIcon], styles: ["\n\n.checkout-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  background: #f0f4fa;\n  padding: 40px 16px;\n}\n.checkout-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 28px;\n  align-items: start;\n}\n@media (max-width: 860px) {\n  .checkout-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  margin-bottom: 4px;\n  color: #1e293b;\n}\n.page-sub[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: .9rem;\n  margin-bottom: 24px;\n}\n.form-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 22px 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, .06);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: 700;\n  font-size: .95rem;\n  color: #1e293b;\n  margin-bottom: 18px;\n}\n.section-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 20px;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  background: #eff6ff;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: .84rem;\n  color: #1e40af;\n  line-height: 1.5;\n}\n.info-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n  color: #2563eb;\n}\n.fields-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n@media (max-width: 600px) {\n  .fields-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 14px !important;\n}\n.field-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.f-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px 44px 13px 16px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 50px;\n  font-size: .875rem;\n  color: #1e293b;\n  background: #f8fafc;\n  outline: none;\n  box-sizing: border-box;\n  transition: border-color .2s;\n}\n.f-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #fff;\n}\n.f-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.f-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 18px;\n  pointer-events: none;\n}\n.f-err[_ngcontent-%COMP%] {\n  font-size: .73rem;\n  color: #ef4444;\n  padding-left: 14px;\n  display: block;\n  margin-top: 3px;\n}\n.number-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.number-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  left: 16px;\n  z-index: 2;\n  font-size: .72rem;\n  color: #64748b;\n  background: #f8fafc;\n  padding: 0 4px;\n  pointer-events: none;\n}\n.number-inner[_ngcontent-%COMP%] {\n  position: relative;\n}\n.number-input[_ngcontent-%COMP%] {\n  padding-top: 18px !important;\n}\n.cycle-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cycle-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 14px 18px;\n  cursor: pointer;\n  transition: all .18s;\n}\n.cycle-option[_ngcontent-%COMP%]:hover {\n  border-color: #93c5fd;\n}\n.cycle-option.selected[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.cycle-radio[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid #cbd5e1;\n  flex-shrink: 0;\n  transition: all .18s;\n}\n.cycle-radio.active[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #2563eb;\n  box-shadow: inset 0 0 0 3px #fff;\n}\n.cycle-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: .875rem;\n  color: #1e293b;\n  display: block;\n}\n.cycle-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: .78rem;\n  color: #64748b;\n  margin: 0;\n}\n.cycle-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: .875rem;\n  color: #1e293b;\n  white-space: nowrap;\n}\n.save-badge[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n  font-size: .7rem;\n  font-weight: 700;\n  padding: 2px 9px;\n  border-radius: 50px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 15px;\n  background: #64748b;\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: .95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background .2s;\n}\n.submit-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  background: #2563eb;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: not-allowed;\n}\n.legal-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  font-size: .75rem;\n  color: #94a3b8;\n  margin-top: 12px;\n}\n.legal-note[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 22px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, .07);\n  position: sticky;\n  top: 80px;\n}\n.summary-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: .95rem;\n  color: #1e293b;\n  margin-bottom: 14px;\n}\n.summary-hr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #f1f5f9;\n  margin: 12px 0;\n}\n.summary-plan-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 4px 0;\n}\n.plan-icon-sm[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: #eff6ff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.plan-icon-sm[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 20px;\n}\n.plan-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: .875rem;\n  margin: 0;\n  color: #1e293b;\n}\n.plan-type[_ngcontent-%COMP%] {\n  font-size: .77rem;\n  color: #64748b;\n  margin: 0;\n}\n.summary-price-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  font-size: .85rem;\n}\n.sp-label[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.sp-value[_ngcontent-%COMP%] {\n  color: #1e293b;\n}\n.total[_ngcontent-%COMP%]   .sp-label[_ngcontent-%COMP%], \n.total[_ngcontent-%COMP%]   .sp-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: .9rem;\n  color: #1e293b;\n}\n.features-label[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 8px;\n}\n.features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: .8rem;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.features-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  color: #16a34a;\n  flex-shrink: 0;\n}\n.secure-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.secure-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.secure-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: .82rem;\n  color: #1e293b;\n  margin: 0 0 3px;\n}\n.secure-body[_ngcontent-%COMP%] {\n  font-size: .76rem;\n  color: #64748b;\n  margin: 0;\n  line-height: 1.45;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 0;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  opacity: .25;\n  display: block;\n  margin: 0 auto 12px;\n}\n.link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  cursor: pointer;\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 8px !important;\n}\n.ms-auto[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{
      selector: "app-checkout",
      standalone: true,
      imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
      template: `
  <div class="checkout-page">
    <div class="checkout-container">

      <!-- Left column -->
      <div class="left-col">
        <h2 class="page-title">Complete your registration</h2>
        <p class="page-sub">Tell us about your organization to get started</p>

        @if (!selectedPlan()) {
          <div class="empty-state">
            <mat-icon>inventory_2</mat-icon>
            <p>No plan selected. <a (click)="goBack()" class="link">Back to pricing</a></p>
          </div>
        } @else {
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

          <!-- \u2500\u2500 Company / Institution Information \u2500\u2500 -->
          <div class="form-section">
            <div class="section-header">
              <mat-icon>{{ isAcademic() ? 'account_balance' : 'domain' }}</mat-icon>
              <span>{{ isAcademic() ? 'Institution Information' : 'Company Information' }}</span>
            </div>
            <div class="fields-grid">
              <div class="field-wrap">
                <input class="f-input" formControlName="orgName"
                  [placeholder]="(isAcademic() ? 'Institution' : 'Company') + ' Name **'"
                  type="text">
                <mat-icon class="f-icon">{{ isAcademic() ? 'account_balance' : 'domain' }}</mat-icon>
                @if (f['orgName'].invalid && f['orgName'].touched) {
                  <span class="f-err">Required</span>
                }
              </div>

              @if (isAcademic()) {
                <div class="field-wrap">
                  <input class="f-input" formControlName="department"
                    placeholder="Faculty / Department" type="text">
                  <mat-icon class="f-icon">menu_book</mat-icon>
                </div>
              } @else {
                <div class="field-wrap">
                  <input class="f-input" formControlName="vatNumber"
                    placeholder="VAT Number (optional)" type="text">
                  <mat-icon class="f-icon">receipt_long</mat-icon>
                </div>
              }

              <div class="field-wrap full-width">
                <input class="f-input" formControlName="address"
                  placeholder="Address" type="text">
                <mat-icon class="f-icon">location_on</mat-icon>
              </div>
            </div>
          </div>

          <!-- \u2500\u2500 Admin Contact \u2500\u2500 -->
          <div class="form-section">
            <div class="section-header">
              <mat-icon>manage_accounts</mat-icon>
              <span>Admin Contact</span>
            </div>
            <div class="info-banner">
              <mat-icon>info</mat-icon>
              <span>This person will be the <strong>Organization Admin</strong>. Login credentials will be sent to this email after activation.</span>
            </div>
            <div class="fields-grid mt-3">
              <div class="field-wrap">
                <input class="f-input" formControlName="adminName"
                  placeholder="Full Name **" type="text">
                <mat-icon class="f-icon">person</mat-icon>
                @if (f['adminName'].invalid && f['adminName'].touched) {
                  <span class="f-err">Required</span>
                }
              </div>
              <div class="field-wrap">
                <input class="f-input" formControlName="adminEmail"
                  placeholder="Email Address **" type="email">
                <mat-icon class="f-icon">email</mat-icon>
                @if (f['adminEmail'].invalid && f['adminEmail'].touched) {
                  <span class="f-err">Valid email required</span>
                }
              </div>
              <div class="field-wrap">
                <input class="f-input" formControlName="phone"
                  placeholder="Phone Number **" type="tel">
                <mat-icon class="f-icon">phone</mat-icon>
                @if (f['phone'].invalid && f['phone'].touched) {
                  <span class="f-err">Required</span>
                }
              </div>
              <div class="field-wrap number-wrap">
                <label class="number-label">Number of {{ isAcademic() ? 'Students' : 'Users' }} **</label>
                <div class="number-inner">
                  <input class="f-input number-input" formControlName="numUsers"
                    type="number" min="1">
                  <mat-icon class="f-icon">group</mat-icon>
                </div>
                @if (f['numUsers'].invalid && f['numUsers'].touched) {
                  <span class="f-err">Min. 1</span>
                }
              </div>
            </div>
          </div>

          <!-- \u2500\u2500 Billing Cycle \u2500\u2500 -->
          <div class="form-section">
            <div class="section-header">
              <mat-icon>calendar_today</mat-icon>
              <span>Billing Cycle</span>
            </div>
            <div class="cycle-options">
              <!-- Monthly -->
              <label class="cycle-option" [class.selected]="form.get('billingCycle')?.value === 'monthly'"
                (click)="form.get('billingCycle')?.setValue('monthly')">
                <div class="cycle-radio" [class.active]="form.get('billingCycle')?.value === 'monthly'"></div>
                <div class="cycle-info">
                  <strong>Monthly</strong>
                  <p>Billed every month. Flexible cancellation.</p>
                </div>
                <span class="cycle-price ms-auto">
                  @if (selectedPlan()?.monthlyPrice !== null) {
                    \${{ selectedPlan()?.monthlyPrice }}/mo
                  } @else { Custom }
                </span>
              </label>

              <!-- Annual -->
              <label class="cycle-option" [class.selected]="form.get('billingCycle')?.value === 'annual'"
                (click)="form.get('billingCycle')?.setValue('annual')">
                <div class="cycle-radio" [class.active]="form.get('billingCycle')?.value === 'annual'"></div>
                <div class="cycle-info">
                  <strong>Annual</strong>
                  <p>Billed once a year.</p>
                </div>
                <div class="ms-auto d-flex align-items-center gap-2">
                  @if (!selectedPlan()?.onRequest) {
                    <span class="save-badge">Save 20%</span>
                    <span class="cycle-price">\${{ selectedPlan()?.annualPrice }}/mo</span>
                  } @else {
                    <span class="cycle-price">Custom</span>
                  }
                </div>
              </label>
            </div>
          </div>

          <!-- Submit -->
          <button type="submit" class="submit-btn w-100"
            [disabled]="form.invalid || isSubmitting()">
            @if (isSubmitting()) {
              Processing\u2026
            } @else {
              Continue to Payment &nbsp;\u2192
            }
          </button>

          <p class="legal-note">
            <mat-icon>lock</mat-icon>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>

        </form>
        }
      </div>

      <!-- Right column \u2014 Order Summary -->
      <div class="right-col">
        @if (selectedPlan()) {
        <div class="summary-card">
          <h5 class="summary-title">Order Summary</h5>
          <hr class="summary-hr">

          <!-- Plan header -->
          <div class="summary-plan-row">
            <div class="plan-icon-sm">
              <mat-icon>{{ selectedPlan()!.icon }}</mat-icon>
            </div>
            <div>
              <p class="plan-name">{{ selectedPlan()!.name }} Plan</p>
              <p class="plan-type">{{ orgType() === 'enterprise' ? 'Enterprise' : 'Academic' }}</p>
            </div>
          </div>
          <hr class="summary-hr">

          <!-- Pricing -->
          <div class="summary-price-row">
            <span class="sp-label">Base price</span>
            <span class="sp-value">
              @if (selectedPlan()?.onRequest) { Custom }
              @else if (billingCycleValue() === 'monthly') { \${{ selectedPlan()?.monthlyPrice }}/mo }
              @else { \${{ selectedPlan()?.annualPrice }}/mo }
            </span>
          </div>
          <div class="summary-price-row total">
            <span class="sp-label">Total</span>
            <span class="sp-value">
              @if (selectedPlan()?.onRequest) { Custom }
              @else if (billingCycleValue() === 'monthly') { \${{ selectedPlan()?.monthlyPrice }}/mo }
              @else { \${{ selectedPlan()?.annualPrice }}/mo }
            </span>
          </div>
          <hr class="summary-hr">

          <!-- Features list -->
          <p class="features-label">Included in this plan:</p>
          <ul class="features-list">
            @for (feat of selectedPlan()!.features.slice(0,5); track feat) {
              <li><mat-icon>check</mat-icon> {{ feat }}</li>
            }
          </ul>
          <hr class="summary-hr">

          <!-- Secure checkout -->
          <div class="secure-row">
            <mat-icon class="secure-icon">verified_user</mat-icon>
            <div>
              <p class="secure-title">Secure Checkout</p>
              <p class="secure-body">Payment is manually validated by our team. Your data is protected by 256-bit SSL encryption.</p>
            </div>
          </div>
        </div>
        }
      </div>

    </div>
  </div>

  <style>
    .checkout-page {
      min-height: 80vh;
      background: #f0f4fa;
      padding: 40px 16px;
    }
    .checkout-container {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 28px;
      align-items: start;
    }
    @media (max-width: 860px) {
      .checkout-container { grid-template-columns: 1fr; }
    }

    /* Page titles */
    .page-title { font-size: 1.6rem; font-weight: 800; margin-bottom: 4px; color: #1e293b; }
    .page-sub { color: #64748b; font-size: .9rem; margin-bottom: 24px; }

    /* Sections */
    .form-section {
      background: #fff;
      border-radius: 14px;
      padding: 22px 24px;
      margin-bottom: 20px;
      box-shadow: 0 1px 6px rgba(0,0,0,.06);
    }
    .section-header {
      display: flex; align-items: center; gap: 10px;
      font-weight: 700; font-size: .95rem; color: #1e293b; margin-bottom: 18px;
    }
    .section-header mat-icon { color: #2563eb; font-size: 20px; }

    /* Info banner */
    .info-banner {
      display: flex; align-items: flex-start; gap: 10px;
      background: #eff6ff; border-radius: 8px; padding: 10px 14px;
      font-size: .84rem; color: #1e40af; line-height: 1.5;
    }
    .info-banner mat-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; color: #2563eb; }

    /* Fields */
    .fields-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    @media (max-width: 600px) { .fields-grid { grid-template-columns: 1fr; } }
    .full-width { grid-column: 1 / -1; }
    .mt-3 { margin-top: 14px !important; }

    .field-wrap { position: relative; }
    .f-input {
      width: 100%; padding: 13px 44px 13px 16px;
      border: 1.5px solid #e2e8f0; border-radius: 50px;
      font-size: .875rem; color: #1e293b; background: #f8fafc;
      outline: none; box-sizing: border-box; transition: border-color .2s;
    }
    .f-input:focus { border-color: #2563eb; background: #fff; }
    .f-input::placeholder { color: #94a3b8; }
    .f-icon {
      position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
      color: #94a3b8; font-size: 18px; pointer-events: none;
    }
    .f-err { font-size: .73rem; color: #ef4444; padding-left: 14px; display: block; margin-top: 3px; }

    /* Number field */
    .number-wrap { position: relative; }
    .number-label {
      position: absolute; top: -8px; left: 16px; z-index: 2;
      font-size: .72rem; color: #64748b; background: #f8fafc;
      padding: 0 4px; pointer-events: none;
    }
    .number-inner { position: relative; }
    .number-input { padding-top: 18px !important; }

    /* Billing cycle */
    .cycle-options { display: flex; flex-direction: column; gap: 10px; }
    .cycle-option {
      display: flex; align-items: center; gap: 14px;
      background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px;
      padding: 14px 18px; cursor: pointer; transition: all .18s;
    }
    .cycle-option:hover { border-color: #93c5fd; }
    .cycle-option.selected { border-color: #2563eb; background: #eff6ff; }
    .cycle-radio {
      width: 18px; height: 18px; border-radius: 50%;
      border: 2px solid #cbd5e1; flex-shrink: 0; transition: all .18s;
    }
    .cycle-radio.active {
      border-color: #2563eb; background: #2563eb;
      box-shadow: inset 0 0 0 3px #fff;
    }
    .cycle-info strong { font-size: .875rem; color: #1e293b; display: block; }
    .cycle-info p { font-size: .78rem; color: #64748b; margin: 0; }
    .cycle-price { font-weight: 700; font-size: .875rem; color: #1e293b; white-space: nowrap; }
    .save-badge {
      background: #16a34a; color: #fff; font-size: .7rem; font-weight: 700;
      padding: 2px 9px; border-radius: 50px;
    }

    /* Submit */
    .submit-btn {
      display: block; width: 100%; padding: 15px;
      background: #64748b; color: #fff; border: none; border-radius: 10px;
      font-size: .95rem; font-weight: 700; cursor: pointer; transition: background .2s;
    }
    .submit-btn:not(:disabled):hover { background: #2563eb; }
    .submit-btn:disabled { opacity: .65; cursor: not-allowed; }
    .legal-note {
      display: flex; align-items: center; justify-content: center; gap: 6px;
      font-size: .75rem; color: #94a3b8; margin-top: 12px;
    }
    .legal-note mat-icon { font-size: 14px; }

    /* \u2500\u2500 Right: Summary card \u2500\u2500 */
    .summary-card {
      background: #fff; border-radius: 16px; padding: 22px;
      box-shadow: 0 2px 12px rgba(0,0,0,.07);
      position: sticky; top: 80px;
    }
    .summary-title { font-weight: 700; font-size: .95rem; color: #1e293b; margin-bottom: 14px; }
    .summary-hr { border: none; border-top: 1px solid #f1f5f9; margin: 12px 0; }

    .summary-plan-row { display: flex; align-items: center; gap: 12px; padding: 4px 0; }
    .plan-icon-sm {
      width: 40px; height: 40px; border-radius: 10px;
      background: #eff6ff; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .plan-icon-sm mat-icon { color: #2563eb; font-size: 20px; }
    .plan-name { font-weight: 700; font-size: .875rem; margin: 0; color: #1e293b; }
    .plan-type { font-size: .77rem; color: #64748b; margin: 0; }

    .summary-price-row {
      display: flex; justify-content: space-between; margin-bottom: 8px;
      font-size: .85rem;
    }
    .sp-label { color: #64748b; }
    .sp-value { color: #1e293b; }
    .total .sp-label, .total .sp-value { font-weight: 700; font-size: .9rem; color: #1e293b; }

    .features-label { font-size: .8rem; font-weight: 600; color: #64748b; margin-bottom: 8px; }
    .features-list { list-style: none; padding: 0; margin: 0; }
    .features-list li {
      display: flex; align-items: center; gap: 8px;
      font-size: .8rem; color: #374151; margin-bottom: 6px;
    }
    .features-list mat-icon { font-size: 15px; width: 15px; height: 15px; color: #16a34a; flex-shrink: 0; }

    .secure-row { display: flex; align-items: flex-start; gap: 10px; }
    .secure-icon { color: #16a34a; font-size: 20px; flex-shrink: 0; margin-top: 1px; }
    .secure-title { font-weight: 700; font-size: .82rem; color: #1e293b; margin: 0 0 3px; }
    .secure-body { font-size: .76rem; color: #64748b; margin: 0; line-height: 1.45; }

    .empty-state { text-align: center; padding: 60px 0; }
    .empty-state mat-icon { font-size: 56px; opacity: .25; display: block; margin: 0 auto 12px; }
    .link { color: #2563eb; cursor: pointer; }
    .d-flex { display: flex !important; }
    .align-items-center { align-items: center !important; }
    .gap-2 { gap: 8px !important; }
    .ms-auto { margin-left: auto !important; }
    .w-100 { width: 100% !important; }
  </style>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/billing/pages/checkout/checkout.component.ts", lineNumber: 411 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=checkout.component-BTDQRMLX.js.map
