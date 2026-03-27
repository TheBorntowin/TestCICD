import {
  EmployeeSelectComponent
} from "./chunk-HYNHQZY7.js";
import {
  SemiDoughnutChartjs180Component,
  TimelineChartComponent
} from "./chunk-LC5NPUAL.js";
import {
  PageRightComponent
} from "./chunk-BMFH3O7D.js";
import {
  InventoryBannerChartComponent
} from "./chunk-CWHF5BTI.js";
import {
  CircleProgressBlueComponent,
  CircleProgressComponent,
  CircleProgressOptions,
  NgCircleProgressModule
} from "./chunk-NEQRFG5O.js";
import {
  Chart,
  registerables
} from "./chunk-PZSKZJEJ.js";
import "./chunk-RG7V5CFX.js";
import "./chunk-IJRF7KWR.js";
import {
  MatTooltipModule
} from "./chunk-6LUZEZUF.js";
import {
  MatTooltip
} from "./chunk-O4BMA6W6.js";
import {
  register
} from "./chunk-S5VFQUTS.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-A5PEKAIR.js";
import {
  MatMenuModule
} from "./chunk-SP2SPZAY.js";
import {
  MatSelectModule
} from "./chunk-MWLO4FO4.js";
import "./chunk-D63GK34V.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
  MatChipsModule
} from "./chunk-5G2FMPWG.js";
import "./chunk-N5FEMAXL.js";
import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemTitle,
  MatListModule
} from "./chunk-ALLV6QEF.js";
import "./chunk-CWBJY2AK.js";
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import "./chunk-5NBIR3PL.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-ZWEWHYHK.js";
import {
  MatInputModule
} from "./chunk-45QHUHCH.js";
import "./chunk-7XFTNJ2Y.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButtonModule,
  MatIconButton
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
  ChangeDetectorRef,
  Component,
  HostListener,
  ViewChild,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/components/charts/circle-progress-red.component.ts
var CircleProgressRedComponent = class _CircleProgressRedComponent {
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new Event("resize"));
      this.cdr.detectChanges();
    }, 300);
  }
  static {
    this.\u0275fac = function CircleProgressRedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CircleProgressRedComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CircleProgressRedComponent, selectors: [["app-circle-progress-red"]], features: [\u0275\u0275ProvidersFeature([
      {
        provide: CircleProgressOptions
      }
    ])], decls: 1, vars: 14, consts: [[1, "avatar", "avatar-80", 3, "percent", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "showSubtitle", "titleFontSize", "unitsFontSize", "titleColor", "unitsColor", "animationDuration"]], template: function CircleProgressRedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "circle-progress", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("percent", 65)("space", -6)("radius", 40)("outerStrokeWidth", 6)("innerStrokeWidth", 6)("outerStrokeColor", "#c00100")("innerStrokeColor", "rgba(255, 180, 171, 0.25)")("animation", true)("showSubtitle", false)("titleFontSize", "26px")("unitsFontSize", "20px")("titleColor", "#c00100")("unitsColor", "#c00100")("animationDuration", 300);
      }
    }, dependencies: [NgCircleProgressModule, CircleProgressComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircleProgressRedComponent, [{
    type: Component,
    args: [{
      selector: "app-circle-progress-red",
      standalone: true,
      imports: [NgCircleProgressModule],
      providers: [
        {
          provide: CircleProgressOptions
        }
      ],
      template: `<circle-progress class="avatar avatar-80" [percent]="65" [space]="-6" [radius]="40" [outerStrokeWidth]="6" [innerStrokeWidth]="6" [outerStrokeColor]="'#c00100'" [innerStrokeColor]="'rgba(255, 180, 171, 0.25)'" [animation]="true" [showSubtitle]="false" [titleFontSize]="'26px'" [unitsFontSize]="'20px'" [titleColor]="'#c00100'" [unitsColor]="'#c00100'" [animationDuration]="300"></circle-progress>`
    }]
  }], () => [{ type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CircleProgressRedComponent, { className: "CircleProgressRedComponent", filePath: "src/app/components/charts/circle-progress-red.component.ts", lineNumber: 16 });
})();

// src/app/components/charts/circle-progress-yellow.component.ts
var CircleProgressYellowComponent = class _CircleProgressYellowComponent {
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new Event("resize"));
      this.cdr.detectChanges();
    }, 300);
  }
  static {
    this.\u0275fac = function CircleProgressYellowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CircleProgressYellowComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CircleProgressYellowComponent, selectors: [["app-circle-progress-yellow"]], features: [\u0275\u0275ProvidersFeature([
      {
        provide: CircleProgressOptions
      }
    ])], decls: 1, vars: 14, consts: [[1, "avatar", "avatar-80", 3, "percent", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "showSubtitle", "titleFontSize", "unitsFontSize", "titleColor", "unitsColor", "animationDuration"]], template: function CircleProgressYellowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "circle-progress", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("percent", 65)("space", -6)("radius", 40)("outerStrokeWidth", 6)("innerStrokeWidth", 6)("outerStrokeColor", "#964900")("innerStrokeColor", "rgba(241, 157, 0, 0.15)")("animation", true)("showSubtitle", false)("titleFontSize", "26px")("unitsFontSize", "20px")("titleColor", "#964900")("unitsColor", "#964900")("animationDuration", 300);
      }
    }, dependencies: [NgCircleProgressModule, CircleProgressComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircleProgressYellowComponent, [{
    type: Component,
    args: [{
      selector: "app-circle-progress-yellow",
      standalone: true,
      imports: [NgCircleProgressModule],
      providers: [
        {
          provide: CircleProgressOptions
        }
      ],
      template: `<circle-progress class="avatar avatar-80" [percent]="65" [space]="-6" [radius]="40" [outerStrokeWidth]="6" [innerStrokeWidth]="6" [outerStrokeColor]="'#964900'" [innerStrokeColor]="'rgba(241, 157, 0, 0.15)'" [animation]="true" [showSubtitle]="false" [titleFontSize]="'26px'" [unitsFontSize]="'20px'" [titleColor]="'#964900'" [unitsColor]="'#964900'" [animationDuration]="300"></circle-progress>`
    }]
  }], () => [{ type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CircleProgressYellowComponent, { className: "CircleProgressYellowComponent", filePath: "src/app/components/charts/circle-progress-yellow.component.ts", lineNumber: 16 });
})();

// src/app/components/charts/circle-progress-green.component.ts
var CircleProgressGreenComponent = class _CircleProgressGreenComponent {
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event("scroll"));
      window.dispatchEvent(new Event("resize"));
      this.cdr.detectChanges();
    }, 300);
  }
  static {
    this.\u0275fac = function CircleProgressGreenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CircleProgressGreenComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CircleProgressGreenComponent, selectors: [["app-circle-progress-green"]], features: [\u0275\u0275ProvidersFeature([
      {
        provide: CircleProgressOptions
      }
    ])], decls: 1, vars: 14, consts: [[1, "avatar", "avatar-80", 3, "percent", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "showSubtitle", "titleFontSize", "unitsFontSize", "titleColor", "unitsColor", "animationDuration"]], template: function CircleProgressGreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "circle-progress", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("percent", 65)("space", -6)("radius", 40)("outerStrokeWidth", 6)("innerStrokeWidth", 6)("outerStrokeColor", "#026e00")("innerStrokeColor", "rgba(8,160,70, 0.15)")("animation", true)("showSubtitle", false)("titleFontSize", "26px")("unitsFontSize", "20px")("titleColor", "#026e00")("unitsColor", "#026e00")("animationDuration", 300);
      }
    }, dependencies: [NgCircleProgressModule, CircleProgressComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircleProgressGreenComponent, [{
    type: Component,
    args: [{
      selector: "app-circle-progress-green",
      standalone: true,
      imports: [NgCircleProgressModule],
      providers: [
        {
          provide: CircleProgressOptions
        }
      ],
      template: `<circle-progress class="avatar avatar-80" [percent]="65" [space]="-6" [radius]="40" [outerStrokeWidth]="6" [innerStrokeWidth]="6" [outerStrokeColor]="'#026e00'" [innerStrokeColor]="'rgba(8,160,70, 0.15)'" [animation]="true" [showSubtitle]="false" [titleFontSize]="'26px'" [unitsFontSize]="'20px'" [titleColor]="'#026e00'" [unitsColor]="'#026e00'" [animationDuration]="300"></circle-progress>`
    }]
  }], () => [{ type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CircleProgressGreenComponent, { className: "CircleProgressGreenComponent", filePath: "src/app/components/charts/circle-progress-green.component.ts", lineNumber: 16 });
})();

// src/app/components/charts/heatmap-chart.component.ts
var _forTrack0 = ($index, $item) => $item.day;
function HeatmapChartComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hour_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", hour_r1, " ");
  }
}
function HeatmapChartComponent_For_9_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activity_r2 = ctx.$implicit;
    const $index_r3 = ctx.$index;
    const dayData_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r4.getColorStyle(activity_r2));
    \u0275\u0275property("matTooltip", \u0275\u0275interpolate(dayData_r4.day + ", " + ctx_r4.hourLabels[$index_r3] + ": " + activity_r2 + "k Events"));
  }
}
function HeatmapChartComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "p", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(5, HeatmapChartComponent_For_9_For_6_Template, 2, 4, "div", 10, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dayData_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dayData_r4.day);
    \u0275\u0275advance();
    \u0275\u0275repeater(dayData_r4.data);
  }
}
Chart.register(...registerables);
var HeatmapChartComponent = class _HeatmapChartComponent {
  constructor() {
    this.MAX_ACTIVITY = 100;
    this.BASE_RGB = "43, 124, 255";
    this.weeklyHourlyActivity = [
      { day: "Mon", data: [50, 65, 75, 80, 85, 90, 88, 85, 80, 70] },
      { day: "Tue", data: [55, 70, 80, 85, 90, 95, 92, 88, 83, 72] },
      { day: "Wed", data: [52, 68, 78, 83, 88, 93, 91, 86, 81, 70] },
      { day: "Thu", data: [54, 69, 79, 84, 89, 94, 90, 87, 82, 71] },
      { day: "Fri", data: [60, 75, 85, 90, 85, 78, 70, 65, 55, 40] },
      { day: "Sat", data: [25, 30, 35, 40, 42, 40, 38, 35, 30, 25] },
      { day: "Sun", data: [20, 24, 28, 32, 35, 34, 31, 28, 24, 20] }
    ];
    this.hourLabels = Array.from({ length: 10 }, (_, i) => String(i + 8).padStart(2, "0") + ":00");
  }
  getColorStyle(value) {
    const clampedValue = Math.min(Math.max(value, 0), this.MAX_ACTIVITY);
    const minOpacity = 0.1;
    const maxOpacity = 1;
    let opacity = minOpacity + clampedValue / this.MAX_ACTIVITY * (maxOpacity - minOpacity);
    return `background-color: rgba(${this.BASE_RGB}, ${opacity.toFixed(2)})`;
  }
  static {
    this.\u0275fac = function HeatmapChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeatmapChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeatmapChartComponent, selectors: [["app-heatmap-chart"]], features: [\u0275\u0275ProvidersFeature([])], decls: 18, vars: 0, consts: [["id", "heatmapContainer", 1, "mb-3"], [1, "row", "gx-0", "flex-nowrap"], [1, "col", "heatmap-cell-head"], [1, "h-100", "w-100"], [1, "small"], [1, "col", "heatmap-cell-head-data"], [1, "row", "gx-3", "align-items-center", "mb-3"], [1, "col-auto"], [1, "text-secondary", "small"], [1, "col", "legend-gradient"], [1, "col", "heatmap-cell-data"], [1, "h-100", "w-100", 3, "matTooltip"]], template: function HeatmapChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        \u0275\u0275text(5, "Hour");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(6, HeatmapChartComponent_For_7_Template, 3, 1, "div", 5, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(8, HeatmapChartComponent_For_9_Template, 7, 1, "div", 1, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "p", 8);
        \u0275\u0275text(13, "Low (0k)");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(14, "div", 9);
        \u0275\u0275elementStart(15, "div", 7)(16, "p", 8);
        \u0275\u0275text(17, "High (100k)");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.hourLabels);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.weeklyHourlyActivity);
      }
    }, dependencies: [MatTooltipModule, MatTooltip], styles: ["\n\n.heatmap-cell-head[_ngcontent-%COMP%] {\n  border-right: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  line-height: 26px;\n  height: 26px;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 14px;\n  color: #666666;\n  opacity: 0.85;\n}\n.heatmap-cell-head-data[_ngcontent-%COMP%] {\n  border-right: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  line-height: 26px;\n  height: 26px;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 12px;\n  color: #666666;\n  opacity: 0.85;\n}\n.heatmap-cell-data[_ngcontent-%COMP%] {\n  border-right: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  line-height: 26px;\n  height: 26px;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 12px;\n}\n.legend-gradient[_ngcontent-%COMP%] {\n  height: 1rem;\n  flex-grow: 1;\n  border-radius: 0.15rem;\n  background:\n    linear-gradient(\n      to right,\n      rgba(43, 124, 255, 0.1),\n      rgba(43, 124, 255, 1.0));\n}\n@media screen and (max-width: 991px) {\n  .heatmap-cell-head-data[_ngcontent-%COMP%] {\n    line-height: 20px;\n    height: 46px;\n  }\n  .heatmap-cell-head-data[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    writing-mode: sideways-lr;\n    text-orientation: mixed;\n  }\n}\n/*# sourceMappingURL=heatmap-chart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeatmapChartComponent, [{
    type: Component,
    args: [{ selector: "app-heatmap-chart", standalone: true, imports: [MatTooltipModule], providers: [], template: `
        <div id="heatmapContainer" class="mb-3">
            <div class="row gx-0 flex-nowrap">
                <div class="col heatmap-cell-head">
                    <div class="h-100 w-100">
                        <p class="small">Hour</p>
                    </div>
                </div>
                @for (hour of hourLabels; track hour) {
                <div class="col heatmap-cell-head-data">
                    <div class="h-100 w-100">
                        {{ hour }}
                    </div>
                </div>
                }
            </div>

            @for (dayData of weeklyHourlyActivity; track dayData.day) {
            <div class="row gx-0 flex-nowrap">
                <div class="col heatmap-cell-head">
                    <div class="h-100 w-100">
                        <p class="small">{{ dayData.day }}</p>
                    </div>
                </div>

                @for (activity of dayData.data; track $index) {
                <div class="col heatmap-cell-data">
                    <div class="h-100 w-100" matTooltip="{{ dayData.day + ', ' + hourLabels[$index] + ': ' + activity + 'k Events' }}" [style]="getColorStyle(activity)">
                        <!-- <p class="small text-white">{{ activity }}</p> -->
                    </div>
                </div>
                }
            </div>
            }
        </div>

        <div class="row gx-3 align-items-center mb-3">
            <div class="col-auto"><p class="text-secondary small">Low (0k)</p></div>
            <div class="col legend-gradient"></div>
            <div class="col-auto"><p class="text-secondary small">High (100k)</p></div>
        </div>
    `, styles: ["/* angular:styles/component:css;b469bf3c4888d289ac67b490c8b4817ee3a82d6c7e2ce6c9b46a7459c474bbc6;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/components/charts/heatmap-chart.component.ts */\n.heatmap-cell-head {\n  border-right: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  line-height: 26px;\n  height: 26px;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 14px;\n  color: #666666;\n  opacity: 0.85;\n}\n.heatmap-cell-head-data {\n  border-right: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  line-height: 26px;\n  height: 26px;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 12px;\n  color: #666666;\n  opacity: 0.85;\n}\n.heatmap-cell-data {\n  border-right: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  line-height: 26px;\n  height: 26px;\n  vertical-align: middle;\n  text-align: center;\n  font-size: 12px;\n}\n.legend-gradient {\n  height: 1rem;\n  flex-grow: 1;\n  border-radius: 0.15rem;\n  background:\n    linear-gradient(\n      to right,\n      rgba(43, 124, 255, 0.1),\n      rgba(43, 124, 255, 1.0));\n}\n@media screen and (max-width: 991px) {\n  .heatmap-cell-head-data {\n    line-height: 20px;\n    height: 46px;\n  }\n  .heatmap-cell-head-data > div {\n    writing-mode: sideways-lr;\n    text-orientation: mixed;\n  }\n}\n/*# sourceMappingURL=heatmap-chart.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeatmapChartComponent, { className: "HeatmapChartComponent", filePath: "src/app/components/charts/heatmap-chart.component.ts", lineNumber: 110 });
})();

// src/app/components/charts/area-green-chartjs-200.component.ts
var _c0 = ["chartCanvas"];
Chart.register(...registerables);
var AreaGreenChartjs200Component = class _AreaGreenChartjs200Component {
  constructor() {
    this.intervalId = null;
  }
  ngAfterViewInit() {
    this.green200chart();
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
  green200chart() {
    const areachartgreen200 = this.chartCanvas.nativeElement;
    const ctxgreen200 = areachartgreen200.getContext("2d");
    if (ctxgreen200) {
      this.mygreen200Chart = new Chart(areachartgreen200, {
        type: "bar",
        data: {
          labels: ["10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
          datasets: [
            {
              label: "# of Votes",
              data: this.generateRandomData(),
              radius: 0,
              backgroundColor: "rgba(134, 234, 46, 0.5)",
              borderColor: "rgba(134, 234, 46, 1)",
              borderWidth: 2,
              borderRadius: 3,
              fill: true,
              tension: 0.45
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
              display: true,
              beginAtZero: true,
              grid: {
                display: false
              }
            },
            x: {
              display: true,
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
    if (this.mygreen200Chart) {
      this.mygreen200Chart.data.datasets.forEach((dataset) => {
        dataset.data = this.generateRandomData();
      });
      this.mygreen200Chart.update();
    }
  }
  ngOnDestroy() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  static {
    this.\u0275fac = function AreaGreenChartjs200Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AreaGreenChartjs200Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AreaGreenChartjs200Component, selectors: [["app-area-green-chartjs-200"]], viewQuery: function AreaGreenChartjs200Component_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvas = _t.first);
      }
    }, features: [\u0275\u0275ProvidersFeature([])], decls: 2, vars: 0, consts: [["chartCanvas", ""]], template: function AreaGreenChartjs200Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", null, 0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaGreenChartjs200Component, [{
    type: Component,
    args: [{
      selector: "app-area-green-chartjs-200",
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AreaGreenChartjs200Component, { className: "AreaGreenChartjs200Component", filePath: "src/app/components/charts/area-green-chartjs-200.component.ts", lineNumber: 13 });
})();

// src/app/components/charts/area-red-chartjs-200.component.ts
var _c02 = ["chartCanvas"];
Chart.register(...registerables);
var AreaRedChartjs200Component = class _AreaRedChartjs200Component {
  constructor() {
    this.intervalId = null;
  }
  ngAfterViewInit() {
    this.red200chart();
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
  red200chart() {
    const areachartred200 = this.chartCanvas.nativeElement;
    const ctxred200 = areachartred200.getContext("2d");
    if (ctxred200) {
      this.myred200Chart = new Chart(areachartred200, {
        type: "bar",
        data: {
          labels: ["10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
          datasets: [
            {
              label: "# of Votes",
              data: this.generateRandomData(),
              radius: 0,
              backgroundColor: "rgba(43, 124, 255, 0.75)",
              borderColor: "rgba(43, 124, 255, 1)",
              borderWidth: 2,
              borderRadius: 3,
              fill: true,
              tension: 0.45
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
              display: true,
              beginAtZero: true,
              grid: {
                display: false
              }
            },
            x: {
              display: true,
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
    if (this.myred200Chart) {
      this.myred200Chart.data.datasets.forEach((dataset) => {
        dataset.data = this.generateRandomData();
      });
      this.myred200Chart.update();
    }
  }
  ngOnDestroy() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  static {
    this.\u0275fac = function AreaRedChartjs200Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AreaRedChartjs200Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AreaRedChartjs200Component, selectors: [["app-area-red-chartjs-200"]], viewQuery: function AreaRedChartjs200Component_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvas = _t.first);
      }
    }, features: [\u0275\u0275ProvidersFeature([])], decls: 2, vars: 0, consts: [["chartCanvas", ""]], template: function AreaRedChartjs200Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", null, 0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AreaRedChartjs200Component, [{
    type: Component,
    args: [{
      selector: "app-area-red-chartjs-200",
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AreaRedChartjs200Component, { className: "AreaRedChartjs200Component", filePath: "src/app/components/charts/area-red-chartjs-200.component.ts", lineNumber: 13 });
})();

// src/app/pages/app/dashboard/dashboard.component.ts
function DashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "mat-button-toggle-group", 104);
    \u0275\u0275listener("change", function DashboardComponent_Conditional_8_Template_mat_button_toggle_group_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode.set($event.value));
    });
    \u0275\u0275elementStart(2, "mat-button-toggle", 105);
    \u0275\u0275text(3, "Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-button-toggle", 106);
    \u0275\u0275text(5, "Week");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-button-toggle", 107);
    \u0275\u0275text(7, "Month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 108);
    \u0275\u0275element(9, "app-employee-select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 109);
    \u0275\u0275element(11, "app-page-right");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.viewMode());
  }
}
function DashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 8);
    \u0275\u0275text(1, "filter_alt_off");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 8);
    \u0275\u0275text(1, "filter_alt");
    \u0275\u0275elementEnd();
  }
}
register();
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.filterOn = true;
    this.currentWidth = signal(0, ...ngDevMode ? [{ debugName: "currentWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.viewMode = signal("day", ...ngDevMode ? [{ debugName: "viewMode" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  // width check
  onResize(event) {
    this.checkWidthAndSetFilter();
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.checkWidthAndSetFilter();
    const map = new jsVectorMap({
      selector: "#jsvectormap",
      regionStyle: {
        initial: {
          fill: "rgba(0, 73, 232, 0.15)",
          stroke: "rgba(0, 73, 232, 0.4)",
          strokeWidth: 1
        }
      },
      visualizeData: {
        scale: ["#f3faff", "#0049e8"],
        values: {
          AF: 16.63,
          AL: 11.58,
          DZ: 158.97,
          AO: 85.81,
          AG: 1.1,
          AR: 351.02,
          AM: 8.83,
          AU: 1219.72,
          AT: 366.26,
          AZ: 52.17,
          BS: 7.54,
          BH: 21.73,
          BD: 105.4,
          BB: 3.96,
          BY: 52.89,
          BE: 461.33,
          BZ: 1.43,
          BJ: 6.49,
          BT: 1.4,
          BO: 19.18,
          BA: 16.2,
          BW: 12.5,
          BR: 2023.53,
          BN: 11.96,
          BG: 44.84,
          BF: 8.67,
          BI: 1.47,
          KH: 11.36,
          CM: 21.88,
          CA: 1563.66,
          CV: 1.57,
          CF: 2.11,
          TD: 7.59,
          CL: 199.18,
          CN: 5745.13,
          CO: 283.11,
          KM: 0.56,
          CD: 12.6,
          CG: 11.88,
          CR: 35.02,
          CI: 22.38,
          HR: 59.92,
          CY: 22.75,
          CZ: 195.23,
          DK: 304.56,
          DJ: 1.14,
          DM: 0.38,
          DO: 50.87,
          EC: 61.49,
          EG: 216.83,
          SV: 21.8,
          GQ: 14.55,
          ER: 2.25,
          EE: 19.22,
          ET: 30.94,
          FJ: 3.15,
          FI: 231.98,
          FR: 2555.44,
          GA: 12.56,
          GM: 1.04,
          GE: 11.23,
          DE: 3305.9,
          GH: 18.06,
          GR: 305.01,
          GD: 0.65,
          GT: 40.77,
          GN: 4.34,
          GW: 0.83,
          GY: 2.2,
          HT: 6.5,
          HN: 15.34,
          HK: 226.49,
          HU: 132.28,
          IS: 12.77,
          IN: 1430.02,
          ID: 695.06,
          IR: 337.9,
          IQ: 84.14,
          IE: 204.14,
          IL: 201.25,
          IT: 2036.69,
          JM: 13.74,
          JP: 5390.9,
          JO: 27.13,
          KZ: 129.76,
          KE: 32.42,
          KI: 0.15,
          KR: 986.26,
          KW: 117.32,
          KG: 4.44,
          LA: 6.34,
          LV: 23.39,
          LB: 39.15,
          LS: 1.8,
          LR: 0.98,
          LY: 77.91,
          LT: 35.73,
          LU: 52.43,
          MK: 9.58,
          MG: 8.33,
          MW: 5.04,
          MY: 218.95,
          MV: 1.43,
          ML: 9.08,
          MT: 7.8,
          MR: 3.49,
          MU: 9.43,
          MX: 1004.04,
          MD: 5.36,
          MN: 5.81,
          ME: 3.88,
          MA: 91.7,
          MZ: 10.21,
          MM: 35.65,
          NA: 11.45,
          NP: 15.11,
          NL: 770.31,
          NZ: 138,
          NI: 6.38,
          NE: 5.6,
          NG: 206.66,
          NO: 413.51,
          OM: 53.78,
          PK: 174.79,
          PA: 27.2,
          PG: 8.81,
          PY: 17.17,
          PE: 153.55,
          PH: 189.06,
          PL: 438.88,
          PT: 223.7,
          QA: 126.52,
          RO: 158.39,
          RU: 1476.91,
          RW: 5.69,
          WS: 0.55,
          ST: 0.19,
          SA: 434.44,
          SN: 12.66,
          RS: 38.92,
          SC: 0.92,
          SL: 1.9,
          SG: 217.38,
          SK: 86.26,
          SI: 46.44,
          SB: 0.67,
          ZA: 354.41,
          ES: 1374.78,
          LK: 48.24,
          KN: 0.56,
          LC: 1,
          VC: 0.58,
          SD: 65.93,
          SR: 3.3,
          SZ: 3.17,
          SE: 444.59,
          CH: 422.44,
          SY: 59.63,
          TW: 426.98,
          TJ: 5.58,
          TZ: 22.43,
          TH: 312.61,
          TL: 0.62,
          TG: 3.07,
          TO: 0.3,
          TT: 21.2,
          TN: 43.86,
          TR: 729.05,
          TM: 0,
          UG: 17.12,
          UA: 136.56,
          AE: 239.65,
          GB: 2258.57,
          US: 1462.18,
          UY: 40.71,
          UZ: 37.72,
          VU: 0.72,
          VE: 285.21,
          VN: 101.99,
          YE: 30.02,
          ZM: 15.69,
          ZW: 5.57
        }
      },
      map: "world"
    });
  }
  toggleFilter() {
    this.filterOn = !this.filterOn;
  }
  checkWidthAndSetFilter() {
    const width = window.innerWidth;
    this.currentWidth.set(width);
    const shouldBeOff = width < 992;
    if (this.filterOn === shouldBeOff) {
      this.filterOn = !this.filterOn;
    }
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], hostBindings: function DashboardComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function DashboardComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 507, vars: 2, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1", "order-1", "order-lg-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "col-auto", "order-2", "order-lg-5", "mb-3", "mb-xl-0"], ["matIconButton", "", 3, "click"], [1, "material-icons-outlined"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-6", "col-md-6", "col-lg-3"], [1, "theme-blue", "mb-3", "mb-lg-4"], [1, "w-100"], [1, "row", "gx-3", "align-items-center", "mb-3"], [1, "col-auto"], [1, "avatar", "avatar-30", "text-theme", "rounded"], [1, "col"], [1, "mb-0"], [1, "fw-medium", "mb-1"], [1, "small", "text-secondary"], [1, "text-theme", "theme-green"], [1, "avatar", "avatar-60", "rounded-circle"], [1, "theme-green", "mb-3", "mb-lg-4"], [1, "mb-3", "mb-lg-4", "theme-orange"], [1, "theme-red", "mb-3", "mb-lg-4"], [1, "col", "py-1"], [1, "col-auto", "d-none", "d-md-block"], [1, "mb-3", "mb-lg-4"], [1, "col-auto", "mb-3", "mb-lg-4"], [1, "avatar", "avatar-40", "text-theme", "rounded"], [1, "material-symbols-outlined"], [1, "col", "mb-3", "mb-lg-4"], [1, "pb-0"], [1, "height-200", "d-block", "mb-3", "mb-lg-4"], [1, "col-6", "col-lg-3", "col-xl-2", "mb-3"], [1, "text-secondary"], [1, "avatar", "avatar-10", "rounded", "bg-theme", "theme-blue", "align-middle"], [1, "avatar", "avatar-10", "rounded", "bg-theme", "theme-sky", "align-middle"], [1, "avatar", "avatar-10", "rounded", "bg-light-theme", "theme-chartreuse", "align-middle"], [1, "avatar", "avatar-10", "rounded", "align-middle", "bg-theme", "theme-red"], [1, "col-12", "col-xl-6"], [1, "height-250", "w-100", "d-block", "mb-3", "mb-lg-4"], ["slides-per-view", "auto", "space-between", "20px", "autoplay", "true", 1, "swiper"], [1, "width-150"], [1, "avatar", "avatar-50", "bg-light-theme", "rounded", "text-theme", "bg-light-theme", "theme-chartreuse"], [1, "text-secondary", "small", "mb-0"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-cyan"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-sky"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-red"], [1, "col-12", "col-md-12", "col-lg-6"], [1, "row", "gx-3", "align-items-center", "mb-4"], [1, "material-icons-outlined", "text-theme"], [1, "col-12", "col-md-6", "mb-3", "mb-md-0"], [1, "text-theme", "theme-green", "mb-1"], [1, "bi", "bi-arrow-up"], [1, "text-secondary", "small", "mb-4"], [1, "w-100", "height-170", "d-block"], [1, "col-12", "col-md-6", "px-0"], [1, "py-0"], ["matListItemIcon", "", 1, "avatar", "avatar-60", "rounded", "coverimg"], ["src", "assets/img/product1.jpg", "alt", ""], ["matListItemTitle", ""], ["matListItemLine", "", 1, "fw-bold"], [1, "text-secondary", "fw-normal"], ["matListItemLine", ""], [1, "material-icons-outlined", "text-sm", "text-theme", "theme-yellow"], ["src", "assets/img/product6.jpg", "alt", ""], ["src", "assets/img/product3.jpg", "alt", ""], ["matListItemLine", "", 1, "fw-bold", "text-theme"], [1, "row", "gx-3"], [1, "col-12", "col-md-6"], [1, "material-symbols-outlined", "text-theme", "text-lg"], [1, "text-secondary", "small"], [1, "col-12", "col-md-6", "col-lg-6", "col-xxl-3"], [1, "overflow-hidden", "mb-3", "mb-lg-4"], [1, "row", "mx-0"], [1, "col-6", "bg-theme", "text-white", "text-center", "py-4", "z-index-1", "theme-orange"], [1, "position-relative"], [1, "mb-2"], [1, "opacity-75", "small"], [1, "col-6", "position-relative"], [1, "coverimg", "position-absolute", "w-100", "h-100", "start-0", "top-0", "m-0"], ["src", "assets/img/product2.jpg", "alt", "", 1, "mw-100"], [1, "col-6", "pe-0", "bg-theme", "text-white", "half-circle-vertical", "text-center", "py-4", "z-index-1"], ["src", "assets/img/product1.jpg", "alt", "", 1, "mw-100"], [1, "text-center"], [1, "height-140", "w-100", "position-relative", "mb-3"], [1, "position-absolute", "bottom-0", "mx-auto", "start-0", "w-100", "mb-2"], [1, "text-secondary", "small", "mb-1"], ["id", "semidoughnutchart", 1, "height-140", "w-100", "position-relative", 2, "top", "-20px"], [1, "small", "text-secondary", "mb-1"], [1, "col-12", "col-md-12", "col-lg-12", "col-xxl-6"], ["id", "jsvectormap", 1, "w-100", "height-250"], [1, "row", "gx-3", "mb-3", "mb-lg-4"], [1, "rounded", "bg-theme", "text-white", "p-3"], [1, "col", "align-self-center"], [1, "row", "gx-3", "mb-3"], [1, "col-auto", "text-end"], ["mode", "determinate", "value", "70", 2, "--mat-progress-bar-active-indicator-height", "6px", "--mat-progress-bar-track-height", "6px"], [1, "float-end"], [1, "row", "gx-3", "theme-chartreuse"], [1, "rounded", "bg-light-theme", "p-3"], [1, "col-12", "col-sm-6", "col-lg-auto", "mb-3", "mb-xl-0", "order-3", "order-lg-2"], [3, "change", "value"], ["value", "day"], ["value", "week"], ["value", "month"], [1, "col-12", "col-sm-6", "col-lg-3", "c", "col-xxl-2", "mb-3", "mb-xl-0", "order-4", "order-lg-3"], [1, "col-12", "col-sm-6", "col-lg-4", "col-xl-3", "col-xxl-auto", "mb-3", "mb-xl-0", "order-5", "order-lg-4"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Look at a glance");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, DashboardComponent_Conditional_8_Template, 12, 1);
        \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_10_listener() {
          return ctx.toggleFilter();
        });
        \u0275\u0275conditionalCreate(11, DashboardComponent_Conditional_11_Template, 2, 0, "mat-icon", 8)(12, DashboardComponent_Conditional_12_Template, 2, 0, "mat-icon", 8);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(13, "div", 9)(14, "div", 10)(15, "div", 11)(16, "mat-card", 12)(17, "mat-card-header")(18, "div", 13)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "mat-icon", 8);
        \u0275\u0275text(23, "group");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 17)(25, "h3", 18);
        \u0275\u0275text(26, "Returning Users");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(27, "mat-card-content")(28, "div", 2)(29, "div", 17)(30, "h3", 19);
        \u0275\u0275text(31, "750");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p", 20);
        \u0275\u0275text(33, "5 / ");
        \u0275\u0275elementStart(34, "span", 21);
        \u0275\u0275text(35, "3.15%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 15);
        \u0275\u0275element(37, "app-circle-progress-blue", 22);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(38, "div", 11)(39, "mat-card", 23)(40, "mat-card-header")(41, "div", 13)(42, "div", 14)(43, "div", 15)(44, "div", 16)(45, "mat-icon", 8);
        \u0275\u0275text(46, "diversity_1");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "div", 17)(48, "h3", 4);
        \u0275\u0275text(49, "New Users");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(50, "mat-card-content")(51, "div", 2)(52, "div", 17)(53, "h2", 4);
        \u0275\u0275text(54, "320");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p", 20);
        \u0275\u0275text(56, "25 / ");
        \u0275\u0275elementStart(57, "span", 21);
        \u0275\u0275text(58, "3.15%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "div", 15);
        \u0275\u0275element(60, "app-circle-progress-green", 22);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(61, "div", 11)(62, "mat-card", 24)(63, "mat-card-header")(64, "div", 13)(65, "div", 14)(66, "div", 15)(67, "div", 16)(68, "mat-icon", 8);
        \u0275\u0275text(69, "group_remove");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "div", 17)(71, "h3", 18);
        \u0275\u0275text(72, "User lost");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(73, "mat-card-content")(74, "div", 2)(75, "div", 17)(76, "h2", 4);
        \u0275\u0275text(77, "27");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "p", 20);
        \u0275\u0275text(79, "2 / ");
        \u0275\u0275elementStart(80, "span", 21);
        \u0275\u0275text(81, "4.13%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(82, "div", 15);
        \u0275\u0275element(83, "app-circle-progress-yellow", 22);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(84, "div", 11)(85, "mat-card", 25)(86, "mat-card-header")(87, "div", 13)(88, "div", 14)(89, "div", 15)(90, "div", 16)(91, "mat-icon", 8);
        \u0275\u0275text(92, "group");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(93, "div", 17)(94, "h3", 18);
        \u0275\u0275text(95, "ARR");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(96, "mat-card-content")(97, "div", 2)(98, "div", 26)(99, "h2", 4);
        \u0275\u0275text(100, "$ 25.10 k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "p", 20);
        \u0275\u0275text(102, "530.00 / ");
        \u0275\u0275elementStart(103, "span", 21);
        \u0275\u0275text(104, "4.15%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(105, "div", 27);
        \u0275\u0275element(106, "app-circle-progress-red", 22);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(107, "mat-card", 28)(108, "mat-card-header")(109, "div", 13)(110, "div", 2)(111, "div", 29)(112, "div", 30)(113, "span", 31);
        \u0275\u0275text(114, " pace ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(115, "div", 32)(116, "h3");
        \u0275\u0275text(117, "Timeline");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(118, "mat-card-content", 33);
        \u0275\u0275element(119, "app-timeline-chart", 34);
        \u0275\u0275elementStart(120, "div", 2)(121, "div", 35)(122, "h3", 4);
        \u0275\u0275text(123, "42.50 ");
        \u0275\u0275elementStart(124, "small");
        \u0275\u0275text(125, "hrs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "p", 36);
        \u0275\u0275element(127, "span", 37);
        \u0275\u0275text(128, " Productive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "div", 35)(130, "h3", 4);
        \u0275\u0275text(131, "18.00 ");
        \u0275\u0275elementStart(132, "small");
        \u0275\u0275text(133, "hrs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "p", 36);
        \u0275\u0275element(135, "span", 38);
        \u0275\u0275text(136, " Learning");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "div", 35)(138, "h3", 4);
        \u0275\u0275text(139, "14.00 ");
        \u0275\u0275elementStart(140, "small");
        \u0275\u0275text(141, "hrs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "p", 36);
        \u0275\u0275element(143, "span", 39);
        \u0275\u0275text(144, " Unproductive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "div", 35)(146, "h3", 4);
        \u0275\u0275text(147, "6.50 ");
        \u0275\u0275elementStart(148, "small");
        \u0275\u0275text(149, "hrs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "p", 36);
        \u0275\u0275element(151, "span", 40);
        \u0275\u0275text(152, " Idle Time");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(153, "div", 10)(154, "div", 41)(155, "mat-card", 28)(156, "mat-card-header")(157, "div", 13)(158, "div", 2)(159, "div", 29)(160, "div", 30)(161, "mat-icon", 8);
        \u0275\u0275text(162, "bar_chart");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(163, "div", 32)(164, "h3");
        \u0275\u0275text(165, "Sales and Profit");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(166, "mat-card-content");
        \u0275\u0275element(167, "app-inventory-banner-chart", 42);
        \u0275\u0275elementStart(168, "swiper-container", 43)(169, "swiper-slide", 44)(170, "div", 2)(171, "div", 15)(172, "div", 45)(173, "mat-icon", 8);
        \u0275\u0275text(174, "area_chart");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(175, "div", 17)(176, "h3", 4);
        \u0275\u0275text(177, "$ 50.00k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "p", 46);
        \u0275\u0275text(179, "Revenue");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(180, "swiper-slide", 44)(181, "div", 2)(182, "div", 15)(183, "div", 47)(184, "mat-icon", 8);
        \u0275\u0275text(185, "wallet");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(186, "div", 17)(187, "h3", 4);
        \u0275\u0275text(188, "$ 12.50k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "p", 46);
        \u0275\u0275text(190, "Profit");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(191, "swiper-slide", 44)(192, "div", 2)(193, "div", 15)(194, "div", 48)(195, "mat-icon", 8);
        \u0275\u0275text(196, "paid");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(197, "div", 17)(198, "h3", 18);
        \u0275\u0275text(199, "$ 35.13k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "p", 46);
        \u0275\u0275text(201, "Expense");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(202, "div", 41)(203, "mat-card", 28)(204, "mat-card-header")(205, "div", 13)(206, "div", 2)(207, "div", 29)(208, "div", 30)(209, "mat-icon", 8);
        \u0275\u0275text(210, "language");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(211, "div", 32)(212, "h3");
        \u0275\u0275text(213, "Sales Activities");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(214, "mat-card-content");
        \u0275\u0275element(215, "app-heatmap-chart", 42);
        \u0275\u0275elementStart(216, "swiper-container", 43)(217, "swiper-slide", 44)(218, "div", 2)(219, "div", 15)(220, "div", 47)(221, "mat-icon", 8);
        \u0275\u0275text(222, "local_mall");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(223, "div", 17)(224, "h3", 4);
        \u0275\u0275text(225, "$ 50.00k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "p", 46);
        \u0275\u0275text(227, "Online Sale");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(228, "swiper-slide", 44)(229, "div", 2)(230, "div", 15)(231, "div", 49)(232, "mat-icon", 8);
        \u0275\u0275text(233, "storefront");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(234, "div", 17)(235, "h3", 4);
        \u0275\u0275text(236, "$ 12.50k");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "p", 46);
        \u0275\u0275text(238, "Offline Sale");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(239, "div", 10)(240, "div", 50)(241, "mat-card", 28)(242, "mat-card-content")(243, "div", 51)(244, "div", 15)(245, "mat-icon", 52);
        \u0275\u0275text(246, "school");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(247, "div", 17)(248, "h3", 4);
        \u0275\u0275text(249, "Trainings");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(250, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "div", 2)(252, "div", 53)(253, "h2", 4);
        \u0275\u0275text(254, "18.00 ");
        \u0275\u0275elementStart(255, "small");
        \u0275\u0275text(256, "hours");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(257, "p", 54);
        \u0275\u0275element(258, "i", 55);
        \u0275\u0275text(259, " 1.71 (0.73%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(260, "p", 56);
        \u0275\u0275text(261, "16.50 hours in Previous Months");
        \u0275\u0275elementEnd();
        \u0275\u0275element(262, "app-area-green-chartjs-200", 57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "div", 58)(264, "mat-list", 59)(265, "mat-list-item")(266, "div", 60);
        \u0275\u0275element(267, "img", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(268, "span", 62);
        \u0275\u0275text(269, "Agentic AI Startup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(270, "span", 63);
        \u0275\u0275text(271, "$ 152.00 ");
        \u0275\u0275elementStart(272, "s", 64);
        \u0275\u0275text(273, "$180.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(274, "span", 65)(275, "mat-icon", 66);
        \u0275\u0275text(276, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(277, "mat-icon", 66);
        \u0275\u0275text(278, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(279, "mat-icon", 66);
        \u0275\u0275text(280, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "mat-icon", 66);
        \u0275\u0275text(282, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(283, "mat-icon", 66);
        \u0275\u0275text(284, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(285, "span", 36);
        \u0275\u0275text(286, " 152 ratings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(287, "mat-list-item")(288, "div", 60);
        \u0275\u0275element(289, "img", 67);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(290, "span", 62);
        \u0275\u0275text(291, "Frontend Development with AI bots");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(292, "span", 63);
        \u0275\u0275text(293, "$ 80.00 ");
        \u0275\u0275elementStart(294, "s", 64);
        \u0275\u0275text(295, "$ 120.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(296, "span", 65)(297, "mat-icon", 66);
        \u0275\u0275text(298, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(299, "mat-icon", 66);
        \u0275\u0275text(300, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(301, "mat-icon", 66);
        \u0275\u0275text(302, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(303, "mat-icon", 66);
        \u0275\u0275text(304, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(305, "mat-icon", 66);
        \u0275\u0275text(306, "star_half");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(307, "span", 36);
        \u0275\u0275text(308, " 189 ratings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(309, "mat-list-item")(310, "div", 60);
        \u0275\u0275element(311, "img", 68);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(312, "span", 62);
        \u0275\u0275text(313, "Stay Creative with AI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(314, "span", 69);
        \u0275\u0275text(315, "FREE ");
        \u0275\u0275elementStart(316, "s", 64);
        \u0275\u0275text(317, "$ 144.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(318, "span", 65)(319, "mat-icon", 66);
        \u0275\u0275text(320, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(321, "mat-icon", 66);
        \u0275\u0275text(322, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(323, "mat-icon", 66);
        \u0275\u0275text(324, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(325, "mat-icon", 66);
        \u0275\u0275text(326, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(327, "mat-icon", 66);
        \u0275\u0275text(328, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(329, "span", 36);
        \u0275\u0275text(330, " 35 ratings");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(331, "div", 50)(332, "mat-card", 28)(333, "mat-card-content")(334, "div", 51)(335, "div", 15)(336, "mat-icon", 52);
        \u0275\u0275text(337, "timer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(338, "div", 17)(339, "h3", 4);
        \u0275\u0275text(340, "Break Timing");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(341, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(342, "div", 70)(343, "div", 53)(344, "h2", 4);
        \u0275\u0275text(345, "15.35 ");
        \u0275\u0275elementStart(346, "small");
        \u0275\u0275text(347, "hours");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(348, "p", 54);
        \u0275\u0275element(349, "i", 55);
        \u0275\u0275text(350, " 1.81 (0.43%)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(351, "p", 56);
        \u0275\u0275text(352, "14.10 hours in Previous Months");
        \u0275\u0275elementEnd();
        \u0275\u0275element(353, "app-area-red-chartjs-200", 57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(354, "div", 71)(355, "h2", 4);
        \u0275\u0275text(356, "1hr 10min");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(357, "p", 36);
        \u0275\u0275text(358, "Today's Break");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(359, "div", 51)(360, "div", 15)(361, "span", 72);
        \u0275\u0275text(362, " dinner_dining ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(363, "div", 17)(364, "h3", 4);
        \u0275\u0275text(365, "45 minutes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(366, "p", 4);
        \u0275\u0275text(367, "Lunch Break");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(368, "p", 73);
        \u0275\u0275text(369, "12:00 PM - 12:45 PM");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(370, "div", 51)(371, "div", 15)(372, "span", 72);
        \u0275\u0275text(373, " coffee ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(374, "div", 17)(375, "h3", 4);
        \u0275\u0275text(376, "25 minutes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(377, "p", 4);
        \u0275\u0275text(378, "Tea Break");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(379, "p", 73);
        \u0275\u0275text(380, "4:10 PM - 4:35 PM");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(381, "div", 74)(382, "mat-card", 75)(383, "div", 76)(384, "div", 77)(385, "div", 78)(386, "h1", 4);
        \u0275\u0275text(387, "6.15%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(388, "p", 79);
        \u0275\u0275text(389, "Interest Rate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(390, "p", 80);
        \u0275\u0275text(391, "Business Loan are at cheaper rate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(392, "div", 81)(393, "figure", 82);
        \u0275\u0275element(394, "img", 83);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(395, "mat-card", 75)(396, "div", 76)(397, "div", 84)(398, "div", 78)(399, "h1", 4);
        \u0275\u0275text(400, "15");
        \u0275\u0275elementStart(401, "small");
        \u0275\u0275text(402, "%");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(403, "p", 79);
        \u0275\u0275text(404, "Discount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(405, "p", 80);
        \u0275\u0275text(406, " Buy more,");
        \u0275\u0275element(407, "br");
        \u0275\u0275text(408, " Get more ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(409, "div", 81)(410, "figure", 82);
        \u0275\u0275element(411, "img", 85);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(412, "div", 74)(413, "mat-card", 28)(414, "mat-card-header")(415, "div", 2)(416, "div", 15)(417, "div", 30)(418, "mat-icon", 8);
        \u0275\u0275text(419, "receipt");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(420, "div", 17)(421, "h3");
        \u0275\u0275text(422, "Average Expenses");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(423, "mat-card-content", 86)(424, "div", 87)(425, "div", 88)(426, "p", 89);
        \u0275\u0275text(427, "Total Expense");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(428, "h3", 18);
        \u0275\u0275text(429, "5.4k ");
        \u0275\u0275elementStart(430, "small");
        \u0275\u0275text(431, "USD");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(432, "app-semi-doughnut-chartjs-180", 90);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(433, "p", 36);
        \u0275\u0275text(434, "You have spend most on raw materials and have to look at order cancellation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(435, "p", 91);
        \u0275\u0275text(436, "Last 3 months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(437, "div", 92)(438, "mat-card", 28)(439, "mat-card-header")(440, "div", 2)(441, "div", 15)(442, "div", 30)(443, "mat-icon", 8);
        \u0275\u0275text(444, "local_mall");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(445, "div", 17)(446, "h3", 4);
        \u0275\u0275text(447, "Global Country Performance");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(448, "mat-card-content")(449, "div", 2)(450, "div", 71);
        \u0275\u0275element(451, "div", 93);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(452, "div", 71)(453, "div", 94)(454, "div", 15)(455, "div", 95)(456, "p", 80);
        \u0275\u0275text(457, "Target");
        \u0275\u0275element(458, "br");
        \u0275\u0275text(459, "Income");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(460, "h3");
        \u0275\u0275text(461, "$2542");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(462, "div", 96)(463, "div", 97)(464, "div", 17)(465, "p", 89);
        \u0275\u0275text(466, "United States");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(467, "p");
        \u0275\u0275text(468, "New York");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(469, "div", 98)(470, "p", 89);
        \u0275\u0275text(471, "New Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(472, "p");
        \u0275\u0275text(473, "120 orders");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(474, "div", 79);
        \u0275\u0275element(475, "mat-progress-bar", 99);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(476, "p", 20);
        \u0275\u0275text(477, "Targeted Orders: ");
        \u0275\u0275elementStart(478, "span", 100);
        \u0275\u0275text(479, "260");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(480, "div", 101)(481, "div", 15)(482, "div", 102)(483, "p", 80);
        \u0275\u0275text(484, "Target");
        \u0275\u0275element(485, "br");
        \u0275\u0275text(486, "Income");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(487, "h3");
        \u0275\u0275text(488, "$2542");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(489, "div", 96)(490, "div", 97)(491, "div", 17)(492, "p", 89);
        \u0275\u0275text(493, "United States");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(494, "p");
        \u0275\u0275text(495, "New York");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(496, "div", 98)(497, "p", 89);
        \u0275\u0275text(498, "New Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(499, "p");
        \u0275\u0275text(500, "120 orders");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(501, "div", 79);
        \u0275\u0275element(502, "mat-progress-bar", 99);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(503, "p", 20);
        \u0275\u0275text(504, "Targeted Orders: ");
        \u0275\u0275elementStart(505, "span", 100);
        \u0275\u0275text(506, "260");
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.filterOn ? 8 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.filterOn ? 11 : 12);
      }
    }, dependencies: [
      CommonModule,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatCardHeader,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatButtonModule,
      MatIconButton,
      MatFormFieldModule,
      FormsModule,
      MatListModule,
      MatList,
      MatListItem,
      MatListItemIcon,
      MatListItemLine,
      MatListItemTitle,
      MatInputModule,
      MatSelectModule,
      MatChipsModule,
      MatProgressBarModule,
      MatProgressBar,
      SemiDoughnutChartjs180Component,
      CircleProgressRedComponent,
      CircleProgressYellowComponent,
      CircleProgressGreenComponent,
      CircleProgressBlueComponent,
      InventoryBannerChartComponent,
      PageRightComponent,
      TimelineChartComponent,
      HeatmapChartComponent,
      AreaGreenChartjs200Component,
      AreaRedChartjs200Component,
      EmployeeSelectComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatButtonToggleModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule,
      MatFormFieldModule,
      FormsModule,
      MatListModule,
      MatInputModule,
      MatSelectModule,
      MatChipsModule,
      MatProgressBarModule,
      SemiDoughnutChartjs180Component,
      CircleProgressRedComponent,
      CircleProgressYellowComponent,
      CircleProgressGreenComponent,
      CircleProgressBlueComponent,
      InventoryBannerChartComponent,
      PageRightComponent,
      TimelineChartComponent,
      HeatmapChartComponent,
      AreaGreenChartjs200Component,
      AreaRedChartjs200Component,
      EmployeeSelectComponent
    ], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1 order-1 order-lg-1">
                        <h3 class="mb-1">Dashboard</h3>
                        <p class="small opacity-50">Look at a glance</p>
                    </div>
                    @if (filterOn) {
                        <div class="col-12 col-sm-6 col-lg-auto mb-3 mb-xl-0 order-3 order-lg-2">
                            <mat-button-toggle-group [value]="viewMode()" (change)="viewMode.set($event.value)">
                                <mat-button-toggle value="day">Day</mat-button-toggle>
                                <mat-button-toggle value="week">Week</mat-button-toggle>
                                <mat-button-toggle value="month">Month</mat-button-toggle>
                            </mat-button-toggle-group>
                        </div>

                        <div class="col-12 col-sm-6 col-lg-3 c col-xxl-2 mb-3 mb-xl-0 order-4 order-lg-3">
                            <app-employee-select></app-employee-select>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-auto mb-3 mb-xl-0 order-5 order-lg-4">
                            <app-page-right></app-page-right>
                        </div>
                    }
                    <div class="col-auto order-2 order-lg-5 mb-3 mb-xl-0">
                        <button matIconButton (click)="toggleFilter()">
                            @if (filterOn) {
                                <mat-icon class="material-icons-outlined">filter_alt_off</mat-icon>
                            } @else {
                                <mat-icon class="material-icons-outlined">filter_alt</mat-icon>
                            }
                        </button>
                    </div>
                </div>
            </mat-card>
        </div>
        <!-- page content -->
        <div class="container fade-in">
            <!-- sales summary -->
            <div class="row gx-3 gx-lg-4">
                <!-- in stock -->
                <div class="col-6 col-md-6 col-lg-3">
                    <mat-card class="theme-blue mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <div class="avatar avatar-30 text-theme rounded">
                                            <mat-icon class="material-icons-outlined">group</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="mb-0">Returning Users</h3>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col">
                                    <h3 class="fw-medium mb-1">750</h3>
                                    <p class="small text-secondary">5 / <span class="text-theme theme-green">3.15%</span></p>
                                </div>
                                <div class="col-auto">
                                    <app-circle-progress-blue class="avatar avatar-60 rounded-circle"></app-circle-progress-blue>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- manufacture  -->
                <div class="col-6 col-md-6 col-lg-3">
                    <mat-card class="theme-green mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <div class="avatar avatar-30 text-theme rounded">
                                            <mat-icon class="material-icons-outlined">diversity_1</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="mb-1">New Users</h3>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col">
                                    <h2 class="mb-1">320</h2>
                                    <p class="small text-secondary">25 / <span class="text-theme theme-green">3.15%</span></p>
                                </div>
                                <div class="col-auto">
                                    <app-circle-progress-green class="avatar avatar-60 rounded-circle"></app-circle-progress-green>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- wishlist  -->
                <div class="col-6 col-md-6 col-lg-3">
                    <mat-card class="mb-3 mb-lg-4 theme-orange">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <div class="avatar avatar-30 text-theme rounded">
                                            <mat-icon class="material-icons-outlined">group_remove</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="mb-0">User lost</h3>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col">
                                    <h2 class="mb-1">27</h2>
                                    <p class="small text-secondary">2 / <span class="text-theme theme-green">4.13%</span></p>
                                </div>
                                <div class="col-auto">
                                    <app-circle-progress-yellow class="avatar avatar-60 rounded-circle"></app-circle-progress-yellow>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- referral  -->
                <div class="col-6 col-md-6 col-lg-3">
                    <mat-card class="theme-red mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <div class="avatar avatar-30 text-theme rounded">
                                            <mat-icon class="material-icons-outlined">group</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h3 class="mb-0">ARR</h3>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col py-1">
                                    <h2 class="mb-1">$ 25.10 k</h2>
                                    <p class="small text-secondary">530.00 / <span class="text-theme theme-green">4.15%</span></p>
                                </div>
                                <div class="col-auto d-none d-md-block">
                                    <app-circle-progress-red class="avatar avatar-60 rounded-circle"></app-circle-progress-red>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>

            <!-- timeline -->
            <mat-card class="mb-3 mb-lg-4">
                <mat-card-header>
                    <div class="w-100">
                        <div class="row gx-3 align-items-center">
                            <div class="col-auto mb-3 mb-lg-4">
                                <div class="avatar avatar-40 text-theme rounded">
                                    <span class="material-symbols-outlined"> pace </span>
                                </div>
                            </div>
                            <div class="col mb-3 mb-lg-4">
                                <h3>Timeline</h3>
                            </div>
                        </div>
                    </div>
                </mat-card-header>
                <mat-card-content class="pb-0">
                    <app-timeline-chart class="height-200 d-block mb-3 mb-lg-4"></app-timeline-chart>
                    <div class="row gx-3 align-items-center">
                        <div class="col-6 col-lg-3 col-xl-2 mb-3">
                            <h3 class="mb-1">42.50 <small>hrs</small></h3>
                            <p class="text-secondary"><span class="avatar avatar-10 rounded bg-theme theme-blue align-middle"></span> Productive</p>
                        </div>
                        <div class="col-6 col-lg-3 col-xl-2 mb-3">
                            <h3 class="mb-1">18.00 <small>hrs</small></h3>
                            <p class="text-secondary"><span class="avatar avatar-10 rounded bg-theme theme-sky align-middle"></span> Learning</p>
                        </div>
                        <div class="col-6 col-lg-3 col-xl-2 mb-3">
                            <h3 class="mb-1">14.00 <small>hrs</small></h3>
                            <p class="text-secondary"><span class="avatar avatar-10 rounded bg-light-theme theme-chartreuse align-middle"></span> Unproductive</p>
                        </div>
                        <div class="col-6 col-lg-3 col-xl-2 mb-3">
                            <h3 class="mb-1">6.50 <small>hrs</small></h3>
                            <p class="text-secondary"><span class="avatar avatar-10 rounded align-middle bg-theme theme-red"></span> Idle Time</p>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>

            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-xl-6">
                    <!-- sales chart -->
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center">
                                    <div class="col-auto mb-3 mb-lg-4">
                                        <div class="avatar avatar-40 text-theme rounded">
                                            <mat-icon class="material-icons-outlined">bar_chart</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col mb-3 mb-lg-4">
                                        <h3>Sales and Profit</h3>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content>
                            <app-inventory-banner-chart class="height-250 w-100 d-block mb-3 mb-lg-4"></app-inventory-banner-chart>
                            <!-- cost and profit  -->
                            <swiper-container slides-per-view="auto" space-between="20px" autoplay="true" class="swiper">
                                <swiper-slide class="width-150">
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 bg-light-theme rounded text-theme bg-light-theme theme-chartreuse">
                                                <mat-icon class="material-icons-outlined">area_chart</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h3 class="mb-1">$ 50.00k</h3>
                                            <p class="text-secondary small mb-0">Revenue</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="width-150">
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-cyan">
                                                <mat-icon class="material-icons-outlined">wallet</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h3 class="mb-1">$ 12.50k</h3>
                                            <p class="text-secondary small mb-0">Profit</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="width-150">
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-sky">
                                                <mat-icon class="material-icons-outlined">paid</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h3 class="mb-0">$ 35.13k</h3>
                                            <p class="text-secondary small mb-0">Expense</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper-container>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-xl-6">
                    <!-- sales mode chart -->
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center">
                                    <div class="col-auto mb-3 mb-lg-4">
                                        <div class="avatar avatar-40 text-theme rounded">
                                            <mat-icon class="material-icons-outlined">language</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col mb-3 mb-lg-4">
                                        <h3>Sales Activities</h3>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content>
                            <app-heatmap-chart class="height-250 w-100 d-block mb-3 mb-lg-4"></app-heatmap-chart>
                            <!-- online offline  -->
                            <swiper-container slides-per-view="auto" space-between="20px" autoplay="true" class="swiper">
                                <swiper-slide class="width-150">
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-cyan">
                                                <mat-icon class="material-icons-outlined">local_mall</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h3 class="mb-1">$ 50.00k</h3>
                                            <p class="text-secondary small mb-0">Online Sale</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="width-150">
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-red">
                                                <mat-icon class="material-icons-outlined">storefront</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h3 class="mb-1">$ 12.50k</h3>
                                            <p class="text-secondary small mb-0">Offline Sale</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper-container>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>

            <div class="row gx-3 gx-lg-4">
                <!-- training -->
                <div class="col-12 col-md-12 col-lg-6">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center mb-4">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined text-theme">school</mat-icon>
                                </div>
                                <div class="col">
                                    <h3 class="mb-1">Trainings</h3>
                                </div>
                                <div class="col-auto"></div>
                            </div>
                            <div class="row gx-3 align-items-center">
                                <div class="col-12 col-md-6 mb-3 mb-md-0">
                                    <h2 class="mb-1">18.00 <small>hours</small></h2>
                                    <p class="text-theme theme-green mb-1"><i class="bi bi-arrow-up"></i> 1.71 (0.73%)</p>
                                    <p class="text-secondary small mb-4">16.50 hours in Previous Months</p>
                                    <app-area-green-chartjs-200 class="w-100 height-170 d-block"></app-area-green-chartjs-200>
                                </div>
                                <div class="col-12 col-md-6 px-0">
                                    <mat-list class="py-0">
                                        <mat-list-item>
                                            <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                                <img src="assets/img/product1.jpg" alt="" />
                                            </div>
                                            <span matListItemTitle>Agentic AI Startup</span>
                                            <span matListItemLine class="fw-bold">$ 152.00 <s class="text-secondary fw-normal">$180.00</s></span>
                                            <span matListItemLine>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>

                                                <span class="text-secondary"> 152 ratings</span>
                                            </span>
                                        </mat-list-item>
                                        <mat-list-item>
                                            <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                                <img src="assets/img/product6.jpg" alt="" />
                                            </div>
                                            <span matListItemTitle>Frontend Development with AI bots</span>
                                            <span matListItemLine class="fw-bold">$ 80.00 <s class="text-secondary fw-normal">$ 120.00</s></span>
                                            <span matListItemLine>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star_half</mat-icon>

                                                <span class="text-secondary"> 189 ratings</span>
                                            </span>
                                        </mat-list-item>
                                        <mat-list-item>
                                            <div matListItemIcon class="avatar avatar-60 rounded coverimg">
                                                <img src="assets/img/product3.jpg" alt="" />
                                            </div>
                                            <span matListItemTitle>Stay Creative with AI</span>
                                            <span matListItemLine class="fw-bold text-theme">FREE <s class="text-secondary fw-normal">$ 144.00</s></span>
                                            <span matListItemLine>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                                <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>

                                                <span class="text-secondary"> 35 ratings</span>
                                            </span>
                                        </mat-list-item>
                                    </mat-list>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- break timing -->
                <div class="col-12 col-md-12 col-lg-6">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center mb-4">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined text-theme">timer</mat-icon>
                                </div>
                                <div class="col">
                                    <h3 class="mb-1">Break Timing</h3>
                                </div>
                                <div class="col-auto"></div>
                            </div>
                            <div class="row gx-3">
                                <div class="col-12 col-md-6 mb-3 mb-md-0">
                                    <h2 class="mb-1">15.35 <small>hours</small></h2>
                                    <p class="text-theme theme-green mb-1"><i class="bi bi-arrow-up"></i> 1.81 (0.43%)</p>
                                    <p class="text-secondary small mb-4">14.10 hours in Previous Months</p>
                                    <app-area-red-chartjs-200 class="w-100 height-170 d-block"></app-area-red-chartjs-200>
                                </div>
                                <div class="col-12 col-md-6">
                                    <h2 class="mb-1">1hr 10min</h2>
                                    <p class="text-secondary">Today's Break</p>

                                    <div class="row gx-3 align-items-center mb-4">
                                        <div class="col-auto">
                                            <span class="material-symbols-outlined text-theme text-lg"> dinner_dining </span>
                                        </div>
                                        <div class="col">
                                            <h3 class="mb-1">45 minutes</h3>
                                            <p class="mb-1">Lunch Break</p>
                                            <p class="text-secondary small">12:00 PM - 12:45 PM</p>
                                        </div>
                                    </div>

                                    <div class="row gx-3 align-items-center mb-4">
                                        <div class="col-auto">
                                            <span class="material-symbols-outlined text-theme text-lg"> coffee </span>
                                        </div>
                                        <div class="col">
                                            <h3 class="mb-1">25 minutes</h3>
                                            <p class="mb-1">Tea Break</p>
                                            <p class="text-secondary small">4:10 PM - 4:35 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <!-- offer -->
                <div class="col-12 col-md-6 col-lg-6 col-xxl-3">
                    <mat-card class="overflow-hidden mb-3 mb-lg-4">
                        <div class="row mx-0">
                            <div class="col-6 bg-theme text-white text-center py-4 z-index-1 theme-orange">
                                <div class="position-relative">
                                    <h1 class="mb-1">6.15%</h1>
                                    <p class="mb-2">Interest Rate</p>
                                    <p class="opacity-75 small">Business Loan are at cheaper rate</p>
                                </div>
                            </div>
                            <div class="col-6 position-relative">
                                <figure class="coverimg position-absolute w-100 h-100 start-0 top-0 m-0">
                                    <img src="assets/img/product2.jpg" class="mw-100" alt="" />
                                </figure>
                            </div>
                        </div>
                    </mat-card>
                    <mat-card class="overflow-hidden mb-3 mb-lg-4">
                        <div class="row mx-0">
                            <div class="col-6 pe-0 bg-theme text-white half-circle-vertical text-center py-4 z-index-1">
                                <div class="position-relative">
                                    <h1 class="mb-1">15<small>%</small></h1>
                                    <p class="mb-2">Discount</p>
                                    <p class="opacity-75 small">
                                        Buy more,<br />
                                        Get more
                                    </p>
                                </div>
                            </div>
                            <div class="col-6 position-relative">
                                <figure class="coverimg position-absolute w-100 h-100 start-0 top-0 m-0">
                                    <img src="assets/img/product1.jpg" class="mw-100" alt="" />
                                </figure>
                            </div>
                        </div>
                    </mat-card>
                </div>

                <!-- Average Expenses -->
                <div class="col-12 col-md-6 col-lg-6 col-xxl-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto">
                                    <div class="avatar avatar-40 text-theme rounded">
                                        <mat-icon class="material-icons-outlined">receipt</mat-icon>
                                    </div>
                                </div>
                                <div class="col">
                                    <h3>Average Expenses</h3>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content class="text-center">
                            <div class="height-140 w-100 position-relative mb-3">
                                <div class="position-absolute bottom-0 mx-auto start-0 w-100 mb-2">
                                    <p class="text-secondary small mb-1">Total Expense</p>
                                    <h3 class="mb-0">5.4k <small>USD</small></h3>
                                </div>
                                <app-semi-doughnut-chartjs-180 class="height-140 w-100 position-relative" id="semidoughnutchart" style="top:-20px"></app-semi-doughnut-chartjs-180>
                            </div>
                            <p class="text-secondary">You have spend most on raw materials and have to look at order cancellation</p>

                            <p class="small text-secondary mb-1">Last 3 months</p>
                        </mat-card-content>
                    </mat-card>
                </div>

                <!-- Top countries earning -->
                <div class="col-12 col-md-12 col-lg-12 col-xxl-6">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto">
                                    <div class="avatar avatar-40 text-theme rounded">
                                        <mat-icon class="material-icons-outlined">local_mall</mat-icon>
                                    </div>
                                </div>
                                <div class="col">
                                    <h3 class="mb-1">Global Country Performance</h3>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col-12 col-md-6">
                                    <div id="jsvectormap" class="w-100 height-250"></div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="row gx-3 mb-3 mb-lg-4">
                                        <div class="col-auto">
                                            <div class="rounded bg-theme text-white p-3">
                                                <p class="opacity-75 small">Target<br />Income</p>
                                                <h3>$2542</h3>
                                            </div>
                                        </div>
                                        <div class="col align-self-center">
                                            <div class="row gx-3 mb-3">
                                                <div class="col">
                                                    <p class="text-secondary small mb-1">United States</p>
                                                    <p>New York</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <p class="text-secondary small mb-1">New Sales</p>
                                                    <p>120 orders</p>
                                                </div>
                                            </div>
                                            <div class="mb-2">
                                                <mat-progress-bar mode="determinate" value="70" style="--mat-progress-bar-active-indicator-height:6px; --mat-progress-bar-track-height:6px"></mat-progress-bar>
                                            </div>
                                            <p class="small text-secondary">Targeted Orders: <span class="float-end">260</span></p>
                                        </div>
                                    </div>
                                    <div class="row gx-3 theme-chartreuse">
                                        <div class="col-auto">
                                            <div class="rounded bg-light-theme p-3">
                                                <p class="opacity-75 small">Target<br />Income</p>
                                                <h3>$2542</h3>
                                            </div>
                                        </div>
                                        <div class="col align-self-center">
                                            <div class="row gx-3 mb-3">
                                                <div class="col">
                                                    <p class="text-secondary small mb-1">United States</p>
                                                    <p>New York</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <p class="text-secondary small mb-1">New Sales</p>
                                                    <p>120 orders</p>
                                                </div>
                                            </div>
                                            <div class="mb-2">
                                                <mat-progress-bar mode="determinate" value="70" style="--mat-progress-bar-active-indicator-height:6px; --mat-progress-bar-track-height:6px"></mat-progress-bar>
                                            </div>
                                            <p class="small text-secondary">Targeted Orders: <span class="float-end">260</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, { onResize: [{
    type: HostListener,
    args: ["window:resize", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/pages/app/dashboard/dashboard.component.ts", lineNumber: 670 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=dashboard.component-DDJLXAZT.js.map
