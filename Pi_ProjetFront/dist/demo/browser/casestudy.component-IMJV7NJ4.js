import {
  register
} from "./chunk-S5VFQUTS.js";
import {
  MatExpansionModule
} from "./chunk-BPWI3AKS.js";
import {
  MatToolbarModule
} from "./chunk-SFUPPXOD.js";
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
  MatCardHeader,
  MatCardImage,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-ZLA4QS3A.js";
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
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-O4O7EFUR.js";

// src/app/pages/website/casestudy.component.ts
function CaseStudyComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-card", 24)(2, "div", 28);
    \u0275\u0275element(3, "img", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-card-header")(5, "div", 30)(6, "div", 31)(7, "div", 32)(8, "div", 33);
    \u0275\u0275element(9, "img", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 35)(11, "mat-card-subtitle");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-card-title");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "mat-card-content", 36)(16, "p", 13);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 37);
    \u0275\u0275text(19, " View Details");
    \u0275\u0275elementStart(20, "mat-icon", 38);
    \u0275\u0275text(21, "arrow_forward");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const caseStudy_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", caseStudy_r1.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275property("src", caseStudy_r1.imageUrl2, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(caseStudy_r1.company);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(caseStudy_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(caseStudy_r1.description);
  }
}
register();
var CaseStudyComponent = class _CaseStudyComponent {
  constructor() {
    this.caseStudies = signal([
      {
        title: "Revolutionizing Retail",
        company: "Global Retail Corp.",
        description: "A comprehensive digital transformation project that streamlined supply chain management and enhanced the customer experience, leading to a 30% increase in online sales.",
        imageUrl: "assets/img/product1.jpg",
        imageUrl2: "assets/img/product6.jpg"
      },
      {
        title: "Modernizing Healthcare",
        company: "HealthTech Solutions",
        description: "Built a secure and intuitive patient portal that improved communication, simplified appointment scheduling, and integrated with existing hospital systems.",
        imageUrl: "assets/img/product2.jpg",
        imageUrl2: "assets/img/product5.jpg"
      },
      {
        title: "FinTech Innovation",
        company: "SecureBank",
        description: "Developed a new mobile banking application with enhanced security features and a user-centric design, resulting in a 40% rise in mobile user adoption.",
        imageUrl: "assets/img/product3.jpg",
        imageUrl2: "assets/img/product4.jpg"
      },
      {
        title: "Logistics Optimization",
        company: "LogiFlow",
        description: "Implemented a real-time tracking and analytics platform that reduced delivery times by 20% and improved operational efficiency across the board.",
        imageUrl: "assets/img/product4.jpg",
        imageUrl2: "assets/img/product1.jpg"
      },
      {
        title: "Sustainable Energy Management",
        company: "Green Power Co.",
        description: "Created an intelligent dashboard for monitoring and managing energy consumption, helping clients reduce their carbon footprint and lower utility costs.",
        imageUrl: "assets/img/product5.jpg",
        imageUrl2: "assets/img/product2.jpg"
      },
      {
        title: "E-commerce Platform",
        company: "FashionHub",
        description: "Re-platformed their e-commerce site to a modern, scalable architecture, improving site performance and enabling a faster rollout of new features and campaigns.",
        imageUrl: "assets/img/product6.jpg",
        imageUrl2: "assets/img/product3.jpg"
      }
    ], ...ngDevMode ? [{ debugName: "caseStudies" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngAfterInit() {
  }
  static {
    this.\u0275fac = function CaseStudyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CaseStudyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseStudyComponent, selectors: [["app-case-study"]], decls: 84, vars: 0, consts: [[1, "bg-theme-white-gradient", "bg-light-gradient", "position-relative", "pt-5", "mb-3", "mb-lg-4"], [1, "container", "py-4", "pt-lg-5", "z-index-1", "position-relative"], [1, "row", "gx-3", "gx-lg-4", "justify-content-center", "text-center"], [1, "col-12", "col-lg-8", "col-xl-6", "pt-3", "pt-lg-5"], [1, "opacity-75"], [1, "mb-3"], [1, "text-theme"], [1, "opacity-75", "mb-4", "mb-lg-5"], [1, "container"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "z-index-1", "py-4", "py-lg-5", "text-center"], [1, "mb-2"], [1, "text-secondary"], [1, "row", "gx-3", "gx-lg-4", "justify-content-center", "text-center", "mb-3", "mb-lg-4"], [1, "col-4", "col-lg-2", "col-xl-2"], [1, "coverimg", "avatar", "avatar-60", "rounded-circle", "grayscale", "mb-3"], ["src", "assets/img/logo-512.png", "alt", "Company Image"], [1, "text-secondary", "small"], [1, "row", "gx-3", "gx-lg-4", "align-items-center", "mb-3", "mb-lg-4", "py-4", "py-lg-5"], [1, "col-6", "col-lg-6"], [1, ""], [1, "text-secondary", "mb-4"], [1, "col-6", "col-lg-3"], [1, "mb-3", "mb-lg-4"], [1, "mb-3", "mb-lg-4", "overflow-hidden"], [1, "coverimg", "height-150", "w-100"], ["src", "assets/img/background2.jpg", "alt", ""], ["mat-card-image", "", 1, "coverimg", "w-100", "height-200"], ["alt", "Case Study Image", 3, "src"], [1, "w-100"], [1, "row", "gx-3"], [1, "col-auto"], [1, "coverimg", "avatar", "avatar-60", "rounded-circle"], ["alt", "Company Image", 3, "src"], [1, "col"], [1, "pt-3", "pt-lg-4"], ["matButton", ""], ["iconPositionEnd", ""]], template: function CaseStudyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        \u0275\u0275text(5, "Case Study");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 5);
        \u0275\u0275text(7, " Must watch our latest ");
        \u0275\u0275element(8, "br");
        \u0275\u0275elementStart(9, "span", 6);
        \u0275\u0275text(10, "Work Case Study");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " for Web & Mobile Apps ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 7);
        \u0275\u0275text(13, "Enhance your web projects with our responsive Angular Material Admin Dashboard Template. This comprehensive UI kit provides a sleek, modern, and intuitive design to help you build powerful, feature-rich admin panels with ease.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 9);
        \u0275\u0275repeaterCreate(16, CaseStudyComponent_For_17_Template, 22, 5, "div", 10, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 11)(19, "h1", 12);
        \u0275\u0275text(20, "Our clients");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p", 13);
        \u0275\u0275text(22, "View our work and projects");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "br");
        \u0275\u0275elementStart(24, "div", 14)(25, "div", 15)(26, "div", 16);
        \u0275\u0275element(27, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p", 18);
        \u0275\u0275text(29, "Company 1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 15)(31, "div", 16);
        \u0275\u0275element(32, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p", 18);
        \u0275\u0275text(34, "Company 2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 15)(36, "div", 16);
        \u0275\u0275element(37, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p", 18);
        \u0275\u0275text(39, "Company 3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 15)(41, "div", 16);
        \u0275\u0275element(42, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p", 18);
        \u0275\u0275text(44, "Company 4");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 15)(46, "div", 16);
        \u0275\u0275element(47, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 18);
        \u0275\u0275text(49, "Company 5");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "div", 19)(51, "div", 20)(52, "h3", 4);
        \u0275\u0275text(53, "Responsive widget HTML development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "h1", 21);
        \u0275\u0275text(55, "Good code structures ");
        \u0275\u0275elementStart(56, "span", 6);
        \u0275\u0275text(57, "responsive and customizable");
        \u0275\u0275elementEnd();
        \u0275\u0275text(58, " with latest UI trends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p", 22);
        \u0275\u0275text(60, "Our template is specifically designed to fast-track your SaaS Dashboard Multipurpose Admin, finance, ecommerce, social, calendar, dashboards for business domain by providing ready-to-use UI pages tailored to industries. With pre-built pages like Shop, Products, dashboards, statistics, finace, cart, reminders, user profiles, invoice, and user settings etc.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 23)(62, "mat-card", 24)(63, "mat-card-content")(64, "h2");
        \u0275\u0275text(65, "Easy to Download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "p", 13);
        \u0275\u0275text(67, "We have document file in folder to guide you about code structure, customization, personalization settings defaults define.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "mat-card", 24)(69, "mat-card-content")(70, "h2");
        \u0275\u0275text(71, "Ready-to-use Pages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p", 13);
        \u0275\u0275text(73, "As domain specific app template it's benefit to have major commonly used screen ready. Choose page template and start development process.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(74, "div", 23)(75, "mat-card", 24)(76, "mat-card-content")(77, "h2");
        \u0275\u0275text(78, "Personalize Branding");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "p", 13);
        \u0275\u0275text(80, "Choose your branding assets and color scheme and define it in main layouts. Template used local storage for live personalize value storage.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "mat-card", 25)(82, "div", 26);
        \u0275\u0275element(83, "img", 27);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275repeater(ctx.caseStudies());
      }
    }, dependencies: [CommonModule, FormsModule, MatListModule, MatMenuModule, MatIconModule, MatIcon, MatExpansionModule, MatInputModule, MatFormFieldModule, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle, MatToolbarModule, MatButtonModule, MatButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseStudyComponent, [{
    type: Component,
    args: [{ selector: "app-case-study", standalone: true, imports: [CommonModule, FormsModule, MatListModule, MatMenuModule, MatIconModule, MatExpansionModule, MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule, MatButtonModule], template: `
        <div class="bg-theme-white-gradient bg-light-gradient position-relative pt-5 mb-3 mb-lg-4">
            <div class="container py-4 pt-lg-5 z-index-1 position-relative ">
                <div class="row gx-3 gx-lg-4 justify-content-center text-center">
                    <div class="col-12 col-lg-8 col-xl-6 pt-3 pt-lg-5">
                        <h4 class="opacity-75">Case Study</h4>
                        <h1 class="mb-3">
                            Must watch our latest <br />
                            <span class="text-theme">Work Case Study</span> for Web & Mobile Apps
                        </h1>
                        <p class="opacity-75 mb-4 mb-lg-5">Enhance your web projects with our responsive Angular Material Admin Dashboard Template. This comprehensive UI kit provides a sleek, modern, and intuitive design to help you build powerful, feature-rich admin panels with ease.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row gx-3 gx-lg-4">
                @for (caseStudy of caseStudies(); track $index) {
                <!-- Blog Post Card -->
                <div class="col-12 col-md-6 col-lg-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <!-- Blog Image -->
                        <div mat-card-image class="coverimg w-100 height-200">
                            <img [src]="caseStudy.imageUrl" alt="Case Study Image" />
                        </div>
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3">
                                    <div class="col-auto">
                                        <div class="coverimg avatar avatar-60 rounded-circle">
                                            <img [src]="caseStudy.imageUrl2" alt="Company Image" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <mat-card-subtitle>{{ caseStudy.company }}</mat-card-subtitle>
                                        <mat-card-title>{{ caseStudy.title }}</mat-card-title>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content class="pt-3 pt-lg-4">
                            <p class="text-secondary">{{ caseStudy.description }}</p>
                            <a matButton> View Details<mat-icon iconPositionEnd>arrow_forward</mat-icon> </a>
                        </mat-card-content>
                    </mat-card>
                </div>
                }
            </div>

            <div class="z-index-1 py-4 py-lg-5 text-center">
                <h1 class="mb-2">Our clients</h1>
                <p class="text-secondary">View our work and projects</p>
                <br />
                <div class="row gx-3 gx-lg-4 justify-content-center text-center mb-3 mb-lg-4">
                    <div class="col-4 col-lg-2 col-xl-2">
                        <div class="coverimg avatar avatar-60 rounded-circle grayscale mb-3">
                            <img src="assets/img/logo-512.png" alt="Company Image" />
                        </div>
                        <p class="text-secondary small">Company 1</p>
                    </div>
                    <div class="col-4 col-lg-2 col-xl-2">
                        <div class="coverimg avatar avatar-60 rounded-circle grayscale mb-3">
                            <img src="assets/img/logo-512.png" alt="Company Image" />
                        </div>
                        <p class="text-secondary small">Company 2</p>
                    </div>
                    <div class="col-4 col-lg-2 col-xl-2">
                        <div class="coverimg avatar avatar-60 rounded-circle grayscale mb-3">
                            <img src="assets/img/logo-512.png" alt="Company Image" />
                        </div>
                        <p class="text-secondary small">Company 3</p>
                    </div>
                    <div class="col-4 col-lg-2 col-xl-2">
                        <div class="coverimg avatar avatar-60 rounded-circle grayscale mb-3">
                            <img src="assets/img/logo-512.png" alt="Company Image" />
                        </div>
                        <p class="text-secondary small">Company 4</p>
                    </div>
                    <div class="col-4 col-lg-2 col-xl-2">
                        <div class="coverimg avatar avatar-60 rounded-circle grayscale mb-3">
                            <img src="assets/img/logo-512.png" alt="Company Image" />
                        </div>
                        <p class="text-secondary small">Company 5</p>
                    </div>
                </div>
            </div>

            <!-- how to use   -->
            <div class="row gx-3 gx-lg-4 align-items-center mb-3 mb-lg-4 py-4 py-lg-5">
                <div class="col-6 col-lg-6">
                    <h3 class="opacity-75">Responsive widget HTML development</h3>
                    <h1 class="">Good code structures <span class="text-theme">responsive and customizable</span> with latest UI trends</h1>
                    <p class="text-secondary mb-4">Our template is specifically designed to fast-track your SaaS Dashboard Multipurpose Admin, finance, ecommerce, social, calendar, dashboards for business domain by providing ready-to-use UI pages tailored to industries. With pre-built pages like Shop, Products, dashboards, statistics, finace, cart, reminders, user profiles, invoice, and user settings etc.</p>
                </div>
                <div class="col-6 col-lg-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <h2>Easy to Download</h2>
                            <p class="text-secondary">We have document file in folder to guide you about code structure, customization, personalization settings defaults define.</p>
                        </mat-card-content>
                    </mat-card>
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <h2>Ready-to-use Pages</h2>
                            <p class="text-secondary">As domain specific app template it's benefit to have major commonly used screen ready. Choose page template and start development process.</p>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-6 col-lg-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <h2>Personalize Branding</h2>
                            <p class="text-secondary">Choose your branding assets and color scheme and define it in main layouts. Template used local storage for live personalize value storage.</p>
                        </mat-card-content>
                    </mat-card>
                    <mat-card class="mb-3 mb-lg-4 overflow-hidden">
                        <div class="coverimg height-150 w-100">
                            <img src="assets/img/background2.jpg" alt="" />
                        </div>
                    </mat-card>
                </div>
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseStudyComponent, { className: "CaseStudyComponent", filePath: "src/app/pages/website/casestudy.component.ts", lineNumber: 149 });
})();
export {
  CaseStudyComponent
};
//# sourceMappingURL=casestudy.component-IMJV7NJ4.js.map
