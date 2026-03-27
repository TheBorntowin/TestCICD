import {
  CheckoutStateService
} from "./chunk-7OG4Z52K.js";
import {
  BillingService
} from "./chunk-BL2Y4C67.js";
import {
  MatDividerModule
} from "./chunk-CWBJY2AK.js";
import {
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
  AuthService
} from "./chunk-BMFQEZMK.js";
import {
  Router
} from "./chunk-DYOMXT5J.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import "./chunk-XPQBAS5O.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  BidiModule,
  CommonModule,
  MatIcon,
  MatIconModule,
  NgTemplateOutlet,
  _getAnimationsState,
  isPlatformBrowser
} from "./chunk-ZG6WBW2I.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// node_modules/@angular/material/fesm2022/progress-spinner.mjs
var _c0 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "circle", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("viewBox", ctx_r0._viewBox());
    \u0275\u0275advance();
    \u0275\u0275styleProp("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
    \u0275\u0275attribute("r", ctx_r0._circleRadius());
  }
}
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: () => ({
    diameter: BASE_SIZE
  })
});
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var MatProgressSpinner = class _MatProgressSpinner {
  _elementRef = inject(ElementRef);
  _noopAnimations;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  _determinateCircle;
  constructor() {
    const defaults = inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS);
    const animationsState = _getAnimationsState();
    const element = this._elementRef.nativeElement;
    this._noopAnimations = animationsState === "di-disabled" && !!defaults && !defaults._forceAnimations;
    this.mode = element.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
    if (!this._noopAnimations && animationsState === "reduced-motion") {
      element.classList.add("mat-progress-spinner-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
  }
  mode;
  get value() {
    return this.mode === "determinate" ? this._value : 0;
  }
  set value(v) {
    this._value = Math.max(0, Math.min(100, v || 0));
  }
  _value = 0;
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = size || 0;
  }
  _diameter = BASE_SIZE;
  get strokeWidth() {
    return this._strokeWidth ?? this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = value || 0;
  }
  _strokeWidth;
  _circleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  _viewBox() {
    const viewBox = this._circleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  _strokeCircumference() {
    return 2 * Math.PI * this._circleRadius();
  }
  _strokeDashOffset() {
    if (this.mode === "determinate") {
      return this._strokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  _circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  static \u0275fac = function MatProgressSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressSpinner,
    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
    viewQuery: function MatProgressSpinner_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._determinateCircle = _t.first);
      }
    },
    hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
    hostVars: 18,
    hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275styleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--mat-progress-spinner-size", ctx.diameter + "px")("--mat-progress-spinner-active-indicator-width", ctx.diameter + "px");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
      }
    },
    inputs: {
      color: "color",
      mode: "mode",
      value: [2, "value", "value", numberAttribute],
      diameter: [2, "diameter", "diameter", numberAttribute],
      strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute]
    },
    exportAs: ["matProgressSpinner"],
    decls: 14,
    vars: 11,
    consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
    template: function MatProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 2, 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 3);
        \u0275\u0275element(5, "circle", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275elementContainer(9, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275elementContainer(11, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275elementContainer(13, 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const circle_r2 = \u0275\u0275reference(1);
        \u0275\u0275advance(4);
        \u0275\u0275attribute("viewBox", ctx._viewBox());
        \u0275\u0275advance();
        \u0275\u0275styleProp("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
        \u0275\u0275attribute("r", ctx._circleRadius());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
      }
    },
    dependencies: [NgTemplateOutlet],
    styles: [".mat-mdc-progress-spinner{--mat-progress-spinner-animation-multiplier: 1;display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mat-progress-spinner-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mat-progress-spinner-reduced-motion{--mat-progress-spinner-animation-multiplier: 1.25}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate calc(1568.2352941176ms*var(--mat-progress-spinner-animation-multiplier)) linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate calc(5332ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinner, [{
    type: Component,
    args: [{
      selector: "mat-progress-spinner, mat-spinner",
      exportAs: "matProgressSpinner",
      host: {
        "role": "progressbar",
        "class": "mat-mdc-progress-spinner mdc-circular-progress",
        "tabindex": "-1",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[style.--mat-progress-spinner-size]": 'diameter + "px"',
        "[style.--mat-progress-spinner-active-indicator-width]": 'diameter + "px"',
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet],
      template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-progress-spinner{--mat-progress-spinner-animation-multiplier: 1;display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mat-progress-spinner-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mat-progress-spinner-reduced-motion{--mat-progress-spinner-animation-multiplier: 1.25}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate calc(1568.2352941176ms*var(--mat-progress-spinner-animation-multiplier)) linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate calc(5332ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _determinateCircle: [{
      type: ViewChild,
      args: ["determinateSpinner"]
    }],
    mode: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    diameter: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var MatSpinner = MatProgressSpinner;
var MatProgressSpinnerModule = class _MatProgressSpinnerModule {
  static \u0275fac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressSpinnerModule,
    imports: [MatProgressSpinner, MatSpinner],
    exports: [MatProgressSpinner, MatSpinner, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressSpinner, MatSpinner],
      exports: [MatProgressSpinner, MatSpinner, BidiModule]
    }]
  }], null, null);
})();

// src/app/billing/services/pending-payments.service.ts
var KEY = "cmp_pending_payments";
var PendingPaymentsService = class _PendingPaymentsService {
  constructor() {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.pendingPayments = signal([], ...ngDevMode ? [{ debugName: "pendingPayments" }] : (
      /* istanbul ignore next */
      []
    ));
    this.load();
  }
  load() {
    if (!this.isBrowser)
      return;
    try {
      const raw = localStorage.getItem(KEY);
      if (raw)
        this.pendingPayments.set(JSON.parse(raw));
    } catch (e) {
      localStorage.removeItem(KEY);
    }
  }
  save() {
    if (this.isBrowser)
      localStorage.setItem(KEY, JSON.stringify(this.pendingPayments()));
  }
  addPending(payment, request) {
    const list = [...this.pendingPayments(), { payment, request, submittedAt: (/* @__PURE__ */ new Date()).toISOString() }];
    this.pendingPayments.set(list);
    this.save();
  }
  accept(paymentId) {
    const item = this.pendingPayments().find((p) => p.payment.paymentId === paymentId);
    this.remove(paymentId);
    return item;
  }
  reject(paymentId) {
    this.remove(paymentId);
  }
  remove(paymentId) {
    this.pendingPayments.set(this.pendingPayments().filter((p) => p.payment.paymentId !== paymentId));
    this.save();
  }
  static {
    this.\u0275fac = function PendingPaymentsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PendingPaymentsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PendingPaymentsService, factory: _PendingPaymentsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingPaymentsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/billing/pages/payment/payment.component.ts
function PaymentComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon", 11);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 12);
    \u0275\u0275text(4, "No checkout session. Please start over.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function PaymentComponent_Conditional_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPricing());
    });
    \u0275\u0275text(6, "Back to Pricing");
    \u0275\u0275elementEnd()();
  }
}
function PaymentComponent_Conditional_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2, "Plan:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 33)(6, "span", 34);
    \u0275\u0275text(7, "Billing Cycle:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 36);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 33)(11, "span", 34);
    \u0275\u0275text(12, "Organization:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 36);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 33)(16, "span", 34);
    \u0275\u0275text(17, "Users:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 36);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "hr", 37);
    \u0275\u0275elementStart(21, "div", 38)(22, "span", 34);
    \u0275\u0275text(23, "Subtotal:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 35);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 39)(27, "mat-icon");
    \u0275\u0275text(28, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Your subscription will be activated immediately upon payment.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const s_r4 = \u0275\u0275readContextLet(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r4.plan.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r4.billingCycle === "monthly" ? "Monthly" : "Annual");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r4.orgName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(s_r4.numUsers);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.totalDisplay());
  }
}
function PaymentComponent_Conditional_19_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Cardholder name is required");
    \u0275\u0275elementEnd();
  }
}
function PaymentComponent_Conditional_19_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Enter a valid 16-digit card number");
    \u0275\u0275elementEnd();
  }
}
function PaymentComponent_Conditional_19_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Enter valid expiry");
    \u0275\u0275elementEnd();
  }
}
function PaymentComponent_Conditional_19_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "Enter valid CVV");
    \u0275\u0275elementEnd();
  }
}
function PaymentComponent_Conditional_19_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 40);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Processing\u2026");
    \u0275\u0275elementEnd();
  }
}
function PaymentComponent_Conditional_19_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Pay ", ctx_r1.totalDisplay(), " ");
  }
}
function PaymentComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 14)(2, "div", 15)(3, "h5", 16);
    \u0275\u0275text(4, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(5);
    \u0275\u0275conditionalCreate(6, PaymentComponent_Conditional_19_Conditional_6_Template, 31, 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 17)(8, "div", 18)(9, "h5", 19);
    \u0275\u0275text(10, "Card Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "form", 20);
    \u0275\u0275listener("ngSubmit", function PaymentComponent_Conditional_19_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(12, "div", 21);
    \u0275\u0275element(13, "input", 22);
    \u0275\u0275conditionalCreate(14, PaymentComponent_Conditional_19_Conditional_14_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 24)(16, "input", 25);
    \u0275\u0275listener("input", function PaymentComponent_Conditional_19_Template_input_input_16_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fmtCard($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-icon", 26);
    \u0275\u0275text(18, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, PaymentComponent_Conditional_19_Conditional_19_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 27)(21, "div", 21)(22, "input", 28);
    \u0275\u0275listener("input", function PaymentComponent_Conditional_19_Template_input_input_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.fmtExpiry($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, PaymentComponent_Conditional_19_Conditional_23_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 21);
    \u0275\u0275element(25, "input", 29);
    \u0275\u0275conditionalCreate(26, PaymentComponent_Conditional_19_Conditional_26_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 30)(28, "button", 31);
    \u0275\u0275listener("click", function PaymentComponent_Conditional_19_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(29, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 32);
    \u0275\u0275conditionalCreate(31, PaymentComponent_Conditional_19_Conditional_31_Template, 3, 0)(32, PaymentComponent_Conditional_19_Conditional_32_Template, 1, 1);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    const s_r5 = \u0275\u0275storeLet(ctx_r1.checkoutState.checkoutState());
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r5 ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.payForm);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.pf["cardHolder"].invalid && ctx_r1.pf["cardHolder"].touched ? 14 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.pf["cardNumber"].invalid && ctx_r1.pf["cardNumber"].touched ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.pf["expiry"].invalid && ctx_r1.pf["expiry"].touched ? 23 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.pf["cvv"].invalid && ctx_r1.pf["cvv"].touched ? 26 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.payForm.invalid || ctx_r1.isSubmitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSubmitting() ? 31 : 32);
  }
}
var PaymentComponent = class _PaymentComponent {
  constructor() {
    this.isSubmitting = signal(false, ...ngDevMode ? [{ debugName: "isSubmitting" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.authService = inject(AuthService);
    this.checkoutState = inject(CheckoutStateService);
    this.billing = inject(BillingService);
    this.pendingSvc = inject(PendingPaymentsService);
    this.payForm = this.fb.group({
      cardHolder: ["", Validators.required],
      cardNumber: ["", [Validators.required, Validators.pattern(/^\d{4} \d{4} \d{4} \d{4}$/)]],
      expiry: ["", [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
      cvv: ["", [Validators.required, Validators.pattern(/^\d{3,4}$/)]]
    });
  }
  get pf() {
    return this.payForm.controls;
  }
  totalDisplay() {
    const s = this.checkoutState.checkoutState();
    if (!s)
      return "";
    const plan = s.plan;
    if (plan.onRequest)
      return "Custom";
    const price = s.billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice;
    return `$ ${price}.00`;
  }
  ngOnInit() {
    if (!this.checkoutState.hasState()) {
      this.router.navigate(["/billing/pricing"]);
    }
  }
  fmtCard(e) {
    let v = e.target.value.replace(/\D/g, "").substring(0, 16);
    v = v.replace(/(.{4})/g, "$1 ").trim();
    this.payForm.get("cardNumber")?.setValue(v, { emitEvent: false });
    e.target.value = v;
  }
  fmtExpiry(e) {
    let v = e.target.value.replace(/\D/g, "").substring(0, 4);
    if (v.length > 2)
      v = v.substring(0, 2) + "/" + v.substring(2);
    this.payForm.get("expiry")?.setValue(v, { emitEvent: false });
    e.target.value = v;
  }
  submit() {
    if (this.payForm.invalid || !this.checkoutState.hasState()) {
      this.payForm.markAllAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    const s = this.checkoutState.checkoutState();
    const v = this.payForm.value;
    const payload = {
      planId: s.plan.id,
      orgType: s.orgType,
      billingCycle: s.billingCycle,
      orgName: s.orgName,
      adminEmail: s.adminEmail,
      adminName: s.adminName,
      phone: s.phone,
      numUsers: s.numUsers,
      address: s.address,
      vatNumber: s.vatNumber,
      department: s.department,
      cardHolder: v.cardHolder,
      cardNumber: v.cardNumber.replace(/\s/g, ""),
      expiryDate: v.expiry,
      cvv: v.cvv
    };
    this.billing.submitPayment(payload).subscribe({
      next: (res) => {
        this.isSubmitting.set(false);
        this.pendingSvc.addPending(res, payload);
        this.checkoutState.clear();
        const isLoggedIn = !!this.authService.getToken() && !!this.authService.currentUser();
        const route = isLoggedIn ? "/app/upgrade-confirmation" : "/billing/confirmation";
        this.router.navigate([route], {
          state: { payment: res, email: s.adminEmail, orgName: s.orgName }
        });
      },
      error: () => {
        this.isSubmitting.set(false);
      }
    });
  }
  goBack() {
    this.router.navigate(["/billing/checkout"]);
  }
  goToPricing() {
    this.router.navigate(["/billing/pricing"]);
  }
  static {
    this.\u0275fac = function PaymentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentComponent, selectors: [["app-payment"]], decls: 20, vars: 1, consts: [[1, "pay-page"], [1, "container", "py-4", "py-lg-5", 2, "max-width", "900px"], [1, "pay-title", "text-center", "mb-4"], [1, "stepper-row", "mb-4"], [1, "step-item", "done"], [1, "step-circle"], [1, "step-label"], [1, "step-line"], [1, "step-item", "active"], [1, "text-center", "py-5"], [1, "pay-grid"], [2, "font-size", "56px", "opacity", ".25"], [1, "text-secondary", "mt-3"], ["matButton", "filled", 3, "click"], [1, "summary-col"], [1, "summary-box"], [1, "summary-heading"], [1, "card-col"], [1, "card-box"], [1, "card-heading"], [3, "ngSubmit", "formGroup"], [1, "field-group"], ["formControlName", "cardHolder", "placeholder", "Cardholder Name*", "type", "text", "autocomplete", "cc-name", 1, "pay-input"], [1, "err"], [1, "field-group", "field-icon-right"], ["formControlName", "cardNumber", "placeholder", "Card Number*", "maxlength", "19", "autocomplete", "cc-number", 1, "pay-input", 3, "input"], [1, "input-icon"], [1, "field-row"], ["formControlName", "expiry", "placeholder", "Expiry (MM/YY)*", "maxlength", "5", "autocomplete", "cc-exp", 1, "pay-input", 3, "input"], ["formControlName", "cvv", "placeholder", "CVV*", "maxlength", "4", "type", "password", "autocomplete", "cc-csc", 1, "pay-input"], [1, "form-actions"], ["type", "button", "matButton", "", 1, "back-btn", 3, "click"], ["type", "submit", "matButton", "filled", 1, "pay-btn", 3, "disabled"], [1, "summary-row"], [1, "sl"], [1, "sv", "fw-bold"], [1, "sv"], [1, "summary-hr"], [1, "summary-row", "total-row"], [1, "summary-notice"], ["diameter", "18", "mode", "indeterminate"]], template: function PaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3, "Complete Your Subscription");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "mat-icon");
        \u0275\u0275text(8, "check");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "span", 6);
        \u0275\u0275text(10, "Organization Info");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "div", 7);
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 5)(14, "span");
        \u0275\u0275text(15, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "span", 6);
        \u0275\u0275text(17, "Payment");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(18, PaymentComponent_Conditional_18_Template, 7, 0, "div", 9)(19, PaymentComponent_Conditional_19_Template, 33, 9, "div", 10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275conditional(!ctx.checkoutState.hasState() ? 18 : 19);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MaxLengthValidator,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatCardModule,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatFormFieldModule,
      MatDividerModule,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], styles: ["\n\n.pay-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  background: #f0f4fa;\n}\n.pay-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--bs-body-color);\n  letter-spacing: -.3px;\n}\n.stepper-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  position: relative;\n}\n.step-circle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: .9rem;\n  font-weight: 700;\n  border: 2px solid #cbd5e1;\n  background: #fff;\n  color: #94a3b8;\n  transition: all .25s;\n}\n.step-circle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: .85rem;\n  font-weight: 600;\n  color: #94a3b8;\n  white-space: nowrap;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: #fff;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: #2563eb;\n  border-color: #2563eb;\n  color: #fff;\n  box-shadow: 0 0 0 4px rgba(37, 99, 235, .18);\n}\n.step-item.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 700;\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #cbd5e1;\n  min-width: 120px;\n  margin: 0 12px;\n}\n.pay-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 700px) {\n  .pay-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .step-line[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n}\n.summary-box[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  border-radius: 16px;\n  padding: 24px;\n}\n.summary-heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  margin-bottom: 16px;\n  color: #1e40af;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n  font-size: .875rem;\n}\n.sl[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.sv[_ngcontent-%COMP%] {\n  color: var(--bs-body-color);\n  text-align: right;\n  max-width: 60%;\n}\n.summary-hr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #bfdbfe;\n  margin: 12px 0;\n}\n.total-row[_ngcontent-%COMP%]   .sl[_ngcontent-%COMP%], \n.total-row[_ngcontent-%COMP%]   .sv[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: .95rem;\n}\n.summary-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 7px;\n  margin-top: 12px;\n  font-size: .78rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n.summary-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  margin-top: 1px;\n  color: #2563eb;\n}\n.card-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 28px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, .07);\n  overflow: hidden;\n}\n.card-heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  margin-bottom: 20px;\n  color: var(--bs-body-color);\n}\n.field-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  position: relative;\n}\n.pay-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 18px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 50px;\n  font-size: .9rem;\n  outline: none;\n  background: #f8fafc;\n  transition: border-color .2s;\n  color: var(--bs-body-color);\n  box-sizing: border-box;\n}\n.pay-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #fff;\n}\n.pay-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.field-icon-right[_ngcontent-%COMP%]   .pay-input[_ngcontent-%COMP%] {\n  padding-right: 48px;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #94a3b8;\n  font-size: 20px;\n  pointer-events: none;\n}\n.err[_ngcontent-%COMP%] {\n  font-size: .75rem;\n  color: #ef4444;\n  padding-left: 14px;\n  margin-top: 2px;\n  display: block;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1px solid #f1f5f9;\n}\n.back-btn[_ngcontent-%COMP%] {\n  color: #64748b !important;\n  font-weight: 600 !important;\n  font-size: .9rem !important;\n}\n.pay-btn[_ngcontent-%COMP%] {\n  background: #2563eb !important;\n  color: #fff !important;\n  border-radius: 50px !important;\n  padding: 10px 32px !important;\n  font-weight: 700 !important;\n  font-size: .9rem !important;\n  display: flex !important;\n  align-items: center !important;\n  gap: 8px !important;\n  box-shadow: 0 4px 14px rgba(37, 99, 235, .35) !important;\n}\n.pay-btn[_ngcontent-%COMP%]:disabled {\n  opacity: .6 !important;\n  cursor: not-allowed !important;\n}\n/*# sourceMappingURL=payment.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentComponent, [{
    type: Component,
    args: [{
      selector: "app-payment",
      standalone: true,
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDividerModule,
        MatProgressSpinnerModule
      ],
      template: `
  <div class="pay-page">
    <div class="container py-4 py-lg-5" style="max-width:900px">

      <!-- Title -->
      <h2 class="pay-title text-center mb-4">Complete Your Subscription</h2>

      <!-- Stepper -->
      <div class="stepper-row mb-4">
        <div class="step-item done">
          <div class="step-circle"><mat-icon>check</mat-icon></div>
          <span class="step-label">Organization Info</span>
        </div>
        <div class="step-line"></div>
        <div class="step-item active">
          <div class="step-circle"><span>2</span></div>
          <span class="step-label">Payment</span>
        </div>
      </div>

      @if (!checkoutState.hasState()) {
        <div class="text-center py-5">
          <mat-icon style="font-size:56px;opacity:.25">error_outline</mat-icon>
          <p class="text-secondary mt-3">No checkout session. Please start over.</p>
          <button matButton="filled" (click)="goToPricing()">Back to Pricing</button>
        </div>
      } @else {

      <div class="pay-grid">

        <!-- \u2500\u2500 LEFT: Order Summary \u2500\u2500 -->
        <div class="summary-col">
          <div class="summary-box">
            <h5 class="summary-heading">Order Summary</h5>
            @let s = checkoutState.checkoutState();
            @if (s) {
              <div class="summary-row"><span class="sl">Plan:</span><span class="sv fw-bold">{{ s.plan.name }}</span></div>
              <div class="summary-row"><span class="sl">Billing Cycle:</span><span class="sv">{{ s.billingCycle === 'monthly' ? 'Monthly' : 'Annual' }}</span></div>
              <div class="summary-row"><span class="sl">Organization:</span><span class="sv">{{ s.orgName }}</span></div>
              <div class="summary-row"><span class="sl">Users:</span><span class="sv">{{ s.numUsers }}</span></div>
              <hr class="summary-hr">
              <div class="summary-row total-row">
                <span class="sl">Subtotal:</span>
                <span class="sv fw-bold">{{ totalDisplay() }}</span>
              </div>
              <div class="summary-notice">
                <mat-icon>check_circle</mat-icon>
                <span>Your subscription will be activated immediately upon payment.</span>
              </div>
            }
          </div>
        </div>

        <!-- \u2500\u2500 RIGHT: Card Form \u2500\u2500 -->
        <div class="card-col">
          <div class="card-box">
            <h5 class="card-heading">Card Information</h5>

            <form [formGroup]="payForm" (ngSubmit)="submit()">
              <div class="field-group">
                <input class="pay-input" formControlName="cardHolder"
                  placeholder="Cardholder Name*" type="text" autocomplete="cc-name">
                @if (pf['cardHolder'].invalid && pf['cardHolder'].touched) {
                  <span class="err">Cardholder name is required</span>
                }
              </div>

              <div class="field-group field-icon-right">
                <input class="pay-input" formControlName="cardNumber"
                  placeholder="Card Number*" maxlength="19"
                  (input)="fmtCard($event)" autocomplete="cc-number">
                <mat-icon class="input-icon">credit_card</mat-icon>
                @if (pf['cardNumber'].invalid && pf['cardNumber'].touched) {
                  <span class="err">Enter a valid 16-digit card number</span>
                }
              </div>

              <div class="field-row">
                <div class="field-group">
                  <input class="pay-input" formControlName="expiry"
                    placeholder="Expiry (MM/YY)*" maxlength="5"
                    (input)="fmtExpiry($event)" autocomplete="cc-exp">
                  @if (pf['expiry'].invalid && pf['expiry'].touched) {
                    <span class="err">Enter valid expiry</span>
                  }
                </div>
                <div class="field-group">
                  <input class="pay-input" formControlName="cvv"
                    placeholder="CVV*" maxlength="4" type="password" autocomplete="cc-csc">
                  @if (pf['cvv'].invalid && pf['cvv'].touched) {
                    <span class="err">Enter valid CVV</span>
                  }
                </div>
              </div>

              <!-- Actions -->
              <div class="form-actions">
                <button type="button" matButton class="back-btn" (click)="goBack()">Back</button>
                <button type="submit" matButton="filled" class="pay-btn"
                  [disabled]="payForm.invalid || isSubmitting()">
                  @if (isSubmitting()) {
                    <mat-progress-spinner diameter="18" mode="indeterminate"></mat-progress-spinner>
                    <span>Processing\u2026</span>
                  } @else {
                    Pay {{ totalDisplay() }}
                  }
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      }
    </div>
  </div>

  <style>
    .pay-page {
      min-height: 80vh;
      background: #f0f4fa;
    }

    .pay-title {
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--bs-body-color);
      letter-spacing: -.3px;
    }

    /* \u2500\u2500 Stepper \u2500\u2500 */
    .stepper-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      max-width: 500px;
      margin: 0 auto;
    }
    .step-item {
      display: flex;
      align-items: center;
      gap: 10px;
      position: relative;
    }
    .step-circle {
      width: 36px; height: 36px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: .9rem; font-weight: 700;
      border: 2px solid #cbd5e1;
      background: #fff;
      color: #94a3b8;
      transition: all .25s;
    }
    .step-circle mat-icon { font-size: 18px; width: 18px; height: 18px; }
    .step-label {
      font-size: .85rem; font-weight: 600; color: #94a3b8; white-space: nowrap;
    }
    .step-item.done .step-circle {
      background: #2563eb; border-color: #2563eb; color: #fff;
    }
    .step-item.done .step-label { color: #2563eb; }
    .step-item.active .step-circle {
      background: #2563eb; border-color: #2563eb; color: #fff;
      box-shadow: 0 0 0 4px rgba(37,99,235,.18);
    }
    .step-item.active .step-label { color: #2563eb; font-weight: 700; }
    .step-line {
      flex: 1; height: 2px; background: #cbd5e1;
      min-width: 120px; margin: 0 12px;
    }

    /* \u2500\u2500 2-col grid \u2500\u2500 */
    .pay-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 24px;
      align-items: start;
    }
    @media (max-width: 700px) {
      .pay-grid { grid-template-columns: 1fr; }
      .step-line { min-width: 60px; }
    }

    /* \u2500\u2500 Summary Box \u2500\u2500 */
    .summary-box {
      background: #dbeafe;
      border-radius: 16px;
      padding: 24px;
    }
    .summary-heading {
      font-weight: 700; font-size: 1rem; margin-bottom: 16px;
      color: #1e40af;
    }
    .summary-row {
      display: flex; justify-content: space-between;
      align-items: flex-start; margin-bottom: 10px;
      font-size: .875rem;
    }
    .sl { color: #64748b; }
    .sv { color: var(--bs-body-color); text-align: right; max-width: 60%; }
    .summary-hr { border: none; border-top: 1px solid #bfdbfe; margin: 12px 0; }
    .total-row .sl,.total-row .sv { font-weight: 700; font-size: .95rem; }
    .summary-notice {
      display: flex; align-items: flex-start; gap: 7px;
      margin-top: 12px; font-size: .78rem; color: #64748b; line-height: 1.4;
    }
    .summary-notice mat-icon {
      font-size: 15px; width: 15px; height: 15px;
      flex-shrink: 0; margin-top: 1px; color: #2563eb;
    }

    /* \u2500\u2500 Card Box \u2500\u2500 */
    .card-box {
      background: #fff;
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 2px 16px rgba(0,0,0,.07);
      overflow: hidden;
    }
    .card-heading {
      font-weight: 700; font-size: 1rem; margin-bottom: 20px;
      color: var(--bs-body-color);
    }

    /* Fields */
    .field-group { margin-bottom: 14px; position: relative; }
    .pay-input {
      width: 100%; padding: 14px 18px;
      border: 1.5px solid #e2e8f0; border-radius: 50px;
      font-size: .9rem; outline: none; background: #f8fafc;
      transition: border-color .2s;
      color: var(--bs-body-color);
      box-sizing: border-box;
    }
    .pay-input:focus { border-color: #2563eb; background: #fff; }
    .pay-input::placeholder { color: #94a3b8; }
    .field-icon-right .pay-input { padding-right: 48px; }
    .input-icon {
      position: absolute; right: 16px; top: 50%; transform: translateY(-50%);
      color: #94a3b8; font-size: 20px; pointer-events: none;
    }
    .err { font-size: .75rem; color: #ef4444; padding-left: 14px; margin-top: 2px; display: block; }

    .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

    /* Actions bar */
    .form-actions {
      display: flex; align-items: center; justify-content: space-between;
      margin-top: 24px; padding-top: 20px;
      border-top: 1px solid #f1f5f9;
    }
    .back-btn {
      color: #64748b !important; font-weight: 600 !important;
      font-size: .9rem !important;
    }
    .pay-btn {
      background: #2563eb !important; color: #fff !important;
      border-radius: 50px !important; padding: 10px 32px !important;
      font-weight: 700 !important; font-size: .9rem !important;
      display: flex !important; align-items: center !important; gap: 8px !important;
      box-shadow: 0 4px 14px rgba(37,99,235,.35) !important;
    }
    .pay-btn:disabled { opacity: .6 !important; cursor: not-allowed !important; }
  </style>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentComponent, { className: "PaymentComponent", filePath: "src/app/billing/pages/payment/payment.component.ts", lineNumber: 293 });
})();
export {
  PaymentComponent
};
//# sourceMappingURL=payment.component-ZJBWZTVN.js.map
