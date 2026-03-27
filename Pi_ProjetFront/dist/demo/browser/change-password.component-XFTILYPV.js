import {
  MatInput,
  MatInputModule
} from "./chunk-45QHUHCH.js";
import "./chunk-7XFTNJ2Y.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-ZLA4QS3A.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-DYOMXT5J.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import {
  MatError,
  MatFormField,
  MatLabel,
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
  NgIf
} from "./chunk-ZG6WBW2I.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O4O7EFUR.js";

// src/app/pages/auth/change-password/change-password.component.ts
function ChangePasswordComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-icon", 14);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 15);
    \u0275\u0275text(4, "Password updated!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275text(6, "Redirecting to Sign In\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ChangePasswordComponent_form_11_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_form_11_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minimum 8 characters");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_form_11_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Must include uppercase, lowercase & number");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_form_11_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function ChangePasswordComponent_form_11_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function ChangePasswordComponent_form_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 16);
    \u0275\u0275listener("ngSubmit", function ChangePasswordComponent_form_11_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "mat-form-field", 17)(2, "mat-label");
    \u0275\u0275text(3, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 18);
    \u0275\u0275elementStart(5, "button", 19);
    \u0275\u0275listener("click", function ChangePasswordComponent_form_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideNewPassword = !ctx_r1.hideNewPassword);
    });
    \u0275\u0275elementStart(6, "mat-icon", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ChangePasswordComponent_form_11_mat_error_8_Template, 2, 0, "mat-error", 20)(9, ChangePasswordComponent_form_11_mat_error_9_Template, 2, 0, "mat-error", 20)(10, ChangePasswordComponent_form_11_mat_error_10_Template, 2, 0, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 17)(12, "mat-label");
    \u0275\u0275text(13, "Confirm New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 21);
    \u0275\u0275elementStart(15, "button", 19);
    \u0275\u0275listener("click", function ChangePasswordComponent_form_11_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideConfirmPassword = !ctx_r1.hideConfirmPassword);
    });
    \u0275\u0275elementStart(16, "mat-icon", 12);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ChangePasswordComponent_form_11_mat_error_18_Template, 2, 0, "mat-error", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ChangePasswordComponent_form_11_div_19_Template, 2, 1, "div", 22);
    \u0275\u0275elementStart(20, "button", 23);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.changeForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.hideNewPassword ? "password" : "text");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.hideNewPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.changeForm.get("newPassword")) == null ? null : tmp_4_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_5_0 = ctx_r1.changeForm.get("newPassword")) == null ? null : tmp_5_0.hasError("minlength"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r1.changeForm.get("newPassword")) == null ? null : tmp_6_0.hasError("pattern"));
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r1.hideConfirmPassword ? "password" : "text");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.hideConfirmPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.changeForm.hasError("mismatch") && ((tmp_9_0 = ctx_r1.changeForm.get("confirmPassword")) == null ? null : tmp_9_0.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.changeForm.invalid || ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Saving\u2026" : "Update Password", " ");
  }
}
function passwordsMatch(group) {
  const pw = group.get("newPassword")?.value;
  const confirm = group.get("confirmPassword")?.value;
  return pw && confirm && pw !== confirm ? { mismatch: true } : null;
}
var ChangePasswordComponent = class _ChangePasswordComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.hideNewPassword = true;
    this.hideConfirmPassword = true;
    this.loading = false;
    this.success = false;
    this.errorMessage = "";
    this.email = "";
    this.changeForm = this.fb.group({
      newPassword: ["", [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
      ]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: passwordsMatch });
  }
  ngOnInit() {
    const st = history.state;
    if (st?.email) {
      this.email = st.email;
    }
  }
  onSubmit() {
    if (this.changeForm.invalid) {
      this.changeForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    const newPassword = this.changeForm.value.newPassword;
    setTimeout(() => {
      try {
        const raw = localStorage.getItem("cmp_first_login_users");
        if (raw) {
          const map = JSON.parse(raw);
          if (map[this.email]) {
            delete map[this.email];
            localStorage.setItem("cmp_first_login_users", JSON.stringify(map));
          }
        }
        const overridesRaw = localStorage.getItem("cmp_password_overrides") ?? "{}";
        const overrides = JSON.parse(overridesRaw);
        overrides[this.email] = newPassword;
        localStorage.setItem("cmp_password_overrides", JSON.stringify(overrides));
      } catch (e) {
        this.errorMessage = "Something went wrong. Please try again.";
        this.loading = false;
        return;
      }
      this.loading = false;
      this.success = true;
      setTimeout(() => this.router.navigate(["/auth/login"]), 2e3);
    }, 1e3);
  }
  static {
    this.\u0275fac = function ChangePasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChangePasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordComponent, selectors: [["app-change-password"]], decls: 19, vars: 2, consts: [[1, "row", "gx-3", "justify-content-center", "align-items-center", 2, "min-height", "var(--min-height)"], [1, "col", "maxwidth-dynamic", "position-relative", 2, "--mw-dynamic", "440px"], [1, "bg-light-gradient", "mb-3", "mb-lg-4"], [1, "p-4", "p-lg-5"], [1, "login-header", "mb-4"], [1, "mb-1"], [1, "text-secondary"], ["class", "text-center py-3", 4, "ngIf"], ["class", "change-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "text-center"], [1, "text-secondary", "mb-1"], ["matButton", "", "color", "primary", "routerLink", "/auth/login", 1, "continue-button"], [1, "material-icons-outlined"], [1, "text-center", "py-3"], [2, "font-size", "48px", "width", "48px", "height", "48px", "color", "#22c55e"], [1, "mt-2"], [1, "change-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "newPassword", "placeholder", "At least 8 characters", 3, "type"], ["matIconButton", "", "matSuffix", "", "type", "button", 3, "click"], [4, "ngIf"], ["matInput", "", "formControlName", "confirmPassword", "placeholder", "Confirm new password", 3, "type"], ["style", "color:#ef4444;font-size:13px;margin-bottom:12px", 4, "ngIf"], ["matButton", "filled", "color", "primary", "type", "submit", 1, "w-100", 3, "disabled"], [2, "color", "#ef4444", "font-size", "13px", "margin-bottom", "12px"]], template: function ChangePasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-content", 3)(4, "div", 4)(5, "h1", 5);
        \u0275\u0275text(6, "Change Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, "Update your account password");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "br");
        \u0275\u0275template(10, ChangePasswordComponent_div_10_Template, 7, 0, "div", 7)(11, ChangePasswordComponent_form_11_Template, 22, 12, "form", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 9)(13, "p", 10);
        \u0275\u0275text(14, "Do you remember your password?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 11)(16, "mat-icon", 12);
        \u0275\u0275text(17, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, "Back to Sign In ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.success);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.success);
      }
    }, dependencies: [CommonModule, NgIf, MatCardModule, MatCard, MatCardContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatSuffix, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatFormFieldModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordComponent, [{
    type: Component,
    args: [{ selector: "app-change-password", standalone: true, imports: [CommonModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule, ReactiveFormsModule, RouterModule], template: `
        <div class="row gx-3 justify-content-center align-items-center" style="min-height: var(--min-height)">
            <div class="col maxwidth-dynamic position-relative" style="--mw-dynamic:440px">
                <mat-card class="bg-light-gradient mb-3 mb-lg-4">
                    <mat-card-content class="p-4 p-lg-5">
                        <div class="login-header mb-4">
                            <h1 class="mb-1">Change Password</h1>
                            <p class="text-secondary">Update your account password</p>
                        </div>
                        <br />

                        <!-- Success state -->
                        <div *ngIf="success" class="text-center py-3">
                            <mat-icon style="font-size:48px;width:48px;height:48px;color:#22c55e">check_circle</mat-icon>
                            <h3 class="mt-2">Password updated!</h3>
                            <p class="text-secondary">Redirecting to Sign In\u2026</p>
                        </div>

                        <form *ngIf="!success" [formGroup]="changeForm" (ngSubmit)="onSubmit()" class="change-form">

                            <!-- New Password -->
                            <mat-form-field appearance="outline" class="w-100">
                                <mat-label>New Password</mat-label>
                                <input matInput formControlName="newPassword"
                                       [type]="hideNewPassword ? 'password' : 'text'"
                                       placeholder="At least 8 characters" />
                                <button matIconButton matSuffix (click)="hideNewPassword = !hideNewPassword" type="button">
                                    <mat-icon class="material-icons-outlined">{{ hideNewPassword ? "visibility_off" : "visibility" }}</mat-icon>
                                </button>
                                <mat-error *ngIf="changeForm.get('newPassword')?.hasError('required')">Password is required</mat-error>
                                <mat-error *ngIf="changeForm.get('newPassword')?.hasError('minlength')">Minimum 8 characters</mat-error>
                                <mat-error *ngIf="changeForm.get('newPassword')?.hasError('pattern')">Must include uppercase, lowercase &amp; number</mat-error>
                            </mat-form-field>

                            <!-- Confirm Password -->
                            <mat-form-field appearance="outline" class="w-100">
                                <mat-label>Confirm New Password</mat-label>
                                <input matInput formControlName="confirmPassword"
                                       [type]="hideConfirmPassword ? 'password' : 'text'"
                                       placeholder="Confirm new password" />
                                <button matIconButton matSuffix (click)="hideConfirmPassword = !hideConfirmPassword" type="button">
                                    <mat-icon class="material-icons-outlined">{{ hideConfirmPassword ? "visibility_off" : "visibility" }}</mat-icon>
                                </button>
                                <mat-error *ngIf="changeForm.hasError('mismatch') && changeForm.get('confirmPassword')?.touched">
                                    Passwords do not match
                                </mat-error>
                            </mat-form-field>

                            <!-- Error message -->
                            <div *ngIf="errorMessage" style="color:#ef4444;font-size:13px;margin-bottom:12px">
                                {{ errorMessage }}
                            </div>

                            <button matButton="filled" color="primary" type="submit" class="w-100" [disabled]="changeForm.invalid || loading">
                                {{ loading ? 'Saving\u2026' : 'Update Password' }}
                            </button>
                        </form>
                    </mat-card-content>
                </mat-card>
                <div class="text-center">
                    <p class="text-secondary mb-1">Do you remember your password?</p>
                    <button matButton color="primary" routerLink="/auth/login" class="continue-button">
                        <mat-icon class="material-icons-outlined">arrow_back</mat-icon>Back to Sign In
                    </button>
                </div>
            </div>
        </div>
    ` }]
  }], () => [{ type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordComponent, { className: "ChangePasswordComponent", filePath: "src/app/pages/auth/change-password/change-password.component.ts", lineNumber: 91 });
})();
export {
  ChangePasswordComponent
};
//# sourceMappingURL=change-password.component-XFTILYPV.js.map
