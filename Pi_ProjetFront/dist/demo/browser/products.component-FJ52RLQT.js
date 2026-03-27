import {
  IncrementorComponent
} from "./chunk-5BURJXX5.js";
import {
  register
} from "./chunk-S5VFQUTS.js";
import {
  MatExpansionModule
} from "./chunk-BPWI3AKS.js";
import {
  MatBadge,
  MatBadgeModule
} from "./chunk-GNK5HPR7.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-A5PEKAIR.js";
import "./chunk-U4HYU23P.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-6EYB3LWQ.js";
import "./chunk-5NBIR3PL.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-45QHUHCH.js";
import "./chunk-7XFTNJ2Y.js";
import {
  MatCard,
  MatCardContent,
  MatCardImage,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatButton,
  MatButtonModule,
  MatIconButton,
  MatMiniFabButton,
  MatRipple,
  MatRippleModule,
  RippleState,
  _StructuralStylesLoader
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
  FormsModule,
  NG_VALUE_ACCESSOR
} from "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  BidiModule,
  CommonModule,
  Directionality,
  MatIcon,
  MatIconModule,
  Platform,
  _CdkPrivateStyleLoader,
  _animationsDisabled
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  Subject,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// node_modules/@angular/material/fesm2022/slider.mjs
var _c0 = ["knob"];
var _c1 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 1)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.valueIndicatorText);
  }
}
var _c2 = ["trackActive"];
var _c3 = ["*"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const tickMark_r1 = ctx.$implicit;
    const \u0275$index_14_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(tickMark_r1 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    \u0275\u0275styleProp("transform", ctx_r2._calcTickMarkTransform(\u0275$index_14_r2));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 8, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6, 1);
    \u0275\u0275conditionalCreate(2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-slider-visual-thumb", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
var _MatThumb;
(function(_MatThumb2) {
  _MatThumb2[_MatThumb2["START"] = 1] = "START";
  _MatThumb2[_MatThumb2["END"] = 2] = "END";
})(_MatThumb || (_MatThumb = {}));
var _MatTickMark;
(function(_MatTickMark2) {
  _MatTickMark2[_MatTickMark2["ACTIVE"] = 0] = "ACTIVE";
  _MatTickMark2[_MatTickMark2["INACTIVE"] = 1] = "INACTIVE";
})(_MatTickMark || (_MatTickMark = {}));
var MAT_SLIDER = new InjectionToken("_MatSlider");
var MAT_SLIDER_THUMB = new InjectionToken("_MatSliderThumb");
var MAT_SLIDER_RANGE_THUMB = new InjectionToken("_MatSliderRangeThumb");
var MAT_SLIDER_VISUAL_THUMB = new InjectionToken("_MatSliderVisualThumb");
var MatSliderVisualThumb = class _MatSliderVisualThumb {
  _cdr = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _slider = inject(MAT_SLIDER);
  _renderer = inject(Renderer2);
  _listenerCleanups;
  discrete = false;
  thumbPosition;
  valueIndicatorText;
  _ripple;
  _knob;
  _valueIndicatorContainer;
  _sliderInput;
  _sliderInputEl;
  _hoverRippleRef;
  _focusRippleRef;
  _activeRippleRef;
  _isHovered = false;
  _isActive = false;
  _isValueIndicatorVisible = false;
  _hostElement = inject(ElementRef).nativeElement;
  _platform = inject(Platform);
  constructor() {
  }
  ngAfterViewInit() {
    const sliderInput = this._slider._getInput(this.thumbPosition);
    if (!sliderInput) {
      return;
    }
    this._ripple.radius = 24;
    this._sliderInput = sliderInput;
    this._sliderInputEl = this._sliderInput._hostElement;
    this._ngZone.runOutsideAngular(() => {
      const input = this._sliderInputEl;
      const renderer = this._renderer;
      this._listenerCleanups = [renderer.listen(input, "pointermove", this._onPointerMove), renderer.listen(input, "pointerdown", this._onDragStart), renderer.listen(input, "pointerup", this._onDragEnd), renderer.listen(input, "pointerleave", this._onMouseLeave), renderer.listen(input, "focus", this._onFocus), renderer.listen(input, "blur", this._onBlur)];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
  }
  _onPointerMove = (event) => {
    if (this._sliderInput._isFocused) {
      return;
    }
    const rect = this._hostElement.getBoundingClientRect();
    const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
    this._isHovered = isHovered;
    if (isHovered) {
      this._showHoverRipple();
    } else {
      this._hideRipple(this._hoverRippleRef);
    }
  };
  _onMouseLeave = () => {
    this._isHovered = false;
    this._hideRipple(this._hoverRippleRef);
  };
  _onFocus = () => {
    this._hideRipple(this._hoverRippleRef);
    this._showFocusRipple();
    this._hostElement.classList.add("mdc-slider__thumb--focused");
  };
  _onBlur = () => {
    if (!this._isActive) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._isHovered) {
      this._showHoverRipple();
    }
    this._hostElement.classList.remove("mdc-slider__thumb--focused");
  };
  _onDragStart = (event) => {
    if (event.button !== 0) {
      return;
    }
    this._isActive = true;
    this._showActiveRipple();
  };
  _onDragEnd = () => {
    this._isActive = false;
    this._hideRipple(this._activeRippleRef);
    if (!this._sliderInput._isFocused) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._platform.SAFARI) {
      this._showHoverRipple();
    }
  };
  _showHoverRipple() {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      });
      this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple");
    }
  }
  _showFocusRipple() {
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      }, true);
      this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple");
    }
  }
  _showActiveRipple() {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({
        enterDuration: 225,
        exitDuration: 400
      });
      this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple");
    }
  }
  _isShowingRipple(rippleRef) {
    return rippleRef?.state === RippleState.FADING_IN || rippleRef?.state === RippleState.VISIBLE;
  }
  _showRipple(animation, ignoreGlobalRippleConfig) {
    if (this._slider.disabled) {
      return;
    }
    this._showValueIndicator();
    if (this._slider._isRange) {
      const sibling = this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
      sibling._showValueIndicator();
    }
    if (this._slider._globalRippleOptions?.disabled && !ignoreGlobalRippleConfig) {
      return;
    }
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {
        enterDuration: 0,
        exitDuration: 0
      } : animation,
      centered: true,
      persistent: true
    });
  }
  _hideRipple(rippleRef) {
    rippleRef?.fadeOut();
    if (this._isShowingAnyRipple()) {
      return;
    }
    if (!this._slider._isRange) {
      this._hideValueIndicator();
    }
    const sibling = this._getSibling();
    if (!sibling._isShowingAnyRipple()) {
      this._hideValueIndicator();
      sibling._hideValueIndicator();
    }
  }
  _showValueIndicator() {
    this._hostElement.classList.add("mdc-slider__thumb--with-indicator");
  }
  _hideValueIndicator() {
    this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");
  }
  _getSibling() {
    return this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
  }
  _getValueIndicatorContainer() {
    return this._valueIndicatorContainer?.nativeElement;
  }
  _getKnob() {
    return this._knob.nativeElement;
  }
  _isShowingAnyRipple() {
    return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
  }
  static \u0275fac = function MatSliderVisualThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderVisualThumb)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSliderVisualThumb,
    selectors: [["mat-slider-visual-thumb"]],
    viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatRipple, 5)(_c0, 5)(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._ripple = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._knob = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._valueIndicatorContainer = _t.first);
      }
    },
    hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
    inputs: {
      discrete: "discrete",
      thumbPosition: "thumbPosition",
      valueIndicatorText: "valueIndicatorText"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER_VISUAL_THUMB,
      useExisting: _MatSliderVisualThumb
    }])],
    decls: 4,
    vars: 2,
    consts: [["knob", ""], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["matRipple", "", 1, "mat-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
    template: function MatSliderVisualThumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 2);
        \u0275\u0275element(1, "div", 3, 0)(3, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.discrete ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", true);
      }
    },
    dependencies: [MatRipple],
    styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderVisualThumb, [{
    type: Component,
    args: [{
      selector: "mat-slider-visual-thumb",
      host: {
        "class": "mdc-slider__thumb mat-mdc-slider-visual-thumb"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }],
      imports: [MatRipple],
      template: '@if (discrete) {\n  <div class="mdc-slider__value-indicator-container" #valueIndicatorContainer>\n    <div class="mdc-slider__value-indicator">\n      <span class="mdc-slider__value-indicator-text">{{valueIndicatorText}}</span>\n    </div>\n  </div>\n}\n<div class="mdc-slider__thumb-knob" #knob></div>\n<div matRipple class="mat-focus-indicator" [matRippleDisabled]="true"></div>\n',
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}\n"]
    }]
  }], () => [], {
    discrete: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    valueIndicatorText: [{
      type: Input
    }],
    _ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    _knob: [{
      type: ViewChild,
      args: ["knob"]
    }],
    _valueIndicatorContainer: [{
      type: ViewChild,
      args: ["valueIndicatorContainer"]
    }]
  });
})();
var MatSlider = class _MatSlider {
  _ngZone = inject(NgZone);
  _cdr = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  _trackActive;
  _thumbs;
  _input;
  _inputs;
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  _disabled = false;
  get discrete() {
    return this._discrete;
  }
  set discrete(v) {
    this._discrete = v;
    this._updateValueIndicatorUIs();
  }
  _discrete = false;
  get showTickMarks() {
    return this._showTickMarks;
  }
  set showTickMarks(value) {
    this._showTickMarks = value;
    if (this._hasViewInitialized) {
      this._updateTickMarkUI();
      this._updateTickMarkTrackUI();
    }
  }
  _showTickMarks = false;
  get min() {
    return this._min;
  }
  set min(v) {
    const min = v === void 0 || v === null || isNaN(v) ? this._min : v;
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  _min = 0;
  color;
  disableRipple = false;
  _updateMin(min) {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({
      old: prevMin,
      new: min
    }) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }
  _updateMinRange(min) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMinNonRange(min) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.min = min;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  get max() {
    return this._max;
  }
  set max(v) {
    const max = v === void 0 || v === null || isNaN(v) ? this._max : v;
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  _max = 100;
  _updateMax(max) {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({
      old: prevMax,
      new: max
    }) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }
  _updateMaxRange(max) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMaxNonRange(max) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.max = max;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  get step() {
    return this._step;
  }
  set step(v) {
    const step = isNaN(v) ? this._step : v;
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  _step = 1;
  _updateStep(step) {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }
  _updateStepRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    const prevStartValue = startInput.value;
    endInput.min = this._min;
    startInput.max = this._max;
    endInput.step = this._step;
    startInput.step = this._step;
    if (this._platform.SAFARI) {
      endInput.value = endInput.value;
      startInput.value = startInput.value;
    }
    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateStepNonRange() {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.step = this._step;
      if (this._platform.SAFARI) {
        input.value = input.value;
      }
      input._updateThumbUIByValue();
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  displayWith = (value) => `${value}`;
  _tickMarks;
  _noopAnimations = _animationsDisabled();
  _dirChangeSubscription;
  _resizeObserver = null;
  _cachedWidth;
  _cachedLeft;
  _rippleRadius = 24;
  startValueIndicatorText = "";
  endValueIndicatorText = "";
  _endThumbTransform;
  _startThumbTransform;
  _isRange = false;
  _isRtl = false;
  _hasViewInitialized = false;
  _tickMarkTrackWidth = 0;
  _hasAnimation = false;
  _resizeTimer = null;
  _platform = inject(Platform);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    if (this._dir) {
      this._dirChangeSubscription = this._dir.change.subscribe(() => this._onDirChange());
      this._isRtl = this._dir.value === "rtl";
    }
  }
  _knobRadius = 8;
  _inputPadding;
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._updateDimensions();
    }
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    this._isRange = !!eInput && !!sInput;
    this._cdr.detectChanges();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(_MatThumb.END), this._getInput(_MatThumb.START));
    }
    const thumb = this._getThumb(_MatThumb.END);
    this._rippleRadius = thumb._ripple.radius;
    this._inputPadding = this._rippleRadius - this._knobRadius;
    this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
    this._updateTrackUI(eInput);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._observeHostResize();
    this._cdr.detectChanges();
  }
  _initUINonRange(eInput) {
    eInput.initProps();
    eInput.initUI();
    this._updateValueIndicatorUI(eInput);
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
  }
  _initUIRange(eInput, sInput) {
    eInput.initProps();
    eInput.initUI();
    sInput.initProps();
    sInput.initUI();
    eInput._updateMinMax();
    sInput._updateMinMax();
    eInput._updateStaticStyles();
    sInput._updateStaticStyles();
    this._updateValueIndicatorUIs();
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
    sInput._updateThumbUIByValue();
  }
  ngOnDestroy() {
    this._dirChangeSubscription?.unsubscribe();
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  _onDirChange() {
    this._isRtl = this._dir?.value === "rtl";
    this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
    this._updateTickMarkUI();
  }
  _onDirChangeRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    endInput._setIsLeftThumb();
    startInput._setIsLeftThumb();
    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();
    endInput._updateStaticStyles();
    startInput._updateStaticStyles();
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }
  _onDirChangeNonRange() {
    const input = this._getInput(_MatThumb.END);
    input._updateThumbUIByValue();
  }
  _observeHostResize() {
    if (typeof ResizeObserver === "undefined" || !ResizeObserver) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._isActive()) {
          return;
        }
        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }
        this._onResize();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }
  _isActive() {
    return this._getThumb(_MatThumb.START)._isActive || this._getThumb(_MatThumb.END)._isActive;
  }
  _getValue(thumbPosition = _MatThumb.END) {
    const input = this._getInput(thumbPosition);
    if (!input) {
      return this.min;
    }
    return input.value;
  }
  _skipUpdate() {
    return !!(this._getInput(_MatThumb.START)?._skipUIUpdate || this._getInput(_MatThumb.END)?._skipUIUpdate);
  }
  _updateDimensions() {
    this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
    this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
  }
  _setTrackActiveStyles(styles) {
    const trackStyle = this._trackActive.nativeElement.style;
    trackStyle.left = styles.left;
    trackStyle.right = styles.right;
    trackStyle.transformOrigin = styles.transformOrigin;
    trackStyle.transform = styles.transform;
  }
  _calcTickMarkTransform(index) {
    const offset = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
    const translateX = this._isRtl ? this._cachedWidth - 6 - offset : offset;
    return `translateX(${translateX}px)`;
  }
  _onTranslateXChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._updateOverlappingThumbUI(source);
  }
  _onTranslateXChangeBySideEffect(input1, input2) {
    if (!this._hasViewInitialized) {
      return;
    }
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }
  _onValueChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.detectChanges();
  }
  _onMinMaxOrStepChange() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }
  _onResize() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateDimensions();
    if (this._isRange) {
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateWidthInactive();
      sInput._updateWidthInactive();
    } else {
      const eInput = this._getInput(_MatThumb.END);
      if (eInput) {
        eInput._updateThumbUIByValue();
      }
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.detectChanges();
  }
  _thumbsOverlap = false;
  _areThumbsOverlapping() {
    const startInput = this._getInput(_MatThumb.START);
    const endInput = this._getInput(_MatThumb.END);
    if (!startInput || !endInput) {
      return false;
    }
    return endInput.translateX - startInput.translateX < 20;
  }
  _updateOverlappingThumbClassNames(source) {
    const sibling = source.getSibling();
    const sourceThumb = this._getThumb(source.thumbPosition);
    const siblingThumb = this._getThumb(sibling.thumbPosition);
    siblingThumb._hostElement.classList.remove("mdc-slider__thumb--top");
    sourceThumb._hostElement.classList.toggle("mdc-slider__thumb--top", this._thumbsOverlap);
  }
  _updateOverlappingThumbUI(source) {
    if (!this._isRange || this._skipUpdate()) {
      return;
    }
    if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
      this._thumbsOverlap = !this._thumbsOverlap;
      this._updateOverlappingThumbClassNames(source);
    }
  }
  _updateThumbUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const thumb = this._getThumb(source.thumbPosition === _MatThumb.END ? _MatThumb.END : _MatThumb.START);
    thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
  }
  _updateValueIndicatorUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const valuetext = this.displayWith(source.value);
    this._hasViewInitialized ? source._valuetext.set(valuetext) : source._hostElement.setAttribute("aria-valuetext", valuetext);
    if (this.discrete) {
      source.thumbPosition === _MatThumb.START ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
      const visualThumb = this._getThumb(source.thumbPosition);
      valuetext.length < 3 ? visualThumb._hostElement.classList.add("mdc-slider__thumb--short-value") : visualThumb._hostElement.classList.remove("mdc-slider__thumb--short-value");
    }
  }
  _updateValueIndicatorUIs() {
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    if (eInput) {
      this._updateValueIndicatorUI(eInput);
    }
    if (sInput) {
      this._updateValueIndicatorUI(sInput);
    }
  }
  _updateTickMarkTrackUI() {
    if (!this.showTickMarks || this._skipUpdate()) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = (this._cachedWidth - 6) * percentage;
  }
  _updateTrackUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
  }
  _updateTrackUIRange(source) {
    const sibling = source.getSibling();
    if (!sibling || !this._cachedWidth) {
      return;
    }
    const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
    if (source._isLeftThumb && this._cachedWidth) {
      this._setTrackActiveStyles({
        left: "auto",
        right: `${this._cachedWidth - sibling.translateX}px`,
        transformOrigin: "right",
        transform: `scaleX(${activePercentage})`
      });
    } else {
      this._setTrackActiveStyles({
        left: `${sibling.translateX}px`,
        right: "auto",
        transformOrigin: "left",
        transform: `scaleX(${activePercentage})`
      });
    }
  }
  _updateTrackUINonRange(source) {
    this._isRtl ? this._setTrackActiveStyles({
      left: "auto",
      right: "0px",
      transformOrigin: "right",
      transform: `scaleX(${1 - source.fillPercentage})`
    }) : this._setTrackActiveStyles({
      left: "0px",
      right: "auto",
      transformOrigin: "left",
      transform: `scaleX(${source.fillPercentage})`
    });
  }
  _updateTickMarkUI() {
    if (!this.showTickMarks || this.step === void 0 || this.min === void 0 || this.max === void 0) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
  }
  _updateTickMarkUINonRange(step) {
    const value = this._getValue();
    let numActive = Math.max(Math.round((value - this.min) / step), 0) + 1;
    let numInactive = Math.max(Math.round((this.max - value) / step), 0) - 1;
    this._isRtl ? numActive++ : numInactive++;
    this._tickMarks = Array(numActive).fill(_MatTickMark.ACTIVE).concat(Array(numInactive).fill(_MatTickMark.INACTIVE));
  }
  _updateTickMarkUIRange(step) {
    const endValue = this._getValue();
    const startValue = this._getValue(_MatThumb.START);
    const numInactiveBeforeStartThumb = Math.max(Math.round((startValue - this.min) / step), 0);
    const numActive = Math.max(Math.round((endValue - startValue) / step) + 1, 0);
    const numInactiveAfterEndThumb = Math.max(Math.round((this.max - endValue) / step), 0);
    this._tickMarks = Array(numInactiveBeforeStartThumb).fill(_MatTickMark.INACTIVE).concat(Array(numActive).fill(_MatTickMark.ACTIVE), Array(numInactiveAfterEndThumb).fill(_MatTickMark.INACTIVE));
  }
  _getInput(thumbPosition) {
    if (thumbPosition === _MatThumb.END && this._input) {
      return this._input;
    }
    if (this._inputs?.length) {
      return thumbPosition === _MatThumb.START ? this._inputs.first : this._inputs.last;
    }
    return;
  }
  _getThumb(thumbPosition) {
    return thumbPosition === _MatThumb.END ? this._thumbs?.last : this._thumbs?.first;
  }
  _setTransition(withAnimation) {
    this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
    this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation", this._hasAnimation);
  }
  _isCursorOnSliderThumb(event, rect) {
    const radius = rect.width / 2;
    const centerX = rect.x + radius;
    const centerY = rect.y + radius;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
  }
  static \u0275fac = function MatSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlider)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlider,
    selectors: [["mat-slider"]],
    contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_THUMB, 5)(dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputs = _t);
      }
    },
    viewQuery: function MatSlider_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5)(MAT_SLIDER_VISUAL_THUMB, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._trackActive = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._thumbs = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
    hostVars: 12,
    hostBindings: function MatSlider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275classProp("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      discrete: [2, "discrete", "discrete", booleanAttribute],
      showTickMarks: [2, "showTickMarks", "showTickMarks", booleanAttribute],
      min: [2, "min", "min", numberAttribute],
      color: "color",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      max: [2, "max", "max", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      displayWith: "displayWith"
    },
    exportAs: ["matSlider"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER,
      useExisting: _MatSlider
    }])],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 5,
    consts: [["trackActive", ""], ["tickMarkContainer", ""], [1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], [1, "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [3, "class", "transform"]],
    template: function MatSlider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275element(2, "div", 3);
        \u0275\u0275elementStart(3, "div", 4);
        \u0275\u0275element(4, "div", 5, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, MatSlider_Conditional_6_Template, 3, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 7);
        \u0275\u0275element(8, "mat-slider-visual-thumb", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.showTickMarks ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isRange ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
      }
    },
    dependencies: [MatSliderVisualThumb],
    styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mat-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mat-slider-active-track-height, 4px);top:calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mat-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mat-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mat-slider-inactive-track-height, 4px);border-radius:var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;transform:scale(0);transform-origin:var(--mat-slider-value-indicator-transform-origin, 0 28px);transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mat-slider-label-container-color, var(--mat-sys-primary));color:var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mat-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mat-slider-handle-width, 20px);height:var(--mat-slider-handle-height, 20px);border-width:calc(var(--mat-slider-handle-height, 20px)/2) calc(var(--mat-slider-handle-width, 20px)/2);box-shadow:var(--mat-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mat-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mat-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mat-slider-with-tick-marks-container-size, 2px);height:var(--mat-slider-with-tick-marks-container-size, 2px);border-radius:var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input{cursor:auto}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:""}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlider, [{
    type: Component,
    args: [{
      selector: "mat-slider",
      host: {
        "class": "mat-mdc-slider mdc-slider",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-slider--range]": "_isRange",
        "[class.mdc-slider--disabled]": "disabled",
        "[class.mdc-slider--discrete]": "discrete",
        "[class.mdc-slider--tick-marks]": "showTickMarks",
        "[class._mat-animation-noopable]": "_noopAnimations"
      },
      exportAs: "matSlider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }],
      imports: [MatSliderVisualThumb],
      template: `<!-- Inputs -->
<ng-content></ng-content>

<!-- Track -->
<div class="mdc-slider__track">
  <div class="mdc-slider__track--inactive"></div>
  <div class="mdc-slider__track--active">
    <div #trackActive class="mdc-slider__track--active_fill"></div>
  </div>
  @if (showTickMarks) {
    <div class="mdc-slider__tick-marks" #tickMarkContainer>
      @if (_cachedWidth) {
        @for (tickMark of _tickMarks; track i; let i = $index) {
          <div
            [class]="tickMark === 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive'"
            [style.transform]="_calcTickMarkTransform(i)"></div>
        }
      }
    </div>
  }
</div>

<!-- Thumbs -->
@if (_isRange) {
  <mat-slider-visual-thumb
    [discrete]="discrete"
    [thumbPosition]="1"
    [valueIndicatorText]="startValueIndicatorText">
  </mat-slider-visual-thumb>
}

<mat-slider-visual-thumb
  [discrete]="discrete"
  [thumbPosition]="2"
  [valueIndicatorText]="endValueIndicatorText">
</mat-slider-visual-thumb>
`,
      styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mat-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mat-slider-active-track-height, 4px);top:calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mat-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mat-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mat-slider-inactive-track-height, 4px);border-radius:var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;transform:scale(0);transform-origin:var(--mat-slider-value-indicator-transform-origin, 0 28px);transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mat-slider-label-container-color, var(--mat-sys-primary));color:var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mat-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mat-slider-handle-width, 20px);height:var(--mat-slider-handle-height, 20px);border-width:calc(var(--mat-slider-handle-height, 20px)/2) calc(var(--mat-slider-handle-width, 20px)/2);box-shadow:var(--mat-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mat-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mat-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mat-slider-with-tick-marks-container-size, 2px);height:var(--mat-slider-with-tick-marks-container-size, 2px);border-radius:var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input{cursor:auto}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    _trackActive: [{
      type: ViewChild,
      args: ["trackActive"]
    }],
    _thumbs: [{
      type: ViewChildren,
      args: [MAT_SLIDER_VISUAL_THUMB]
    }],
    _input: [{
      type: ContentChild,
      args: [MAT_SLIDER_THUMB]
    }],
    _inputs: [{
      type: ContentChildren,
      args: [MAT_SLIDER_RANGE_THUMB, {
        descendants: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    discrete: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTickMarks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displayWith: [{
      type: Input
    }]
  });
})();
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || startInputElement?._hostElement.hasAttribute("matSliderStartThumb");
  const endValid = endInputElement?._hostElement.hasAttribute(isRange ? "matSliderEndThumb" : "matSliderThumb");
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}
var MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderThumb),
  multi: true
};
var MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderRangeThumb),
  multi: true
};
var MatSliderThumb = class _MatSliderThumb {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _cdr = inject(ChangeDetectorRef);
  _slider = inject(MAT_SLIDER);
  _platform = inject(Platform);
  _listenerCleanups;
  get value() {
    return numberAttribute(this._hostElement.value, 0);
  }
  set value(value) {
    if (value === null) {
      value = this._getDefaultValue();
    }
    value = isNaN(value) ? 0 : value;
    const stringValue = value + "";
    if (!this._hasSetInitialValue) {
      this._initialValue = stringValue;
      return;
    }
    if (this._isActive) {
      return;
    }
    this._setValue(stringValue);
  }
  _setValue(value) {
    this._hostElement.value = value;
    this._updateThumbUIByValue();
    this._slider._onValueChange(this);
    this._cdr.detectChanges();
    this._slider._cdr.markForCheck();
  }
  valueChange = new EventEmitter();
  dragStart = new EventEmitter();
  dragEnd = new EventEmitter();
  get translateX() {
    if (this._slider.min >= this._slider.max) {
      this._translateX = this._tickMarkOffset;
      return this._translateX;
    }
    if (this._translateX === void 0) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v) {
    this._translateX = v;
  }
  _translateX;
  thumbPosition = _MatThumb.END;
  get min() {
    return numberAttribute(this._hostElement.min, 0);
  }
  set min(v) {
    this._hostElement.min = v + "";
    this._cdr.detectChanges();
  }
  get max() {
    return numberAttribute(this._hostElement.max, 0);
  }
  set max(v) {
    this._hostElement.max = v + "";
    this._cdr.detectChanges();
  }
  get step() {
    return numberAttribute(this._hostElement.step, 0);
  }
  set step(v) {
    this._hostElement.step = v + "";
    this._cdr.detectChanges();
  }
  get disabled() {
    return booleanAttribute(this._hostElement.disabled);
  }
  set disabled(v) {
    this._hostElement.disabled = v;
    this._cdr.detectChanges();
    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  get percentage() {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }
  get fillPercentage() {
    if (!this._slider._cachedWidth) {
      return this._slider._isRtl ? 1 : 0;
    }
    if (this._translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedWidth;
  }
  _hostElement = this._elementRef.nativeElement;
  _valuetext = signal("", ...ngDevMode ? [{
    debugName: "_valuetext"
  }] : []);
  _knobRadius = 8;
  _tickMarkOffset = 3;
  _isActive = false;
  _isFocused = false;
  _setIsFocused(v) {
    this._isFocused = v;
  }
  _hasSetInitialValue = false;
  _initialValue;
  _formControl;
  _destroyed = new Subject();
  _skipUIUpdate = false;
  _onChangeFn;
  _onTouchedFn = () => {
  };
  _isControlInitialized = false;
  constructor() {
    const renderer = inject(Renderer2);
    this._ngZone.runOutsideAngular(() => {
      this._listenerCleanups = [renderer.listen(this._hostElement, "pointerdown", this._onPointerDown.bind(this)), renderer.listen(this._hostElement, "pointermove", this._onPointerMove.bind(this)), renderer.listen(this._hostElement, "pointerup", this._onPointerUp.bind(this))];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups.forEach((cleanup) => cleanup());
    this._destroyed.next();
    this._destroyed.complete();
    this.dragStart.complete();
    this.dragEnd.complete();
  }
  initProps() {
    this._updateWidthInactive();
    if (this.disabled !== this._slider.disabled) {
      this._slider.disabled = true;
    }
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }
  initUI() {
    this._updateThumbUIByValue();
  }
  _initValue() {
    this._hasSetInitialValue = true;
    if (this._initialValue === void 0) {
      this.value = this._getDefaultValue();
    } else {
      this._hostElement.value = this._initialValue;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    }
  }
  _getDefaultValue() {
    return this.min;
  }
  _onBlur() {
    this._setIsFocused(false);
    this._onTouchedFn();
  }
  _onFocus() {
    this._slider._setTransition(false);
    this._slider._updateTrackUI(this);
    this._setIsFocused(true);
  }
  _onChange() {
    this.valueChange.emit(this.value);
    if (this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
  }
  _onInput() {
    this._onChangeFn?.(this.value);
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
    this._slider._onValueChange(this);
  }
  _onNgControlValueChange() {
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl.disabled;
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._platform.IOS) {
      const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
      this._isActive = isCursorOnSliderThumb;
      this._updateWidthActive();
      this._slider._updateDimensions();
      return;
    }
    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {
        withAnimation: true
      });
    }
    if (!this.disabled) {
      this._handleValueCorrection(event);
      this.dragStart.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
    }
  }
  _handleValueCorrection(event) {
    this._skipUIUpdate = true;
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }
  _fixValue(event) {
    const xPos = event.clientX - this._slider._cachedLeft;
    const width = this._slider._cachedWidth;
    const step = this._slider.step === 0 ? 1 : this._slider.step;
    const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
    const percentage = this._slider._isRtl ? 1 - xPos / width : xPos / width;
    const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
    const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
    const value = Math.round(impreciseValue / step) * step;
    const prevValue = this.value;
    if (value === prevValue) {
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
    this._onChangeFn?.(this.value);
    this._slider._onValueChange(this);
    this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
      withAnimation: this._slider._hasAnimation
    });
  }
  _onPointerMove(event) {
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }
  _onPointerUp() {
    if (this._isActive) {
      this._isActive = false;
      if (this._platform.SAFARI) {
        this._setIsFocused(false);
      }
      this.dragEnd.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
      setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
    }
  }
  _clamp(v) {
    const min = this._tickMarkOffset;
    const max = this._slider._cachedWidth - this._tickMarkOffset;
    return Math.max(Math.min(v, max), min);
  }
  _calcTranslateXByValue() {
    if (this._slider._isRtl) {
      return (1 - this.percentage) * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
    }
    return this.percentage * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
  }
  _calcTranslateXByPointerEvent(event) {
    return event.clientX - this._slider._cachedLeft;
  }
  _updateWidthActive() {
  }
  _updateWidthInactive() {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding - this._tickMarkOffset * 2}px)`;
    this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
  }
  _updateThumbUIByValue(options) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }
  _updateThumbUIByPointerEvent(event, options) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }
  _updateThumbUI(options) {
    this._slider._setTransition(!!options?.withAnimation);
    this._slider._onTranslateXChange(this);
  }
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
    }
  }
  registerOnChange(fn) {
    this._onChangeFn = fn;
    this._isControlInitialized = true;
  }
  registerOnTouched(fn) {
    this._onTouchedFn = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  focus() {
    this._hostElement.focus();
  }
  blur() {
    this._hostElement.blur();
  }
  static \u0275fac = function MatSliderThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderThumb,
    selectors: [["input", "matSliderThumb", ""]],
    hostAttrs: ["type", "range", 1, "mdc-slider__input"],
    hostVars: 1,
    hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function MatSliderThumb_change_HostBindingHandler() {
          return ctx._onChange();
        })("input", function MatSliderThumb_input_HostBindingHandler() {
          return ctx._onInput();
        })("blur", function MatSliderThumb_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("focus", function MatSliderThumb_focus_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuetext", ctx._valuetext());
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd"
    },
    exportAs: ["matSliderThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_THUMB,
      useExisting: _MatSliderThumb
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderThumb]",
      exportAs: "matSliderThumb",
      host: {
        "class": "mdc-slider__input",
        "type": "range",
        "[attr.aria-valuetext]": "_valuetext()",
        "(change)": "_onChange()",
        "(input)": "_onInput()",
        "(blur)": "_onBlur()",
        "(focus)": "_onFocus()"
      },
      providers: [MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueChange: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
var MatSliderRangeThumb = class _MatSliderRangeThumb extends MatSliderThumb {
  _cdr = inject(ChangeDetectorRef);
  getSibling() {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? _MatThumb.START : _MatThumb.END);
    }
    return this._sibling;
  }
  _sibling;
  getMinPos() {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._tickMarkOffset;
  }
  getMaxPos() {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth - this._tickMarkOffset;
  }
  _setIsLeftThumb() {
    this._isLeftThumb = this._isEndThumb && this._slider._isRtl || !this._isEndThumb && !this._slider._isRtl;
  }
  _isLeftThumb = false;
  _isEndThumb = false;
  constructor() {
    super();
    this._isEndThumb = this._hostElement.hasAttribute("matSliderEndThumb");
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? _MatThumb.END : _MatThumb.START;
  }
  _getDefaultValue() {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }
  _onInput() {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }
  _onNgControlValueChange() {
    super._onNgControlValueChange();
    this.getSibling()?._updateMinMax();
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add("mat-mdc-slider-input-no-pointer-events");
    }
    super._onPointerDown(event);
  }
  _onPointerUp() {
    super._onPointerUp();
    if (this._sibling) {
      setTimeout(() => {
        this._sibling._updateWidthInactive();
        this._sibling._hostElement.classList.remove("mat-mdc-slider-input-no-pointer-events");
      });
    }
  }
  _onPointerMove(event) {
    super._onPointerMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }
  _fixValue(event) {
    super._fixValue(event);
    this._sibling?._updateMinMax();
  }
  _clamp(v) {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }
  _updateMinMax() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }
  _updateWidthActive() {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth - this._tickMarkOffset * 2;
    const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }
  _updateWidthInactive() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth - this._tickMarkOffset * 2;
    const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
    const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
    const percentage = this._slider.min < this._slider.max ? _percentage : 1;
    let ripplePadding = this._slider._rippleRadius;
    if (percentage === 1) {
      ripplePadding = 48;
    } else if (percentage === 0) {
      ripplePadding = 0;
    }
    const width = maxWidth * percentage + ripplePadding;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = "0px";
    if (this._isLeftThumb) {
      this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
      this._hostElement.style.right = "auto";
    } else {
      this._hostElement.style.left = "auto";
      this._hostElement.style.right = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
    }
  }
  _updateStaticStyles() {
    this._hostElement.classList.toggle("mat-slider__right-input", !this._isLeftThumb);
  }
  _updateSibling() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
      this._updateWidthInactive();
      this._updateSibling();
    }
  }
  _setValue(value) {
    super._setValue(value);
    this._updateWidthInactive();
    this._updateSibling();
  }
  static \u0275fac = function MatSliderRangeThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderRangeThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderRangeThumb,
    selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
    exportAs: ["matSliderRangeThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_RANGE_THUMB,
      useExisting: _MatSliderRangeThumb
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderRangeThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderStartThumb], input[matSliderEndThumb]",
      exportAs: "matSliderRangeThumb",
      providers: [MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }]
    }]
  }], () => [], null);
})();
var MatSliderModule = class _MatSliderModule {
  static \u0275fac = function MatSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSliderModule,
    imports: [MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
    exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
      exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb, BidiModule]
    }]
  }], null, null);
})();

// src/app/pages/app/ecommerce/products.component.ts
var _c02 = () => [5, 4, 3, 2, 1];
var _c12 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.id;
function ProductsComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-checkbox", 37);
    \u0275\u0275listener("change", function ProductsComponent_For_36_Template_mat_checkbox_change_1_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleCategory(category_r2));
    });
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.filters().categories.includes(category_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryCount(category_r2));
  }
}
function ProductsComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-checkbox", 37);
    \u0275\u0275listener("change", function ProductsComponent_For_41_Template_mat_checkbox_change_1_listener() {
      const subCategory_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSubCategory(subCategory_r5));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subCategory_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.filters().subCategories.includes(subCategory_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subCategory_r5, " ");
  }
}
function ProductsComponent_For_53_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 42);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r8 = ctx.$implicit;
    const rating_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("theme-yellow", i_r8 <= rating_r7)("opacity-25", i_r8 > rating_r7);
  }
}
function ProductsComponent_For_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-checkbox", 37);
    \u0275\u0275listener("change", function ProductsComponent_For_53_Template_mat_checkbox_change_1_listener() {
      const rating_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleRating(rating_r7));
    });
    \u0275\u0275elementStart(2, "div", 39);
    \u0275\u0275repeaterCreate(3, ProductsComponent_For_53_For_4_Template, 2, 4, "mat-icon", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(5, "span", 41);
    \u0275\u0275text(6, "& up");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const rating_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.filters().ratings.includes(rating_r7));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c12));
  }
}
function ProductsComponent_Conditional_80_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "img", 44);
    \u0275\u0275elementStart(2, "h3", 4);
    \u0275\u0275text(3, "No product found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 45);
    \u0275\u0275text(5, "Select different categories to checkout product");
    \u0275\u0275elementEnd()();
  }
}
function ProductsComponent_Conditional_80_Conditional_2_For_1_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 42);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const product_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("theme-yellow", i_r9 <= product_r10.rating)("opacity-25", i_r9 > product_r10.rating);
  }
}
function ProductsComponent_Conditional_80_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "mat-card", 54)(2, "div", 55)(3, "button", 56)(4, "span", 57);
    \u0275\u0275text(5, " favorite ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 58);
    \u0275\u0275element(7, "img", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-card-content")(9, "p")(10, "span", 60);
    \u0275\u0275text(11, "Flat $10.00 OFF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "h4", 61);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3", 62);
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "s", 63);
    \u0275\u0275text(17, "$ 180.00");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275repeaterCreate(19, ProductsComponent_Conditional_80_Conditional_2_For_1_For_20_Template, 2, 4, "mat-icon", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(21, "span", 64);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 14)(24, "div", 17);
    \u0275\u0275element(25, "app-incrementor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 65)(27, "button", 66)(28, "mat-icon", 8);
    \u0275\u0275text(29, "shopping_bag");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275property("src", product_r10.image, \u0275\u0275sanitizeUrl)("alt", product_r10.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(product_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$ ", product_r10.price.toFixed(2), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(5, _c12));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", product_r10.rating.toFixed(1), ")");
  }
}
function ProductsComponent_Conditional_80_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductsComponent_Conditional_80_Conditional_2_For_1_Template, 30, 6, "div", 46, _forTrack0);
    \u0275\u0275elementStart(2, "div", 46)(3, "mat-card", 47)(4, "mat-card-content");
    \u0275\u0275element(5, "img", 48);
    \u0275\u0275elementStart(6, "p", 49)(7, "span", 50);
    \u0275\u0275text(8, "25% Offer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 51);
    \u0275\u0275text(10, "SmartPhone Perks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2", 4);
    \u0275\u0275text(12, "Upto 25% Off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 52);
    \u0275\u0275text(14, "Offer valid till 30th Dec");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 53)(16, "mat-icon", 8);
    \u0275\u0275text(17, "shopping_bag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Buy Now");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.filteredProducts());
  }
}
function ProductsComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275conditionalCreate(1, ProductsComponent_Conditional_80_Conditional_1_Template, 6, 0, "div", 43)(2, ProductsComponent_Conditional_80_Conditional_2_Template, 19, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.filteredProducts().length === 0 ? 1 : 2);
  }
}
function ProductsComponent_Conditional_81_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "img", 44);
    \u0275\u0275elementStart(2, "h3", 4);
    \u0275\u0275text(3, "No product found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 45);
    \u0275\u0275text(5, "Select different categories to checkout product");
    \u0275\u0275elementEnd()();
  }
}
function ProductsComponent_Conditional_81_Conditional_2_For_1_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 42);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r11 = ctx.$implicit;
    const product_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("theme-yellow", i_r11 <= product_r12.rating)("opacity-25", i_r11 > product_r12.rating);
  }
}
function ProductsComponent_Conditional_81_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "mat-card", 68)(2, "mat-card-content")(3, "div", 14)(4, "div", 69)(5, "div", 55)(6, "button", 56)(7, "span", 57);
    \u0275\u0275text(8, " favorite ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 70);
    \u0275\u0275element(10, "img", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 71)(12, "p")(13, "span", 60);
    \u0275\u0275text(14, "Flat $10.00 OFF");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h4", 72);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3", 62);
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "s", 63);
    \u0275\u0275text(20, "$ 180.00");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275repeaterCreate(22, ProductsComponent_Conditional_81_Conditional_2_For_1_For_23_Template, 2, 4, "mat-icon", 40, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(24, "span", 64);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 73)(27, "div", 14)(28, "div", 74);
    \u0275\u0275element(29, "app-incrementor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 75)(31, "button", 66)(32, "mat-icon", 8);
    \u0275\u0275text(33, "shopping_bag");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const product_r12 = ctx.$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275property("src", product_r12.image, \u0275\u0275sanitizeUrl)("alt", product_r12.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(product_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$ ", product_r12.price.toFixed(2), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(5, _c12));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", product_r12.rating.toFixed(1), ")");
  }
}
function ProductsComponent_Conditional_81_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ProductsComponent_Conditional_81_Conditional_2_For_1_Template, 34, 6, "div", 67, _forTrack0);
    \u0275\u0275elementStart(2, "div", 46)(3, "mat-card", 47)(4, "mat-card-content");
    \u0275\u0275element(5, "img", 48);
    \u0275\u0275elementStart(6, "p", 49)(7, "span", 50);
    \u0275\u0275text(8, "25% Offer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 51);
    \u0275\u0275text(10, "SmartPhone Perks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2", 4);
    \u0275\u0275text(12, "Upto 25% Off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 52);
    \u0275\u0275text(14, "Offer valid till 30th Dec");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 53)(16, "mat-icon", 8);
    \u0275\u0275text(17, "shopping_bag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Buy Now");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.filteredProducts());
  }
}
function ProductsComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275conditionalCreate(1, ProductsComponent_Conditional_81_Conditional_1_Template, 6, 0, "div", 43)(2, ProductsComponent_Conditional_81_Conditional_2_Template, 19, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.filteredProducts().length === 0 ? 1 : 2);
  }
}
register();
var ProductsComponent = class _ProductsComponent {
  constructor(renderer, document) {
    this.renderer = renderer;
    this.document = document;
    this.viewMode = signal("thumb", ...ngDevMode ? [{ debugName: "viewMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.products = [
      { id: 1, name: "Wireless Headphones", category: "Electronics", subCategory: "Audio", price: 150, rating: 4.5, image: "assets/img/product1.jpg" },
      { id: 2, name: "Classic Leather Bag", category: "Fashion", subCategory: "Bags", price: 250, rating: 4.8, image: "assets/img/product2.jpg" },
      { id: 3, name: "Smart Watch Series 5", category: "Electronics", subCategory: "Wearables", price: 400, rating: 4.2, image: "assets/img/product3.jpg" },
      { id: 4, name: "Vintage Camera", category: "Photography", subCategory: "Cameras", price: 800, rating: 4.9, image: "assets/img/product4.jpg" },
      { id: 5, name: "Mountain Bike", category: "Sports", subCategory: "Bikes", price: 950, rating: 4.7, image: "assets/img/product5.jpg" },
      { id: 6, name: "Espresso Machine", category: "Appliances", subCategory: "Kitchen", price: 350, rating: 4.6, image: "assets/img/product6.jpg" },
      { id: 7, name: "Designer T-Shirt", category: "Fashion", subCategory: "Apparel", price: 50, rating: 4.1, image: "assets/img/product7.jpg" },
      { id: 8, name: "Portable Speaker", category: "Electronics", subCategory: "Audio", price: 120, rating: 4.4, image: "assets/img/product1.jpg" },
      { id: 9, name: "Running Shoes", category: "Sports", subCategory: "Shoes", price: 110, rating: 4.3, image: "assets/img/product2.jpg" },
      { id: 10, name: "Blender", category: "Appliances", subCategory: "Kitchen", price: 80, rating: 4, image: "assets/img/product3.jpg" },
      { id: 11, name: "Backpack", category: "Fashion", subCategory: "Bags", price: 90, rating: 4.2, image: "assets/img/product4.jpg" },
      { id: 12, name: "Drone", category: "Photography", subCategory: "Drones", price: 550, rating: 4.9, image: "assets/img/product5.jpg" },
      { id: 13, name: "Digital Camera", category: "Photography", subCategory: "Cameras", price: 650, rating: 4.7, image: "assets/img/product6.jpg" },
      { id: 14, name: "Jogging Pants", category: "Sports", subCategory: "Apparel", price: 60, rating: 4.5, image: "assets/img/product7.jpg" },
      { id: 15, name: "Smart TV", category: "Electronics", subCategory: "Televisions", price: 750, rating: 4.8, image: "assets/img/product1.jpg" }
    ];
    this.filters = signal({
      categories: [],
      subCategories: [],
      priceRange: 1e3,
      ratings: []
    }, ...ngDevMode ? [{ debugName: "filters" }] : (
      /* istanbul ignore next */
      []
    ));
    this.categories = computed(() => {
      const allCategories = this.products.map((p) => p.category);
      return Array.from(new Set(allCategories)).sort();
    }, ...ngDevMode ? [{ debugName: "categories" }] : (
      /* istanbul ignore next */
      []
    ));
    this.subCategories = computed(() => {
      const allSubCategories = this.products.map((p) => p.subCategory);
      return Array.from(new Set(allSubCategories)).sort();
    }, ...ngDevMode ? [{ debugName: "subCategories" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredProducts = computed(() => {
      const currentFilters = this.filters();
      return this.products.filter((product) => {
        const categoryMatch = currentFilters.categories.length === 0 || currentFilters.categories.includes(product.category);
        const subCategoryMatch = currentFilters.subCategories.length === 0 || currentFilters.subCategories.includes(product.subCategory);
        const priceMatch = product.price <= currentFilters.priceRange;
        const ratingMatch = currentFilters.ratings.length === 0 || currentFilters.ratings.some((rating) => product.rating >= rating);
        return categoryMatch && subCategoryMatch && priceMatch && ratingMatch;
      });
    }, ...ngDevMode ? [{ debugName: "filteredProducts" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
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
  // Custom method to get the count of products for each category
  getCategoryCount(category) {
    return this.products.filter((p) => p.category === category).length;
  }
  toggleCategory(category) {
    this.filters.update((f) => {
      const updatedCategories = f.categories.includes(category) ? f.categories.filter((c) => c !== category) : [...f.categories, category];
      return __spreadProps(__spreadValues({}, f), { categories: updatedCategories });
    });
  }
  toggleSubCategory(subCategory) {
    this.filters.update((f) => {
      const updatedSubCategories = f.subCategories.includes(subCategory) ? f.subCategories.filter((sc) => sc !== subCategory) : [...f.subCategories, subCategory];
      return __spreadProps(__spreadValues({}, f), { subCategories: updatedSubCategories });
    });
  }
  setPriceRange(value) {
    this.filters.update((f) => __spreadProps(__spreadValues({}, f), { priceRange: value }));
  }
  toggleRating(rating) {
    this.filters.update((f) => {
      const updatedRatings = f.ratings.includes(rating) ? f.ratings.filter((r) => r !== rating) : [...f.ratings, rating];
      return __spreadProps(__spreadValues({}, f), { ratings: updatedRatings });
    });
  }
  clearFilters() {
    this.filters.set({
      categories: [],
      subCategories: [],
      priceRange: 1e3,
      ratings: []
    });
  }
  static {
    this.\u0275fac = function ProductsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductsComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsComponent, selectors: [["app-products"]], decls: 82, vars: 9, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "col-auto", "mb-3", "mb-xl-0"], ["matIconButton", "filled", "routerLink", "/app/cart", "matBadge", "3", "matBadgeColor", "warn"], [1, "material-icons-outlined"], ["matIconButton", "", "routerLink", "../add-product"], [1, "container", "fade-in"], [1, "inner-sidebar-wrap"], [1, "inner-sidebar"], [1, "p-3"], [1, "row", "gx-3"], [1, "col-auto", "d-lg-none"], ["matIconButton", "", "aria-label", "Inner Menu", 3, "click"], [1, "col"], ["appearance", "outline", 1, "w-100", "inline-small"], ["matInput", "", "placeholder", "Search..."], ["matSuffix", ""], [1, ""], [1, "w-100", "mb-3", 3, "valueChange", "max", "min", "step", "value"], ["matSliderThumb", ""], [1, "inner-sidebar-content"], [1, "col-auto", "order-1", "order-sm-1", "mb-3", "mb-lg-4"], ["matButton", "", "aria-label", "Inner Menu", 3, "click"], [1, "badge", "badge-light", "theme-blue", "ms-2"], ["matIconButton", "", 1, "text-theme", 3, "click"], [1, "col-12", "col-sm", "text-center", "order-3", "order-sm-2", "mb-3", "mb-lg-4"], [1, "mb-0"], [1, "col-auto", "order-2", "order-sm-3", "ms-auto", "mb-3", "mb-lg-4"], [3, "change", "value"], ["value", "list"], [1, "ps-1"], ["value", "thumb"], [1, "row", "gx-3", "gx-lg-4"], [3, "change", "checked"], [1, "badge", "badge-light", "ms-2"], [1, "flex", "items-center"], [1, "text-sm", "text-theme", 3, "theme-yellow", "opacity-25"], [1, "ml-2"], [1, "text-sm", "text-theme"], [1, "text-center", "mb-4"], ["src", "assets/img/noproduct.png", "alt", "", 1, "width-300", "mt-4", "mt-lg-5"], [1, "text-secondary"], [1, "col-12", "col-sm-6", "col-xl-6", "col-xxl-3"], [1, "bg-light-theme", "text-center", "mb-3", "mb-lg-4", "theme-orange"], ["src", "assets/img/product10.png", "alt", "", 1, "height-160", "mb-3"], [1, "mb-4"], [1, "badge", "theme-magenta"], [1, "text-theme", "theme-red", "mb-1"], [1, "text-secondary", "small", "mb-4"], ["matButton", "filled"], [1, "mb-3", "mb-lg-4"], [1, "position-absolute", "top-0", "end-0", "m-3", "z-index-1"], ["matMiniFab", "", 1, "text-theme", "theme-red"], [1, "material-symbols-outlined", "align-middle"], ["mat-card-image", "", "routerLink", "../product", 1, "height-180", "w-100", "rounded", "coverimg", "mb-3"], [3, "src", "alt"], [1, "badge", "badge-light", "theme-green", "align-middle"], ["routerLink", "../product", 1, "mb-2"], [1, "fw-bold", "mb-3"], [1, "text-secondary", "fw-normal"], [1, "ms-1"], [1, "col-auto"], ["matIconButton", "filled"], [1, "col-12"], [1, "mb-3"], [1, "col-4", "col-lg-3", "col-xl-3", "col-xxl-2", "position-relative"], [1, "height-140", "w-100", "rounded", "coverimg", "mb-3", "mb-lg-0"], [1, "col", "col-lg", "col-xl"], [1, "mb-2"], [1, "col-12", "col-sm-auto", "col-lg-4", "col-xl-auto"], [1, "col", "mb-0", "mb-lg-3"], [1, "col-auto", "ms-auto"]], template: function ProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "All Products");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Large variety and series of products");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "button", 7)(10, "mat-icon", 8);
        \u0275\u0275text(11, "shopping_bag");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 6)(13, "button", 9)(14, "mat-icon", 8);
        \u0275\u0275text(15, "add");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "button", 16);
        \u0275\u0275listener("click", function ProductsComponent_Template_button_click_22_listener() {
          return ctx.innersidebar();
        });
        \u0275\u0275elementStart(23, "mat-icon", 8);
        \u0275\u0275text(24, "arrow_back");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 17)(26, "mat-form-field", 18)(27, "mat-label");
        \u0275\u0275text(28, "Search...");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 19);
        \u0275\u0275elementStart(30, "mat-icon", 20);
        \u0275\u0275text(31, "search");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(32, "div", 13)(33, "h4");
        \u0275\u0275text(34, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(35, ProductsComponent_For_36_Template, 6, 3, "div", 21, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 13)(38, "h4");
        \u0275\u0275text(39, "Sub-Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(40, ProductsComponent_For_41_Template, 3, 2, "div", 21, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 13)(43, "h4");
        \u0275\u0275text(44, "Price Range");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-slider", 22);
        \u0275\u0275listener("valueChange", function ProductsComponent_Template_mat_slider_valueChange_45_listener($event) {
          return ctx.setPriceRange($event);
        });
        \u0275\u0275element(46, "input", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "p");
        \u0275\u0275text(48);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 13)(50, "h4");
        \u0275\u0275text(51, "Rating");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(52, ProductsComponent_For_53_Template, 7, 2, "div", 21, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 24)(55, "div", 2)(56, "div", 25)(57, "button", 26);
        \u0275\u0275listener("click", function ProductsComponent_Template_button_click_57_listener() {
          return ctx.innersidebar();
        });
        \u0275\u0275elementStart(58, "span", 21);
        \u0275\u0275text(59, "Filter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "span", 27);
        \u0275\u0275text(61, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "button", 28);
        \u0275\u0275listener("click", function ProductsComponent_Template_button_click_62_listener() {
          return ctx.clearFilters();
        });
        \u0275\u0275elementStart(63, "mat-icon");
        \u0275\u0275text(64, "filter_list_off");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 29)(66, "h4", 30);
        \u0275\u0275text(67);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "div", 31)(69, "mat-button-toggle-group", 32);
        \u0275\u0275listener("change", function ProductsComponent_Template_mat_button_toggle_group_change_69_listener($event) {
          return ctx.viewMode.set($event.value);
        });
        \u0275\u0275elementStart(70, "mat-button-toggle", 33)(71, "mat-icon", 8);
        \u0275\u0275text(72, "list");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "span", 34);
        \u0275\u0275text(74, "List");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "mat-button-toggle", 35)(76, "mat-icon", 8);
        \u0275\u0275text(77, "grid_view");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "span", 34);
        \u0275\u0275text(79, "Thumb");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(80, ProductsComponent_Conditional_80_Template, 3, 1, "div", 36)(81, ProductsComponent_Conditional_81_Template, 3, 1, "div", 36);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(35);
        \u0275\u0275repeater(ctx.categories());
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.subCategories());
        \u0275\u0275advance(5);
        \u0275\u0275property("max", 1e3)("min", 0)("step", 10)("value", ctx.filters().priceRange);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("$ ", ctx.filters().priceRange);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(8, _c02));
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate1("", ctx.filteredProducts().length, " Products");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.viewMode());
        \u0275\u0275advance(11);
        \u0275\u0275conditional(ctx.viewMode() === "thumb" ? 80 : 81);
      }
    }, dependencies: [CommonModule, RouterLink, MatCardModule, MatCard, MatCardContent, MatCardImage, MatCheckboxModule, MatCheckbox, MatInputModule, MatInput, MatFormField, MatLabel, MatSuffix, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatExpansionModule, MatIconModule, MatIcon, MatSliderModule, MatSlider, MatSliderThumb, FormsModule, MatFormFieldModule, MatButtonModule, MatButton, MatMiniFabButton, MatIconButton, MatBadgeModule, MatBadge, IncrementorComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductsComponent, [{
    type: Component,
    args: [{ selector: "app-products", standalone: true, imports: [CommonModule, RouterLink, CommonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatButtonToggleModule, MatExpansionModule, MatIconModule, MatSliderModule, FormsModule, MatFormFieldModule, MatButtonModule, MatBadgeModule, IncrementorComponent], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">All Products</h3>
                        <p class="small opacity-50">Large variety and series of products</p>
                    </div>

                    <div class="col-auto mb-3 mb-xl-0">
                        <button matIconButton="filled" routerLink="/app/cart" matBadge="3" matBadgeColor="warn"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                    </div>
                    <div class="col-auto mb-3 mb-xl-0">
                        <button matIconButton routerLink="../add-product"><mat-icon class="material-icons-outlined">add</mat-icon></button>
                    </div>
                </div>
            </mat-card>
        </div>

        <div class="container fade-in">
            <div class="inner-sidebar-wrap">
                <div class="inner-sidebar">
                    <div class="p-3">
                        <div class="row gx-3">
                            <div class="col-auto d-lg-none">
                                <button matIconButton (click)="innersidebar()" aria-label="Inner Menu">
                                    <mat-icon class="material-icons-outlined">arrow_back</mat-icon>
                                </button>
                            </div>
                            <div class="col">
                                <mat-form-field appearance="outline" class="w-100 inline-small">
                                    <mat-label>Search...</mat-label>
                                    <input matInput placeholder="Search..." />
                                    <mat-icon matSuffix>search</mat-icon>
                                </mat-form-field>
                            </div>
                        </div>
                    </div>

                    <div class="p-3">
                        <h4>Categories</h4>
                        @for (category of categories(); track category) {
                        <div class="">
                            <mat-checkbox (change)="toggleCategory(category)" [checked]="filters().categories.includes(category)">
                                <p>{{ category }}</p>
                            </mat-checkbox>
                            <span class="badge badge-light ms-2">{{ getCategoryCount(category) }}</span>
                        </div>
                        }
                    </div>

                    <div class="p-3">
                        <h4>Sub-Categories</h4>
                        @for (subCategory of subCategories(); track subCategory) {
                        <div class="">
                            <mat-checkbox (change)="toggleSubCategory(subCategory)" [checked]="filters().subCategories.includes(subCategory)">
                                {{ subCategory }}
                            </mat-checkbox>
                        </div>
                        }
                    </div>

                    <div class="p-3">
                        <h4>Price Range</h4>
                        <mat-slider class="w-100 mb-3" [max]="1000" [min]="0" [step]="10" (valueChange)="setPriceRange($event)" [value]="filters().priceRange">
                            <input matSliderThumb />
                        </mat-slider>
                        <p>$ {{ filters().priceRange }}</p>
                    </div>

                    <div class="p-3">
                        <h4>Rating</h4>
                        @for (rating of [5, 4, 3, 2, 1]; track rating) {
                        <div class="">
                            <mat-checkbox (change)="toggleRating(rating)" [checked]="filters().ratings.includes(rating)">
                                <div class="flex items-center">
                                    @for(i of [1, 2, 3, 4, 5]; track i) {
                                    <mat-icon [class.theme-yellow]="i <= rating" [class.opacity-25]="i > rating" class="text-sm text-theme">star</mat-icon>
                                    }
                                    <span class="ml-2 ">& up</span>
                                </div>
                            </mat-checkbox>
                        </div>
                        }
                    </div>
                </div>
                <div class="inner-sidebar-content">
                    <!-- filter and subtitle -->
                    <div class="row gx-3 align-items-center">
                        <div class="col-auto order-1 order-sm-1 mb-3 mb-lg-4">
                            <button matButton (click)="innersidebar()" aria-label="Inner Menu"><span class="">Filter</span> <span class="badge badge-light theme-blue ms-2">3</span></button>

                            <button matIconButton class="text-theme" (click)="clearFilters()"><mat-icon>filter_list_off</mat-icon></button>
                        </div>
                        <div class="col-12 col-sm text-center order-3 order-sm-2 mb-3 mb-lg-4">
                            <h4 class="mb-0">{{ filteredProducts().length }} Products</h4>
                        </div>
                        <div class="col-auto order-2 order-sm-3 ms-auto mb-3 mb-lg-4">
                            <mat-button-toggle-group [value]="viewMode()" (change)="viewMode.set($event.value)">
                                <mat-button-toggle value="list"><mat-icon class="material-icons-outlined">list</mat-icon> <span class="ps-1">List</span></mat-button-toggle>
                                <mat-button-toggle value="thumb"><mat-icon class="material-icons-outlined">grid_view</mat-icon> <span class="ps-1">Thumb</span></mat-button-toggle>
                            </mat-button-toggle-group>
                        </div>
                    </div>

                    <!-- product thumb view  -->
                    @if (viewMode() === 'thumb') {
                    <div class="row gx-3 gx-lg-4">
                        @if (filteredProducts().length === 0) {
                        <div class="text-center mb-4">
                            <img src="assets/img/noproduct.png" alt="" class="width-300 mt-4 mt-lg-5" />
                            <h3 class="mb-1">No product found</h3>
                            <p class="text-secondary">Select different categories to checkout product</p>
                        </div>
                        } @else { @for (product of filteredProducts(); track product.id) {
                        <div class="col-12 col-sm-6 col-xl-6 col-xxl-3">
                            <mat-card class="mb-3 mb-lg-4">
                                <div class="position-absolute top-0 end-0 m-3 z-index-1">
                                    <button matMiniFab class="text-theme theme-red">
                                        <span class="material-symbols-outlined align-middle"> favorite </span>
                                        <!-- <mat-icon>favorite</mat-icon> -->
                                    </button>
                                </div>
                                <div mat-card-image class="height-180 w-100 rounded coverimg mb-3" routerLink="../product">
                                    <img [src]="product.image" [alt]="product.name" />
                                </div>

                                <mat-card-content>
                                    <p><span class="badge badge-light theme-green align-middle">Flat $10.00 OFF</span></p>

                                    <h4 class="mb-2" routerLink="../product">{{ product.name }}</h4>
                                    <h3 class="fw-bold mb-3 ">$ {{ product.price.toFixed(2) }} <s class="text-secondary fw-normal">$ 180.00</s></h3>
                                    <p>
                                        @for(i of [1, 2, 3, 4, 5]; track i) {
                                        <mat-icon [class.theme-yellow]="i <= product.rating" [class.opacity-25]="i > product.rating" class="text-sm text-theme">star</mat-icon>
                                        }
                                        <span class="ms-1">({{ product.rating.toFixed(1) }})</span>
                                    </p>
                                    <div class="row gx-3">
                                        <div class="col">
                                            <app-incrementor></app-incrementor>
                                        </div>
                                        <div class="col-auto">
                                            <button matIconButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        }
                        <div class="col-12 col-sm-6 col-xl-6 col-xxl-3">
                            <mat-card class="bg-light-theme text-center mb-3 mb-lg-4 theme-orange">
                                <mat-card-content>
                                    <img src="assets/img/product10.png" class="height-160 mb-3" alt="" />
                                    <p class="mb-4"><span class="badge theme-magenta">25% Offer</span></p>
                                    <p class="text-theme theme-red mb-1">SmartPhone Perks</p>
                                    <h2 class="mb-1">Upto 25% Off</h2>
                                    <p class="text-secondary small mb-4">Offer valid till 30th Dec</p>
                                    <button matButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon> Buy Now</button>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        }
                    </div>
                    } @else {

                    <!-- product list view  -->
                    <div class="row gx-3 gx-lg-4">
                        @if (filteredProducts().length === 0) {
                        <div class="text-center mb-4">
                            <img src="assets/img/noproduct.png" alt="" class="width-300 mt-4 mt-lg-5" />
                            <h3 class="mb-1">No product found</h3>
                            <p class="text-secondary">Select different categories to checkout product</p>
                        </div>
                        } @else { @for (product of filteredProducts(); track product.id) {
                        <div class="col-12">
                            <mat-card class="mb-3">
                                <mat-card-content>
                                    <div class="row gx-3">
                                        <div class="col-4 col-lg-3 col-xl-3 col-xxl-2 position-relative">
                                            <div class="position-absolute top-0 end-0 m-3 z-index-1">
                                                <button matMiniFab class="text-theme theme-red">
                                                    <span class="material-symbols-outlined align-middle"> favorite </span>
                                                    <!-- <mat-icon>favorite</mat-icon> -->
                                                </button>
                                            </div>
                                            <div class="height-140 w-100 rounded coverimg mb-3 mb-lg-0">
                                                <img [src]="product.image" [alt]="product.name" />
                                            </div>
                                        </div>
                                        <div class="col col-lg col-xl">
                                            <p><span class="badge badge-light theme-green align-middle">Flat $10.00 OFF</span></p>
                                            <h4 class="mb-2">{{ product.name }}</h4>
                                            <h3 class="fw-bold mb-3 ">$ {{ product.price.toFixed(2) }} <s class="text-secondary fw-normal">$ 180.00</s></h3>
                                            <p>
                                                @for(i of [1, 2, 3, 4, 5]; track i) {
                                                <mat-icon [class.theme-yellow]="i <= product.rating" [class.opacity-25]="i > product.rating" class="text-sm text-theme">star</mat-icon>
                                                }
                                                <span class="ms-1">({{ product.rating.toFixed(1) }})</span>
                                            </p>
                                        </div>
                                        <div class="col-12 col-sm-auto col-lg-4 col-xl-auto">
                                            <div class="row gx-3">
                                                <div class="col mb-0 mb-lg-3">
                                                    <app-incrementor></app-incrementor>
                                                </div>
                                                <div class="col-auto ms-auto">
                                                    <button matIconButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        }
                        <div class="col-12 col-sm-6 col-xl-6 col-xxl-3">
                            <mat-card class="bg-light-theme text-center mb-3 mb-lg-4 theme-orange">
                                <mat-card-content>
                                    <img src="assets/img/product10.png" class="height-160 mb-3" alt="" />
                                    <p class="mb-4"><span class="badge theme-magenta">25% Offer</span></p>
                                    <p class="text-theme theme-red mb-1">SmartPhone Perks</p>
                                    <h2 class="mb-1">Upto 25% Off</h2>
                                    <p class="text-secondary small mb-4">Offer valid till 30th Dec</p>
                                    <button matButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon> Buy Now</button>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        }
                    </div>

                    }
                </div>
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], () => [{ type: Renderer2 }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsComponent, { className: "ProductsComponent", filePath: "src/app/pages/app/ecommerce/products.component.ts", lineNumber: 274 });
})();
export {
  ProductsComponent
};
//# sourceMappingURL=products.component-FJ52RLQT.js.map
