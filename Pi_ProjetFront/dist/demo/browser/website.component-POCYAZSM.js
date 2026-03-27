import {
  Chart,
  registerables
} from "./chunk-PZSKZJEJ.js";
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
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-A5PEKAIR.js";
import {
  MatMenuModule
} from "./chunk-SP2SPZAY.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
  MatList,
  MatListItem,
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
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
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
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ViewChild,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/components/charts/area-blue-chartjs-60.component.ts
var _c0 = ["chartCanvas"];
Chart.register(...registerables);
var AreaBlueChartjs60Component = class _AreaBlueChartjs60Component {
  constructor() {
    this.intervalId = null;
  }
  ngAfterViewInit() {
    this.blue60chart();
    this.intervalId = window.setInterval(() => {
      this.randomizeChart();
    }, 3e3);
  }
  /* chart  */
  randomScalingFactor() {
    return Math.round(Math.random() * 20);
  }
  generateRandomData() {
    return [this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor()];
  }
  blue60chart() {
    const areachartblue60 = this.chartCanvas.nativeElement;
    const ctxblue60 = areachartblue60.getContext("2d");
    if (ctxblue60) {
      const gradientblue60 = ctxblue60.createLinearGradient(0, 0, 0, 60);
      gradientblue60.addColorStop(0, "rgba(0, 73,232, 0.25)");
      gradientblue60.addColorStop(0.95, "rgba(0, 73,232, 0.0)");
      this.myblue60Chart = new Chart(areachartblue60, {
        type: "line",
        data: {
          labels: ["10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
          datasets: [
            {
              label: "# of Votes",
              data: this.generateRandomData(),
              radius: 0,
              backgroundColor: gradientblue60,
              borderColor: "#0088FF",
              borderWidth: 2,
              fill: true,
              tension: 0.35
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              display: false,
              beginAtZero: true
            },
            x: {
              display: false
            }
          }
        }
      });
    }
  }
  randomizeChart() {
    if (this.myblue60Chart) {
      this.myblue60Chart.data.datasets.forEach((dataset) => {
        dataset.data = this.generateRandomData();
      });
      this.myblue60Chart.update();
    }
  }
  ngOnDestroy() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  static {
    this.\u0275fac = function AreaBlueChartjs60Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AreaBlueChartjs60Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AreaBlueChartjs60Component, selectors: [["app-area-blue-chartjs-60"]], viewQuery: function AreaBlueChartjs60Component_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvas = _t.first);
      }
    }, features: [\u0275\u0275ProvidersFeature([])], decls: 2, vars: 0, consts: [["chartCanvas", ""]], template: function AreaBlueChartjs60Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", null, 0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaBlueChartjs60Component, [{
    type: Component,
    args: [{
      selector: "app-area-blue-chartjs-60",
      standalone: true,
      imports: [],
      providers: [],
      template: `<canvas #chartCanvas></canvas>`
    }]
  }], null, { chartCanvas: [{
    type: ViewChild,
    args: ["chartCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AreaBlueChartjs60Component, { className: "AreaBlueChartjs60Component", filePath: "src/app/components/charts/area-blue-chartjs-60.component.ts", lineNumber: 13 });
})();

// src/app/components/charts/bar-blue-chartjs-100.component.ts
var _c02 = ["chartCanvas"];
Chart.register(...registerables);
var BarBlueChartjs100Component = class _BarBlueChartjs100Component {
  constructor() {
    this.intervalId = null;
  }
  ngAfterViewInit() {
    this.bar100chart();
    this.intervalId = window.setInterval(() => {
      this.randomizeChart();
    }, 3e3);
  }
  /* chart  */
  randomScalingFactor() {
    return Math.round(Math.random() * 20);
  }
  generateRandomData() {
    return [this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor()];
  }
  bar100chart() {
    const areachartbar100 = this.chartCanvas.nativeElement;
    const ctxbar100 = areachartbar100.getContext("2d");
    if (ctxbar100) {
      this.mybar100Chart = new Chart(areachartbar100, {
        type: "bar",
        data: {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
          datasets: [
            {
              label: "# of Votes",
              data: this.generateRandomData(),
              backgroundColor: "rgba(0, 136, 255, 0.35)",
              borderWidth: 0,
              borderRadius: 8,
              borderSkipped: false,
              barThickness: 8
            },
            {
              label: "# of Votes",
              data: this.generateRandomData(),
              backgroundColor: "rgba(0, 136, 255, 1)",
              borderWidth: 0,
              borderRadius: 8,
              borderSkipped: false,
              barThickness: 8
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: -10
            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              display: false,
              beginAtZero: true
            },
            x: {
              display: false,
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
  }
  randomizeChart() {
    if (this.mybar100Chart) {
      this.mybar100Chart.data.datasets.forEach((dataset) => {
        dataset.data = this.generateRandomData();
      });
      this.mybar100Chart.update();
    }
  }
  ngOnDestroy() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  static {
    this.\u0275fac = function BarBlueChartjs100Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BarBlueChartjs100Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarBlueChartjs100Component, selectors: [["app-bar-blue-chartjs-100"]], viewQuery: function BarBlueChartjs100Component_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvas = _t.first);
      }
    }, features: [\u0275\u0275ProvidersFeature([])], decls: 2, vars: 0, consts: [["chartCanvas", ""]], template: function BarBlueChartjs100Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", null, 0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarBlueChartjs100Component, [{
    type: Component,
    args: [{
      selector: "app-bar-blue-chartjs-100",
      standalone: true,
      imports: [],
      providers: [],
      template: `<canvas #chartCanvas></canvas>`
    }]
  }], null, { chartCanvas: [{
    type: ViewChild,
    args: ["chartCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarBlueChartjs100Component, { className: "BarBlueChartjs100Component", filePath: "src/app/components/charts/bar-blue-chartjs-100.component.ts", lineNumber: 13 });
})();

// src/app/pages/website/website.component.ts
var _c03 = (a0) => ({ plan: "starter", type: "enterprise", cycle: a0 });
var _c1 = (a0) => ({ plan: "pro", type: "enterprise", cycle: a0 });
var _c2 = (a0) => ({ plan: "business", type: "enterprise", cycle: a0 });
var _c3 = (a0) => ({ plan: "academic-starter", type: "academic", cycle: a0 });
var _c4 = (a0) => ({ plan: "academic-faculty", type: "academic", cycle: a0 });
var _c5 = (a0) => ({ plan: "academic-institution", type: "academic", cycle: a0 });
function WebsiteComponent_Conditional_414_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 145)(2, "mat-card", 146)(3, "mat-card-content", 147)(4, "div", 148)(5, "div", 149)(6, "mat-icon");
    \u0275\u0275text(7, "rocket_launch");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "h4", 150);
    \u0275\u0275text(10, "Starter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 151);
    \u0275\u0275text(12, "Small teams");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 152)(14, "span", 153);
    \u0275\u0275text(15, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 154);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 155);
    \u0275\u0275text(19, "/mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-list", 156)(21, "mat-list-item")(22, "mat-icon", 157);
    \u0275\u0275text(23, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "5 team members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-list-item")(26, "mat-icon", 157);
    \u0275\u0275text(27, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "3 workspaces");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-list-item")(30, "mat-icon", 157);
    \u0275\u0275text(31, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "10 projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-list-item")(34, "mat-icon", 157);
    \u0275\u0275text(35, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "5 GB storage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-list-item")(38, "mat-icon", 157);
    \u0275\u0275text(39, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, "Basic ML insights");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "mat-card-actions", 158)(42, "button", 159);
    \u0275\u0275text(43, " Get Started ");
    \u0275\u0275elementStart(44, "mat-icon", 9);
    \u0275\u0275text(45, "arrow_forward");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(46, "div", 145)(47, "mat-card", 160)(48, "div", 161)(49, "mat-icon");
    \u0275\u0275text(50, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, " Recommended");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "mat-card-content", 147)(53, "div", 148)(54, "div", 149)(55, "mat-icon");
    \u0275\u0275text(56, "workspace_premium");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div")(58, "h4", 150);
    \u0275\u0275text(59, "Pro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p", 151);
    \u0275\u0275text(61, "Growing orgs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 152)(63, "span", 153);
    \u0275\u0275text(64, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 154);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 155);
    \u0275\u0275text(68, "/mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "mat-list", 156)(70, "mat-list-item")(71, "mat-icon", 157);
    \u0275\u0275text(72, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, "25 team members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "mat-list-item")(75, "mat-icon", 157);
    \u0275\u0275text(76, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, "10 workspaces");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "mat-list-item")(79, "mat-icon", 157);
    \u0275\u0275text(80, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, "Unlimited projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "mat-list-item")(83, "mat-icon", 157);
    \u0275\u0275text(84, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "Full ML suite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "mat-list-item")(87, "mat-icon", 157);
    \u0275\u0275text(88, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, "Priority support");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "mat-card-actions", 158)(91, "button", 162);
    \u0275\u0275text(92, " Get Started ");
    \u0275\u0275elementStart(93, "mat-icon", 9);
    \u0275\u0275text(94, "arrow_forward");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(95, "div", 145)(96, "mat-card", 146)(97, "mat-card-content", 147)(98, "div", 148)(99, "div", 149)(100, "mat-icon");
    \u0275\u0275text(101, "corporate_fare");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div")(103, "h4", 150);
    \u0275\u0275text(104, "Business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "p", 151);
    \u0275\u0275text(106, "Large enterprises");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "div", 152)(108, "span", 153);
    \u0275\u0275text(109, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "span", 154);
    \u0275\u0275text(111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 155);
    \u0275\u0275text(113, "/mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "mat-list", 156)(115, "mat-list-item")(116, "mat-icon", 157);
    \u0275\u0275text(117, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(118, "100 team members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "mat-list-item")(120, "mat-icon", 157);
    \u0275\u0275text(121, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "Unlimited workspaces");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "mat-list-item")(124, "mat-icon", 157);
    \u0275\u0275text(125, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, "Advanced ML models");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "mat-list-item")(128, "mat-icon", 157);
    \u0275\u0275text(129, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(130, "SSO / SAML");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "mat-list-item")(132, "mat-icon", 157);
    \u0275\u0275text(133, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "SLA 99.9%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "mat-card-actions", 158)(136, "button", 159);
    \u0275\u0275text(137, " Get Started ");
    \u0275\u0275elementStart(138, "mat-icon", 9);
    \u0275\u0275text(139, "arrow_forward");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(140, "div", 145)(141, "mat-card", 163)(142, "mat-card-content", 147)(143, "div", 148)(144, "div", 149)(145, "mat-icon");
    \u0275\u0275text(146, "apartment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div")(148, "h4", 150);
    \u0275\u0275text(149, "Enterprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "p", 151);
    \u0275\u0275text(151, "Custom scale");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(152, "div", 152)(153, "span", 164);
    \u0275\u0275text(154, "On Request");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "mat-list", 156)(156, "mat-list-item")(157, "mat-icon", 157);
    \u0275\u0275text(158, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(159, "Unlimited members");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "mat-list-item")(161, "mat-icon", 157);
    \u0275\u0275text(162, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(163, "On-premise deploy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "mat-list-item")(165, "mat-icon", 157);
    \u0275\u0275text(166, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(167, "Custom ML pipelines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "mat-list-item")(169, "mat-icon", 157);
    \u0275\u0275text(170, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(171, "White-labeling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "mat-list-item")(173, "mat-icon", 157);
    \u0275\u0275text(174, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(175, "Custom SLA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "mat-card-actions", 158)(177, "button", 165)(178, "mat-icon");
    \u0275\u0275text(179, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(180, " Contact Sales ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r0.homeBillingCycle() === "monthly" ? "49" : "39");
    \u0275\u0275advance(25);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(6, _c03, ctx_r0.homeBillingCycle()));
    \u0275\u0275advance(24);
    \u0275\u0275textInterpolate(ctx_r0.homeBillingCycle() === "monthly" ? "149" : "119");
    \u0275\u0275advance(25);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(8, _c1, ctx_r0.homeBillingCycle()));
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(ctx_r0.homeBillingCycle() === "monthly" ? "349" : "279");
    \u0275\u0275advance(25);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(10, _c2, ctx_r0.homeBillingCycle()));
  }
}
function WebsiteComponent_Conditional_415_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 145)(2, "mat-card", 146)(3, "mat-card-content", 147)(4, "div", 148)(5, "div", 166)(6, "mat-icon");
    \u0275\u0275text(7, "school");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "h4", 150);
    \u0275\u0275text(10, "Academic Starter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 151);
    \u0275\u0275text(12, "Small classes & labs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 152)(14, "span", 153);
    \u0275\u0275text(15, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 154);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 155);
    \u0275\u0275text(19, "/mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-list", 156)(21, "mat-list-item")(22, "mat-icon", 157);
    \u0275\u0275text(23, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "50 students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-list-item")(26, "mat-icon", 157);
    \u0275\u0275text(27, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "2 professors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-list-item")(30, "mat-icon", 157);
    \u0275\u0275text(31, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "5 course projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-list-item")(34, "mat-icon", 157);
    \u0275\u0275text(35, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "Basic grading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-list-item")(38, "mat-icon", 157);
    \u0275\u0275text(39, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, "Email support");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "mat-card-actions", 158)(42, "button", 159);
    \u0275\u0275text(43, " Get Started ");
    \u0275\u0275elementStart(44, "mat-icon", 9);
    \u0275\u0275text(45, "arrow_forward");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(46, "div", 145)(47, "mat-card", 146)(48, "mat-card-content", 147)(49, "div", 148)(50, "div", 166)(51, "mat-icon");
    \u0275\u0275text(52, "menu_book");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div")(54, "h4", 150);
    \u0275\u0275text(55, "Faculty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p", 151);
    \u0275\u0275text(57, "Departments & labs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 152)(59, "span", 153);
    \u0275\u0275text(60, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 154);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 155);
    \u0275\u0275text(64, "/mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "mat-list", 156)(66, "mat-list-item")(67, "mat-icon", 157);
    \u0275\u0275text(68, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, "100 students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-list-item")(71, "mat-icon", 157);
    \u0275\u0275text(72, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, "5 professors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "mat-list-item")(75, "mat-icon", 157);
    \u0275\u0275text(76, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, "Grade management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "mat-list-item")(79, "mat-icon", 157);
    \u0275\u0275text(80, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(81, "Plagiarism signals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "mat-list-item")(83, "mat-icon", 157);
    \u0275\u0275text(84, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "Email support");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "mat-card-actions", 158)(87, "button", 159);
    \u0275\u0275text(88, " Get Started ");
    \u0275\u0275elementStart(89, "mat-icon", 9);
    \u0275\u0275text(90, "arrow_forward");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(91, "div", 145)(92, "mat-card", 167)(93, "div", 168)(94, "mat-icon");
    \u0275\u0275text(95, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, " Recommended");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "mat-card-content", 147)(98, "div", 148)(99, "div", 166)(100, "mat-icon");
    \u0275\u0275text(101, "account_balance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div")(103, "h4", 150);
    \u0275\u0275text(104, "Institution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "p", 151);
    \u0275\u0275text(106, "Whole school");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "div", 152)(108, "span", 153);
    \u0275\u0275text(109, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "span", 154);
    \u0275\u0275text(111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 155);
    \u0275\u0275text(113, "/mo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "mat-list", 156)(115, "mat-list-item")(116, "mat-icon", 157);
    \u0275\u0275text(117, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(118, "500 students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "mat-list-item")(120, "mat-icon", 157);
    \u0275\u0275text(121, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "Unlimited professors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "mat-list-item")(124, "mat-icon", 157);
    \u0275\u0275text(125, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, "Bulk CSV import");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "mat-list-item")(128, "mat-icon", 157);
    \u0275\u0275text(129, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(130, "FERPA compliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "mat-list-item")(132, "mat-icon", 157);
    \u0275\u0275text(133, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(134, "Priority support");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "mat-card-actions", 158)(136, "button", 162);
    \u0275\u0275text(137, " Get Started ");
    \u0275\u0275elementStart(138, "mat-icon", 9);
    \u0275\u0275text(139, "arrow_forward");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(140, "div", 145)(141, "mat-card", 163)(142, "mat-card-content", 147)(143, "div", 148)(144, "div", 166)(145, "mat-icon");
    \u0275\u0275text(146, "domain");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div")(148, "h4", 150);
    \u0275\u0275text(149, "Campus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "p", 151);
    \u0275\u0275text(151, "University-wide");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(152, "div", 152)(153, "span", 164);
    \u0275\u0275text(154, "On Request");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "mat-list", 156)(156, "mat-list-item")(157, "mat-icon", 157);
    \u0275\u0275text(158, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(159, "Unlimited students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "mat-list-item")(161, "mat-icon", 157);
    \u0275\u0275text(162, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(163, "Multi-faculty support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "mat-list-item")(165, "mat-icon", 157);
    \u0275\u0275text(166, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(167, "SAML / SSO");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "mat-list-item")(169, "mat-icon", 157);
    \u0275\u0275text(170, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(171, "On-premise option");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "mat-list-item")(173, "mat-icon", 157);
    \u0275\u0275text(174, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(175, "Custom SLA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "mat-card-actions", 158)(177, "button", 165)(178, "mat-icon");
    \u0275\u0275text(179, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(180, " Contact Sales ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r0.homeBillingCycle() === "monthly" ? "29" : "23");
    \u0275\u0275advance(25);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(6, _c3, ctx_r0.homeBillingCycle()));
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(ctx_r0.homeBillingCycle() === "monthly" ? "39" : "31");
    \u0275\u0275advance(25);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(8, _c4, ctx_r0.homeBillingCycle()));
    \u0275\u0275advance(24);
    \u0275\u0275textInterpolate(ctx_r0.homeBillingCycle() === "monthly" ? "99" : "79");
    \u0275\u0275advance(25);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(10, _c5, ctx_r0.homeBillingCycle()));
  }
}
register();
var WebsiteComponent = class _WebsiteComponent {
  constructor() {
    this.homePricingTab = signal("enterprise", ...ngDevMode ? [{ debugName: "homePricingTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.homeBillingCycle = signal("monthly", ...ngDevMode ? [{ debugName: "homeBillingCycle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.value = "";
    this.hideSingleSelectionIndicator = signal(false, ...ngDevMode ? [{ debugName: "hideSingleSelectionIndicator" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngAfterInit() {
  }
  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update((value) => !value);
  }
  static {
    this.\u0275fac = function WebsiteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebsiteComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebsiteComponent, selectors: [["app-website"]], decls: 527, vars: 7, consts: [[1, "bg-theme-white-gradient", "bg-light-gradient", "position-relative", "pt-5"], [1, "container", "py-4", "pt-lg-5", "z-index-1", "position-relative"], [1, "row", "gx-3", "gx-lg-4", "justify-content-center", "text-center"], [1, "col-12", "col-lg-8", "col-xl-6", "pt-3", "pt-lg-5"], [1, "opacity-75"], [1, "mb-3"], [1, "text-theme"], [1, "opacity-75", "mb-4", "mb-lg-5"], ["routerLink", "/billing/pricing", "matButton", "filled", 1, "mx-2"], ["iconPositionEnd", ""], ["routerLink", "/app/dashboard", "matButton", "elevated", 1, "mx-2"], [1, "container-fluid"], [1, "row", "gx-3", "gx-lg-4", "justify-content-center", "align-items-end", "overflow-hidden"], [1, "col-auto", "order-1", "order-lg-1"], [1, "height-150", "width-200", "position-relative", "mb-3", "mb-lg-4"], [1, "w-100", "rounded", "position-absolute", "start-0", "bottom-0", "z-index-0", "opacity-50"], [1, "height-80", "w-100", "d-block"], [1, ""], [1, "mb-1"], [1, "fw-light", "text-secondary"], [1, "col-auto", "order-3", "order-lg-2", "position-relative"], ["src", "assets/img/home.png", "alt", "", 1, "height-400", "mx-auto", "d-block", "rounded", 2, "margin-bottom", "-50px", "box-shadow", "0 -5px 25px rgba(0, 49, 92, 0.16)", "margin-top", "45px"], [1, "col-auto", "order-2", "order-lg-3"], [1, "height-80", "width-180", "my-3", "my-lg-4", "d-block"], [1, "height-150", "width-200", "bg-theme", "text-white", "position-relative", "theme-green", "mb-3", "mb-lg-4"], [1, "h-100", "w-100", "rounded", "coverimg", "position-absolute", "z-index-0", "opacity-50"], ["src", "assets/img/background1.jpg", "alt", ""], [1, "z-index-1", "position-relative"], [1, "fw-normal", "mb-1"], [1, "fw-light"], [1, "small"], [1, "w-100", "bg-theme", "text-white", "mb-4", "mb-lg-5"], [1, "container"], [1, "row", "gx-3", "gx-lg-4", "text-center", "py-3"], [1, "col-6", "col-lg-3", "my-3", "my-lg-4"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-lg-6", "mb-3", "mb-lg-4"], [1, "bg-light-gradient", "overflow-hidden"], [1, "py-md-4", "px-md-4", "py-lg-5", "px-lg-5"], [1, "text-secondary", "mb-4"], ["routerLink", "/auth/login", "matButton", ""], [1, "col-12", "col-md-6", "col-xl-3", "mb-3", "mb-lg-4"], [1, "bg-light-gradient", "text-center", "h-100", "overflow-hidden"], [1, "py-lg-4", "px-lg-4"], [1, "text-theme", "avatar", "avatar-50", "rounded", "mt-3", "mb-4"], [1, "material-icons-outlined", "align-middle", "text-xl"], ["routerLink", "/app/dashboard", "matButton", ""], ["routerLink", "/app/profile", "matButton", ""], [1, "mb-3", "mb-lg-4"], [1, "bg-light-gradient", "py-lg-4", "px-md-4", "py-lg-5", "px-lg-5"], [1, "row", "gx-3", "gx-lg-4", "align-items-center"], [1, "col-12", "col-lg-5"], [1, "text-secondary", "mb-3", "mb-lg-4"], [1, "col-12", "col-lg-6", "ms-auto"], [1, "col-12", "col-sm-6", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "text-theme", "avatar", "avatar-50", "rounded", "mb-3"], [1, "material-icons-outlined", "align-middle"], [1, "text-secondary"], [1, "bg-light-theme", "text-theme", "avatar", "avatar-50", "rounded", "mb-3", "theme-magenta", 2, "fill", "var(--mat-sys-primary)"], ["x", "0px", "y", "0px", "width", "960px", "height", "960px", "viewBox", "0 0 960 960", 1, "avatar", "avatar-30"], ["points", "562.6,109.8 804.1,629.5 829.2,233.1"], ["points", "624.9,655.9 334.3,655.9 297.2,745.8 479.6,849.8 662,745.8"], ["points", "384.1,539.3 575.2,539.3 479.6,307"], ["points", "396.6,109.8 130,233.1 155.1,629.5"], [1, "bg-light-theme", "text-theme", "avatar", "avatar-50", "rounded", "mb-3", "theme-red"], [1, "col-12", "col-sm-6"], [1, "bg-light-theme", "text-theme", "avatar", "avatar-50", "rounded", "mb-3", "theme-cyan"], [1, "row", "gx-3", "gx-lg-4", "justify-content-center", "pt-4", "pt-lg-5"], [1, "col-12", "col-lg-8", "text-center", "mb-3", "mb-lg-4"], [1, "mb-2"], [1, "col-12", "col-md-12", "col-lg-6", "mb-3", "mb-lg-4"], [1, "col-6"], [1, "material-icons-outlined", "align-middle", "me-2"], ["src", "assets/img/feature-1.png", "alt", "", 1, "w-100", "rounded"], [1, "col-12", "col-md-6", "col-lg-3", "mb-3", "mb-lg-4"], [1, "h-100", "overflow-hidden"], [1, "p-4"], [1, "text-secondary", "mb-3"], ["src", "assets/img/feature-2.png", "alt", "", 1, "w-100", "rounded", "mb-2"], ["routerLink", "/app/ecommerce", "matButton", "", 1, ""], ["src", "assets/img/feature-3.png", "alt", "", 1, "w-100", "mb-2"], ["routerLink", "/app/calendar", "matButton", "", 1, ""], [1, "col-12", "col-lg-6"], [1, "bg-light-theme", "mb-3", "mb-lg-4"], [1, "p-lg-4"], [1, "col"], [1, "col-auto", "align-self-end"], ["routerLink", "/app/projects", "matButton", "", 1, "mb-3"], ["src", "assets/img/feature-4.png", "alt", "", 1, "w-100", "rounded"], ["src", "assets/img/feature-5.png", "alt", "", 1, "w-100", "rounded"], ["routerLink", "/app/kanban", "matButton", "", 1, "mb-3"], ["src", "assets/img/feature-6.png", "alt", "", 1, "w-100", "rounded"], ["src", "assets/img/feature-7.png", "alt", "", 1, "w-100", "rounded"], [1, "row", "gx-3", "gx-lg-4", "align-items-center", "mb-3", "mb-lg-4", "py-4", "py-lg-5"], [1, "col-6", "col-lg-6"], [1, "col-6", "col-lg-3"], [1, "mb-3", "mb-lg-4", "overflow-hidden"], [1, "coverimg", "height-150", "w-100"], ["src", "assets/img/background2.jpg", "alt", ""], [1, "bg-light-gradient", "bg-light-theme"], [1, "container", "py-4", "py-lg-5"], [1, "row", "gx-3", "gx-lg-4", "mb-lg-4"], [1, "col-12", "col-md-6", "col-lg-6", "mb-3", "mb-lg-4"], [1, "col", "col-lg-5", "ms-auto", "mb-3", "mb-lg-4"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3"], [1, "text-center", "mb-3", "mb-lg-4"], ["mat-card-image", "", 1, "height-250", "overflow-hidden", "mb-3"], [1, "h-100", "w-100", "coverimg"], ["src", "assets/img/user-6.jpg", "alt", ""], [1, "text-truncated", "mb-1"], [1, "text-secondary", "small"], ["src", "assets/img/user-4.jpg", "alt", ""], ["src", "assets/img/user-3.jpg", "alt", ""], ["src", "assets/img/user-2.jpg", "alt", ""], [1, "row", "gx-3", "gx-lg-4", "text-center", "justify-content-center"], [1, "col-auto", "pt-4"], ["matButton", "filled", 1, ""], [1, "row", "gx-3", "gx-lg-4", "justify-content-center", "mb-3", "mb-lg-4"], [1, "col-12", "col-md-8", "col-lg-6", "text-center"], [1, "badge", "badge-outline-theme", "mb-2"], [1, "mb-2", "fw-bold"], [1, "pricing-tabs-wrapper", "d-flex", "justify-content-center", "mb-3"], [1, "pricing-tabs"], [1, "ptab", 3, "click"], ["name", "plans", 3, "hideSingleSelectionIndicator"], ["value", "monthly", "checked", "", 3, "change"], ["value", "yearly", 3, "change"], [1, "badge", "badge-theme", "ms-2"], [1, "row", "gx-3", "gx-lg-4", "align-items-stretch"], [1, "text-center", "mt-2", "mb-3"], ["routerLink", "/billing/pricing", "matButton", "", 1, "see-all-plans-btn"], [1, "text-center", "text-secondary", "small", "opacity-75"], [2, "font-size", "14px", "vertical-align", "middle"], ["slides-per-view", "auto", "space-between", "20px", "autoplay", "true", "pagination", "true", 1, "swiper"], [1, "pb-3", "width-400"], [1, "overflow-hidden", "mb-4"], [1, "avatar", "avatar-50", "mb-3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30.575", "height", "24.416", "viewBox", "0 0 30.575 24.416", 1, "w-100", "opacity-50"], ["id", "Path_71", "data-name", "Path 71", "d", "M9.326,13.916H-2.919V1.745q0-10.852,12.245-12.245v6.086q-5.939.22-6.086,6.159H9.326Zm18.33,0H15.411V1.745q0-10.852,12.245-12.245v6.086q-5.939.22-6.086,6.159h6.086Z", "transform", "translate(2.919 10.5)"], [1, "row", "gx-3", "align-items-center"], [1, "col-auto"], [1, "coverimg", "avatar", "avatar-60", "rounded"], ["src", "assets/img/user-7.jpg", "alt", ""], ["src", "assets/img/user-10.jpg", "alt", ""], ["src", "assets/img/user-5.jpg", "alt", ""], [1, "col-12", "col-md-6", "col-lg-3", "mb-4"], [1, "home-plan-card", "h-100"], [1, "d-flex", "flex-column", "h-100"], [1, "hpc-header"], [1, "hpc-icon", "ent-icon"], [1, "mb-0", "fw-bold"], [1, "text-secondary", "small", "mb-0"], [1, "hpc-price"], [1, "hpc-currency"], [1, "hpc-amount"], [1, "hpc-period"], [1, "hpc-features", "flex-grow-1", 2, "--mat-list-list-item-one-line-container-height", "36px"], [1, "hpc-check", "me-2"], [1, "pt-2"], ["routerLink", "/billing/checkout", "matButton", "outlined", 1, "w-100", 3, "queryParams"], [1, "home-plan-card", "home-plan-recommended", "h-100"], [1, "hpc-badge"], ["routerLink", "/billing/checkout", "matButton", "filled", 1, "w-100", 3, "queryParams"], [1, "home-plan-card", "home-plan-dashed", "h-100"], [1, "hpc-amount", "hpc-onrequest"], ["routerLink", "/web/contact-us", "matButton", "outlined", 1, "w-100"], [1, "hpc-icon", "acad-icon"], [1, "home-plan-card", "home-plan-recommended", "home-plan-academic", "h-100"], [1, "hpc-badge", "hpc-badge-academic"]], template: function WebsiteComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        \u0275\u0275text(5, "A Fluid, Flexible and Fluent UI template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 5);
        \u0275\u0275text(7, " SAAS Dashboard UIUX is Modern");
        \u0275\u0275element(8, "br");
        \u0275\u0275elementStart(9, "span", 6);
        \u0275\u0275text(10, "User Interface Designs");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " System with");
        \u0275\u0275element(12, "br");
        \u0275\u0275text(13, " Multi-Device UI Consistency ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p", 7);
        \u0275\u0275text(15, "Enhance your web projects with our responsive Angular Material Admin Dashboard Template. This comprehensive UI kit provides a sleek, modern, and intuitive design to help you build powerful, feature-rich admin panels with ease.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 8);
        \u0275\u0275text(17, "Get Started ");
        \u0275\u0275elementStart(18, "mat-icon", 9);
        \u0275\u0275text(19, "arrow_forward");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 10);
        \u0275\u0275text(21, "Dashboard ");
        \u0275\u0275elementStart(22, "mat-icon", 9);
        \u0275\u0275text(23, "arrow_forward");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(24, "div", 11)(25, "div", 12)(26, "div", 13)(27, "mat-card", 14)(28, "div", 15);
        \u0275\u0275element(29, "app-area-blue-chartjs-60", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "mat-card-header");
        \u0275\u0275elementStart(31, "mat-card-content", 17)(32, "h2", 18);
        \u0275\u0275text(33, "Responsive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "h3", 19);
        \u0275\u0275text(35, "Flexible Widget");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 20);
        \u0275\u0275element(37, "img", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 22);
        \u0275\u0275element(39, "app-bar-blue-chartjs-100", 23);
        \u0275\u0275elementStart(40, "mat-card", 24)(41, "div", 25);
        \u0275\u0275element(42, "img", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "mat-card-header");
        \u0275\u0275elementStart(44, "mat-card-content", 27)(45, "h2", 28);
        \u0275\u0275text(46, "Feel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "h3", 29);
        \u0275\u0275text(48, "The Difference");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p", 30);
        \u0275\u0275text(50, "Adopt the new wave");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(51, "div", 31)(52, "div", 32)(53, "div", 33)(54, "div", 34)(55, "h1", 18);
        \u0275\u0275text(56, "61.15K+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p");
        \u0275\u0275text(58, "Downloads");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 34)(60, "h1", 18);
        \u0275\u0275text(61, "10245");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p");
        \u0275\u0275text(63, "Projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 34)(65, "h1", 18);
        \u0275\u0275text(66, "9564");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "p");
        \u0275\u0275text(68, "Customer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 34)(70, "h1", 18);
        \u0275\u0275text(71, "19+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p");
        \u0275\u0275text(73, "Country");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(74, "div", 32)(75, "div", 35)(76, "div", 36)(77, "mat-card", 37)(78, "mat-card-content", 38)(79, "h4", 4);
        \u0275\u0275text(80, "Designed for multiple Business Domains");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "h1");
        \u0275\u0275text(82, "We design UX UI for Creative & Unique Digital Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "p", 39);
        \u0275\u0275text(84, "We create HTML templates for Enterprise applications, Business applications, eCommerce application, Admin Dashboard Applications, Mobile application, Mobile Websites, Micro websites, HTML for apps etc. Technology you can choose from our latest builds Bootstrap 5 HTML template, Mobile app templates, Angular starter kits.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "button", 40);
        \u0275\u0275text(86, "Start now");
        \u0275\u0275elementStart(87, "mat-icon", 9);
        \u0275\u0275text(88, "arrow_forward");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(89, "div", 41)(90, "mat-card", 42)(91, "mat-card-content", 43)(92, "div", 44)(93, "mat-icon", 45);
        \u0275\u0275text(94, "palette");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "h2");
        \u0275\u0275text(96, "Trending Design");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "p", 39);
        \u0275\u0275text(98, "Be with latest trending and how content are being specific in AI Age. Our today's significant move can save tomorrows lot of efforts towards user accessibility.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "button", 46);
        \u0275\u0275text(100, "Personalize ");
        \u0275\u0275elementStart(101, "mat-icon", 9);
        \u0275\u0275text(102, "arrow_forward");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(103, "div", 41)(104, "mat-card", 42)(105, "mat-card-content", 43)(106, "div", 44)(107, "mat-icon", 45);
        \u0275\u0275text(108, "leaderboard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "h2");
        \u0275\u0275text(110, "Uniqueness");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p", 39);
        \u0275\u0275text(112, "Standout from crowed by using unique design template and maximize usage of framework capability to stay light weight and efficient.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "button", 47);
        \u0275\u0275text(114, "Profile ");
        \u0275\u0275elementStart(115, "mat-icon", 9);
        \u0275\u0275text(116, "arrow_forward");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(117, "mat-card", 48)(118, "mat-card-content", 49)(119, "div", 50)(120, "div", 51)(121, "h4", 4);
        \u0275\u0275text(122, "Fully Customizable & Responsive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "h1");
        \u0275\u0275text(124, "The Complete ");
        \u0275\u0275elementStart(125, "span", 6);
        \u0275\u0275text(126, "UI/UX template");
        \u0275\u0275elementEnd();
        \u0275\u0275text(127, " for Admin Dashboard Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "p", 52);
        \u0275\u0275text(129, "Get inspired by a wide range of demo pages for different dashboard types. Our template is packed with features and ideas to streamline your development process and enhance the user experience.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "div", 53)(131, "div", 35)(132, "div", 54)(133, "div", 55)(134, "mat-icon", 56);
        \u0275\u0275text(135, "web");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(136, "h3", 5);
        \u0275\u0275text(137, "Multipurpose Admin Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "p", 57);
        \u0275\u0275text(139, "In Sales Management template we have ready to use pages for Social, Finance, Appointment, Shopping and Admin dashboard to create your new app.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 54)(141, "div", 58);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(142, "svg", 59);
        \u0275\u0275element(143, "polygon", 60)(144, "polygon", 61)(145, "polygon", 62)(146, "polygon", 63);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(147, "h3", 5);
        \u0275\u0275text(148, "Technology Framework");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "p", 57);
        \u0275\u0275text(150, "We've created template with Angular Material Design framework v20.x. By keep in mind that Material Design it self driving its philosophy and we care for it.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(151, "div", 54)(152, "div", 64)(153, "mat-icon", 56);
        \u0275\u0275text(154, "web");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(155, "h3", 5);
        \u0275\u0275text(156, "Flexible UI kit Template");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "p", 57);
        \u0275\u0275text(158, "In Sales Management template we have very flexible UI widgets for best fluid responsive experience and it works smooth in major devices.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(159, "div", 65)(160, "div", 66)(161, "mat-icon", 56);
        \u0275\u0275text(162, "web");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(163, "h3", 5);
        \u0275\u0275text(164, "Creativity and Uniqueness");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "p", 57);
        \u0275\u0275text(166, "In market we are very different from other author in creativity. We do craft each page with own creative thought process to make it incredible in UI design.");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(167, "div", 67)(168, "div", 68)(169, "h4", 4);
        \u0275\u0275text(170, "Believe in future proof development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "h1", 69);
        \u0275\u0275text(172, "Features that ");
        \u0275\u0275elementStart(173, "span", 6);
        \u0275\u0275text(174, "helps business");
        \u0275\u0275elementEnd();
        \u0275\u0275text(175, " to grow and easy adopt trends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "p", 39);
        \u0275\u0275text(177, "Quick start development with ready to use pages along with the customizable highly demanded features. Easy to adopt trends no more unwanted code features inside by business specific template development approach.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(178, "div", 35)(179, "div", 70)(180, "mat-card", 17)(181, "mat-card-content", 43)(182, "div", 35)(183, "div", 71)(184, "h2");
        \u0275\u0275text(185, "SASS Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "p", 57);
        \u0275\u0275text(187, "Take a quick look overview with detailed dashboard interface design");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "mat-list", 5)(189, "mat-list-item")(190, "mat-icon", 72);
        \u0275\u0275text(191, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(192, " Easy Navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "mat-list-item")(194, "mat-icon", 72);
        \u0275\u0275text(195, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(196, " Interactive Grid");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "mat-list-item")(198, "mat-icon", 72);
        \u0275\u0275text(199, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(200, " Charts Options");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "mat-list-item")(202, "mat-icon", 72);
        \u0275\u0275text(203, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(204, " Elastic Widgets");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(205, "button", 46);
        \u0275\u0275text(206, "Dashboard ");
        \u0275\u0275elementStart(207, "mat-icon", 9);
        \u0275\u0275text(208, "arrow_forward");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(209, "div", 71);
        \u0275\u0275element(210, "img", 73);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(211, "div", 74)(212, "mat-card", 75)(213, "mat-card-content", 76)(214, "h2");
        \u0275\u0275text(215, "Track e-Commerce");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "p", 77);
        \u0275\u0275text(217, "You can expand project with eCommerce store and manage at one single place.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(218, "img", 78);
        \u0275\u0275elementStart(219, "button", 79);
        \u0275\u0275text(220, "Storefront UI ");
        \u0275\u0275elementStart(221, "mat-icon", 9);
        \u0275\u0275text(222, "arrow_forward");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(223, "div", 74)(224, "mat-card", 75)(225, "mat-card-content", 76)(226, "h2");
        \u0275\u0275text(227, "Appointment Booking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "p", 39);
        \u0275\u0275text(229, "Easy to Book appointment and track with calendar. Mange your schedules personal and business now with more accessible way.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(230, "img", 80);
        \u0275\u0275elementStart(231, "button", 81);
        \u0275\u0275text(232, "Calendar ");
        \u0275\u0275elementStart(233, "mat-icon", 9);
        \u0275\u0275text(234, "arrow_forward");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(235, "div", 50)(236, "div", 82)(237, "mat-card", 83)(238, "mat-card-content", 84)(239, "div", 35)(240, "div", 85)(241, "h2");
        \u0275\u0275text(242, "Project Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(243, "p", 39);
        \u0275\u0275text(244, "Track your project and analyze task progress along with project. Review and Monitor closely with minimal effort. Manage documents and activity view which help you to have better understanding. Responsiveness and customizability allows more flexibility to achieve business goals");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(245, "div", 86)(246, "button", 87);
        \u0275\u0275text(247, "Projects ");
        \u0275\u0275elementStart(248, "mat-icon", 9);
        \u0275\u0275text(249, "arrow_forward");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(250, "div", 50)(251, "div", 82);
        \u0275\u0275element(252, "img", 88);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "div", 82);
        \u0275\u0275element(254, "img", 89);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(255, "div", 82)(256, "mat-card", 48)(257, "mat-card-content", 84)(258, "div", 35)(259, "div", 85)(260, "h2");
        \u0275\u0275text(261, "Task Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(262, "p", 77);
        \u0275\u0275text(263, "With the minimalistic Kanban chart you can manage your daily task and progress with status.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(264, "div", 86)(265, "button", 90);
        \u0275\u0275text(266, "Kanban view ");
        \u0275\u0275elementStart(267, "mat-icon", 9);
        \u0275\u0275text(268, "arrow_forward");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(269, "div", 50)(270, "div", 82);
        \u0275\u0275element(271, "img", 91);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(272, "div", 82);
        \u0275\u0275element(273, "img", 92);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(274, "div", 93)(275, "div", 94)(276, "h3", 4);
        \u0275\u0275text(277, "Responsive widget HTML development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(278, "h1", 17);
        \u0275\u0275text(279, "Good code structures ");
        \u0275\u0275elementStart(280, "span", 6);
        \u0275\u0275text(281, "responsive and customizable");
        \u0275\u0275elementEnd();
        \u0275\u0275text(282, " with latest UI trends");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(283, "p", 39);
        \u0275\u0275text(284, "Our template is specifically designed to fast-track your SaaS Dashboard Multipurpose Admin, finance, ecommerce, social, calendar, dashboards for business domain by providing ready-to-use UI pages tailored to industries. With pre-built pages like Shop, Products, dashboards, statistics, finace, cart, reminders, user profiles, invoice, and user settings etc.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(285, "div", 95)(286, "mat-card", 48)(287, "mat-card-content")(288, "h2");
        \u0275\u0275text(289, "Easy to Download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(290, "p", 57);
        \u0275\u0275text(291, "We have document file in folder to guide you about code structure, customization, personalization settings defaults define.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(292, "mat-card", 48)(293, "mat-card-content")(294, "h2");
        \u0275\u0275text(295, "Ready-to-use Pages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "p", 57);
        \u0275\u0275text(297, "As domain specific app template it's benefit to have major commonly used screen ready. Choose page template and start development process.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(298, "div", 95)(299, "mat-card", 48)(300, "mat-card-content")(301, "h2");
        \u0275\u0275text(302, "Personalize Branding");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(303, "p", 57);
        \u0275\u0275text(304, "Choose your branding assets and color scheme and define it in main layouts. Template used local storage for live personalize value storage.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(305, "mat-card", 96)(306, "div", 97);
        \u0275\u0275element(307, "img", 98);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(308, "div", 99)(309, "div", 100)(310, "h3", 4);
        \u0275\u0275text(311, "Meet our team");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(312, "div", 101)(313, "div", 102)(314, "h1");
        \u0275\u0275text(315, "Our ");
        \u0275\u0275elementStart(316, "span", 6);
        \u0275\u0275text(317, "great team");
        \u0275\u0275elementEnd();
        \u0275\u0275text(318, " is our strength");
        \u0275\u0275element(319, "br");
        \u0275\u0275text(320, "& source of growth.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(321, "div", 103)(322, "p");
        \u0275\u0275text(323, "We work hard, we do it creatively and we like to see you here! We always prefer to have clear communication less headache and only creative thoughts in mind. That is why we prefer to have good working culture across the organization.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(324, "div", 35)(325, "div", 104)(326, "mat-card", 105)(327, "div", 106)(328, "figure", 107);
        \u0275\u0275element(329, "img", 108);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(330, "mat-card-content")(331, "h3", 109);
        \u0275\u0275text(332, "Aditi Johnson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(333, "p", 18);
        \u0275\u0275text(334, "London, UK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(335, "p", 110);
        \u0275\u0275text(336, "Founder");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(337, "div", 104)(338, "mat-card", 105)(339, "div", 106)(340, "figure", 107);
        \u0275\u0275element(341, "img", 111);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(342, "mat-card-content")(343, "h3", 109);
        \u0275\u0275text(344, "Steven Thomson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(345, "p", 18);
        \u0275\u0275text(346, "New York, USA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(347, "p", 110);
        \u0275\u0275text(348, "CEO");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(349, "div", 104)(350, "mat-card", 105)(351, "div", 106)(352, "figure", 107);
        \u0275\u0275element(353, "img", 112);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(354, "mat-card-content")(355, "h3", 109);
        \u0275\u0275text(356, "John Ritte");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(357, "p", 18);
        \u0275\u0275text(358, "Wembley, UK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(359, "p", 110);
        \u0275\u0275text(360, "CTO");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(361, "div", 104)(362, "mat-card", 105)(363, "div", 106)(364, "figure", 107);
        \u0275\u0275element(365, "img", 113);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(366, "mat-card-content")(367, "h3", 109);
        \u0275\u0275text(368, "Nicky Lambaa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(369, "p", 18);
        \u0275\u0275text(370, "Wembley, UK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(371, "p", 110);
        \u0275\u0275text(372, "CTO");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(373, "div", 114)(374, "div", 115)(375, "h2", 69);
        \u0275\u0275text(376, "Wanted to experience adventure?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(377, "p");
        \u0275\u0275text(378, "Join us now!. We will be happy to make ou part of our team.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(379, "button", 116);
        \u0275\u0275text(380, "Apply now");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(381, "div", 100)(382, "div", 117)(383, "div", 118)(384, "span", 119);
        \u0275\u0275text(385, "Pricing & Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(386, "h2", 120);
        \u0275\u0275text(387, "One platform, two contexts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(388, "p", 57);
        \u0275\u0275text(389, "Choose between ");
        \u0275\u0275elementStart(390, "strong");
        \u0275\u0275text(391, "Enterprise");
        \u0275\u0275elementEnd();
        \u0275\u0275text(392, " (companies & startups) or ");
        \u0275\u0275elementStart(393, "strong");
        \u0275\u0275text(394, "Academic");
        \u0275\u0275elementEnd();
        \u0275\u0275text(395, " (universities & research labs).");
        \u0275\u0275elementEnd();
        \u0275\u0275element(396, "br");
        \u0275\u0275elementStart(397, "div", 121)(398, "div", 122)(399, "button", 123);
        \u0275\u0275listener("click", function WebsiteComponent_Template_button_click_399_listener() {
          return ctx.homePricingTab.set("enterprise");
        });
        \u0275\u0275elementStart(400, "mat-icon");
        \u0275\u0275text(401, "corporate_fare");
        \u0275\u0275elementEnd();
        \u0275\u0275text(402, " Enterprise ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(403, "button", 123);
        \u0275\u0275listener("click", function WebsiteComponent_Template_button_click_403_listener() {
          return ctx.homePricingTab.set("academic");
        });
        \u0275\u0275elementStart(404, "mat-icon");
        \u0275\u0275text(405, "school");
        \u0275\u0275elementEnd();
        \u0275\u0275text(406, " Academic ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(407, "mat-button-toggle-group", 124)(408, "mat-button-toggle", 125);
        \u0275\u0275listener("change", function WebsiteComponent_Template_mat_button_toggle_change_408_listener() {
          return ctx.homeBillingCycle.set("monthly");
        });
        \u0275\u0275text(409, "Monthly");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(410, "mat-button-toggle", 126);
        \u0275\u0275listener("change", function WebsiteComponent_Template_mat_button_toggle_change_410_listener() {
          return ctx.homeBillingCycle.set("annual");
        });
        \u0275\u0275text(411, "Annual ");
        \u0275\u0275elementStart(412, "span", 127);
        \u0275\u0275text(413, "Save 20%");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(414, WebsiteComponent_Conditional_414_Template, 181, 12, "div", 128);
        \u0275\u0275conditionalCreate(415, WebsiteComponent_Conditional_415_Template, 181, 12, "div", 128);
        \u0275\u0275elementStart(416, "div", 129)(417, "button", 130)(418, "mat-icon");
        \u0275\u0275text(419, "compare");
        \u0275\u0275elementEnd();
        \u0275\u0275text(420, " Compare all plans in detail ");
        \u0275\u0275elementStart(421, "mat-icon", 9);
        \u0275\u0275text(422, "arrow_forward");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(423, "p", 131)(424, "mat-icon", 132);
        \u0275\u0275text(425, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275text(426, " Subscriptions are activated after admin validation (24\u201348h). Login credentials are sent by email upon activation. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(427, "div", 99)(428, "div", 100)(429, "h3", 4);
        \u0275\u0275text(430, "Our Testimonials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(431, "h1", 69);
        \u0275\u0275text(432, "What our ");
        \u0275\u0275elementStart(433, "span", 6);
        \u0275\u0275text(434, "customer says");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(435, "p", 4);
        \u0275\u0275text(436, "Here are few testimonials we had received for our product on website.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(437, "br");
        \u0275\u0275elementStart(438, "swiper-container", 133)(439, "swiper-slide", 134)(440, "mat-card", 135)(441, "mat-card-content", 84)(442, "span", 136);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(443, "svg", 137);
        \u0275\u0275element(444, "path", 138);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(445, "h3", 69);
        \u0275\u0275text(446, "Fantastic work as what we need");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(447, "p", 57);
        \u0275\u0275text(448, "AdminUIUX completely transformed our internal dashboard, making complex data intuitive and actionable. The streamlined interface cut our daily report generation time by over 40%. If you need efficient design and administrative clarity, look no further.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(449, "br");
        \u0275\u0275elementStart(450, "div", 139)(451, "div", 140)(452, "div", 141);
        \u0275\u0275element(453, "img", 142);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(454, "div", 85)(455, "h3", 109);
        \u0275\u0275text(456, "Rick Dino");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(457, "p", 18);
        \u0275\u0275text(458, "London, UK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(459, "p", 110);
        \u0275\u0275text(460, "CEO, Webmavdev.com");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(461, "swiper-slide", 134)(462, "mat-card", 135)(463, "mat-card-content", 84)(464, "span", 136);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(465, "svg", 137);
        \u0275\u0275element(466, "path", 138);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(467, "h3", 69);
        \u0275\u0275text(468, "Gear up with new system design");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(469, "p", 57);
        \u0275\u0275text(470, "We struggled with a clunky, outdated system, but AdminUIUX provided a solution that was easy to adopt. The training materials and transition support were flawless, ensuring zero disruption to our workflow. Professional, reliable, and highly recommended for any enterprise solution");
        \u0275\u0275elementEnd();
        \u0275\u0275element(471, "br");
        \u0275\u0275elementStart(472, "div", 139)(473, "div", 140)(474, "div", 141);
        \u0275\u0275element(475, "img", 143);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(476, "div", 85)(477, "h3", 109);
        \u0275\u0275text(478, "Carala Trio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(479, "p", 18);
        \u0275\u0275text(480, "Wembly, UK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(481, "p", 110);
        \u0275\u0275text(482, "Project Manager, Console.log");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(483, "swiper-slide", 134)(484, "mat-card", 135)(485, "mat-card-content", 84)(486, "span", 136);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(487, "svg", 137);
        \u0275\u0275element(488, "path", 138);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(489, "h3", 69);
        \u0275\u0275text(490, "So futuristic goal achieve");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(491, "p", 57);
        \u0275\u0275text(492, "Their approach to user experience design is modern, clean, and perfectly aligned with current trends. We received overwhelmingly positive feedback from our customers on the new checkout flow. A fantastic investment that directly boosted our conversion rates");
        \u0275\u0275elementEnd();
        \u0275\u0275element(493, "br");
        \u0275\u0275elementStart(494, "div", 139)(495, "div", 140)(496, "div", 141);
        \u0275\u0275element(497, "img", 142);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(498, "div", 85)(499, "h3", 109);
        \u0275\u0275text(500, "Amazing Person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(501, "p", 18);
        \u0275\u0275text(502, "Canada, UK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(503, "p", 110);
        \u0275\u0275text(504, "Unknown");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(505, "swiper-slide", 134)(506, "mat-card", 135)(507, "mat-card-content", 84)(508, "span", 136);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(509, "svg", 137);
        \u0275\u0275element(510, "path", 138);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(511, "h3", 69);
        \u0275\u0275text(512, "We are at top in Australia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(513, "p", 57);
        \u0275\u0275text(514, "The support team at AdminUIUX is unparalleled in responsiveness and technical expertise. They resolved a critical integration bug within hours, preventing major downtime during our peak season. Truly a partner in keeping our systems running smoothly and securely.");
        \u0275\u0275elementEnd();
        \u0275\u0275element(515, "br");
        \u0275\u0275elementStart(516, "div", 139)(517, "div", 140)(518, "div", 141);
        \u0275\u0275element(519, "img", 144);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(520, "div", 85)(521, "h3", 109);
        \u0275\u0275text(522, "Xen Chi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(523, "p", 18);
        \u0275\u0275text(524, "AU");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(525, "p", 110);
        \u0275\u0275text(526, "Owner, carmobi world tour");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(399);
        \u0275\u0275classProp("ptab-active", ctx.homePricingTab() === "enterprise");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("ptab-active", ctx.homePricingTab() === "academic");
        \u0275\u0275advance(4);
        \u0275\u0275property("hideSingleSelectionIndicator", ctx.hideSingleSelectionIndicator());
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.homePricingTab() === "enterprise" ? 414 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.homePricingTab() === "academic" ? 415 : -1);
      }
    }, dependencies: [CommonModule, RouterLink, FormsModule, MatExpansionModule, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatListModule, MatList, MatListItem, MatMenuModule, MatButtonModule, MatButton, MatIconModule, MatIcon, MatInputModule, MatFormFieldModule, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatToolbarModule, BarBlueChartjs100Component, AreaBlueChartjs60Component], styles: ["\n\n.badge-outline-theme[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--bs-primary, #0d6efd);\n  color: var(--bs-primary, #0d6efd);\n  background: transparent;\n  padding: 4px 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: .78rem;\n  letter-spacing: .5px;\n}\n.pricing-tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  background: var(--bs-tertiary-bg);\n  border-radius: 50px;\n  padding: 4px;\n  gap: 4px;\n}\n.ptab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border-radius: 50px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: .88rem;\n  transition: all .22s;\n  background: transparent;\n  color: var(--bs-secondary-color);\n}\n.ptab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.ptab-active[_ngcontent-%COMP%] {\n  background: var(--bs-card-bg, #fff);\n  color: var(--bs-primary, #0d6efd);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);\n}\n.home-plan-card[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--bs-border-color) !important;\n  border-radius: 16px !important;\n  position: relative;\n  overflow: hidden;\n  transition: transform .2s, box-shadow .2s;\n}\n.home-plan-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 32px rgba(0, 0, 0, .09) !important;\n}\n.home-plan-recommended[_ngcontent-%COMP%] {\n  border-color: var(--bs-primary, #0d6efd) !important;\n  box-shadow: 0 4px 20px rgba(13, 110, 253, .14) !important;\n}\n.home-plan-academic.home-plan-recommended[_ngcontent-%COMP%] {\n  border-color: #198754 !important;\n  box-shadow: 0 4px 20px rgba(25, 135, 84, .14) !important;\n}\n.home-plan-dashed[_ngcontent-%COMP%] {\n  border-style: dashed !important;\n}\n.hpc-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: var(--bs-primary, #0d6efd);\n  color: #fff;\n  font-size: .7rem;\n  font-weight: 700;\n  padding: 5px 12px;\n  border-radius: 0 16px 0 10px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.hpc-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.hpc-badge-academic[_ngcontent-%COMP%] {\n  background: #198754;\n}\n.hpc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n  padding-top: 6px;\n}\n.hpc-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ent-icon[_ngcontent-%COMP%] {\n  background: rgba(13, 110, 253, .1);\n  color: var(--bs-primary, #0d6efd);\n}\n.acad-icon[_ngcontent-%COMP%] {\n  background: rgba(25, 135, 84, .1);\n  color: #198754;\n}\n.hpc-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.hpc-price[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.hpc-currency[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  vertical-align: top;\n  margin-top: 4px;\n  display: inline-block;\n}\n.hpc-amount[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.hpc-period[_ngcontent-%COMP%] {\n  font-size: .78rem;\n  color: var(--bs-secondary-color);\n  margin-left: 3px;\n}\n.hpc-onrequest[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n}\n.hpc-features[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  margin-bottom: 0 !important;\n}\n.hpc-check[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  width: 16px !important;\n  height: 16px !important;\n  color: #198754 !important;\n}\n.see-all-plans-btn[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n/*# sourceMappingURL=website.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WebsiteComponent, [{
    type: Component,
    args: [{ selector: "app-website", standalone: true, imports: [CommonModule, RouterLink, FormsModule, MatExpansionModule, MatButtonToggleModule, MatListModule, MatMenuModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule, MatButtonModule, BarBlueChartjs100Component, AreaBlueChartjs60Component], template: `
        <div class="bg-theme-white-gradient bg-light-gradient position-relative pt-5">
            <div class="container py-4 pt-lg-5 z-index-1 position-relative ">
                <div class="row gx-3 gx-lg-4 justify-content-center text-center">
                    <div class="col-12 col-lg-8 col-xl-6 pt-3 pt-lg-5">
                        <h4 class="opacity-75">A Fluid, Flexible and Fluent UI template</h4>
                        <h1 class="mb-3">
                            SAAS Dashboard UIUX is Modern<br />
                            <span class="text-theme">User Interface Designs</span> System with<br />
                            Multi-Device UI Consistency
                        </h1>
                        <p class="opacity-75 mb-4 mb-lg-5">Enhance your web projects with our responsive Angular Material Admin Dashboard Template. This comprehensive UI kit provides a sleek, modern, and intuitive design to help you build powerful, feature-rich admin panels with ease.</p>
                        <button routerLink="/billing/pricing" matButton="filled" class="mx-2">Get Started <mat-icon iconPositionEnd>arrow_forward</mat-icon></button>
                        <button routerLink="/app/dashboard" matButton="elevated" class="mx-2">Dashboard <mat-icon iconPositionEnd>arrow_forward</mat-icon></button>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row gx-3 gx-lg-4 justify-content-center align-items-end overflow-hidden">
                    <div class="col-auto order-1 order-lg-1">
                        <mat-card class="height-150 width-200  position-relative mb-3 mb-lg-4">
                            <div class=" w-100 rounded position-absolute start-0 bottom-0 z-index-0 opacity-50">
                                <app-area-blue-chartjs-60 class="height-80 w-100 d-block"></app-area-blue-chartjs-60>
                            </div>
                            <mat-card-header> </mat-card-header>
                            <mat-card-content class="">
                                <h2 class="mb-1">Responsive</h2>
                                <h3 class="fw-light text-secondary">Flexible Widget</h3>
                            </mat-card-content>
                        </mat-card>
                    </div>
                    <div class="col-auto order-3 order-lg-2 position-relative">
                        <img src="assets/img/home.png" alt="" class="height-400 mx-auto d-block rounded" style="margin-bottom: -50px; box-shadow: 0 -5px 25px rgba(0, 49, 92, 0.16); margin-top: 45px;" />
                    </div>
                    <div class="col-auto order-2 order-lg-3">
                        <app-bar-blue-chartjs-100 class="height-80 width-180 my-3 my-lg-4 d-block"></app-bar-blue-chartjs-100>
                        <mat-card class="height-150 width-200 bg-theme text-white position-relative theme-green mb-3 mb-lg-4">
                            <div class="h-100 w-100 rounded coverimg position-absolute z-index-0 opacity-50">
                                <img src="assets/img/background1.jpg" alt="" />
                            </div>
                            <mat-card-header> </mat-card-header>
                            <mat-card-content class="z-index-1 position-relative">
                                <h2 class="fw-normal mb-1">Feel</h2>
                                <h3 class="fw-light">The Difference</h3>

                                <p class="small">Adopt the new wave</p>
                            </mat-card-content>
                        </mat-card>
                    </div>
                </div>
            </div>
        </div>
        <!-- count -->
        <div class="w-100 bg-theme text-white mb-4 mb-lg-5">
            <div class="container">
                <div class="row gx-3 gx-lg-4 text-center py-3">
                    <div class="col-6 col-lg-3 my-3 my-lg-4">
                        <h1 class="mb-1">61.15K+</h1>
                        <p>Downloads</p>
                    </div>
                    <div class="col-6 col-lg-3 my-3 my-lg-4">
                        <h1 class="mb-1">10245</h1>
                        <p>Projects</p>
                    </div>
                    <div class="col-6 col-lg-3 my-3 my-lg-4">
                        <h1 class="mb-1">9564</h1>
                        <p>Customer</p>
                    </div>
                    <div class="col-6 col-lg-3 my-3 my-lg-4">
                        <h1 class="mb-1">19+</h1>
                        <p>Country</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- we serve  -->
        <div class="container">
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-lg-6 mb-3 mb-lg-4">
                    <mat-card class="bg-light-gradient overflow-hidden">
                        <mat-card-content class="py-md-4 px-md-4 py-lg-5 px-lg-5">
                            <h4 class="opacity-75">Designed for multiple Business Domains</h4>
                            <h1>We design UX UI for Creative & Unique Digital Products</h1>
                            <p class="text-secondary mb-4">We create HTML templates for Enterprise applications, Business applications, eCommerce application, Admin Dashboard Applications, Mobile application, Mobile Websites, Micro websites, HTML for apps etc. Technology you can choose from our latest builds Bootstrap 5 HTML template, Mobile app templates, Angular starter kits.</p>
                            <button routerLink="/auth/login" matButton>Start now<mat-icon iconPositionEnd>arrow_forward</mat-icon></button>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-md-6 col-xl-3 mb-3 mb-lg-4">
                    <mat-card class="bg-light-gradient text-center h-100 overflow-hidden">
                        <mat-card-content class="py-lg-4 px-lg-4">
                            <div class="text-theme avatar avatar-50 rounded mt-3 mb-4">
                                <mat-icon class="material-icons-outlined align-middle text-xl">palette</mat-icon>
                            </div>
                            <h2>Trending Design</h2>
                            <p class="text-secondary mb-4">Be with latest trending and how content are being specific in AI Age. Our today's significant move can save tomorrows lot of efforts towards user accessibility.</p>
                            <button routerLink="/app/dashboard" matButton>Personalize <mat-icon iconPositionEnd>arrow_forward</mat-icon></button>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-md-6 col-xl-3 mb-3 mb-lg-4">
                    <mat-card class="bg-light-gradient text-center h-100 overflow-hidden">
                        <mat-card-content class="py-lg-4 px-lg-4">
                            <div class="text-theme avatar avatar-50 rounded mt-3 mb-4">
                                <mat-icon class="material-icons-outlined align-middle text-xl">leaderboard</mat-icon>
                            </div>
                            <h2>Uniqueness</h2>
                            <p class="text-secondary mb-4">Standout from crowed by using unique design template and maximize usage of framework capability to stay light weight and efficient.</p>
                            <button routerLink="/app/profile" matButton>Profile <mat-icon iconPositionEnd>arrow_forward</mat-icon></button>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>

            <!-- technology and customer -->
            <mat-card class="mb-3 mb-lg-4">
                <mat-card-content class="bg-light-gradient py-lg-4 px-md-4 py-lg-5 px-lg-5">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-12 col-lg-5">
                            <h4 class="opacity-75">Fully Customizable & Responsive</h4>
                            <h1>The Complete <span class="text-theme">UI/UX template</span> for Admin Dashboard Projects</h1>
                            <p class="text-secondary mb-3 mb-lg-4">Get inspired by a wide range of demo pages for different dashboard types. Our template is packed with features and ideas to streamline your development process and enhance the user experience.</p>
                        </div>
                        <div class="col-12 col-lg-6 ms-auto">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-12 col-sm-6 mb-3 mb-lg-4">
                                    <div class="bg-light-theme text-theme avatar avatar-50 rounded mb-3">
                                        <mat-icon class="material-icons-outlined align-middle">web</mat-icon>
                                    </div>
                                    <h3 class="mb-3">Multipurpose Admin Template</h3>
                                    <p class="text-secondary">In Sales Management template we have ready to use pages for Social, Finance, Appointment, Shopping and Admin dashboard to create your new app.</p>
                                </div>
                                <div class="col-12 col-sm-6 mb-3 mb-lg-4">
                                    <div class="bg-light-theme text-theme avatar avatar-50 rounded mb-3 theme-magenta" style="fill: var(--mat-sys-primary);">
                                        <svg x="0px" y="0px" width="960px" height="960px" viewBox="0 0 960 960" class="avatar avatar-30">
                                            <polygon points="562.6,109.8 804.1,629.5 829.2,233.1"></polygon>
                                            <polygon points="624.9,655.9 334.3,655.9 297.2,745.8 479.6,849.8 662,745.8"></polygon>
                                            <polygon points="384.1,539.3 575.2,539.3 479.6,307"></polygon>
                                            <polygon points="396.6,109.8 130,233.1 155.1,629.5"></polygon>
                                        </svg>
                                    </div>
                                    <h3 class="mb-3">Technology Framework</h3>
                                    <p class="text-secondary">We've created template with Angular Material Design framework v20.x. By keep in mind that Material Design it self driving its philosophy and we care for it.</p>
                                </div>
                                <div class="col-12 col-sm-6 mb-3 mb-lg-4">
                                    <div class="bg-light-theme text-theme avatar avatar-50 rounded mb-3 theme-red">
                                        <mat-icon class="material-icons-outlined align-middle">web</mat-icon>
                                    </div>
                                    <h3 class="mb-3">Flexible UI kit Template</h3>
                                    <p class="text-secondary">In Sales Management template we have very flexible UI widgets for best fluid responsive experience and it works smooth in major devices.</p>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="bg-light-theme text-theme avatar avatar-50 rounded mb-3 theme-cyan">
                                        <mat-icon class="material-icons-outlined align-middle">web</mat-icon>
                                    </div>
                                    <h3 class="mb-3">Creativity and Uniqueness</h3>
                                    <p class="text-secondary">In market we are very different from other author in creativity. We do craft each page with own creative thought process to make it incredible in UI design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>

            <div class="row gx-3 gx-lg-4 justify-content-center pt-4 pt-lg-5">
                <div class="col-12 col-lg-8 text-center mb-3 mb-lg-4">
                    <h4 class="opacity-75">Believe in future proof development</h4>
                    <h1 class="mb-2">Features that <span class="text-theme">helps business</span> to grow and easy adopt trends</h1>
                    <p class="text-secondary mb-4">Quick start development with ready to use pages along with the customizable highly demanded features. Easy to adopt trends no more unwanted code features inside by business specific template development approach.</p>
                </div>
            </div>
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-12 col-lg-6 mb-3 mb-lg-4">
                    <mat-card class="">
                        <mat-card-content class="py-lg-4 px-lg-4">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-6">
                                    <h2>SASS Dashboard</h2>
                                    <p class="text-secondary">Take a quick look overview with detailed dashboard interface design</p>

                                    <mat-list class="mb-3 ">
                                        <mat-list-item><mat-icon class="material-icons-outlined align-middle me-2">check_circle</mat-icon> Easy Navigation</mat-list-item>
                                        <mat-list-item><mat-icon class="material-icons-outlined align-middle me-2">check_circle</mat-icon> Interactive Grid</mat-list-item>
                                        <mat-list-item><mat-icon class="material-icons-outlined align-middle me-2">check_circle</mat-icon> Charts Options</mat-list-item>
                                        <mat-list-item><mat-icon class="material-icons-outlined align-middle me-2">check_circle</mat-icon> Elastic Widgets</mat-list-item>
                                    </mat-list>
                                    <button routerLink="/app/dashboard" matButton>Dashboard <mat-icon iconPositionEnd>arrow_forward</mat-icon></button>
                                </div>
                                <div class="col-6 ">
                                    <img src="assets/img/feature-1.png" alt="" class="w-100 rounded" />
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-3 mb-lg-4">
                    <mat-card class="h-100 overflow-hidden">
                        <mat-card-content class="p-4">
                            <h2>Track e-Commerce</h2>
                            <p class="text-secondary mb-3">You can expand project with eCommerce store and manage at one single place.</p>
                            <img src="assets/img/feature-2.png" alt="" class="w-100 rounded mb-2" />
                            <button routerLink="/app/ecommerce" class="" matButton>Storefront UI <mat-icon iconPositionEnd>arrow_forward</mat-icon></button>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-3 mb-lg-4">
                    <mat-card class="h-100 overflow-hidden">
                        <mat-card-content class="p-4">
                            <h2>Appointment Booking</h2>
                            <p class="text-secondary mb-4">Easy to Book appointment and track with calendar. Mange your schedules personal and business now with more accessible way.</p>
                            <img src="assets/img/feature-3.png" alt="" class="w-100 mb-2" />
                            <button routerLink="/app/calendar" class="" matButton>Calendar <mat-icon iconPositionEnd>arrow_forward</mat-icon></button>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>

            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col-12 col-lg-6">
                    <mat-card class="bg-light-theme mb-3 mb-lg-4">
                        <mat-card-content class="p-lg-4">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <h2>Project Management</h2>
                                    <p class="text-secondary mb-4">Track your project and analyze task progress along with project. Review and Monitor closely with minimal effort. Manage documents and activity view which help you to have better understanding. Responsiveness and customizability allows more flexibility to achieve business goals</p>
                                </div>
                                <div class="col-auto align-self-end">
                                    <button routerLink="/app/projects" class="mb-3" matButton>Projects <mat-icon iconPositionEnd>arrow_forward</mat-icon></button>
                                </div>
                            </div>
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col-12 col-lg-6">
                                    <img src="assets/img/feature-4.png" alt="" class="w-100 rounded" />
                                </div>
                                <div class="col-12 col-lg-6">
                                    <img src="assets/img/feature-5.png" alt="" class="w-100 rounded" />
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-lg-6">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="p-lg-4">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <h2>Task Management</h2>
                                    <p class="text-secondary mb-3">With the minimalistic Kanban chart you can manage your daily task and progress with status.</p>
                                </div>
                                <div class="col-auto align-self-end">
                                    <button routerLink="/app/kanban" class="mb-3" matButton>Kanban view <mat-icon iconPositionEnd>arrow_forward</mat-icon></button>
                                </div>
                            </div>
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col-12 col-lg-6">
                                    <img src="assets/img/feature-6.png" alt="" class="w-100 rounded" />
                                </div>
                                <div class="col-12 col-lg-6">
                                    <img src="assets/img/feature-7.png" alt="" class="w-100 rounded" />
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
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

        <!-- team -->
        <div class="bg-light-gradient bg-light-theme">
            <div class="container py-4 py-lg-5">
                <h3 class="opacity-75">Meet our team</h3>
                <div class="row gx-3 gx-lg-4 mb-lg-4">
                    <div class="col-12 col-md-6 col-lg-6 mb-3 mb-lg-4">
                        <h1>Our <span class="text-theme">great team</span> is our strength<br />& source of growth.</h1>
                    </div>
                    <div class="col col-lg-5 ms-auto mb-3 mb-lg-4">
                        <p>We work hard, we do it creatively and we like to see you here! We always prefer to have clear communication less headache and only creative thoughts in mind. That is why we prefer to have good working culture across the organization.</p>
                    </div>
                </div>
                <div class="row gx-3 gx-lg-4">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <mat-card class="text-center mb-3 mb-lg-4">
                            <div mat-card-image class="height-250 overflow-hidden mb-3">
                                <figure class="h-100 w-100 coverimg">
                                    <img src="assets/img/user-6.jpg" alt="" />
                                </figure>
                            </div>
                            <mat-card-content>
                                <h3 class="text-truncated mb-1">Aditi Johnson</h3>
                                <p class="mb-1">London, UK</p>
                                <p class="text-secondary small">Founder</p>
                            </mat-card-content>
                        </mat-card>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <mat-card class="text-center mb-3 mb-lg-4">
                            <div mat-card-image class="height-250 overflow-hidden mb-3">
                                <figure class="h-100 w-100 coverimg">
                                    <img src="assets/img/user-4.jpg" alt="" />
                                </figure>
                            </div>
                            <mat-card-content>
                                <h3 class="text-truncated mb-1">Steven Thomson</h3>
                                <p class="mb-1">New York, USA</p>
                                <p class="text-secondary small">CEO</p>
                            </mat-card-content>
                        </mat-card>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <mat-card class="text-center mb-3 mb-lg-4">
                            <div mat-card-image class="height-250 overflow-hidden mb-3">
                                <figure class="h-100 w-100 coverimg">
                                    <img src="assets/img/user-3.jpg" alt="" />
                                </figure>
                            </div>
                            <mat-card-content>
                                <h3 class="text-truncated mb-1">John Ritte</h3>
                                <p class="mb-1">Wembley, UK</p>
                                <p class="text-secondary small">CTO</p>
                            </mat-card-content>
                        </mat-card>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <mat-card class="text-center mb-3 mb-lg-4">
                            <div mat-card-image class="height-250 overflow-hidden mb-3">
                                <figure class="h-100 w-100 coverimg">
                                    <img src="assets/img/user-2.jpg" alt="" />
                                </figure>
                            </div>
                            <mat-card-content>
                                <h3 class="text-truncated mb-1">Nicky Lambaa</h3>
                                <p class="mb-1">Wembley, UK</p>
                                <p class="text-secondary small">CTO</p>
                            </mat-card-content>
                        </mat-card>
                    </div>
                </div>
                <div class="row gx-3 gx-lg-4 text-center justify-content-center">
                    <div class="col-auto pt-4">
                        <h2 class="mb-2">Wanted to experience adventure?</h2>
                        <p>Join us now!. We will be happy to make ou part of our team.</p>

                        <button matButton="filled" class="">Apply now</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
             PRICING SECTION \u2014 CMP Plans (Enterprise & Academic)
             \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="container py-4 py-lg-5">
            <!-- Section Header -->
            <div class="row gx-3 gx-lg-4 justify-content-center mb-3 mb-lg-4">
                <div class="col-12 col-md-8 col-lg-6 text-center">
                    <span class="badge badge-outline-theme mb-2">Pricing & Plans</span>
                    <h2 class="mb-2 fw-bold">One platform, two contexts</h2>
                    <p class="text-secondary">Choose between <strong>Enterprise</strong> (companies &amp; startups) or <strong>Academic</strong> (universities &amp; research labs).</p>
                    <br />
                    <!-- Org Type Tabs -->
                    <div class="pricing-tabs-wrapper d-flex justify-content-center mb-3">
                        <div class="pricing-tabs">
                            <button class="ptab" [class.ptab-active]="homePricingTab() === 'enterprise'" (click)="homePricingTab.set('enterprise')">
                                <mat-icon>corporate_fare</mat-icon> Enterprise
                            </button>
                            <button class="ptab" [class.ptab-active]="homePricingTab() === 'academic'" (click)="homePricingTab.set('academic')">
                                <mat-icon>school</mat-icon> Academic
                            </button>
                        </div>
                    </div>
                    <!-- Billing Toggle -->
                    <mat-button-toggle-group name="plans" [hideSingleSelectionIndicator]="hideSingleSelectionIndicator()">
                        <mat-button-toggle value="monthly" checked (change)="homeBillingCycle.set('monthly')">Monthly</mat-button-toggle>
                        <mat-button-toggle value="yearly" (change)="homeBillingCycle.set('annual')">Annual <span class="badge badge-theme ms-2">Save 20%</span></mat-button-toggle>
                    </mat-button-toggle-group>
                </div>
            </div>

            <!-- Enterprise Plans -->
            @if (homePricingTab() === 'enterprise') {
            <div class="row gx-3 gx-lg-4 align-items-stretch">

                <!-- Starter -->
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                    <mat-card class="home-plan-card h-100">
                        <mat-card-content class="d-flex flex-column h-100">
                            <div class="hpc-header">
                                <div class="hpc-icon ent-icon"><mat-icon>rocket_launch</mat-icon></div>
                                <div>
                                    <h4 class="mb-0 fw-bold">Starter</h4>
                                    <p class="text-secondary small mb-0">Small teams</p>
                                </div>
                            </div>
                            <div class="hpc-price">
                                <span class="hpc-currency">$</span>
                                <span class="hpc-amount">{{ homeBillingCycle() === 'monthly' ? '49' : '39' }}</span>
                                <span class="hpc-period">/mo</span>
                            </div>
                            <mat-list class="hpc-features flex-grow-1" style="--mat-list-list-item-one-line-container-height:36px">
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>5 team members</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>3 workspaces</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>10 projects</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>5 GB storage</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Basic ML insights</mat-list-item>
                            </mat-list>
                            <mat-card-actions class="pt-2">
                                <button routerLink="/billing/checkout" [queryParams]="{plan:'starter',type:'enterprise',cycle:homeBillingCycle()}" matButton="outlined" class="w-100">
                                    Get Started <mat-icon iconPositionEnd>arrow_forward</mat-icon>
                                </button>
                            </mat-card-actions>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- Pro (Recommended) -->
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                    <mat-card class="home-plan-card home-plan-recommended h-100">
                        <div class="hpc-badge"><mat-icon>star</mat-icon> Recommended</div>
                        <mat-card-content class="d-flex flex-column h-100">
                            <div class="hpc-header">
                                <div class="hpc-icon ent-icon"><mat-icon>workspace_premium</mat-icon></div>
                                <div>
                                    <h4 class="mb-0 fw-bold">Pro</h4>
                                    <p class="text-secondary small mb-0">Growing orgs</p>
                                </div>
                            </div>
                            <div class="hpc-price">
                                <span class="hpc-currency">$</span>
                                <span class="hpc-amount">{{ homeBillingCycle() === 'monthly' ? '149' : '119' }}</span>
                                <span class="hpc-period">/mo</span>
                            </div>
                            <mat-list class="hpc-features flex-grow-1" style="--mat-list-list-item-one-line-container-height:36px">
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>25 team members</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>10 workspaces</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Unlimited projects</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Full ML suite</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Priority support</mat-list-item>
                            </mat-list>
                            <mat-card-actions class="pt-2">
                                <button routerLink="/billing/checkout" [queryParams]="{plan:'pro',type:'enterprise',cycle:homeBillingCycle()}" matButton="filled" class="w-100">
                                    Get Started <mat-icon iconPositionEnd>arrow_forward</mat-icon>
                                </button>
                            </mat-card-actions>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- Business -->
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                    <mat-card class="home-plan-card h-100">
                        <mat-card-content class="d-flex flex-column h-100">
                            <div class="hpc-header">
                                <div class="hpc-icon ent-icon"><mat-icon>corporate_fare</mat-icon></div>
                                <div>
                                    <h4 class="mb-0 fw-bold">Business</h4>
                                    <p class="text-secondary small mb-0">Large enterprises</p>
                                </div>
                            </div>
                            <div class="hpc-price">
                                <span class="hpc-currency">$</span>
                                <span class="hpc-amount">{{ homeBillingCycle() === 'monthly' ? '349' : '279' }}</span>
                                <span class="hpc-period">/mo</span>
                            </div>
                            <mat-list class="hpc-features flex-grow-1" style="--mat-list-list-item-one-line-container-height:36px">
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>100 team members</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Unlimited workspaces</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Advanced ML models</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>SSO / SAML</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>SLA 99.9%</mat-list-item>
                            </mat-list>
                            <mat-card-actions class="pt-2">
                                <button routerLink="/billing/checkout" [queryParams]="{plan:'business',type:'enterprise',cycle:homeBillingCycle()}" matButton="outlined" class="w-100">
                                    Get Started <mat-icon iconPositionEnd>arrow_forward</mat-icon>
                                </button>
                            </mat-card-actions>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- Enterprise / On Request -->
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                    <mat-card class="home-plan-card home-plan-dashed h-100">
                        <mat-card-content class="d-flex flex-column h-100">
                            <div class="hpc-header">
                                <div class="hpc-icon ent-icon"><mat-icon>apartment</mat-icon></div>
                                <div>
                                    <h4 class="mb-0 fw-bold">Enterprise</h4>
                                    <p class="text-secondary small mb-0">Custom scale</p>
                                </div>
                            </div>
                            <div class="hpc-price">
                                <span class="hpc-amount hpc-onrequest">On Request</span>
                            </div>
                            <mat-list class="hpc-features flex-grow-1" style="--mat-list-list-item-one-line-container-height:36px">
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Unlimited members</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>On-premise deploy</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Custom ML pipelines</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>White-labeling</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Custom SLA</mat-list-item>
                            </mat-list>
                            <mat-card-actions class="pt-2">
                                <button routerLink="/web/contact-us" matButton="outlined" class="w-100">
                                    <mat-icon>mail</mat-icon> Contact Sales
                                </button>
                            </mat-card-actions>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
            }

            <!-- Academic Plans -->
            @if (homePricingTab() === 'academic') {
            <div class="row gx-3 gx-lg-4 align-items-stretch">

                <!-- Free -->
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                    <mat-card class="home-plan-card h-100">
                        <mat-card-content class="d-flex flex-column h-100">
                            <div class="hpc-header">
                                <div class="hpc-icon acad-icon"><mat-icon>school</mat-icon></div>
                                <div>
                                    <h4 class="mb-0 fw-bold">Academic Starter</h4>
                                    <p class="text-secondary small mb-0">Small classes &amp; labs</p>
                                </div>
                            </div>
                            <div class="hpc-price">
                                <span class="hpc-currency">$</span>
                                <span class="hpc-amount">{{ homeBillingCycle() === 'monthly' ? '29' : '23' }}</span>
                                <span class="hpc-period">/mo</span>
                            </div>
                            <mat-list class="hpc-features flex-grow-1" style="--mat-list-list-item-one-line-container-height:36px">
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>50 students</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>2 professors</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>5 course projects</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Basic grading</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Email support</mat-list-item>
                            </mat-list>
                            <mat-card-actions class="pt-2">
                                <button routerLink="/billing/checkout" [queryParams]="{plan:'academic-starter',type:'academic',cycle:homeBillingCycle()}" matButton="outlined" class="w-100">
                                    Get Started <mat-icon iconPositionEnd>arrow_forward</mat-icon>
                                </button>
                            </mat-card-actions>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- Faculty -->
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                    <mat-card class="home-plan-card h-100">
                        <mat-card-content class="d-flex flex-column h-100">
                            <div class="hpc-header">
                                <div class="hpc-icon acad-icon"><mat-icon>menu_book</mat-icon></div>
                                <div>
                                    <h4 class="mb-0 fw-bold">Faculty</h4>
                                    <p class="text-secondary small mb-0">Departments &amp; labs</p>
                                </div>
                            </div>
                            <div class="hpc-price">
                                <span class="hpc-currency">$</span>
                                <span class="hpc-amount">{{ homeBillingCycle() === 'monthly' ? '39' : '31' }}</span>
                                <span class="hpc-period">/mo</span>
                            </div>
                            <mat-list class="hpc-features flex-grow-1" style="--mat-list-list-item-one-line-container-height:36px">
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>100 students</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>5 professors</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Grade management</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Plagiarism signals</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Email support</mat-list-item>
                            </mat-list>
                            <mat-card-actions class="pt-2">
                                <button routerLink="/billing/checkout" [queryParams]="{plan:'academic-faculty',type:'academic',cycle:homeBillingCycle()}" matButton="outlined" class="w-100">
                                    Get Started <mat-icon iconPositionEnd>arrow_forward</mat-icon>
                                </button>
                            </mat-card-actions>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- Institution (Recommended) -->
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                    <mat-card class="home-plan-card home-plan-recommended home-plan-academic h-100">
                        <div class="hpc-badge hpc-badge-academic"><mat-icon>star</mat-icon> Recommended</div>
                        <mat-card-content class="d-flex flex-column h-100">
                            <div class="hpc-header">
                                <div class="hpc-icon acad-icon"><mat-icon>account_balance</mat-icon></div>
                                <div>
                                    <h4 class="mb-0 fw-bold">Institution</h4>
                                    <p class="text-secondary small mb-0">Whole school</p>
                                </div>
                            </div>
                            <div class="hpc-price">
                                <span class="hpc-currency">$</span>
                                <span class="hpc-amount">{{ homeBillingCycle() === 'monthly' ? '99' : '79' }}</span>
                                <span class="hpc-period">/mo</span>
                            </div>
                            <mat-list class="hpc-features flex-grow-1" style="--mat-list-list-item-one-line-container-height:36px">
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>500 students</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Unlimited professors</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Bulk CSV import</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>FERPA compliance</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Priority support</mat-list-item>
                            </mat-list>
                            <mat-card-actions class="pt-2">
                                <button routerLink="/billing/checkout" [queryParams]="{plan:'academic-institution',type:'academic',cycle:homeBillingCycle()}" matButton="filled" class="w-100">
                                    Get Started <mat-icon iconPositionEnd>arrow_forward</mat-icon>
                                </button>
                            </mat-card-actions>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- Campus / On Request -->
                <div class="col-12 col-md-6 col-lg-3 mb-4">
                    <mat-card class="home-plan-card home-plan-dashed h-100">
                        <mat-card-content class="d-flex flex-column h-100">
                            <div class="hpc-header">
                                <div class="hpc-icon acad-icon"><mat-icon>domain</mat-icon></div>
                                <div>
                                    <h4 class="mb-0 fw-bold">Campus</h4>
                                    <p class="text-secondary small mb-0">University-wide</p>
                                </div>
                            </div>
                            <div class="hpc-price">
                                <span class="hpc-amount hpc-onrequest">On Request</span>
                            </div>
                            <mat-list class="hpc-features flex-grow-1" style="--mat-list-list-item-one-line-container-height:36px">
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Unlimited students</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Multi-faculty support</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>SAML / SSO</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>On-premise option</mat-list-item>
                                <mat-list-item><mat-icon class="hpc-check me-2">check_circle</mat-icon>Custom SLA</mat-list-item>
                            </mat-list>
                            <mat-card-actions class="pt-2">
                                <button routerLink="/web/contact-us" matButton="outlined" class="w-100">
                                    <mat-icon>mail</mat-icon> Contact Sales
                                </button>
                            </mat-card-actions>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
            }

            <!-- See all plans CTA -->
            <div class="text-center mt-2 mb-3">
                <button routerLink="/billing/pricing" matButton class="see-all-plans-btn">
                    <mat-icon>compare</mat-icon> Compare all plans in detail
                    <mat-icon iconPositionEnd>arrow_forward</mat-icon>
                </button>
            </div>

            <!-- Pricing footer note -->
            <p class="text-center text-secondary small opacity-75">
                <mat-icon style="font-size:14px;vertical-align:middle">info</mat-icon>
                Subscriptions are activated after admin validation (24\u201348h). Login credentials are sent by email upon activation.
            </p>
        </div>

        <!-- testimonials -->
        <div class="bg-light-gradient bg-light-theme">
            <div class="container py-4 py-lg-5">
                <h3 class="opacity-75">Our Testimonials</h3>
                <h1 class="mb-2">What our <span class="text-theme">customer says</span></h1>
                <p class="opacity-75">Here are few testimonials we had received for our product on website.</p>
                <br />
                <swiper-container slides-per-view="auto" space-between="20px" autoplay="true" pagination="true" class="swiper">
                    <swiper-slide class="pb-3 width-400">
                        <mat-card class="overflow-hidden mb-4">
                            <mat-card-content class="p-lg-4">
                                <span class="avatar avatar-50 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30.575" height="24.416" viewBox="0 0 30.575 24.416" class="w-100 opacity-50">
                                        <path id="Path_71" data-name="Path 71" d="M9.326,13.916H-2.919V1.745q0-10.852,12.245-12.245v6.086q-5.939.22-6.086,6.159H9.326Zm18.33,0H15.411V1.745q0-10.852,12.245-12.245v6.086q-5.939.22-6.086,6.159h6.086Z" transform="translate(2.919 10.5)" />
                                    </svg>
                                </span>
                                <h3 class="mb-2">Fantastic work as what we need</h3>
                                <p class="text-secondary">AdminUIUX completely transformed our internal dashboard, making complex data intuitive and actionable. The streamlined interface cut our daily report generation time by over 40%. If you need efficient design and administrative clarity, look no further.</p>
                                <br />
                                <div class="row gx-3 align-items-center">
                                    <div class="col-auto">
                                        <div class="coverimg avatar avatar-60 rounded">
                                            <img src="assets/img/user-7.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="text-truncated mb-1">Rick Dino</h3>
                                        <p class="mb-1">London, UK</p>
                                        <p class="text-secondary small">CEO, Webmavdev.com</p>
                                    </div>
                                </div>
                            </mat-card-content>
                        </mat-card>
                    </swiper-slide>
                    <swiper-slide class="pb-3 width-400">
                        <mat-card class="overflow-hidden mb-4">
                            <mat-card-content class="p-lg-4">
                                <span class="avatar avatar-50 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30.575" height="24.416" viewBox="0 0 30.575 24.416" class="w-100 opacity-50">
                                        <path id="Path_71" data-name="Path 71" d="M9.326,13.916H-2.919V1.745q0-10.852,12.245-12.245v6.086q-5.939.22-6.086,6.159H9.326Zm18.33,0H15.411V1.745q0-10.852,12.245-12.245v6.086q-5.939.22-6.086,6.159h6.086Z" transform="translate(2.919 10.5)" />
                                    </svg>
                                </span>
                                <h3 class="mb-2">Gear up with new system design</h3>
                                <p class="text-secondary">We struggled with a clunky, outdated system, but AdminUIUX provided a solution that was easy to adopt. The training materials and transition support were flawless, ensuring zero disruption to our workflow. Professional, reliable, and highly recommended for any enterprise solution</p>
                                <br />
                                <div class="row gx-3 align-items-center">
                                    <div class="col-auto">
                                        <div class="coverimg avatar avatar-60 rounded">
                                            <img src="assets/img/user-10.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="text-truncated mb-1">Carala Trio</h3>
                                        <p class="mb-1">Wembly, UK</p>
                                        <p class="text-secondary small">Project Manager, Console.log</p>
                                    </div>
                                </div>
                            </mat-card-content>
                        </mat-card>
                    </swiper-slide>
                    <swiper-slide class="pb-3 width-400">
                        <mat-card class="overflow-hidden mb-4">
                            <mat-card-content class="p-lg-4">
                                <span class="avatar avatar-50 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30.575" height="24.416" viewBox="0 0 30.575 24.416" class="w-100 opacity-50">
                                        <path id="Path_71" data-name="Path 71" d="M9.326,13.916H-2.919V1.745q0-10.852,12.245-12.245v6.086q-5.939.22-6.086,6.159H9.326Zm18.33,0H15.411V1.745q0-10.852,12.245-12.245v6.086q-5.939.22-6.086,6.159h6.086Z" transform="translate(2.919 10.5)" />
                                    </svg>
                                </span>
                                <h3 class="mb-2">So futuristic goal achieve</h3>
                                <p class="text-secondary">Their approach to user experience design is modern, clean, and perfectly aligned with current trends. We received overwhelmingly positive feedback from our customers on the new checkout flow. A fantastic investment that directly boosted our conversion rates</p>
                                <br />
                                <div class="row gx-3 align-items-center">
                                    <div class="col-auto">
                                        <div class="coverimg avatar avatar-60 rounded">
                                            <img src="assets/img/user-7.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="text-truncated mb-1">Amazing Person</h3>
                                        <p class="mb-1">Canada, UK</p>
                                        <p class="text-secondary small">Unknown</p>
                                    </div>
                                </div>
                            </mat-card-content>
                        </mat-card>
                    </swiper-slide>
                    <swiper-slide class="pb-3 width-400">
                        <mat-card class="overflow-hidden mb-4">
                            <mat-card-content class="p-lg-4">
                                <span class="avatar avatar-50 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30.575" height="24.416" viewBox="0 0 30.575 24.416" class="w-100 opacity-50">
                                        <path id="Path_71" data-name="Path 71" d="M9.326,13.916H-2.919V1.745q0-10.852,12.245-12.245v6.086q-5.939.22-6.086,6.159H9.326Zm18.33,0H15.411V1.745q0-10.852,12.245-12.245v6.086q-5.939.22-6.086,6.159h6.086Z" transform="translate(2.919 10.5)" />
                                    </svg>
                                </span>
                                <h3 class="mb-2">We are at top in Australia</h3>
                                <p class="text-secondary">The support team at AdminUIUX is unparalleled in responsiveness and technical expertise. They resolved a critical integration bug within hours, preventing major downtime during our peak season. Truly a partner in keeping our systems running smoothly and securely.</p>
                                <br />
                                <div class="row gx-3 align-items-center">
                                    <div class="col-auto">
                                        <div class="coverimg avatar avatar-60 rounded">
                                            <img src="assets/img/user-5.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="text-truncated mb-1">Xen Chi</h3>
                                        <p class="mb-1">AU</p>
                                        <p class="text-secondary small">Owner, carmobi world tour</p>
                                    </div>
                                </div>
                            </mat-card-content>
                        </mat-card>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA], styles: ["/* angular:styles/component:css;aa45041094406f11c26d83e9aac66053aabd29c91af7ed86994f7fc036198f67;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/pages/website/website.component.ts */\n.badge-outline-theme {\n  border: 1.5px solid var(--bs-primary, #0d6efd);\n  color: var(--bs-primary, #0d6efd);\n  background: transparent;\n  padding: 4px 14px;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: .78rem;\n  letter-spacing: .5px;\n}\n.pricing-tabs {\n  display: inline-flex;\n  background: var(--bs-tertiary-bg);\n  border-radius: 50px;\n  padding: 4px;\n  gap: 4px;\n}\n.ptab {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 22px;\n  border-radius: 50px;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: .88rem;\n  transition: all .22s;\n  background: transparent;\n  color: var(--bs-secondary-color);\n}\n.ptab mat-icon {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.ptab-active {\n  background: var(--bs-card-bg, #fff);\n  color: var(--bs-primary, #0d6efd);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, .1);\n}\n.home-plan-card {\n  border: 1.5px solid var(--bs-border-color) !important;\n  border-radius: 16px !important;\n  position: relative;\n  overflow: hidden;\n  transition: transform .2s, box-shadow .2s;\n}\n.home-plan-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 32px rgba(0, 0, 0, .09) !important;\n}\n.home-plan-recommended {\n  border-color: var(--bs-primary, #0d6efd) !important;\n  box-shadow: 0 4px 20px rgba(13, 110, 253, .14) !important;\n}\n.home-plan-academic.home-plan-recommended {\n  border-color: #198754 !important;\n  box-shadow: 0 4px 20px rgba(25, 135, 84, .14) !important;\n}\n.home-plan-dashed {\n  border-style: dashed !important;\n}\n.hpc-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: var(--bs-primary, #0d6efd);\n  color: #fff;\n  font-size: .7rem;\n  font-weight: 700;\n  padding: 5px 12px;\n  border-radius: 0 16px 0 10px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.hpc-badge mat-icon {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.hpc-badge-academic {\n  background: #198754;\n}\n.hpc-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 14px;\n  padding-top: 6px;\n}\n.hpc-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ent-icon {\n  background: rgba(13, 110, 253, .1);\n  color: var(--bs-primary, #0d6efd);\n}\n.acad-icon {\n  background: rgba(25, 135, 84, .1);\n  color: #198754;\n}\n.hpc-icon mat-icon {\n  font-size: 22px;\n}\n.hpc-price {\n  margin-bottom: 12px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--bs-border-color);\n}\n.hpc-currency {\n  font-size: 1.1rem;\n  font-weight: 700;\n  vertical-align: top;\n  margin-top: 4px;\n  display: inline-block;\n}\n.hpc-amount {\n  font-size: 2.4rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.hpc-period {\n  font-size: .78rem;\n  color: var(--bs-secondary-color);\n  margin-left: 3px;\n}\n.hpc-onrequest {\n  font-size: 1.5rem !important;\n}\n.hpc-features {\n  padding: 0 !important;\n  margin-bottom: 0 !important;\n}\n.hpc-check {\n  font-size: 16px !important;\n  width: 16px !important;\n  height: 16px !important;\n  color: #198754 !important;\n}\n.see-all-plans-btn {\n  font-weight: 600 !important;\n}\n/*# sourceMappingURL=website.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebsiteComponent, { className: "WebsiteComponent", filePath: "src/app/pages/website/website.component.ts", lineNumber: 885 });
})();
export {
  WebsiteComponent
};
//# sourceMappingURL=website.component-POCYAZSM.js.map
