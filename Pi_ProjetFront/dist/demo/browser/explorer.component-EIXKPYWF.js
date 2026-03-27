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
import {
  MatPaginator,
  MatPaginatorModule,
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-W2JGJKKS.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-35BPSZ5W.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-WAVP7W2J.js";
import "./chunk-6LUZEZUF.js";
import "./chunk-O4BMA6W6.js";
import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-BPWI3AKS.js";
import {
  MatToolbarModule
} from "./chunk-SFUPPXOD.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-SP2SPZAY.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MWLO4FO4.js";
import {
  MatOption
} from "./chunk-D63GK34V.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatListModule,
  MatNavList
} from "./chunk-ALLV6QEF.js";
import "./chunk-CWBJY2AK.js";
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import {
  MatProgressBar,
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
  MatCardHeader,
  MatCardImage,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-ZLA4QS3A.js";
import {
  RouterLink
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
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  DOCUMENT,
  Inject,
  Renderer2,
  ViewChild,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/components/charts/circle-progress-blue-blank.component.ts
var CircleProgressBlueBlankComponent = class _CircleProgressBlueBlankComponent {
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
    this.\u0275fac = function CircleProgressBlueBlankComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CircleProgressBlueBlankComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CircleProgressBlueBlankComponent, selectors: [["app-circle-progress-blue-blank"]], features: [\u0275\u0275ProvidersFeature([
      {
        provide: CircleProgressOptions
      }
    ])], decls: 1, vars: 12, consts: [[1, "avatar", "avatar-60", 3, "percent", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "showSubtitle", "showTitle", "showUnits", "animationDuration"]], template: function CircleProgressBlueBlankComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "circle-progress", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("percent", 65)("space", -4)("radius", 30)("outerStrokeWidth", 4)("innerStrokeWidth", 4)("outerStrokeColor", "rgba(52, 61, 255, 1)")("innerStrokeColor", "rgba(52, 61, 255, 0.15)")("animation", true)("showSubtitle", false)("showTitle", false)("showUnits", false)("animationDuration", 300);
      }
    }, dependencies: [NgCircleProgressModule, CircleProgressComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircleProgressBlueBlankComponent, [{
    type: Component,
    args: [{
      selector: "app-circle-progress-blue-blank",
      standalone: true,
      imports: [NgCircleProgressModule],
      providers: [
        {
          provide: CircleProgressOptions
        }
      ],
      template: `<circle-progress class="avatar avatar-60" [percent]="65" [space]="-4" [radius]="30" [outerStrokeWidth]="4" [innerStrokeWidth]="4" [outerStrokeColor]="'rgba(52, 61, 255, 1)'" [innerStrokeColor]="'rgba(52, 61, 255, 0.15)'" [animation]="true" [showSubtitle]="false" [showTitle]="false" [showUnits]="false" [animationDuration]="300"></circle-progress>`
    }]
  }], () => [{ type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CircleProgressBlueBlankComponent, { className: "CircleProgressBlueBlankComponent", filePath: "src/app/components/charts/circle-progress-blue-blank.component.ts", lineNumber: 16 });
})();

// src/app/components/charts/explorer-banner-chart.component.ts
var _c0 = ["chartCanvas"];
Chart.register(...registerables);
var ExplorerBannerChartComponent = class _ExplorerBannerChartComponent {
  constructor() {
    this.intervalId = null;
  }
  ngAfterViewInit() {
    this.summarychart();
    this.intervalId = window.setInterval(() => {
      this.randomizeChart();
    }, 3e3);
  }
  /* chart  */
  randomScalingFactor() {
    return Math.round(Math.random() * 20);
  }
  generateRandomData() {
    return [this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor()];
  }
  summarychart() {
    const explorerBannerChart = this.chartCanvas.nativeElement;
    const ctxexplorerBanner = explorerBannerChart.getContext("2d");
    if (ctxexplorerBanner) {
      var gradientblue1 = ctxexplorerBanner.createLinearGradient(0, 0, 0, 140);
      gradientblue1.addColorStop(0, "rgba(1, 94, 194, 0.55)");
      gradientblue1.addColorStop(1, "rgba(1, 94, 193, 0)");
      var gradientred1 = ctxexplorerBanner.createLinearGradient(0, 0, 0, 145);
      gradientred1.addColorStop(0, "rgba(240, 61, 79, 0.25)");
      gradientred1.addColorStop(1, "rgba(255, 223, 220, 0)");
      var gradientgreen1 = ctxexplorerBanner.createLinearGradient(0, 0, 0, 140);
      gradientgreen1.addColorStop(0, "rgba(255, 193, 7, 0.5)");
      gradientgreen1.addColorStop(1, "rgba(255, 193, 7, 0)");
      this.myexplorerBannerChart = new Chart(explorerBannerChart, {
        type: "line",
        data: {
          labels: ["Jan-15", "Jan-30", "Feb-15", "Feb-30", "Mar-15", "Mar-30", "Apr-15", "Apr-30", "May-15"],
          datasets: [
            {
              label: "# of Votes",
              data: this.generateRandomData(),
              radius: 1,
              pointBackgroundColor: "#ffffff",
              backgroundColor: gradientgreen1,
              borderColor: "#ffc107",
              borderWidth: 2,
              fill: true,
              tension: 0.35
            },
            {
              label: "# of Votes",
              data: this.generateRandomData(),
              radius: 1,
              pointBackgroundColor: "#ffffff",
              backgroundColor: gradientred1,
              borderColor: "rgba(200, 0, 54, 0.65)",
              borderWidth: 2,
              fill: true,
              tension: 0.35
            },
            {
              label: "# of Votes",
              data: this.generateRandomData(),
              radius: 1,
              pointBackgroundColor: "#ffffff",
              backgroundColor: gradientblue1,
              borderColor: "rgba(0, 73, 232, 1)",
              borderWidth: 2,
              fill: true,
              tension: 0.35
            }
          ]
        },
        options: {
          layout: {
            padding: 0
          },
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: true
            }
          },
          scales: {
            y: {
              display: false,
              beginAtZero: true,
              grid: {
                display: false
              }
            },
            x: {
              display: false,
              beginAtZero: true,
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
    if (this.myexplorerBannerChart) {
      this.myexplorerBannerChart.data.datasets.forEach((dataset) => {
        dataset.data = this.generateRandomData();
      });
      this.myexplorerBannerChart.update();
    }
  }
  ngOnDestroy() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  static {
    this.\u0275fac = function ExplorerBannerChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExplorerBannerChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplorerBannerChartComponent, selectors: [["app-explorer-banner-chart"]], viewQuery: function ExplorerBannerChartComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvas = _t.first);
      }
    }, features: [\u0275\u0275ProvidersFeature([])], decls: 2, vars: 0, consts: [["chartCanvas", ""]], template: function ExplorerBannerChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", null, 0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorerBannerChartComponent, [{
    type: Component,
    args: [{
      selector: "app-explorer-banner-chart",
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplorerBannerChartComponent, { className: "ExplorerBannerChartComponent", filePath: "src/app/components/charts/explorer-banner-chart.component.ts", lineNumber: 13 });
})();

// src/app/pages/app/applications/explorer/editfile.component.ts
var EditFileDialogComponent = class _EditFileDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.fileForm = new FormGroup({
      // Editable fields
      fileName: new FormControl(this.data.fileName, Validators.required),
      shareStatus: new FormControl(this.data.shareStatus),
      // Read-only fields (set disabled: true on creation)
      uploadBy: new FormControl({ value: this.data.uploadBy, disabled: true }),
      fileSize: new FormControl({ value: this.data.fileSize, disabled: true }),
      dateModified: new FormControl({ value: this.data.dateModified, disabled: true }),
      modifiedBy: new FormControl({ value: this.data.modifiedBy, disabled: true }),
      // Include other required FileData properties
      fileImage: new FormControl(this.data.fileImage),
      dateCreated: new FormControl(this.data.dateCreated),
      time: new FormControl(this.data.time),
      action: new FormControl(this.data.action),
      isActive: new FormControl(this.data.isActive)
    });
    this.isDragging = signal(false, ...ngDevMode ? [{ debugName: "isDragging" }] : (
      /* istanbul ignore next */
      []
    ));
    this.images = signal([], ...ngDevMode ? [{ debugName: "images" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fileForm.patchValue(data);
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    if (this.fileForm.valid) {
      this.dialogRef.close(this.fileForm.value);
    }
  }
  onDragOver(event) {
    event.preventDefault();
    this.isDragging.set(true);
  }
  onDragLeave(event) {
    this.isDragging.set(false);
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragging.set(false);
    if (event.dataTransfer?.files) {
      this.processFiles(event.dataTransfer.files);
    }
  }
  onFileSelected(event) {
    const input = event.target;
    if (input.files) {
      this.processFiles(input.files);
    }
  }
  processFiles(files) {
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.images.update((imgs) => [...imgs, { name: file.name, src: e.target?.result }]);
      };
      reader.readAsDataURL(file);
    });
  }
  removeImage(imageToRemove) {
    this.images.update((imgs) => imgs.filter((img) => img.src !== imageToRemove.src));
  }
  saveChanges() {
    if (this.fileForm.valid) {
      this.dialogRef.close(this.fileForm.value);
    }
  }
  static {
    this.\u0275fac = function EditFileDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditFileDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditFileDialogComponent, selectors: [["app-edit-file-dialog"]], decls: 57, vars: 13, consts: [["mat-dialog-title", ""], [1, "pt-2", 3, "formGroup"], [1, "row", "gx-3"], [1, "col-12", "col-lg-4", "text-center", "mb-3", "mb-lg-4"], [1, "avatar", "avatar-200", "coverimg", "rounded", "mb-3", "mb-lg-4"], [1, "d-none", 3, "src", "alt"], [1, "text-secondary", "small", "mb-1"], [1, "badge"], [1, "col-12", "col-lg"], [1, "col-12", "col-md-6"], ["appearance", "outline", 1, "w-100"], ["matInput", "", "formControlName", "fileName"], ["formControlName", "shareStatus"], ["value", "shared"], ["value", "restricted"], ["value", "notshared"], ["matInput", "", "formControlName", "dateModified"], ["matInput", "", "formControlName", "modifiedBy"], ["matInput", "", "formControlName", "uploadBy"], ["matInput", "", "formControlName", "fileSize"], ["matButton", "filled", "color", "primary", 3, "click"], ["matButton", "", 1, "ms-auto", "theme-red", 3, "click"]], template: function EditFileDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h4", 0);
        \u0275\u0275text(1, "Edit File");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4);
        \u0275\u0275element(7, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, "File Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 7);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "div", 2)(16, "div", 9)(17, "mat-form-field", 10)(18, "mat-label");
        \u0275\u0275text(19, "File Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 9)(22, "mat-form-field", 10)(23, "mat-label");
        \u0275\u0275text(24, "Share Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-select", 12)(26, "mat-option", 13);
        \u0275\u0275text(27, "Shared");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "mat-option", 14);
        \u0275\u0275text(29, "Restricted");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-option", 15);
        \u0275\u0275text(31, "Not Shared");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div", 9)(33, "mat-form-field", 10)(34, "mat-label");
        \u0275\u0275text(35, "Date Modified");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 9)(38, "mat-form-field", 10)(39, "mat-label");
        \u0275\u0275text(40, "Modified By");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "input", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 9)(43, "mat-form-field", 10)(44, "mat-label");
        \u0275\u0275text(45, "Upload By");
        \u0275\u0275elementEnd();
        \u0275\u0275element(46, "input", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 9)(48, "mat-form-field", 10)(49, "mat-label");
        \u0275\u0275text(50, "File Size");
        \u0275\u0275elementEnd();
        \u0275\u0275element(51, "input", 19);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(52, "mat-dialog-actions")(53, "button", 20);
        \u0275\u0275listener("click", function EditFileDialogComponent_Template_button_click_53_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275text(54, "Save");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "button", 21);
        \u0275\u0275listener("click", function EditFileDialogComponent_Template_button_click_55_listener() {
          return ctx.dialogRef.close(false);
        });
        \u0275\u0275text(56, "Cancel");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.fileForm);
        \u0275\u0275advance(3);
        \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image:url('", ctx.data.fileImage, "')"));
        \u0275\u0275advance();
        \u0275\u0275property("alt", \u0275\u0275interpolate1("File Type: ", ctx.data.fileImage))("src", ctx.data.fileImage, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.data.fileName);
        \u0275\u0275advance();
        \u0275\u0275classProp("theme-green", ctx.data.isActive)("theme-red", !ctx.data.isActive);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.isActive ? "Active" : "Inactive", " ");
      }
    }, dependencies: [CommonModule, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatIconModule, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatCardModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MatFormFieldModule, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditFileDialogComponent, [{
    type: Component,
    args: [{ selector: "app-edit-file-dialog", imports: [CommonModule, MatDialogModule, MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, MatCardModule, FormsModule, MatFormFieldModule, ReactiveFormsModule], template: `<h4 mat-dialog-title>Edit File</h4>
        <mat-dialog-content>
            <form [formGroup]="fileForm" class="pt-2">
                <div class="row gx-3">
                    <div class="col-12 col-lg-4 text-center mb-3 mb-lg-4">
                        <div class="avatar avatar-200 coverimg rounded mb-3 mb-lg-4" style="background-image:url('{{ data.fileImage }}')">
                            <img [src]="data.fileImage" alt="File Type: {{ data.fileImage }}" class="d-none" />
                        </div>
                        <p class="text-secondary small mb-1">File Name</p>
                        <p>{{ data.fileName }}</p>
                        <span [class.theme-green]="data.isActive" [class.theme-red]="!data.isActive" class="badge">
                            {{ data.isActive ? "Active" : "Inactive" }}
                        </span>
                    </div>
                    <div class="col-12 col-lg">
                        <div class="row gx-3">
                            <div class="col-12 col-md-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>File Name</mat-label>
                                    <input matInput formControlName="fileName" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Share Status</mat-label>
                                    <mat-select formControlName="shareStatus">
                                        <mat-option value="shared">Shared</mat-option>
                                        <mat-option value="restricted">Restricted</mat-option>
                                        <mat-option value="notshared">Not Shared</mat-option>
                                    </mat-select>
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Date Modified</mat-label>
                                    <input matInput formControlName="dateModified" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Modified By</mat-label>
                                    <input matInput formControlName="modifiedBy" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>Upload By</mat-label>
                                    <input matInput formControlName="uploadBy" />
                                </mat-form-field>
                            </div>
                            <div class="col-12 col-md-6">
                                <mat-form-field appearance="outline" class="w-100">
                                    <mat-label>File Size</mat-label>
                                    <input matInput formControlName="fileSize" />
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </mat-dialog-content>

        <mat-dialog-actions>
            <button matButton="filled" color="primary" (click)="saveChanges()">Save</button>
            <button matButton (click)="dialogRef.close(false)" class="ms-auto theme-red">Cancel</button>
        </mat-dialog-actions>` }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditFileDialogComponent, { className: "EditFileDialogComponent", filePath: "src/app/pages/app/applications/explorer/editfile.component.ts", lineNumber: 84 });
})();

// src/app/components/charts/circle-progress-yellow-blank.component.ts
var CircleProgressYellowBlankComponent = class _CircleProgressYellowBlankComponent {
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
    this.\u0275fac = function CircleProgressYellowBlankComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CircleProgressYellowBlankComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CircleProgressYellowBlankComponent, selectors: [["app-circle-progress-yellow-blank"]], features: [\u0275\u0275ProvidersFeature([
      {
        provide: CircleProgressOptions
      }
    ])], decls: 1, vars: 12, consts: [[1, "avatar", "avatar-60", 3, "percent", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "showSubtitle", "showTitle", "showUnits", "animationDuration"]], template: function CircleProgressYellowBlankComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "circle-progress", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("percent", 65)("space", -4)("radius", 30)("outerStrokeWidth", 4)("innerStrokeWidth", 4)("outerStrokeColor", "#d67a11")("innerStrokeColor", "rgba(232, 101, 0, 0.15)")("animation", true)("showSubtitle", false)("showTitle", false)("showUnits", false)("animationDuration", 300);
      }
    }, dependencies: [NgCircleProgressModule, CircleProgressComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircleProgressYellowBlankComponent, [{
    type: Component,
    args: [{
      selector: "app-circle-progress-yellow-blank",
      standalone: true,
      imports: [NgCircleProgressModule],
      providers: [
        {
          provide: CircleProgressOptions
        }
      ],
      template: `<circle-progress class="avatar avatar-60" [percent]="65" [space]="-4" [radius]="30" [outerStrokeWidth]="4" [innerStrokeWidth]="4" [outerStrokeColor]="'#d67a11'" [innerStrokeColor]="'rgba(232, 101, 0, 0.15)'" [animation]="true" [showSubtitle]="false" [showTitle]="false" [showUnits]="false" [animationDuration]="300"></circle-progress>`
    }]
  }], () => [{ type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CircleProgressYellowBlankComponent, { className: "CircleProgressYellowBlankComponent", filePath: "src/app/components/charts/circle-progress-yellow-blank.component.ts", lineNumber: 16 });
})();

// src/app/components/charts/circle-progress-red-blank.component.ts
var CircleProgressRedBlankComponent = class _CircleProgressRedBlankComponent {
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
    this.\u0275fac = function CircleProgressRedBlankComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CircleProgressRedBlankComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CircleProgressRedBlankComponent, selectors: [["app-circle-progress-red-blank"]], features: [\u0275\u0275ProvidersFeature([
      {
        provide: CircleProgressOptions
      }
    ])], decls: 1, vars: 12, consts: [[1, "avatar", "avatar-60", 3, "percent", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "showSubtitle", "showTitle", "showUnits", "animationDuration"]], template: function CircleProgressRedBlankComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "circle-progress", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("percent", 65)("space", -4)("radius", 30)("outerStrokeWidth", 4)("innerStrokeWidth", 4)("outerStrokeColor", "rgba(192, 1, 0, 1)")("innerStrokeColor", "rgba(192, 1, 0, 0.15)")("animation", true)("showSubtitle", false)("showTitle", false)("showUnits", false)("animationDuration", 300);
      }
    }, dependencies: [NgCircleProgressModule, CircleProgressComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircleProgressRedBlankComponent, [{
    type: Component,
    args: [{
      selector: "app-circle-progress-red-blank",
      standalone: true,
      imports: [NgCircleProgressModule],
      providers: [
        {
          provide: CircleProgressOptions
        }
      ],
      template: `<circle-progress class="avatar avatar-60" [percent]="65" [space]="-4" [radius]="30" [outerStrokeWidth]="4" [innerStrokeWidth]="4" [outerStrokeColor]="'rgba(192, 1, 0, 1)'" [innerStrokeColor]="'rgba(192, 1, 0, 0.15)'" [animation]="true" [showSubtitle]="false" [showTitle]="false" [showUnits]="false" [animationDuration]="300"></circle-progress>`
    }]
  }], () => [{ type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CircleProgressRedBlankComponent, { className: "CircleProgressRedBlankComponent", filePath: "src/app/components/charts/circle-progress-red-blank.component.ts", lineNumber: 16 });
})();

// src/app/components/charts/circle-progress-white-blank.component.ts
var CircleProgressWhiteBlankComponent = class _CircleProgressWhiteBlankComponent {
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
    this.\u0275fac = function CircleProgressWhiteBlankComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CircleProgressWhiteBlankComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CircleProgressWhiteBlankComponent, selectors: [["app-circle-progress-white-blank"]], features: [\u0275\u0275ProvidersFeature([
      {
        provide: CircleProgressOptions
      }
    ])], decls: 1, vars: 12, consts: [[1, "avatar", "avatar-60", 3, "percent", "space", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "showSubtitle", "showTitle", "showUnits", "animationDuration"]], template: function CircleProgressWhiteBlankComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "circle-progress", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("percent", 65)("space", -4)("radius", 30)("outerStrokeWidth", 4)("innerStrokeWidth", 4)("outerStrokeColor", "#ffffff")("innerStrokeColor", "rgba(255, 255, 255, 0.25)")("animation", true)("showSubtitle", false)("showTitle", false)("showUnits", false)("animationDuration", 300);
      }
    }, dependencies: [NgCircleProgressModule, CircleProgressComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircleProgressWhiteBlankComponent, [{
    type: Component,
    args: [{
      selector: "app-circle-progress-white-blank",
      standalone: true,
      imports: [NgCircleProgressModule],
      providers: [
        {
          provide: CircleProgressOptions
        }
      ],
      template: `<circle-progress class="avatar avatar-60" [percent]="65" [space]="-4" [radius]="30" [outerStrokeWidth]="4" [innerStrokeWidth]="4" [outerStrokeColor]="'#ffffff'" [innerStrokeColor]="'rgba(255, 255, 255, 0.25)'" [animation]="true" [showSubtitle]="false" [showTitle]="false" [showUnits]="false" [animationDuration]="300"></circle-progress>`
    }]
  }], () => [{ type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CircleProgressWhiteBlankComponent, { className: "CircleProgressWhiteBlankComponent", filePath: "src/app/components/charts/circle-progress-white-blank.component.ts", lineNumber: 16 });
})();

// src/app/pages/app/applications/explorer/explorer.component.ts
var _c02 = () => [5, 10, 25, 100];
var _forTrack0 = ($index, $item) => $item.name;
function ExplorerComponent_For_241_Conditional_0_For_9_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 144)(1, "mat-icon", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 145);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const grandchild_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", "/app/" + grandchild_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grandchild_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grandchild_r1.name);
  }
}
function ExplorerComponent_For_241_Conditional_0_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-expansion-panel", 50)(1, "mat-expansion-panel-header", 140)(2, "mat-panel-title", 141)(3, "mat-icon", 142);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 143);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-nav-list");
    \u0275\u0275repeaterCreate(8, ExplorerComponent_For_241_Conditional_0_For_9_Conditional_0_For_9_Template, 5, 3, "a", 144, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(child_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(child_r2.children);
  }
}
function ExplorerComponent_For_241_Conditional_0_For_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 144)(1, "mat-icon", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 145);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", "/app/" + child_r2.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r2.name);
  }
}
function ExplorerComponent_For_241_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExplorerComponent_For_241_Conditional_0_For_9_Conditional_0_Template, 10, 2, "mat-expansion-panel", 50)(1, ExplorerComponent_For_241_Conditional_0_For_9_Conditional_1_Template, 5, 3, "a", 144);
  }
  if (rf & 2) {
    const child_r2 = ctx.$implicit;
    \u0275\u0275conditional(child_r2.children ? 0 : 1);
  }
}
function ExplorerComponent_For_241_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-expansion-panel", 50)(1, "mat-expansion-panel-header", 140)(2, "mat-panel-title", 141)(3, "mat-icon", 142);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 143);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-nav-list");
    \u0275\u0275repeaterCreate(8, ExplorerComponent_For_241_Conditional_0_For_9_Template, 2, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(item_r3.children);
  }
}
function ExplorerComponent_For_241_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 139)(1, "mat-icon", 142);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 145);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", "/app/" + item_r3.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.name);
  }
}
function ExplorerComponent_For_241_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExplorerComponent_For_241_Conditional_0_Template, 10, 2, "mat-expansion-panel", 50)(1, ExplorerComponent_For_241_Conditional_1_Template, 5, 3, "a", 139);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275conditional(item_r3.children ? 0 : 1);
  }
}
function ExplorerComponent_th_560_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.keysMap.fileName);
  }
}
function ExplorerComponent_td_561_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 147)(1, "p", 148);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "div", 83)(5, "div", 149);
    \u0275\u0275element(6, "img", 150);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 151)(8, "p", 152);
    \u0275\u0275listener("click", function ExplorerComponent_td_561_Template_p_click_8_listener() {
      const element_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditDialog(element_r6));
    });
    \u0275\u0275elementStart(9, "span", 153);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-icon", 154);
    \u0275\u0275text(12, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 9);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.keysMap.fileName);
    \u0275\u0275advance(4);
    \u0275\u0275property("alt", \u0275\u0275interpolate(element_r6.fileName))("src", element_r6.fileImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(element_r6.fileName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(element_r6.uploadBy);
  }
}
function ExplorerComponent_th_563_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.keysMap.dateCreated);
  }
}
function ExplorerComponent_td_564_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 155)(1, "p", 148);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 101);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.keysMap.dateCreated);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", element_r7.dateCreated, " ", element_r7.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r7.uploadBy);
  }
}
function ExplorerComponent_th_566_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.keysMap.dateModified);
  }
}
function ExplorerComponent_td_567_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 155)(1, "p", 148);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 101);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.keysMap.dateModified);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(element_r8.dateModified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r8.modifiedBy, " ");
  }
}
function ExplorerComponent_th_569_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.keysMap.modifiedBy);
  }
}
function ExplorerComponent_td_570_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 155)(1, "p", 148);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.keysMap.modifiedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r9.modifiedBy, " ");
  }
}
function ExplorerComponent_th_572_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.keysMap.shareStatus);
  }
}
function ExplorerComponent_td_573_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 156);
    \u0275\u0275text(1, " Shared ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_td_573_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 157);
    \u0275\u0275text(1, " Not Shared ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_td_573_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 158);
    \u0275\u0275text(1, " Restricted ");
    \u0275\u0275elementEnd();
  }
}
function ExplorerComponent_td_573_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 155)(1, "p", 148);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275conditionalCreate(4, ExplorerComponent_td_573_Case_4_Template, 2, 0, "span", 156)(5, ExplorerComponent_td_573_Case_5_Template, 2, 0, "span", 157)(6, ExplorerComponent_td_573_Case_6_Template, 2, 0, "span", 158);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const element_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.keysMap.shareStatus);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = element_r10.shareStatus.trim().toLowerCase()) === "shared" ? 4 : tmp_6_0 === "not shared" ? 5 : tmp_6_0 === "restricted" ? 6 : -1);
  }
}
function ExplorerComponent_th_575_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.keysMap.fileSize);
  }
}
function ExplorerComponent_td_576_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 155)(1, "p", 148);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.keysMap.fileSize);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r11.fileSize, " ");
  }
}
function ExplorerComponent_th_578_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.keysMap.action);
  }
}
function ExplorerComponent_td_579_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 155)(1, "button", 159)(2, "mat-icon", 20);
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 3)(6, "button", 160);
    \u0275\u0275listener("click", function ExplorerComponent_td_579_Template_button_click_6_listener() {
      const element_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditDialog(element_r13));
    });
    \u0275\u0275elementStart(7, "mat-icon", 20);
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 25)(12, "mat-icon", 20);
    \u0275\u0275text(13, "delete_forever");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const menu_r14 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r14);
  }
}
function ExplorerComponent_tr_580_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 161);
  }
}
function ExplorerComponent_tr_581_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 162);
  }
}
function ExplorerComponent_tr_582_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 163)(1, "td", 164);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const input_r15 = \u0275\u0275reference(554);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r3.displayedColumns.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('No files found matching the filter "', input_r15.value, '"');
  }
}
var ExplorerComponent = class _ExplorerComponent {
  constructor(renderer, document) {
    this.renderer = renderer;
    this.document = document;
    this.dialog = inject(MatDialog);
    this.navItems = [
      { name: "My Drive", route: "explorer", icon: "cloud_upload" },
      { name: "Local Drive", route: "", icon: "computer" },
      { name: "Recent", route: "", icon: "schedule" },
      { name: "Social", route: "", icon: "people" },
      {
        name: "Shared",
        icon: "share",
        children: [
          { name: "Recent", route: "", icon: "schedule" },
          { name: "Popular", route: "", icon: "star" },
          { name: "Freebies", route: "", icon: "loyalty" }
        ]
      },
      {
        name: "Other",
        icon: "notes",
        children: [
          {
            name: "Trash",
            icon: "delete",
            children: [
              { name: "Recover", route: "", icon: "recycling" },
              { name: "Deleted", route: "", icon: "auto_delete" }
            ]
          },
          { name: "Spam", route: "", icon: "error" },
          { name: "Survey", route: "", icon: "edit_note" }
        ]
      },
      { name: "Settings", route: "", icon: "settings" }
    ];
    this.dataFiles = [
      {
        "File Image": "assets/img/product1.jpg",
        "File Name": "Construction-portal.pdf",
        "Upload by": "me",
        "Date Created": "28-03-2022",
        Time: "06:00 pm",
        "Date Modified": "29-03-2022 08:00 pm",
        "Modified by": " by Kevin Doglas",
        "Share Status": "Shared",
        "File size": "25.5 MB",
        Action: "EditMoveDelete",
        "Is Active": false
      },
      {
        "File Image": "assets/img/product2.jpg",
        "File Name": "save-more-money.pptx",
        "Upload by": "me",
        "Date Created": "11-03-2022",
        Time: "06:00 pm",
        "Date Modified": "5-04-2022 01:11 pm ",
        "Modified by": "Me",
        "Share Status": "Shared",
        "File size": "11.15 MB",
        Action: "EditMoveDelete",
        "Is Active": true
      },
      {
        "File Image": "assets/img/product3.jpg",
        "File Name": "Kitchen_colors_defination.pdf",
        "Upload by": "me",
        "Date Created": "19-03-2022",
        Time: "05:52 pm",
        "Date Modified": "09-03-2022 03:15 pm",
        "Modified by": " by Me",
        "Share Status": "Shared",
        "File size": "25.5 MB",
        Action: "EditMoveDelete",
        "Is Active": true
      },
      {
        "File Image": "assets/img/product4.jpg",
        "File Name": "Networking-simulation.docx ",
        "Upload by": "John Doe",
        "Date Created": "17-03-2022",
        Time: "09:00 pm",
        "Date Modified": "3-04-2022 01:15 am ",
        "Modified by": "John Doe",
        "Share Status": "Not Shared",
        "File size": "11.12 MB",
        Action: "EditMoveDelete",
        "Is Active": true
      },
      {
        "File Image": "assets/img/product5.jpg",
        "File Name": "Business-Presentation.pptx ",
        "Upload by": "Akita Dave(PM)",
        "Date Created": "11-03-2022",
        Time: "08:50 pm",
        "Date Modified": "29-03-2022 03:00 am",
        "Modified by": " by Ankita Dave(PM)",
        "Share Status": "Restricted",
        "File size": "13.2 MB",
        Action: "EditMoveDelete",
        "Is Active": true
      },
      {
        "File Image": "assets/img/product6.jpg",
        "File Name": "small-worker.png",
        "Upload by": "me",
        "Date Created": "15-03-2022",
        Time: "06:00 pm",
        "Date Modified": "1-04-2022 10:00 pm ",
        "Modified by": "Me",
        "Share Status": "Shared",
        "File size": "25.5 MB",
        Action: "EditMoveDelete",
        "Is Active": false
      }
    ];
    this.keysMap = {
      fileImage: "File Name",
      fileName: "File Name",
      uploadBy: "Upload by",
      dateCreated: "Date Created",
      time: "Time",
      dateModified: "Date Modified",
      modifiedBy: "Modified by",
      shareStatus: "Shared",
      fileSize: "File size",
      action: "Action",
      isActive: "Is Active"
    };
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = ["fileName", "dateCreated", "dateModified", "shareStatus", "fileSize", "action"];
    this.dataSource.data = this.transformDataKeys(this.dataFiles);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  // search filter
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  transformDataKeys(data) {
    return data.map((item) => {
      return {
        fileImage: item["File Image"].trim(),
        fileName: item["File Name"].trim(),
        uploadBy: item["Upload by"].trim(),
        dateCreated: item["Date Created"].trim(),
        time: item.Time.trim(),
        dateModified: item["Date Modified"].trim(),
        modifiedBy: item["Modified by"].trim(),
        shareStatus: item["Share Status"].trim(),
        fileSize: item["File size"].trim(),
        action: item.Action.trim(),
        isActive: item["Is Active"]
      };
    });
  }
  // inner sidebar toggle
  innersidebar() {
    const body = this.document.body;
    const className = "innermenu-close";
    if (body.classList.contains(className)) {
      this.renderer.removeClass(body, className);
    } else {
      this.renderer.addClass(body, className);
    }
  }
  // edit file
  openEditDialog(file) {
    const dialogRef = this.dialog.open(EditFileDialogComponent, {
      width: "98%",
      maxWidth: "992px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: __spreadValues({}, file)
    });
  }
  static {
    this.\u0275fac = function ExplorerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExplorerComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplorerComponent, selectors: [["app-explorer"]], viewQuery: function ExplorerComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5)(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 584, vars: 7, consts: [["actionsMenu", "matMenu"], ["actionsMenu2", "matMenu"], ["input", ""], ["menu", "matMenu"], [1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "text-secondary", "small"], [1, "height-150", "d-block"], [1, "container"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-6", "col-sm-6", "col-lg-6", "col-xxl-3"], [1, "mb-3", "mb-lg-4"], [1, "col-auto", "text-center", "order-1", "order-md-1"], [1, "position-relative"], [1, "avatar", "avatar-60", "card", "rounded-circle", "text-center", "mb-1", "position-relative", "theme-azure"], [1, "avatar", "avatar-60", "mx-auto"], [1, "avatar", "avatar-40", "h5", "position-absolute", "start-50", "top-50", "translate-middle", "bg-light-theme", "text-theme", "rounded-circle"], [1, "material-icons-outlined"], [1, "col", "order-3", "order-md-3", "mt-3", "mt-md-0"], [1, "text-secondary", "small", "mb-1"], [1, "col-auto", "order-2", "order-md-3", "ms-auto"], ["matIconButton", "", "aria-label", "Actions", 3, "click", "matMenuTriggerFor"], ["mat-menu-item", ""], [1, "avatar", "avatar-60", "card", "rounded-circle", "text-center", "mb-1", "position-relative"], [1, "avatar", "avatar-40", "h5", "position-absolute", "start-50", "top-50", "translate-middle", "bg-light-theme", "text-theme", "theme-orange", "rounded-circle"], [1, "avatar", "avatar-60", "rounded-circle"], [1, "avatar", "avatar-40", "h5", "position-absolute", "start-50", "top-50", "translate-middle", "bg-light-theme", "text-theme", "theme-red", "rounded-circle"], [1, "col-auto", "col-sm-12", "col-md-auto", "avatar-group", "mt-0", "mt-sm-3", "mt-md-0", "order-2", "order-md-3", "ms-auto"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Just Demo", 1, "avatar", "avatar-30", "rounded-circle", "coverimg"], ["src", "assets/img/product1.jpg", "alt", ""], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Preview Purpose", 1, "avatar", "avatar-30", "rounded-circle", "coverimg"], ["src", "assets/img/product2.jpg", "alt", ""], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "to look real", 1, "avatar", "avatar-30", "rounded-circle", "coverimg"], ["src", "assets/img/product3.jpg", "alt", ""], [1, "bg-theme", "text-white", "mb-3", "mb-lg-4"], [1, "avatar", "avatar-60", "bg-theme", "rounded-circle", "text-center", "mb-1", "position-relative"], [1, "avatar", "avatar-40", "position-absolute", "start-50", "top-50", "translate-middle", "bg-white-opacity", "text-white", "rounded-circle"], [1, "opacity-75", "small", "mb-1"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Shelvey Doe", 1, "avatar", "avatar-30", "rounded-circle", "coverimg", "overlay-ms-15"], ["src", "assets/img/user-2.jpg", "alt", ""], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Maria Smith", 1, "avatar", "avatar-30", "rounded-circle", "coverimg", "overlay-ms-15"], ["src", "assets/img/user-3.jpg", "alt", ""], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Steve Branden", 1, "avatar", "avatar-30", "rounded-circle", "coverimg", "overlay-ms-15"], ["src", "assets/img/user-4.jpg", "alt", ""], [1, "col-auto", "order-1", "order-md-1"], [1, "avatar", "avatar-50", "rounded", "bg-theme", "theme-blue", "text-white"], [1, "col", "order-3", "order-md-2", "mt-3", "mt-md-0"], [1, ""], [1, "avatar", "avatar-50", "rounded", "bg-theme", "theme-green", "text-white"], [1, "avatar", "avatar-50", "rounded", "bg-theme", "theme-orange", "text-white"], [1, "avatar", "avatar-50", "rounded", "bg-theme", "theme-red", "text-white"], [1, "text-center", "py-3", "mb-3", "mb-lg-4"], [1, "mb-2"], [1, "text-gradient"], [1, "text-secondary"], [1, "row", "gx-3"], [1, "col-auto", "col-md", "col-lg-auto", "order-1", "order-xl-1", "mb-3"], ["matIconButton", "", "aria-label", "Inner Menu", 3, "click"], [1, "px-3", "d-none", "d-lg-inline-block"], ["matIconButton", ""], ["matIconButton", "", "disabled", ""], [1, "col-12", "col-md-12", "col-xl-3", "order-3", "order-xl-2", "ms-auto", "mb-3"], ["appearance", "outline", 1, "inline-small", "border-light", "w-100"], ["matInput", "", "placeholder", "Search..."], ["matSuffix", ""], [1, "col-auto", "col-md-auto", "order-2", "order-xl-3", "mb-3", "ms-auto", "ms-xl-0"], ["matIconButton", "", 1, "d-none", "d-sm-inline-block"], [1, "inner-sidebar-wrap", "mb-3"], [1, "inner-sidebar", "p-3"], ["matButton", "elevated", "type", "button", 1, "w-100", "mb-3"], [1, "sidebar-nav", "mb-3", "mb-lg-4"], [1, "col-auto", "mb-3"], [1, "rounded", "bg-theme", "text-white", "p-2", "text-center"], [1, "small"], [1, "col", "align-self-center", "mb-3"], ["mode", "determinate", "value", "40", 1, "mb-2"], [1, "small", "text-secondary"], [1, "bg-light-theme", "theme-cyan"], [1, "row", "gx-3", "mb-3"], [1, "col"], [1, "col-auto"], [1, "small", "opacity-75"], ["mode", "determinate", "value", "40", 1, "mb-2", "theme-blue"], ["matButton", "", "routerLink", "/app/subscription-plans"], ["iconPositionEnd", ""], [1, "inner-sidebar-content"], [1, "row", "gx-3", "gx-lg-4", "mb-3"], [1, "col-12", "col-sm-6", "col-lg-6", "col-xl-3"], ["mat-card-image", "", 1, "height-150", "w-100", "coverimg", "mb-3"], ["src", "assets/img/product1.jpg", "alt", "", 1, "w-100"], ["href", "javascript:void(0)", 1, "avatar", "avatar-40", "rounded", "bg-light-theme", "text-theme", "theme-red"], [1, "col", "maxwidth-dynamic", 2, "--mw-dynamic", "calc(100% - 65px)"], [1, "mb-1", "text-truncated"], ["src", "assets/img/product2.jpg", "alt", "", 1, "w-100"], ["src", "assets/img/product3.jpg", "alt", "", 1, "w-100"], ["src", "assets/img/product4.jpg", "alt", "", 1, "w-100"], [1, "row", "gx-3", "align-items-center", "mb-3", "mb-lg-4"], [1, "avatar", "avatar-40", "bg-light-theme", "text-theme", "rounded"], [1, "mb-0"], ["href", ""], ["matButton", ""], [1, "col-12", "col-md-4", "col-lg-6", "col-xl-3"], [1, "avatar", "avatar-30", "rounded", "text-theme"], [1, "col", "maxwidth-dynamic", 2, "--mw-dynamic", "calc(100% - 55px)"], [1, "mb-0", "text-truncated"], [1, "col-auto", "small"], [1, "bi", "bi-share", "me-1", "fs-12"], ["src", "assets/img/product5.jpg", "alt", "", 1, "w-100"], ["src", "assets/img/product6.jpg", "alt", "", 1, "w-100"], ["src", "assets/img/product7.jpg", "alt", "", 1, "w-100"], [1, "w-100"], [1, "col-9", "col-xl", "mb-3"], [1, "col-6", "col-xl-3", "mb-3"], ["appearance", "outline", 1, "w-100", "inline-small"], ["multiple", ""], ["value", "all", "selected", ""], ["value", "shared"], ["value", "uploaded_by"], ["value", "favorite"], [1, "col-6", "col-xl-auto", "mb-3"], ["matInput", "", "placeholder", "Filter by name, status, or user", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "bg-none", "responsive-table", 3, "dataSource"], ["matColumnDef", "fileName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "py-2", 4, "matCellDef"], ["matColumnDef", "dateCreated"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dateModified"], ["matColumnDef", "modifiedBy"], ["matColumnDef", "shareStatus"], ["matColumnDef", "fileSize"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 1, "bg-none", 3, "pageSizeOptions"], ["mat-list-item", "", "routerLinkActive", "active", 1, "nav-item", "px-3", "py-3", "rounded-lg", 3, "routerLink"], [1, "nav-item-header", "p-0", "h-auto"], [1, "flex", "items-center", "p-3"], ["matListItemIcon", "", 1, "material-icons-outlined"], [1, "flex-grow"], ["mat-list-item", "", "routerLinkActive", "active", 1, "nav-item", "pl-6", "py-2", 3, "routerLink"], ["matListItemTitle", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "py-2"], [1, "mat-mobile-label"], [1, "avatar", "avatar-40", "rounded"], [1, "", 3, "src", "alt"], [1, "col", "maxwidth-dynamic", 2, "--mw-dynamic", "140px"], [1, "mb-0", 3, "click"], [1, "text-truncated", "d-inline-block", "align-middle", "maxwidth-dynamic", "me-1", 2, "--mw-dynamic", "calc(100% - 20px)"], [1, "text-theme", "text-sm", "material-icons-outlined"], ["mat-cell", ""], [1, "badge", "badge-light", "theme-green"], [1, "badge", "badge-light", "theme-red"], [1, "badge", "badge-light", "theme-blue"], ["matIconButton", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell"]], template: function ExplorerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "mat-card", 5)(2, "div", 6)(3, "div", 7)(4, "h3", 8);
        \u0275\u0275text(5, "Explorer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 9);
        \u0275\u0275text(7, "Manage your files with ease");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(8, "app-explorer-banner-chart", 10);
        \u0275\u0275elementStart(9, "div", 11)(10, "div", 12)(11, "div", 13)(12, "mat-card", 14)(13, "mat-card-content")(14, "div", 6)(15, "div", 15)(16, "div", 16)(17, "div", 17);
        \u0275\u0275element(18, "app-circle-progress-blue-blank", 18);
        \u0275\u0275elementStart(19, "div", 19)(20, "mat-icon", 20);
        \u0275\u0275text(21, "language");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(22, "div", 21)(23, "p", 22);
        \u0275\u0275text(24, "Webspace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h3");
        \u0275\u0275text(26, "5.5GB ");
        \u0275\u0275elementStart(27, "small");
        \u0275\u0275text(28, "used");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 23)(30, "button", 24);
        \u0275\u0275listener("click", function ExplorerComponent_Template_button_click_30_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(31, "mat-icon", 20);
        \u0275\u0275text(32, "more_vert");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "mat-menu", null, 0)(35, "button", 25)(36, "mat-icon", 20);
        \u0275\u0275text(37, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "button", 25)(41, "mat-icon", 20);
        \u0275\u0275text(42, "delete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44, "Delete");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(45, "div", 13)(46, "mat-card", 14)(47, "mat-card-content")(48, "div", 6)(49, "div", 15)(50, "div", 16)(51, "div", 26);
        \u0275\u0275element(52, "app-circle-progress-yellow-blank", 18);
        \u0275\u0275elementStart(53, "div", 27)(54, "mat-icon", 20);
        \u0275\u0275text(55, "file_copy");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(56, "div", 21)(57, "p", 22);
        \u0275\u0275text(58, "Server");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "h3");
        \u0275\u0275text(60, "2569k");
        \u0275\u0275elementStart(61, "small");
        \u0275\u0275text(62, "Files");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 23)(64, "button", 24);
        \u0275\u0275listener("click", function ExplorerComponent_Template_button_click_64_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(65, "mat-icon", 20);
        \u0275\u0275text(66, "more_vert");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "mat-menu", null, 1)(69, "button", 25)(70, "mat-icon", 20);
        \u0275\u0275text(71, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "span");
        \u0275\u0275text(73, "Edit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "button", 25)(75, "mat-icon", 20);
        \u0275\u0275text(76, "delete");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "span");
        \u0275\u0275text(78, "Delete");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(79, "div", 13)(80, "mat-card", 14)(81, "mat-card-content")(82, "div", 6)(83, "div", 15)(84, "div", 16)(85, "div", 26);
        \u0275\u0275element(86, "app-circle-progress-red-blank", 28);
        \u0275\u0275elementStart(87, "div", 29)(88, "mat-icon", 20);
        \u0275\u0275text(89, "storage");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(90, "div", 21)(91, "p", 22);
        \u0275\u0275text(92, "SSD used");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "h3");
        \u0275\u0275text(94, "1.15");
        \u0275\u0275elementStart(95, "small");
        \u0275\u0275text(96, "TB");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "div", 30)(98, "figure", 31);
        \u0275\u0275element(99, "img", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "figure", 33);
        \u0275\u0275element(101, "img", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "figure", 35);
        \u0275\u0275element(103, "img", 36);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(104, "div", 13)(105, "mat-card", 37)(106, "mat-card-content")(107, "div", 6)(108, "div", 15)(109, "div", 16)(110, "div", 38);
        \u0275\u0275element(111, "app-circle-progress-white-blank", 18);
        \u0275\u0275elementStart(112, "div", 39)(113, "mat-icon", 20);
        \u0275\u0275text(114, "receipt");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(115, "div", 21)(116, "p", 40);
        \u0275\u0275text(117, "Bills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "h3");
        \u0275\u0275text(119, "186 ");
        \u0275\u0275elementStart(120, "small");
        \u0275\u0275text(121, "USD");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(122, "div", 30)(123, "figure", 41);
        \u0275\u0275element(124, "img", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "figure", 43);
        \u0275\u0275element(126, "img", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "figure", 45);
        \u0275\u0275element(128, "img", 46);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(129, "div", 12)(130, "div", 13)(131, "mat-card", 14)(132, "mat-card-content")(133, "div", 6)(134, "div", 47)(135, "div", 48)(136, "mat-icon", 20);
        \u0275\u0275text(137, "receipt");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(138, "div", 49)(139, "p", 22);
        \u0275\u0275text(140, "Docs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "h3", 50);
        \u0275\u0275text(142, "1254 files");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "div", 23);
        \u0275\u0275element(144, "app-circle-progress-blue", 18);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(145, "div", 13)(146, "mat-card", 14)(147, "mat-card-content")(148, "div", 6)(149, "div", 47)(150, "div", 51)(151, "mat-icon", 20);
        \u0275\u0275text(152, "receipt");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(153, "div", 49)(154, "p", 22);
        \u0275\u0275text(155, "Musics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "h3", 50);
        \u0275\u0275text(157, "3200 files");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div", 23);
        \u0275\u0275element(159, "app-circle-progress-green", 18);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(160, "div", 13)(161, "mat-card", 14)(162, "mat-card-content")(163, "div", 6)(164, "div", 47)(165, "div", 52)(166, "mat-icon", 20);
        \u0275\u0275text(167, "receipt");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(168, "div", 49)(169, "p", 22);
        \u0275\u0275text(170, "Videos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "h3", 50);
        \u0275\u0275text(172, "165 files");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "div", 23);
        \u0275\u0275element(174, "app-circle-progress-yellow", 18);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(175, "div", 13)(176, "mat-card", 14)(177, "mat-card-content")(178, "div", 6)(179, "div", 47)(180, "div", 53)(181, "mat-icon", 20);
        \u0275\u0275text(182, "receipt");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(183, "div", 49)(184, "p", 22);
        \u0275\u0275text(185, "Other");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "h3", 50);
        \u0275\u0275text(187, "2589 files");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(188, "div", 23);
        \u0275\u0275element(189, "app-circle-progress-red", 18);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(190, "div", 11)(191, "div", 54)(192, "h2", 55);
        \u0275\u0275text(193, "Better you manage space, ");
        \u0275\u0275elementStart(194, "span", 56);
        \u0275\u0275text(195, "Awesome things");
        \u0275\u0275elementEnd();
        \u0275\u0275text(196, " you will get soon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "p", 57);
        \u0275\u0275text(198, "Files Management and all possible are on demand in digital age transformation.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(199, "div", 58)(200, "div", 59)(201, "button", 60);
        \u0275\u0275listener("click", function ExplorerComponent_Template_button_click_201_listener() {
          return ctx.innersidebar();
        });
        \u0275\u0275elementStart(202, "mat-icon", 20);
        \u0275\u0275text(203, "view_sidebar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(204, "span", 61);
        \u0275\u0275text(205, "Explore your Files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "button", 62)(207, "mat-icon", 20);
        \u0275\u0275text(208, "create_new_folder");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(209, "button", 62)(210, "mat-icon", 20);
        \u0275\u0275text(211, "note_add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(212, "button", 63)(213, "mat-icon", 20);
        \u0275\u0275text(214, "delete");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(215, "div", 64)(216, "mat-form-field", 65);
        \u0275\u0275element(217, "input", 66);
        \u0275\u0275elementStart(218, "mat-icon", 67);
        \u0275\u0275text(219, "search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(220, "div", 68)(221, "button", 69)(222, "mat-icon", 20);
        \u0275\u0275text(223, "help");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(224, "button", 62)(225, "mat-icon", 20);
        \u0275\u0275text(226, "arrow_back");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(227, "span", 9);
        \u0275\u0275text(228, "30/500");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(229, "button", 62)(230, "mat-icon", 20);
        \u0275\u0275text(231, "arrow_forward");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(232, "div", 70)(233, "div", 71)(234, "button", 72)(235, "mat-icon", 20);
        \u0275\u0275text(236, "cloud_upload");
        \u0275\u0275elementEnd();
        \u0275\u0275text(237, " Upload File");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(238, "nav", 73)(239, "mat-nav-list");
        \u0275\u0275repeaterCreate(240, ExplorerComponent_For_241_Template, 2, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(242, "div", 58)(243, "div", 74)(244, "div", 75)(245, "mat-icon", 20);
        \u0275\u0275text(246, "cloud");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(247, "p", 76);
        \u0275\u0275text(248, "Cloud");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(249, "div", 77)(250, "p", 55);
        \u0275\u0275text(251, "Storage");
        \u0275\u0275elementEnd();
        \u0275\u0275element(252, "mat-progress-bar", 78);
        \u0275\u0275elementStart(253, "p", 79);
        \u0275\u0275text(254, "5.4GB of 6GB used");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(255, "mat-card", 80)(256, "mat-card-content")(257, "div", 81)(258, "div", 82)(259, "p");
        \u0275\u0275text(260, "Free Plan");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(261, "div", 83)(262, "p", 84);
        \u0275\u0275text(263, "4 days left");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(264, "mat-progress-bar", 85);
        \u0275\u0275elementStart(265, "a", 86);
        \u0275\u0275text(266, "Upgrade ");
        \u0275\u0275elementStart(267, "mat-icon", 87);
        \u0275\u0275text(268, "arrow_forward_ios");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(269, "div", 88)(270, "div", 89)(271, "div", 90)(272, "mat-card", 14)(273, "div", 91);
        \u0275\u0275element(274, "img", 92);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(275, "mat-card-content")(276, "div", 6)(277, "div", 83)(278, "a", 93)(279, "mat-icon", 20);
        \u0275\u0275text(280, "picture_as_pdf");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(281, "div", 94)(282, "p", 95);
        \u0275\u0275text(283, "Construction-portal.pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(284, "p", 79);
        \u0275\u0275text(285, "28/02/2022");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(286, "div", 90)(287, "mat-card", 14)(288, "div", 91);
        \u0275\u0275element(289, "img", 96);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(290, "mat-card-content")(291, "div", 6)(292, "div", 83)(293, "a", 93)(294, "mat-icon", 20);
        \u0275\u0275text(295, "picture_as_pdf");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(296, "div", 94)(297, "p", 95);
        \u0275\u0275text(298, "networking.pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(299, "p", 79);
        \u0275\u0275text(300, "28/02/2022");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(301, "div", 90)(302, "mat-card", 14)(303, "div", 91);
        \u0275\u0275element(304, "img", 97);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(305, "mat-card-content")(306, "div", 6)(307, "div", 83)(308, "a", 93)(309, "mat-icon", 20);
        \u0275\u0275text(310, "picture_as_pdf");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(311, "div", 94)(312, "p", 95);
        \u0275\u0275text(313, "savemoremoney.pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(314, "p", 79);
        \u0275\u0275text(315, "28/02/2022");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(316, "div", 90)(317, "mat-card", 14)(318, "div", 91);
        \u0275\u0275element(319, "img", 98);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(320, "mat-card-content")(321, "div", 6)(322, "div", 83)(323, "a", 93)(324, "mat-icon", 20);
        \u0275\u0275text(325, "picture_as_pdf");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(326, "div", 94)(327, "p", 95);
        \u0275\u0275text(328, "Kitchen_colors_defination.jpg");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(329, "p", 79);
        \u0275\u0275text(330, "28/02/2022");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(331, "div", 99)(332, "div", 83)(333, "div", 100)(334, "mat-icon", 20);
        \u0275\u0275text(335, "folder");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(336, "div", 82)(337, "h4", 101);
        \u0275\u0275text(338, "Folders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(339, "p", 79);
        \u0275\u0275text(340, "Recently viewed by ");
        \u0275\u0275elementStart(341, "a", 102);
        \u0275\u0275text(342, "Alliana Smith");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(343, "div", 83)(344, "button", 103);
        \u0275\u0275text(345, "Recent ");
        \u0275\u0275elementStart(346, "mat-icon", 87);
        \u0275\u0275text(347, "sort");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(348, "div", 89)(349, "div", 104)(350, "mat-card", 14)(351, "mat-card-content")(352, "div", 6)(353, "div", 83)(354, "div", 105)(355, "mat-icon", 20);
        \u0275\u0275text(356, "folder");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(357, "div", 106)(358, "p", 107);
        \u0275\u0275text(359, "William's School");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(360, "p", 79);
        \u0275\u0275text(361, "18 Files");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(362, "div", 104)(363, "mat-card", 14)(364, "mat-card-content")(365, "div", 6)(366, "div", 83)(367, "div", 105)(368, "mat-icon", 20);
        \u0275\u0275text(369, "folder");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(370, "div", 106)(371, "p", 107);
        \u0275\u0275text(372, "Music Audition");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(373, "p", 79);
        \u0275\u0275text(374, "3 Files");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(375, "div", 104)(376, "mat-card", 14)(377, "mat-card-content")(378, "div", 6)(379, "div", 83)(380, "div", 105)(381, "mat-icon", 20);
        \u0275\u0275text(382, "folder");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(383, "div", 106)(384, "p", 107);
        \u0275\u0275text(385, "Housing Papers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(386, "p", 79);
        \u0275\u0275text(387, "6 Files");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(388, "div", 104)(389, "mat-card", 14)(390, "mat-card-content")(391, "div", 6)(392, "div", 83)(393, "div", 105)(394, "mat-icon", 20);
        \u0275\u0275text(395, "folder");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(396, "div", 106)(397, "p", 107);
        \u0275\u0275text(398, "Lisa's Tuition");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(399, "p", 79);
        \u0275\u0275text(400, "4 Files");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(401, "div", 104)(402, "mat-card", 14)(403, "mat-card-content")(404, "div", 6)(405, "div", 83)(406, "div", 105)(407, "mat-icon", 20);
        \u0275\u0275text(408, "folder");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(409, "div", 106)(410, "p", 107);
        \u0275\u0275text(411, "Bills Housing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(412, "p", 79);
        \u0275\u0275text(413, "8 Files");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(414, "div", 104)(415, "mat-card", 14)(416, "mat-card-content")(417, "div", 6)(418, "div", 83)(419, "div", 105)(420, "mat-icon", 20);
        \u0275\u0275text(421, "folder");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(422, "div", 106)(423, "p", 107);
        \u0275\u0275text(424, "Trip Photos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(425, "div", 58)(426, "div", 82)(427, "p", 79);
        \u0275\u0275text(428, "16 Files");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(429, "div", 108);
        \u0275\u0275element(430, "i", 109);
        \u0275\u0275text(431, " Shared");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(432, "div", 104)(433, "mat-card", 14)(434, "mat-card-content")(435, "div", 6)(436, "div", 83)(437, "div", 105)(438, "mat-icon", 20);
        \u0275\u0275text(439, "folder");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(440, "div", 106)(441, "p", 107);
        \u0275\u0275text(442, "Money Presentation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(443, "p", 79);
        \u0275\u0275text(444, "10 Files");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(445, "div", 99)(446, "div", 83)(447, "div", 100)(448, "mat-icon", 20);
        \u0275\u0275text(449, "file_copy");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(450, "div", 82)(451, "h4", 101);
        \u0275\u0275text(452, "Files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(453, "p", 79);
        \u0275\u0275text(454, "Recently added by ");
        \u0275\u0275elementStart(455, "a", 102);
        \u0275\u0275text(456, "Yaan Lee");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(457, "div", 83)(458, "button", 103);
        \u0275\u0275text(459, "Recent ");
        \u0275\u0275elementStart(460, "mat-icon", 87);
        \u0275\u0275text(461, "sort");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(462, "div", 12)(463, "div", 104)(464, "mat-card", 14)(465, "div", 91);
        \u0275\u0275element(466, "img", 110);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(467, "mat-card-content")(468, "div", 6)(469, "div", 83)(470, "a", 93)(471, "mat-icon", 20);
        \u0275\u0275text(472, "picture_as_pdf");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(473, "div", 94)(474, "p", 95);
        \u0275\u0275text(475, "Construction-portal.pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(476, "p", 79);
        \u0275\u0275text(477, "28/02/2022");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(478, "div", 104)(479, "mat-card", 14)(480, "div", 91);
        \u0275\u0275element(481, "img", 111);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(482, "mat-card-content")(483, "div", 6)(484, "div", 83)(485, "a", 93)(486, "mat-icon", 20);
        \u0275\u0275text(487, "picture_as_pdf");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(488, "div", 94)(489, "p", 95);
        \u0275\u0275text(490, "networking.pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(491, "p", 79);
        \u0275\u0275text(492, "28/02/2022");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(493, "div", 104)(494, "mat-card", 14)(495, "div", 91);
        \u0275\u0275element(496, "img", 112);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(497, "mat-card-content")(498, "div", 6)(499, "div", 83)(500, "a", 93)(501, "mat-icon", 20);
        \u0275\u0275text(502, "picture_as_pdf");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(503, "div", 94)(504, "p", 95);
        \u0275\u0275text(505, "savemoremoney.pdf");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(506, "p", 79);
        \u0275\u0275text(507, "28/02/2022");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(508, "div", 104)(509, "mat-card", 14)(510, "div", 91);
        \u0275\u0275element(511, "img", 92);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(512, "mat-card-content")(513, "div", 6)(514, "div", 83)(515, "a", 93)(516, "mat-icon", 20);
        \u0275\u0275text(517, "picture_as_pdf");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(518, "div", 94)(519, "p", 95);
        \u0275\u0275text(520, "Kitchen_colors_defination.jpg");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(521, "p", 79);
        \u0275\u0275text(522, "28/02/2022");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(523, "mat-card", 14)(524, "mat-card-header")(525, "div", 113)(526, "div", 6)(527, "div", 74)(528, "div", 100)(529, "mat-icon", 20);
        \u0275\u0275text(530, "view_list");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(531, "div", 114)(532, "h4", 8);
        \u0275\u0275text(533, "Shared with me");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(534, "p", 79);
        \u0275\u0275text(535, "Sharpen details on trending products");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(536, "div", 115)(537, "mat-form-field", 116)(538, "mat-label");
        \u0275\u0275text(539, "Select Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(540, "mat-select", 117)(541, "mat-option", 118);
        \u0275\u0275text(542, "All Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(543, "mat-option", 119);
        \u0275\u0275text(544, "Shared");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(545, "mat-option", 120);
        \u0275\u0275text(546, "Uploaded by");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(547, "mat-option", 121);
        \u0275\u0275text(548, "Favorite");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(549, "div", 122)(550, "mat-form-field", 116)(551, "mat-label");
        \u0275\u0275text(552, "Search Files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(553, "input", 123, 2);
        \u0275\u0275listener("keyup", function ExplorerComponent_Template_input_keyup_553_listener($event) {
          return ctx.applyFilter($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(555, "mat-icon", 67);
        \u0275\u0275text(556, "search");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(557, "mat-card-content")(558, "table", 124);
        \u0275\u0275elementContainerStart(559, 125);
        \u0275\u0275template(560, ExplorerComponent_th_560_Template, 2, 1, "th", 126)(561, ExplorerComponent_td_561_Template, 15, 6, "td", 127);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(562, 128);
        \u0275\u0275template(563, ExplorerComponent_th_563_Template, 2, 1, "th", 126)(564, ExplorerComponent_td_564_Template, 8, 4, "td", 129);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(565, 130);
        \u0275\u0275template(566, ExplorerComponent_th_566_Template, 2, 1, "th", 126)(567, ExplorerComponent_td_567_Template, 8, 3, "td", 129);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(568, 131);
        \u0275\u0275template(569, ExplorerComponent_th_569_Template, 2, 1, "th", 126)(570, ExplorerComponent_td_570_Template, 5, 2, "td", 129);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(571, 132);
        \u0275\u0275template(572, ExplorerComponent_th_572_Template, 2, 1, "th", 126)(573, ExplorerComponent_td_573_Template, 7, 2, "td", 129);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(574, 133);
        \u0275\u0275template(575, ExplorerComponent_th_575_Template, 2, 1, "th", 126)(576, ExplorerComponent_td_576_Template, 5, 2, "td", 129);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(577, 134);
        \u0275\u0275template(578, ExplorerComponent_th_578_Template, 2, 1, "th", 126)(579, ExplorerComponent_td_579_Template, 16, 1, "td", 129);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(580, ExplorerComponent_tr_580_Template, 1, 0, "tr", 135)(581, ExplorerComponent_tr_581_Template, 1, 0, "tr", 136)(582, ExplorerComponent_tr_582_Template, 3, 2, "tr", 137);
        \u0275\u0275elementEnd();
        \u0275\u0275element(583, "mat-paginator", 138);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const actionsMenu_r16 = \u0275\u0275reference(34);
        const actionsMenu2_r17 = \u0275\u0275reference(68);
        \u0275\u0275advance(30);
        \u0275\u0275property("matMenuTriggerFor", actionsMenu_r16);
        \u0275\u0275advance(34);
        \u0275\u0275property("matMenuTriggerFor", actionsMenu2_r17);
        \u0275\u0275advance(176);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(318);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(22);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(2);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(6, _c02));
      }
    }, dependencies: [RouterLink, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardImage, MatToolbarModule, MatDialogModule, MatExpansionModule, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatListModule, MatNavList, MatListItem, MatListItemIcon, MatListItemTitle, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatProgressBarModule, MatProgressBar, MatIconModule, MatIcon, MatButtonModule, MatButton, MatIconButton, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatSelectModule, MatSelect, MatOption, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatPaginatorModule, MatPaginator, MatSortModule, MatSort, MatSortHeader, CircleProgressBlueBlankComponent, CircleProgressBlueComponent, CircleProgressYellowBlankComponent, CircleProgressRedBlankComponent, CircleProgressWhiteBlankComponent, ExplorerBannerChartComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorerComponent, [{
    type: Component,
    args: [{
      selector: "app-explorer",
      standalone: true,
      imports: [RouterLink, MatCardModule, MatToolbarModule, MatDialogModule, MatExpansionModule, MatListModule, MatFormFieldModule, MatInputModule, MatProgressBarModule, MatIconModule, MatButtonModule, MatMenuModule, MatSelectModule, MatTableModule, MatPaginatorModule, MatSortModule, CircleProgressBlueBlankComponent, CircleProgressBlueComponent, CircleProgressYellowBlankComponent, CircleProgressRedBlankComponent, CircleProgressWhiteBlankComponent, ExplorerBannerChartComponent],
      template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Explorer</h3>
                        <p class="text-secondary small">Manage your files with ease</p>
                    </div>
                </div>
            </mat-card>
        </div>

        <!-- content -->
        <app-explorer-banner-chart class="height-150 d-block"></app-explorer-banner-chart>

        <div class="container">
            <div class="row gx-3 gx-lg-4">
                <!-- summary blocks -->
                <div class="col-6 col-sm-6 col-lg-6 col-xxl-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto text-center order-1 order-md-1">
                                    <div class="position-relative">
                                        <div class="avatar avatar-60 card rounded-circle text-center mb-1 position-relative theme-azure ">
                                            <app-circle-progress-blue-blank class="avatar avatar-60 mx-auto"></app-circle-progress-blue-blank>
                                            <div class="avatar avatar-40 h5 position-absolute start-50 top-50 translate-middle bg-light-theme text-theme rounded-circle">
                                                <mat-icon class="material-icons-outlined">language</mat-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col order-3 order-md-3 mt-3 mt-md-0">
                                    <p class="text-secondary small mb-1">Webspace</p>
                                    <h3>5.5GB <small>used</small></h3>
                                </div>
                                <div class="col-auto order-2 order-md-3 ms-auto">
                                    <button matIconButton [matMenuTriggerFor]="actionsMenu" aria-label="Actions" (click)="$event.stopPropagation()">
                                        <mat-icon class="material-icons-outlined">more_vert</mat-icon>
                                    </button>
                                    <mat-menu #actionsMenu="matMenu">
                                        <button mat-menu-item><mat-icon class="material-icons-outlined">edit</mat-icon><span>Edit</span></button>
                                        <button mat-menu-item><mat-icon class="material-icons-outlined">delete</mat-icon><span>Delete</span></button>
                                    </mat-menu>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-6 col-sm-6 col-lg-6 col-xxl-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto text-center order-1 order-md-1">
                                    <div class="position-relative">
                                        <div class="avatar avatar-60 card rounded-circle text-center mb-1 position-relative">
                                            <app-circle-progress-yellow-blank class="avatar avatar-60 mx-auto"></app-circle-progress-yellow-blank>
                                            <div class="avatar avatar-40 h5 position-absolute start-50 top-50 translate-middle bg-light-theme text-theme theme-orange rounded-circle">
                                                <mat-icon class="material-icons-outlined">file_copy</mat-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col order-3 order-md-3 mt-3 mt-md-0">
                                    <p class="text-secondary small mb-1">Server</p>
                                    <h3>2569k<small>Files</small></h3>
                                </div>
                                <div class="col-auto order-2 order-md-3 ms-auto">
                                    <button matIconButton [matMenuTriggerFor]="actionsMenu2" aria-label="Actions" (click)="$event.stopPropagation()">
                                        <mat-icon class="material-icons-outlined">more_vert</mat-icon>
                                    </button>
                                    <mat-menu #actionsMenu2="matMenu">
                                        <button mat-menu-item><mat-icon class="material-icons-outlined">edit</mat-icon><span>Edit</span></button>
                                        <button mat-menu-item><mat-icon class="material-icons-outlined">delete</mat-icon><span>Delete</span></button>
                                    </mat-menu>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-6 col-sm-6 col-lg-6 col-xxl-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto text-center order-1 order-md-1">
                                    <div class="position-relative">
                                        <div class="avatar avatar-60 card rounded-circle text-center mb-1 position-relative">
                                            <app-circle-progress-red-blank class="avatar avatar-60 rounded-circle"></app-circle-progress-red-blank>
                                            <div class="avatar avatar-40 h5 position-absolute start-50 top-50 translate-middle bg-light-theme text-theme theme-red rounded-circle">
                                                <mat-icon class="material-icons-outlined">storage</mat-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col order-3 order-md-3 mt-3 mt-md-0">
                                    <p class="text-secondary small mb-1">SSD used</p>
                                    <h3>1.15<small>TB</small></h3>
                                </div>
                                <div class="col-auto col-sm-12 col-md-auto avatar-group mt-0 mt-sm-3 mt-md-0 order-2 order-md-3 ms-auto">
                                    <figure class="avatar avatar-30 rounded-circle coverimg" data-bs-toggle="tooltip" data-bs-placement="top" title="Just Demo">
                                        <img src="assets/img/product1.jpg" alt="" />
                                    </figure>
                                    <figure class="avatar avatar-30 rounded-circle coverimg" data-bs-toggle="tooltip" data-bs-placement="top" title="Preview Purpose">
                                        <img src="assets/img/product2.jpg" alt="" />
                                    </figure>
                                    <figure class="avatar avatar-30 rounded-circle coverimg" data-bs-toggle="tooltip" data-bs-placement="top" title="to look real">
                                        <img src="assets/img/product3.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-6 col-sm-6 col-lg-6 col-xxl-3">
                    <mat-card class="bg-theme text-white mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto text-center order-1 order-md-1">
                                    <div class="position-relative">
                                        <div class="avatar avatar-60 bg-theme rounded-circle text-center mb-1 position-relative">
                                            <app-circle-progress-white-blank class="avatar avatar-60 mx-auto"></app-circle-progress-white-blank>
                                            <div class="avatar avatar-40 position-absolute start-50 top-50 translate-middle bg-white-opacity text-white rounded-circle">
                                                <mat-icon class="material-icons-outlined">receipt</mat-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col order-3 order-md-3 mt-3 mt-md-0">
                                    <p class="opacity-75 small mb-1">Bills</p>
                                    <h3>186 <small>USD</small></h3>
                                </div>
                                <div class="col-auto col-sm-12 col-md-auto avatar-group mt-0 mt-sm-3 mt-md-0 order-2 order-md-3 ms-auto">
                                    <figure class="avatar avatar-30 rounded-circle coverimg overlay-ms-15" data-bs-toggle="tooltip" data-bs-placement="top" title="Shelvey Doe">
                                        <img src="assets/img/user-2.jpg" alt="" />
                                    </figure>
                                    <figure class="avatar avatar-30 rounded-circle coverimg overlay-ms-15" data-bs-toggle="tooltip" data-bs-placement="top" title="Maria Smith">
                                        <img src="assets/img/user-3.jpg" alt="" />
                                    </figure>
                                    <figure class="avatar avatar-30 rounded-circle coverimg overlay-ms-15" data-bs-toggle="tooltip" data-bs-placement="top" title="Steve Branden">
                                        <img src="assets/img/user-4.jpg" alt="" />
                                    </figure>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
            <div class="row gx-3 gx-lg-4">
                <!-- summary-->
                <div class="col-6 col-sm-6 col-lg-6 col-xxl-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto order-1 order-md-1">
                                    <div class="avatar avatar-50 rounded bg-theme theme-blue text-white">
                                        <mat-icon class="material-icons-outlined">receipt</mat-icon>
                                    </div>
                                </div>
                                <div class="col order-3 order-md-2 mt-3 mt-md-0">
                                    <p class="text-secondary small mb-1">Docs</p>
                                    <h3 class="">1254 files</h3>
                                </div>
                                <div class="col-auto order-2 order-md-3 ms-auto">
                                    <app-circle-progress-blue class="avatar avatar-60 mx-auto"></app-circle-progress-blue>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-6 col-sm-6 col-lg-6 col-xxl-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto order-1 order-md-1">
                                    <div class="avatar avatar-50 rounded bg-theme theme-green text-white">
                                        <mat-icon class="material-icons-outlined">receipt</mat-icon>
                                    </div>
                                </div>
                                <div class="col order-3 order-md-2 mt-3 mt-md-0">
                                    <p class="text-secondary small mb-1">Musics</p>
                                    <h3 class="">3200 files</h3>
                                </div>
                                <div class="col-auto order-2 order-md-3 ms-auto">
                                    <app-circle-progress-green class="avatar avatar-60 mx-auto"></app-circle-progress-green>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-6 col-sm-6 col-lg-6 col-xxl-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto order-1 order-md-1">
                                    <div class="avatar avatar-50 rounded bg-theme theme-orange text-white">
                                        <mat-icon class="material-icons-outlined">receipt</mat-icon>
                                    </div>
                                </div>
                                <div class="col order-3 order-md-2 mt-3 mt-md-0">
                                    <p class="text-secondary small mb-1">Videos</p>
                                    <h3 class="">165 files</h3>
                                </div>
                                <div class="col-auto order-2 order-md-3 ms-auto">
                                    <app-circle-progress-yellow class="avatar avatar-60 mx-auto"></app-circle-progress-yellow>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-6 col-sm-6 col-lg-6 col-xxl-3">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto order-1 order-md-1">
                                    <div class="avatar avatar-50 rounded bg-theme theme-red text-white">
                                        <mat-icon class="material-icons-outlined">receipt</mat-icon>
                                    </div>
                                </div>
                                <div class="col order-3 order-md-2 mt-3 mt-md-0">
                                    <p class="text-secondary small mb-1">Other</p>
                                    <h3 class="">2589 files</h3>
                                </div>
                                <div class="col-auto order-2 order-md-3 ms-auto">
                                    <app-circle-progress-red class="avatar avatar-60 mx-auto"></app-circle-progress-red>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="text-center py-3 mb-3 mb-lg-4">
                <h2 class="mb-2">Better you manage space, <span class="text-gradient">Awesome things</span> you will get soon</h2>
                <p class="text-secondary">Files Management and all possible are on demand in digital age transformation.</p>
            </div>
            <div class="row gx-3">
                <div class="col-auto col-md col-lg-auto order-1 order-xl-1 mb-3">
                    <button matIconButton (click)="innersidebar()" aria-label="Inner Menu">
                        <mat-icon class="material-icons-outlined">view_sidebar</mat-icon>
                    </button>
                    <span class="px-3 d-none d-lg-inline-block">Explore your Files</span>
                    <button matIconButton>
                        <mat-icon class="material-icons-outlined">create_new_folder</mat-icon>
                    </button>
                    <button matIconButton>
                        <mat-icon class="material-icons-outlined">note_add</mat-icon>
                    </button>
                    <button matIconButton disabled>
                        <mat-icon class="material-icons-outlined">delete</mat-icon>
                    </button>
                </div>
                <div class="col-12 col-md-12 col-xl-3 order-3 order-xl-2 ms-auto mb-3">
                    <mat-form-field appearance="outline" class="inline-small border-light w-100">
                        <input matInput placeholder="Search..." />
                        <mat-icon matSuffix>search</mat-icon>
                    </mat-form-field>
                </div>
                <div class="col-auto col-md-auto order-2 order-xl-3 mb-3 ms-auto ms-xl-0">
                    <button matIconButton class="d-none d-sm-inline-block">
                        <mat-icon class="material-icons-outlined">help</mat-icon>
                    </button>
                    <button matIconButton>
                        <mat-icon class="material-icons-outlined">arrow_back</mat-icon>
                    </button>
                    <span class="text-secondary small">30/500</span>
                    <button matIconButton>
                        <mat-icon class="material-icons-outlined">arrow_forward</mat-icon>
                    </button>
                </div>
            </div>

            <!-- file explorer -->
            <div class="inner-sidebar-wrap mb-3">
                <div class="inner-sidebar p-3">
                    <button matButton="elevated" class="w-100 mb-3" type="button"><mat-icon class="material-icons-outlined">cloud_upload</mat-icon> Upload File</button>
                    <!-- nav list -->
                    <nav class="sidebar-nav mb-3 mb-lg-4">
                        <mat-nav-list>
                            @for (item of navItems; track item.name) { @if (item.children) {
                            <!-- Parent menu item with children -->
                            <mat-expansion-panel class="">
                                <mat-expansion-panel-header class="nav-item-header p-0 h-auto">
                                    <mat-panel-title class="flex items-center p-3">
                                        <mat-icon matListItemIcon class="material-icons-outlined">{{ item.icon }}</mat-icon>
                                        <span class="flex-grow">{{ item.name }}</span>
                                    </mat-panel-title>
                                </mat-expansion-panel-header>
                                <mat-nav-list>
                                    @for (child of item.children; track child.name) { @if (child.children) {
                                    <!-- Second-level dropdown -->
                                    <mat-expansion-panel class="">
                                        <mat-expansion-panel-header class="nav-item-header p-0 h-auto">
                                            <mat-panel-title class="flex items-center p-3">
                                                <mat-icon matListItemIcon class="material-icons-outlined">{{ child.icon }}</mat-icon>
                                                <span class="flex-grow">{{ child.name }}</span>
                                            </mat-panel-title>
                                        </mat-expansion-panel-header>
                                        <mat-nav-list>
                                            @for (grandchild of child.children; track grandchild.name) {
                                            <a mat-list-item [routerLink]="'/app/' + grandchild.route" routerLinkActive="active" class="nav-item pl-6 py-2">
                                                <mat-icon matListItemIcon class="material-icons-outlined">{{ grandchild.icon }}</mat-icon>
                                                <span matListItemTitle>{{ grandchild.name }}</span>
                                            </a>
                                            }
                                        </mat-nav-list>
                                    </mat-expansion-panel>
                                    } @else {
                                    <!-- Simple link inside parent -->
                                    <a mat-list-item [routerLink]="'/app/' + child.route" routerLinkActive="active" class="nav-item pl-6 py-2">
                                        <mat-icon matListItemIcon class="material-icons-outlined">{{ child.icon }}</mat-icon>
                                        <span matListItemTitle>{{ child.name }}</span>
                                    </a>
                                    } }
                                </mat-nav-list>
                            </mat-expansion-panel>
                            } @else {
                            <!-- Simple top-level link -->
                            <a mat-list-item [routerLink]="'/app/' + item.route" routerLinkActive="active" class="nav-item px-3 py-3 rounded-lg">
                                <mat-icon matListItemIcon class="material-icons-outlined">{{ item.icon }}</mat-icon>
                                <span matListItemTitle>{{ item.name }}</span>
                            </a>
                            } }
                        </mat-nav-list>
                    </nav>

                    <div class="row gx-3">
                        <div class="col-auto mb-3">
                            <div class="rounded bg-theme text-white p-2 text-center">
                                <mat-icon class="material-icons-outlined">cloud</mat-icon>
                                <p class="small">Cloud</p>
                            </div>
                        </div>
                        <div class="col align-self-center mb-3">
                            <p class="mb-2">Storage</p>
                            <mat-progress-bar mode="determinate" value="40" class="mb-2"></mat-progress-bar>
                            <p class="small text-secondary">5.4GB of 6GB used</p>
                        </div>
                    </div>
                    <mat-card class="bg-light-theme theme-cyan">
                        <mat-card-content>
                            <div class="row gx-3 mb-3">
                                <div class="col">
                                    <p>Free Plan</p>
                                </div>
                                <div class="col-auto">
                                    <p class="small opacity-75">4 days left</p>
                                </div>
                            </div>
                            <mat-progress-bar mode="determinate" value="40" class="mb-2 theme-blue"></mat-progress-bar>
                            <a matButton routerLink="/app/subscription-plans">Upgrade <mat-icon iconPositionEnd>arrow_forward_ios</mat-icon></a>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="inner-sidebar-content">
                    <div class="row gx-3 gx-lg-4 mb-3">
                        <div class="col-12 col-sm-6 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <div mat-card-image class="height-150 w-100 coverimg mb-3">
                                    <img src="assets/img/product1.jpg" class="w-100" alt="" />
                                </div>
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <a href="javascript:void(0)" class="avatar avatar-40 rounded bg-light-theme text-theme theme-red">
                                                <mat-icon class="material-icons-outlined">picture_as_pdf</mat-icon>
                                            </a>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 65px)">
                                            <p class="mb-1 text-truncated">Construction-portal.pdf</p>
                                            <p class="small text-secondary">28/02/2022</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <div mat-card-image class="height-150 w-100 coverimg mb-3">
                                    <img src="assets/img/product2.jpg" class="w-100" alt="" />
                                </div>
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <a href="javascript:void(0)" class="avatar avatar-40 rounded bg-light-theme text-theme theme-red">
                                                <mat-icon class="material-icons-outlined">picture_as_pdf</mat-icon>
                                            </a>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 65px)">
                                            <p class="mb-1 text-truncated">networking.pdf</p>
                                            <p class="small text-secondary">28/02/2022</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <div mat-card-image class="height-150 w-100 coverimg mb-3">
                                    <img src="assets/img/product3.jpg" class="w-100" alt="" />
                                </div>
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <a href="javascript:void(0)" class="avatar avatar-40 rounded bg-light-theme text-theme theme-red">
                                                <mat-icon class="material-icons-outlined">picture_as_pdf</mat-icon>
                                            </a>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 65px)">
                                            <p class="mb-1 text-truncated">savemoremoney.pdf</p>
                                            <p class="small text-secondary">28/02/2022</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <div mat-card-image class="height-150 w-100 coverimg mb-3">
                                    <img src="assets/img/product4.jpg" class="w-100" alt="" />
                                </div>
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <a href="javascript:void(0)" class="avatar avatar-40 rounded bg-light-theme text-theme theme-red">
                                                <mat-icon class="material-icons-outlined">picture_as_pdf</mat-icon>
                                            </a>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 65px)">
                                            <p class="mb-1 text-truncated">Kitchen_colors_defination.jpg</p>
                                            <p class="small text-secondary">28/02/2022</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                    </div>

                    <!-- folders -->
                    <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                        <div class="col-auto">
                            <div class="avatar avatar-40 bg-light-theme text-theme rounded">
                                <mat-icon class="material-icons-outlined">folder</mat-icon>
                            </div>
                        </div>
                        <div class="col">
                            <h4 class="mb-0">Folders</h4>
                            <p class="small text-secondary">Recently viewed by <a href="">Alliana Smith</a></p>
                        </div>
                        <div class="col-auto">
                            <button matButton>Recent <mat-icon iconPositionEnd>sort</mat-icon></button>
                        </div>
                    </div>
                    <div class="row gx-3 gx-lg-4 mb-3">
                        <div class="col-12 col-md-4 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 rounded text-theme">
                                                <mat-icon class="material-icons-outlined">folder</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 55px)">
                                            <p class="mb-0 text-truncated">William's School</p>
                                            <p class="small text-secondary">18 Files</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-4 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 rounded text-theme">
                                                <mat-icon class="material-icons-outlined">folder</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 55px)">
                                            <p class="mb-0 text-truncated">Music Audition</p>
                                            <p class="small text-secondary">3 Files</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-4 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 rounded text-theme">
                                                <mat-icon class="material-icons-outlined">folder</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 55px)">
                                            <p class="mb-0 text-truncated">Housing Papers</p>
                                            <p class="small text-secondary">6 Files</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-4 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 rounded text-theme">
                                                <mat-icon class="material-icons-outlined">folder</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 55px)">
                                            <p class="mb-0 text-truncated">Lisa's Tuition</p>
                                            <p class="small text-secondary">4 Files</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-4 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 rounded text-theme">
                                                <mat-icon class="material-icons-outlined">folder</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 55px)">
                                            <p class="mb-0 text-truncated">Bills Housing</p>
                                            <p class="small text-secondary">8 Files</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-4 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 rounded text-theme">
                                                <mat-icon class="material-icons-outlined">folder</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 55px)">
                                            <p class="mb-0 text-truncated">Trip Photos</p>
                                            <div class="row gx-3">
                                                <div class="col">
                                                    <p class="small text-secondary">16 Files</p>
                                                </div>
                                                <div class="col-auto small"><i class="bi bi-share me-1 fs-12"></i> Shared</div>
                                            </div>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-4 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 rounded text-theme">
                                                <mat-icon class="material-icons-outlined">folder</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 55px)">
                                            <p class="mb-0 text-truncated">Money Presentation</p>
                                            <p class="small text-secondary">10 Files</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                    </div>
                    <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                        <div class="col-auto">
                            <div class="avatar avatar-40 bg-light-theme text-theme rounded">
                                <mat-icon class="material-icons-outlined">file_copy</mat-icon>
                            </div>
                        </div>
                        <div class="col">
                            <h4 class="mb-0">Files</h4>
                            <p class="small text-secondary">Recently added by <a href="">Yaan Lee</a></p>
                        </div>
                        <div class="col-auto">
                            <button matButton>Recent <mat-icon iconPositionEnd>sort</mat-icon></button>
                        </div>
                    </div>
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-12 col-md-4 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <div mat-card-image class="height-150 w-100 coverimg mb-3">
                                    <img src="assets/img/product5.jpg" class="w-100" alt="" />
                                </div>
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <a href="javascript:void(0)" class="avatar avatar-40 rounded bg-light-theme text-theme theme-red">
                                                <mat-icon class="material-icons-outlined">picture_as_pdf</mat-icon>
                                            </a>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 65px)">
                                            <p class="mb-1 text-truncated">Construction-portal.pdf</p>
                                            <p class="small text-secondary">28/02/2022</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-4 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <div mat-card-image class="height-150 w-100 coverimg mb-3">
                                    <img src="assets/img/product6.jpg" class="w-100" alt="" />
                                </div>
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <a href="javascript:void(0)" class="avatar avatar-40 rounded bg-light-theme text-theme theme-red">
                                                <mat-icon class="material-icons-outlined">picture_as_pdf</mat-icon>
                                            </a>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 65px)">
                                            <p class="mb-1 text-truncated">networking.pdf</p>
                                            <p class="small text-secondary">28/02/2022</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-4 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <div mat-card-image class="height-150 w-100 coverimg mb-3">
                                    <img src="assets/img/product7.jpg" class="w-100" alt="" />
                                </div>
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <a href="javascript:void(0)" class="avatar avatar-40 rounded bg-light-theme text-theme theme-red">
                                                <mat-icon class="material-icons-outlined">picture_as_pdf</mat-icon>
                                            </a>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 65px)">
                                            <p class="mb-1 text-truncated">savemoremoney.pdf</p>
                                            <p class="small text-secondary">28/02/2022</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-12 col-md-4 col-lg-6 col-xl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <div mat-card-image class="height-150 w-100 coverimg mb-3">
                                    <img src="assets/img/product1.jpg" class="w-100" alt="" />
                                </div>
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <a href="javascript:void(0)" class="avatar avatar-40 rounded bg-light-theme text-theme theme-red">
                                                <mat-icon class="material-icons-outlined">picture_as_pdf</mat-icon>
                                            </a>
                                        </div>
                                        <div class="col maxwidth-dynamic" style="--mw-dynamic: calc(100% - 65px)">
                                            <p class="mb-1 text-truncated">Kitchen_colors_defination.jpg</p>
                                            <p class="small text-secondary">28/02/2022</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                    </div>

                    <!-- Grid table-->
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center">
                                    <div class="col-auto mb-3">
                                        <div class="avatar avatar-40 bg-light-theme text-theme rounded">
                                            <mat-icon class="material-icons-outlined">view_list</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col-9 col-xl mb-3">
                                        <h4 class="mb-1">Shared with me</h4>
                                        <p class="small text-secondary">Sharpen details on trending products</p>
                                    </div>
                                    <div class="col-6 col-xl-3 mb-3">
                                        <mat-form-field appearance="outline" class="w-100 inline-small">
                                            <mat-label>Select Category</mat-label>
                                            <mat-select multiple>
                                                <mat-option value="all" selected>All Categories</mat-option>
                                                <mat-option value="shared">Shared</mat-option>
                                                <mat-option value="uploaded_by">Uploaded by</mat-option>
                                                <mat-option value="favorite">Favorite</mat-option>
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                    <div class="col-6 col-xl-auto mb-3">
                                        <mat-form-field appearance="outline" class="w-100 inline-small">
                                            <mat-label>Search Files</mat-label>
                                            <input matInput (keyup)="applyFilter($event)" placeholder="Filter by name, status, or user" #input />
                                            <mat-icon matSuffix>search</mat-icon>
                                        </mat-form-field>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content>
                            <table mat-table [dataSource]="dataSource" matSort class="bg-none responsive-table">
                                <!-- File Name Column -->
                                <ng-container matColumnDef="fileName">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ keysMap.fileName }}</th>
                                    <td mat-cell *matCellDef="let element" class="py-2">
                                        <p class="mat-mobile-label">{{ keysMap.fileName }}</p>
                                        <div class="row gx-3">
                                            <div class="col-auto">
                                                <div class="avatar avatar-40 rounded">
                                                    <img [src]="element.fileImage" alt="{{ element.fileName }}" class="" />
                                                </div>
                                            </div>
                                            <div class="col maxwidth-dynamic " style="--mw-dynamic: 140px">
                                                <p class="mb-0" (click)="openEditDialog(element)">
                                                    <span class="text-truncated d-inline-block align-middle maxwidth-dynamic me-1" style="--mw-dynamic: calc(100% - 20px)">{{ element.fileName }}</span>
                                                    <mat-icon class="text-theme text-sm material-icons-outlined">edit</mat-icon>
                                                </p>
                                                <p class="text-secondary small">{{ element.uploadBy }}</p>
                                            </div>
                                        </div>
                                    </td>
                                </ng-container>

                                <!-- Date Created Column -->
                                <ng-container matColumnDef="dateCreated">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ keysMap.dateCreated }}</th>
                                    <td mat-cell *matCellDef="let element">
                                        <p class="mat-mobile-label">{{ keysMap.dateCreated }}</p>
                                        <div>
                                            <p class="mb-0">{{ element.dateCreated }} {{ element.time }}</p>
                                            <p class="text-secondary small">{{ element.uploadBy }}</p>
                                        </div>
                                    </td>
                                </ng-container>

                                <!-- Date Modified Column -->
                                <ng-container matColumnDef="dateModified">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ keysMap.dateModified }}</th>
                                    <td mat-cell *matCellDef="let element">
                                        <p class="mat-mobile-label">{{ keysMap.dateModified }}</p>
                                        <div>
                                            <p class="mb-0">{{ element.dateModified }}</p>
                                            <p class="text-secondary small">
                                                {{ element.modifiedBy }}
                                            </p>
                                        </div>
                                    </td>
                                </ng-container>

                                <!-- Modified by Column -->
                                <ng-container matColumnDef="modifiedBy">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ keysMap.modifiedBy }}</th>
                                    <td mat-cell *matCellDef="let element">
                                        <p class="mat-mobile-label">{{ keysMap.modifiedBy }}</p>
                                        <div>
                                            {{ element.modifiedBy }}
                                        </div>
                                    </td>
                                </ng-container>

                                <!-- Share Status Column -->
                                <ng-container matColumnDef="shareStatus">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ keysMap.shareStatus }}</th>
                                    <td mat-cell *matCellDef="let element">
                                        <p class="mat-mobile-label">{{ keysMap.shareStatus }}</p>
                                        <div>
                                            @switch (element.shareStatus.trim().toLowerCase()) { @case ('shared') {
                                            <span class="badge badge-light theme-green"> Shared </span>
                                            } @case ('not shared') {
                                            <span class="badge badge-light theme-red"> Not Shared </span>
                                            } @case ('restricted') {
                                            <span class="badge badge-light theme-blue"> Restricted </span>
                                            } }
                                        </div>
                                    </td>
                                </ng-container>

                                <!-- File Size Column -->
                                <ng-container matColumnDef="fileSize">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ keysMap.fileSize }}</th>
                                    <td mat-cell *matCellDef="let element">
                                        <p class="mat-mobile-label">{{ keysMap.fileSize }}</p>
                                        <div>
                                            {{ element.fileSize }}
                                        </div>
                                    </td>
                                </ng-container>

                                <!-- Action Column -->
                                <ng-container matColumnDef="action">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ keysMap.action }}</th>
                                    <td mat-cell *matCellDef="let element">
                                        <button matIconButton [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
                                            <mat-icon class="material-icons-outlined">more_vert</mat-icon>
                                        </button>
                                        <mat-menu #menu="matMenu">
                                            <button mat-menu-item (click)="openEditDialog(element)">
                                                <mat-icon class="material-icons-outlined">edit</mat-icon>
                                                <span>Edit</span>
                                            </button>
                                            <button mat-menu-item>
                                                <mat-icon class="material-icons-outlined">delete_forever</mat-icon>
                                                <span>Delete</span>
                                            </button>
                                        </mat-menu>
                                    </td>
                                </ng-container>

                                <!-- Header and row definitions -->
                                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                                <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

                                <!-- No data row -->
                                <tr class="mat-row" *matNoDataRow>
                                    <td class="mat-cell" [attr.colspan]="displayedColumns.length">No files found matching the filter "{{ input.value }}"</td>
                                </tr>
                            </table>

                            <!-- Paginator -->
                            <mat-paginator class="bg-none" [pageSizeOptions]="[5, 10, 25, 100]" showFirstLastButtons></mat-paginator>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
        </div>
    `,
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }]
  }], () => [{ type: Renderer2 }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplorerComponent, { className: "ExplorerComponent", filePath: "src/app/pages/app/applications/explorer/explorer.component.ts", lineNumber: 911 });
})();
export {
  ExplorerComponent
};
//# sourceMappingURL=explorer.component-EIXKPYWF.js.map
