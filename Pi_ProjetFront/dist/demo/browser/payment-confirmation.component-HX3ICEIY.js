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
  CommonModule,
  DecimalPipe,
  MatIcon,
  MatIconModule,
  NgIf
} from "./chunk-ZG6WBW2I.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-O4O7EFUR.js";

// src/app/billing/pages/confirmation/payment-confirmation.component.ts
function PaymentConfirmationComponent_Conditional_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-icon", 13);
    \u0275\u0275text(2, "workspace_premium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4, "New Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.payment().planName);
  }
}
function PaymentConfirmationComponent_Conditional_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-icon", 13);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("$", \u0275\u0275pipeBind2(7, 2, ctx_r1.payment().amount, "1.2-2"), " ", ctx_r1.payment().currency);
  }
}
function PaymentConfirmationComponent_Conditional_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-icon", 13);
    \u0275\u0275text(2, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4, "Transaction ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "code", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.payment().paymentId);
  }
}
function PaymentConfirmationComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "h2", 5);
    \u0275\u0275text(5, "Subscription Updated!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7, " Your plan has been successfully upgraded to ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ". Your subscription is now active. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 7);
    \u0275\u0275template(12, PaymentConfirmationComponent_Conditional_3_div_12_Template, 7, 1, "div", 8)(13, PaymentConfirmationComponent_Conditional_3_div_13_Template, 8, 5, "div", 8)(14, PaymentConfirmationComponent_Conditional_3_div_14_Template, 7, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 9)(16, "button", 10);
    \u0275\u0275listener("click", function PaymentConfirmationComponent_Conditional_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToBilling());
    });
    \u0275\u0275elementStart(17, "mat-icon", 11);
    \u0275\u0275text(18, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Return to My Billing ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(((tmp_1_0 = ctx_r1.payment()) == null ? null : tmp_1_0.planName) ?? "your new plan");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.payment()) == null ? null : tmp_2_0.planName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.payment()) == null ? null : tmp_3_0.amount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.payment()) == null ? null : tmp_4_0.paymentId);
  }
}
function PaymentConfirmationComponent_Conditional_4_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, " Transaction ID: ");
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.payment().paymentId);
  }
}
function PaymentConfirmationComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 17)(2, "mat-icon");
    \u0275\u0275text(3, "mark_email_read");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "h2", 5);
    \u0275\u0275text(5, "Payment Received!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 18);
    \u0275\u0275text(7, " Your payment has been successfully recorded. Your organisation account has been created and is now active. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 19)(9, "mat-icon", 20);
    \u0275\u0275text(10, "mark_email_read");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "p", 21);
    \u0275\u0275text(13, "Check your inbox!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 22);
    \u0275\u0275text(15, " We have sent a confirmation email with your login credentials (email + default password). Please log in and change your password on first access. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(16, PaymentConfirmationComponent_Conditional_4_Conditional_16_Template, 4, 1, "p", 23);
    \u0275\u0275elementStart(17, "div", 9)(18, "button", 10);
    \u0275\u0275listener("click", function PaymentConfirmationComponent_Conditional_4_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLogin());
    });
    \u0275\u0275text(19, " Go to Login \xA0\u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.payment()) == null ? null : tmp_1_0.paymentId) ? 16 : -1);
  }
}
var PaymentConfirmationComponent = class _PaymentConfirmationComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.payment = signal(null, ...ngDevMode ? [{ debugName: "payment" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  /** True si l'utilisateur était déjà connecté quand il a fait le paiement (upgrade) */
  get isLoggedIn() {
    return !!this.authService.getToken() && !!this.authService.currentUser();
  }
  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    const st = nav?.extras?.state;
    if (st?.payment) {
      this.payment.set(st.payment);
      return;
    }
    const hist = history.state;
    if (hist?.payment) {
      this.payment.set(hist.payment);
    }
  }
  /** Retour au billing de l'org (utilisateur connecté) */
  goToBilling() {
    this.router.navigate(["/app/org-billing"]);
  }
  /** Redirection vers login (premier achat, pas encore connecté) */
  goToLogin() {
    this.router.navigate(["/auth/login"]);
  }
  static {
    this.\u0275fac = function PaymentConfirmationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentConfirmationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentConfirmationComponent, selectors: [["app-payment-confirmation"]], decls: 5, vars: 1, consts: [[1, "conf-page"], [1, "container", "py-5", 2, "max-width", "600px"], [1, "conf-card"], [1, "success-icon-wrap"], [1, "success-circle"], [1, "conf-title"], [1, "conf-subtitle"], [1, "update-summary"], ["class", "sum-row", 4, "ngIf"], [1, "text-center", "mt-4"], ["mat-flat-button", "", "color", "primary", 1, "action-btn", 3, "click"], [1, "material-icons-outlined"], [1, "sum-row"], [1, "material-icons-outlined", "sum-icon"], [1, "sum-label"], [1, "sum-val"], [1, "sum-code"], [1, "success-circle", "pending"], [1, "conf-main-text"], [1, "conf-inbox-row"], [1, "inbox-icon"], [1, "inbox-title"], [1, "inbox-body"], [1, "tx-id"], [1, "tx-code"]], template: function PaymentConfirmationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275conditionalCreate(3, PaymentConfirmationComponent_Conditional_3_Template, 20, 4)(4, PaymentConfirmationComponent_Conditional_4_Template, 20, 1);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.isLoggedIn ? 3 : 4);
      }
    }, dependencies: [CommonModule, NgIf, MatButtonModule, MatButton, MatIconModule, MatIcon, DecimalPipe], styles: ["\n\n.conf-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  background: #f0f4fa;\n  display: flex;\n  align-items: center;\n}\n.conf-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 40px 44px;\n  box-shadow: 0 4px 32px rgba(0, 0, 0, .10);\n}\n.success-icon-wrap[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.success-circle[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #059669,\n      #047857);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  box-shadow: 0 4px 18px rgba(5, 150, 105, .35);\n}\n.success-circle.pending[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  box-shadow: 0 4px 18px rgba(37, 99, 235, .35);\n}\n.success-circle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 34px;\n  width: 34px;\n  height: 34px;\n}\n.conf-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 10px;\n}\n.conf-subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #64748b;\n  font-size: .95rem;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.update-summary[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-radius: 14px;\n  padding: 16px 20px;\n  margin-bottom: 8px;\n}\n.sum-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid #d1fae5;\n}\n.sum-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sum-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #059669;\n  flex-shrink: 0;\n}\n.sum-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  flex: 1;\n}\n.sum-val[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.sum-code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 13px;\n  color: #2563eb;\n  font-weight: 700;\n}\n.conf-main-text[_ngcontent-%COMP%] {\n  font-size: .975rem;\n  color: #1e293b;\n  line-height: 1.65;\n  margin-bottom: 24px;\n}\n.conf-inbox-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 16px 18px;\n  margin-bottom: 20px;\n}\n.inbox-icon[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.inbox-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: .9rem;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n.inbox-body[_ngcontent-%COMP%] {\n  font-size: .83rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.tx-id[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: .83rem;\n  color: #94a3b8;\n  margin-bottom: 0;\n}\n.tx-code[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #2563eb;\n  font-family: monospace;\n  letter-spacing: .5px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  border-radius: 50px !important;\n  padding: 10px 36px !important;\n  font-weight: 700 !important;\n  font-size: .9rem !important;\n}\n/*# sourceMappingURL=payment-confirmation.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentConfirmationComponent, [{
    type: Component,
    args: [{ selector: "app-payment-confirmation", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule], template: `
  <div class="conf-page">
    <div class="container py-5" style="max-width:600px">
      <div class="conf-card">

        <!-- \u2500\u2500 CAS 1 : Utilisateur D\xC9J\xC0 CONNECT\xC9 (upgrade depuis l'app) \u2500\u2500 -->
        @if (isLoggedIn) {

          <!-- Ic\xF4ne succ\xE8s -->
          <div class="success-icon-wrap">
            <div class="success-circle">
              <mat-icon>check_circle</mat-icon>
            </div>
          </div>

          <h2 class="conf-title">Subscription Updated!</h2>
          <p class="conf-subtitle">
            Your plan has been successfully upgraded to
            <strong>{{ payment()?.planName ?? 'your new plan' }}</strong>.
            Your subscription is now active.
          </p>

          <!-- R\xE9sum\xE9 de la mise \xE0 jour -->
          <div class="update-summary">
            <div class="sum-row" *ngIf="payment()?.planName">
              <mat-icon class="material-icons-outlined sum-icon">workspace_premium</mat-icon>
              <span class="sum-label">New Plan</span>
              <strong class="sum-val">{{ payment()!.planName }}</strong>
            </div>
            <div class="sum-row" *ngIf="payment()?.amount">
              <mat-icon class="material-icons-outlined sum-icon">payments</mat-icon>
              <span class="sum-label">Amount</span>
              <strong class="sum-val">\${{ payment()!.amount | number:'1.2-2' }} {{ payment()!.currency }}</strong>
            </div>
            <div class="sum-row" *ngIf="payment()?.paymentId">
              <mat-icon class="material-icons-outlined sum-icon">tag</mat-icon>
              <span class="sum-label">Transaction ID</span>
              <code class="sum-code">{{ payment()!.paymentId }}</code>
            </div>
          </div>

          <!-- Retour au billing -->
          <div class="text-center mt-4">
            <button mat-flat-button color="primary" class="action-btn" (click)="goToBilling()">
              <mat-icon class="material-icons-outlined">arrow_back</mat-icon>
              Return to My Billing
            </button>
          </div>
        }

        <!-- \u2500\u2500 CAS 2 : Utilisateur NON CONNECT\xC9 (premier achat) \u2500\u2500 -->
        @else {

          <!-- Ic\xF4ne email -->
          <div class="success-icon-wrap">
            <div class="success-circle pending">
              <mat-icon>mark_email_read</mat-icon>
            </div>
          </div>

          <h2 class="conf-title">Payment Received!</h2>

          <p class="conf-main-text">
            Your payment has been successfully recorded.
            Your organisation account has been created and is now active.
          </p>

          <!-- Check inbox -->
          <div class="conf-inbox-row">
            <mat-icon class="inbox-icon">mark_email_read</mat-icon>
            <div>
              <p class="inbox-title">Check your inbox!</p>
              <p class="inbox-body">
                We have sent a confirmation email with your login credentials
                (email + default password). Please log in and change your password on first access.
              </p>
            </div>
          </div>

          <!-- Transaction ID -->
          @if (payment()?.paymentId) {
            <p class="tx-id">
              Transaction ID: <span class="tx-code">{{ payment()!.paymentId }}</span>
            </p>
          }

          <!-- Go to login -->
          <div class="text-center mt-4">
            <button mat-flat-button color="primary" class="action-btn" (click)="goToLogin()">
              Go to Login &nbsp;\u2192
            </button>
          </div>
        }

      </div>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;d259964693135b39d5ab68952d96b0d052fa2b5545398b143d6fc066a281ae61;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/billing/pages/confirmation/payment-confirmation.component.ts */\n.conf-page {\n  min-height: 80vh;\n  background: #f0f4fa;\n  display: flex;\n  align-items: center;\n}\n.conf-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 40px 44px;\n  box-shadow: 0 4px 32px rgba(0, 0, 0, .10);\n}\n.success-icon-wrap {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.success-circle {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #059669,\n      #047857);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  box-shadow: 0 4px 18px rgba(5, 150, 105, .35);\n}\n.success-circle.pending {\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  box-shadow: 0 4px 18px rgba(37, 99, 235, .35);\n}\n.success-circle mat-icon {\n  color: #fff;\n  font-size: 34px;\n  width: 34px;\n  height: 34px;\n}\n.conf-title {\n  text-align: center;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 10px;\n}\n.conf-subtitle {\n  text-align: center;\n  color: #64748b;\n  font-size: .95rem;\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.update-summary {\n  background: #f0fdf4;\n  border-radius: 14px;\n  padding: 16px 20px;\n  margin-bottom: 8px;\n}\n.sum-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid #d1fae5;\n}\n.sum-row:last-child {\n  border-bottom: none;\n}\n.sum-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #059669;\n  flex-shrink: 0;\n}\n.sum-label {\n  font-size: 13px;\n  color: #64748b;\n  flex: 1;\n}\n.sum-val {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.sum-code {\n  font-family: monospace;\n  font-size: 13px;\n  color: #2563eb;\n  font-weight: 700;\n}\n.conf-main-text {\n  font-size: .975rem;\n  color: #1e293b;\n  line-height: 1.65;\n  margin-bottom: 24px;\n}\n.conf-inbox-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  background: #f8fafc;\n  border-radius: 12px;\n  padding: 16px 18px;\n  margin-bottom: 20px;\n}\n.inbox-icon {\n  color: #1e293b;\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.inbox-title {\n  font-weight: 700;\n  font-size: .9rem;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n.inbox-body {\n  font-size: .83rem;\n  color: #64748b;\n  line-height: 1.55;\n  margin: 0;\n}\n.tx-id {\n  text-align: center;\n  font-size: .83rem;\n  color: #94a3b8;\n  margin-bottom: 0;\n}\n.tx-code {\n  font-weight: 700;\n  color: #2563eb;\n  font-family: monospace;\n  letter-spacing: .5px;\n}\n.action-btn {\n  border-radius: 50px !important;\n  padding: 10px 36px !important;\n  font-weight: 700 !important;\n  font-size: .9rem !important;\n}\n/*# sourceMappingURL=payment-confirmation.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentConfirmationComponent, { className: "PaymentConfirmationComponent", filePath: "src/app/billing/pages/confirmation/payment-confirmation.component.ts", lineNumber: 173 });
})();
export {
  PaymentConfirmationComponent
};
//# sourceMappingURL=payment-confirmation.component-HX3ICEIY.js.map
