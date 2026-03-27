import {
  CircleProgressBlueComponent
} from "./chunk-NEQRFG5O.js";
import {
  EffortLogDialogComponent
} from "./chunk-6WTG4K4O.js";
import {
  CreateEditProjectModal
} from "./chunk-SKOQXL7S.js";
import "./chunk-SCEBMLYD.js";
import "./chunk-OANSMTPI.js";
import "./chunk-RG7V5CFX.js";
import "./chunk-IJRF7KWR.js";
import {
  CreateEditTaskComponent
} from "./chunk-2GQPUBKA.js";
import {
  MatPaginator,
  MatPaginatorModule,
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-W2JGJKKS.js";
import {
  MatDialog
} from "./chunk-35BPSZ5W.js";
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
import "./chunk-6LUZEZUF.js";
import "./chunk-O4BMA6W6.js";
import {
  register
} from "./chunk-S5VFQUTS.js";
import {
  MatTab,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-TCWW663Y.js";
import {
  MatButtonToggleModule
} from "./chunk-A5PEKAIR.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-SP2SPZAY.js";
import {
  MatSelectModule
} from "./chunk-MWLO4FO4.js";
import "./chunk-D63GK34V.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
  MatChipsModule
} from "./chunk-5G2FMPWG.js";
import "./chunk-N5FEMAXL.js";
import {
  MatListModule
} from "./chunk-ALLV6QEF.js";
import {
  MatDivider
} from "./chunk-CWBJY2AK.js";
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import "./chunk-5NBIR3PL.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-ZWEWHYHK.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-45QHUHCH.js";
import "./chunk-7XFTNJ2Y.js";
import {
  MatCard,
  MatCardContent,
  MatCardImage,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-ZLA4QS3A.js";
import {
  RouterLink
} from "./chunk-DYOMXT5J.js";
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
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  CommonModule,
  DatePipe,
  MatIcon,
  MatIconModule,
  NgClass,
  TitleCasePipe
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ViewChild,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/projects/project-details.component.ts
var _c0 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-red": a2 });
var _c1 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-violet": a2 });
var _c2 = () => [5, 10, 25];
var _c3 = (a0, a1, a2, a3) => ({ "theme-green": a0, "theme-orange": a1, "theme-sky": a2, "theme-red": a3 });
var _c4 = (a0, a1, a2) => ({ "theme-red": a0, "theme-orange": a1, "theme-green": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function ProjectDetailsComponent_Conditional_28_ng_template_246_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 97);
    \u0275\u0275text(1, "comment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Comments ");
    \u0275\u0275elementStart(3, "span", 98);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.comments().length);
  }
}
function ProjectDetailsComponent_Conditional_28_For_256_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 31);
  }
}
function ProjectDetailsComponent_Conditional_28_For_256_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 27)(2, "div", 99);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 25)(5, "p", 100);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 43);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, ProjectDetailsComponent_Conditional_28_For_256_Conditional_12_Template, 1, 0, "mat-divider", 31);
  }
  if (rf & 2) {
    const comment_r3 = ctx.$implicit;
    const \u0275$index_505_r4 = ctx.$index;
    const \u0275$count_505_r5 = ctx.$count;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", comment_r3.user.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r3.user);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 5, comment_r3.timestamp, "MMM d, h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r3.text);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_505_r4 === \u0275$count_505_r5 - 1) ? 12 : -1);
  }
}
function ProjectDetailsComponent_Conditional_28_Conditional_257_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 68);
    \u0275\u0275text(1, "No comments yet. Start a discussion!");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailsComponent_Conditional_28_ng_template_259_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 97);
    \u0275\u0275text(1, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Activity ");
    \u0275\u0275elementStart(3, "span", 98);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.activityLog().length);
  }
}
function ProjectDetailsComponent_Conditional_28_For_263_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 77)(2, "div", 27)(3, "div", 101)(4, "mat-icon", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 25)(7, "p", 102);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 103)(11, "span", 104);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "span", 104);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, ". ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const activity_r6 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(activity_r6.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 5, activity_r6.timestamp, "MMM d, y, h:mm a"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(activity_r6.user);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", activity_r6.action, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r6.target);
  }
}
function ProjectDetailsComponent_Conditional_28_th_333_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 105);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailsComponent_Conditional_28_td_334_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 106)(1, "p", 107);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r7.taskId);
  }
}
function ProjectDetailsComponent_Conditional_28_th_336_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 105);
    \u0275\u0275text(1, "Title");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailsComponent_Conditional_28_td_337_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 108);
    \u0275\u0275listener("dblclick", function ProjectDetailsComponent_Conditional_28_td_337_Template_td_dblclick_0_listener() {
      const task_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEffortLogDialog(task_r9));
    });
    \u0275\u0275elementStart(1, "p")(2, "span", 109);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 110);
    \u0275\u0275text(5, " touch_double ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r9.title);
  }
}
function ProjectDetailsComponent_Conditional_28_th_339_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 105);
    \u0275\u0275text(1, "Assigned To");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailsComponent_Conditional_28_td_340_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 106)(1, "div", 111)(2, "div", 27)(3, "div", 112);
    \u0275\u0275element(4, "img", 113);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 25)(6, "p", 114);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const task_r10 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("alt", \u0275\u0275interpolate(task_r10.assignedTo))("src", task_r10.assignedToimage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r10.assignedTo);
  }
}
function ProjectDetailsComponent_Conditional_28_th_342_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 105);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailsComponent_Conditional_28_td_343_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 106)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(4, _c3, task_r11.status === "in-progress", task_r11.status === "ready to test", task_r11.status === "new", task_r11.status === "completed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, task_r11.status), " ");
  }
}
function ProjectDetailsComponent_Conditional_28_th_345_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 105);
    \u0275\u0275text(1, "Priority");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailsComponent_Conditional_28_td_346_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 106)(1, "span", 115)(2, "mat-icon", 116);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c4, task_r12.priority === "High", task_r12.priority === "Medium", task_r12.priority === "Low"));
    \u0275\u0275advance();
    \u0275\u0275classProp("high-priority", task_r12.priority === "High");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r12.priority === "High" ? "warning" : "flag", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, task_r12.priority), " ");
  }
}
function ProjectDetailsComponent_Conditional_28_th_348_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 117);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ProjectDetailsComponent_Conditional_28_td_349_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 106)(1, "button", 118);
    \u0275\u0275listener("click", function ProjectDetailsComponent_Conditional_28_td_349_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "mat-icon", 14);
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 1)(6, "button", 119)(7, "mat-icon", 14);
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 120);
    \u0275\u0275listener("click", function ProjectDetailsComponent_Conditional_28_td_349_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteProject());
    });
    \u0275\u0275elementStart(12, "mat-icon", 14);
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const actionsMenu_r14 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionsMenu_r14);
  }
}
function ProjectDetailsComponent_Conditional_28_tr_350_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 121);
  }
}
function ProjectDetailsComponent_Conditional_28_tr_351_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 122);
  }
}
function ProjectDetailsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "mat-card", 19)(3, "mat-card-content", 20)(4, "h1", 6);
    \u0275\u0275text(5, "$ 600.00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 21);
    \u0275\u0275text(7, "Budget Remaining");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "div", 22)(10, "div", 23)(11, "p", 24);
    \u0275\u0275text(12, "Total Budget:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 25)(14, "h3");
    \u0275\u0275text(15, "$ 1200.00");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 26)(17, "div", 23)(18, "p", 24);
    \u0275\u0275text(19, "Progress:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 25)(21, "h3");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(23, "div", 18)(24, "mat-card", 19)(25, "mat-card-content", 20)(26, "h1", 6);
    \u0275\u0275text(27, "120.00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 21);
    \u0275\u0275text(29, "Total Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "br");
    \u0275\u0275elementStart(31, "div", 22)(32, "div", 23)(33, "p", 24);
    \u0275\u0275text(34, "Billing:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 25)(36, "h3");
    \u0275\u0275text(37, "60.50");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 26)(39, "div", 23)(40, "p", 24);
    \u0275\u0275text(41, "Learning:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 25)(43, "h3");
    \u0275\u0275text(44, "60.50");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(45, "div", 18)(46, "mat-card", 19)(47, "mat-card-content", 20)(48, "h1", 6);
    \u0275\u0275text(49, "$ 50.00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p", 21);
    \u0275\u0275text(51, "Infrastructure Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "br");
    \u0275\u0275elementStart(53, "div", 22)(54, "div", 23)(55, "p", 24);
    \u0275\u0275text(56, "Expenses:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 27)(58, "h3");
    \u0275\u0275text(59, "34.50");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 26)(61, "div", 23)(62, "p", 24);
    \u0275\u0275text(63, "Utilities:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 25)(65, "h3");
    \u0275\u0275text(66, "15.50");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(67, "div", 18)(68, "mat-card", 19)(69, "mat-card-content", 20)(70, "h1", 6);
    \u0275\u0275text(71, "$ 150.00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p", 21);
    \u0275\u0275text(73, "Pending Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "br");
    \u0275\u0275elementStart(75, "div", 22)(76, "div", 23)(77, "p", 24);
    \u0275\u0275text(78, "Next Billing:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 25)(80, "h3");
    \u0275\u0275text(81, "6 June 2025");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 26)(83, "div", 23)(84, "p", 24);
    \u0275\u0275text(85, "Method:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 25)(87, "h3");
    \u0275\u0275text(88, "Paypal");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(89, "div", 17)(90, "div", 28)(91, "mat-card", 19)(92, "div", 29);
    \u0275\u0275element(93, "img", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "mat-card-content", 20)(95, "h3", 6);
    \u0275\u0275text(96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "p", 24);
    \u0275\u0275text(98);
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "br");
    \u0275\u0275elementStart(100, "h4", 31);
    \u0275\u0275text(101, "Status Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 32)(103, "div", 33)(104, "p", 24);
    \u0275\u0275text(105, "Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 34)(107, "span", 35);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "div", 32)(110, "div", 33)(111, "p", 24);
    \u0275\u0275text(112, "Priority");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div", 34)(114, "span", 36);
    \u0275\u0275text(115);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "div", 32)(117, "div", 33)(118, "p", 24);
    \u0275\u0275text(119, "Due Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 34)(121, "p");
    \u0275\u0275text(122);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(123, "div", 37)(124, "div", 33)(125, "p", 24);
    \u0275\u0275text(126, "Progress");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 34)(128, "p", 6);
    \u0275\u0275text(129);
    \u0275\u0275elementEnd();
    \u0275\u0275element(130, "mat-progress-bar", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(131, "br");
    \u0275\u0275elementStart(132, "h4", 31);
    \u0275\u0275text(133, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 39)(135, "span", 40);
    \u0275\u0275element(136, "img", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "span", 42)(138, "p", 6);
    \u0275\u0275text(139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "p", 43);
    \u0275\u0275text(141, "ESEM, Agile, Level3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "button", 44)(143, "mat-icon");
    \u0275\u0275text(144, "repeat");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(145, "br");
    \u0275\u0275elementStart(146, "h4", 31);
    \u0275\u0275text(147, "Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "div", 39)(149, "span", 40);
    \u0275\u0275element(150, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "span", 42)(152, "p", 6);
    \u0275\u0275text(153, "Ava Johnson");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "p", 43);
    \u0275\u0275text(155, "Software Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "button", 46)(157, "mat-icon");
    \u0275\u0275text(158, "remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(159, "div", 39)(160, "span", 40);
    \u0275\u0275element(161, "img", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "span", 42)(163, "p", 6);
    \u0275\u0275text(164, "Ben Smith");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "p", 43);
    \u0275\u0275text(166, "Software Developer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(167, "button", 46)(168, "mat-icon");
    \u0275\u0275text(169, "remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(170, "div", 39)(171, "span", 40);
    \u0275\u0275element(172, "img", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "span", 42)(174, "p", 6);
    \u0275\u0275text(175, "Chloe Lee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "p", 43);
    \u0275\u0275text(177, "Backend Engineer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(178, "button", 46)(179, "mat-icon");
    \u0275\u0275text(180, "remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(181, "div", 39)(182, "span", 40);
    \u0275\u0275element(183, "img", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "span", 42)(185, "p", 6);
    \u0275\u0275text(186, "David Chen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "p", 43);
    \u0275\u0275text(188, "AI Caretaker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(189, "button", 46)(190, "mat-icon");
    \u0275\u0275text(191, "remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(192, "div", 39)(193, "span", 40);
    \u0275\u0275element(194, "img", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "span", 42)(196, "p", 6);
    \u0275\u0275text(197, "Ella Garcia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "p", 43);
    \u0275\u0275text(199, "UX Designer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(200, "button", 46)(201, "mat-icon");
    \u0275\u0275text(202, "remove");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(203, "div", 51)(204, "mat-card", 19)(205, "mat-card-content", 20)(206, "div", 17)(207, "div", 52)(208, "h3", 6);
    \u0275\u0275text(209, "Documents (12)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "p", 43);
    \u0275\u0275text(211, "Today 10 Document uploaded");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(212, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "swiper-container", 53)(214, "swiper-slide", 54)(215, "mat-card", 55)(216, "mat-card-content", 56);
    \u0275\u0275element(217, "img", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(218, "swiper-slide", 54)(219, "mat-card", 55)(220, "mat-card-content", 56);
    \u0275\u0275element(221, "img", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(222, "swiper-slide", 54)(223, "mat-card", 55)(224, "mat-card-content", 56);
    \u0275\u0275element(225, "img", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(226, "swiper-slide", 54)(227, "mat-card", 55)(228, "mat-card-content", 56);
    \u0275\u0275element(229, "img", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(230, "swiper-slide", 54)(231, "mat-card", 55)(232, "mat-card-content", 56);
    \u0275\u0275element(233, "img", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(234, "swiper-slide", 54)(235, "mat-card", 55)(236, "mat-card-content", 56);
    \u0275\u0275element(237, "img", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(238, "swiper-slide", 54)(239, "mat-card", 55)(240, "mat-card-content", 56);
    \u0275\u0275element(241, "img", 60);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(242, "mat-card", 19)(243, "mat-card-content", 61)(244, "mat-tab-group", 62)(245, "mat-tab");
    \u0275\u0275template(246, ProjectDetailsComponent_Conditional_28_ng_template_246_Template, 5, 1, "ng-template", 63);
    \u0275\u0275elementStart(247, "div", 64)(248, "mat-form-field", 65)(249, "mat-label");
    \u0275\u0275text(250, "Add a comment...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(251, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ProjectDetailsComponent_Conditional_28_Template_input_ngModelChange_251_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newCommentText, $event) || (ctx_r1.newCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ProjectDetailsComponent_Conditional_28_Template_input_keyup_enter_251_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addComment());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(252, "button", 67);
    \u0275\u0275listener("click", function ProjectDetailsComponent_Conditional_28_Template_button_click_252_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addComment());
    });
    \u0275\u0275elementStart(253, "mat-icon");
    \u0275\u0275text(254, "send");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(255, ProjectDetailsComponent_Conditional_28_For_256_Template, 13, 8, null, null, _forTrack0);
    \u0275\u0275conditionalCreate(257, ProjectDetailsComponent_Conditional_28_Conditional_257_Template, 2, 0, "p", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(258, "mat-tab");
    \u0275\u0275template(259, ProjectDetailsComponent_Conditional_28_ng_template_259_Template, 5, 1, "ng-template", 63);
    \u0275\u0275elementStart(260, "div", 64)(261, "ul", 69);
    \u0275\u0275repeaterCreate(262, ProjectDetailsComponent_Conditional_28_For_263_Template, 17, 8, "li", null, _forTrack0);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(264, "div", 17)(265, "div", 18)(266, "mat-card", 19)(267, "mat-card-content", 20)(268, "div", 70)(269, "div", 52);
    \u0275\u0275element(270, "app-circle-progress-blue", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(271, "div", 72)(272, "h3", 6);
    \u0275\u0275text(273, "495");
    \u0275\u0275elementStart(274, "span", 24);
    \u0275\u0275text(275, "/690");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(276, "p", 21);
    \u0275\u0275text(277, "Completed");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(278, "div", 18)(279, "mat-card", 19)(280, "mat-card-content", 20)(281, "div", 4)(282, "div", 52)(283, "div", 73)(284, "mat-icon");
    \u0275\u0275text(285, "warning");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(286, "div", 72)(287, "h3", 74);
    \u0275\u0275text(288, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(289, "p", 21);
    \u0275\u0275text(290, "High");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(291, "div", 18)(292, "mat-card", 19)(293, "mat-card-content", 20)(294, "div", 4)(295, "div", 52)(296, "div", 75)(297, "mat-icon");
    \u0275\u0275text(298, "flag");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(299, "div", 72)(300, "h3", 74);
    \u0275\u0275text(301, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(302, "p", 21);
    \u0275\u0275text(303, "Medium");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(304, "div", 18)(305, "mat-card", 19)(306, "mat-card-content", 20)(307, "div", 4)(308, "div", 52)(309, "div", 76)(310, "mat-icon");
    \u0275\u0275text(311, "flag");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(312, "div", 72)(313, "h3", 74);
    \u0275\u0275text(314, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(315, "p", 21);
    \u0275\u0275text(316, "Low");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(317, "mat-card", 19)(318, "mat-card-content")(319, "div", 77)(320, "div", 78)(321, "h3", 6);
    \u0275\u0275text(322, "Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(323, "p", 43);
    \u0275\u0275text(324, "2 Task Added, 4 Task Resolved, 1 Ready to Test");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(325, "div", 79)(326, "mat-form-field", 80)(327, "input", 81, 0);
    \u0275\u0275listener("keyup", function ProjectDetailsComponent_Conditional_28_Template_input_keyup_327_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(329, "mat-icon", 82);
    \u0275\u0275text(330, "search");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(331, "table", 83);
    \u0275\u0275elementContainerStart(332, 84);
    \u0275\u0275template(333, ProjectDetailsComponent_Conditional_28_th_333_Template, 2, 0, "th", 85)(334, ProjectDetailsComponent_Conditional_28_td_334_Template, 3, 1, "td", 86);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(335, 87);
    \u0275\u0275template(336, ProjectDetailsComponent_Conditional_28_th_336_Template, 2, 0, "th", 85)(337, ProjectDetailsComponent_Conditional_28_td_337_Template, 6, 1, "td", 88);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(338, 89);
    \u0275\u0275template(339, ProjectDetailsComponent_Conditional_28_th_339_Template, 2, 0, "th", 85)(340, ProjectDetailsComponent_Conditional_28_td_340_Template, 8, 4, "td", 86);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(341, 90);
    \u0275\u0275template(342, ProjectDetailsComponent_Conditional_28_th_342_Template, 2, 0, "th", 85)(343, ProjectDetailsComponent_Conditional_28_td_343_Template, 4, 9, "td", 86);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(344, 91);
    \u0275\u0275template(345, ProjectDetailsComponent_Conditional_28_th_345_Template, 2, 0, "th", 85)(346, ProjectDetailsComponent_Conditional_28_td_346_Template, 6, 11, "td", 86);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(347, 92);
    \u0275\u0275template(348, ProjectDetailsComponent_Conditional_28_th_348_Template, 2, 0, "th", 93)(349, ProjectDetailsComponent_Conditional_28_td_349_Template, 16, 1, "td", 86);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(350, ProjectDetailsComponent_Conditional_28_tr_350_Template, 1, 0, "tr", 94)(351, ProjectDetailsComponent_Conditional_28_tr_351_Template, 1, 0, "tr", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275element(352, "mat-paginator", 96);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate1("", ctx_r1.project().progress, " %");
    \u0275\u0275advance(71);
    \u0275\u0275property("src", ctx_r1.project().image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.project().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.project().company);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(21, _c0, ctx_r1.project().status === "Active", ctx_r1.project().status === "On Hold", ctx_r1.project().status === "Completed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.project().status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(25, _c1, ctx_r1.project().priority === "Low", ctx_r1.project().priority === "Medium", ctx_r1.project().priority === "High"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.project().priority, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.project().dueDate);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.project().progress, " %");
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275interpolate(ctx_r1.project().progress));
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r1.project().managerimage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.project().manager);
    \u0275\u0275advance(112);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newCommentText);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.newCommentText() || ctx_r1.newCommentText().trim().length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.sortedComments());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.comments().length === 0 ? 257 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.sortedActivityLog());
    \u0275\u0275advance(69);
    \u0275\u0275property("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(29, _c2));
  }
}
register();
var ProjectDetailsComponent = class _ProjectDetailsComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.project = signal({
      id: 4,
      image: "assets/img/product4.jpg",
      name: "Mobile App Feature X Development",
      company: "PrivateJet Company",
      status: "Active",
      priority: "Medium",
      managerimage: "assets/img/user-10.jpg",
      manager: "Dana Scully",
      dueDate: "2025-12-05",
      progress: 50,
      description: "This project focuses on the development and deployment of Feature X for our primary mobile application. This feature includes a new user authentication flow, enhanced map integration, and real-time push notifications. We are currently in the mid-development phase, focusing on backend API stability and front-end state management. Strict adherence to deadlines and quality assurance is critical for a successful Q4 launch.",
      budget: 45e3,
      tasksCompleted: 15,
      totalTasks: 30,
      teamSize: 19
    }, ...ngDevMode ? [{ debugName: "project" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tasks = [
      {
        taskId: 101,
        projectId: 4,
        title: "Implement new auth API integration",
        status: "in-progress",
        type: "Backend",
        assignedTo: "Dana Scully",
        assignedToimage: "assets/img/user-10.jpg",
        priority: "High",
        assignHours: "20",
        loggedHours: "18",
        effortLogs: [
          { date: "2026-10-08", startTime: "09:00", endTime: "12:00", duration: "3.0 hrs" },
          { date: "2026-10-09", startTime: "13:00", endTime: "16:30", duration: "3.5 hrs" },
          { date: "2026-10-10", startTime: "10:00", endTime: "13:00", duration: "3.0 hrs" }
        ]
      },
      {
        taskId: 102,
        projectId: 4,
        title: "Design review for new map component",
        status: "ready to test",
        type: "Design",
        assignedTo: "Alice Johnson",
        assignedToimage: "assets/img/user-1.jpg",
        priority: "Medium",
        assignHours: "20",
        loggedHours: "18",
        effortLogs: [
          { date: "2026-10-08", startTime: "09:00", endTime: "12:00", duration: "3.0 hrs" },
          { date: "2026-10-09", startTime: "13:00", endTime: "16:30", duration: "3.5 hrs" },
          { date: "2026-10-10", startTime: "10:00", endTime: "13:00", duration: "3.0 hrs" }
        ]
      },
      {
        taskId: 103,
        projectId: 4,
        title: "Fix iOS scroll bug in notification view",
        status: "new",
        type: "Bug",
        assignedTo: "Bob Smith",
        assignedToimage: "assets/img/user-3.jpg",
        priority: "High",
        assignHours: "20",
        loggedHours: "0",
        effortLogs: []
      },
      {
        taskId: 104,
        projectId: 4,
        title: "Create push notification template",
        status: "completed",
        type: "Development",
        assignedTo: "Charlie Brown",
        assignedToimage: "assets/img/user-5.jpg",
        priority: "Low",
        assignHours: "18",
        loggedHours: "16",
        effortLogs: [
          { date: "2026-10-08", startTime: "09:00", endTime: "12:00", duration: "3.0 hrs" },
          { date: "2026-10-09", startTime: "13:00", endTime: "16:30", duration: "3.5 hrs" },
          { date: "2026-10-10", startTime: "10:00", endTime: "13:00", duration: "3.0 hrs" }
        ]
      },
      {
        taskId: 105,
        projectId: 4,
        title: "Initial security audit prep",
        status: "new",
        type: "Backend",
        assignedTo: "Alice Johnson",
        assignedToimage: "assets/img/user-2.jpg",
        priority: "High",
        assignHours: "28",
        loggedHours: "0",
        effortLogs: []
      },
      {
        taskId: 106,
        projectId: 2,
        title: "New employee onboarding flow mockups",
        status: "new",
        type: "Design",
        assignedTo: "Jane Smith",
        assignedToimage: "assets/img/user-4.jpg",
        priority: "Medium",
        assignHours: "25",
        loggedHours: "21",
        effortLogs: [
          { date: "2026-10-08", startTime: "09:00", endTime: "12:00", duration: "3.0 hrs" },
          { date: "2026-10-09", startTime: "13:00", endTime: "16:30", duration: "3.5 hrs" },
          { date: "2026-10-10", startTime: "10:00", endTime: "13:00", duration: "3.0 hrs" }
        ]
      },
      {
        taskId: 107,
        projectId: 2,
        title: "API Endpoint setup for profiles",
        status: "in-progress",
        type: "Backend",
        assignedTo: "Jane Smith",
        assignedToimage: "assets/img/user-4.jpg",
        priority: "Medium",
        assignHours: "15",
        loggedHours: "0",
        effortLogs: []
      },
      {
        taskId: 108,
        projectId: 1,
        title: "Fix checkout CSS bug",
        status: "resolved",
        type: "Design Bug",
        assignedTo: "John Doe",
        assignedToimage: "assets/img/user-7.jpg",
        priority: "Low",
        assignHours: "20",
        loggedHours: "18",
        effortLogs: [
          { date: "2026-10-08", startTime: "09:00", endTime: "12:00", duration: "3.0 hrs" },
          { date: "2026-10-09", startTime: "13:00", endTime: "16:30", duration: "3.5 hrs" },
          { date: "2026-10-10", startTime: "10:00", endTime: "13:00", duration: "3.0 hrs" }
        ]
      },
      {
        taskId: 109,
        projectId: 3,
        title: "Aggregate Q3 Facebook data",
        status: "new",
        type: "Backend",
        assignedTo: "Bob Johnson",
        assignedToimage: "assets/img/user-9.jpg",
        priority: "Medium",
        assignHours: "19",
        loggedHours: "0",
        effortLogs: []
      }
    ];
    this.projectMembers = [
      { id: 1, name: "Ava Johnson", avatarUrl: "assets/img/user-1.jpg", title: "Software Engineer" },
      { id: 2, name: "Ben Smith", avatarUrl: "assets/img/user-3.jpg", title: "Product Manager" },
      { id: 3, name: "Chloe Lee", avatarUrl: "assets/img/user-2.jpg", title: "UX Designer" },
      { id: 4, name: "David Chen", avatarUrl: "assets/img/user-5.jpg", title: "Data Analyst" },
      { id: 5, name: "Ella Garcia", avatarUrl: "assets/img/user-4.jpg", title: "Marketing Specialist" },
      { id: 6, name: "Finn O'Connell", avatarUrl: "assets/img/user-7.jpg", title: "Sales Director" },
      { id: 7, name: "Grace Kim", avatarUrl: "assets/img/user-6.jpg", title: "HR Coordinator" },
      { id: 8, name: "Henry Davis", avatarUrl: "assets/img/user-9.jpg", title: "DevOps Engineer" },
      { id: 9, name: "Ivy Ross", avatarUrl: "assets/img/user-8.jpg", title: "Financial Controller" },
      { id: 10, name: "Jack Miller", avatarUrl: "assets/img/user-9.jpg", title: "CTO" }
    ];
    this.dataSource = new MatTableDataSource(this.tasks);
    this.displayedColumns = ["taskId", "title", "assignedTo", "status", "priority", "actions"];
    this.currentUser = "AdminUIUX";
    this.comments = signal([
      {
        id: 1,
        user: "Dana Scully",
        timestamp: new Date(Date.now() - 36e5),
        // 1 hour ago
        text: "I think we should use the new design system components for the cards. It would ensure consistency across the application."
      },
      {
        id: 2,
        user: "Ben Smith",
        timestamp: new Date(Date.now() - 18e5),
        // 30 mins ago
        text: "Agreed, John. I have updated the initial Figma draft to reflect the new component structure. Check it out and let me know if it meets the specs."
      }
    ], ...ngDevMode ? [{ debugName: "comments" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activityLog = signal([
      {
        id: 101,
        icon: "add_task",
        user: "System",
        action: "created the task",
        target: "Redesign User Dashboard",
        timestamp: new Date(Date.now() - 72e5)
        // 2 hours ago
      },
      {
        id: 102,
        icon: "label",
        user: "John Smith",
        action: "added the label",
        target: "UI/UX",
        timestamp: new Date(Date.now() - 6e6)
        // 1.67 hours ago
      },
      {
        id: 103,
        icon: "schedule",
        user: "Jane Doe",
        action: "changed the due date to",
        target: "10/25/2025",
        timestamp: new Date(Date.now() - 36e5)
        // 1 hour ago
      },
      {
        id: 104,
        icon: "attach_file",
        user: "John Smith",
        action: "attached a new file",
        target: "dashboard_mockup_v2.png",
        timestamp: new Date(Date.now() - 12e5)
        // 20 minutes ago
      }
    ], ...ngDevMode ? [{ debugName: "activityLog" }] : (
      /* istanbul ignore next */
      []
    ));
    this.newCommentText = signal("", ...ngDevMode ? [{ debugName: "newCommentText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortedComments = computed(() => {
      return [...this.comments()].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    }, ...ngDevMode ? [{ debugName: "sortedComments" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortedActivityLog = computed(() => {
      return [...this.activityLog()].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    }, ...ngDevMode ? [{ debugName: "sortedActivityLog" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteProject() {
    console.log("Deleting order:", this.project());
  }
  openDialog() {
    this.dialog.open(CreateEditProjectModal, {
      width: "990px",
      maxWidth: "990px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: this.project()
    });
  }
  openEffortLogDialog(tasks) {
    this.dialog.open(EffortLogDialogComponent, {
      width: "500px",
      maxWidth: "500px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: tasks
    });
  }
  // activity comment
  trackByCommentId(index, comment) {
    return comment.id;
  }
  trackByActivityId(index, activity) {
    return activity.id;
  }
  addComment() {
    const text = this.newCommentText().trim();
    if (!text) {
      return;
    }
    const newComment = {
      id: Date.now(),
      user: this.currentUser,
      timestamp: /* @__PURE__ */ new Date(),
      text
    };
    this.comments.update((c) => [newComment, ...c]);
    const newActivity = {
      id: Date.now() + 1,
      icon: "chat",
      user: this.currentUser,
      action: "added a comment",
      target: "Comments",
      timestamp: /* @__PURE__ */ new Date()
    };
    this.activityLog.update((a) => [newActivity, ...a]);
    this.newCommentText.set("");
  }
  createTask() {
    this.dialog.open(CreateEditTaskComponent, {
      width: "500px",
      maxWidth: "500px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: {
        projectId: this.project().id,
        projectName: this.project().name,
        members: this.projectMembers
      }
    });
  }
  static {
    this.\u0275fac = function ProjectDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectDetailsComponent, selectors: [["app-project-details"]], viewQuery: function ProjectDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5)(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 29, vars: 2, consts: [["input", ""], ["actionsMenu", "matMenu"], [1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col-12", "col-md", "mb-3", "mb-xl-0", "py-1", "order-1", "order-lg-1"], [1, "mb-1"], [1, "small"], ["routerLink", "/app/dashboard", 1, "me-2", "text-theme", "style-none"], [1, "material-icons-outlined", "align-middle", "text-sm"], [1, "material-icons-outlined", "align-middle", "text-sm", "me-2"], ["routerLink", "/app/projects", 1, "me-2", "text-theme", "style-none"], [1, "col-auto", "order-2", "order-lg-5", "mb-3", "mb-xl-0"], ["matButton", "", 1, "ms-1", 3, "click"], [1, "material-icons-outlined"], ["matButton", "filled", 1, "ms-1", 3, "click"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-6", "col-md-3", "col-xl"], [1, "mb-3", "mb-lg-4"], [1, "pb-0"], [1, "small", "text-secondary"], [1, "row", "gx-3", "align-items-center", "mb-2"], [1, "col-6"], [1, "text-secondary"], [1, "col"], [1, "row", "gx-3", "align-items-center", "mb-3"], [1, "col-auto"], [1, "col-12", "col-lg-4"], ["mat-card-image", "", 1, "w-100", "height-200", "coverimg", "mb-3"], ["alt", "Project Image", 1, "d-none", 3, "src"], [1, "mb-3"], [1, "row", "gx-3", "mb-3"], [1, "col-4"], [1, "col-8"], [1, "badge", "badge-light", 3, "ngClass"], [1, "badge", 3, "ngClass"], [1, "row", "gx-3", "mb-2"], ["mode", "determinate", 1, "mb-2", 3, "value"], [1, "mb-3", "d-flex", "align-items-center"], [1, "avatar", "avatar-40", "coverimg", "rounded-circle", "align-middle", "me-2"], ["alt", "Team Image", 1, "d-none", 3, "src"], [1, "align-middle", "d-inline-block", "flex-grow-1"], [1, "text-secondary", "small"], ["matIconButton", ""], ["src", "assets/img/user-2.jpg", "alt", "Team Image", 1, "d-none"], ["matIconButton", "", 1, "text-theme", "theme-red"], ["src", "assets/img/user-3.jpg", "alt", "Team Image", 1, "d-none"], ["src", "assets/img/user-4.jpg", "alt", "Team Image", 1, "d-none"], ["src", "assets/img/user-5.jpg", "alt", "Team Image", 1, "d-none"], ["src", "assets/img/user-6.jpg", "alt", "Team Image", 1, "d-none"], [1, "col-12", "col-lg-8"], [1, "col-auto", "mb-3"], ["slides-per-view", "auto", "space-between", "20px", "autoplay", "true", 1, "swiper"], [1, "w-auto"], [1, "overflow-hidden", "mb-3"], [1, "coverimg", "avatar", "avatar-100", "rounded"], ["src", "assets/img/document1.jpg", "alt", ""], ["src", "assets/img/document2.jpg", "alt", ""], ["src", "assets/img/document3.jpg", "alt", ""], ["src", "assets/img/document4.jpg", "alt", ""], [1, "p-0"], ["animationDuration", "300ms"], ["mat-tab-label", ""], [1, "px-3"], ["appearance", "outline", 1, "w-100", "my-3", "mt-lg-4"], ["matInput", "", "rows", "3", 3, "ngModelChange", "keyup.enter", "ngModel"], ["matIconButton", "", "matSuffix", "", "aria-label", "Send comment", 1, "text-theme", "me-2", 3, "click", "disabled"], [1, "text-center", "text-secondary"], [1, "activity"], [1, "row", "gx-2", "align-items-center"], [1, "avatar", "avatar-50", "rounded-circle"], [1, "col-12", "col-xl", "mb-3"], [1, "avatar", "avatar-50", "rounded", "bg-light-theme", "text-theme", "theme-red"], [1, "mb-0"], [1, "avatar", "avatar-50", "rounded", "bg-light-theme", "text-theme", "theme-orange"], [1, "avatar", "avatar-50", "rounded", "bg-light-theme", "text-theme", "theme-green"], [1, "row", "gx-3"], [1, "col", "mb-3"], [1, "col-12", "col-lg-5", "col-xl-4", "mb-3"], ["appearance", "outline", 1, "w-100", "inline-small"], ["matInput", "", "placeholder", "E.g., Task, Manager, Status...", 3, "keyup"], ["matSuffix", ""], ["mat-table", "", "matSort", "", 1, "bg-none", "responsive-table", 3, "dataSource"], ["matColumnDef", "taskId"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-cell", "", "class", "hoverview", 3, "dblclick", 4, "matCellDef"], ["matColumnDef", "assignedTo"], ["matColumnDef", "status"], ["matColumnDef", "priority"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of tasks", 1, "bg-none", 3, "pageSizeOptions"], [1, "me-2"], [1, "badge", "badge-light", "ms-2"], [1, "avatar", "avatar-40", "bg-light-theme", "text-theme", "fw-bold", "rounded-circle"], [1, "fw-bold", "mb-1"], [1, "avatar", "avatar-40", "rounded-circle", "bg-light-theme", "text-theme"], [1, "text-secondary", "small", "mb-1"], [1, ""], ["routerLink", "./", 1, "text-theme"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["routerLink", "/app/task-details", 1, "text-theme"], ["mat-cell", "", 1, "hoverview", 3, "dblclick"], [1, "text-truncated", "d-inline-block", "align-middle", 2, "max-width", "200px"], [1, "material-symbols-outlined", "hoverview-icon", "text-sm", "align-middle", "d-inline-block", "text-theme", "ms-1"], [1, "row", "gx-2", "align-items-center", "flex-nowrap"], [1, "avatar", "avatar-20", "rounded-circle", "coverimg"], [1, "", 3, "src", "alt"], [1, "mb-0", "text-truncated"], [1, "badge", "badge-light", "text-theme", 3, "ngClass"], [1, "text-sm"], ["mat-header-cell", ""], ["matIconButton", "", "aria-label", "Actions", 3, "click", "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ProjectDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "mat-card", 3)(2, "div", 4)(3, "div", 5)(4, "h3", 6);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 7)(7, "span", 8)(8, "mat-icon", 9);
        \u0275\u0275text(9, "house");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-icon", 10);
        \u0275\u0275text(12, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 11);
        \u0275\u0275text(14, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-icon", 10);
        \u0275\u0275text(16, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Project Details ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 12)(19, "button", 13);
        \u0275\u0275listener("click", function ProjectDetailsComponent_Template_button_click_19_listener() {
          return ctx.openDialog();
        });
        \u0275\u0275elementStart(20, "mat-icon", 14);
        \u0275\u0275text(21, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 15);
        \u0275\u0275listener("click", function ProjectDetailsComponent_Template_button_click_23_listener() {
          return ctx.createTask();
        });
        \u0275\u0275elementStart(24, "mat-icon", 14);
        \u0275\u0275text(25, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Task");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(27, "div", 16);
        \u0275\u0275conditionalCreate(28, ProjectDetailsComponent_Conditional_28_Template, 353, 30);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("Projects: ", ctx.project().name);
        \u0275\u0275advance(23);
        \u0275\u0275conditional(ctx.project() ? 28 : -1);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink, MatCardModule, MatCard, MatCardContent, MatCardImage, MatIconModule, MatIcon, MatTabsModule, MatTabLabel, MatTab, MatTabGroup, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatProgressBarModule, MatProgressBar, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatPaginatorModule, MatPaginator, MatSortModule, MatSort, MatSortHeader, MatButtonModule, MatButton, MatIconButton, MatButtonToggleModule, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatListModule, MatDivider, MatInputModule, MatInput, MatSelectModule, MatChipsModule, CircleProgressBlueComponent, TitleCasePipe, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-project-details", standalone: true, imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatTabsModule, MatMenuModule, MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, FormsModule, MatListModule, MatInputModule, MatSelectModule, MatChipsModule, CircleProgressBlueComponent], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col-12 col-md mb-3 mb-xl-0 py-1 order-1 order-lg-1">
                        <h3 class="mb-1">Projects: {{ project().name }}</h3>
                        <p class="small">
                            <span routerLink="/app/dashboard" class="me-2 text-theme style-none"> <mat-icon class="material-icons-outlined align-middle text-sm">house</mat-icon> Home</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            <span routerLink="/app/projects" class="me-2 text-theme style-none">Projects</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            Project Details
                        </p>
                    </div>

                    <div class="col-auto order-2 order-lg-5 mb-3 mb-xl-0">
                        <button matButton class="ms-1" (click)="openDialog()"><mat-icon class="material-icons-outlined">edit</mat-icon> Edit</button>
                        <button matButton="filled" class="ms-1" (click)="createTask()"><mat-icon class="material-icons-outlined">add</mat-icon> Task</button>
                    </div>
                </div>
            </mat-card>
        </div>
        <!-- page content -->
        <div class="container fade-in">
            @if (project()) {

            <!-- task summary -->
            <div class="row gx-3 gx-lg-4">
                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">$ 600.00</h1>
                            <p class="small text-secondary">Budget Remaining</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-2">
                                <div class="col-6">
                                    <p class="text-secondary">Total Budget:</p>
                                </div>
                                <div class="col">
                                    <h3>$ 1200.00</h3>
                                </div>
                            </div>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6">
                                    <p class="text-secondary">Progress:</p>
                                </div>
                                <div class="col">
                                    <h3>{{ project().progress }} %</h3>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">120.00</h1>
                            <p class="small text-secondary">Total Hours</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-2">
                                <div class="col-6">
                                    <p class="text-secondary">Billing:</p>
                                </div>
                                <div class="col">
                                    <h3>60.50</h3>
                                </div>
                            </div>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6">
                                    <p class="text-secondary">Learning:</p>
                                </div>
                                <div class="col">
                                    <h3>60.50</h3>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">$ 50.00</h1>
                            <p class="small text-secondary">Infrastructure Cost</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-2">
                                <div class="col-6">
                                    <p class="text-secondary">Expenses:</p>
                                </div>
                                <div class="col-auto">
                                    <h3>34.50</h3>
                                </div>
                            </div>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6">
                                    <p class="text-secondary">Utilities:</p>
                                </div>
                                <div class="col">
                                    <h3>15.50</h3>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <h1 class="mb-1">$ 150.00</h1>
                            <p class="small text-secondary">Pending Invoice</p>
                            <br />
                            <div class="row gx-3 align-items-center mb-2">
                                <div class="col-6">
                                    <p class="text-secondary">Next Billing:</p>
                                </div>
                                <div class="col">
                                    <h3>6 June 2025</h3>
                                </div>
                            </div>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-6">
                                    <p class="text-secondary">Method:</p>
                                </div>
                                <div class="col">
                                    <h3>Paypal</h3>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>

            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-lg-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <div mat-card-image class="w-100 height-200 coverimg mb-3">
                            <img class="d-none" [src]="project().image" alt="Project Image" />
                        </div>
                        <mat-card-content class="pb-0">
                            <h3 class="mb-1">{{ project().name }}</h3>
                            <p class="text-secondary">{{ project().company }}</p>
                            <br />
                            <h4 class="mb-3">Status Details</h4>
                            <div class="row gx-3 mb-3">
                                <div class="col-4"><p class="text-secondary">Status</p></div>
                                <div class="col-8">
                                    <span
                                        class="badge badge-light"
                                        [ngClass]="{
                                            'theme-green': project().status === 'Active',
                                            'theme-orange': project().status === 'On Hold',
                                            'theme-red': project().status === 'Completed'
                                        }">
                                        {{ project().status }}
                                    </span>
                                </div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-4"><p class="text-secondary">Priority</p></div>
                                <div class="col-8">
                                    <span
                                        class="badge"
                                        [ngClass]="{
                                            'theme-green': project().priority === 'Low',
                                            'theme-orange': project().priority === 'Medium',
                                            'theme-violet': project().priority === 'High'
                                        }">
                                        {{ project().priority }}
                                    </span>
                                </div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-4"><p class="text-secondary">Due Date</p></div>
                                <div class="col-8">
                                    <p>{{ project().dueDate }}</p>
                                </div>
                            </div>
                            <div class="row gx-3 mb-2">
                                <div class="col-4"><p class="text-secondary">Progress</p></div>
                                <div class="col-8">
                                    <p class="mb-1">{{ project().progress }} %</p>
                                    <!-- Progress Bar -->
                                    <mat-progress-bar class="mb-2" mode="determinate" value="{{ project().progress }}"></mat-progress-bar>
                                </div>
                            </div>
                            <br />

                            <!-- manager -->
                            <h4 class="mb-3">Manager</h4>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" [src]="project().managerimage" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">{{ project().manager }}</p>
                                    <p class="text-secondary small">ESEM, Agile, Level3</p>
                                </span>
                                <button matIconButton><mat-icon>repeat</mat-icon></button>
                            </div>
                            <br />

                            <!-- team -->
                            <h4 class="mb-3">Team</h4>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" src="assets/img/user-2.jpg" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">Ava Johnson</p>
                                    <p class="text-secondary small">Software Developer</p>
                                </span>
                                <button matIconButton class="text-theme theme-red"><mat-icon>remove</mat-icon></button>
                            </div>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" src="assets/img/user-3.jpg" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">Ben Smith</p>
                                    <p class="text-secondary small">Software Developer</p>
                                </span>
                                <button matIconButton class="text-theme theme-red"><mat-icon>remove</mat-icon></button>
                            </div>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" src="assets/img/user-4.jpg" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">Chloe Lee</p>
                                    <p class="text-secondary small">Backend Engineer</p>
                                </span>
                                <button matIconButton class="text-theme theme-red"><mat-icon>remove</mat-icon></button>
                            </div>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" src="assets/img/user-5.jpg" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">David Chen</p>
                                    <p class="text-secondary small">AI Caretaker</p>
                                </span>
                                <button matIconButton class="text-theme theme-red"><mat-icon>remove</mat-icon></button>
                            </div>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" src="assets/img/user-6.jpg" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">Ella Garcia</p>
                                    <p class="text-secondary small">UX Designer</p>
                                </span>
                                <button matIconButton class="text-theme theme-red"><mat-icon>remove</mat-icon></button>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-lg-8">
                    <!-- documents -->
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-auto mb-3">
                                    <h3 class="mb-1">Documents (12)</h3>
                                    <p class="text-secondary small">Today 10 Document uploaded</p>
                                </div>
                                <div class="col-auto mb-3"></div>
                            </div>

                            <swiper-container slides-per-view="auto" space-between="20px" autoplay="true" class="swiper">
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded">
                                            <img src="assets/img/document1.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded">
                                            <img src="assets/img/document2.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded">
                                            <img src="assets/img/document3.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded">
                                            <img src="assets/img/document4.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded">
                                            <img src="assets/img/document2.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded">
                                            <img src="assets/img/document3.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded">
                                            <img src="assets/img/document4.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                            </swiper-container>
                        </mat-card-content>
                    </mat-card>

                    <!-- comments activities -->
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="p-0">
                            <mat-tab-group animationDuration="300ms">
                                <!-- Comments Tab -->
                                <mat-tab>
                                    <ng-template mat-tab-label>
                                        <mat-icon class="me-2">comment</mat-icon>
                                        Comments <span class="badge badge-light ms-2">{{ comments().length }}</span>
                                    </ng-template>

                                    <div class="px-3">
                                        <!-- New Comment Input Area -->
                                        <mat-form-field appearance="outline" class="w-100 my-3 mt-lg-4">
                                            <mat-label>Add a comment...</mat-label>
                                            <input matInput rows="3" [(ngModel)]="newCommentText" (keyup.enter)="addComment()" />
                                            <button matIconButton matSuffix class="text-theme me-2" (click)="addComment()" [disabled]="!newCommentText() || newCommentText().trim().length === 0" aria-label="Send comment">
                                                <mat-icon>send</mat-icon>
                                            </button>
                                        </mat-form-field>

                                        <!-- Comment List -->
                                        @for (comment of sortedComments(); track comment.id) {

                                        <div class="row gx-3 mb-3">
                                            <div class="col-auto">
                                                <!-- Avatar placeholder -->
                                                <div class="avatar avatar-40 bg-light-theme text-theme fw-bold rounded-circle">
                                                    {{ comment.user.charAt(0) }}
                                                </div>
                                            </div>
                                            <div class="col">
                                                <p class="fw-bold mb-1">{{ comment.user }}</p>
                                                <p class="text-secondary small">{{ comment.timestamp | date : "MMM d, h:mm a" }}</p>

                                                <p>{{ comment.text }}</p>
                                            </div>
                                        </div>
                                        @if (!$last) {
                                        <mat-divider class="mb-3"></mat-divider>} } @if (comments().length === 0) {
                                        <p class="text-center text-secondary">No comments yet. Start a discussion!</p>
                                        }
                                    </div>
                                </mat-tab>

                                <!-- Activity Tab -->
                                <mat-tab>
                                    <ng-template mat-tab-label>
                                        <mat-icon class="me-2">history</mat-icon>
                                        Activity <span class="badge badge-light ms-2">{{ activityLog().length }}</span>
                                    </ng-template>

                                    <div class="px-3">
                                        <!-- Activity Timeline -->
                                        <ul class="activity">
                                            @for (activity of sortedActivityLog(); track activity.id) {
                                            <li>
                                                <div class="row gx-3">
                                                    <!-- icon -->
                                                    <div class="col-auto">
                                                        <div class="avatar avatar-40 rounded-circle bg-light-theme text-theme">
                                                            <mat-icon class="material-icons-outlined">{{ activity.icon }}</mat-icon>
                                                        </div>
                                                    </div>

                                                    <!-- Activity Content -->
                                                    <div class="col">
                                                        <p class="text-secondary small mb-1">
                                                            {{ activity.timestamp | date : "MMM d, y, h:mm a" }}
                                                        </p>
                                                        <p class="">
                                                            <span class="text-theme" routerLink="./">{{ activity.user }}</span>
                                                            {{ activity.action }}
                                                            <span class="text-theme" routerLink="./">{{ activity.target }}</span
                                                            >.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>

                                            }
                                        </ul>
                                    </div>
                                </mat-tab>
                            </mat-tab-group>
                        </mat-card-content>
                    </mat-card>

                    <!-- task summary -->
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-6 col-md-3 col-xl">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content class="pb-0">
                                    <div class="row gx-2 align-items-center">
                                        <div class="col-auto mb-3">
                                            <app-circle-progress-blue class="avatar avatar-50 rounded-circle"></app-circle-progress-blue>
                                        </div>
                                        <div class="col-12 col-xl mb-3">
                                            <h3 class="mb-1">495<span class="text-secondary">/690</span></h3>
                                            <p class="small text-secondary">Completed</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-6 col-md-3 col-xl">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content class="pb-0">
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto mb-3">
                                            <div class="avatar avatar-50 rounded bg-light-theme text-theme theme-red">
                                                <mat-icon>warning</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl mb-3">
                                            <h3 class="mb-0">5</h3>
                                            <p class="small text-secondary">High</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-6 col-md-3 col-xl">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content class="pb-0">
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto mb-3">
                                            <div class="avatar avatar-50 rounded bg-light-theme text-theme theme-orange">
                                                <mat-icon>flag</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl mb-3">
                                            <h3 class="mb-0">10</h3>
                                            <p class="small text-secondary">Medium</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                        <div class="col-6 col-md-3 col-xl">
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content class="pb-0">
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto mb-3">
                                            <div class="avatar avatar-50 rounded bg-light-theme text-theme theme-green">
                                                <mat-icon>flag</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col-12 col-xl mb-3">
                                            <h3 class="mb-0">4</h3>
                                            <p class="small text-secondary">Low</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </div>
                    </div>
                    <!-- task list -->
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3">
                                <div class="col mb-3">
                                    <h3 class="mb-1">Tasks</h3>
                                    <p class="text-secondary small">2 Task Added, 4 Task Resolved, 1 Ready to Test</p>
                                </div>
                                <div class="col-12 col-lg-5 col-xl-4 mb-3">
                                    <mat-form-field appearance="outline" class="w-100 inline-small">
                                        <input matInput (keyup)="applyFilter($event)" placeholder="E.g., Task, Manager, Status..." #input />
                                        <mat-icon matSuffix>search</mat-icon>
                                    </mat-form-field>
                                </div>
                            </div>

                            <table mat-table [dataSource]="dataSource" matSort class="bg-none responsive-table">
                                <ng-container matColumnDef="taskId">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>
                                    <td mat-cell *matCellDef="let task">
                                        <p class="text-theme" routerLink="/app/task-details">{{ task.taskId }}</p>
                                    </td>
                                </ng-container>

                                <ng-container matColumnDef="title">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>
                                    <td mat-cell *matCellDef="let task" (dblclick)="openEffortLogDialog(task)" class="hoverview">
                                        <p>
                                            <span class="text-truncated d-inline-block align-middle" style="max-width:200px">{{ task.title }}</span>
                                            <span class="material-symbols-outlined hoverview-icon text-sm align-middle d-inline-block text-theme ms-1"> touch_double </span>
                                        </p>
                                    </td>
                                </ng-container>

                                <ng-container matColumnDef="assignedTo">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Assigned To</th>
                                    <td mat-cell *matCellDef="let task">
                                        <div class="row gx-2 align-items-center flex-nowrap">
                                            <div class="col-auto">
                                                <div class="avatar avatar-20 rounded-circle coverimg">
                                                    <img [src]="task.assignedToimage" alt="{{ task.assignedTo }}" class="" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <p class="mb-0 text-truncated">{{ task.assignedTo }}</p>
                                            </div>
                                        </div>
                                    </td>
                                </ng-container>

                                <ng-container matColumnDef="status">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
                                    <td mat-cell *matCellDef="let task">
                                        <span
                                            class="badge"
                                            [ngClass]="{
                                                'theme-green': task.status === 'in-progress',
                                                'theme-orange': task.status === 'ready to test',
                                                'theme-sky': task.status === 'new',
                                                'theme-red': task.status === 'completed'
                                            }">
                                            {{ task.status | titlecase }}
                                        </span>
                                    </td>
                                </ng-container>

                                <ng-container matColumnDef="priority">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Priority</th>
                                    <td mat-cell *matCellDef="let task">
                                        <span
                                            class="badge badge-light text-theme"
                                            [ngClass]="{
                                                'theme-red': task.priority === 'High',
                                                'theme-orange': task.priority === 'Medium',
                                                'theme-green': task.priority === 'Low',
                                            }">
                                            <mat-icon class="text-sm" [class.high-priority]="task.priority === 'High'">
                                                {{ task.priority === "High" ? "warning" : "flag" }}
                                            </mat-icon>
                                            {{ task.priority | titlecase }}
                                        </span>
                                    </td>
                                </ng-container>
                                <!-- Actions Column -->
                                <ng-container matColumnDef="actions">
                                    <th mat-header-cell *matHeaderCellDef>Actions</th>
                                    <td mat-cell *matCellDef="let task">
                                        <button matIconButton [matMenuTriggerFor]="actionsMenu" aria-label="Actions" (click)="$event.stopPropagation()">
                                            <mat-icon class="material-icons-outlined">more_vert</mat-icon>
                                        </button>
                                        <mat-menu #actionsMenu="matMenu">
                                            <button mat-menu-item>
                                                <mat-icon class="material-icons-outlined">edit</mat-icon>
                                                <span>Edit</span>
                                            </button>
                                            <button mat-menu-item (click)="deleteProject()">
                                                <mat-icon class="material-icons-outlined">delete</mat-icon>
                                                <span>Delete</span>
                                            </button>
                                        </mat-menu>
                                    </td>
                                </ng-container>

                                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                                <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
                            </table>
                            <mat-paginator [pageSizeOptions]="[5, 10, 25]" aria-label="Select page of tasks" class="bg-none"></mat-paginator>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
            }
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectDetailsComponent, { className: "ProjectDetailsComponent", filePath: "src/app/pages/app/projects/project-details.component.ts", lineNumber: 683 });
})();
export {
  ProjectDetailsComponent
};
//# sourceMappingURL=project-details.component-Y4RXRLWW.js.map
