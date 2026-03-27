import {
  MatInput,
  MatInputModule
} from "./chunk-45QHUHCH.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-ZLA4QS3A.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import {
  MatFormField,
  MatPrefix,
  MatSuffix
} from "./chunk-XPQBAS5O.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HGLJSDQ3.js";
import {
  CommonModule,
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-O4O7EFUR.js";

// src/app/components/incrementor/app-incrementor.component.ts
var IncrementorComponent = class _IncrementorComponent {
  constructor() {
    this.count = 0;
  }
  ngOnInit() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
  static {
    this.\u0275fac = function IncrementorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IncrementorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncrementorComponent, selectors: [["app-incrementor"]], decls: 8, vars: 2, consts: [["appearance", "outline", 1, "incrementor", "inline-small", "border-light", "rounded"], ["matIconButton", "", "matPrefix", "", 3, "click"], ["matInput", "", "placeholder", "", "value", "0", 3, "ngModelChange", "ngModel", "min"], ["matIconButton", "", "matSuffix", "", 3, "click"]], template: function IncrementorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-form-field", 0)(1, "button", 1);
        \u0275\u0275listener("click", function IncrementorComponent_Template_button_click_1_listener() {
          return ctx.decrement();
        });
        \u0275\u0275elementStart(2, "mat-icon");
        \u0275\u0275text(3, "remove");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "input", 2);
        \u0275\u0275twoWayListener("ngModelChange", function IncrementorComponent_Template_input_ngModelChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.count, $event) || (ctx.count = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 3);
        \u0275\u0275listener("click", function IncrementorComponent_Template_button_click_5_listener() {
          return ctx.increment();
        });
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "add");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.count);
        \u0275\u0275property("min", 0);
      }
    }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatFormFieldModule, MatFormField, MatPrefix, MatSuffix, MatInputModule, MatInput, MatIconModule, MatIcon, MatButtonModule, MatIconButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncrementorComponent, [{
    type: Component,
    args: [{ selector: "app-incrementor", standalone: true, imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule], template: `
        <mat-form-field appearance="outline" class="incrementor inline-small border-light rounded">
            <button matIconButton matPrefix (click)="decrement()"><mat-icon>remove</mat-icon></button>
            <input matInput placeholder="" value="0" [(ngModel)]="count" [min]="0" />
            <button matIconButton matSuffix (click)="increment()"><mat-icon>add</mat-icon></button>
        </mat-form-field>
    ` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncrementorComponent, { className: "IncrementorComponent", filePath: "src/app/components/incrementor/app-incrementor.component.ts", lineNumber: 22 });
})();

export {
  IncrementorComponent
};
//# sourceMappingURL=chunk-5BURJXX5.js.map
