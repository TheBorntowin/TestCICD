import "./chunk-ALLV6QEF.js";
import {
  MatDivider,
  MatDividerModule
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
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-ZLA4QS3A.js";
import {
  AuthService
} from "./chunk-BMFQEZMK.js";
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
  NgClass,
  NgForOf,
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

// src/app/pages/auth/login/login.component.ts
function LoginComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "mat-icon");
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
function LoginComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_icon_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 4);
    \u0275\u0275text(1, "login");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function LoginComponent_div_42_Template_div_click_0_listener() {
      const a_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.fillAccount(a_r3));
    });
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "span", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-icon", 30);
    \u0275\u0275text(8, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "dot-" + ctx_r0.getRoleColor(a_r3.role));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.role);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, router, authService) {
    this.fb = fb;
    this.router = router;
    this.authService = authService;
    this.hidePassword = true;
    this.loading = false;
    this.errorMessage = "";
    this.testAccounts = [
      { email: "superadmin@cmp.com", password: "superadmin123", role: "SUPER_ADMIN" },
      { email: "admin@test.com", password: "admin123", role: "ADMIN" },
      { email: "manager@test.com", password: "manager123", role: "MANAGER" },
      { email: "po@test.com", password: "productowner123", role: "PRODUCT_OWNER" },
      { email: "tutor@test.com", password: "tutor123", role: "TUTOR" },
      { email: "student@test.com", password: "student123", role: "STUDENT" },
      { email: "viewer@test.com", password: "viewer123", role: "VIEWER" },
      { email: "employee@test.com", password: "employee123", role: "EMPLOYEE" }
    ];
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit() {
  }
  fillAccount(a) {
    this.loginForm.patchValue({ email: a.email, password: a.password });
  }
  getRoleColor(role) {
    const map = {
      SUPER_ADMIN: "red",
      ADMIN: "yellow",
      MANAGER: "blue",
      TUTOR: "green",
      EMPLOYEE: "green"
    };
    return map[role] ?? "blue";
  }
  onSubmit() {
    if (this.loginForm.invalid)
      return;
    this.loading = true;
    this.errorMessage = "";
    const { email, password } = this.loginForm.value;
    this.authService.login({ email, password }).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.mustChangePassword) {
          this.router.navigate(["/auth/first-login"], {
            state: { email, userId: res.id }
          });
          return;
        }
        const redirectMap = {
          SUPER_ADMIN: "/app/super-admin",
          PRODUCT_OWNER: "/app/po"
        };
        const redirect = redirectMap[res.role] ?? "/app/dashboard";
        this.router.navigate([redirect]);
      },
      error: (err) => {
        this.errorMessage = err.error?.message ?? "Invalid email or password.";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 47, vars: 10, consts: [[1, "login-page"], [1, "login-box"], [1, "login-head"], [1, "login-avatar"], [1, "material-icons-outlined"], ["class", "login-error", 4, "ngIf"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-100", "mb-1"], ["matInput", "", "formControlName", "email", "type", "email", "autocomplete", "email"], ["matSuffix", "", 1, "material-icons-outlined"], [4, "ngIf"], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["matIconButton", "", "matSuffix", "", "type", "button", 3, "click"], [1, "login-options"], ["color", "primary"], ["routerLink", "/auth/forgot-password", 1, "forgot-link"], ["matButton", "filled", "color", "primary", "type", "submit", 1, "w-100", "signin-btn", 3, "disabled"], ["class", "material-icons-outlined", 4, "ngIf"], [1, "my-3"], [1, "quick-label"], [1, "account-list"], ["class", "account-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "signup-line"], ["routerLink", "/auth/signup"], [1, "login-error"], [1, "account-item", 3, "click"], [1, "account-dot", 3, "ngClass"], [1, "account-info"], [1, "account-email"], [1, "account-role"], [1, "account-arrow"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon", 4);
        \u0275\u0275text(5, "lock");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "Sign in to Unitum");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Welcome back \u2014 enter your credentials to continue");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, LoginComponent_div_10_Template, 4, 1, "div", 5);
        \u0275\u0275elementStart(11, "form", 6);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(12, "mat-form-field", 7)(13, "mat-label");
        \u0275\u0275text(14, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 8);
        \u0275\u0275elementStart(16, "mat-icon", 9);
        \u0275\u0275text(17, "mail");
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, LoginComponent_mat_error_18_Template, 2, 0, "mat-error", 10)(19, LoginComponent_mat_error_19_Template, 2, 0, "mat-error", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 7)(21, "mat-label");
        \u0275\u0275text(22, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 11);
        \u0275\u0275elementStart(24, "button", 12);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_24_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(25, "mat-icon", 4);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "mat-error");
        \u0275\u0275text(28, "Password must be at least 6 characters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 13)(30, "mat-checkbox", 14);
        \u0275\u0275text(31, "Remember me");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "a", 15);
        \u0275\u0275text(33, "Forgot password?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 16);
        \u0275\u0275template(35, LoginComponent_mat_icon_35_Template, 2, 0, "mat-icon", 17);
        \u0275\u0275elementStart(36, "span");
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(38, "mat-divider", 18);
        \u0275\u0275elementStart(39, "p", 19);
        \u0275\u0275text(40, "Quick access \u2014 demo accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 20);
        \u0275\u0275template(42, LoginComponent_div_42_Template, 9, 3, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p", 22);
        \u0275\u0275text(44, " Don't have an account? ");
        \u0275\u0275elementStart(45, "a", 23);
        \u0275\u0275text(46, "Sign up free");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.hasError("email"));
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance(8);
        \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.loading ? "Signing in..." : "Sign In");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.testAccounts);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, MatCardModule, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatSuffix, MatCheckboxModule, MatCheckbox, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatFormFieldModule, MatDividerModule, MatDivider, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.login-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: var(--min-height, 100vh);\n  padding: 24px 16px;\n}\n.login-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.login-head[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.login-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.login-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.login-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin-bottom: 6px;\n  letter-spacing: -0.3px;\n}\n.login-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--bs-secondary-color, #6c757d);\n  font-size: 14px;\n  margin: 0;\n}\n.login-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.login-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.login-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6366f1;\n  text-decoration: none;\n  font-weight: 500;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.signin-btn[_ngcontent-%COMP%] {\n  height: 44px !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em !important;\n  border-radius: 10px !important;\n  gap: 6px;\n}\n.quick-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #9ca3af;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.account-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.account-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 1px solid var(--bs-border-color, #e5e7eb);\n  cursor: pointer;\n  transition: all 0.15s ease;\n  background: var(--bs-body-bg, #fff);\n}\n.account-item[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  background: var(--bs-light, #f8f9fa);\n  transform: translateX(3px);\n}\n.account-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-red[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.dot-yellow[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.dot-blue[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.dot-green[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.account-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.account-email[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n}\n.account-role[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 600;\n}\n.account-arrow[_ngcontent-%COMP%] {\n  color: #d1d5db !important;\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n}\n.signup-line[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.signup-line[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n}\n.signup-line[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatInputModule,
      MatCheckboxModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatDividerModule,
      ReactiveFormsModule,
      RouterModule
    ], template: `
        <div class="login-page">
            <div class="login-box">

                <!-- Header -->
                <div class="login-head">
                    <div class="login-avatar">
                        <mat-icon class="material-icons-outlined">lock</mat-icon>
                    </div>
                    <h2>Sign in to Unitum</h2>
                    <p>Welcome back \u2014 enter your credentials to continue</p>
                </div>

                <!-- Error -->
                <div class="login-error" *ngIf="errorMessage">
                    <mat-icon>error_outline</mat-icon>
                    {{ errorMessage }}
                </div>

                <!-- Form -->
                <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
                    <mat-form-field appearance="outline" class="w-100 mb-1">
                        <mat-label>Email address</mat-label>
                        <input matInput formControlName="email" type="email" autocomplete="email" />
                        <mat-icon matSuffix class="material-icons-outlined">mail</mat-icon>
                        <mat-error *ngIf="loginForm.get('email')?.hasError('required')">Email is required</mat-error>
                        <mat-error *ngIf="loginForm.get('email')?.hasError('email')">Enter a valid email</mat-error>
                    </mat-form-field>

                    <mat-form-field appearance="outline" class="w-100 mb-1">
                        <mat-label>Password</mat-label>
                        <input matInput formControlName="password"
                               [type]="hidePassword ? 'password' : 'text'"
                               autocomplete="current-password" />
                        <button matIconButton matSuffix type="button" (click)="hidePassword = !hidePassword">
                            <mat-icon class="material-icons-outlined">{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>
                        </button>
                        <mat-error>Password must be at least 6 characters</mat-error>
                    </mat-form-field>

                    <div class="login-options">
                        <mat-checkbox color="primary">Remember me</mat-checkbox>
                        <a routerLink="/auth/forgot-password" class="forgot-link">Forgot password?</a>
                    </div>

                    <button matButton="filled" color="primary" type="submit"
                            class="w-100 signin-btn"
                            [disabled]="loginForm.invalid || loading">
                        <mat-icon *ngIf="!loading" class="material-icons-outlined">login</mat-icon>
                        <span>{{ loading ? 'Signing in...' : 'Sign In' }}</span>
                    </button>
                </form>

                <mat-divider class="my-3"></mat-divider>

                <!-- Quick access -->
                <p class="quick-label">Quick access \u2014 demo accounts</p>
                <div class="account-list">
                    <div class="account-item" *ngFor="let a of testAccounts" (click)="fillAccount(a)">
                        <div class="account-dot" [ngClass]="'dot-' + getRoleColor(a.role)"></div>
                        <div class="account-info">
                            <span class="account-email">{{ a.email }}</span>
                            <span class="account-role">{{ a.role }}</span>
                        </div>
                        <mat-icon class="account-arrow">chevron_right</mat-icon>
                    </div>
                </div>

                <p class="signup-line">
                    Don't have an account? <a routerLink="/auth/signup">Sign up free</a>
                </p>
            </div>
        </div>
    `, styles: ["/* angular:styles/component:css;0927dd65615aee249bbd13de57746d9d50860c9513f18d730f5b03afdcffafe4;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/pages/auth/login/login.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n.login-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: var(--min-height, 100vh);\n  padding: 24px 16px;\n}\n.login-box {\n  width: 100%;\n  max-width: 420px;\n}\n.login-head {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.login-avatar {\n  width: 52px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.login-avatar mat-icon {\n  color: white;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.login-head h2 {\n  font-size: 22px;\n  font-weight: 700;\n  margin-bottom: 6px;\n  letter-spacing: -0.3px;\n}\n.login-head p {\n  color: var(--bs-secondary-color, #6c757d);\n  font-size: 14px;\n  margin: 0;\n}\n.login-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.login-error mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.login-options {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.forgot-link {\n  font-size: 13px;\n  color: #6366f1;\n  text-decoration: none;\n  font-weight: 500;\n}\n.forgot-link:hover {\n  text-decoration: underline;\n}\n.signin-btn {\n  height: 44px !important;\n  font-size: 15px !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em !important;\n  border-radius: 10px !important;\n  gap: 6px;\n}\n.quick-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #9ca3af;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.account-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 20px;\n}\n.account-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  border: 1px solid var(--bs-border-color, #e5e7eb);\n  cursor: pointer;\n  transition: all 0.15s ease;\n  background: var(--bs-body-bg, #fff);\n}\n.account-item:hover {\n  border-color: #6366f1;\n  background: var(--bs-light, #f8f9fa);\n  transform: translateX(3px);\n}\n.account-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-red {\n  background: #ef4444;\n}\n.dot-yellow {\n  background: #f59e0b;\n}\n.dot-blue {\n  background: #3b82f6;\n}\n.dot-green {\n  background: #10b981;\n}\n.account-info {\n  flex: 1;\n}\n.account-email {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n}\n.account-role {\n  display: block;\n  font-size: 11px;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 600;\n}\n.account-arrow {\n  color: #d1d5db !important;\n  font-size: 18px !important;\n  width: 18px !important;\n  height: 18px !important;\n}\n.signup-line {\n  text-align: center;\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.signup-line a {\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n}\n.signup-line a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/auth/login/login.component.ts", lineNumber: 183 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-TDC6RRHZ.js.map
