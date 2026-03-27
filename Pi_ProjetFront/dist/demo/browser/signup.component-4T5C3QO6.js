import {
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
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/components/password-strength/password-strength.component.ts
var _c0 = ["passwordInput"];
var _c1 = ["passwordText"];
var _c2 = ["fieldPassWrap"];
var PasswordStrengthComponent = class _PasswordStrengthComponent {
  constructor() {
    this.hidePassword = true;
    this.strengthMessage = "";
  }
  ngAfterViewInit() {
    if (this.passwordInput && this.passwordInput.nativeElement) {
      this.passwordInput.nativeElement.addEventListener("keyup", () => {
        if (this.fieldPassWrap && this.fieldPassWrap.nativeElement) {
          this.strengthMessage = this.checkStrength(this.passwordInput.nativeElement.value, this.fieldPassWrap.nativeElement);
          if (this.fieldPassWrap.nativeElement) {
            if (this.passwordInput.nativeElement.value) {
              this.fieldPassWrap.nativeElement.classList.remove("show");
            } else {
              this.fieldPassWrap.nativeElement.classList.add("show");
              this.strengthMessage = "";
            }
          }
        }
      });
    }
  }
  checkStrength(password, fieldPassWrap) {
    let strength = 0;
    const checksterngthdisplay = this.fieldPassWrap.nativeElement;
    const textpassword = this.passwordText?.nativeElement;
    if (password.length < 6 || password.length < 1) {
      if (this.fieldPassWrap.nativeElement) {
        this.fieldPassWrap.nativeElement.className = "";
        this.fieldPassWrap.nativeElement.classList.add("check-strength", "short");
      }
      if (textpassword) {
        textpassword.className = "";
        textpassword.classList.add("text-secondary", "small");
      }
      return "Too short";
    }
    if (password.length > 7)
      strength += 1;
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
      strength += 1;
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))
      strength += 1;
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))
      strength += 1;
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/))
      strength += 1;
    if (strength < 2) {
      if (this.fieldPassWrap.nativeElement) {
        this.fieldPassWrap.nativeElement.className = "";
        this.fieldPassWrap.nativeElement.classList.add("check-strength", "weak");
      }
      if (textpassword) {
        textpassword.className = "";
        textpassword.classList.add("text-red", "small");
      }
      fieldPassWrap.classList.remove("is-valid");
      return "This is a weak";
    } else if (strength === 2) {
      if (this.fieldPassWrap.nativeElement) {
        this.fieldPassWrap.nativeElement.className = "";
        this.fieldPassWrap.nativeElement.classList.add("check-strength", "good");
      }
      if (textpassword) {
        textpassword.className = "";
        textpassword.classList.add("text-orange", "small");
      }
      fieldPassWrap.classList.remove("is-valid");
      return "This is a good";
    } else {
      if (this.fieldPassWrap.nativeElement) {
        this.fieldPassWrap.nativeElement.className = "";
        this.fieldPassWrap.nativeElement.classList.add("check-strength", "strong");
      }
      if (textpassword) {
        textpassword.className = "";
        textpassword.classList.add("text-green", "small");
      }
      fieldPassWrap.classList.add("is-valid");
      return "Wow! It's a strong";
    }
  }
  static {
    this.\u0275fac = function PasswordStrengthComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PasswordStrengthComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordStrengthComponent, selectors: [["app-password-strength"]], viewQuery: function PasswordStrengthComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.passwordInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.passwordText = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fieldPassWrap = _t.first);
      }
    }, decls: 22, vars: 3, consts: [["passwordInput", ""], ["fieldPassWrap", ""], ["passwordText", ""], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "password", "placeholder", "Create a strong password", 3, "type"], ["matIconButton", "", "matSuffix", "", "type", "button", 3, "click"], [1, "material-icons-outlined"], [1, "row", "gx-3", "mb-3"], [1, "col"], ["id", "", 1, "check-strength"], [1, "col-auto"]], template: function PasswordStrengthComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 3)(1, "mat-label");
        \u0275\u0275text(2, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "input", 4, 0);
        \u0275\u0275elementStart(5, "button", 5);
        \u0275\u0275listener("click", function PasswordStrengthComponent_Template_button_click_5_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(6, "mat-icon", 6);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9, 1);
        \u0275\u0275element(12, "div")(13, "div")(14, "div")(15, "div")(16, "div")(17, "div");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10)(19, "p", null, 2);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1(" ", ctx.strengthMessage, " ");
      }
    }, dependencies: [MatIcon, MatInputModule, MatInput, MatFormField, MatLabel, MatSuffix, MatFormFieldModule, MatButtonModule, MatIconButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordStrengthComponent, [{
    type: Component,
    args: [{ selector: "app-password-strength", standalone: true, imports: [MatIcon, MatInputModule, MatFormFieldModule, MatButtonModule], template: `
        <mat-form-field appearance="outline" class="w-100">
            <mat-label>Password</mat-label>
            <input matInput formControlName="password" #passwordInput [type]="hidePassword ? 'password' : 'text'" placeholder="Create a strong password" />
            <button matIconButton matSuffix (click)="hidePassword = !hidePassword" type="button">
                <mat-icon class="material-icons-outlined">{{ hidePassword ? "visibility_off" : "visibility" }}</mat-icon>
            </button>
        </mat-form-field>

        <div class="row gx-3 mb-3">
            <div class="col">
                <div id #fieldPassWrap class="check-strength">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="col-auto">
                <p #passwordText>
                    {{ strengthMessage }}
                </p>
            </div>
        </div>
    ` }]
  }], () => [], { passwordInput: [{
    type: ViewChild,
    args: ["passwordInput"]
  }], passwordText: [{
    type: ViewChild,
    args: ["passwordText"]
  }], fieldPassWrap: [{
    type: ViewChild,
    args: ["fieldPassWrap"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordStrengthComponent, { className: "PasswordStrengthComponent", filePath: "src/app/components/password-strength/password-strength.component.ts", lineNumber: 40 });
})();

// src/app/pages/auth/signup/signup.component.ts
var SignupComponent = class _SignupComponent {
  constructor(fb, router) {
    this.fb = fb;
    this.router = router;
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.hasMinLength = false;
    this.hasUppercase = false;
    this.hasLowercase = false;
    this.hasNumber = false;
    this.hasSpecialChar = false;
    this.signupForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      confirmPassword: ["", [Validators.required]]
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.signupForm.valid) {
      this.router.navigate(["/auth/signup-success"]);
    }
  }
  static {
    this.\u0275fac = function SignupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignupComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["app-signup"]], decls: 49, vars: 4, consts: [[1, "row", "gx-3", "justify-content-center", "align-items-center", 2, "min-height", "var(--min-height)"], [1, "col", "maxwidth-dynamic", "position-relative", 2, "--mw-dynamic", "440px"], [1, "bg-light-gradient"], [1, "p-4", "p-lg-5"], [1, "login-header", "mb-4"], [1, "mb-1"], [1, "text-secondary"], [1, "signup-form", "mb-3", "mb-lg-4", 3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-6"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "firstName", "placeholder", "John"], ["matInput", "", "formControlName", "lastName", "placeholder", "Doe"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "john@example.com"], ["matSuffix", ""], [1, "w-100"], ["matInput", "", "formControlName", "confirmPassword", "placeholder", "Confirm your password", 3, "type"], ["matIconButton", "", "matSuffix", "", "type", "button", 3, "click"], [1, "material-icons-outlined"], ["matButton", "filled", "color", "primary", "type", "submit", 1, "w-100", 3, "disabled"], [1, "row", "gx-3", "z-index-1", "position-relative"], [1, "col"], [1, "col-auto"], ["matButton", "", "routerLink", "/auth/login"], ["iconPositionEnd", "", 1, "material-icons-outlined"]], template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-content", 3)(4, "div", 4)(5, "h1", 5);
        \u0275\u0275text(6, "Create Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h3", 6);
        \u0275\u0275text(8, "Join us today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "form", 7);
        \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_9_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "mat-form-field", 10)(13, "mat-label");
        \u0275\u0275text(14, "First Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 9)(17, "mat-form-field", 10)(18, "mat-label");
        \u0275\u0275text(19, "Last Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "mat-form-field", 10)(22, "mat-label");
        \u0275\u0275text(23, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 13);
        \u0275\u0275elementStart(25, "mat-icon", 14);
        \u0275\u0275text(26, "email");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(27, "app-password-strength", 15);
        \u0275\u0275elementStart(28, "mat-form-field", 10)(29, "mat-label");
        \u0275\u0275text(30, "Confirm Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 16);
        \u0275\u0275elementStart(32, "button", 17);
        \u0275\u0275listener("click", function SignupComponent_Template_button_click_32_listener() {
          return ctx.hideConfirmPassword = !ctx.hideConfirmPassword;
        });
        \u0275\u0275elementStart(33, "mat-icon", 18);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "button", 19);
        \u0275\u0275text(36, "Create Account");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(37, "br");
        \u0275\u0275elementStart(38, "div", 20)(39, "div", 21)(40, "p");
        \u0275\u0275text(41, " Already have an account? ");
        \u0275\u0275element(42, "br");
        \u0275\u0275text(43, " Do sign in now ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 22)(45, "a", 23);
        \u0275\u0275text(46, "Sign In ");
        \u0275\u0275elementStart(47, "mat-icon", 24);
        \u0275\u0275text(48, "arrow_forward");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.signupForm);
        \u0275\u0275advance(22);
        \u0275\u0275property("type", ctx.hideConfirmPassword ? "password" : "text");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.hideConfirmPassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.signupForm.invalid);
      }
    }, dependencies: [MatCardModule, MatCard, MatCardContent, MatInputModule, MatInput, MatFormField, MatLabel, MatSuffix, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatFormFieldModule, MatProgressBarModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, PasswordStrengthComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupComponent, [{
    type: Component,
    args: [{ selector: "app-signup", standalone: true, imports: [MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatProgressBarModule, ReactiveFormsModule, RouterModule, PasswordStrengthComponent], template: `
        <div class="row gx-3 justify-content-center align-items-center" style="min-height: var(--min-height)">
            <div class="col maxwidth-dynamic position-relative" style="--mw-dynamic:440px">
                <mat-card class="bg-light-gradient ">
                    <mat-card-content class="p-4 p-lg-5">
                        <div class="login-header mb-4">
                            <h1 class="mb-1">Create Account</h1>
                            <h3 class="text-secondary">Join us today</h3>
                        </div>

                        <form [formGroup]="signupForm" (ngSubmit)="onSubmit()" class="signup-form mb-3 mb-lg-4">
                            <div class="row">
                                <div class="col-6">
                                    <mat-form-field appearance="outline" class="w-100">
                                        <mat-label>First Name</mat-label>
                                        <input matInput formControlName="firstName" placeholder="John" />
                                    </mat-form-field>
                                </div>
                                <div class="col-6">
                                    <mat-form-field appearance="outline" class="w-100">
                                        <mat-label>Last Name</mat-label>
                                        <input matInput formControlName="lastName" placeholder="Doe" />
                                    </mat-form-field>
                                </div>
                            </div>

                            <mat-form-field appearance="outline" class="w-100">
                                <mat-label>Email</mat-label>
                                <input matInput formControlName="email" type="email" placeholder="john@example.com" />
                                <mat-icon matSuffix>email</mat-icon>
                            </mat-form-field>

                            <app-password-strength class="w-100"></app-password-strength>

                            <mat-form-field appearance="outline" class="w-100">
                                <mat-label>Confirm Password</mat-label>
                                <input matInput formControlName="confirmPassword" [type]="hideConfirmPassword ? 'password' : 'text'" placeholder="Confirm your password" />
                                <button matIconButton matSuffix (click)="hideConfirmPassword = !hideConfirmPassword" type="button">
                                    <mat-icon class="material-icons-outlined">{{ hideConfirmPassword ? "visibility_off" : "visibility" }}</mat-icon>
                                </button>
                            </mat-form-field>

                            <button matButton="filled" color="primary" type="submit" class="w-100" [disabled]="signupForm.invalid">Create Account</button>
                        </form>
                        <br />
                        <div class="row gx-3 z-index-1 position-relative">
                            <div class="col">
                                <p>
                                    Already have an account? <br />
                                    Do sign in now
                                </p>
                            </div>
                            <div class="col-auto">
                                <a matButton routerLink="/auth/login">Sign In <mat-icon class="material-icons-outlined" iconPositionEnd>arrow_forward</mat-icon></a>
                            </div>
                        </div>
                    </mat-card-content>
                </mat-card>
            </div>
        </div>
    ` }]
  }], () => [{ type: FormBuilder }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/pages/auth/signup/signup.component.ts", lineNumber: 80 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=signup.component-4T5C3QO6.js.map
