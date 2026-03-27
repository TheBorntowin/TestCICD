import {
  InventoryBannerChartComponent
} from "./chunk-CWHF5BTI.js";
import {
  CircleProgressBlueComponent
} from "./chunk-NEQRFG5O.js";
import "./chunk-PZSKZJEJ.js";
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
  MatButtonToggleModule
} from "./chunk-A5PEKAIR.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-SP2SPZAY.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-MWLO4FO4.js";
import {
  MatOption
} from "./chunk-D63GK34V.js";
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
import "./chunk-CWBJY2AK.js";
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
  MatCardHeader,
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
  MatSuffix
} from "./chunk-XPQBAS5O.js";
import {
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  CommonModule,
  MatIcon,
  MatIconModule,
  NgClass,
  TitleCasePipe
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ViewChild,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
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
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/task-manage/time-tracking.component.ts
var _c0 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-red": a2 });
var _c1 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-violet": a2 });
var _c2 = () => [5, 10, 25];
var _c3 = (a0, a1, a2, a3, a4) => ({ "theme-orange": a0, "theme-cyan": a1, "theme-sky": a2, "theme-violet": a3, "theme-green": a4 });
var _c4 = (a0, a1, a2) => ({ "theme-red": a0, "theme-orange": a1, "theme-green": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function TimeTrackingComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    \u0275\u0275property("value", project_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(project_r1.name);
  }
}
function TimeTrackingComponent_Conditional_29_th_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 82);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function TimeTrackingComponent_Conditional_29_td_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83)(1, "p", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(task_r4.taskId);
  }
}
function TimeTrackingComponent_Conditional_29_th_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 82);
    \u0275\u0275text(1, "Title");
    \u0275\u0275elementEnd();
  }
}
function TimeTrackingComponent_Conditional_29_td_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 85);
    \u0275\u0275listener("dblclick", function TimeTrackingComponent_Conditional_29_td_116_Template_td_dblclick_0_listener() {
      const task_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEffortLogDialog(task_r6));
    });
    \u0275\u0275elementStart(1, "p")(2, "span", 86);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 87);
    \u0275\u0275text(5, " touch_double ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r6.title);
  }
}
function TimeTrackingComponent_Conditional_29_th_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 82);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function TimeTrackingComponent_Conditional_29_td_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83)(1, "span", 88);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(4, _c3, task_r7.status === "in-progress", task_r7.status === "ready to test", task_r7.status === "new", task_r7.status === "resolved", task_r7.status === "completed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, task_r7.status), " ");
  }
}
function TimeTrackingComponent_Conditional_29_th_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 82);
    \u0275\u0275text(1, "Priority");
    \u0275\u0275elementEnd();
  }
}
function TimeTrackingComponent_Conditional_29_td_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83)(1, "span", 89)(2, "mat-icon", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c4, task_r8.priority === "High", task_r8.priority === "Medium", task_r8.priority === "Low"));
    \u0275\u0275advance();
    \u0275\u0275classProp("high-priority", task_r8.priority === "High");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r8.priority === "High" ? "warning" : "flag", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, task_r8.priority), " ");
  }
}
function TimeTrackingComponent_Conditional_29_th_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 82);
    \u0275\u0275text(1, "Effort");
    \u0275\u0275elementEnd();
  }
}
function TimeTrackingComponent_Conditional_29_td_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83)(1, "p", 91)(2, "span", 92);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 93);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r9.loggedHours);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" / ", task_r9.assignHours, " hrs");
  }
}
function TimeTrackingComponent_Conditional_29_th_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 94);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function TimeTrackingComponent_Conditional_29_td_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 83)(1, "button", 95);
    \u0275\u0275listener("click", function TimeTrackingComponent_Conditional_29_td_128_Template_button_click_1_listener() {
      const task_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEffortLogDialog(task_r11));
    });
    \u0275\u0275elementStart(2, "span", 96);
    \u0275\u0275text(3, " more_time ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 97);
    \u0275\u0275listener("click", function TimeTrackingComponent_Conditional_29_td_128_Template_button_click_4_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(5, "mat-icon", 17);
    \u0275\u0275text(6, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-menu", null, 1)(9, "button", 98)(10, "mat-icon", 17);
    \u0275\u0275text(11, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 99);
    \u0275\u0275listener("click", function TimeTrackingComponent_Conditional_29_td_128_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteProject());
    });
    \u0275\u0275elementStart(15, "mat-icon", 17);
    \u0275\u0275text(16, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const actionsMenu_r12 = \u0275\u0275reference(8);
    \u0275\u0275advance(4);
    \u0275\u0275property("matMenuTriggerFor", actionsMenu_r12);
  }
}
function TimeTrackingComponent_Conditional_29_tr_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 100);
  }
}
function TimeTrackingComponent_Conditional_29_tr_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 101);
  }
}
function TimeTrackingComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 20)(1, "mat-card-content", 21)(2, "div", 22)(3, "div", 23)(4, "div", 24)(5, "div", 25)(6, "div", 26);
    \u0275\u0275element(7, "img", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 28)(9, "h3", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 30);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 30);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 31)(18, "h4", 32);
    \u0275\u0275text(19, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 33)(21, "div", 34)(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 25)(25, "p")(26, "span", 35);
    \u0275\u0275text(27, "Due Date: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(29, "mat-progress-bar", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 31)(31, "h4", 32);
    \u0275\u0275text(32, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 37)(34, "span", 38);
    \u0275\u0275element(35, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 40)(37, "p", 6);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 41);
    \u0275\u0275text(40, "ESEM, Agile, Level3");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(41, "div", 22)(42, "div", 42)(43, "mat-card", 20)(44, "mat-card-content", 21)(45, "div", 43)(46, "div", 44);
    \u0275\u0275element(47, "app-circle-progress-blue", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 46)(49, "h3", 6);
    \u0275\u0275text(50, "5");
    \u0275\u0275elementStart(51, "span", 35);
    \u0275\u0275text(52, "/15");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "p", 47);
    \u0275\u0275text(54, "Completed");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(55, "div", 42)(56, "mat-card", 20)(57, "mat-card-content", 21)(58, "div", 4)(59, "div", 44)(60, "div", 48)(61, "mat-icon");
    \u0275\u0275text(62, "warning");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 46)(64, "h3", 49);
    \u0275\u0275text(65, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "p", 47);
    \u0275\u0275text(67, "High");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(68, "div", 42)(69, "mat-card", 20)(70, "mat-card-content", 21)(71, "div", 4)(72, "div", 44)(73, "div", 50)(74, "mat-icon");
    \u0275\u0275text(75, "flag");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 46)(77, "h3", 49);
    \u0275\u0275text(78, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "p", 47);
    \u0275\u0275text(80, "Medium");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(81, "div", 42)(82, "mat-card", 20)(83, "mat-card-content", 21)(84, "div", 4)(85, "div", 44)(86, "div", 51)(87, "mat-icon");
    \u0275\u0275text(88, "flag");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "div", 46)(90, "h3", 49);
    \u0275\u0275text(91, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "p", 47);
    \u0275\u0275text(93, "Low");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(94, "div", 22)(95, "div", 52)(96, "mat-card", 20)(97, "mat-card-content")(98, "div", 24)(99, "div", 28)(100, "h3", 6);
    \u0275\u0275text(101, "My Tasks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "p", 41);
    \u0275\u0275text(103, "2 Task Added, 4 Task Resolved, 1 Ready to Test");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 53)(105, "mat-form-field", 54)(106, "input", 55, 0);
    \u0275\u0275listener("keyup", function TimeTrackingComponent_Conditional_29_Template_input_keyup_106_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyFilter($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "mat-icon", 56);
    \u0275\u0275text(109, "search");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(110, "table", 57);
    \u0275\u0275elementContainerStart(111, 58);
    \u0275\u0275template(112, TimeTrackingComponent_Conditional_29_th_112_Template, 2, 0, "th", 59)(113, TimeTrackingComponent_Conditional_29_td_113_Template, 3, 1, "td", 60);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(114, 61);
    \u0275\u0275template(115, TimeTrackingComponent_Conditional_29_th_115_Template, 2, 0, "th", 59)(116, TimeTrackingComponent_Conditional_29_td_116_Template, 6, 1, "td", 62);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(117, 63);
    \u0275\u0275template(118, TimeTrackingComponent_Conditional_29_th_118_Template, 2, 0, "th", 59)(119, TimeTrackingComponent_Conditional_29_td_119_Template, 4, 10, "td", 60);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(120, 64);
    \u0275\u0275template(121, TimeTrackingComponent_Conditional_29_th_121_Template, 2, 0, "th", 59)(122, TimeTrackingComponent_Conditional_29_td_122_Template, 6, 11, "td", 60);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(123, 65);
    \u0275\u0275template(124, TimeTrackingComponent_Conditional_29_th_124_Template, 2, 0, "th", 59)(125, TimeTrackingComponent_Conditional_29_td_125_Template, 6, 2, "td", 60);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(126, 66);
    \u0275\u0275template(127, TimeTrackingComponent_Conditional_29_th_127_Template, 2, 0, "th", 67)(128, TimeTrackingComponent_Conditional_29_td_128_Template, 19, 1, "td", 60);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(129, TimeTrackingComponent_Conditional_29_tr_129_Template, 1, 0, "tr", 68)(130, TimeTrackingComponent_Conditional_29_tr_130_Template, 1, 0, "tr", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275element(131, "mat-paginator", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(132, "div", 71)(133, "mat-card", 20)(134, "mat-card-header")(135, "div", 72)(136, "div", 4)(137, "div", 73)(138, "div", 74)(139, "mat-icon", 17);
    \u0275\u0275text(140, "bar_chart");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(141, "div", 75)(142, "h3");
    \u0275\u0275text(143, "Effort Utilization");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(144, "mat-card-content", 21);
    \u0275\u0275element(145, "app-inventory-banner-chart", 76);
    \u0275\u0275elementStart(146, "div", 4)(147, "div", 77)(148, "h3", 6);
    \u0275\u0275text(149, "42.50 ");
    \u0275\u0275elementStart(150, "small");
    \u0275\u0275text(151, "hrs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(152, "p", 41);
    \u0275\u0275element(153, "span", 78);
    \u0275\u0275text(154, " Billable");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "div", 77)(156, "h3", 6);
    \u0275\u0275text(157, "18.00 ");
    \u0275\u0275elementStart(158, "small");
    \u0275\u0275text(159, "hrs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(160, "p", 41);
    \u0275\u0275element(161, "span", 79);
    \u0275\u0275text(162, " Non-Billable");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(163, "div", 77)(164, "h3", 6);
    \u0275\u0275text(165, "14.00 ");
    \u0275\u0275elementStart(166, "small");
    \u0275\u0275text(167, "hrs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "p", 41);
    \u0275\u0275element(169, "span", 80);
    \u0275\u0275text(170, " Learning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "div", 77)(172, "h3", 6);
    \u0275\u0275text(173, "6.50 ");
    \u0275\u0275elementStart(174, "small");
    \u0275\u0275text(175, "hrs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "p", 41);
    \u0275\u0275element(177, "span", 81);
    \u0275\u0275text(178, " Idle Time");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx_r2.project().image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.project().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.project().company);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(17, _c0, ctx_r2.project().status === "Active", ctx_r2.project().status === "On Hold", ctx_r2.project().status === "Completed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.project().status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(21, _c1, ctx_r2.project().priority === "Low", ctx_r2.project().priority === "Medium", ctx_r2.project().priority === "High"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.project().priority, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.project().progress, " %");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.project().dueDate);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275interpolate(ctx_r2.project().progress));
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r2.project().managerimage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.project().manager);
    \u0275\u0275advance(72);
    \u0275\u0275property("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(25, _c2));
  }
}
register();
var TimeTrackingComponent = class _TimeTrackingComponent {
  constructor() {
    this.lastLoggedDuration = signal(null, ...ngDevMode ? [{ debugName: "lastLoggedDuration" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dialog = inject(MatDialog);
    this.projectList = [
      { id: "1", name: "Mobile App Feature X Development", totalHours: "1200" },
      { id: "2", name: "Angular Budget Review", totalHours: "1450" },
      { id: "3", name: "HR System Integration", totalHours: "865" }
    ];
    this.selectedProjectControl = new FormControl(null);
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
    this.displayedColumns = ["taskId", "title", "status", "priority", "assignedHours", "actions"];
  }
  ngOnInit() {
    if (this.projectList.length > 0) {
      this.selectedProjectControl.setValue(this.projectList[0].id);
    }
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
  createTask() {
    this.dialog.open(CreateEditTaskComponent, {
      width: "500px",
      maxWidth: "500px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: {
        projectName: this.project().name,
        projectId: this.project().id,
        members: this.projectMembers
      }
    });
  }
  static {
    this.\u0275fac = function TimeTrackingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TimeTrackingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeTrackingComponent, selectors: [["app-time-tracking"]], viewQuery: function TimeTrackingComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5)(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 30, vars: 2, consts: [["input", ""], ["actionsMenu", "matMenu"], [1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col-12", "col-md", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small"], ["routerLink", "/app/dashboard", 1, "me-2", "text-theme", "style-none"], [1, "material-icons-outlined", "align-middle", "text-sm"], [1, "material-icons-outlined", "align-middle", "text-sm", "me-2"], [1, "col-12", "col-md-4", "col-xl-3", "mb-3", "mb-xl-0"], ["appearance", "outline", 1, "inline-small", "w-100"], ["placeholder", "Select Project", 3, "formControl"], [3, "value"], [1, "col-auto", "order-2", "mb-3", "mb-xl-0"], ["matButton", "", 1, "ms-1", 3, "click"], [1, "material-icons-outlined"], ["matButton", "filled", 1, "ms-1", 3, "click"], [1, "container", "fade-in"], [1, "mb-3", "mb-lg-4"], [1, "pb-0"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-lg-12", "col-xl-6"], [1, "row", "gx-3"], [1, "col-auto"], [1, "avatar", "avatar-80", "coverimg", "rounded", "mb-3"], ["alt", "Project Image", 1, "d-none", 3, "src"], [1, "col", "mb-3"], [1, "text-secondary", "mb-2"], [1, "badge", "badge-light", "me-1", 3, "ngClass"], [1, "col-12", "col-md-6", "col-xl-3"], [1, "mb-3"], [1, "row", "gx-3", "mb-3"], [1, "col"], [1, "text-secondary"], ["mode", "determinate", 1, "mb-3", 3, "value"], [1, "mb-3", "d-flex", "align-items-center"], [1, "avatar", "avatar-40", "coverimg", "rounded-circle", "align-middle", "me-2"], ["alt", "Team Image", 1, "d-none", 3, "src"], [1, "align-middle", "d-inline-block", "flex-grow-1"], [1, "text-secondary", "small"], [1, "col-6", "col-md-3", "col-xl"], [1, "row", "gx-2", "align-items-center"], [1, "col-auto", "mb-3"], [1, "avatar", "avatar-50", "rounded-circle"], [1, "col-12", "col-xl", "mb-3"], [1, "small", "text-secondary"], [1, "avatar", "avatar-50", "rounded", "bg-light-theme", "text-theme", "theme-red"], [1, "mb-0"], [1, "avatar", "avatar-50", "rounded", "bg-light-theme", "text-theme", "theme-orange"], [1, "avatar", "avatar-50", "rounded", "bg-light-theme", "text-theme", "theme-green"], [1, "col-12", "col-lg-9"], [1, "col-12", "col-lg-5", "col-xl-4", "mb-3"], ["appearance", "outline", 1, "w-100", "inline-small"], ["matInput", "", "placeholder", "E.g., Task, Manager, Status...", 3, "keyup"], ["matSuffix", ""], ["mat-table", "", "matSort", "", 1, "bg-none", "responsive-table", 3, "dataSource"], ["matColumnDef", "taskId"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-cell", "", "class", "hoverview", 3, "dblclick", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "priority"], ["matColumnDef", "assignedHours"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of tasks", 1, "bg-none", 3, "pageSizeOptions"], [1, "col-12", "col-lg-3"], [1, "w-100"], [1, "col-auto", "mb-3", "mb-lg-4"], [1, "avatar", "avatar-40", "text-theme", "rounded"], [1, "col", "mb-3", "mb-lg-4"], [1, "height-240", "w-100", "d-block", "mb-3", "mb-lg-4"], [1, "col-6", "mb-3"], [1, "avatar", "avatar-10", "rounded", "bg-theme", "theme-blue", "align-middle"], [1, "avatar", "avatar-10", "rounded", "bg-theme", "theme-sky", "align-middle"], [1, "avatar", "avatar-10", "rounded", "bg-light-theme", "theme-chartreuse", "align-middle"], [1, "avatar", "avatar-10", "rounded", "align-middle", "bg-theme", "theme-red"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["routerLink", "/app/task-details", 1, "fw-bold", "text-theme"], ["mat-cell", "", 1, "hoverview", 3, "dblclick"], [1, "text-truncated", "d-inline-block", "align-middle", 2, "max-width", "200px"], [1, "material-symbols-outlined", "hoverview-icon", "text-sm", "align-middle", "d-inline-block", "text-theme", "ms-1"], [1, "badge", 3, "ngClass"], [1, "badge", "badge-light", "text-theme", 3, "ngClass"], [1, "text-sm"], [1, "text-truncated", 2, "max-width", "200px"], [1, "fw-bold"], [1, "fw-bold", "text-secondary"], ["mat-header-cell", ""], ["matIconButton", "", 3, "click"], [1, "material-symbols-outlined"], ["matIconButton", "", "aria-label", "Actions", 3, "click", "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function TimeTrackingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "mat-card", 3)(2, "div", 4)(3, "div", 5)(4, "h3", 6);
        \u0275\u0275text(5, "Time Tracking");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 7)(7, "span", 8)(8, "mat-icon", 9);
        \u0275\u0275text(9, "house");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-icon", 10);
        \u0275\u0275text(12, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Time Tracking ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 11)(15, "mat-form-field", 12)(16, "mat-select", 13);
        \u0275\u0275repeaterCreate(17, TimeTrackingComponent_For_18_Template, 2, 2, "mat-option", 14, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 15)(20, "button", 16);
        \u0275\u0275listener("click", function TimeTrackingComponent_Template_button_click_20_listener() {
          return ctx.openDialog();
        });
        \u0275\u0275elementStart(21, "mat-icon", 17);
        \u0275\u0275text(22, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 18);
        \u0275\u0275listener("click", function TimeTrackingComponent_Template_button_click_24_listener() {
          return ctx.createTask();
        });
        \u0275\u0275elementStart(25, "mat-icon", 17);
        \u0275\u0275text(26, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " Task");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 19);
        \u0275\u0275conditionalCreate(29, TimeTrackingComponent_Conditional_29_Template, 179, 26);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("formControl", ctx.selectedProjectControl);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.projectList);
        \u0275\u0275advance(12);
        \u0275\u0275conditional(ctx.project() ? 29 : -1);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatProgressBarModule, MatProgressBar, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatPaginatorModule, MatPaginator, MatSortModule, MatSort, MatSortHeader, MatButtonModule, MatButton, MatIconButton, MatButtonToggleModule, MatFormFieldModule, MatFormField, MatSuffix, FormsModule, NgControlStatus, ReactiveFormsModule, FormControlDirective, MatListModule, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatChipsModule, CircleProgressBlueComponent, InventoryBannerChartComponent, TitleCasePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeTrackingComponent, [{
    type: Component,
    args: [{ selector: "app-time-tracking", standalone: true, imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatListModule, MatInputModule, MatSelectModule, MatChipsModule, CircleProgressBlueComponent, InventoryBannerChartComponent], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col-12 col-md mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Time Tracking</h3>
                        <p class="small">
                            <span routerLink="/app/dashboard" class="me-2 text-theme style-none"> <mat-icon class="material-icons-outlined align-middle text-sm">house</mat-icon> Home</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            Time Tracking
                        </p>
                    </div>
                    <div class="col-12 col-md-4 col-xl-3 mb-3 mb-xl-0 ">
                        <mat-form-field class="inline-small w-100" appearance="outline">
                            <mat-select placeholder="Select Project" [formControl]="selectedProjectControl">
                                @for (project of projectList; track project.id) {
                                <mat-option [value]="project.id">{{ project.name }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="col-auto order-2 mb-3 mb-xl-0">
                        <button matButton class="ms-1" (click)="openDialog()"><mat-icon class="material-icons-outlined">edit</mat-icon> Edit</button>
                        <button matButton="filled" class="ms-1" (click)="createTask()"><mat-icon class="material-icons-outlined">add</mat-icon> Task</button>
                    </div>
                </div>
            </mat-card>
        </div>
        <!-- page content -->
        <div class="container fade-in">
            @if (project()) {

            <mat-card class="mb-3 mb-lg-4">
                <mat-card-content class="pb-0">
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-12 col-lg-12 col-xl-6">
                            <div class="row gx-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-80 coverimg rounded mb-3">
                                        <img class="d-none" [src]="project().image" alt="Project Image" />
                                    </div>
                                </div>
                                <div class="col mb-3">
                                    <h3 class="mb-1">{{ project().name }}</h3>
                                    <p class="text-secondary mb-2">{{ project().company }}</p>
                                    <span
                                        class="badge badge-light me-1"
                                        [ngClass]="{
                                            'theme-green': project().status === 'Active',
                                            'theme-orange': project().status === 'On Hold',
                                            'theme-red': project().status === 'Completed'
                                        }">
                                        {{ project().status }}
                                    </span>
                                    <span
                                        class="badge badge-light me-1"
                                        [ngClass]="{
                                            'theme-green': project().priority === 'Low',
                                            'theme-orange': project().priority === 'Medium',
                                            'theme-violet': project().priority === 'High'
                                        }">
                                        {{ project().priority }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-3">
                            <h4 class="mb-3">Progress</h4>
                            <div class="row gx-3 mb-3">
                                <div class="col">
                                    <p>{{ project().progress }} %</p>
                                </div>
                                <div class="col-auto">
                                    <p><span class="text-secondary">Due Date: </span> {{ project().dueDate }}</p>
                                </div>
                            </div>

                            <!-- Progress Bar -->
                            <mat-progress-bar class="mb-3" mode="determinate" value="{{ project().progress }}"></mat-progress-bar>
                        </div>
                        <div class="col-12 col-md-6 col-xl-3">
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
                            </div>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>
            <div class="row gx-3 gx-lg-4">
                <div class="col-6 col-md-3 col-xl">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <div class="row gx-2 align-items-center">
                                <div class="col-auto mb-3">
                                    <app-circle-progress-blue class="avatar avatar-50 rounded-circle"></app-circle-progress-blue>
                                </div>
                                <div class="col-12 col-xl mb-3">
                                    <h3 class="mb-1">5<span class="text-secondary">/15</span></h3>
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
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-lg-9">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3">
                                <div class="col mb-3">
                                    <h3 class="mb-1">My Tasks</h3>
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
                                        <p class="fw-bold text-theme" routerLink="/app/task-details">{{ task.taskId }}</p>
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

                                <ng-container matColumnDef="status">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
                                    <td mat-cell *matCellDef="let task">
                                        <span
                                            class="badge"
                                            [ngClass]="{
                                                'theme-orange': task.status === 'in-progress',
                                                'theme-cyan': task.status === 'ready to test',
                                                'theme-sky': task.status === 'new',
                                                'theme-violet': task.status === 'resolved',
                                                'theme-green': task.status === 'completed'
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

                                <ng-container matColumnDef="assignedHours">
                                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Effort</th>
                                    <td mat-cell *matCellDef="let task">
                                        <p class="text-truncated" style="max-width:200px">
                                            <span class="fw-bold">{{ task.loggedHours }}</span> <small class="fw-bold text-secondary"> / {{ task.assignHours }} hrs</small>
                                        </p>
                                    </td>
                                </ng-container>

                                <!-- Actions Column -->
                                <ng-container matColumnDef="actions">
                                    <th mat-header-cell *matHeaderCellDef>Actions</th>
                                    <td mat-cell *matCellDef="let task">
                                        <!--   <mat-form-field appearance="outline" class="inline-small width-200">
                                            <input matInput placeholder="Time Log" />
                                            <mat-icon matPrefix class="material-icons-outlined">alarm</mat-icon>
                                            <button matIconButton matSuffix>
                                                <mat-icon class="material-icons-outlined">alarm</mat-icon>
                                            </button>
                                        </mat-form-field> -->
                                        <button matIconButton (click)="openEffortLogDialog(task)">
                                            <span class="material-symbols-outlined"> more_time </span>
                                        </button>
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
                <div class="col-12 col-lg-3">
                    <!-- sales chart -->
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center">
                                    <div class="col-auto mb-3 mb-lg-4">
                                        <div class="avatar avatar-40 text-theme rounded">
                                            <mat-icon class="material-icons-outlined">bar_chart</mat-icon>
                                        </div>
                                    </div>
                                    <div class="col mb-3 mb-lg-4">
                                        <h3>Effort Utilization</h3>
                                    </div>
                                </div>
                            </div>
                        </mat-card-header>
                        <mat-card-content class="pb-0">
                            <app-inventory-banner-chart class="height-240 w-100 d-block mb-3 mb-lg-4"></app-inventory-banner-chart>
                            <div class="row gx-3 align-items-center">
                                <div class="col-6 mb-3">
                                    <h3 class="mb-1">42.50 <small>hrs</small></h3>
                                    <p class="text-secondary small"><span class="avatar avatar-10 rounded bg-theme theme-blue align-middle"></span> Billable</p>
                                </div>
                                <div class="col-6 mb-3">
                                    <h3 class="mb-1">18.00 <small>hrs</small></h3>
                                    <p class="text-secondary small"><span class="avatar avatar-10 rounded bg-theme theme-sky align-middle"></span> Non-Billable</p>
                                </div>
                                <div class="col-6 mb-3">
                                    <h3 class="mb-1">14.00 <small>hrs</small></h3>
                                    <p class="text-secondary small"><span class="avatar avatar-10 rounded bg-light-theme theme-chartreuse align-middle"></span> Learning</p>
                                </div>
                                <div class="col-6 mb-3">
                                    <h3 class="mb-1">6.50 <small>hrs</small></h3>
                                    <p class="text-secondary small"><span class="avatar avatar-10 rounded align-middle bg-theme theme-red"></span> Idle Time</p>
                                </div>
                            </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeTrackingComponent, { className: "TimeTrackingComponent", filePath: "src/app/pages/app/task-manage/time-tracking.component.ts", lineNumber: 406 });
})();
export {
  TimeTrackingComponent
};
//# sourceMappingURL=time-tracking.component-BMTV6LYV.js.map
