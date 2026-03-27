import {
  MatCard,
  MatCardImage,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-ZLA4QS3A.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DYOMXT5J.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-O4O7EFUR.js";

// src/app/pages/auth/signup-success/signup-success.component.ts
var SignupSuccessComponent = class _SignupSuccessComponent {
  static {
    this.\u0275fac = function SignupSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SignupSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupSuccessComponent, selectors: [["app-signup-success"]], decls: 28, vars: 0, consts: [[1, "row", "gx-3", "justify-content-center", "align-items-center", 2, "min-height", "var(--min-height)"], [1, "col", "maxwidth-dynamic", "position-relative", 2, "--mw-dynamic", "440px"], [1, "text-center", "mb-3", "mb-lg-4"], ["src", "assets/img/success-1.png", "alt", "", 1, "width-160", "mx-auto"], [1, "mb-2"], [1, "opacity-75"], [1, "row", "gx-3", "gx-lg-4", "mb-3", "mb-lg-4"], [1, "col", "theme-blue"], ["routerLink", "/app", 1, "text-center", "hover", "bg-light-theme"], ["mat-card-image", "", 1, "coverimg", "height-160", "w-100", "start-0", "top-0"], ["src", "assets/img/user-9.jpg", "alt", ""], [1, "text-center", "position-absolute", "start-0", "bottom-0", "mb-3", "w-100"], [1, "badge"], [1, "col", "theme-red"], ["src", "assets/img/user-2.jpg", "alt", ""], [1, "text-center"], ["matButton", "elevated", "color", "primary", "routerLink", "/auth/login", 1, "continue-button"], [1, "material-icons-outlined"]], template: function SignupSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "h1", 4);
        \u0275\u0275text(5, "Account Created Successfully!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Welcome to Saas Dashboard! Your account has been created and you can now access all features. Choose appropriate to continue...");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "mat-card", 8)(11, "div", 9);
        \u0275\u0275element(12, "img", 10);
        \u0275\u0275elementStart(13, "p", 11)(14, "span", 12);
        \u0275\u0275text(15, "Male");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(16, "div", 13)(17, "mat-card", 8)(18, "div", 9);
        \u0275\u0275element(19, "img", 14);
        \u0275\u0275elementStart(20, "p", 11)(21, "span", 12);
        \u0275\u0275text(22, "Female");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(23, "div", 15)(24, "button", 16)(25, "mat-icon", 17);
        \u0275\u0275text(26, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "Back to Sign In");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [MatCardModule, MatCard, MatCardImage, MatButtonModule, MatButton, MatIconModule, MatIcon, RouterModule, RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupSuccessComponent, [{
    type: Component,
    args: [{ selector: "app-signup-success", standalone: true, imports: [MatCardModule, MatButtonModule, MatIconModule, RouterModule], template: `
        <div class="row gx-3 justify-content-center align-items-center" style="min-height: var(--min-height)">
            <div class="col maxwidth-dynamic position-relative" style="--mw-dynamic:440px">
                <div class="text-center mb-3 mb-lg-4">
                    <img src="assets/img/success-1.png" alt="" class="width-160 mx-auto" />
                    <h1 class="mb-2">Account Created Successfully!</h1>
                    <p class="opacity-75">Welcome to Saas Dashboard! Your account has been created and you can now access all features. Choose appropriate to continue...</p>
                </div>

                <div class="row gx-3 gx-lg-4 mb-3 mb-lg-4">
                    <div class="col theme-blue">
                        <mat-card class="text-center hover bg-light-theme" routerLink="/app">
                            <div mat-card-image class="coverimg height-160 w-100 start-0 top-0 ">
                                <img src="assets/img/user-9.jpg" alt="" />

                                <p class="text-center position-absolute start-0 bottom-0 mb-3 w-100">
                                    <span class="badge">Male</span>
                                </p>
                            </div>
                        </mat-card>
                    </div>
                    <div class="col theme-red">
                        <mat-card class="text-center hover bg-light-theme" routerLink="/app">
                            <div mat-card-image class="coverimg height-160 w-100 start-0 top-0 ">
                                <img src="assets/img/user-2.jpg" alt="" />

                                <p class="text-center position-absolute start-0 bottom-0 mb-3 w-100">
                                    <span class="badge">Female</span>
                                </p>
                            </div>
                        </mat-card>
                    </div>
                </div>
                <div class="text-center">
                    <button matButton="elevated" color="primary" routerLink="/auth/login" class="continue-button"><mat-icon class="material-icons-outlined">arrow_back</mat-icon>Back to Sign In</button>
                </div>
            </div>
        </div>
    ` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupSuccessComponent, { className: "SignupSuccessComponent", filePath: "src/app/pages/auth/signup-success/signup-success.component.ts", lineNumber: 52 });
})();
export {
  SignupSuccessComponent
};
//# sourceMappingURL=signup-success.component-4QFOOXBR.js.map
