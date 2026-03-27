import {
  Chart,
  registerables
} from "./chunk-PZSKZJEJ.js";
import {
  Component,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/components/charts/semi-doughnut-chartjs-180.component.ts
var _c0 = ["chartCanvas"];
Chart.register(...registerables);
var SemiDoughnutChartjs180Component = class _SemiDoughnutChartjs180Component {
  ngAfterViewInit() {
    this.semidoughnut180chart();
  }
  /* chart  */
  semidoughnut180chart() {
    const areachartsemidoughnut180 = this.chartCanvas.nativeElement;
    const ctxsemidoughnut180 = areachartsemidoughnut180.getContext("2d");
    if (ctxsemidoughnut180) {
      this.mysemidoughnut180Chart = new Chart(areachartsemidoughnut180, {
        type: "doughnut",
        data: {
          labels: ["Food", "Transport", "Children", "Home", "Other"],
          datasets: [
            {
              label: "Expense categories",
              data: [40, 10, 15, 25, 10],
              backgroundColor: ["#fdc9c1ff", "#b6f7b5ff", "#b2f7f7ff", "#cac5faff", "#cae1f7ff"],
              borderColor: ["#ffac9fff", "#83e881ff", "#71e8e8ff", "#a198f6ff", "#9ac6f2ff"],
              borderWidth: 2,
              borderRadius: 10
            }
          ]
        },
        options: {
          circumference: 180,
          rotation: -90,
          responsive: true,
          cutout: 85,
          plugins: {
            legend: {
              display: false,
              position: "top"
            },
            title: {
              display: false,
              text: ""
            }
          }
        }
      });
    }
  }
  static {
    this.\u0275fac = function SemiDoughnutChartjs180Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SemiDoughnutChartjs180Component)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SemiDoughnutChartjs180Component, selectors: [["app-semi-doughnut-chartjs-180"]], viewQuery: function SemiDoughnutChartjs180Component_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvas = _t.first);
      }
    }, features: [\u0275\u0275ProvidersFeature([])], decls: 2, vars: 0, consts: [["chartCanvas", ""], [1, "width-200", "height-200", "d-inline-flex", "justify-content-center", "align-items-center", "mt--25", "position-relative"]], template: function SemiDoughnutChartjs180Component_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", 1, 0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SemiDoughnutChartjs180Component, [{
    type: Component,
    args: [{
      selector: "app-semi-doughnut-chartjs-180",
      standalone: true,
      imports: [],
      providers: [],
      template: `<canvas #chartCanvas class="width-200 height-200 d-inline-flex justify-content-center align-items-center mt--25 position-relative"></canvas>`
    }]
  }], null, { chartCanvas: [{
    type: ViewChild,
    args: ["chartCanvas"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SemiDoughnutChartjs180Component, { className: "SemiDoughnutChartjs180Component", filePath: "src/app/components/charts/semi-doughnut-chartjs-180.component.ts", lineNumber: 13 });
})();

// src/app/components/charts/timelinechart.component.ts
var _c02 = ["chartCanvas"];
Chart.register(...registerables);
var TimelineChartComponent = class _TimelineChartComponent {
  ngAfterViewInit() {
    this.inventoryBannerChartchart();
  }
  /* chart  */
  inventoryBannerChartchart() {
    const areachartinventoryBannerChart = this.chartCanvas.nativeElement;
    const ctxinventoryBannerChart = areachartinventoryBannerChart.getContext("2d");
    if (ctxinventoryBannerChart) {
      var gradientgreen1 = ctxinventoryBannerChart.createLinearGradient(0, 0, 0, 190);
      gradientgreen1.addColorStop(0, "rgba(71, 223, 132, 1)");
      gradientgreen1.addColorStop(1, "rgba(8, 160, 70, 0.1)");
      var gradientred1 = ctxinventoryBannerChart.createLinearGradient(0, 0, 0, 200);
      gradientred1.addColorStop(0, "rgba(255, 68, 68, 1)");
      gradientred1.addColorStop(1, "rgba(200, 0, 54, 0.0)");
      var gradientyellow1 = ctxinventoryBannerChart.createLinearGradient(0, 0, 0, 140);
      gradientyellow1.addColorStop(0, "rgba(129, 214, 218, 0.5)");
      gradientyellow1.addColorStop(1, "rgba(59, 174, 180, 0.0)");
      this.myinventoryBannerChartChart = new Chart(areachartinventoryBannerChart, {
        type: "bar",
        data: {
          labels: ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10", "8/10", "9/10"],
          datasets: [
            {
              label: "Productive",
              data: [6, 5, 4, 6, 5, 4.5, 5, 4, 3],
              radius: 2,
              backgroundColor: "rgba(43, 124, 255, 0.75)",
              borderColor: "transparent",
              borderWidth: 2,
              borderRadius: 5,
              fill: true,
              tension: 0
            },
            {
              label: "Learning",
              data: [1, 1.5, 2, 1, 2, 2, 2.2, 3, 3],
              radius: 2,
              backgroundColor: "rgba(36, 200, 254, 0.75)",
              borderColor: "transparent",
              borderWidth: 2,
              borderRadius: 5,
              fill: true,
              tension: 0
            },
            {
              label: "Unproductive",
              data: [1, 1.5, 2, 2, 1, 1.5, 1, 2, 2],
              radius: 2,
              backgroundColor: "rgba(195, 255, 105, 0.75)",
              borderColor: "transparent",
              borderWidth: 2,
              borderRadius: 5,
              fill: true,
              tension: 0
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 0
            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              stacked: true,
              display: true,
              grid: {
                display: false
              },
              beginAtZero: true
            },
            x: {
              stacked: true,
              ticks: {
                maxTicksLimit: 7
              },
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
  static {
    this.\u0275fac = function TimelineChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimelineChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelineChartComponent, selectors: [["app-timeline-chart"]], viewQuery: function TimelineChartComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvas = _t.first);
      }
    }, features: [\u0275\u0275ProvidersFeature([])], decls: 2, vars: 0, consts: [["chartCanvas", ""]], template: function TimelineChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", null, 0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineChartComponent, [{
    type: Component,
    args: [{
      selector: "app-timeline-chart",
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelineChartComponent, { className: "TimelineChartComponent", filePath: "src/app/components/charts/timelinechart.component.ts", lineNumber: 13 });
})();

export {
  SemiDoughnutChartjs180Component,
  TimelineChartComponent
};
//# sourceMappingURL=chunk-LC5NPUAL.js.map
