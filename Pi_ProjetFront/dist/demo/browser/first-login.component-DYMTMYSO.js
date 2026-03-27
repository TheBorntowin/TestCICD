import {
  AuthService
} from "./chunk-BMFQEZMK.js";
import {
  Router,
  RouterModule
} from "./chunk-DYOMXT5J.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import "./chunk-XPQBAS5O.js";
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
  NgIf
} from "./chunk-ZG6WBW2I.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O4O7EFUR.js";

// src/app/pages/auth/first-login/first-login.component.ts
function FirstLoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function FirstLoginComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Password updated!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your account is now fully active. Redirecting to login\u2026");
    \u0275\u0275elementEnd()();
  }
}
function FirstLoginComponent_form_23_span_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function FirstLoginComponent_form_23_span_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Minimum 8 characters");
    \u0275\u0275elementEnd();
  }
}
function FirstLoginComponent_form_23_span_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Must include uppercase, lowercase & number");
    \u0275\u0275elementEnd();
  }
}
function FirstLoginComponent_form_23_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275template(1, FirstLoginComponent_form_23_span_9_span_1_Template, 2, 0, "span", 26)(2, FirstLoginComponent_form_23_span_9_span_2_Template, 2, 0, "span", 26)(3, FirstLoginComponent_form_23_span_9_span_3_Template, 2, 0, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["newPassword"].hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["newPassword"].hasError("minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["newPassword"].hasError("pattern"));
  }
}
function FirstLoginComponent_form_23_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275element(2, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.strengthPct(), "%")("background", ctx_r0.strengthColor());
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r0.strengthColor());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.strengthLabel());
  }
}
function FirstLoginComponent_form_23_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function FirstLoginComponent_form_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("ngSubmit", function FirstLoginComponent_form_23_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "label", 14);
    \u0275\u0275text(3, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275element(5, "input", 16);
    \u0275\u0275elementStart(6, "button", 17);
    \u0275\u0275listener("click", function FirstLoginComponent_form_23_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hideNew = !ctx_r0.hideNew);
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, FirstLoginComponent_form_23_span_9_Template, 4, 3, "span", 18)(10, FirstLoginComponent_form_23_div_10_Template, 5, 7, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13)(12, "label", 14);
    \u0275\u0275text(13, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 15);
    \u0275\u0275element(15, "input", 20);
    \u0275\u0275elementStart(16, "button", 17);
    \u0275\u0275listener("click", function FirstLoginComponent_form_23_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.hideConfirm = !ctx_r0.hideConfirm);
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, FirstLoginComponent_form_23_span_19_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 21)(21, "p", 22);
    \u0275\u0275text(22, "Password must contain:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 23)(24, "mat-icon");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "At least one uppercase letter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 23)(29, "mat-icon");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "At least one lowercase letter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 23)(34, "mat-icon");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "At least one number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 23)(39, "mat-icon");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Minimum 8 characters");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "button", 24)(44, "mat-icon");
    \u0275\u0275text(45, "lock_reset");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r0.hideNew ? "password" : "text");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.hideNew ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["newPassword"].invalid && ctx_r0.f["newPassword"].touched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.f["newPassword"].value);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r0.hideConfirm ? "password" : "text");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.hideConfirm ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.hasError("mismatch") && ctx_r0.f["confirmPassword"].touched);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ok", ctx_r0.hasUppercase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.hasUppercase() ? "check_circle" : "radio_button_unchecked");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ok", ctx_r0.hasLowercase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.hasLowercase() ? "check_circle" : "radio_button_unchecked");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ok", ctx_r0.hasNumber());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.hasNumber() ? "check_circle" : "radio_button_unchecked");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ok", ctx_r0.hasLength());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.hasLength() ? "check_circle" : "radio_button_unchecked");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.form.invalid || ctx_r0.loading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Saving\u2026" : "Set New Password & Sign In", " ");
  }
}
function passwordsMatch(group) {
  const pw = group.get("newPassword")?.value;
  const confirm = group.get("confirmPassword")?.value;
  return pw && confirm && pw !== confirm ? { mismatch: true } : null;
}
var FirstLoginComponent = class _FirstLoginComponent {
  constructor(fb, router, authService) {
    this.fb = fb;
    this.router = router;
    this.authService = authService;
    this.email = "";
    this.userId = 0;
    this.hideNew = true;
    this.hideConfirm = true;
    this.loading = false;
    this.success = false;
    this.errorMessage = "";
    this.form = this.fb.group({
      newPassword: ["", [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
      ]],
      confirmPassword: ["", Validators.required]
    }, { validators: passwordsMatch });
  }
  get f() {
    return this.form.controls;
  }
  ngOnInit() {
    const st = history.state;
    if (st?.email && st?.userId) {
      this.email = st.email;
      this.userId = st.userId;
    } else {
      const user = this.authService.currentUser();
      if (user) {
        this.email = user.email;
        this.userId = user.id;
      } else {
        this.router.navigate(["/auth/login"]);
      }
    }
  }
  get pw() {
    return this.f["newPassword"].value ?? "";
  }
  hasUppercase() {
    return /[A-Z]/.test(this.pw);
  }
  hasLowercase() {
    return /[a-z]/.test(this.pw);
  }
  hasNumber() {
    return /\d/.test(this.pw);
  }
  hasLength() {
    return this.pw.length >= 8;
  }
  strengthPct() {
    let score = 0;
    if (this.hasUppercase())
      score++;
    if (this.hasLowercase())
      score++;
    if (this.hasNumber())
      score++;
    if (this.hasLength())
      score++;
    if (this.pw.length >= 12)
      score++;
    return Math.min(100, score * 20);
  }
  strengthLabel() {
    const p = this.strengthPct();
    if (p <= 20)
      return "Very Weak";
    if (p <= 40)
      return "Weak";
    if (p <= 60)
      return "Fair";
    if (p <= 80)
      return "Strong";
    return "Very Strong";
  }
  strengthColor() {
    const p = this.strengthPct();
    if (p <= 20)
      return "#ef4444";
    if (p <= 40)
      return "#f97316";
    if (p <= 60)
      return "#eab308";
    if (p <= 80)
      return "#22c55e";
    return "#16a34a";
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    const newPassword = this.form.value.newPassword;
    this.authService.changePassword(this.userId, newPassword).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        this.authService.clearSession();
        setTimeout(() => this.router.navigate(["/auth/login"]), 2e3);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.error?.message ?? "Failed to change password. Please try again.";
      }
    });
  }
  static {
    this.\u0275fac = function FirstLoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FirstLoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FirstLoginComponent, selectors: [["app-first-login"]], decls: 24, vars: 4, consts: [[1, "fl-page"], [1, "fl-box"], [1, "fl-banner"], [1, "fl-icon-wrap"], [1, "fl-notice"], [1, "fl-notice-title"], [1, "fl-notice-sub"], ["class", "fl-error", 4, "ngIf"], ["class", "fl-success", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "fl-error"], [1, "fl-success"], [3, "ngSubmit", "formGroup"], [1, "fl-field"], [1, "fl-label"], [1, "fl-input-wrap"], ["formControlName", "newPassword", "placeholder", "At least 8 characters", 1, "fl-input", 3, "type"], ["type", "button", 1, "fl-eye", 3, "click"], ["class", "fl-err", 4, "ngIf"], ["class", "strength-bar", 4, "ngIf"], ["formControlName", "confirmPassword", "placeholder", "Repeat your new password", 1, "fl-input", 3, "type"], [1, "fl-rules"], [1, "fl-rules-title"], [1, "fl-rule"], ["type", "submit", 1, "fl-submit", 3, "disabled"], [1, "fl-err"], [4, "ngIf"], [1, "strength-bar"], [1, "strength-track"], [1, "strength-fill"], [1, "strength-label"]], template: function FirstLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
        \u0275\u0275text(5, "key");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "Set Your Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Your account is ready! Create a new password to get started.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 4)(11, "mat-icon");
        \u0275\u0275text(12, "verified");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div")(14, "p", 5);
        \u0275\u0275text(15, "Welcome to Unitum");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p", 6);
        \u0275\u0275text(17, " Signing in as ");
        \u0275\u0275elementStart(18, "strong");
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, ". Please set a new secure password to continue. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(21, FirstLoginComponent_div_21_Template, 4, 1, "div", 7)(22, FirstLoginComponent_div_22_Template, 7, 0, "div", 8)(23, FirstLoginComponent_form_23_Template, 47, 22, "form", 9);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.email);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.success);
      }
    }, dependencies: [CommonModule, NgIf, MatIconModule, MatIcon, MatFormFieldModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule], styles: ["\n\n.fl-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: var(--min-height, 100vh);\n  padding: 24px 16px;\n  background: #f0f4fa;\n}\n.fl-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, .10);\n  overflow: hidden;\n}\n.fl-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  padding: 36px 28px 28px;\n  text-align: center;\n  color: #fff;\n}\n.fl-icon-wrap[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, .18);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.fl-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: #fff;\n}\n.fl-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  margin: 0 0 6px;\n}\n.fl-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: .88rem;\n  opacity: .85;\n  margin: 0;\n}\n.fl-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #ede9fe;\n  padding: 16px 24px;\n  font-size: .84rem;\n  color: #4c1d95;\n}\n.fl-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 2px;\n  color: #7c3aed;\n}\n.fl-notice-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 2px;\n}\n.fl-notice-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.5;\n}\n.fl-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border-left: 4px solid #ef4444;\n  color: #dc2626;\n  padding: 12px 24px;\n  font-size: .84rem;\n}\n.fl-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n}\nform[_ngcontent-%COMP%] {\n  padding: 24px 28px 28px;\n}\n.fl-field[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.fl-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: .8rem;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.fl-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.fl-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px 48px 13px 16px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: .9rem;\n  outline: none;\n  background: #f8fafc;\n  color: #1e293b;\n  box-sizing: border-box;\n  transition: border-color .2s;\n}\n.fl-input[_ngcontent-%COMP%]:focus {\n  border-color: #7c3aed;\n  background: #fff;\n}\n.fl-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.fl-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.fl-eye[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.fl-err[_ngcontent-%COMP%] {\n  display: block;\n  font-size: .75rem;\n  color: #ef4444;\n  margin-top: 4px;\n  padding-left: 4px;\n}\n.strength-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.strength-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.strength-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  transition: width .3s, background .3s;\n}\n.strength-label[_ngcontent-%COMP%] {\n  font-size: .72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.fl-rules[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n.fl-rules-title[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  font-weight: 700;\n  color: #64748b;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n}\n.fl-rule[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: .82rem;\n  color: #94a3b8;\n  margin-bottom: 6px;\n  transition: color .2s;\n}\n.fl-rule[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #cbd5e1;\n  transition: color .2s;\n}\n.fl-rule.ok[_ngcontent-%COMP%] {\n  color: #1e293b;\n}\n.fl-rule.ok[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.fl-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-size: .95rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 4px 14px rgba(124, 58, 237, .35);\n  transition: opacity .2s;\n}\n.fl-submit[_ngcontent-%COMP%]:disabled {\n  opacity: .55;\n  cursor: not-allowed;\n}\n.fl-submit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.fl-success[_ngcontent-%COMP%] {\n  padding: 48px 28px;\n  text-align: center;\n}\n.fl-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #22c55e;\n  display: block;\n  margin: 0 auto 16px;\n}\n.fl-success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 8px;\n}\n.fl-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: .88rem;\n  color: #64748b;\n}\n/*# sourceMappingURL=first-login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FirstLoginComponent, [{
    type: Component,
    args: [{ selector: "app-first-login", standalone: true, imports: [CommonModule, MatIconModule, MatFormFieldModule, ReactiveFormsModule, RouterModule], template: `
    <div class="fl-page">
      <div class="fl-box">

        <!-- Top banner -->
        <div class="fl-banner">
          <div class="fl-icon-wrap">
            <mat-icon>key</mat-icon>
          </div>
          <h2>Set Your Password</h2>
          <p>Your account is ready! Create a new password to get started.</p>
        </div>

        <!-- Welcome notice -->
        <div class="fl-notice">
          <mat-icon>verified</mat-icon>
          <div>
            <p class="fl-notice-title">Welcome to Unitum</p>
            <p class="fl-notice-sub">
              Signing in as <strong>{{ email }}</strong>. Please set a new secure password to continue.
            </p>
          </div>
        </div>

        <!-- Error banner -->
        <div class="fl-error" *ngIf="errorMessage">
          <mat-icon>error_outline</mat-icon>
          {{ errorMessage }}
        </div>

        <!-- Success state -->
        <div class="fl-success" *ngIf="success">
          <mat-icon>check_circle</mat-icon>
          <h3>Password updated!</h3>
          <p>Your account is now fully active. Redirecting to login\u2026</p>
        </div>

        <!-- Form -->
        <form *ngIf="!success" [formGroup]="form" (ngSubmit)="submit()">

          <!-- New password -->
          <div class="fl-field">
            <label class="fl-label">New Password</label>
            <div class="fl-input-wrap">
              <input class="fl-input" formControlName="newPassword"
                [type]="hideNew ? 'password' : 'text'"
                placeholder="At least 8 characters">
              <button type="button" class="fl-eye" (click)="hideNew = !hideNew">
                <mat-icon>{{ hideNew ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
            </div>
            <span class="fl-err" *ngIf="f['newPassword'].invalid && f['newPassword'].touched">
              <span *ngIf="f['newPassword'].hasError('required')">Password is required</span>
              <span *ngIf="f['newPassword'].hasError('minlength')">Minimum 8 characters</span>
              <span *ngIf="f['newPassword'].hasError('pattern')">Must include uppercase, lowercase &amp; number</span>
            </span>
            <!-- Strength bar -->
            <div class="strength-bar" *ngIf="f['newPassword'].value">
              <div class="strength-track">
                <div class="strength-fill"
                  [style.width.%]="strengthPct()"
                  [style.background]="strengthColor()"></div>
              </div>
              <span class="strength-label" [style.color]="strengthColor()">{{ strengthLabel() }}</span>
            </div>
          </div>

          <!-- Confirm password -->
          <div class="fl-field">
            <label class="fl-label">Confirm Password</label>
            <div class="fl-input-wrap">
              <input class="fl-input" formControlName="confirmPassword"
                [type]="hideConfirm ? 'password' : 'text'"
                placeholder="Repeat your new password">
              <button type="button" class="fl-eye" (click)="hideConfirm = !hideConfirm">
                <mat-icon>{{ hideConfirm ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
            </div>
            <span class="fl-err" *ngIf="form.hasError('mismatch') && f['confirmPassword'].touched">
              Passwords do not match
            </span>
          </div>

          <!-- Rules -->
          <div class="fl-rules">
            <p class="fl-rules-title">Password must contain:</p>
            <div class="fl-rule" [class.ok]="hasUppercase()">
              <mat-icon>{{ hasUppercase() ? 'check_circle' : 'radio_button_unchecked' }}</mat-icon>
              <span>At least one uppercase letter</span>
            </div>
            <div class="fl-rule" [class.ok]="hasLowercase()">
              <mat-icon>{{ hasLowercase() ? 'check_circle' : 'radio_button_unchecked' }}</mat-icon>
              <span>At least one lowercase letter</span>
            </div>
            <div class="fl-rule" [class.ok]="hasNumber()">
              <mat-icon>{{ hasNumber() ? 'check_circle' : 'radio_button_unchecked' }}</mat-icon>
              <span>At least one number</span>
            </div>
            <div class="fl-rule" [class.ok]="hasLength()">
              <mat-icon>{{ hasLength() ? 'check_circle' : 'radio_button_unchecked' }}</mat-icon>
              <span>Minimum 8 characters</span>
            </div>
          </div>

          <button type="submit" class="fl-submit" [disabled]="form.invalid || loading">
            <mat-icon>lock_reset</mat-icon>
            {{ loading ? 'Saving\u2026' : 'Set New Password & Sign In' }}
          </button>
        </form>

      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;023d03c010c9d8957c94bd7adbb09e95275f76be00d999ecfaca8b7312cd5642;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/pages/auth/first-login/first-login.component.ts */\n.fl-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: var(--min-height, 100vh);\n  padding: 24px 16px;\n  background: #f0f4fa;\n}\n.fl-box {\n  width: 100%;\n  max-width: 460px;\n  background: #fff;\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, .10);\n  overflow: hidden;\n}\n.fl-banner {\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  padding: 36px 28px 28px;\n  text-align: center;\n  color: #fff;\n}\n.fl-icon-wrap {\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, .18);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.fl-icon-wrap mat-icon {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: #fff;\n}\n.fl-banner h2 {\n  font-size: 1.4rem;\n  font-weight: 800;\n  margin: 0 0 6px;\n}\n.fl-banner p {\n  font-size: .88rem;\n  opacity: .85;\n  margin: 0;\n}\n.fl-notice {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #ede9fe;\n  padding: 16px 24px;\n  font-size: .84rem;\n  color: #4c1d95;\n}\n.fl-notice mat-icon {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 2px;\n  color: #7c3aed;\n}\n.fl-notice-title {\n  font-weight: 700;\n  margin-bottom: 2px;\n}\n.fl-notice-sub {\n  margin: 0;\n  line-height: 1.5;\n}\n.fl-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border-left: 4px solid #ef4444;\n  color: #dc2626;\n  padding: 12px 24px;\n  font-size: .84rem;\n}\n.fl-error mat-icon {\n  font-size: 18px;\n  flex-shrink: 0;\n}\nform {\n  padding: 24px 28px 28px;\n}\n.fl-field {\n  margin-bottom: 18px;\n}\n.fl-label {\n  display: block;\n  font-size: .8rem;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.fl-input-wrap {\n  position: relative;\n}\n.fl-input {\n  width: 100%;\n  padding: 13px 48px 13px 16px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 12px;\n  font-size: .9rem;\n  outline: none;\n  background: #f8fafc;\n  color: #1e293b;\n  box-sizing: border-box;\n  transition: border-color .2s;\n}\n.fl-input:focus {\n  border-color: #7c3aed;\n  background: #fff;\n}\n.fl-input::placeholder {\n  color: #94a3b8;\n}\n.fl-eye {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.fl-eye mat-icon {\n  font-size: 20px;\n}\n.fl-err {\n  display: block;\n  font-size: .75rem;\n  color: #ef4444;\n  margin-top: 4px;\n  padding-left: 4px;\n}\n.strength-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 8px;\n}\n.strength-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.strength-fill {\n  height: 100%;\n  border-radius: 10px;\n  transition: width .3s, background .3s;\n}\n.strength-label {\n  font-size: .72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.fl-rules {\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n.fl-rules-title {\n  font-size: .75rem;\n  font-weight: 700;\n  color: #64748b;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n}\n.fl-rule {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: .82rem;\n  color: #94a3b8;\n  margin-bottom: 6px;\n  transition: color .2s;\n}\n.fl-rule mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #cbd5e1;\n  transition: color .2s;\n}\n.fl-rule.ok {\n  color: #1e293b;\n}\n.fl-rule.ok mat-icon {\n  color: #22c55e;\n}\n.fl-submit {\n  width: 100%;\n  padding: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #7c3aed,\n      #4f46e5);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-size: .95rem;\n  font-weight: 700;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  box-shadow: 0 4px 14px rgba(124, 58, 237, .35);\n  transition: opacity .2s;\n}\n.fl-submit:disabled {\n  opacity: .55;\n  cursor: not-allowed;\n}\n.fl-submit mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.fl-success {\n  padding: 48px 28px;\n  text-align: center;\n}\n.fl-success mat-icon {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  color: #22c55e;\n  display: block;\n  margin: 0 auto 16px;\n}\n.fl-success h3 {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 8px;\n}\n.fl-success p {\n  font-size: .88rem;\n  color: #64748b;\n}\n/*# sourceMappingURL=first-login.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FirstLoginComponent, { className: "FirstLoginComponent", filePath: "src/app/pages/auth/first-login/first-login.component.ts", lineNumber: 219 });
})();
export {
  FirstLoginComponent
};
//# sourceMappingURL=first-login.component-DYMTMYSO.js.map
