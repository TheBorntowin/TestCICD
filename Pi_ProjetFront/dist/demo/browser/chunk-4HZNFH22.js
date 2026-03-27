import {
  MatPseudoCheckbox
} from "./chunk-2GCDXJIV.js";
import {
  BidiModule
} from "./chunk-ZG6WBW2I.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-O4O7EFUR.js";

// node_modules/@angular/material/fesm2022/_pseudo-checkbox-module-chunk.mjs
var MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
  static \u0275fac = function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPseudoCheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatPseudoCheckboxModule,
    imports: [MatPseudoCheckbox],
    exports: [MatPseudoCheckbox, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatPseudoCheckbox],
      exports: [MatPseudoCheckbox, BidiModule]
    }]
  }], null, null);
})();

export {
  MatPseudoCheckboxModule
};
//# sourceMappingURL=chunk-4HZNFH22.js.map
