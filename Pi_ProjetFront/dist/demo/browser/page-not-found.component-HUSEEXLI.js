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
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-O4O7EFUR.js";

// src/app/pages/full/page-not-found/page-not-found.component.ts
var PageNotFoundComponent = class _PageNotFoundComponent {
  constructor(router) {
    this.router = router;
  }
  goHome() {
    this.router.navigate(["/auth/login"]);
  }
  goBack() {
    window.history.back();
  }
  static {
    this.\u0275fac = function PageNotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageNotFoundComponent)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 22, vars: 0, consts: [[1, "coverimg", "h-100", "w-100", "position-absolute"], ["src", "assets/img/404.jpg", "alt", ""], [1, "row", "gx-3", "gx-lg-4", "h-100"], [1, "col-12", "mb-4"], [1, "col-12", "col-lg-10", "col-xl-8", "mx-auto", "text-white"], [1, "text-center", "z-index-1", "position-relative"], [1, "fw-bold", "text-white", "mb-4", 2, "font-size", "60px"], [1, "mb-3", "mb-lg-4"], [1, "col-12", "mt-auto"], [1, "action-buttons", "text-center", "mb-3", "mb-lg-4"], ["matButton", "elevated", "color", "primary", 1, "mx-1", 3, "click"], [1, "material-icons-outlined"], ["matButton", "filled", 1, "mx-1", 3, "click"]], template: function PageNotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275element(3, "div", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
        \u0275\u0275text(7, "We are missing something");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h2", 7);
        \u0275\u0275text(9, "Page you are looking for ");
        \u0275\u0275element(10, "br");
        \u0275\u0275text(11, "is doesn't exist or has been moved.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "button", 10);
        \u0275\u0275listener("click", function PageNotFoundComponent_Template_button_click_14_listener() {
          return ctx.goHome();
        });
        \u0275\u0275elementStart(15, "mat-icon", 11);
        \u0275\u0275text(16, "home");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Go Home ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275listener("click", function PageNotFoundComponent_Template_button_click_18_listener() {
          return ctx.goBack();
        });
        \u0275\u0275elementStart(19, "mat-icon", 11);
        \u0275\u0275text(20, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Go Back ");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [MatCardModule, MatButtonModule, MatButton, MatIconModule, MatIcon], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageNotFoundComponent, [{
    type: Component,
    args: [{ selector: "app-page-not-found", standalone: true, imports: [MatCardModule, MatButtonModule, MatIconModule], template: `
        <div class="coverimg h-100 w-100 position-absolute">
            <img src="assets/img/404.jpg" alt="" />
        </div>
        <div class="row gx-3 gx-lg-4 h-100">
            <div class="col-12 mb-4"></div>
            <div class="col-12 col-lg-10 col-xl-8 mx-auto text-white">
                <div class="text-center z-index-1 position-relative">
                    <div style="font-size:60px;" class="fw-bold text-white mb-4">We are missing something</div>
                    <h2 class="mb-3 mb-lg-4">Page you are looking for <br />is doesn't exist or has been moved.</h2>
                </div>
            </div>
            <div class="col-12 mt-auto">
                <div class="action-buttons text-center mb-3 mb-lg-4">
                    <button matButton="elevated" color="primary" (click)="goHome()" class="mx-1">
                        <mat-icon class="material-icons-outlined">home</mat-icon>
                        Go Home
                    </button>
                    <button matButton="filled" (click)="goBack()" class=" mx-1">
                        <mat-icon class="material-icons-outlined">arrow_back</mat-icon>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    ` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageNotFoundComponent, { className: "PageNotFoundComponent", filePath: "src/app/pages/full/page-not-found/page-not-found.component.ts", lineNumber: 39 });
})();
export {
  PageNotFoundComponent
};
//# sourceMappingURL=page-not-found.component-HUSEEXLI.js.map
