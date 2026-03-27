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
  RouterLink,
  RouterModule
} from "./chunk-DYOMXT5J.js";
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
  __spreadProps,
  __spreadValues,
  forkJoin,
  inject,
  map,
  of,
  setClassMetadata,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/org-billing/org-billing.component.ts
function OrgBillingComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 35);
    \u0275\u0275text(1, "workspace_premium");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "My Subscription ");
  }
}
function OrgBillingComponent_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 37)(3, "div", 38)(4, "mat-icon", 11);
    \u0275\u0275text(5, "workspace_premium");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "h3", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 41)(14, "div", 42)(15, "span");
    \u0275\u0275text(16, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 42)(20, "span");
    \u0275\u0275text(21, "Billing Cycle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 42)(25, "span");
    \u0275\u0275text(26, "Monthly Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 42)(31, "span");
    \u0275\u0275text(32, "Annual/mo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 42)(37, "span");
    \u0275\u0275text(38, "Period Start");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 42)(43, "span");
    \u0275\u0275text(44, "Period End");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "strong");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 42)(49, "span");
    \u0275\u0275text(50, "Subscribed On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "strong");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 43)(55, "button", 44)(56, "mat-icon", 11);
    \u0275\u0275text(57, "upgrade");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " Upgrade Plan ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 45);
    \u0275\u0275listener("click", function OrgBillingComponent_ng_container_56_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelSub());
    });
    \u0275\u0275elementStart(60, "mat-icon", 11);
    \u0275\u0275text(61, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(62, " Cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.subscription.planDisplayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.subscription.billingCycle, " billing");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getSubStatusClass(ctx_r1.subscription.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.subscription.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.subscription.planDisplayName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.subscription.billingCycle);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(29, 12, ctx_r1.subscription.planPriceMonthly, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(35, 15, ctx_r1.subscription.planPriceYearly, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 18, ctx_r1.subscription.currentPeriodStart, "dd MMM yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 21, ctx_r1.subscription.currentPeriodEnd, "dd MMM yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 24, ctx_r1.subscription.createdAt, "dd MMM yyyy"));
  }
}
function OrgBillingComponent_ng_container_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 46)(3, "div", 38)(4, "mat-icon", 11);
    \u0275\u0275text(5, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "h3", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 41)(14, "div", 42)(15, "span");
    \u0275\u0275text(16, "Organisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 42)(20, "span");
    \u0275\u0275text(21, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 42)(25, "span");
    \u0275\u0275text(26, "Billing Cycle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 42)(30, "span");
    \u0275\u0275text(31, "Amount Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 42)(36, "span");
    \u0275\u0275text(37, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 42)(41, "span");
    \u0275\u0275text(42, "Payment ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "code");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 42)(46, "span");
    \u0275\u0275text(47, "Subscribed On");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "strong");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 43)(52, "button", 44)(53, "mat-icon", 11);
    \u0275\u0275text(54, "upgrade");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Upgrade Plan ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.myPayment.planName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.myPayment.billingCycle, " \xB7 ", ctx_r1.myPayment.orgName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.myPayment.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.myPayment.orgName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.myPayment.planName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.myPayment.billingCycle);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("$", \u0275\u0275pipeBind2(34, 12, ctx_r1.myPayment.amount, "1.2-2"), " ", ctx_r1.myPayment.currency);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.myPayment.numUsers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.myPayment.paymentId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 15, ctx_r1.myPayment.createdAt, "dd MMM yyyy"));
  }
}
function OrgBillingComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "mat-icon", 11);
    \u0275\u0275text(2, "workspace_premium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No subscription found. ");
    \u0275\u0275elementStart(5, "a", 49);
    \u0275\u0275text(6, "Choose a plan \u2192");
    \u0275\u0275elementEnd()()();
  }
}
function OrgBillingComponent_div_59_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Last updated: ", \u0275\u0275pipeBind2(2, 2, ctx_r1.usageQuota.updatedAt, "dd MMM yyyy HH:mm"), " \xB7 Plan limits from: ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.usageQuota.planName);
  }
}
function OrgBillingComponent_div_59_div_7_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "\u26A0 80%+");
    \u0275\u0275elementEnd();
  }
}
function OrgBillingComponent_div_59_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56)(2, "mat-card", 57)(3, "mat-card-content")(4, "div", 58)(5, "mat-icon", 11);
    \u0275\u0275text(6, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Active Members");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, OrgBillingComponent_div_59_div_7_span_9_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 60)(11, "h4");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 61);
    \u0275\u0275element(16, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 63);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 56)(21, "mat-card", 57)(22, "mat-card-content")(23, "div", 58)(24, "mat-icon", 11);
    \u0275\u0275text(25, "workspaces");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Workspaces");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 60)(29, "h4");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 61);
    \u0275\u0275element(34, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 63);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 56)(39, "mat-card", 57)(40, "mat-card-content")(41, "div", 58)(42, "mat-icon", 11);
    \u0275\u0275text(43, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 60)(47, "h4");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 61);
    \u0275\u0275element(52, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 63);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 56)(57, "mat-card", 57)(58, "mat-card-content")(59, "div", 58)(60, "mat-icon", 11);
    \u0275\u0275text(61, "storage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span");
    \u0275\u0275text(63, "Storage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 60)(65, "h4");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 61);
    \u0275\u0275element(72, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p", 63);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div", 56)(77, "mat-card", 57)(78, "mat-card-content")(79, "div", 58)(80, "mat-icon", 11);
    \u0275\u0275text(81, "api");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span");
    \u0275\u0275text(83, "API Calls");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 60)(85, "h4");
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span");
    \u0275\u0275text(89, "this month");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(90, "div", 56)(91, "mat-card", 57)(92, "mat-card-content")(93, "div", 58)(94, "mat-icon", 11);
    \u0275\u0275text(95, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "span");
    \u0275\u0275text(97, "ML Inferences");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 60)(99, "h4");
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span");
    \u0275\u0275text(103, "this month");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("alert-card", ctx_r1.usageQuota.alert80Sent);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.usageQuota.alert80Sent);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.usageQuota.activeMembersCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.usageQuota.maxMembers);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.usageQuota.membersPct, "%")("background", ctx_r1.usageQuota.membersPct > 80 ? "#ef4444" : ctx_r1.usageQuota.membersPct > 60 ? "#f59e0b" : "#22c55e");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 33, ctx_r1.usageQuota.membersPct, "1.0-0"), "%");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.usageQuota.workspacesCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.usageQuota.maxWorkspaces);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.usageQuota.workspacesPct, "%")("background", ctx_r1.usageQuota.workspacesPct > 80 ? "#ef4444" : ctx_r1.usageQuota.workspacesPct > 60 ? "#f59e0b" : "#22c55e");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(37, 36, ctx_r1.usageQuota.workspacesPct, "1.0-0"), "%");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.usageQuota.projectsCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r1.usageQuota.maxProjects);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.usageQuota.projectsPct, "%")("background", ctx_r1.usageQuota.projectsPct > 80 ? "#ef4444" : ctx_r1.usageQuota.projectsPct > 60 ? "#f59e0b" : "#22c55e");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(55, 39, ctx_r1.usageQuota.projectsPct, "1.0-0"), "%");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(67, 42, ctx_r1.usageQuota.storageUsedGb, "1.1-1"), " GB");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/ ", \u0275\u0275pipeBind2(70, 45, ctx_r1.usageQuota.maxStorageGb, "1.0-0"), " GB");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.usageQuota.storagePct, "%")("background", ctx_r1.usageQuota.storagePct > 80 ? "#ef4444" : ctx_r1.usageQuota.storagePct > 60 ? "#f59e0b" : "#22c55e");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(75, 48, ctx_r1.usageQuota.storagePct, "1.0-0"), "%");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 51, ctx_r1.usageQuota.apiCallsCount));
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(101, 53, ctx_r1.usageQuota.mlInferencesCount));
  }
}
function OrgBillingComponent_div_59_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "mat-icon", 11);
    \u0275\u0275text(2, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Usage metrics will appear here once your first daily snapshot is computed.");
    \u0275\u0275elementEnd()();
  }
}
function OrgBillingComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 50)(2, "h4", 51);
    \u0275\u0275text(3, "Usage Metrics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5, "LIVE \u2014 table: usage_metrics");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, OrgBillingComponent_div_59_p_6_Template, 5, 5, "p", 52)(7, OrgBillingComponent_div_59_div_7_Template, 104, 55, "div", 53)(8, OrgBillingComponent_div_59_div_8_Template, 5, 0, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.usageQuota);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.usageQuota);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.usageQuota);
  }
}
function OrgBillingComponent_ng_template_61_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.invoices.length);
  }
}
function OrgBillingComponent_ng_template_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 35);
    \u0275\u0275text(1, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Invoices ");
    \u0275\u0275template(3, OrgBillingComponent_ng_template_61_span_3_Template, 2, 1, "span", 65);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.invoices.length);
  }
}
function OrgBillingComponent_ng_container_77_div_16_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 76);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 76);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 76);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 76)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const li_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(li_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(li_r4.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 5, li_r4.unitPrice, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", li_r4.taxRate, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(13, 8, li_r4.totalPrice, "1.2-2"));
  }
}
function OrgBillingComponent_ng_container_77_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "p", 74);
    \u0275\u0275text(2, "Line Items ");
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275text(4, "invoice_line_items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 75)(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 76);
    \u0275\u0275text(11, "Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 76);
    \u0275\u0275text(13, "Unit Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 76);
    \u0275\u0275text(15, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 76);
    \u0275\u0275text(17, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, OrgBillingComponent_ng_container_77_div_16_tr_19_Template, 14, 11, "tr", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "tfoot")(21, "tr", 77)(22, "td", 78);
    \u0275\u0275text(23, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 76);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "tr", 77)(28, "td", 78);
    \u0275\u0275text(29, "Tax (19%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 76);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "tr", 79)(34, "td", 78)(35, "strong");
    \u0275\u0275text(36, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td", 76)(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const inv_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", inv_r5.lineItems);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(26, 4, inv_r5.subtotal, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(32, 7, inv_r5.taxAmount, "1.2-2"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(40, 10, inv_r5.total, "1.2-2"));
  }
}
function OrgBillingComponent_ng_container_77_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Paid: ", \u0275\u0275pipeBind2(2, 1, inv_r5.paidAt, "dd MMM yyyy"));
  }
}
function OrgBillingComponent_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-card", 67)(2, "mat-card-content")(3, "div", 68)(4, "div")(5, "h5", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 27);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 69)(11, "span", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, OrgBillingComponent_ng_container_77_div_16_Template, 41, 13, "div", 70);
    \u0275\u0275elementStart(17, "div", 71)(18, "p", 27);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275pipe(21, "date");
    \u0275\u0275template(22, OrgBillingComponent_ng_container_77_span_22_Template, 3, 4, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 72);
    \u0275\u0275listener("click", function OrgBillingComponent_ng_container_77_Template_button_click_23_listener() {
      const inv_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dl(inv_r5));
    });
    \u0275\u0275elementStart(24, "mat-icon", 11);
    \u0275\u0275text(25, "download");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const inv_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(inv_r5.invoiceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 12, inv_r5.createdAt, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.getInvClass(inv_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inv_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("$", \u0275\u0275pipeBind2(15, 15, inv_r5.total, "1.2-2"), " ", inv_r5.currency);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", inv_r5.lineItems && inv_r5.lineItems.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Period: ", \u0275\u0275pipeBind2(20, 18, inv_r5.billingPeriodStart, "dd/MM/yy"), " \u2192 ", \u0275\u0275pipeBind2(21, 21, inv_r5.billingPeriodEnd, "dd/MM/yy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", inv_r5.paidAt);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !inv_r5.pdfUrl);
  }
}
function OrgBillingComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "mat-card", 81)(2, "mat-card-content")(3, "div", 68)(4, "div")(5, "h5", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 27);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 69)(11, "span", 82);
    \u0275\u0275text(12, "PAID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 83)(17, "table", 75)(18, "tbody")(19, "tr")(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 76);
    \u0275\u0275text(23, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 76);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("INV-", ctx_r1.myPayment.paymentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 7, ctx_r1.myPayment.createdAt, "dd MMM yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("$", \u0275\u0275pipeBind2(15, 10, ctx_r1.myPayment.amount, "1.2-2"), " ", ctx_r1.myPayment.currency);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r1.myPayment.planName, " Plan \u2013 ", ctx_r1.myPayment.billingCycle, " Subscription");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(26, 13, ctx_r1.myPayment.amount, "1.2-2"));
  }
}
function OrgBillingComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "mat-icon", 11);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No invoices yet.");
    \u0275\u0275elementEnd()();
  }
}
function OrgBillingComponent_ng_template_81_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.paymentAttempts.length);
  }
}
function OrgBillingComponent_ng_template_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 35);
    \u0275\u0275text(1, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Payment Attempts ");
    \u0275\u0275template(3, OrgBillingComponent_ng_template_81_span_3_Template, 2, 1, "span", 65);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.paymentAttempts.length);
  }
}
function OrgBillingComponent_table_95_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, "#");
    \u0275\u0275elementEnd();
  }
}
function OrgBillingComponent_table_95_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 98)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Attempt ", a_r6.attemptNumber);
  }
}
function OrgBillingComponent_table_95_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, "Invoice");
    \u0275\u0275elementEnd();
  }
}
function OrgBillingComponent_table_95_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 99)(1, "span", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r7.invoiceNumber);
  }
}
function OrgBillingComponent_table_95_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function OrgBillingComponent_table_95_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 99)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(3, 1, a_r8.amount, "1.2-2"));
  }
}
function OrgBillingComponent_table_95_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function OrgBillingComponent_table_95_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 99)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.getAttemptClass(a_r9.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r9.status);
  }
}
function OrgBillingComponent_table_95_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, "Error");
    \u0275\u0275elementEnd();
  }
}
function OrgBillingComponent_table_95_td_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", a_r10.failureMessage);
  }
}
function OrgBillingComponent_table_95_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 101);
    \u0275\u0275text(1);
    \u0275\u0275template(2, OrgBillingComponent_table_95_td_15_span_2_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r10.failureCode ?? "\u2014", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r10.failureMessage);
  }
}
function OrgBillingComponent_table_95_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 97);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function OrgBillingComponent_table_95_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 101);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, a_r11.attemptedAt, "dd MMM yyyy HH:mm"), " ");
  }
}
function OrgBillingComponent_table_95_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 102);
  }
}
function OrgBillingComponent_table_95_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 103);
  }
}
function OrgBillingComponent_table_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 84);
    \u0275\u0275elementContainerStart(1, 85);
    \u0275\u0275template(2, OrgBillingComponent_table_95_th_2_Template, 2, 0, "th", 86)(3, OrgBillingComponent_table_95_td_3_Template, 3, 1, "td", 87);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 88);
    \u0275\u0275template(5, OrgBillingComponent_table_95_th_5_Template, 2, 0, "th", 86)(6, OrgBillingComponent_table_95_td_6_Template, 3, 1, "td", 89);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 90);
    \u0275\u0275template(8, OrgBillingComponent_table_95_th_8_Template, 2, 0, "th", 86)(9, OrgBillingComponent_table_95_td_9_Template, 4, 4, "td", 89);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 91);
    \u0275\u0275template(11, OrgBillingComponent_table_95_th_11_Template, 2, 0, "th", 86)(12, OrgBillingComponent_table_95_td_12_Template, 3, 3, "td", 89);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 92);
    \u0275\u0275template(14, OrgBillingComponent_table_95_th_14_Template, 2, 0, "th", 86)(15, OrgBillingComponent_table_95_td_15_Template, 3, 2, "td", 93);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 94);
    \u0275\u0275template(17, OrgBillingComponent_table_95_th_17_Template, 2, 0, "th", 86)(18, OrgBillingComponent_table_95_td_18_Template, 3, 4, "td", 93);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(19, OrgBillingComponent_table_95_tr_19_Template, 1, 0, "tr", 95)(20, OrgBillingComponent_table_95_tr_20_Template, 1, 0, "tr", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r1.attemptsDS);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.attemptCols);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.attemptCols);
  }
}
function OrgBillingComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "mat-icon", 11);
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No payment attempts recorded yet.");
    \u0275\u0275elementEnd()();
  }
}
function OrgBillingComponent_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 35);
    \u0275\u0275text(1, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "Plans ");
  }
}
function OrgBillingComponent_div_107_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1, "Current");
    \u0275\u0275elementEnd();
  }
}
function OrgBillingComponent_div_107_button_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Upgrade to ", p_r12.displayName, " ");
  }
}
function OrgBillingComponent_div_107_button_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 118);
    \u0275\u0275text(1, "\u2713 Your Current Plan");
    \u0275\u0275elementEnd();
  }
}
function OrgBillingComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "mat-card", 105)(2, "mat-card-content")(3, "div", 106)(4, "div")(5, "h4", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "code", 107);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, OrgBillingComponent_div_107_span_9_Template, 2, 0, "span", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 109)(11, "div", 110)(12, "span", 111);
    \u0275\u0275text(13, "Monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 112);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 110)(17, "span", 111);
    \u0275\u0275text(18, "Annual/mo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 112);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 113)(22, "div", 114)(23, "mat-icon", 11);
    \u0275\u0275text(24, "storage");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 114)(28, "mat-icon", 11);
    \u0275\u0275text(29, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 114)(32, "mat-icon", 11);
    \u0275\u0275text(33, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 114)(36, "mat-icon", 11);
    \u0275\u0275text(37, "lock_open");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, OrgBillingComponent_div_107_button_39_Template, 2, 1, "button", 115)(40, OrgBillingComponent_div_107_button_40_Template, 2, 0, "button", 116);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("current-plan", ctx_r1.isCurrentPlan(p_r12));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r12.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r12.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCurrentPlan(p_r12));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", p_r12.priceMonthly);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", p_r12.priceYearly);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 14, p_r12.storageMb / 1024, "1.0-0"), " GB");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("ML: ", p_r12.mlTier);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r12.supportTier);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("API: ", p_r12.apiAccess ? "Yes" : "No", " \xB7 SSO: ", p_r12.ssoEnabled ? "Yes" : "No");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isCurrentPlan(p_r12));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isCurrentPlan(p_r12));
  }
}
var OrgBillingComponent = class _OrgBillingComponent {
  constructor() {
    this.orgBilling = inject(OrgBillingService);
    this.subscription = null;
    this.myPayment = null;
    this.usageQuota = null;
    this.invoices = [];
    this.paymentAttempts = [];
    this.attemptsDS = new MatTableDataSource([]);
    this.attemptCols = ["attempt", "invoice", "amount", "status", "error", "date"];
    this.availablePlans = [];
    this.loading = true;
  }
  get planLabel() {
    return this.subscription?.planDisplayName ?? this.myPayment?.planName ?? "\u2014";
  }
  get statusLabel() {
    return this.subscription?.status ?? (this.myPayment ? "ACTIVE" : "\u2014");
  }
  get renewalDate() {
    if (this.subscription?.currentPeriodEnd)
      return new Date(this.subscription.currentPeriodEnd).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    return "\u2014";
  }
  isCurrentPlan(p) {
    const cur = this.subscription?.planName ?? this.myPayment?.planName ?? "";
    return p.name === cur || p.displayName === cur;
  }
  ngOnInit() {
    forkJoin({
      sub: this.orgBilling.getMySubscription(),
      invoices: this.orgBilling.getMyInvoices(),
      payment: this.orgBilling.getMyPayment(),
      plans: this.orgBilling.getActivePlans(),
      usage: this.orgBilling.getMyUsage(),
      attempts: this.orgBilling.getMyPaymentAttempts()
    }).pipe(switchMap(({ sub, invoices, payment, plans, usage, attempts }) => {
      if (invoices.length === 0) {
        return of({ sub, invoices, payment, plans, usage, attempts });
      }
      const lineItemsRequests = invoices.map((inv) => this.orgBilling.getLineItemsByInvoice(inv.id).pipe(map((items) => __spreadProps(__spreadValues({}, inv), { lineItems: items }))));
      return forkJoin(lineItemsRequests).pipe(map((invoicesWithItems) => ({
        sub,
        invoices: invoicesWithItems,
        payment,
        plans,
        usage,
        attempts
      })));
    })).subscribe({
      next: ({ sub, invoices, payment, plans, usage, attempts }) => {
        this.subscription = sub;
        this.invoices = invoices;
        this.myPayment = payment;
        this.availablePlans = plans;
        this.usageQuota = usage;
        this.paymentAttempts = attempts;
        this.attemptsDS.data = attempts;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  cancelSub() {
    if (confirm("Are you sure you want to cancel your subscription?"))
      console.log("Cancel \u2192 PATCH /api/billing/my-subscription");
  }
  dl(i) {
    if (i.pdfUrl)
      window.open(i.pdfUrl, "_blank");
  }
  getSubStatusClass(s) {
    return { ACTIVE: "pill-green", TRIALING: "pill-blue", PAST_DUE: "pill-yellow", CANCELED: "pill-red" }[s ?? ""] ?? "pill-blue";
  }
  getInvClass(s) {
    return { PAID: "pill-green", OPEN: "pill-yellow", DRAFT: "pill-blue", VOID: "pill-red" }[s] ?? "pill-blue";
  }
  getAttemptClass(s) {
    return { SUCCEEDED: "pill-green", FAILED: "pill-red", PENDING: "pill-yellow", REQUIRES_ACTION: "pill-blue" }[s] ?? "pill-blue";
  }
  static {
    this.\u0275fac = function OrgBillingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrgBillingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrgBillingComponent, selectors: [["app-org-billing"]], decls: 108, vars: 17, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4", "mb-3"], [1, "col-6", "col-lg-3"], [1, "mb-3", "stat-card"], [1, "stat-icon", "theme-green"], [1, "material-icons-outlined"], [1, "stat-label"], [1, "stat-plan"], [1, "stat-icon", "theme-blue"], [1, "pill"], [1, "stat-icon", "theme-yellow"], [1, "stat-val"], [1, "stat-icon", "theme-purple"], [1, "stat-date"], [1, "p-0"], ["animationDuration", "200ms", 3, "dynamicHeight"], ["mat-tab-label", ""], [1, "tab-content"], [4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "tab-header"], [1, "text-secondary", "small", "mb-0"], [1, "pill", "pill-blue"], [4, "ngFor", "ngForOf"], ["class", "mt-3", 4, "ngIf"], [1, "table-responsive", "mt-3"], ["mat-table", "", "class", "bg-none w-100", 3, "dataSource", 4, "ngIf"], [1, "row", "gx-3", "gx-lg-4", "mt-3"], ["class", "col-12 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "material-icons-outlined", "tab-icon"], [1, "sub-card", "mb-4"], [1, "sub-banner"], [1, "sub-badge"], [1, "mb-0", "opacity-75"], [1, "pill", "ms-auto"], [1, "sub-body"], [1, "sub-row"], [1, "sub-footer"], ["mat-flat-button", "", "color", "primary", "routerLink", "/billing/pricing"], ["mat-stroked-button", "", 1, "ms-2", 2, "color", "#ef4444", "border-color", "#ef4444", 3, "click"], [1, "sub-banner", 2, "background", "linear-gradient(135deg,#0f766e,#0d9488)"], [1, "pill", "pill-green", "ms-auto"], [1, "empty-state"], ["routerLink", "/billing/pricing"], [1, "section-title"], [1, "mb-0"], ["class", "text-secondary small mb-3", 4, "ngIf"], ["class", "row gx-3", 4, "ngIf"], [1, "text-secondary", "small", "mb-3"], [1, "row", "gx-3"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "mb-3", "usage-card"], [1, "usage-head"], ["class", "pill pill-red ms-auto", 4, "ngIf"], [1, "usage-nums"], [1, "usage-bar"], [1, "usage-fill"], [1, "usage-pct"], [1, "pill", "pill-red", "ms-auto"], ["class", "tab-badge", 4, "ngIf"], [1, "tab-badge"], [1, "mb-3", "mt-3", "invoice-card"], [1, "inv-header"], [1, "d-flex", "align-items-center", "gap-2"], ["class", "line-items", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-2"], ["mat-icon-button", "", "matTooltip", "Download PDF", 3, "click", "disabled"], [1, "line-items"], [1, "li-title"], [1, "li-table"], [1, "text-end"], [1, "total-row"], ["colspan", "4"], [1, "grand-total"], [1, "mt-3"], [1, "invoice-card"], [1, "pill", "pill-green"], [1, "line-items", "mt-2"], ["mat-table", "", 1, "bg-none", "w-100", 3, "dataSource"], ["matColumnDef", "attempt"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "py-2", 4, "matCellDef"], ["matColumnDef", "invoice"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "amount"], ["matColumnDef", "status"], ["matColumnDef", "error"], ["mat-cell", "", "class", "text-secondary small", 4, "matCellDef"], ["matColumnDef", "date"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "py-2"], ["mat-cell", ""], [1, "text-secondary", "small"], ["mat-cell", "", 1, "text-secondary", "small"], ["mat-header-row", ""], ["mat-row", ""], [1, "col-12", "col-md-6", "col-xl-4"], [1, "plan-card", "mb-3"], [1, "plan-head"], [1, "text-secondary", 2, "font-size", "11px"], ["class", "pill pill-green", 4, "ngIf"], [1, "price-row"], [1, "price-box"], [1, "price-lbl"], [1, "price-val"], [1, "plan-meta"], [1, "meta-row"], ["mat-flat-button", "", "color", "primary", "class", "w-100", "routerLink", "/billing/pricing", 4, "ngIf"], ["mat-stroked-button", "", "class", "w-100", "disabled", "", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "routerLink", "/billing/pricing", 1, "w-100"], ["mat-stroked-button", "", "disabled", "", 1, "w-100"]], template: function OrgBillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "My Billing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Subscription, invoices, usage and payment history");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "mat-card", 9)(12, "mat-card-content")(13, "div", 10)(14, "mat-icon", 11);
        \u0275\u0275text(15, "workspace_premium");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "p", 12);
        \u0275\u0275text(17, "Current Plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h4", 13);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "div", 8)(21, "mat-card", 9)(22, "mat-card-content")(23, "div", 14)(24, "mat-icon", 11);
        \u0275\u0275text(25, "autorenew");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "p", 12);
        \u0275\u0275text(27, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 15);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(30, "div", 8)(31, "mat-card", 9)(32, "mat-card-content")(33, "div", 16)(34, "mat-icon", 11);
        \u0275\u0275text(35, "receipt_long");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "p", 12);
        \u0275\u0275text(37, "Total Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h3", 17);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "div", 8)(41, "mat-card", 9)(42, "mat-card-content")(43, "div", 18)(44, "mat-icon", 11);
        \u0275\u0275text(45, "calendar_today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "p", 12);
        \u0275\u0275text(47, "Renewal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 19);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(50, "mat-card")(51, "mat-card-content", 20)(52, "mat-tab-group", 21)(53, "mat-tab");
        \u0275\u0275template(54, OrgBillingComponent_ng_template_54_Template, 3, 0, "ng-template", 22);
        \u0275\u0275elementStart(55, "div", 23);
        \u0275\u0275template(56, OrgBillingComponent_ng_container_56_Template, 63, 27, "ng-container", 24)(57, OrgBillingComponent_ng_container_57_Template, 56, 18, "ng-container", 24)(58, OrgBillingComponent_div_58_Template, 7, 0, "div", 25)(59, OrgBillingComponent_div_59_Template, 9, 3, "div", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "mat-tab");
        \u0275\u0275template(61, OrgBillingComponent_ng_template_61_Template, 4, 1, "ng-template", 22);
        \u0275\u0275elementStart(62, "div", 23)(63, "div", 26)(64, "div")(65, "h4", 4);
        \u0275\u0275text(66, "My Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "p", 27);
        \u0275\u0275text(68, " Tables: ");
        \u0275\u0275elementStart(69, "code");
        \u0275\u0275text(70, "invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " + ");
        \u0275\u0275elementStart(72, "code");
        \u0275\u0275text(73, "invoice_line_items");
        \u0275\u0275elementEnd();
        \u0275\u0275text(74, " \u2014 read only ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "span", 28);
        \u0275\u0275text(76, "READ ONLY");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(77, OrgBillingComponent_ng_container_77_Template, 26, 24, "ng-container", 29)(78, OrgBillingComponent_div_78_Template, 27, 16, "div", 30)(79, OrgBillingComponent_div_79_Template, 5, 0, "div", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "mat-tab");
        \u0275\u0275template(81, OrgBillingComponent_ng_template_81_Template, 4, 1, "ng-template", 22);
        \u0275\u0275elementStart(82, "div", 23)(83, "div", 26)(84, "div")(85, "h4", 4);
        \u0275\u0275text(86, "Payment Attempts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "p", 27);
        \u0275\u0275text(88, "Table: ");
        \u0275\u0275elementStart(89, "code");
        \u0275\u0275text(90, "payment_attempts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, " \u2014 read only");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "span", 28);
        \u0275\u0275text(93, "READ ONLY");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 31);
        \u0275\u0275template(95, OrgBillingComponent_table_95_Template, 21, 3, "table", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275template(96, OrgBillingComponent_div_96_Template, 5, 0, "div", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "mat-tab");
        \u0275\u0275template(98, OrgBillingComponent_ng_template_98_Template, 3, 0, "ng-template", 22);
        \u0275\u0275elementStart(99, "div", 23)(100, "div", 26)(101, "div")(102, "h4", 4);
        \u0275\u0275text(103, "Available Plans");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "p", 27);
        \u0275\u0275text(105, "Compare and upgrade");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(106, "div", 33);
        \u0275\u0275template(107, OrgBillingComponent_div_107_Template, 41, 17, "div", 34);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.planLabel);
        \u0275\u0275advance(9);
        \u0275\u0275classMap(ctx.getSubStatusClass(ctx.statusLabel));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.statusLabel);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.invoices.length);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.renewalDate);
        \u0275\u0275advance(3);
        \u0275\u0275property("dynamicHeight", true);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.subscription);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.subscription && ctx.myPayment);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.subscription && !ctx.myPayment && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.usageQuota || ctx.subscription || ctx.myPayment);
        \u0275\u0275advance(18);
        \u0275\u0275property("ngForOf", ctx.invoices);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.invoices.length === 0 && ctx.myPayment && !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.invoices.length === 0 && !ctx.myPayment && !ctx.loading);
        \u0275\u0275advance(16);
        \u0275\u0275property("ngIf", ctx.paymentAttempts.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.paymentAttempts.length === 0 && !ctx.loading);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.availablePlans);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatCardModule, MatCard, MatCardContent, MatIconModule, MatIcon, MatButtonModule, MatButton, MatIconButton, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTabsModule, MatTabLabel, MatTab, MatTabGroup, MatTooltipModule, MatTooltip, RouterModule, RouterLink, DecimalPipe, DatePipe], styles: ["\n\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n  padding: 16px;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  margin: 0;\n}\n.stat-plan[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 0;\n}\n.stat-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.pill-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.pill-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.pill-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.pill-yellow[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #a16207;\n}\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-right: 6px;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4f46e5;\n  border-radius: 10px;\n  padding: 2px 8px;\n  font-size: 11px;\n  font-weight: 700;\n  margin-left: 6px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.tab-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.sub-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  overflow: hidden;\n}\n.sub-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  padding: 24px;\n  color: #fff;\n}\n.sub-badge[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, .2);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sub-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n}\n.sub-banner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.sub-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sub-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.sub-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 14px;\n}\n.sub-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sub-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.sub-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: #f8fafc;\n}\n.usage-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n}\n.usage-card.alert-card[_ngcontent-%COMP%] {\n  border-color: #f59e0b;\n}\n.usage-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 600;\n}\n.usage-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6366f1;\n}\n.usage-nums[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.usage-nums[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n}\n.usage-nums[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n}\n.usage-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 4px;\n}\n.usage-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  transition: width .4s;\n}\n.usage-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  margin: 0;\n  text-align: right;\n}\n.invoice-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n}\n.inv-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.line-items[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 12px 16px;\n}\n.li-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.li-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.li-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n  padding: 6px 8px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.li-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 1px solid #f1f5f9;\n  color: #1e293b;\n}\n.li-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n  padding: 6px 8px;\n}\n.li-table[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e2e8f0;\n}\n.li-table[_ngcontent-%COMP%]   .grand-total[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-top: 10px;\n  border-bottom: none;\n}\n.plan-card[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n}\n.plan-card.current-plan[_ngcontent-%COMP%] {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 2px rgba(99, 102, 241, .2);\n}\n.plan-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.price-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.price-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.price-lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  color: #94a3b8;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.price-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 800;\n  color: #1e293b;\n}\n.plan-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #64748b;\n}\n.meta-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #94a3b8;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  display: block;\n  margin: 0 auto 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n/*# sourceMappingURL=org-billing.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrgBillingComponent, [{
    type: Component,
    args: [{ selector: "app-org-billing", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatTabsModule,
      MatTooltipModule,
      RouterModule
    ], template: `
    <div class="container-fluid fade-in mb-3 mb-lg-4">
      <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
        <div class="row gx-3 align-items-center">
          <div class="col mb-3 mb-xl-0 py-1">
            <h3 class="mb-1">My Billing</h3>
            <p class="small opacity-50">Subscription, invoices, usage and payment history</p>
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
              <div class="stat-icon theme-green"><mat-icon class="material-icons-outlined">workspace_premium</mat-icon></div>
              <p class="stat-label">Current Plan</p>
              <h4 class="stat-plan">{{ planLabel }}</h4>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-6 col-lg-3">
          <mat-card class="mb-3 stat-card">
            <mat-card-content>
              <div class="stat-icon theme-blue"><mat-icon class="material-icons-outlined">autorenew</mat-icon></div>
              <p class="stat-label">Status</p>
              <span class="pill" [class]="getSubStatusClass(statusLabel)">{{ statusLabel }}</span>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-6 col-lg-3">
          <mat-card class="mb-3 stat-card">
            <mat-card-content>
              <div class="stat-icon theme-yellow"><mat-icon class="material-icons-outlined">receipt_long</mat-icon></div>
              <p class="stat-label">Total Invoices</p>
              <h3 class="stat-val">{{ invoices.length }}</h3>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-6 col-lg-3">
          <mat-card class="mb-3 stat-card">
            <mat-card-content>
              <div class="stat-icon theme-purple"><mat-icon class="material-icons-outlined">calendar_today</mat-icon></div>
              <p class="stat-label">Renewal</p>
              <p class="stat-date">{{ renewalDate }}</p>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <mat-card>
        <mat-card-content class="p-0">
          <mat-tab-group animationDuration="200ms" [dynamicHeight]="true">

            <!-- TAB 1 : SUBSCRIPTION + USAGE QUOTA (r\xE9el depuis BD) -->
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon class="material-icons-outlined tab-icon">workspace_premium</mat-icon>My Subscription
              </ng-template>
              <div class="tab-content">

                <!-- Subscription depuis BD (subscriptions table) -->
                <ng-container *ngIf="subscription">
                  <div class="sub-card mb-4">
                    <div class="sub-banner">
                      <div class="sub-badge"><mat-icon class="material-icons-outlined">workspace_premium</mat-icon></div>
                      <div>
                        <h3 class="mb-1">{{ subscription.planDisplayName }}</h3>
                        <p class="mb-0 opacity-75">{{ subscription.billingCycle }} billing</p>
                      </div>
                      <span class="pill ms-auto" [class]="getSubStatusClass(subscription.status)">{{ subscription.status }}</span>
                    </div>
                    <div class="sub-body">
                      <div class="sub-row"><span>Plan</span><strong>{{ subscription.planDisplayName }}</strong></div>
                      <div class="sub-row"><span>Billing Cycle</span><strong>{{ subscription.billingCycle }}</strong></div>
                      <div class="sub-row"><span>Monthly Price</span><strong>\${{ subscription.planPriceMonthly | number:'1.2-2' }}</strong></div>
                      <div class="sub-row"><span>Annual/mo</span><strong>\${{ subscription.planPriceYearly | number:'1.2-2' }}</strong></div>
                      <div class="sub-row"><span>Period Start</span><strong>{{ subscription.currentPeriodStart | date:'dd MMM yyyy' }}</strong></div>
                      <div class="sub-row"><span>Period End</span><strong>{{ subscription.currentPeriodEnd | date:'dd MMM yyyy' }}</strong></div>
                      <div class="sub-row"><span>Subscribed On</span><strong>{{ subscription.createdAt | date:'dd MMM yyyy' }}</strong></div>
                    </div>
                    <div class="sub-footer">
                      <button mat-flat-button color="primary" routerLink="/billing/pricing">
                        <mat-icon class="material-icons-outlined">upgrade</mat-icon> Upgrade Plan
                      </button>
                      <button mat-stroked-button class="ms-2" style="color:#ef4444;border-color:#ef4444" (click)="cancelSub()">
                        <mat-icon class="material-icons-outlined">cancel</mat-icon> Cancel
                      </button>
                    </div>
                  </div>
                </ng-container>

                <!-- Fallback paiement -->
                <ng-container *ngIf="!subscription && myPayment">
                  <div class="sub-card mb-4">
                    <div class="sub-banner" style="background:linear-gradient(135deg,#0f766e,#0d9488)">
                      <div class="sub-badge"><mat-icon class="material-icons-outlined">check_circle</mat-icon></div>
                      <div>
                        <h3 class="mb-1">{{ myPayment.planName }}</h3>
                        <p class="mb-0 opacity-75">{{ myPayment.billingCycle }} \xB7 {{ myPayment.orgName }}</p>
                      </div>
                      <span class="pill pill-green ms-auto">{{ myPayment.status }}</span>
                    </div>
                    <div class="sub-body">
                      <div class="sub-row"><span>Organisation</span><strong>{{ myPayment.orgName }}</strong></div>
                      <div class="sub-row"><span>Plan</span><strong>{{ myPayment.planName }}</strong></div>
                      <div class="sub-row"><span>Billing Cycle</span><strong>{{ myPayment.billingCycle }}</strong></div>
                      <div class="sub-row"><span>Amount Paid</span><strong>\${{ myPayment.amount | number:'1.2-2' }} {{ myPayment.currency }}</strong></div>
                      <div class="sub-row"><span>Users</span><strong>{{ myPayment.numUsers }}</strong></div>
                      <div class="sub-row"><span>Payment ID</span><code>{{ myPayment.paymentId }}</code></div>
                      <div class="sub-row"><span>Subscribed On</span><strong>{{ myPayment.createdAt | date:'dd MMM yyyy' }}</strong></div>
                    </div>
                    <div class="sub-footer">
                      <button mat-flat-button color="primary" routerLink="/billing/pricing">
                        <mat-icon class="material-icons-outlined">upgrade</mat-icon> Upgrade Plan
                      </button>
                    </div>
                  </div>
                </ng-container>

                <div class="empty-state" *ngIf="!subscription && !myPayment && !loading">
                  <mat-icon class="material-icons-outlined">workspace_premium</mat-icon>
                  <p>No subscription found. <a routerLink="/billing/pricing">Choose a plan \u2192</a></p>
                </div>

                <!-- USAGE QUOTA (r\xE9el depuis BD - table usage_metrics) -->
                <div *ngIf="usageQuota || subscription || myPayment">
                  <div class="section-title">
                    <h4 class="mb-0">Usage Metrics</h4>
                    <span class="pill pill-blue">LIVE \u2014 table: usage_metrics</span>
                  </div>
                  <p class="text-secondary small mb-3" *ngIf="usageQuota">
                    Last updated: {{ usageQuota.updatedAt | date:'dd MMM yyyy HH:mm' }} \xB7
                    Plan limits from: <strong>{{ usageQuota.planName }}</strong>
                  </p>

                  <div class="row gx-3" *ngIf="usageQuota">
                    <!-- Members -->
                    <div class="col-12 col-md-6 col-lg-4">
                      <mat-card class="mb-3 usage-card" [class.alert-card]="usageQuota.alert80Sent">
                        <mat-card-content>
                          <div class="usage-head">
                            <mat-icon class="material-icons-outlined">group</mat-icon>
                            <span>Active Members</span>
                            <span class="pill pill-red ms-auto" *ngIf="usageQuota.alert80Sent">\u26A0 80%+</span>
                          </div>
                          <div class="usage-nums">
                            <h4>{{ usageQuota.activeMembersCount }}</h4>
                            <span>/ {{ usageQuota.maxMembers }}</span>
                          </div>
                          <div class="usage-bar">
                            <div class="usage-fill"
                                 [style.width.%]="usageQuota.membersPct"
                                 [style.background]="usageQuota.membersPct>80?'#ef4444':usageQuota.membersPct>60?'#f59e0b':'#22c55e'">
                            </div>
                          </div>
                          <p class="usage-pct">{{ usageQuota.membersPct | number:'1.0-0' }}%</p>
                        </mat-card-content>
                      </mat-card>
                    </div>
                    <!-- Workspaces -->
                    <div class="col-12 col-md-6 col-lg-4">
                      <mat-card class="mb-3 usage-card">
                        <mat-card-content>
                          <div class="usage-head">
                            <mat-icon class="material-icons-outlined">workspaces</mat-icon>
                            <span>Workspaces</span>
                          </div>
                          <div class="usage-nums">
                            <h4>{{ usageQuota.workspacesCount }}</h4>
                            <span>/ {{ usageQuota.maxWorkspaces }}</span>
                          </div>
                          <div class="usage-bar">
                            <div class="usage-fill"
                                 [style.width.%]="usageQuota.workspacesPct"
                                 [style.background]="usageQuota.workspacesPct>80?'#ef4444':usageQuota.workspacesPct>60?'#f59e0b':'#22c55e'">
                            </div>
                          </div>
                          <p class="usage-pct">{{ usageQuota.workspacesPct | number:'1.0-0' }}%</p>
                        </mat-card-content>
                      </mat-card>
                    </div>
                    <!-- Projects -->
                    <div class="col-12 col-md-6 col-lg-4">
                      <mat-card class="mb-3 usage-card">
                        <mat-card-content>
                          <div class="usage-head">
                            <mat-icon class="material-icons-outlined">folder_open</mat-icon>
                            <span>Projects</span>
                          </div>
                          <div class="usage-nums">
                            <h4>{{ usageQuota.projectsCount }}</h4>
                            <span>/ {{ usageQuota.maxProjects }}</span>
                          </div>
                          <div class="usage-bar">
                            <div class="usage-fill"
                                 [style.width.%]="usageQuota.projectsPct"
                                 [style.background]="usageQuota.projectsPct>80?'#ef4444':usageQuota.projectsPct>60?'#f59e0b':'#22c55e'">
                            </div>
                          </div>
                          <p class="usage-pct">{{ usageQuota.projectsPct | number:'1.0-0' }}%</p>
                        </mat-card-content>
                      </mat-card>
                    </div>
                    <!-- Storage -->
                    <div class="col-12 col-md-6 col-lg-4">
                      <mat-card class="mb-3 usage-card">
                        <mat-card-content>
                          <div class="usage-head">
                            <mat-icon class="material-icons-outlined">storage</mat-icon>
                            <span>Storage</span>
                          </div>
                          <div class="usage-nums">
                            <h4>{{ usageQuota.storageUsedGb | number:'1.1-1' }} GB</h4>
                            <span>/ {{ usageQuota.maxStorageGb | number:'1.0-0' }} GB</span>
                          </div>
                          <div class="usage-bar">
                            <div class="usage-fill"
                                 [style.width.%]="usageQuota.storagePct"
                                 [style.background]="usageQuota.storagePct>80?'#ef4444':usageQuota.storagePct>60?'#f59e0b':'#22c55e'">
                            </div>
                          </div>
                          <p class="usage-pct">{{ usageQuota.storagePct | number:'1.0-0' }}%</p>
                        </mat-card-content>
                      </mat-card>
                    </div>
                    <!-- API Calls -->
                    <div class="col-12 col-md-6 col-lg-4">
                      <mat-card class="mb-3 usage-card">
                        <mat-card-content>
                          <div class="usage-head">
                            <mat-icon class="material-icons-outlined">api</mat-icon>
                            <span>API Calls</span>
                          </div>
                          <div class="usage-nums">
                            <h4>{{ usageQuota.apiCallsCount | number }}</h4>
                            <span>this month</span>
                          </div>
                        </mat-card-content>
                      </mat-card>
                    </div>
                    <!-- ML Inferences -->
                    <div class="col-12 col-md-6 col-lg-4">
                      <mat-card class="mb-3 usage-card">
                        <mat-card-content>
                          <div class="usage-head">
                            <mat-icon class="material-icons-outlined">psychology</mat-icon>
                            <span>ML Inferences</span>
                          </div>
                          <div class="usage-nums">
                            <h4>{{ usageQuota.mlInferencesCount | number }}</h4>
                            <span>this month</span>
                          </div>
                        </mat-card-content>
                      </mat-card>
                    </div>
                  </div>

                  <div class="empty-state" *ngIf="!usageQuota">
                    <mat-icon class="material-icons-outlined">bar_chart</mat-icon>
                    <p>Usage metrics will appear here once your first daily snapshot is computed.</p>
                  </div>
                </div>
              </div>
            </mat-tab>

            <!-- TAB 2 : INVOICES + LINE ITEMS (r\xE9el depuis BD) -->
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon class="material-icons-outlined tab-icon">receipt_long</mat-icon>
                Invoices <span class="tab-badge" *ngIf="invoices.length">{{ invoices.length }}</span>
              </ng-template>
              <div class="tab-content">
                <div class="tab-header">
                  <div>
                    <h4 class="mb-1">My Invoices</h4>
                    <p class="text-secondary small mb-0">
                      Tables: <code>invoices</code> + <code>invoice_line_items</code> \u2014 read only
                    </p>
                  </div>
                  <span class="pill pill-blue">READ ONLY</span>
                </div>

                <!-- Invoices depuis BD -->
                <ng-container *ngFor="let inv of invoices">
                  <mat-card class="mb-3 mt-3 invoice-card">
                    <mat-card-content>
                      <div class="inv-header">
                        <div>
                          <h5 class="mb-0">{{ inv.invoiceNumber }}</h5>
                          <p class="text-secondary small mb-0">{{ inv.createdAt | date:'dd MMM yyyy' }}</p>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                          <span class="pill" [class]="getInvClass(inv.status)">{{ inv.status }}</span>
                          <strong>\${{ inv.total | number:'1.2-2' }} {{ inv.currency }}</strong>
                        </div>
                      </div>

                      <!-- Line Items (r\xE9els depuis BD) -->
                      <div class="line-items" *ngIf="inv.lineItems && inv.lineItems.length > 0">
                        <p class="li-title">Line Items <span class="pill pill-blue">invoice_line_items</span></p>
                        <table class="li-table">
                          <thead>
                            <tr>
                              <th>Description</th>
                              <th class="text-end">Qty</th>
                              <th class="text-end">Unit Price</th>
                              <th class="text-end">Tax</th>
                              <th class="text-end">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr *ngFor="let li of inv.lineItems">
                              <td>{{ li.description }}</td>
                              <td class="text-end">{{ li.quantity }}</td>
                              <td class="text-end">\${{ li.unitPrice | number:'1.2-2' }}</td>
                              <td class="text-end">{{ li.taxRate }}%</td>
                              <td class="text-end"><strong>\${{ li.totalPrice | number:'1.2-2' }}</strong></td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr class="total-row">
                              <td colspan="4">Subtotal</td>
                              <td class="text-end">\${{ inv.subtotal | number:'1.2-2' }}</td>
                            </tr>
                            <tr class="total-row">
                              <td colspan="4">Tax (19%)</td>
                              <td class="text-end">\${{ inv.taxAmount | number:'1.2-2' }}</td>
                            </tr>
                            <tr class="grand-total">
                              <td colspan="4"><strong>Total</strong></td>
                              <td class="text-end"><strong>\${{ inv.total | number:'1.2-2' }}</strong></td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>

                      <div class="d-flex justify-content-between align-items-center mt-2">
                        <p class="text-secondary small mb-0">
                          Period: {{ inv.billingPeriodStart | date:'dd/MM/yy' }} \u2192 {{ inv.billingPeriodEnd | date:'dd/MM/yy' }}
                          <span *ngIf="inv.paidAt"> \xB7 Paid: {{ inv.paidAt | date:'dd MMM yyyy' }}</span>
                        </p>
                        <button mat-icon-button matTooltip="Download PDF" [disabled]="!inv.pdfUrl" (click)="dl(inv)">
                          <mat-icon class="material-icons-outlined">download</mat-icon>
                        </button>
                      </div>
                    </mat-card-content>
                  </mat-card>
                </ng-container>

                <!-- Fallback -->
                <div *ngIf="invoices.length === 0 && myPayment && !loading" class="mt-3">
                  <mat-card class="invoice-card">
                    <mat-card-content>
                      <div class="inv-header">
                        <div>
                          <h5 class="mb-0">INV-{{ myPayment.paymentId }}</h5>
                          <p class="text-secondary small mb-0">{{ myPayment.createdAt | date:'dd MMM yyyy' }}</p>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                          <span class="pill pill-green">PAID</span>
                          <strong>\${{ myPayment.amount | number:'1.2-2' }} {{ myPayment.currency }}</strong>
                        </div>
                      </div>
                      <div class="line-items mt-2">
                        <table class="li-table">
                          <tbody>
                            <tr>
                              <td>{{ myPayment.planName }} Plan \u2013 {{ myPayment.billingCycle }} Subscription</td>
                              <td class="text-end">1</td>
                              <td class="text-end">\${{ myPayment.amount | number:'1.2-2' }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </mat-card-content>
                  </mat-card>
                </div>

                <div class="empty-state" *ngIf="invoices.length === 0 && !myPayment && !loading">
                  <mat-icon class="material-icons-outlined">receipt_long</mat-icon>
                  <p>No invoices yet.</p>
                </div>
              </div>
            </mat-tab>

            <!-- TAB 3 : PAYMENT ATTEMPTS (r\xE9el depuis BD) -->
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon class="material-icons-outlined tab-icon">payments</mat-icon>
                Payment Attempts <span class="tab-badge" *ngIf="paymentAttempts.length">{{ paymentAttempts.length }}</span>
              </ng-template>
              <div class="tab-content">
                <div class="tab-header">
                  <div>
                    <h4 class="mb-1">Payment Attempts</h4>
                    <p class="text-secondary small mb-0">Table: <code>payment_attempts</code> \u2014 read only</p>
                  </div>
                  <span class="pill pill-blue">READ ONLY</span>
                </div>

                <div class="table-responsive mt-3">
                  <table mat-table [dataSource]="attemptsDS" class="bg-none w-100" *ngIf="paymentAttempts.length > 0">
                    <ng-container matColumnDef="attempt">
                      <th mat-header-cell *matHeaderCellDef>#</th>
                      <td mat-cell *matCellDef="let a" class="py-2">
                        <strong>Attempt {{ a.attemptNumber }}</strong>
                      </td>
                    </ng-container>
                    <ng-container matColumnDef="invoice">
                      <th mat-header-cell *matHeaderCellDef>Invoice</th>
                      <td mat-cell *matCellDef="let a">
                        <span class="text-secondary small">{{ a.invoiceNumber }}</span>
                      </td>
                    </ng-container>
                    <ng-container matColumnDef="amount">
                      <th mat-header-cell *matHeaderCellDef>Amount</th>
                      <td mat-cell *matCellDef="let a"><strong>\${{ a.amount | number:'1.2-2' }}</strong></td>
                    </ng-container>
                    <ng-container matColumnDef="status">
                      <th mat-header-cell *matHeaderCellDef>Status</th>
                      <td mat-cell *matCellDef="let a">
                        <span class="pill" [class]="getAttemptClass(a.status)">{{ a.status }}</span>
                      </td>
                    </ng-container>
                    <ng-container matColumnDef="error">
                      <th mat-header-cell *matHeaderCellDef>Error</th>
                      <td mat-cell *matCellDef="let a" class="text-secondary small">
                        {{ a.failureCode ?? '\u2014' }}
                        <span *ngIf="a.failureMessage"> \xB7 {{ a.failureMessage }}</span>
                      </td>
                    </ng-container>
                    <ng-container matColumnDef="date">
                      <th mat-header-cell *matHeaderCellDef>Date</th>
                      <td mat-cell *matCellDef="let a" class="text-secondary small">
                        {{ a.attemptedAt | date:'dd MMM yyyy HH:mm' }}
                      </td>
                    </ng-container>
                    <tr mat-header-row *matHeaderRowDef="attemptCols"></tr>
                    <tr mat-row *matRowDef="let r; columns: attemptCols"></tr>
                  </table>
                </div>

                <div class="empty-state" *ngIf="paymentAttempts.length === 0 && !loading">
                  <mat-icon class="material-icons-outlined">payments</mat-icon>
                  <p>No payment attempts recorded yet.</p>
                </div>
              </div>
            </mat-tab>

            <!-- TAB 4 : PLANS (READ) -->
            <mat-tab>
              <ng-template mat-tab-label>
                <mat-icon class="material-icons-outlined tab-icon">inventory_2</mat-icon>Plans
              </ng-template>
              <div class="tab-content">
                <div class="tab-header">
                  <div><h4 class="mb-1">Available Plans</h4><p class="text-secondary small mb-0">Compare and upgrade</p></div>
                </div>
                <div class="row gx-3 gx-lg-4 mt-3">
                  <div class="col-12 col-md-6 col-xl-4" *ngFor="let p of availablePlans">
                    <mat-card class="plan-card mb-3" [class.current-plan]="isCurrentPlan(p)">
                      <mat-card-content>
                        <div class="plan-head">
                          <div><h4 class="mb-0">{{ p.displayName }}</h4><code class="text-secondary" style="font-size:11px">{{ p.name }}</code></div>
                          <span class="pill pill-green" *ngIf="isCurrentPlan(p)">Current</span>
                        </div>
                        <div class="price-row">
                          <div class="price-box"><span class="price-lbl">Monthly</span><span class="price-val">\${{ p.priceMonthly }}</span></div>
                          <div class="price-box"><span class="price-lbl">Annual/mo</span><span class="price-val">\${{ p.priceYearly }}</span></div>
                        </div>
                        <div class="plan-meta">
                          <div class="meta-row"><mat-icon class="material-icons-outlined">storage</mat-icon>{{ (p.storageMb/1024)|number:'1.0-0' }} GB</div>
                          <div class="meta-row"><mat-icon class="material-icons-outlined">psychology</mat-icon>ML: {{ p.mlTier }}</div>
                          <div class="meta-row"><mat-icon class="material-icons-outlined">support_agent</mat-icon>{{ p.supportTier }}</div>
                          <div class="meta-row"><mat-icon class="material-icons-outlined">lock_open</mat-icon>API: {{ p.apiAccess?'Yes':'No' }} \xB7 SSO: {{ p.ssoEnabled?'Yes':'No' }}</div>
                        </div>
                        <button mat-flat-button color="primary" class="w-100" *ngIf="!isCurrentPlan(p)" routerLink="/billing/pricing">
                          Upgrade to {{ p.displayName }}
                        </button>
                        <button mat-stroked-button class="w-100" *ngIf="isCurrentPlan(p)" disabled>\u2713 Your Current Plan</button>
                      </mat-card-content>
                    </mat-card>
                  </div>
                </div>
              </div>
            </mat-tab>

          </mat-tab-group>
        </mat-card-content>
      </mat-card>
    </div>
  `, styles: ["/* angular:styles/component:css;45b497e2e3619ec01f90e8812abab5712515df2015da4392c76177b1c90d3a10;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/pages/app/org-billing/org-billing.component.ts */\n.stat-card mat-card-content {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n  padding: 16px;\n}\n.stat-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.stat-icon mat-icon {\n  color: #fff;\n  font-size: 20px;\n}\n.stat-label {\n  font-size: 12px;\n  color: #64748b;\n  margin: 0;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.stat-val {\n  font-size: 24px;\n  font-weight: 800;\n  margin: 0;\n}\n.stat-plan {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 0;\n}\n.stat-date {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0;\n}\n.pill {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.pill-green {\n  background: #dcfce7;\n  color: #15803d;\n}\n.pill-red {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.pill-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.pill-yellow {\n  background: #fef9c3;\n  color: #a16207;\n}\n.tab-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-right: 6px;\n}\n.tab-badge {\n  background: #e0e7ff;\n  color: #4f46e5;\n  border-radius: 10px;\n  padding: 2px 8px;\n  font-size: 11px;\n  font-weight: 700;\n  margin-left: 6px;\n}\n.tab-content {\n  padding: 24px;\n}\n.tab-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.section-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.sub-card {\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  overflow: hidden;\n}\n.sub-banner {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #4f46e5);\n  padding: 24px;\n  color: #fff;\n}\n.sub-badge {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, .2);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.sub-badge mat-icon {\n  color: #fff;\n  font-size: 24px;\n}\n.sub-banner h3,\n.sub-banner p {\n  color: #fff;\n}\n.sub-body {\n  padding: 20px 24px;\n}\n.sub-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #f1f5f9;\n  font-size: 14px;\n}\n.sub-row:last-child {\n  border-bottom: none;\n}\n.sub-row span {\n  color: #64748b;\n}\n.sub-footer {\n  padding: 16px 24px;\n  background: #f8fafc;\n}\n.usage-card {\n  border: 1px solid #e5e7eb;\n}\n.usage-card.alert-card {\n  border-color: #f59e0b;\n}\n.usage-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n  font-size: 13px;\n  color: #64748b;\n  font-weight: 600;\n}\n.usage-head mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #6366f1;\n}\n.usage-nums {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.usage-nums h4 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 800;\n}\n.usage-nums span {\n  color: #94a3b8;\n  font-size: 13px;\n}\n.usage-bar {\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 4px;\n}\n.usage-fill {\n  height: 100%;\n  border-radius: 10px;\n  transition: width .4s;\n}\n.usage-pct {\n  font-size: 11px;\n  color: #94a3b8;\n  margin: 0;\n  text-align: right;\n}\n.invoice-card {\n  border: 1px solid #e5e7eb;\n}\n.inv-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.line-items {\n  background: #f8fafc;\n  border-radius: 10px;\n  padding: 12px 16px;\n}\n.li-title {\n  font-size: 12px;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.li-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.li-table th {\n  color: #94a3b8;\n  font-weight: 600;\n  font-size: 11px;\n  text-transform: uppercase;\n  padding: 6px 8px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.li-table td {\n  padding: 8px;\n  border-bottom: 1px solid #f1f5f9;\n  color: #1e293b;\n}\n.li-table tfoot td {\n  color: #64748b;\n  font-size: 12px;\n  padding: 6px 8px;\n}\n.li-table .total-row td {\n  border-bottom: 1px solid #e2e8f0;\n}\n.li-table .grand-total td {\n  font-size: 14px;\n  padding-top: 10px;\n  border-bottom: none;\n}\n.plan-card {\n  border: 1px solid #e5e7eb;\n}\n.plan-card.current-plan {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 2px rgba(99, 102, 241, .2);\n}\n.plan-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.price-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.price-box {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 8px;\n  text-align: center;\n}\n.price-lbl {\n  display: block;\n  font-size: 10px;\n  color: #94a3b8;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.price-val {\n  display: block;\n  font-size: 20px;\n  font-weight: 800;\n  color: #1e293b;\n}\n.plan-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.meta-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #64748b;\n}\n.meta-row mat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.empty-state {\n  text-align: center;\n  padding: 40px 20px;\n  color: #94a3b8;\n}\n.empty-state mat-icon {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  display: block;\n  margin: 0 auto 12px;\n}\n.empty-state p {\n  font-size: 13px;\n}\n.empty-state a {\n  color: #6366f1;\n}\n/*# sourceMappingURL=org-billing.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrgBillingComponent, { className: "OrgBillingComponent", filePath: "src/app/pages/app/org-billing/org-billing.component.ts", lineNumber: 593 });
})();
export {
  OrgBillingComponent
};
//# sourceMappingURL=org-billing.component-U7CUT5NW.js.map
