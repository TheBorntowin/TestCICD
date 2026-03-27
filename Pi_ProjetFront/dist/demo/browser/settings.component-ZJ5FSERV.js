import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "./chunk-RG7V5CFX.js";
import {
  provideNativeDateAdapter
} from "./chunk-IJRF7KWR.js";
import "./chunk-O4BMA6W6.js";
import {
  register
} from "./chunk-S5VFQUTS.js";
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader
} from "./chunk-BPWI3AKS.js";
import {
  MatToolbarModule
} from "./chunk-SFUPPXOD.js";
import {
  MatTabsModule
} from "./chunk-TCWW663Y.js";
import {
  MatButtonToggleModule
} from "./chunk-A5PEKAIR.js";
import {
  MatMenuModule
} from "./chunk-SP2SPZAY.js";
import {
  MatSelectModule
} from "./chunk-MWLO4FO4.js";
import "./chunk-D63GK34V.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import "./chunk-N5FEMAXL.js";
import {
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
  MatProgressBar,
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
  MatCardImage,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton,
  MatMiniFabButton
} from "./chunk-ZLA4QS3A.js";
import {
  RouterLink
} from "./chunk-DYOMXT5J.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import {
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-XPQBAS5O.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
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
  Subject,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  takeUntil,
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
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/profile/settings.component.ts
var _c0 = (a0, a1) => ({ "theme-green": a0, "theme-orange": a1 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.swiftCode;
var _forTrack2 = ($index, $item) => $item.cardNumber;
function SettingsComponent_For_176_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 75)(2, "div", 33)(3, "div", 90);
    \u0275\u0275element(4, "img", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 35)(6, "h4", 92);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 93);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 94)(11, "p", 95)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " - ");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 8);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 33)(20, "button", 96)(21, "mat-icon");
    \u0275\u0275text(22, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 97);
    \u0275\u0275listener("click", function SettingsComponent_For_176_Template_button_click_23_listener() {
      const exp_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteNestedItem("experiences", exp_r2.id, "id"));
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const exp_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate(exp_r2.companyImage), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275interpolate(exp_r2.company));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", exp_r2.company, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", exp_r2.position, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(exp_r2.start);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", exp_r2.end, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r2.duration);
  }
}
function SettingsComponent_Conditional_227_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 74)(1, "mat-card-content")(2, "h3", 13);
    \u0275\u0275text(3, "Add New Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 75)(5, "div", 98)(6, "mat-form-field", 38)(7, "mat-label");
    \u0275\u0275text(8, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 98)(11, "mat-form-field", 38)(12, "mat-label");
    \u0275\u0275text(13, "Account Holder Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 98)(16, "mat-form-field", 38)(17, "mat-label");
    \u0275\u0275text(18, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 98)(21, "mat-form-field", 38)(22, "mat-label");
    \u0275\u0275text(23, "Branch");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 98)(26, "mat-form-field", 38)(27, "mat-label");
    \u0275\u0275text(28, "Swift Code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 103);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 104)(31, "div", 35)(32, "button", 105)(33, "mat-icon", 11);
    \u0275\u0275text(34, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Save");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 33)(37, "button", 106);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_227_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addBank());
    });
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
}
function SettingsComponent_For_229_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 107)(2, "p", 108);
    \u0275\u0275text(3, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 107)(7, "p", 108);
    \u0275\u0275text(8, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 109);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 110)(12, "p", 108);
    \u0275\u0275text(13, "Account Holder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 109);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 110)(17, "p", 108);
    \u0275\u0275text(18, "Branch Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 109);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 110)(22, "p", 108);
    \u0275\u0275text(23, "Swift Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 109);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 33)(27, "button", 96)(28, "mat-icon");
    \u0275\u0275text(29, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "button", 111)(31, "mat-icon");
    \u0275\u0275text(32, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const bank_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bank_r5.bank);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bank_r5.accountNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bank_r5.accountHolder);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bank_r5.branch);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bank_r5.swiftCode);
  }
}
function SettingsComponent_Conditional_239_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 74)(1, "mat-card-content")(2, "h3", 13);
    \u0275\u0275text(3, "Add New Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 75)(5, "div", 98)(6, "mat-form-field", 38)(7, "mat-label");
    \u0275\u0275text(8, "Card Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 98)(11, "mat-form-field", 38)(12, "mat-label");
    \u0275\u0275text(13, "Card Holder Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 113);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 114)(16, "mat-form-field", 38)(17, "mat-label");
    \u0275\u0275text(18, "Expiry Month");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 115);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 114)(21, "mat-form-field", 38)(22, "mat-label");
    \u0275\u0275text(23, "Expiry Year");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 114)(26, "mat-form-field", 38)(27, "mat-label");
    \u0275\u0275text(28, "CVV");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 117);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 104)(31, "div", 35)(32, "button", 105)(33, "mat-icon", 11);
    \u0275\u0275text(34, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Save");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 33)(37, "button", 106);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_239_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addcard());
    });
    \u0275\u0275text(38, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
}
function SettingsComponent_For_242_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "swiper-slide", 77)(1, "mat-card", 118)(2, "mat-card-content")(3, "div", 119)(4, "div", 33)(5, "div", 120)(6, "mat-icon", 11);
    \u0275\u0275text(7, "diamond");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 121)(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "h3", 122);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 123);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 49)(16, "div", 35)(17, "button", 96)(18, "mat-icon");
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 94)(21, "button", 97);
    \u0275\u0275listener("click", function SettingsComponent_For_242_Template_button_click_21_listener() {
      const card_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteNestedItem("cards", card_r8.cardNumber, "cardNumber"));
    });
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "delete");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const card_r8 = ctx.$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(card_r8.cardBank);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r8.cardNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Limit: ", card_r8.cardLimit);
  }
}
function SettingsComponent_For_270_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 124)(2, "p", 108);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 124)(7, "p", 108);
    \u0275\u0275text(8, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 109);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 125)(12, "p", 108);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 109)(15, "span", 126);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 73)(18, "button", 127);
    \u0275\u0275listener("click", function SettingsComponent_For_270_Template_button_click_18_listener() {
      const application_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteNestedItem("applications", application_r10.id, "id"));
    });
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 128)(22, "mat-icon");
    \u0275\u0275text(23, "edit");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const application_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Application #", application_r10.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(application_r10.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(application_r10.license);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c0, application_r10.status === "Active", application_r10.status === "Inactive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", application_r10.status, " ");
  }
}
function SettingsComponent_For_281_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 124)(2, "p", 108);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 124)(7, "p", 108);
    \u0275\u0275text(8, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 109);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 125)(12, "p", 108);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 109)(15, "span", 126);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 73)(18, "button", 127);
    \u0275\u0275listener("click", function SettingsComponent_For_281_Template_button_click_18_listener() {
      const device_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteNestedItem("devices", device_r12.id, "id"));
    });
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 128)(22, "mat-icon");
    \u0275\u0275text(23, "edit");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const device_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Device #", device_r12.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(device_r12.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(device_r12.quantity);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c0, device_r12.status === "Active", device_r12.status === "Inactive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", device_r12.status, " ");
  }
}
function SettingsComponent_Conditional_316_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 129);
    \u0275\u0275text(1, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Saving... ");
  }
}
function SettingsComponent_Conditional_317_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 129);
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Update ");
  }
}
function SettingsComponent_Conditional_318_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 89);
  }
}
register();
var SettingsComponent = class _SettingsComponent {
  constructor(fb) {
    this.fb = fb;
    this.value = "";
    this.addcards = signal(false, ...ngDevMode ? [{ debugName: "addcards" }] : (
      /* istanbul ignore next */
      []
    ));
    this.addbanks = signal(false, ...ngDevMode ? [{ debugName: "addbanks" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isSaving = signal(false, ...ngDevMode ? [{ debugName: "isSaving" }] : (
      /* istanbul ignore next */
      []
    ));
    this.saveTimeoutId = null;
    this.destroy$ = new Subject();
    this.profileDetails = signal({
      firstName: "Admin",
      lastName: "UIUX",
      email: "adminuiux.public@invcorp.com",
      designation: "Lead UIUX designer",
      education: "Higher School Study",
      degree: "B. Tech. in Information Technology",
      softSkill: "English Language",
      techSkill: "Python",
      userId: "INV-12345",
      dob: "05/09/1988",
      memberSince: "2021",
      status: "Active",
      hiringType: "Full Time",
      phoneNumber: "(555) 123-4567",
      address1: "143 Material Way",
      address2: "Suite 200",
      city: "San Francisco",
      state: "CA",
      zipCode: "94107",
      country: "US",
      paymentMethod: "testadminuiux@testmail.com",
      linkedInUrl: "https://linkedin.com/company/adminuiux",
      instaUrl: "https://www.instagram.com/adminuiux",
      googleUrl: "https://www.instagram.com/adminuiux",
      applications: [
        {
          id: "1",
          title: "Adobe Creative Cloud",
          license: "Team",
          status: "Active"
        },
        {
          id: "2",
          title: "Slack",
          license: "Team",
          status: "Active"
        },
        {
          id: "3",
          title: "Bolt.io",
          license: "1 User",
          status: "Inactive"
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
      banks: [
        {
          bank: "Adminuiux Bank of Earth",
          accountNumber: "00-001-007-1431548631243",
          accountHolder: "AdminUIUX",
          branch: "Earth",
          swiftCode: "1159201"
        }
      ],
      experiences: [
        {
          id: "1",
          company: "InstaModule",
          companyImage: "assets/img/document3.jpg",
          start: "08/2021",
          end: "12/2023",
          duration: "2 year 4 months",
          position: "Jr. Developer"
        },
        {
          id: "2",
          company: "EnergeticInfo",
          companyImage: "assets/img/document2.jpg",
          start: "1/2024",
          end: "11/2025",
          duration: "11 months",
          position: "Sr. Developer"
        },
        {
          id: "3",
          company: "TregicMegicGo",
          companyImage: "assets/img/document1.jpg",
          start: "12/2025",
          end: "*",
          duration: "Working now",
          position: "Team Lead"
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
    }, ...ngDevMode ? [{ debugName: "profileDetails" }] : (
      /* istanbul ignore next */
      []
    ));
    this.profile = signal(this.profileDetails(), ...ngDevMode ? [{ debugName: "profile" }] : (
      /* istanbul ignore next */
      []
    ));
    const profile = this.profileDetails();
    this.profileForm = this.fb.group({
      firstName: [profile.firstName, Validators.required],
      lastName: [profile.lastName, Validators.required],
      designation: [profile.designation],
      dob: [profile.dob],
      email: [profile.email, [Validators.required, Validators.email]],
      phoneNumber: [profile.phoneNumber],
      address1: [profile.address1],
      address2: [profile.address2],
      city: [profile.city],
      state: [profile.state],
      zipCode: [profile.zipCode],
      country: [profile.country],
      education: [profile.education],
      degree: [profile.degree],
      techSkill: [profile.techSkill],
      softSkill: [profile.softSkill],
      paymentMethod: [profile.paymentMethod],
      linkedInUrl: [profile.linkedInUrl],
      googleUrl: [profile.googleUrl],
      instaUrl: [profile.instaUrl]
    });
  }
  ngOnInit() {
    this.profileForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((formValue) => {
      this.profile.update((current) => __spreadValues(__spreadValues({}, current), formValue));
    });
  }
  deleteNestedItem(collectionKey, itemId, idKey) {
    this.profile.update((currentProfile) => {
      const updatedCollection = currentProfile[collectionKey].filter((item) => item[idKey] !== itemId);
      return __spreadProps(__spreadValues({}, currentProfile), {
        [collectionKey]: updatedCollection
      });
    });
    console.log(`Deleted item from ${collectionKey}: ${itemId}`);
  }
  handleSave() {
    this.isSaving.set(true);
    console.log("Saving Profile Data:", this.profile());
    if (this.saveTimeoutId !== null) {
      clearTimeout(this.saveTimeoutId);
    }
    this.saveTimeoutId = setTimeout(() => {
      this.isSaving.set(false);
      console.log("Profile saved successfully!");
      this.saveTimeoutId = null;
    }, 1500);
  }
  ngOnDestroy() {
    if (this.saveTimeoutId !== null) {
      clearTimeout(this.saveTimeoutId);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
  // add card
  addcard() {
    this.addcards.set(!this.addcards());
  }
  // add bank
  addBank() {
    this.addbanks.set(!this.addbanks());
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], features: [\u0275\u0275ProvidersFeature([provideNativeDateAdapter()])], decls: 319, vars: 17, consts: [["picker", ""], ["picker2", ""], ["picker3", ""], [1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "text-secondary", "small"], [1, "col-auto", "mb-3", "mb-xl-0"], ["routerLink", "/app/profile", "matButton", "filled"], [1, "material-icons-outlined"], [1, "container"], [1, "mb-3", "mb-lg-4"], ["mat-card-image", "", 1, "coverimg", "height-160", "w-100", "z-index-0", "overflow-hidden"], [1, "position-absolute", "top-0", "end-0", "z-index-1", "m-3"], ["matButton", "filled", "onclick", "this.nextElementSibling.click()"], ["type", "file", 1, "d-none"], ["src", "assets/img/background1.jpg", "alt", "", 1, "mw-100"], [1, "row", "gx-3", "gx-lg-4", "justify-content-center", "position-relative", "z-index-1"], [1, "col-12", "col-sm-auto", "position-relative", "pt-3", "text-center"], [1, "width-160", "position-relative", "d-block", "mx-auto", "mb-3", 2, "margin-top", "-100px"], [1, "position-absolute", "bottom-0", "end-0", "z-index-1"], ["matMiniFab", "", "onclick", "this.nextElementSibling.click()"], [1, "avatar", "avatar-160", "coverimg", "rounded-circle", "shadow-md", "border-3", "border-light", "position-relative"], ["src", "assets/img/user-6.jpg", "alt", ""], [1, "col", "pt-3"], [1, "align-middle"], [1, "opacity-75"], [3, "formGroup"], [1, "mb-3", "mb-lg-4", "d-block"], ["expanded", "", 1, "mat-elevation-z2", "section-panel"], [1, "row", "gx-3", "align-items-center", "my-3"], [1, "col-auto"], [1, "material-icons-outlined", "align-middle", "text-theme"], [1, "col"], [1, "row", "gx-3", "gx-lg-4", "mt-3", "mt-lg-4"], [1, "col-12", "col-md-6", "col-lg-4", "col-xxl-3"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "firstName"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "formControlName", "designation"], ["matInput", "", "formControlName", "dob", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "formControlName", "phoneNumber"], [1, "col", "mb-3", "mb-lg-4"], [1, "col-auto", "mb-3", "mb-lg-4"], ["matButton", "", "color", "primary", 3, "click"], [1, "row", "gx-3", "gx-lg-4"], ["matInput", "", "formControlName", "address1"], ["matInput", "", "formControlName", "address2"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "state"], ["matInput", "", "formControlName", "zipCode"], ["matInput", "", "formControlName", "country"], [1, "mat-elevation-z2", "section-panel"], [1, "material-symbols-outlined", "text-theme"], ["matInput", "", "disabled", "", 3, "value"], ["matInput", "", "formControlName", "education"], ["matInput", "", "formControlName", "degree"], [1, "col-12", "col-md-12", "col-lg-6"], ["matInput", "", "rows", "2", "formControlName", "techSkill"], ["matInput", "", "rows", "2", "formControlName", "softSkill"], [1, "activity"], [1, "row", "gx-3", "gx-lg-4", "align-items-center", "mt-3", "mt-lg-4"], ["matInput", ""], [1, "col-12", "col-md-6", "col-lg-4", "col-xl"], ["matInput", "", 3, "matDatepicker"], [1, "col-12", "col-md-auto"], ["matButton", "", "color", "primary", 1, "mb-3"], [1, "row", "gx-3", "align-items-center", "mt-3"], [1, "col", "mb-3"], [1, "col-auto", "mb-3"], [1, "bg-light-theme", "mb-3", "mb-lg-4"], [1, "row", "gx-3"], ["slides-per-view", "auto", "space-between", "20px", "autoplay", "true", 1, "swiper", "swipernav", "overflow-visible", "mb-3", "mb-lg-4"], [1, "width-260"], ["matInput", "", "formControlName", "paymentMethod"], [1, "row", "gx-3", "gx-lg-4", "align-items-center", "mt-3"], ["matButton", "", "color", "primary"], [1, "row", "gx-3", "gx-lg-4", "mt-3"], [1, "col-12", "col-md-6", "col-lg-4"], ["matInput", "", "formControlName", "linkedInUrl"], ["matPrefix", ""], ["matInput", "", "formControlName", "googleUrl"], ["matInput", "", "formControlName", "instaUrl"], [1, "mb-3"], ["matButton", "filled", 3, "click", "disabled"], ["mode", "indeterminate", 1, "w-100", "mb-3"], [1, "avatar", "avatar-40", "rounded-circle", "bg-light-theme", "text-theme"], [3, "src", "alt"], [1, "mb-0"], [1, "text-secondary"], [1, "col-auto", "text-end"], [1, "small", "mb-0"], ["matIconButton", "", "color", "accent"], ["matIconButton", "", "color", "warn", 3, "click"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3"], ["matInput", "", "placeholder", "Bank Name"], ["matInput", "", "placeholder", "Account Holder Name"], ["matInput", "", "placeholder", "Account Number"], ["matInput", "", "placeholder", "Branch"], ["matInput", "", "placeholder", "Swift Code", "value", "123"], [1, "row", "gx-0"], ["matButton", "filled"], ["matButton", "", 1, "theme-red", 3, "click"], [1, "col-12", "col-lg-6", "col-xl-3", "mb-3", "mb-lg-4"], [1, "text-secondary", "small", "mb-1"], [1, ""], [1, "col-12", "col-md-6", "col-xl", "mb-3", "mb-lg-4"], ["matIconButton", "", "color", "warn"], ["matInput", "", "placeholder", "Card Number"], ["matInput", "", "placeholder", "Card Holder Name"], [1, "col-12", "col-md-6", "col-lg"], ["matInput", "", "placeholder", "Expiry Month"], ["matInput", "", "placeholder", "Expiry Year"], ["matInput", "", "placeholder", "CVV", "value", "123"], ["appearance", "outlined"], [1, "row", "align-items-center"], [1, "avatar", "avatar-30", "rounded", "bg-theme", "text-white"], [1, "col", "text-end"], [1, "mt-3", "mb-0", "text-theme"], [1, "small"], [1, "col-12", "col-lg-12", "col-xl-4", "mb-3"], [1, "col-12", "col-lg-12", "col-xl", "mb-3"], [1, "badge", "badge-light", 3, "ngClass"], ["matIconButton", "", 3, "click"], ["matIconButton", ""], [1, "align-middle", "me-1"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "mat-card", 4)(2, "div", 5)(3, "div", 6)(4, "h3", 7);
        \u0275\u0275text(5, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 8);
        \u0275\u0275text(7, "Keep your profile updated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 9)(9, "button", 10)(10, "mat-icon", 11);
        \u0275\u0275text(11, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Update");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(13, "div", 12)(14, "mat-card", 13)(15, "figure", 14)(16, "div", 15)(17, "button", 16)(18, "mat-icon", 11);
        \u0275\u0275text(19, "photo_camera");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " Change Cover");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "img", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-card-content")(24, "div", 19)(25, "div", 20)(26, "div", 21)(27, "div", 22)(28, "button", 23)(29, "mat-icon", 11);
        \u0275\u0275text(30, "photo_camera");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(31, "input", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "figure", 24);
        \u0275\u0275element(33, "img", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 26)(35, "h2", 7)(36, "span", 27);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "p", 28);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(40, "form", 29)(41, "mat-accordion", 30)(42, "mat-expansion-panel", 31)(43, "mat-expansion-panel-header")(44, "div", 32)(45, "div", 33)(46, "mat-icon", 34);
        \u0275\u0275text(47, "account_circle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 35)(49, "h3");
        \u0275\u0275text(50, "Personal");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div", 36)(52, "div", 37)(53, "mat-form-field", 38)(54, "mat-label");
        \u0275\u0275text(55, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(56, "input", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 37)(58, "mat-form-field", 38)(59, "mat-label");
        \u0275\u0275text(60, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(61, "input", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 37)(63, "mat-form-field", 38)(64, "mat-label");
        \u0275\u0275text(65, "Designation");
        \u0275\u0275elementEnd();
        \u0275\u0275element(66, "input", 41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 37)(68, "mat-form-field", 38)(69, "mat-label");
        \u0275\u0275text(70, "Date of Birth");
        \u0275\u0275elementEnd();
        \u0275\u0275element(71, "input", 42)(72, "mat-datepicker-toggle", 43)(73, "mat-datepicker", null, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 37)(76, "mat-form-field", 38)(77, "mat-label");
        \u0275\u0275text(78, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(79, "input", 44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 37)(81, "mat-form-field", 38)(82, "mat-label");
        \u0275\u0275text(83, "Phone Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(84, "input", 45);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(85, "div", 5)(86, "div", 46)(87, "h4");
        \u0275\u0275text(88, "Address");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 47)(90, "button", 48);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_90_listener() {
          return ctx.addBank();
        });
        \u0275\u0275elementStart(91, "mat-icon");
        \u0275\u0275text(92, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, " Bank Account");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "div", 49)(95, "div", 37)(96, "mat-form-field", 38)(97, "mat-label");
        \u0275\u0275text(98, "Address Line 1");
        \u0275\u0275elementEnd();
        \u0275\u0275element(99, "input", 50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div", 37)(101, "mat-form-field", 38)(102, "mat-label");
        \u0275\u0275text(103, "Address Line 2");
        \u0275\u0275elementEnd();
        \u0275\u0275element(104, "input", 51);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 37)(106, "mat-form-field", 38)(107, "mat-label");
        \u0275\u0275text(108, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275element(109, "input", 52);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 37)(111, "mat-form-field", 38)(112, "mat-label");
        \u0275\u0275text(113, "State / Province");
        \u0275\u0275elementEnd();
        \u0275\u0275element(114, "input", 53);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(115, "div", 37)(116, "mat-form-field", 38)(117, "mat-label");
        \u0275\u0275text(118, "ZIP Code");
        \u0275\u0275elementEnd();
        \u0275\u0275element(119, "input", 54);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(120, "div", 37)(121, "mat-form-field", 38)(122, "mat-label");
        \u0275\u0275text(123, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275element(124, "input", 55);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(125, "mat-expansion-panel", 56)(126, "mat-expansion-panel-header")(127, "div", 5)(128, "div", 33)(129, "span", 57);
        \u0275\u0275text(130, " badge ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "div", 35)(132, "h3");
        \u0275\u0275text(133, "Professional & Skills");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(134, "div", 36)(135, "div", 37)(136, "mat-form-field", 38)(137, "mat-label");
        \u0275\u0275text(138, "Hiring Type");
        \u0275\u0275elementEnd();
        \u0275\u0275element(139, "input", 58);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 37)(141, "mat-form-field", 38)(142, "mat-label");
        \u0275\u0275text(143, "Member Since");
        \u0275\u0275elementEnd();
        \u0275\u0275element(144, "input", 58);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "div", 37)(146, "mat-form-field", 38)(147, "mat-label");
        \u0275\u0275text(148, "Education");
        \u0275\u0275elementEnd();
        \u0275\u0275element(149, "input", 59);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "div", 37)(151, "mat-form-field", 38)(152, "mat-label");
        \u0275\u0275text(153, "Degree / Major");
        \u0275\u0275elementEnd();
        \u0275\u0275element(154, "input", 60);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(155, "div", 61)(156, "mat-form-field", 38)(157, "mat-label");
        \u0275\u0275text(158, "Technical Skills (Comma Separated)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(159, "textarea", 62);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "div", 61)(161, "mat-form-field", 38)(162, "mat-label");
        \u0275\u0275text(163, "Soft Skills (Comma Separated)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(164, "textarea", 63);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(165, "mat-expansion-panel", 56)(166, "mat-expansion-panel-header")(167, "div", 5)(168, "div", 33)(169, "mat-icon", 34);
        \u0275\u0275text(170, "history_toggle_off");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(171, "div", 35)(172, "h3");
        \u0275\u0275text(173, "Work Experience");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(174, "ul", 64);
        \u0275\u0275repeaterCreate(175, SettingsComponent_For_176_Template, 26, 9, "li", null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "div", 65)(178, "div", 37)(179, "mat-form-field", 38)(180, "mat-label");
        \u0275\u0275text(181, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275element(182, "input", 66);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(183, "div", 37)(184, "mat-form-field", 38)(185, "mat-label");
        \u0275\u0275text(186, "Job Title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(187, "input", 66);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(188, "div", 67)(189, "mat-form-field", 38)(190, "mat-label");
        \u0275\u0275text(191, "Start Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(192, "input", 68)(193, "mat-datepicker-toggle", 43)(194, "mat-datepicker", null, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(196, "div", 67)(197, "mat-form-field", 38)(198, "mat-label");
        \u0275\u0275text(199, "End Date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(200, "input", 68)(201, "mat-datepicker-toggle", 43)(202, "mat-datepicker", null, 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(204, "div", 69)(205, "button", 70)(206, "mat-icon");
        \u0275\u0275text(207, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(208, " Experience ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(209, "mat-expansion-panel", 56)(210, "mat-expansion-panel-header")(211, "div", 5)(212, "div", 33)(213, "mat-icon", 34);
        \u0275\u0275text(214, "account_balance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(215, "div", 35)(216, "h3");
        \u0275\u0275text(217, "Financial & Payment");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(218, "div", 71)(219, "div", 72)(220, "h4");
        \u0275\u0275text(221, "Bank Accounts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(222, "div", 73)(223, "button", 48);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_223_listener() {
          return ctx.addBank();
        });
        \u0275\u0275elementStart(224, "mat-icon");
        \u0275\u0275text(225, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(226, " Bank Account");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(227, SettingsComponent_Conditional_227_Template, 39, 0, "mat-card", 74);
        \u0275\u0275repeaterCreate(228, SettingsComponent_For_229_Template, 33, 5, "div", 75, _forTrack1);
        \u0275\u0275elementStart(230, "div", 5)(231, "div", 72)(232, "h4");
        \u0275\u0275text(233, "My Cards");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(234, "div", 73)(235, "button", 48);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_235_listener() {
          return ctx.addcard();
        });
        \u0275\u0275elementStart(236, "mat-icon");
        \u0275\u0275text(237, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(238, " Card");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(239, SettingsComponent_Conditional_239_Template, 39, 0, "mat-card", 74);
        \u0275\u0275elementStart(240, "swiper-container", 76);
        \u0275\u0275repeaterCreate(241, SettingsComponent_For_242_Template, 24, 3, "swiper-slide", 77, _forTrack2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(243, "div", 5)(244, "div", 46)(245, "h4");
        \u0275\u0275text(246, "PayPal ID");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(247, "mat-form-field", 38)(248, "mat-label");
        \u0275\u0275text(249, "PayPal");
        \u0275\u0275elementEnd();
        \u0275\u0275element(250, "input", 78);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(251, "mat-expansion-panel", 56)(252, "mat-expansion-panel-header")(253, "div", 5)(254, "div", 33)(255, "span", 57);
        \u0275\u0275text(256, " devices ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(257, "div", 35)(258, "h3");
        \u0275\u0275text(259, "Devices & Applications");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(260, "div", 79)(261, "div", 72)(262, "h4");
        \u0275\u0275text(263, "Applications");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(264, "div", 73)(265, "button", 80)(266, "mat-icon");
        \u0275\u0275text(267, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(268, " Application");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(269, SettingsComponent_For_270_Template, 24, 8, "div", 75, _forTrack0);
        \u0275\u0275elementStart(271, "div", 79)(272, "div", 72)(273, "h4");
        \u0275\u0275text(274, "Devices");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(275, "div", 73)(276, "button", 80)(277, "mat-icon");
        \u0275\u0275text(278, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(279, " Device");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(280, SettingsComponent_For_281_Template, 24, 8, "div", 75, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(282, "mat-expansion-panel", 56)(283, "mat-expansion-panel-header")(284, "div", 5)(285, "div", 33)(286, "span", 57);
        \u0275\u0275text(287, " share ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(288, "div", 35)(289, "h3");
        \u0275\u0275text(290, "Social & Online Presence");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(291, "div", 81)(292, "div", 82)(293, "mat-form-field", 38)(294, "mat-label");
        \u0275\u0275text(295, "LinkedIn URL");
        \u0275\u0275elementEnd();
        \u0275\u0275element(296, "input", 83);
        \u0275\u0275elementStart(297, "mat-icon", 84);
        \u0275\u0275text(298, "linkedin");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(299, "div", 82)(300, "mat-form-field", 38)(301, "mat-label");
        \u0275\u0275text(302, "Google URL (Personal Site/Blog)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(303, "input", 85);
        \u0275\u0275elementStart(304, "mat-icon", 84);
        \u0275\u0275text(305, "link");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(306, "div", 82)(307, "mat-form-field", 38)(308, "mat-label");
        \u0275\u0275text(309, "Instagram URL");
        \u0275\u0275elementEnd();
        \u0275\u0275element(310, "input", 86);
        \u0275\u0275elementStart(311, "mat-icon", 84);
        \u0275\u0275text(312, "photo_camera");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(313, "div", 87)(314, "button", 88);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_314_listener() {
          return ctx.handleSave();
        });
        \u0275\u0275elementStart(315, "div");
        \u0275\u0275conditionalCreate(316, SettingsComponent_Conditional_316_Template, 3, 0)(317, SettingsComponent_Conditional_317_Template, 3, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(318, SettingsComponent_Conditional_318_Template, 1, 0, "mat-progress-bar", 89);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const picker_r13 = \u0275\u0275reference(74);
        const picker2_r14 = \u0275\u0275reference(195);
        const picker3_r15 = \u0275\u0275reference(203);
        \u0275\u0275advance(37);
        \u0275\u0275textInterpolate2("", ctx.profile().firstName, " ", ctx.profile().lastName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.profile().designation);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.profileForm);
        \u0275\u0275advance(31);
        \u0275\u0275property("matDatepicker", picker_r13);
        \u0275\u0275advance();
        \u0275\u0275property("for", picker_r13);
        \u0275\u0275advance(67);
        \u0275\u0275property("value", ctx.profile().hiringType);
        \u0275\u0275advance(5);
        \u0275\u0275property("value", ctx.profile().memberSince);
        \u0275\u0275advance(31);
        \u0275\u0275repeater(ctx.profile().experiences);
        \u0275\u0275advance(17);
        \u0275\u0275property("matDatepicker", picker2_r14);
        \u0275\u0275advance();
        \u0275\u0275property("for", picker2_r14);
        \u0275\u0275advance(7);
        \u0275\u0275property("matDatepicker", picker3_r15);
        \u0275\u0275advance();
        \u0275\u0275property("for", picker3_r15);
        \u0275\u0275advance(26);
        \u0275\u0275conditional(ctx.addbanks() ? 227 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.profile().banks);
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.addcards() ? 239 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.profile().cards);
        \u0275\u0275advance(28);
        \u0275\u0275repeater(ctx.profile().applications);
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.profile().devices);
        \u0275\u0275advance(34);
        \u0275\u0275property("disabled", ctx.isSaving());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isSaving() ? 316 : 317);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isSaving() ? 318 : -1);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatListModule, MatProgressBarModule, MatProgressBar, MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatTabsModule, MatDividerModule, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatButtonToggleModule, MatMenuModule, MatSelectModule, MatFormField, MatLabel, MatPrefix, MatSuffix, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormFieldModule, MatCardModule, MatCard, MatCardContent, MatCardImage, MatToolbarModule, MatButtonModule, MatButton, MatMiniFabButton, MatIconButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule, RouterLink, ReactiveFormsModule, MatListModule, MatProgressBarModule, MatExpansionModule, MatTabsModule, MatDividerModule, MatDatepickerModule, MatButtonToggleModule, MatMenuModule, MatSelectModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule, MatButtonModule], providers: [provideNativeDateAdapter()], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Settings</h3>
                        <p class="text-secondary small">Keep your profile updated</p>
                    </div>

                    <div class="col-auto mb-3 mb-xl-0">
                        <button routerLink="/app/profile" matButton="filled"><mat-icon class="material-icons-outlined">save</mat-icon> Update</button>
                    </div>
                </div>
            </mat-card>
        </div>

        <div class="container">
            <mat-card class="mb-3 mb-lg-4">
                <figure mat-card-image class="coverimg height-160 w-100 z-index-0 overflow-hidden">
                    <div class="position-absolute top-0 end-0 z-index-1 m-3">
                        <button matButton="filled" onclick="this.nextElementSibling.click()"><mat-icon class="material-icons-outlined">photo_camera</mat-icon> Change Cover</button>
                        <input type="file" class="d-none" />
                    </div>
                    <img src="assets/img/background1.jpg" class="mw-100" alt="" />
                </figure>
                <mat-card-content>
                    <div class="row gx-3 gx-lg-4 justify-content-center position-relative z-index-1">
                        <div class="col-12 col-sm-auto position-relative pt-3 text-center">
                            <div class="width-160 position-relative d-block mx-auto mb-3" style="margin-top:-100px">
                                <div class="position-absolute bottom-0 end-0 z-index-1">
                                    <button matMiniFab onclick="this.nextElementSibling.click()"><mat-icon class="material-icons-outlined">photo_camera</mat-icon></button>
                                    <input type="file" class="d-none" />
                                </div>
                                <figure class="avatar avatar-160 coverimg rounded-circle shadow-md border-3 border-light position-relative">
                                    <img src="assets/img/user-6.jpg" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div class="col pt-3">
                            <h2 class="mb-1">
                                <span class="align-middle">{{ profile().firstName }} {{ profile().lastName }}</span>
                            </h2>
                            <p class="opacity-75">{{ profile().designation }}</p>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>
            <form [formGroup]="profileForm">
                <mat-accordion class="mb-3 mb-lg-4 d-block">
                    <!-- Personal & Contact Information -->
                    <mat-expansion-panel expanded class="mat-elevation-z2 section-panel">
                        <mat-expansion-panel-header>
                            <div class="row gx-3 align-items-center my-3">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined align-middle text-theme">account_circle</mat-icon>
                                </div>
                                <div class="col">
                                    <h3>Personal</h3>
                                </div>
                            </div>
                        </mat-expansion-panel-header>

                        <div class="row gx-3 gx-lg-4 mt-3 mt-lg-4">
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>First Name</mat-label>
                                    <input matInput formControlName="firstName" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Last Name</mat-label>
                                    <input matInput formControlName="lastName" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Designation</mat-label>
                                    <input matInput formControlName="designation" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Date of Birth</mat-label>
                                    <input matInput [matDatepicker]="picker" formControlName="dob" />
                                    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
                                    <mat-datepicker #picker></mat-datepicker>
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Email Address</mat-label>
                                    <input matInput type="email" formControlName="email" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Phone Number</mat-label>
                                    <input matInput formControlName="phoneNumber" />
                                </mat-form-field>
                            </div>
                        </div>
                        <div class="row gx-3 align-items-center">
                            <div class="col mb-3 mb-lg-4">
                                <h4>Address</h4>
                            </div>
                            <div class="col-auto mb-3 mb-lg-4">
                                <button matButton color="primary" (click)="addBank()"><mat-icon>add</mat-icon> Bank Account</button>
                            </div>
                        </div>
                        <div class="row gx-3 gx-lg-4">
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Address Line 1</mat-label>
                                    <input matInput formControlName="address1" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Address Line 2</mat-label>
                                    <input matInput formControlName="address2" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>City</mat-label>
                                    <input matInput formControlName="city" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>State / Province</mat-label>
                                    <input matInput formControlName="state" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>ZIP Code</mat-label>
                                    <input matInput formControlName="zipCode" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Country</mat-label>
                                    <input matInput formControlName="country" />
                                </mat-form-field>
                            </div>
                        </div>
                    </mat-expansion-panel>

                    <!-- Professional Details & Skills -->
                    <mat-expansion-panel class="mat-elevation-z2 section-panel">
                        <mat-expansion-panel-header>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto">
                                    <span class="material-symbols-outlined text-theme"> badge </span>
                                </div>
                                <div class="col">
                                    <h3>Professional & Skills</h3>
                                </div>
                            </div>
                        </mat-expansion-panel-header>

                        <div class="row gx-3 gx-lg-4 mt-3 mt-lg-4">
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Hiring Type</mat-label>
                                    <input matInput [value]="profile().hiringType" disabled />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Member Since</mat-label>
                                    <input matInput [value]="profile().memberSince" disabled />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Education</mat-label>
                                    <input matInput formControlName="education" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Degree / Major</mat-label>
                                    <input matInput formControlName="degree" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-12 col-lg-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Technical Skills (Comma Separated)</mat-label>
                                    <textarea matInput rows="2" formControlName="techSkill"></textarea>
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-12 col-lg-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Soft Skills (Comma Separated)</mat-label>
                                    <textarea matInput rows="2" formControlName="softSkill"></textarea>
                                </mat-form-field>
                            </div>
                        </div>
                    </mat-expansion-panel>

                    <!-- Work Experience -->
                    <mat-expansion-panel class="mat-elevation-z2 section-panel">
                        <mat-expansion-panel-header>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined align-middle text-theme">history_toggle_off</mat-icon>
                                </div>
                                <div class="col">
                                    <h3>Work Experience</h3>
                                </div>
                            </div>
                        </mat-expansion-panel-header>
                        <ul class="activity">
                            @for (exp of profile().experiences; track exp.id) {
                            <li>
                                <div class="row gx-3">
                                    <!-- icon -->
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 rounded-circle bg-light-theme text-theme">
                                            <img src="{{ exp.companyImage }}" alt="{{ exp.company }}" />
                                        </div>
                                    </div>

                                    <!-- Activity Content -->
                                    <div class="col">
                                        <h4 class="mb-0">
                                            {{ exp.company }}
                                        </h4>
                                        <p class="text-secondary">
                                            {{ exp.position }}
                                        </p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <p class="small mb-0">
                                            <span>{{ exp.start }}</span> - <span>{{ exp.end }} </span>
                                        </p>
                                        <p class="text-secondary small">{{ exp.duration }}</p>
                                    </div>
                                    <div class="col-auto">
                                        <button matIconButton color="accent"><mat-icon>edit</mat-icon></button>
                                        <button matIconButton color="warn" (click)="deleteNestedItem('experiences', exp.id, 'id')"><mat-icon>delete</mat-icon></button>
                                    </div>
                                </div>
                            </li>

                            }
                        </ul>

                        <!-- add experience -->
                        <div class="row gx-3 gx-lg-4 align-items-center mt-3 mt-lg-4">
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Company</mat-label>
                                    <input matInput />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Job Title</mat-label>
                                    <input matInput />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xl">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Start Date</mat-label>
                                    <input matInput [matDatepicker]="picker2" />
                                    <mat-datepicker-toggle matIconSuffix [for]="picker2"></mat-datepicker-toggle>
                                    <mat-datepicker #picker2></mat-datepicker>
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xl">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>End Date</mat-label>
                                    <input matInput [matDatepicker]="picker3" />
                                    <mat-datepicker-toggle matIconSuffix [for]="picker3"></mat-datepicker-toggle>
                                    <mat-datepicker #picker3></mat-datepicker>
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-auto">
                                <button matButton color="primary" class="mb-3">
                                    <mat-icon>add</mat-icon>
                                    Experience
                                </button>
                            </div>
                        </div>
                    </mat-expansion-panel>

                    <!-- Financial Details -->
                    <mat-expansion-panel class="mat-elevation-z2 section-panel">
                        <mat-expansion-panel-header>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined align-middle text-theme">account_balance</mat-icon>
                                </div>
                                <div class="col">
                                    <h3>Financial & Payment</h3>
                                </div>
                            </div>
                        </mat-expansion-panel-header>

                        <div class="row gx-3 align-items-center mt-3">
                            <div class="col mb-3">
                                <h4>Bank Accounts</h4>
                            </div>
                            <div class="col-auto mb-3">
                                <button matButton color="primary" (click)="addBank()"><mat-icon>add</mat-icon> Bank Account</button>
                            </div>
                        </div>

                        @if (addbanks()) {
                        <mat-card class="bg-light-theme mb-3 mb-lg-4">
                            <mat-card-content>
                                <h3 class="mb-3 mb-lg-4">Add New Bank</h3>
                                <div class="row gx-3">
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                        <mat-form-field appearance="outline" class="w-100">
                                            <mat-label>Bank Name</mat-label>
                                            <input matInput placeholder="Bank Name" />
                                        </mat-form-field>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                        <mat-form-field appearance="outline" class="w-100">
                                            <mat-label>Account Holder Name</mat-label>
                                            <input matInput placeholder="Account Holder Name" />
                                        </mat-form-field>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                        <mat-form-field appearance="outline" class="w-100">
                                            <mat-label>Account Number</mat-label>
                                            <input matInput placeholder="Account Number" />
                                        </mat-form-field>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                        <mat-form-field appearance="outline" class="w-100">
                                            <mat-label>Branch</mat-label>
                                            <input matInput placeholder="Branch" />
                                        </mat-form-field>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                        <mat-form-field appearance="outline" class="w-100">
                                            <mat-label>Swift Code</mat-label>
                                            <input matInput placeholder="Swift Code" value="123" />
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="row gx-0">
                                    <div class="col">
                                        <button matButton="filled"><mat-icon class="material-icons-outlined">save</mat-icon> Save</button>
                                    </div>
                                    <div class="col-auto">
                                        <button matButton class="theme-red" (click)="addBank()">Cancel</button>
                                    </div>
                                </div>
                            </mat-card-content>
                        </mat-card>
                        } @for (bank of profile().banks; track bank.swiftCode) {

                        <div class="row gx-3">
                            <div class="col-12 col-lg-6 col-xl-3 mb-3 mb-lg-4">
                                <p class="text-secondary small mb-1">Bank Name</p>
                                <p class="">{{ bank.bank }}</p>
                            </div>

                            <div class="col-12 col-lg-6 col-xl-3 mb-3 mb-lg-4">
                                <p class="text-secondary small mb-1">Account Number</p>
                                <p class="">{{ bank.accountNumber }}</p>
                            </div>

                            <div class="col-12 col-md-6 col-xl mb-3 mb-lg-4">
                                <p class="text-secondary small mb-1">Account Holder</p>
                                <p class="">{{ bank.accountHolder }}</p>
                            </div>

                            <div class="col-12 col-md-6 col-xl mb-3 mb-lg-4">
                                <p class="text-secondary small mb-1">Branch Name</p>
                                <p class="">{{ bank.branch }}</p>
                            </div>

                            <div class="col-12 col-md-6 col-xl mb-3 mb-lg-4">
                                <p class="text-secondary small mb-1">Swift Code</p>
                                <p class="">{{ bank.swiftCode }}</p>
                            </div>
                            <div class="col-auto">
                                <button matIconButton color="accent"><mat-icon>edit</mat-icon></button>
                                <button matIconButton color="warn"><mat-icon>delete</mat-icon></button>
                            </div>
                        </div>
                        }

                        <!-- Credit cards and carousel card -->
                        <div class="row gx-3 align-items-center">
                            <div class="col mb-3">
                                <h4>My Cards</h4>
                            </div>
                            <div class="col-auto mb-3">
                                <button matButton color="primary" (click)="addcard()"><mat-icon>add</mat-icon> Card</button>
                            </div>
                        </div>
                        @if (addcards()) {
                        <mat-card class="bg-light-theme mb-3 mb-lg-4">
                            <mat-card-content>
                                <h3 class="mb-3 mb-lg-4">Add New Card</h3>
                                <div class="row gx-3">
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                        <mat-form-field appearance="outline" class="w-100">
                                            <mat-label>Card Number</mat-label>
                                            <input matInput placeholder="Card Number" />
                                        </mat-form-field>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                        <mat-form-field appearance="outline" class="w-100">
                                            <mat-label>Card Holder Name</mat-label>
                                            <input matInput placeholder="Card Holder Name" />
                                        </mat-form-field>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg">
                                        <mat-form-field appearance="outline" class="w-100">
                                            <mat-label>Expiry Month</mat-label>
                                            <input matInput placeholder="Expiry Month" />
                                        </mat-form-field>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg">
                                        <mat-form-field appearance="outline" class="w-100">
                                            <mat-label>Expiry Year</mat-label>
                                            <input matInput placeholder="Expiry Year" />
                                        </mat-form-field>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg">
                                        <mat-form-field appearance="outline" class="w-100">
                                            <mat-label>CVV</mat-label>
                                            <input matInput placeholder="CVV" value="123" />
                                        </mat-form-field>
                                    </div>
                                </div>
                                <div class="row gx-0">
                                    <div class="col">
                                        <button matButton="filled"><mat-icon class="material-icons-outlined">save</mat-icon> Save</button>
                                    </div>
                                    <div class="col-auto">
                                        <button matButton class="theme-red" (click)="addcard()">Cancel</button>
                                    </div>
                                </div>
                            </mat-card-content>
                        </mat-card>
                        }

                        <swiper-container slides-per-view="auto" space-between="20px" autoplay="true" class="swiper swipernav overflow-visible mb-3 mb-lg-4">
                            @for (card of profile().cards; track card.cardNumber){
                            <swiper-slide class="width-260">
                                <mat-card appearance="outlined">
                                    <mat-card-content>
                                        <div class="row align-items-center">
                                            <div class="col-auto">
                                                <div class="avatar avatar-30 rounded bg-theme text-white">
                                                    <mat-icon class="material-icons-outlined">diamond</mat-icon>
                                                </div>
                                            </div>
                                            <div class="col text-end">
                                                <p>{{ card.cardBank }}</p>
                                            </div>
                                        </div>
                                        <h3 class="mt-3 mb-0 text-theme">{{ card.cardNumber }}</h3>
                                        <p class="small ">Limit: {{ card.cardLimit }}</p>
                                        <div class="row gx-3 gx-lg-4">
                                            <div class="col">
                                                <button matIconButton color="accent"><mat-icon>edit</mat-icon></button>
                                            </div>
                                            <div class="col-auto text-end">
                                                <button matIconButton color="warn" (click)="deleteNestedItem('cards', card.cardNumber, 'cardNumber')"><mat-icon>delete</mat-icon></button>
                                            </div>
                                        </div>
                                    </mat-card-content>
                                </mat-card>
                            </swiper-slide>
                            }
                        </swiper-container>

                        <!-- paypal id -->
                        <div class="row gx-3 align-items-center">
                            <div class="col mb-3 mb-lg-4">
                                <h4>PayPal ID</h4>
                            </div>
                        </div>

                        <mat-form-field appearance="outline" class=" w-100">
                            <mat-label>PayPal</mat-label>
                            <input matInput formControlName="paymentMethod" />
                        </mat-form-field>
                    </mat-expansion-panel>

                    <!-- Assets and Subscriptions -->
                    <mat-expansion-panel class="mat-elevation-z2 section-panel">
                        <mat-expansion-panel-header>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto">
                                    <span class="material-symbols-outlined text-theme"> devices </span>
                                </div>
                                <div class="col">
                                    <h3>Devices & Applications</h3>
                                </div>
                            </div>
                        </mat-expansion-panel-header>

                        <div class="row gx-3 gx-lg-4 align-items-center mt-3">
                            <div class="col mb-3">
                                <h4>Applications</h4>
                            </div>
                            <div class="col-auto mb-3">
                                <button matButton color="primary"><mat-icon>add</mat-icon> Application</button>
                            </div>
                        </div>

                        @for (application of profile().applications; track application.id) {
                        <div class="row gx-3">
                            <div class="col-12 col-lg-12 col-xl-4 mb-3">
                                <p class="text-secondary small mb-1">Application #{{ application.id }}</p>
                                <p class="">{{ application.title }}</p>
                            </div>
                            <div class="col-12 col-lg-12 col-xl-4 mb-3">
                                <p class="text-secondary small mb-1">Quantity</p>
                                <p class="">{{ application.license }}</p>
                            </div>
                            <div class="col-12 col-lg-12 col-xl mb-3">
                                <p class="text-secondary small mb-1">Status</p>
                                <p class="">
                                    <span
                                        class="badge badge-light"
                                        [ngClass]="{
                                        'theme-green': application.status === 'Active',
                                        'theme-orange': application.status === 'Inactive', }">
                                        {{ application.status }}
                                    </span>
                                </p>
                            </div>
                            <div class="col-auto mb-3">
                                <button matIconButton (click)="deleteNestedItem('applications', application.id, 'id')"><mat-icon>delete</mat-icon></button>
                                <button matIconButton><mat-icon>edit</mat-icon></button>
                            </div>
                        </div>
                        }

                        <div class="row gx-3 gx-lg-4 align-items-center mt-3">
                            <div class="col mb-3">
                                <h4>Devices</h4>
                            </div>
                            <div class="col-auto mb-3">
                                <button matButton color="primary"><mat-icon>add</mat-icon> Device</button>
                            </div>
                        </div>

                        @for (device of profile().devices; track device.id) {
                        <div class="row gx-3">
                            <div class="col-12 col-lg-12 col-xl-4 mb-3">
                                <p class="text-secondary small mb-1">Device #{{ device.id }}</p>
                                <p class="">{{ device.title }}</p>
                            </div>
                            <div class="col-12 col-lg-12 col-xl-4 mb-3">
                                <p class="text-secondary small mb-1">Quantity</p>
                                <p class="">{{ device.quantity }}</p>
                            </div>
                            <div class="col-12 col-lg-12 col-xl mb-3">
                                <p class="text-secondary small mb-1">Status</p>
                                <p class="">
                                    <span
                                        class="badge badge-light"
                                        [ngClass]="{
                                                        'theme-green': device.status === 'Active',
                                                        'theme-orange': device.status === 'Inactive', }">
                                        {{ device.status }}
                                    </span>
                                </p>
                            </div>
                            <div class="col-auto mb-3">
                                <button matIconButton (click)="deleteNestedItem('devices', device.id, 'id')"><mat-icon>delete</mat-icon></button>
                                <button matIconButton><mat-icon>edit</mat-icon></button>
                            </div>
                        </div>
                        }
                    </mat-expansion-panel>

                    <!-- Social Media Links -->
                    <mat-expansion-panel class="mat-elevation-z2 section-panel">
                        <mat-expansion-panel-header>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto">
                                    <span class="material-symbols-outlined text-theme"> share </span>
                                </div>
                                <div class="col">
                                    <h3>Social & Online Presence</h3>
                                </div>
                            </div>
                        </mat-expansion-panel-header>

                        <div class="row gx-3 gx-lg-4 mt-3">
                            <div class="col-12 col-md-6 col-lg-4 ">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>LinkedIn URL</mat-label>
                                    <input matInput formControlName="linkedInUrl" />
                                    <mat-icon matPrefix>linkedin</mat-icon>
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 ">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Google URL (Personal Site/Blog)</mat-label>
                                    <input matInput formControlName="googleUrl" />
                                    <mat-icon matPrefix>link</mat-icon>
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 ">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Instagram URL</mat-label>
                                    <input matInput formControlName="instaUrl" />
                                    <mat-icon matPrefix>photo_camera</mat-icon>
                                </mat-form-field>
                            </div>
                        </div>
                    </mat-expansion-panel>
                </mat-accordion>
            </form>

            <!-- save button -->
            <div class="mb-3">
                <button matButton="filled" [disabled]="isSaving()" (click)="handleSave()">
                    <div>
                        @if (isSaving()) {
                        <mat-icon class="align-middle me-1">hourglass_empty</mat-icon>
                        Saving... } @else {
                        <mat-icon class="align-middle me-1">save</mat-icon>
                        Update }
                    </div>
                </button>
            </div>
            @if (isSaving()) { <mat-progress-bar mode="indeterminate" class="w-100 mb-3"></mat-progress-bar>}
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/pages/app/profile/settings.component.ts", lineNumber: 752 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=settings.component-ZJ5FSERV.js.map
