import {
  HttpClient
} from "./chunk-ZG6WBW2I.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-O4O7EFUR.js";

// src/app/users/user.service.ts
var UserService = class _UserService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = "http://localhost:8084/api/users";
  }
  getAll() {
    return this.http.get(this.base);
  }
  create(body) {
    return this.http.post(this.base, body);
  }
  getById(id) {
    return this.http.get(`${this.base}/${id}`);
  }
  update(id, body) {
    return this.http.put(`${this.base}/${id}`, body);
  }
  delete(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  changeRole(id, role) {
    return this.http.patch(`${this.base}/${id}/role`, { role });
  }
  changeStatus(id, isActive) {
    return this.http.patch(`${this.base}/${id}/status`, { isActive });
  }
  static {
    this.\u0275fac = function UserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  UserService
};
//# sourceMappingURL=chunk-RKSB5HOU.js.map
