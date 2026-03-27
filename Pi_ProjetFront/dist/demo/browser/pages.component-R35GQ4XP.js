import {
  MatToolbarModule
} from "./chunk-SFUPPXOD.js";
import {
  MatButtonToggleModule
} from "./chunk-A5PEKAIR.js";
import {
  MatMenuModule
} from "./chunk-SP2SPZAY.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
  MatListModule
} from "./chunk-ALLV6QEF.js";
import "./chunk-CWBJY2AK.js";
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import {
  MatInputModule
} from "./chunk-45QHUHCH.js";
import "./chunk-7XFTNJ2Y.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButtonModule
} from "./chunk-ZLA4QS3A.js";
import {
  RouterLink
} from "./chunk-DYOMXT5J.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import "./chunk-XPQBAS5O.js";
import {
  FormsModule
} from "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  CommonModule,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/pages.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function PagesComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-card", 10)(2, "mat-card-content")(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275interpolate(page_r1.redirectTo));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(page_r1.path);
  }
}
var PagesComponent = class _PagesComponent {
  constructor() {
    this.pagesList = [
      // app pages
      {
        path: "Dashboard",
        redirectTo: "/app/dashboard"
      },
      {
        path: "Projects",
        redirectTo: "/app/projects"
      },
      {
        path: "Project Details",
        redirectTo: "/app/project-details"
      },
      {
        path: "Employee",
        redirectTo: "/app/employee"
      },
      {
        path: "Time Tracking",
        redirectTo: "/app/time-tracking"
      },
      {
        path: "Task Details",
        redirectTo: "/app/task-details"
      },
      {
        path: "Kanban",
        redirectTo: "/app/kanban"
      },
      {
        path: "Gantt Chart",
        redirectTo: "/app/gantt-chart"
      },
      {
        path: "All Tasks",
        redirectTo: "/app/all-tasks"
      },
      {
        path: "Orders",
        redirectTo: "/app/orders"
      },
      {
        path: "Customers",
        redirectTo: "/app/customers"
      },
      {
        path: "Ecommerce",
        redirectTo: "/app/ecommerce"
      },
      {
        path: "Add Product",
        redirectTo: "/app/add-product"
      },
      {
        path: "Cart",
        redirectTo: "/app/cart"
      },
      {
        path: "Checkout",
        redirectTo: "/app/checkout"
      },
      {
        path: "Invoice",
        redirectTo: "/app/invoice"
      },
      {
        path: "Products",
        redirectTo: "/app/products"
      },
      {
        path: "Product",
        redirectTo: "/app/product"
      },
      {
        path: "Calendar",
        redirectTo: "/app/calendar"
      },
      {
        path: "Explorer",
        redirectTo: "/app/explorer"
      },
      {
        path: "Chat",
        redirectTo: "/app/chat"
      },
      {
        path: "Profile",
        redirectTo: "/app/profile"
      },
      {
        path: "Plans",
        redirectTo: "/app/plans"
      },
      {
        path: "Subscription",
        redirectTo: "/app/subscription"
      },
      {
        path: "Settings",
        redirectTo: "/app/settings"
      },
      // auth layout pages
      {
        path: "Landing",
        redirectTo: "/auth/landing"
      },
      {
        path: "Login",
        redirectTo: "/auth/login"
      },
      {
        path: "Signup",
        redirectTo: "/auth/signup"
      },
      {
        path: "Forgot Password",
        redirectTo: "/auth/forgot-password"
      },
      {
        path: "Change Password",
        redirectTo: "/auth/change-password"
      },
      {
        path: "Signup Success",
        redirectTo: "/auth/signup-success"
      },
      // front end website
      {
        path: "Website",
        redirectTo: "/app/website"
      },
      {
        path: "Blog",
        redirectTo: "/app/blog"
      },
      {
        path: "Blog Details",
        redirectTo: "/app/blog-details"
      },
      {
        path: "Case Study",
        redirectTo: "/app/case-study"
      },
      {
        path: "Contact Us",
        redirectTo: "/app/contact-us"
      },
      {
        path: "About Us",
        redirectTo: "/app/about-us"
      },
      {
        path: "Coming Soon",
        redirectTo: "/coming-soon"
      },
      {
        path: "404 - Not Found",
        redirectTo: "/**"
      }
    ];
  }
  static {
    this.\u0275fac = function PagesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PagesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagesComponent, selectors: [["app-pages"]], decls: 13, vars: 1, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "text-secondary", "small"], [1, "col-auto", "ms-auto"], [1, "container"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3"], [1, "mb-3", "mb-lg-4", 3, "routerLink"]], template: function PagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "All Pages");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(8, "div", 6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
        \u0275\u0275repeaterCreate(11, PagesComponent_For_12_Template, 5, 3, "div", 9, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("Pages (", ctx.pagesList.length, ")");
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.pagesList);
      }
    }, dependencies: [CommonModule, RouterLink, FormsModule, MatListModule, MatButtonToggleModule, MatMenuModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule, MatCard, MatCardContent, MatToolbarModule, MatButtonModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagesComponent, [{
    type: Component,
    args: [{ selector: "app-pages", standalone: true, imports: [CommonModule, RouterLink, FormsModule, MatListModule, MatButtonToggleModule, MatMenuModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule, MatButtonModule], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Pages ({{ pagesList.length }})</h3>
                        <p class="text-secondary small">All Pages</p>
                    </div>

                    <div class="col-auto ms-auto"></div>
                </div>
            </mat-card>
        </div>

        <div class="container">
            <div class="row gx-3 gx-lg-4">
                @for( page of pagesList; track page.path){
                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                    <mat-card routerLink="{{ page.redirectTo }}" class=" mb-3 mb-lg-4">
                        <mat-card-content>
                            <p>{{ page.path }}</p>
                        </mat-card-content>
                    </mat-card>
                </div>
                }
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagesComponent, { className: "PagesComponent", filePath: "src/app/pages/app/pages.component.ts", lineNumber: 55 });
})();
export {
  PagesComponent
};
//# sourceMappingURL=pages.component-R35GQ4XP.js.map
