import {
  HttpClient
} from "./chunk-ZG6WBW2I.js";
import {
  Injectable,
  catchError,
  inject,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-O4O7EFUR.js";

// src/app/billing/services/org-billing.service.ts
var OrgBillingService = class _OrgBillingService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = "http://localhost:8084/api/billing";
  }
  getMySubscription() {
    return this.http.get(`${this.API}/my-subscription`).pipe(catchError(() => of(null)));
  }
  getMyInvoices() {
    return this.http.get(`${this.API}/my-invoices`).pipe(catchError(() => of([])));
  }
  /** Fallback : récupère le paiement par email de l'user connecté */
  getMyPayment() {
    return this.http.get(`${this.API}/my-payment`).pipe(catchError(() => of(null)));
  }
  getActivePlans() {
    return this.http.get(`${this.API}/plans`).pipe(catchError(() => of([])));
  }
  getAllInvoices() {
    return this.http.get(`${this.API}/invoices`).pipe(catchError(() => of([])));
  }
  getMyLineItems() {
    return this.http.get(`${this.API}/my-line-items`).pipe(catchError(() => of([])));
  }
  getLineItemsByInvoice(invoiceId) {
    return this.http.get(`${this.API}/invoices/${invoiceId}/line-items`).pipe(catchError(() => of([])));
  }
  getMyPaymentAttempts() {
    return this.http.get(`${this.API}/my-payment-attempts`).pipe(catchError(() => of([])));
  }
  getMyUsage() {
    return this.http.get(`${this.API}/my-usage`).pipe(catchError(() => of(null)));
  }
  getAllPaymentAttempts() {
    return this.http.get(`${this.API}/payment-attempts`).pipe(catchError(() => of([])));
  }
  getAllUsageQuotas() {
    return this.http.get(`${this.API}/usage-quotas`).pipe(catchError(() => of([])));
  }
  static {
    this.\u0275fac = function OrgBillingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrgBillingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrgBillingService, factory: _OrgBillingService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrgBillingService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  OrgBillingService
};
//# sourceMappingURL=chunk-3NOE6EHS.js.map
