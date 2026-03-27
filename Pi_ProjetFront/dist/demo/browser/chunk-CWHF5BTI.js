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

// src/app/components/charts/inventory-banner-chart.component.ts
var _c0 = ["chartCanvas"];
Chart.register(...registerables);
var InventoryBannerChartComponent = class _InventoryBannerChartComponent {
  ngAfterViewInit() {
    this.inventoryBannerChartchart();
  }
  /* chart  */
  inventoryBannerChartchart() {
    const areachartinventoryBannerChart = this.chartCanvas.nativeElement;
    const ctxinventoryBannerChart = areachartinventoryBannerChart.getContext("2d");
    if (ctxinventoryBannerChart) {
      this.myinventoryBannerChartChart = new Chart(areachartinventoryBannerChart, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
          datasets: [
            {
              label: "Expense",
              data: [2510, 2300, 2410, 2158, 2460, 2254, 1524, 2546, 2465],
              radius: 2,
              pointBackgroundColor: "#ffffff",
              backgroundColor: "rgba(43, 124, 255, 0.75)",
              borderColor: "rgba(43, 124, 255, 0.65)",
              borderWidth: 2,
              borderRadius: 15,
              fill: true,
              tension: 0
            },
            {
              label: "Profit",
              data: [3810, 2860, 3295, 2852, 3225, 3346, 2445, 3158, 3058],
              radius: 2,
              pointBackgroundColor: "#ffffff",
              backgroundColor: "rgba(36, 200, 254, 0.75)",
              borderColor: "rgba(36, 200, 254, 1)",
              borderWidth: 2,
              borderRadius: 15,
              fill: true,
              tension: 0
            },
            {
              label: "Revenue",
              data: [5e3, 4500, 4200, 5200, 4800, 4521, 3824, 5165, 5100],
              radius: 2,
              pointBackgroundColor: "#ffffff",
              backgroundColor: "rgba(195, 255, 105, 0.75)",
              borderColor: "rgba(154, 253, 68, 1)",
              borderWidth: 2,
              borderRadius: 15,
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
              display: true,
              beginAtZero: true
            },
            x: {
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
    this.\u0275fac = function InventoryBannerChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InventoryBannerChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryBannerChartComponent, selectors: [["app-inventory-banner-chart"]], viewQuery: function InventoryBannerChartComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvas = _t.first);
      }
    }, features: [\u0275\u0275ProvidersFeature([])], decls: 2, vars: 0, consts: [["chartCanvas", ""]], template: function InventoryBannerChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", null, 0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InventoryBannerChartComponent, [{
    type: Component,
    args: [{
      selector: "app-inventory-banner-chart",
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryBannerChartComponent, { className: "InventoryBannerChartComponent", filePath: "src/app/components/charts/inventory-banner-chart.component.ts", lineNumber: 13 });
})();

export {
  InventoryBannerChartComponent
};
//# sourceMappingURL=chunk-CWHF5BTI.js.map
