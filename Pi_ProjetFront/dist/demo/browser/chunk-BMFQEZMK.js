import {
  Router
} from "./chunk-DYOMXT5J.js";
import {
  HttpClient,
  isPlatformBrowser
} from "./chunk-ZG6WBW2I.js";
import {
  Injectable,
  PLATFORM_ID,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-O4O7EFUR.js";

// src/app/auth/auth.service.ts
var AuthService = class _AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.API = "http://localhost:8084/api/auth";
    this.TOKEN_KEY = "session_token";
    this.USER_ID_KEY = "session_user_id";
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.currentUser = signal(null, ...ngDevMode ? [{ debugName: "currentUser" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  login(credentials) {
    return this.http.post(`${this.API}/login`, credentials).pipe(tap((res) => {
      this.setToken(res.token);
      this.setUserId(res.id);
      this.currentUser.set({
        id: res.id,
        email: res.email,
        fullName: res.fullName,
        role: res.role,
        mustChangePassword: res.mustChangePassword
      });
    }));
  }
  /**
   * Appelle POST /api/auth/change-password pour changer le mot de passe
   * après le premier login. Ne nécessite pas de token.
   */
  changePassword(userId, newPassword) {
    return this.http.post(`${this.API}/change-password`, { userId, newPassword });
  }
  logout() {
    this.http.post(`${this.API}/logout`, {}).subscribe();
    this.clearSession();
    this.router.navigate(["/auth/login"]);
  }
  fetchMe() {
    return this.http.get(`${this.API}/me`).pipe(tap((res) => this.currentUser.set({
      id: res.id,
      email: res.email,
      fullName: res.fullName,
      role: res.role,
      mustChangePassword: res.mustChangePassword
    })));
  }
  getToken() {
    if (!this.isBrowser)
      return null;
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getUserId() {
    if (!this.isBrowser)
      return null;
    const v = localStorage.getItem(this.USER_ID_KEY);
    return v ? Number(v) : null;
  }
  isLoggedIn() {
    return !!this.getToken() && !!this.currentUser();
  }
  setToken(token) {
    if (this.isBrowser)
      localStorage.setItem(this.TOKEN_KEY, token);
  }
  setUserId(id) {
    if (this.isBrowser)
      localStorage.setItem(this.USER_ID_KEY, String(id));
  }
  clearSession() {
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_ID_KEY);
    }
    this.currentUser.set(null);
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-BMFQEZMK.js.map
