import {
  MatDateRangeInput,
  MatDateRangePicker,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatEndDate,
  MatStartDate
} from "./chunk-RG7V5CFX.js";
import {
  provideNativeDateAdapter
} from "./chunk-IJRF7KWR.js";
import {
  MatButtonModule
} from "./chunk-ZLA4QS3A.js";
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
  ReactiveFormsModule
} from "./chunk-HGLJSDQ3.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtext
} from "./chunk-O4O7EFUR.js";

// src/app/components/page-right/pageright.component.ts
var today = /* @__PURE__ */ new Date();
var month = today.getMonth();
var year = today.getFullYear();
var PageRightComponent = class _PageRightComponent {
  constructor() {
    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 19))
    });
  }
  static {
    this.\u0275fac = function PageRightComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageRightComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageRightComponent, selectors: [["app-page-right"]], features: [\u0275\u0275ProvidersFeature([
      // ... other providers
      provideNativeDateAdapter()
    ])], decls: 9, vars: 3, consts: [["campaignOnePicker", ""], ["appearance", "outline", 1, "w-100", "inline-small"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "placeholder", "Start date", "formControlName", "start"], ["matEndDate", "", "placeholder", "End date", "formControlName", "end"], ["matIconSuffix", "", 3, "for"]], template: function PageRightComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-label");
        \u0275\u0275text(2, "Date Range");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "mat-date-range-input", 2);
        \u0275\u0275element(4, "input", 3)(5, "input", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "mat-datepicker-toggle", 5)(7, "mat-date-range-picker", null, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const campaignOnePicker_r1 = \u0275\u0275reference(8);
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.campaignOne)("rangePicker", campaignOnePicker_r1);
        \u0275\u0275advance(3);
        \u0275\u0275property("for", campaignOnePicker_r1);
      }
    }, dependencies: [MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatDatepickerModule, MatDatepickerToggle, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatButtonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageRightComponent, [{
    type: Component,
    args: [{ selector: "app-page-right", standalone: true, imports: [MatFormFieldModule, MatDatepickerModule, MatButtonModule, FormsModule, ReactiveFormsModule], template: `<mat-form-field class="w-100 inline-small" appearance="outline">
        <mat-label>Date Range</mat-label>
        <mat-date-range-input [formGroup]="campaignOne" [rangePicker]="campaignOnePicker">
            <input matStartDate placeholder="Start date" formControlName="start" />
            <input matEndDate placeholder="End date" formControlName="end" />
        </mat-date-range-input>
        <mat-datepicker-toggle matIconSuffix [for]="campaignOnePicker"></mat-datepicker-toggle>
        <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>
    </mat-form-field> `, providers: [
      // ... other providers
      provideNativeDateAdapter()
    ], changeDetection: ChangeDetectionStrategy.OnPush }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageRightComponent, { className: "PageRightComponent", filePath: "src/app/components/page-right/pageright.component.ts", lineNumber: 32 });
})();

export {
  PageRightComponent
};
//# sourceMappingURL=chunk-BMFH3O7D.js.map
