import {
  BillingService
} from "./chunk-BL2Y4C67.js";
import {
  OrgBillingService
} from "./chunk-3NOE6EHS.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-WAVP7W2J.js";
import {
  MatTooltipModule
} from "./chunk-6LUZEZUF.js";
import {
  MatTooltip
} from "./chunk-O4BMA6W6.js";
import {
  MatTab,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-TCWW663Y.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import "./chunk-NHVW6DX5.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-ZLA4QS3A.js";
import {
  RouterModule
} from "./chunk-DYOMXT5J.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  MatIcon,
  MatIconModule,
  NgForOf,
  NgIf
} from "./chunk-ZG6WBW2I.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/super-admin/super-admin-billing.component.ts
function SuperAdminBillingComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 56);
    \u0275\u0275text(1, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Plans ");
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.plans.length);
  }
}
function SuperAdminBillingComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "mat-card", 59)(2, "mat-card-content")(3, "div", 60)(4, "div")(5, "h4", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "code", 62);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 63);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 64)(12, "div", 65)(13, "span", 66);
    \u0275\u0275text(14, "Monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 67);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 65)(18, "span", 66);
    \u0275\u0275text(19, "Annual/mo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 67);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 68)(23, "div", 69)(24, "mat-icon", 11);
    \u0275\u0275text(25, "storage");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 69)(29, "mat-icon", 11);
    \u0275\u0275text(30, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 69)(33, "mat-icon", 11);
    \u0275\u0275text(34, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 69)(37, "mat-icon", 11);
    \u0275\u0275text(38, "lock_open");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 70)(41, "button", 71);
    \u0275\u0275listener("click", function SuperAdminBillingComponent_div_68_Template_button_click_41_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editPlan(p_r3));
    });
    \u0275\u0275elementStart(42, "mat-icon", 11);
    \u0275\u0275text(43, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 72);
    \u0275\u0275listener("click", function SuperAdminBillingComponent_div_68_Template_button_click_45_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePlan(p_r3));
    });
    \u0275\u0275elementStart(46, "mat-icon", 11);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r3.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(p_r3.isActive ? "pill-green" : "pill-red");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r3.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", p_r3.priceMonthly);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", p_r3.priceYearly);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(27, 16, p_r3.storageMb / 1024, "1.0-0"), " GB storage");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("ML: ", p_r3.mlTier);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Support: ", p_r3.supportTier);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("API: ", p_r3.apiAccess ? "Yes" : "No", " \xB7 SSO: ", p_r3.ssoEnabled ? "Yes" : "No");
    \u0275\u0275advance(6);
    \u0275\u0275classMap(p_r3.isActive ? "btn-danger-icon" : "btn-success-icon");
    \u0275\u0275property("matTooltip", p_r3.isActive ? "Deactivate plan" : "Activate plan");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.isActive ? "block" : "check_circle");
  }
}
function SuperAdminBillingComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 54)(2, "mat-icon", 11);
    \u0275\u0275text(3, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No plans yet. They are created automatically when an organisation pays.");
    \u0275\u0275elementEnd()()();
  }
}
function SuperAdminBillingComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 56);
    \u0275\u0275text(1, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Invoices ");
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.allInvoices.length);
  }
}
function SuperAdminBillingComponent_th_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Invoice #");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 75)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4.invoiceNumber);
  }
}
function SuperAdminBillingComponent_th_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Plan");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5.planName ?? "\u2014");
  }
}
function SuperAdminBillingComponent_th_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Subtotal");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 1, i_r6.subtotal, "1.2-2"));
  }
}
function SuperAdminBillingComponent_th_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Tax");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 77);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(2, 1, i_r7.taxAmount, "1.2-2"));
  }
}
function SuperAdminBillingComponent_th_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Total");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("$", \u0275\u0275pipeBind2(3, 2, i_r8.total, "1.2-2"), " ", i_r8.currency);
  }
}
function SuperAdminBillingComponent_th_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getInvClass(i_r9.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r9.status);
  }
}
function SuperAdminBillingComponent_th_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Period");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, i_r10.billingPeriodStart, "dd/MM/yy"), " \u2192 ", \u0275\u0275pipeBind2(3, 5, i_r10.billingPeriodEnd, "dd/MM/yy"), " ");
  }
}
function SuperAdminBillingComponent_th_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Paid At");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 79);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", i_r11.paidAt ? \u0275\u0275pipeBind2(2, 1, i_r11.paidAt, "dd MMM yyyy") : "\u2014", " ");
  }
}
function SuperAdminBillingComponent_tr_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 80);
  }
}
function SuperAdminBillingComponent_tr_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 81);
  }
}
function SuperAdminBillingComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "mat-icon", 11);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No invoices yet. They are generated automatically on payment.");
    \u0275\u0275elementEnd()();
  }
}
function SuperAdminBillingComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 56);
    \u0275\u0275text(1, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Payments ");
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.payments.length);
  }
}
function SuperAdminBillingComponent_th_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Organisation");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 75)(1, "h5", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.orgName ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.adminEmail);
  }
}
function SuperAdminBillingComponent_th_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Plan");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.planName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r13.billingCycle);
  }
}
function SuperAdminBillingComponent_th_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(3, 1, p_r14.amount, "1.2-2"));
  }
}
function SuperAdminBillingComponent_th_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "span", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getPayStatus(p_r15.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r15.status);
  }
}
function SuperAdminBillingComponent_th_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r16.paymentId);
  }
}
function SuperAdminBillingComponent_th_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 74);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminBillingComponent_td_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 78);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, p_r17.createdAt, "dd MMM yyyy"), " ");
  }
}
function SuperAdminBillingComponent_tr_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 80);
  }
}
function SuperAdminBillingComponent_tr_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 81);
  }
}
function SuperAdminBillingComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "mat-icon", 11);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No payments recorded yet.");
    \u0275\u0275elementEnd()();
  }
}
function SuperAdminBillingComponent_ng_template_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 56);
    \u0275\u0275text(1, "trending_down");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "Churn Risk ");
  }
}
function SuperAdminBillingComponent_div_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "mat-card", 83)(2, "mat-card-content")(3, "div", 84)(4, "h5", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 85);
    \u0275\u0275element(9, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 87)(11, "span", 88);
    \u0275\u0275text(12, "Churn probability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 89);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r18.org);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getRiskClass(c_r18.risk));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r18.risk);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", c_r18.score * 100, "%")("background", c_r18.risk === "HIGH" ? "#ef4444" : c_r18.risk === "MEDIUM" ? "#f59e0b" : "#22c55e");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(15, 11, c_r18.score * 100, "1.0-0"), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Plan: ", c_r18.plan, " \xB7 WAU ratio: ", c_r18.wau);
  }
}
function SuperAdminBillingComponent_ng_template_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 56);
    \u0275\u0275text(1, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "Upsell ");
  }
}
function SuperAdminBillingComponent_div_180_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "mat-card", 83)(2, "mat-card-content")(3, "div", 84)(4, "h5", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 90);
    \u0275\u0275text(9, "Current: ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 90);
    \u0275\u0275text(13, "\u2192 Recommended: ");
    \u0275\u0275elementStart(14, "strong", 91);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 22);
    \u0275\u0275text(17, "Revenue impact: ");
    \u0275\u0275elementStart(18, "strong", 92);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const u_r19 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r19.org);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.getUpsellClass(u_r19.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r19.status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r19.current);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r19.target);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("+$", u_r19.impact, "/mo");
  }
}
function SuperAdminBillingComponent_div_186_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275listener("click", function SuperAdminBillingComponent_div_186_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementStart(1, "mat-card", 94);
    \u0275\u0275listener("click", function SuperAdminBillingComponent_div_186_Template_mat_card_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "mat-card-content")(3, "div", 95)(4, "h4", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 96);
    \u0275\u0275listener("click", function SuperAdminBillingComponent_div_186_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 97)(10, "div", 98)(11, "label", 99);
    \u0275\u0275text(12, "Display Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function SuperAdminBillingComponent_div_186_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pf.displayName, $event) || (ctx_r0.pf.displayName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 101)(15, "label", 99);
    \u0275\u0275text(16, "Monthly Price ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function SuperAdminBillingComponent_div_186_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pf.priceMonthly, $event) || (ctx_r0.pf.priceMonthly = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 101)(19, "label", 99);
    \u0275\u0275text(20, "Annual Price/mo ($)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function SuperAdminBillingComponent_div_186_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pf.priceYearly, $event) || (ctx_r0.pf.priceYearly = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 101)(23, "label", 99);
    \u0275\u0275text(24, "Storage (GB)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function SuperAdminBillingComponent_div_186_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pf.storageMb, $event) || (ctx_r0.pf.storageMb = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 101)(27, "label", 99);
    \u0275\u0275text(28, "ML Tier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 103);
    \u0275\u0275twoWayListener("ngModelChange", function SuperAdminBillingComponent_div_186_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pf.mlTier, $event) || (ctx_r0.pf.mlTier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(30, "option");
    \u0275\u0275text(31, "NONE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option");
    \u0275\u0275text(33, "BASIC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option");
    \u0275\u0275text(35, "FULL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option");
    \u0275\u0275text(37, "FULL_API");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 98)(39, "label", 99);
    \u0275\u0275text(40, "Support Tier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 103);
    \u0275\u0275twoWayListener("ngModelChange", function SuperAdminBillingComponent_div_186_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pf.supportTier, $event) || (ctx_r0.pf.supportTier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(42, "option");
    \u0275\u0275text(43, "COMMUNITY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option");
    \u0275\u0275text(45, "EMAIL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option");
    \u0275\u0275text(47, "PRIORITY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option");
    \u0275\u0275text(49, "DEDICATED");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 104)(51, "button", 105);
    \u0275\u0275listener("click", function SuperAdminBillingComponent_div_186_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showModal = false);
    });
    \u0275\u0275text(52, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 23);
    \u0275\u0275listener("click", function SuperAdminBillingComponent_div_186_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.savePlan());
    });
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.editing ? "Edit Plan" : "New Plan");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pf.displayName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pf.priceMonthly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pf.priceYearly);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pf.storageMb);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pf.mlTier);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pf.supportTier);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", ctx_r0.editing ? "Save Changes" : "Create Plan", " ");
  }
}
var SuperAdminBillingComponent = class _SuperAdminBillingComponent {
  constructor() {
    this.orgBilling = inject(OrgBillingService);
    this.billingService = inject(BillingService);
    this.plans = [];
    this.allInvoices = [];
    this.invoicesDS = new MatTableDataSource([]);
    this.invCols = ["number", "plan", "subtotal", "tax", "total", "status", "period", "paidAt"];
    this.payments = [];
    this.paymentsDS = new MatTableDataSource([]);
    this.payCols = ["org", "plan", "amount", "status", "id", "date"];
    this.churnMock = [
      { org: "Acme Corp", plan: "Starter", score: 0.82, risk: "HIGH", wau: "24%" },
      { org: "TechHub Inc", plan: "Pro", score: 0.45, risk: "MEDIUM", wau: "61%" },
      { org: "EduSchool", plan: "Faculty", score: 0.12, risk: "LOW", wau: "88%" }
    ];
    this.upsellMock = [
      { org: "Acme Corp", current: "Starter", target: "Pro", impact: 100, status: "PENDING" },
      { org: "TechHub Inc", current: "Pro", target: "Business", impact: 200, status: "SHOWN" }
    ];
    this.paymentAttempts = [];
    this.attemptsGlobalDS = new MatTableDataSource([]);
    this.attemptGlobalCols = ["org", "invoice", "amount", "status", "date"];
    this.usageQuotas = [];
    this.showModal = false;
    this.editing = null;
    this.pf = { displayName: "", priceMonthly: 0, priceYearly: 0, storageMb: 10, mlTier: "BASIC", supportTier: "EMAIL" };
  }
  get totalRevenue() {
    return this.payments.filter((p) => p.status === "CONFIRMED").reduce((s, p) => s + p.amount, 0);
  }
  get confirmedPayments() {
    return this.payments.filter((p) => p.status === "CONFIRMED").length;
  }
  ngOnInit() {
    this.orgBilling.getActivePlans().subscribe((d) => {
      this.plans = d;
    });
    this.orgBilling.getAllInvoices().subscribe((d) => {
      this.allInvoices = d;
      this.invoicesDS.data = d;
    });
    this.orgBilling.getAllPaymentAttempts().subscribe((d) => {
      this.paymentAttempts = d;
      this.attemptsGlobalDS.data = d;
    });
    this.orgBilling.getAllUsageQuotas().subscribe((d) => {
      this.usageQuotas = d;
    });
    this.billingService.getAllPayments().subscribe((d) => {
      this.payments = d;
      this.paymentsDS.data = d;
    });
  }
  openAddPlan() {
    this.editing = null;
    this.pf = { displayName: "", priceMonthly: 0, priceYearly: 0, storageMb: 10, mlTier: "BASIC", supportTier: "EMAIL" };
    this.showModal = true;
  }
  editPlan(p) {
    this.editing = p;
    this.pf = { displayName: p.displayName, priceMonthly: p.priceMonthly, priceYearly: p.priceYearly, storageMb: Math.round(p.storageMb / 1024), mlTier: p.mlTier, supportTier: p.supportTier };
    this.showModal = true;
  }
  savePlan() {
    console.log("Plan saved:", this.pf);
    this.showModal = false;
  }
  togglePlan(p) {
    p.isActive = !p.isActive;
  }
  getInvClass(s) {
    return { PAID: "pill-green", OPEN: "pill-yellow", DRAFT: "pill-blue", VOID: "pill-red" }[s] ?? "pill-blue";
  }
  getPayStatus(s) {
    return { CONFIRMED: "pill-green", PENDING: "pill-yellow", REJECTED: "pill-red" }[s] ?? "pill-blue";
  }
  getRiskClass(r) {
    return { HIGH: "pill-red", MEDIUM: "pill-yellow", LOW: "pill-green" }[r] ?? "pill-blue";
  }
  getUpsellClass(s) {
    return { PENDING: "pill-yellow", SHOWN: "pill-blue", ACCEPTED: "pill-green", DISMISSED: "pill-red" }[s] ?? "pill-blue";
  }
  static {
    this.\u0275fac = function SuperAdminBillingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SuperAdminBillingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperAdminBillingComponent, selectors: [["app-super-admin-billing"]], decls: 187, vars: 21, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4", "mb-3"], [1, "col-6", "col-lg-3"], [1, "mb-3", "stat-card"], [1, "stat-icon", "theme-blue"], [1, "material-icons-outlined"], [1, "stat-label"], [1, "stat-val"], [1, "stat-icon", "theme-green"], [1, "stat-icon", "theme-yellow"], [1, "stat-icon", "theme-purple"], [1, "p-0"], ["animationDuration", "200ms", 3, "dynamicHeight"], ["mat-tab-label", ""], [1, "tab-content"], [1, "tab-header"], [1, "text-secondary", "small", "mb-0"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "row", "gx-3", "gx-lg-4", "mt-3"], ["class", "col-12 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], ["class", "col-12", 4, "ngIf"], [1, "pill", "pill-blue"], [1, "table-responsive", "mt-3"], ["mat-table", "", 1, "bg-none", "w-100", 3, "dataSource"], ["matColumnDef", "number"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "py-2", 4, "matCellDef"], ["matColumnDef", "plan"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "subtotal"], ["matColumnDef", "tax"], ["mat-cell", "", "class", "text-secondary", 4, "matCellDef"], ["matColumnDef", "total"], ["matColumnDef", "status"], ["matColumnDef", "period"], ["mat-cell", "", "class", "text-secondary small", 4, "matCellDef"], ["matColumnDef", "paidAt"], ["mat-cell", "", "class", "small text-secondary", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["matColumnDef", "org"], ["matColumnDef", "amount"], ["matColumnDef", "id"], ["matColumnDef", "date"], [1, "pill", "pill-purple"], [1, "row", "gx-3", "mt-3"], ["class", "col-12 col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "empty-state"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "material-icons-outlined", "tab-icon"], [1, "tab-badge"], [1, "col-12", "col-md-6", "col-xl-4"], [1, "plan-card", "mb-3"], [1, "plan-head"], [1, "mb-0"], [1, "text-secondary", 2, "font-size", "11px"], [1, "pill"], [1, "price-row"], [1, "price-box"], [1, "price-lbl"], [1, "price-val"], [1, "plan-meta"], [1, "meta-row"], [1, "plan-actions"], ["mat-stroked-button", "", 1, "action-btn", 3, "click"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "col-12"], ["mat-header-cell", ""], ["mat-cell", "", 1, "py-2"], ["mat-cell", ""], ["mat-cell", "", 1, "text-secondary"], ["mat-cell", "", 1, "text-secondary", "small"], ["mat-cell", "", 1, "small", "text-secondary"], ["mat-header-row", ""], ["mat-row", ""], [1, "col-12", "col-md-6", "col-lg-4"], [1, "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "churn-bar", "mb-2"], [1, "churn-fill"], [1, "d-flex", "justify-content-between"], [1, "text-secondary", "small"], [1, "text-secondary", "small", "mt-1", "mb-0"], [1, "text-secondary", "small", "mb-1"], [1, "text-theme"], [2, "color", "#22c55e"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["mat-icon-button", "", 3, "click"], [1, "row", "gx-3"], [1, "col-12", "mb-3"], [1, "field-lbl"], ["placeholder", "e.g. Pro", 1, "field-input", 3, "ngModelChange", "ngModel"], [1, "col-6", "mb-3"], ["type", "number", 1, "field-input", 3, "ngModelChange", "ngModel"], [1, "field-input", 3, "ngModelChange", "ngModel"], [1, "d-flex", "gap-2", "justify-content-end"], ["mat-stroked-button", "", 3, "click"]], template: function SuperAdminBillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "Billing Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Platform-wide billing, plans & revenue overview");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "mat-card", 9)(12, "mat-card-content")(13, "div", 10)(14, "mat-icon", 11);
        \u0275\u0275text(15, "inventory_2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "p", 12);
        \u0275\u0275text(17, "Active Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h3", 13);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "div", 8)(21, "mat-card", 9)(22, "mat-card-content")(23, "div", 14)(24, "mat-icon", 11);
        \u0275\u0275text(25, "receipt_long");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "p", 12);
        \u0275\u0275text(27, "Total Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "h3", 13);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 8)(31, "mat-card", 9)(32, "mat-card-content")(33, "div", 15)(34, "mat-icon", 11);
        \u0275\u0275text(35, "payments");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "p", 12);
        \u0275\u0275text(37, "Total Revenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h3", 13);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "number");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(41, "div", 8)(42, "mat-card", 9)(43, "mat-card-content")(44, "div", 16)(45, "mat-icon", 11);
        \u0275\u0275text(46, "business");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "p", 12);
        \u0275\u0275text(48, "Organisations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h3", 13);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(51, "mat-card")(52, "mat-card-content", 17)(53, "mat-tab-group", 18)(54, "mat-tab");
        \u0275\u0275template(55, SuperAdminBillingComponent_ng_template_55_Template, 5, 1, "ng-template", 19);
        \u0275\u0275elementStart(56, "div", 20)(57, "div", 21)(58, "div")(59, "h4", 4);
        \u0275\u0275text(60, "Subscription Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p", 22);
        \u0275\u0275text(62, "Create and manage all subscription tiers \u2014 read/write");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "button", 23);
        \u0275\u0275listener("click", function SuperAdminBillingComponent_Template_button_click_63_listener() {
          return ctx.openAddPlan();
        });
        \u0275\u0275elementStart(64, "mat-icon");
        \u0275\u0275text(65, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, " New Plan ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 24);
        \u0275\u0275template(68, SuperAdminBillingComponent_div_68_Template, 48, 19, "div", 25)(69, SuperAdminBillingComponent_div_69_Template, 6, 0, "div", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "mat-tab");
        \u0275\u0275template(71, SuperAdminBillingComponent_ng_template_71_Template, 5, 1, "ng-template", 19);
        \u0275\u0275elementStart(72, "div", 20)(73, "div", 21)(74, "div")(75, "h4", 4);
        \u0275\u0275text(76, "All Platform Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p", 22);
        \u0275\u0275text(78, "Global audit \u2014 read only (legal documents, cannot be modified)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "span", 27);
        \u0275\u0275text(80, "READ ONLY");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 28)(82, "table", 29);
        \u0275\u0275elementContainerStart(83, 30);
        \u0275\u0275template(84, SuperAdminBillingComponent_th_84_Template, 2, 0, "th", 31)(85, SuperAdminBillingComponent_td_85_Template, 3, 1, "td", 32);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(86, 33);
        \u0275\u0275template(87, SuperAdminBillingComponent_th_87_Template, 2, 0, "th", 31)(88, SuperAdminBillingComponent_td_88_Template, 3, 1, "td", 34);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(89, 35);
        \u0275\u0275template(90, SuperAdminBillingComponent_th_90_Template, 2, 0, "th", 31)(91, SuperAdminBillingComponent_td_91_Template, 3, 4, "td", 34);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(92, 36);
        \u0275\u0275template(93, SuperAdminBillingComponent_th_93_Template, 2, 0, "th", 31)(94, SuperAdminBillingComponent_td_94_Template, 3, 4, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(95, 38);
        \u0275\u0275template(96, SuperAdminBillingComponent_th_96_Template, 2, 0, "th", 31)(97, SuperAdminBillingComponent_td_97_Template, 4, 5, "td", 34);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(98, 39);
        \u0275\u0275template(99, SuperAdminBillingComponent_th_99_Template, 2, 0, "th", 31)(100, SuperAdminBillingComponent_td_100_Template, 3, 3, "td", 34);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(101, 40);
        \u0275\u0275template(102, SuperAdminBillingComponent_th_102_Template, 2, 0, "th", 31)(103, SuperAdminBillingComponent_td_103_Template, 4, 8, "td", 41);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(104, 42);
        \u0275\u0275template(105, SuperAdminBillingComponent_th_105_Template, 2, 0, "th", 31)(106, SuperAdminBillingComponent_td_106_Template, 3, 4, "td", 43);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(107, SuperAdminBillingComponent_tr_107_Template, 1, 0, "tr", 44)(108, SuperAdminBillingComponent_tr_108_Template, 1, 0, "tr", 45);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(109, SuperAdminBillingComponent_div_109_Template, 5, 0, "div", 46);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "mat-tab");
        \u0275\u0275template(111, SuperAdminBillingComponent_ng_template_111_Template, 5, 1, "ng-template", 19);
        \u0275\u0275elementStart(112, "div", 20)(113, "div", 21)(114, "div")(115, "h4", 4);
        \u0275\u0275text(116, "Payment Attempts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "p", 22);
        \u0275\u0275text(118, "All organisation payments \u2014 read only for audit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "span", 27);
        \u0275\u0275text(120, "READ ONLY");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div", 28)(122, "table", 29);
        \u0275\u0275elementContainerStart(123, 47);
        \u0275\u0275template(124, SuperAdminBillingComponent_th_124_Template, 2, 0, "th", 31)(125, SuperAdminBillingComponent_td_125_Template, 5, 2, "td", 32);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(126, 33);
        \u0275\u0275template(127, SuperAdminBillingComponent_th_127_Template, 2, 0, "th", 31)(128, SuperAdminBillingComponent_td_128_Template, 5, 2, "td", 34);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(129, 48);
        \u0275\u0275template(130, SuperAdminBillingComponent_th_130_Template, 2, 0, "th", 31)(131, SuperAdminBillingComponent_td_131_Template, 4, 4, "td", 34);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(132, 39);
        \u0275\u0275template(133, SuperAdminBillingComponent_th_133_Template, 2, 0, "th", 31)(134, SuperAdminBillingComponent_td_134_Template, 3, 3, "td", 34);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(135, 49);
        \u0275\u0275template(136, SuperAdminBillingComponent_th_136_Template, 2, 0, "th", 31)(137, SuperAdminBillingComponent_td_137_Template, 2, 1, "td", 41);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(138, 50);
        \u0275\u0275template(139, SuperAdminBillingComponent_th_139_Template, 2, 0, "th", 31)(140, SuperAdminBillingComponent_td_140_Template, 3, 4, "td", 41);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(141, SuperAdminBillingComponent_tr_141_Template, 1, 0, "tr", 44)(142, SuperAdminBillingComponent_tr_142_Template, 1, 0, "tr", 45);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(143, SuperAdminBillingComponent_div_143_Template, 5, 0, "div", 46);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "mat-tab");
        \u0275\u0275template(145, SuperAdminBillingComponent_ng_template_145_Template, 3, 0, "ng-template", 19);
        \u0275\u0275elementStart(146, "div", 20)(147, "div", 21)(148, "div")(149, "h4", 4);
        \u0275\u0275text(150, "ML Churn Predictions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "p", 22);
        \u0275\u0275text(152, "Table: ");
        \u0275\u0275elementStart(153, "code");
        \u0275\u0275text(154, "ml_churn_predictions");
        \u0275\u0275elementEnd();
        \u0275\u0275text(155, " \u2014 generated by ML pipeline, read only");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "span", 51);
        \u0275\u0275text(157, "ML GENERATED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div", 52);
        \u0275\u0275template(159, SuperAdminBillingComponent_div_159_Template, 18, 14, "div", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "div", 54)(161, "mat-icon", 11);
        \u0275\u0275text(162, "psychology");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "p");
        \u0275\u0275text(164, "Real predictions generated by the ML pipeline (Logistic Regression + Random Forest) will appear here. Inference: weekly batch.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(165, "mat-tab");
        \u0275\u0275template(166, SuperAdminBillingComponent_ng_template_166_Template, 3, 0, "ng-template", 19);
        \u0275\u0275elementStart(167, "div", 20)(168, "div", 21)(169, "div")(170, "h4", 4);
        \u0275\u0275text(171, "Upsell Recommendations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "p", 22);
        \u0275\u0275text(173, "Table: ");
        \u0275\u0275elementStart(174, "code");
        \u0275\u0275text(175, "upsell_recommendations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(176, " \u2014 global view, read only");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(177, "span", 51);
        \u0275\u0275text(178, "ML GENERATED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "div", 52);
        \u0275\u0275template(180, SuperAdminBillingComponent_div_180_Template, 20, 7, "div", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "div", 54)(182, "mat-icon", 11);
        \u0275\u0275text(183, "auto_graph");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "p");
        \u0275\u0275text(185, "Triggered when quota utilization > 80% for > 5 days. Inference: daily batch + real-time.");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(186, SuperAdminBillingComponent_div_186_Template, 55, 8, "div", 55);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.plans.length);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.allInvoices.length);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(40, 18, ctx.totalRevenue, "1.0-0"));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.confirmedPayments);
        \u0275\u0275advance(3);
        \u0275\u0275property("dynamicHeight", true);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.plans);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.plans.length === 0);
        \u0275\u0275advance(13);
        \u0275\u0275property("dataSource", ctx.invoicesDS);
        \u0275\u0275advance(25);
        \u0275\u0275property("matHeaderRowDef", ctx.invCols);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.invCols);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.allInvoices.length === 0);
        \u0275\u0275advance(13);
        \u0275\u0275property("dataSource", ctx.paymentsDS);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.payCols);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.payCols);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.payments.length === 0);
        \u0275\u0275advance(16);
        \u0275\u0275property("ngForOf", ctx.churnMock);
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.upsellMock);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.showModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatCardModule, MatCard, MatCardContent, MatIconModule, MatIcon, MatButtonModule, MatButton, MatIconButton, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTabsModule, MatTabLabel, MatTab, MatTabGroup, MatTooltipModule, MatTooltip, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, DecimalPipe, DatePipe], styles: ["\n\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n  padding: 16px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  margin: 0;\n}\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-right: 6px;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4f46e5;\n  border-radius: 10px;\n  padding: 2px 8px;\n  font-size: 11px;\n  font-weight: 700;\n  margin-left: 6px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.tab-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.pill-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.pill-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.pill-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.pill-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.pill-yellow[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.plan-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--bs-border-color,#e5e7eb);\n}\n.plan-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.price-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.price-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  color: #94a3b8;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.price-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 800;\n  color: #1e293b;\n}\n.plan-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #64748b;\n}\n.meta-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.plan-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.btn-danger-icon[_ngcontent-%COMP%] {\n  color: #ef4444 !important;\n}\n.btn-success-icon[_ngcontent-%COMP%] {\n  color: #22c55e !important;\n}\n.churn-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.churn-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #94a3b8;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  display: block;\n  margin: 0 auto 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 16px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n}\n.field-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  margin-bottom: 5px;\n}\n.field-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 14px;\n  outline: none;\n  box-sizing: border-box;\n}\n.field-input[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n}\n/*# sourceMappingURL=super-admin-billing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminBillingComponent, [{
    type: Component,
    args: [{ selector: "app-super-admin-billing", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatTabsModule,
      MatTooltipModule,
      FormsModule,
      RouterModule
    ], template: `
    <div class="container-fluid fade-in mb-3 mb-lg-4">
      <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
        <div class="row gx-3 align-items-center">
          <div class="col mb-3 mb-xl-0 py-1">
            <h3 class="mb-1">Billing Management</h3>
            <p class="small opacity-50">Platform-wide billing, plans & revenue overview</p>
          </div>
        </div>
      </mat-card>
    </div>

    <div class="container fade-in">

      <!-- Stats -->
      <div class="row gx-3 gx-lg-4 mb-3">
        <div class="col-6 col-lg-3">
          <mat-card class="mb-3 stat-card">
            <mat-card-content>
              <div class="stat-icon theme-blue"><mat-icon class="material-icons-outlined">inventory_2</mat-icon></div>
              <p class="stat-label">Active Plans</p>
              <h3 class="stat-val">{{ plans.length }}</h3>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-6 col-lg-3">
          <mat-card class="mb-3 stat-card">
            <mat-card-content>
              <div class="stat-icon theme-green"><mat-icon class="material-icons-outlined">receipt_long</mat-icon></div>
              <p class="stat-label">Total Invoices</p>
              <h3 class="stat-val">{{ allInvoices.length }}</h3>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-6 col-lg-3">
          <mat-card class="mb-3 stat-card">
            <mat-card-content>
              <div class="stat-icon theme-yellow"><mat-icon class="material-icons-outlined">payments</mat-icon></div>
              <p class="stat-label">Total Revenue</p>
              <h3 class="stat-val">\${{ totalRevenue | number:'1.0-0' }}</h3>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-6 col-lg-3">
          <mat-card class="mb-3 stat-card">
            <mat-card-content>
              <div class="stat-icon theme-purple"><mat-icon class="material-icons-outlined">business</mat-icon></div>
              <p class="stat-label">Organisations</p>
              <h3 class="stat-val">{{ confirmedPayments }}</h3>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <!-- Tabs -->
      <mat-card>
        <mat-card-content class="p-0">
          <mat-tab-group animationDuration="200ms" [dynamicHeight]="true">

            <!-- TAB 1 : PLANS (CRUD) -->
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon class="material-icons-outlined tab-icon">inventory_2</mat-icon>
                Plans <span class="tab-badge">{{ plans.length }}</span>
              </ng-template>
              <div class="tab-content">

                <div class="tab-header">
                  <div>
                    <h4 class="mb-1">Subscription Plans</h4>
                    <p class="text-secondary small mb-0">Create and manage all subscription tiers \u2014 read/write</p>
                  </div>
                  <button mat-flat-button color="primary" (click)="openAddPlan()">
                    <mat-icon>add</mat-icon> New Plan
                  </button>
                </div>

                <div class="row gx-3 gx-lg-4 mt-3">
                  <div class="col-12 col-md-6 col-xl-4" *ngFor="let p of plans">
                    <mat-card class="plan-card mb-3">
                      <mat-card-content>
                        <div class="plan-head">
                          <div>
                            <h4 class="mb-0">{{ p.displayName }}</h4>
                            <code class="text-secondary" style="font-size:11px">{{ p.name }}</code>
                          </div>
                          <span class="pill" [class]="p.isActive ? 'pill-green' : 'pill-red'">
                            {{ p.isActive ? 'Active' : 'Inactive' }}
                          </span>
                        </div>

                        <div class="price-row">
                          <div class="price-box">
                            <span class="price-lbl">Monthly</span>
                            <span class="price-val">\${{ p.priceMonthly }}</span>
                          </div>
                          <div class="price-box">
                            <span class="price-lbl">Annual/mo</span>
                            <span class="price-val">\${{ p.priceYearly }}</span>
                          </div>
                        </div>

                        <div class="plan-meta">
                          <div class="meta-row"><mat-icon class="material-icons-outlined">storage</mat-icon>{{ (p.storageMb/1024)|number:'1.0-0' }} GB storage</div>
                          <div class="meta-row"><mat-icon class="material-icons-outlined">psychology</mat-icon>ML: {{ p.mlTier }}</div>
                          <div class="meta-row"><mat-icon class="material-icons-outlined">support_agent</mat-icon>Support: {{ p.supportTier }}</div>
                          <div class="meta-row"><mat-icon class="material-icons-outlined">lock_open</mat-icon>API: {{ p.apiAccess ? 'Yes':'No' }} \xB7 SSO: {{ p.ssoEnabled ? 'Yes':'No' }}</div>
                        </div>

                        <div class="plan-actions">
                          <button mat-stroked-button class="action-btn" (click)="editPlan(p)">
                            <mat-icon class="material-icons-outlined">edit</mat-icon> Edit
                          </button>
                          <button mat-icon-button
                                  [matTooltip]="p.isActive ? 'Deactivate plan' : 'Activate plan'"
                                  [class]="p.isActive ? 'btn-danger-icon' : 'btn-success-icon'"
                                  (click)="togglePlan(p)">
                            <mat-icon class="material-icons-outlined">{{ p.isActive ? 'block' : 'check_circle' }}</mat-icon>
                          </button>
                        </div>
                      </mat-card-content>
                    </mat-card>
                  </div>

                  <div class="col-12" *ngIf="plans.length === 0">
                    <div class="empty-state">
                      <mat-icon class="material-icons-outlined">inventory_2</mat-icon>
                      <p>No plans yet. They are created automatically when an organisation pays.</p>
                    </div>
                  </div>
                </div>
              </div>
            </mat-tab>

            <!-- TAB 2 : INVOICES (READ ONLY - global) -->
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon class="material-icons-outlined tab-icon">receipt_long</mat-icon>
                Invoices <span class="tab-badge">{{ allInvoices.length }}</span>
              </ng-template>
              <div class="tab-content">
                <div class="tab-header">
                  <div>
                    <h4 class="mb-1">All Platform Invoices</h4>
                    <p class="text-secondary small mb-0">Global audit \u2014 read only (legal documents, cannot be modified)</p>
                  </div>
                  <span class="pill pill-blue">READ ONLY</span>
                </div>

                <div class="table-responsive mt-3">
                  <table mat-table [dataSource]="invoicesDS" class="bg-none w-100">
                    <ng-container matColumnDef="number">
                      <th mat-header-cell *matHeaderCellDef>Invoice #</th>
                      <td mat-cell *matCellDef="let i" class="py-2"><strong>{{ i.invoiceNumber }}</strong></td>
                    </ng-container>
                    <ng-container matColumnDef="plan">
                      <th mat-header-cell *matHeaderCellDef>Plan</th>
                      <td mat-cell *matCellDef="let i">
                        <span class="pill pill-blue">{{ i.planName ?? '\u2014' }}</span>
                      </td>
                    </ng-container>
                    <ng-container matColumnDef="subtotal">
                      <th mat-header-cell *matHeaderCellDef>Subtotal</th>
                      <td mat-cell *matCellDef="let i">\${{ i.subtotal | number:'1.2-2' }}</td>
                    </ng-container>
                    <ng-container matColumnDef="tax">
                      <th mat-header-cell *matHeaderCellDef>Tax</th>
                      <td mat-cell *matCellDef="let i" class="text-secondary">\${{ i.taxAmount | number:'1.2-2' }}</td>
                    </ng-container>
                    <ng-container matColumnDef="total">
                      <th mat-header-cell *matHeaderCellDef>Total</th>
                      <td mat-cell *matCellDef="let i"><strong>\${{ i.total | number:'1.2-2' }} {{ i.currency }}</strong></td>
                    </ng-container>
                    <ng-container matColumnDef="status">
                      <th mat-header-cell *matHeaderCellDef>Status</th>
                      <td mat-cell *matCellDef="let i">
                        <span class="pill" [class]="getInvClass(i.status)">{{ i.status }}</span>
                      </td>
                    </ng-container>
                    <ng-container matColumnDef="period">
                      <th mat-header-cell *matHeaderCellDef>Period</th>
                      <td mat-cell *matCellDef="let i" class="text-secondary small">
                        {{ i.billingPeriodStart | date:'dd/MM/yy' }} \u2192 {{ i.billingPeriodEnd | date:'dd/MM/yy' }}
                      </td>
                    </ng-container>
                    <ng-container matColumnDef="paidAt">
                      <th mat-header-cell *matHeaderCellDef>Paid At</th>
                      <td mat-cell *matCellDef="let i" class="small text-secondary">
                        {{ i.paidAt ? (i.paidAt | date:'dd MMM yyyy') : '\u2014' }}
                      </td>
                    </ng-container>
                    <tr mat-header-row *matHeaderRowDef="invCols"></tr>
                    <tr mat-row *matRowDef="let row; columns: invCols"></tr>
                  </table>
                </div>

                <div class="empty-state" *ngIf="allInvoices.length === 0">
                  <mat-icon class="material-icons-outlined">receipt_long</mat-icon>
                  <p>No invoices yet. They are generated automatically on payment.</p>
                </div>
              </div>
            </mat-tab>

            <!-- TAB 3 : PAYMENT HISTORY (READ ONLY) -->
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon class="material-icons-outlined tab-icon">payments</mat-icon>
                Payments <span class="tab-badge">{{ payments.length }}</span>
              </ng-template>
              <div class="tab-content">
                <div class="tab-header">
                  <div>
                    <h4 class="mb-1">Payment Attempts</h4>
                    <p class="text-secondary small mb-0">All organisation payments \u2014 read only for audit</p>
                  </div>
                  <span class="pill pill-blue">READ ONLY</span>
                </div>

                <div class="table-responsive mt-3">
                  <table mat-table [dataSource]="paymentsDS" class="bg-none w-100">
                    <ng-container matColumnDef="org">
                      <th mat-header-cell *matHeaderCellDef>Organisation</th>
                      <td mat-cell *matCellDef="let p" class="py-2">
                        <h5 class="mb-0">{{ p.orgName ?? '\u2014' }}</h5>
                        <p class="text-secondary small mb-0">{{ p.adminEmail }}</p>
                      </td>
                    </ng-container>
                    <ng-container matColumnDef="plan">
                      <th mat-header-cell *matHeaderCellDef>Plan</th>
                      <td mat-cell *matCellDef="let p">
                        <span class="pill pill-blue">{{ p.planName }}</span>
                        <p class="text-secondary small mb-0">{{ p.billingCycle }}</p>
                      </td>
                    </ng-container>
                    <ng-container matColumnDef="amount">
                      <th mat-header-cell *matHeaderCellDef>Amount</th>
                      <td mat-cell *matCellDef="let p"><strong>\${{ p.amount | number:'1.2-2' }}</strong></td>
                    </ng-container>
                    <ng-container matColumnDef="status">
                      <th mat-header-cell *matHeaderCellDef>Status</th>
                      <td mat-cell *matCellDef="let p">
                        <span class="pill" [class]="getPayStatus(p.status)">{{ p.status }}</span>
                      </td>
                    </ng-container>
                    <ng-container matColumnDef="id">
                      <th mat-header-cell *matHeaderCellDef>ID</th>
                      <td mat-cell *matCellDef="let p" class="text-secondary small">{{ p.paymentId }}</td>
                    </ng-container>
                    <ng-container matColumnDef="date">
                      <th mat-header-cell *matHeaderCellDef>Date</th>
                      <td mat-cell *matCellDef="let p" class="text-secondary small">
                        {{ p.createdAt | date:'dd MMM yyyy' }}
                      </td>
                    </ng-container>
                    <tr mat-header-row *matHeaderRowDef="payCols"></tr>
                    <tr mat-row *matRowDef="let row; columns: payCols"></tr>
                  </table>
                </div>
                <div class="empty-state" *ngIf="payments.length === 0">
                  <mat-icon class="material-icons-outlined">payments</mat-icon>
                  <p>No payments recorded yet.</p>
                </div>
              </div>
            </mat-tab>

            <!-- TAB 4 : CHURN (READ ONLY - ML) -->
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon class="material-icons-outlined tab-icon">trending_down</mat-icon>Churn Risk
              </ng-template>
              <div class="tab-content">
                <div class="tab-header">
                  <div>
                    <h4 class="mb-1">ML Churn Predictions</h4>
                    <p class="text-secondary small mb-0">Table: <code>ml_churn_predictions</code> \u2014 generated by ML pipeline, read only</p>
                  </div>
                  <span class="pill pill-purple">ML GENERATED</span>
                </div>
                <div class="row gx-3 mt-3">
                  <div class="col-12 col-md-6 col-lg-4" *ngFor="let c of churnMock">
                    <mat-card class="mb-3">
                      <mat-card-content>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                          <h5 class="mb-0">{{ c.org }}</h5>
                          <span class="pill" [class]="getRiskClass(c.risk)">{{ c.risk }}</span>
                        </div>
                        <div class="churn-bar mb-2">
                          <div class="churn-fill" [style.width.%]="c.score*100"
                               [style.background]="c.risk==='HIGH'?'#ef4444':c.risk==='MEDIUM'?'#f59e0b':'#22c55e'"></div>
                        </div>
                        <div class="d-flex justify-content-between">
                          <span class="text-secondary small">Churn probability</span>
                          <strong>{{ (c.score*100)|number:'1.0-0' }}%</strong>
                        </div>
                        <p class="text-secondary small mt-1 mb-0">Plan: {{ c.plan }} \xB7 WAU ratio: {{ c.wau }}</p>
                      </mat-card-content>
                    </mat-card>
                  </div>
                </div>
                <div class="empty-state">
                  <mat-icon class="material-icons-outlined">psychology</mat-icon>
                  <p>Real predictions generated by the ML pipeline (Logistic Regression + Random Forest) will appear here. Inference: weekly batch.</p>
                </div>
              </div>
            </mat-tab>

            <!-- TAB 5 : UPSELL (READ ONLY - ML) -->
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon class="material-icons-outlined tab-icon">trending_up</mat-icon>Upsell
              </ng-template>
              <div class="tab-content">
                <div class="tab-header">
                  <div>
                    <h4 class="mb-1">Upsell Recommendations</h4>
                    <p class="text-secondary small mb-0">Table: <code>upsell_recommendations</code> \u2014 global view, read only</p>
                  </div>
                  <span class="pill pill-purple">ML GENERATED</span>
                </div>
                <div class="row gx-3 mt-3">
                  <div class="col-12 col-md-6 col-lg-4" *ngFor="let u of upsellMock">
                    <mat-card class="mb-3">
                      <mat-card-content>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                          <h5 class="mb-0">{{ u.org }}</h5>
                          <span class="pill" [class]="getUpsellClass(u.status)">{{ u.status }}</span>
                        </div>
                        <p class="text-secondary small mb-1">Current: <strong>{{ u.current }}</strong></p>
                        <p class="text-secondary small mb-1">\u2192 Recommended: <strong class="text-theme">{{ u.target }}</strong></p>
                        <p class="text-secondary small mb-0">Revenue impact: <strong style="color:#22c55e">+\${{ u.impact }}/mo</strong></p>
                      </mat-card-content>
                    </mat-card>
                  </div>
                </div>
                <div class="empty-state">
                  <mat-icon class="material-icons-outlined">auto_graph</mat-icon>
                  <p>Triggered when quota utilization > 80% for > 5 days. Inference: daily batch + real-time.</p>
                </div>
              </div>
            </mat-tab>

          </mat-tab-group>
        </mat-card-content>
      </mat-card>

      <!-- Plan Modal -->
      <div class="modal-overlay" *ngIf="showModal" (click)="showModal=false">
        <mat-card class="modal-box" (click)="$event.stopPropagation()">
          <mat-card-content>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="mb-0">{{ editing ? 'Edit Plan' : 'New Plan' }}</h4>
              <button mat-icon-button (click)="showModal=false"><mat-icon>close</mat-icon></button>
            </div>
            <div class="row gx-3">
              <div class="col-12 mb-3">
                <label class="field-lbl">Display Name</label>
                <input class="field-input" [(ngModel)]="pf.displayName" placeholder="e.g. Pro">
              </div>
              <div class="col-6 mb-3">
                <label class="field-lbl">Monthly Price ($)</label>
                <input class="field-input" type="number" [(ngModel)]="pf.priceMonthly">
              </div>
              <div class="col-6 mb-3">
                <label class="field-lbl">Annual Price/mo ($)</label>
                <input class="field-input" type="number" [(ngModel)]="pf.priceYearly">
              </div>
              <div class="col-6 mb-3">
                <label class="field-lbl">Storage (GB)</label>
                <input class="field-input" type="number" [(ngModel)]="pf.storageMb">
              </div>
              <div class="col-6 mb-3">
                <label class="field-lbl">ML Tier</label>
                <select class="field-input" [(ngModel)]="pf.mlTier">
                  <option>NONE</option><option>BASIC</option><option>FULL</option><option>FULL_API</option>
                </select>
              </div>
              <div class="col-12 mb-3">
                <label class="field-lbl">Support Tier</label>
                <select class="field-input" [(ngModel)]="pf.supportTier">
                  <option>COMMUNITY</option><option>EMAIL</option><option>PRIORITY</option><option>DEDICATED</option>
                </select>
              </div>
            </div>
            <div class="d-flex gap-2 justify-content-end">
              <button mat-stroked-button (click)="showModal=false">Cancel</button>
              <button mat-flat-button color="primary" (click)="savePlan()">
                {{ editing ? 'Save Changes' : 'Create Plan' }}
              </button>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

    </div>
  `, styles: ["/* angular:styles/component:css;91f94910dcf829aecb28da4841dca87053773771e243d023c29649ae8ae948ce;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/pages/app/super-admin/super-admin-billing.component.ts */\n.stat-card mat-card-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n  padding: 16px;\n}\n.stat-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon mat-icon {\n  color: #fff;\n  font-size: 20px;\n}\n.stat-label {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n}\n.stat-val {\n  font-size: 24px;\n  font-weight: 800;\n  margin: 0;\n}\n.tab-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-right: 6px;\n}\n.tab-badge {\n  background: #e0e7ff;\n  color: #4f46e5;\n  border-radius: 10px;\n  padding: 2px 8px;\n  font-size: 11px;\n  font-weight: 700;\n  margin-left: 6px;\n}\n.tab-content {\n  padding: 24px;\n}\n.tab-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.pill {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.pill-green {\n  background: #dcfce7;\n  color: #15803d;\n}\n.pill-red {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.pill-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.pill-purple {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.pill-yellow {\n  background: #fef9c3;\n  color: #a16207;\n}\n.plan-card {\n  border: 1px solid var(--bs-border-color,#e5e7eb);\n}\n.plan-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.price-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.price-box {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.price-lbl {\n  display: block;\n  font-size: 10px;\n  color: #94a3b8;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.price-val {\n  display: block;\n  font-size: 20px;\n  font-weight: 800;\n  color: #1e293b;\n}\n.plan-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.meta-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #64748b;\n}\n.meta-row mat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.plan-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.action-btn {\n  flex: 1;\n}\n.btn-danger-icon {\n  color: #ef4444 !important;\n}\n.btn-success-icon {\n  color: #22c55e !important;\n}\n.churn-bar {\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.churn-fill {\n  height: 100%;\n  border-radius: 10px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px 20px;\n  color: #94a3b8;\n}\n.empty-state mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  display: block;\n  margin: 0 auto 12px;\n}\n.empty-state p {\n  font-size: 13px;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  padding: 16px;\n}\n.modal-box {\n  width: 100%;\n  max-width: 480px;\n}\n.field-lbl {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  margin-bottom: 5px;\n}\n.field-input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 14px;\n  outline: none;\n  box-sizing: border-box;\n}\n.field-input:focus {\n  border-color: #6366f1;\n}\n/*# sourceMappingURL=super-admin-billing.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperAdminBillingComponent, { className: "SuperAdminBillingComponent", filePath: "src/app/pages/app/super-admin/super-admin-billing.component.ts", lineNumber: 473 });
})();
export {
  SuperAdminBillingComponent
};
//# sourceMappingURL=super-admin-billing.component-NFAMW6EU.js.map
