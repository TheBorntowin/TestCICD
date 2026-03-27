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
  MatButtonModule
} from "./chunk-ZLA4QS3A.js";
import {
  Router
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
  Location,
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-O4O7EFUR.js";

// src/app/pages/full/coming-soon/coming-soon.component.ts
function ComingSoonComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, "We'll be going live in...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 19)(3, "div", 20)(4, "h2", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 22);
    \u0275\u0275text(7, "Days");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 20)(9, "h2", 23);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "small", 22);
    \u0275\u0275text(12, "Hours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 20)(14, "h2", 24);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "small", 22);
    \u0275\u0275text(17, "Min");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 20)(19, "h2", 25);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small", 22);
    \u0275\u0275text(22, "Sec");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.days);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.hours);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.minutes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.seconds);
  }
}
function ComingSoonComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.finishedMessage);
  }
}
var ComingSoonComponent = class _ComingSoonComponent {
  constructor(fb, router, location) {
    this.fb = fb;
    this.router = router;
    this.location = location;
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.countdownFinished = false;
    this.finishedMessage = "Our website is live.";
    this.notifyForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
    this.countDownDate = (/* @__PURE__ */ new Date("October 7, 2026 18:32:25")).getTime();
  }
  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1e3);
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  updateCountdown() {
    const now = (/* @__PURE__ */ new Date()).getTime();
    const distance = this.countDownDate - now;
    if (distance < 0) {
      clearInterval(this.intervalId);
      this.countdownFinished = true;
    } else {
      this.days = Math.floor(distance / (1e3 * 60 * 60 * 24));
      this.hours = Math.floor(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      this.minutes = Math.floor(distance % (1e3 * 60 * 60) / (1e3 * 60));
      this.seconds = Math.floor(distance % (1e3 * 60) / 1e3);
    }
  }
  onNotify() {
    if (this.notifyForm.valid) {
      console.log("Notification signup:", this.notifyForm.value.email);
    }
  }
  goBack() {
    this.router.navigate(["/app"]);
  }
  static {
    this.\u0275fac = function ComingSoonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComingSoonComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Location));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 30, vars: 4, consts: [[1, "row", "gx-3", "gx-lg-4", "h-100", "align-items-center", "justify-content-center"], [1, "col-12", "mb-auto"], [1, "col-12", "col-sm-10", "col-lg-8", "col-xl-6"], [1, "mb-3", "mb-lg-4", "text-center"], ["src", "assets/img/logo-512.png", "alt", "", 1, "avatar", "avatar-60", "mx-auto", "mb-3"], [1, "mb-1"], [1, "text-secondary", "small", "mb-4", "mb-lg-5"], [1, "mb-2", "text-theme"], [1, "text-secondary", "fw-normal"], [1, "w-100", "mx-auto", "maxwidth-dynamic", 2, "--mw-dynamic", "380px", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "your@email.com"], ["matPrefix", ""], ["matSuffix", "", "matButton", "filled", "color", "primary", "type", "submit", 1, "me-2", 3, "disabled"], [1, "text-center", "mb-3", "mb-lg-4"], ["matButton", "", 3, "click"], [1, "material-icons-outlined"], [1, "col-12", "mt-auto"], ["id", "endtimer", 1, "mt-lg-4"], [1, "row", "gx-3", "gx-lg-4", "align-items-center", "justify-content-center", "text-center", "mb-3", "mb-lg-4"], [1, "col", "col-md-auto"], ["id", "days", 1, "fw-bold", "mb-1", "h1"], [1, "opacity-50"], ["id", "hrs", 1, "fw-bold", "mb-1", "h1"], ["id", "min", 1, "fw-bold", "mb-1", "h1"], ["id", "sec", 1, "fw-bold", "mb-1", "h1"]], template: function ComingSoonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementStart(5, "h2", 5);
        \u0275\u0275text(6, "SaaS Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 6);
        \u0275\u0275text(8, "Template by AdminUIUX");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1", 7);
        \u0275\u0275text(10, "We're still making our website");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h3", 8);
        \u0275\u0275text(12, "We are at the edge of our final release");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "form", 9);
        \u0275\u0275listener("ngSubmit", function ComingSoonComponent_Template_form_ngSubmit_13_listener() {
          return ctx.onNotify();
        });
        \u0275\u0275elementStart(14, "mat-form-field", 10)(15, "mat-label");
        \u0275\u0275text(16, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 11);
        \u0275\u0275elementStart(18, "mat-icon", 12);
        \u0275\u0275text(19, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 13);
        \u0275\u0275text(21, "Notify");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 14)(23, "button", 15);
        \u0275\u0275listener("click", function ComingSoonComponent_Template_button_click_23_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(24, "mat-icon", 16);
        \u0275\u0275text(25, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Home ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 17);
        \u0275\u0275conditionalCreate(28, ComingSoonComponent_Conditional_28_Template, 23, 4);
        \u0275\u0275conditionalCreate(29, ComingSoonComponent_Conditional_29_Template, 2, 1, "p", 18);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("formGroup", ctx.notifyForm);
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.notifyForm.invalid);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(!ctx.countdownFinished ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.countdownFinished ? 29 : -1);
      }
    }, dependencies: [MatCardModule, MatButtonModule, MatButton, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatLabel, MatPrefix, MatSuffix, MatFormFieldModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComingSoonComponent, [{
    type: Component,
    args: [{ selector: "app-coming-soon", standalone: true, imports: [MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule], template: `
        <div class="row gx-3 gx-lg-4 h-100 align-items-center justify-content-center">
            <div class="col-12 mb-auto"></div>
            <div class="col-12 col-sm-10 col-lg-8 col-xl-6">
                <div class="mb-3 mb-lg-4 text-center">
                    <img src="assets/img/logo-512.png" alt="" class="avatar avatar-60 mx-auto mb-3" />
                    <h2 class="mb-1">SaaS Dashboard</h2>
                    <p class="text-secondary small mb-4 mb-lg-5">Template by AdminUIUX</p>

                    <h1 class="mb-2 text-theme">We're still making our website</h1>
                    <h3 class="text-secondary fw-normal">We are at the edge of our final release</h3>
                </div>
                <!-- subscription -->
                <form [formGroup]="notifyForm" (ngSubmit)="onNotify()" class="w-100 mx-auto maxwidth-dynamic" style="--mw-dynamic:380px;">
                    <mat-form-field appearance="outline" class="w-100">
                        <mat-label>Email Address</mat-label>
                        <input matInput formControlName="email" type="email" placeholder="your@email.com" />
                        <mat-icon matPrefix>email</mat-icon>
                        <button matSuffix matButton="filled" color="primary" type="submit" [disabled]="notifyForm.invalid" class="me-2">Notify</button>
                    </mat-form-field>
                </form>

                <div class="text-center mb-3 mb-lg-4">
                    <button matButton (click)="goBack()">
                        <mat-icon class="material-icons-outlined">arrow_back</mat-icon>
                        Home
                    </button>
                </div>
            </div>
            <div class="col-12 mt-auto">
                @if (!countdownFinished) {
                <p class="text-center mb-3 mb-lg-4">We'll be going live in...</p>
                <div class="row gx-3 gx-lg-4 align-items-center justify-content-center text-center mb-3 mb-lg-4">
                    <div class="col col-md-auto">
                        <h2 id="days" class="fw-bold mb-1 h1">{{ days }}</h2>
                        <small class="opacity-50">Days</small>
                    </div>
                    <div class="col col-md-auto">
                        <h2 id="hrs" class="fw-bold mb-1 h1">{{ hours }}</h2>
                        <small class="opacity-50">Hours</small>
                    </div>
                    <div class="col col-md-auto">
                        <h2 id="min" class="fw-bold mb-1 h1">{{ minutes }}</h2>
                        <small class="opacity-50">Min</small>
                    </div>
                    <div class="col col-md-auto">
                        <h2 id="sec" class="fw-bold mb-1 h1">{{ seconds }}</h2>
                        <small class="opacity-50">Sec</small>
                    </div>
                </div>
                } @if (countdownFinished) {
                <p id="endtimer" class="mt-lg-4">{{ finishedMessage }}</p>
                }
            </div>
        </div>
    ` }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: Location }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonComponent, { className: "ComingSoonComponent", filePath: "src/app/pages/full/coming-soon/coming-soon.component.ts", lineNumber: 73 });
})();
export {
  ComingSoonComponent
};
//# sourceMappingURL=coming-soon.component-GC2EM3XI.js.map
