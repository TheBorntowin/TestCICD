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
  MatButtonModule
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
  MatIcon,
  MatIconModule
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-O4O7EFUR.js";

// src/app/pages/auth/forgot-password/forgot-password.component.ts
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.forgotForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.forgotForm.valid) {
      const email = this.forgotForm.value.email;
      this.router.navigate(["/auth/change-password"], {
        state: { email }
      });
    }
  }
  static {
    this.\u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 26, vars: 2, consts: [[1, "row", "gx-3", "justify-content-center", "align-items-center", 2, "min-height", "var(--min-height)"], [1, "col", "maxwidth-dynamic", "position-relative", 2, "--mw-dynamic", "440px"], [1, "bg-light-gradient", "mb-3", "mb-lg-4"], [1, "p-4", "p-lg-5"], [1, "login-header", "mb-4"], [1, "mb-1"], [1, "text-secondary"], [1, "forgot-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "Enter your email"], ["matSuffix", ""], ["matButton", "filled", "color", "primary", "type", "submit", 1, "w-100", 3, "disabled"], [1, "text-center"], [1, "text-secondary", "mb-1"], ["matButton", "", "routerLink", "/auth/login", 1, "link"], [1, "material-icons-outlined"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-content", 3)(4, "div", 4)(5, "h1", 5);
        \u0275\u0275text(6, "Reset Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, "Enter your email to receive reset instructions");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "br");
        \u0275\u0275elementStart(10, "form", 7);
        \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_10_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(11, "mat-form-field", 8)(12, "mat-label");
        \u0275\u0275text(13, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 9);
        \u0275\u0275elementStart(15, "mat-icon", 10);
        \u0275\u0275text(16, "email");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "button", 11);
        \u0275\u0275text(18, "Send Reset Link");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "div", 12)(20, "p", 13);
        \u0275\u0275text(21, "Do you know your password?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a", 14)(23, "mat-icon", 15);
        \u0275\u0275text(24, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "Back to Sign In");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("formGroup", ctx.forgotForm);
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.forgotForm.invalid);
      }
    }, dependencies: [RouterModule, RouterLink, MatCardModule, MatCard, MatCardContent, MatInputModule, MatInput, MatFormField, MatLabel, MatSuffix, MatButtonModule, MatButton, MatIconModule, MatIcon, MatFormFieldModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [RouterModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule, ReactiveFormsModule, RouterModule], template: `
        <div class="row gx-3 justify-content-center align-items-center" style="min-height: var(--min-height)">
            <div class="col maxwidth-dynamic position-relative" style="--mw-dynamic:440px">
                <mat-card class="bg-light-gradient mb-3 mb-lg-4">
                    <mat-card-content class="p-4 p-lg-5">
                        <div class="login-header mb-4">
                            <h1 class="mb-1">Reset Password</h1>
                            <p class="text-secondary">Enter your email to receive reset instructions</p>
                        </div>
                        <br />
                        <form [formGroup]="forgotForm" (ngSubmit)="onSubmit()" class="forgot-form">
                            <mat-form-field appearance="outline" class="w-100">
                                <mat-label>Email</mat-label>
                                <input matInput formControlName="email" type="email" placeholder="Enter your email" />
                                <mat-icon matSuffix>email</mat-icon>
                            </mat-form-field>

                            <button matButton="filled" color="primary" type="submit" class="w-100" [disabled]="forgotForm.invalid">Send Reset Link</button>
                        </form>
                    </mat-card-content>
                </mat-card>
                <div class="text-center">
                    <p class="text-secondary mb-1">Do you know your password?</p>
                    <a matButton routerLink="/auth/login" class="link"><mat-icon class="material-icons-outlined">arrow_back</mat-icon>Back to Sign In</a>
                </div>
            </div>
        </div>
    ` }]
  }], () => [{ type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/pages/auth/forgot-password/forgot-password.component.ts", lineNumber: 44 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=forgot-password.component-RA7PZL7K.js.map
