import {
  isPlatformBrowser
} from "./chunk-ZG6WBW2I.js";
import {
  Injectable,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-O4O7EFUR.js";

// src/app/billing/services/checkout-state.service.ts
var CHECKOUT_KEY = "cmp_checkout_state";
var CheckoutStateService = class _CheckoutStateService {
  constructor() {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.checkoutState = signal(null, ...ngDevMode ? [{ debugName: "checkoutState" }] : (
      /* istanbul ignore next */
      []
    ));
    this.restore();
  }
  save(state) {
    this.checkoutState.set(state);
    if (this.isBrowser) {
      localStorage.setItem(CHECKOUT_KEY, JSON.stringify(state));
    }
  }
  restore() {
    if (!this.isBrowser)
      return;
    const raw = localStorage.getItem(CHECKOUT_KEY);
    if (raw) {
      try {
        this.checkoutState.set(JSON.parse(raw));
      } catch (e) {
        localStorage.removeItem(CHECKOUT_KEY);
      }
    }
  }
  clear() {
    this.checkoutState.set(null);
    if (this.isBrowser) {
      localStorage.removeItem(CHECKOUT_KEY);
    }
  }
  hasState() {
    return !!this.checkoutState();
  }
  static {
    this.\u0275fac = function CheckoutStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CheckoutStateService, factory: _CheckoutStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutStateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  CheckoutStateService
};
//# sourceMappingURL=chunk-7OG4Z52K.js.map
