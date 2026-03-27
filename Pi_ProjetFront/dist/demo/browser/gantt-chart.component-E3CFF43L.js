import {
  DragDropModule
} from "./chunk-Z4B3QJHO.js";
import {
  CreateEditTaskComponent
} from "./chunk-2GQPUBKA.js";
import {
  MatPaginatorModule,
  MatSortModule
} from "./chunk-W2JGJKKS.js";
import {
  MatDialog
} from "./chunk-35BPSZ5W.js";
import {
  MatTableModule
} from "./chunk-WAVP7W2J.js";
import {
  MatTooltipModule
} from "./chunk-6LUZEZUF.js";
import {
  MatTooltip
} from "./chunk-O4BMA6W6.js";
import {
  register
} from "./chunk-S5VFQUTS.js";
import {
  MatButtonToggleModule
} from "./chunk-A5PEKAIR.js";
import {
  MatMenuModule
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
import {
  MatListModule
} from "./chunk-ALLV6QEF.js";
import "./chunk-CWBJY2AK.js";
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-ZWEWHYHK.js";
import {
  MatInputModule
} from "./chunk-45QHUHCH.js";
import "./chunk-7XFTNJ2Y.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-ZLA4QS3A.js";
import {
  RouterLink
} from "./chunk-DYOMXT5J.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import {
  MatFormField
} from "./chunk-XPQBAS5O.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
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
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵinterpolate2,
  ɵɵinterpolate3,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/task-manage/gantt-chart.component.ts
var _c0 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-red": a2 });
var _c1 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-violet": a2 });
var _c2 = (a0, a1, a2, a3, a4) => ({ "theme-green": a0, "theme-orange": a1, "theme-sky opacity-50": a2, "theme-violet": a3, "theme-cyan": a4 });
var _c3 = (a0, a1, a2, a3, a4) => ({ "theme-green": a0, "theme-orange": a1, "theme-sky": a2, "theme-violet": a3, "theme-cyan": a4 });
var _c4 = (a0, a1, a2) => ({ "theme-red": a0, "theme-green": a1, "theme-orange": a2 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.taskId;
function GanttChartComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    \u0275\u0275property("value", project_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(project_r1.projectName);
  }
}
function GanttChartComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 17)(1, "mat-card-content", 27)(2, "div", 28)(3, "div", 29)(4, "div", 30)(5, "div", 31);
    \u0275\u0275element(6, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 33)(8, "h3", 4);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 36);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 37)(17, "h4", 38);
    \u0275\u0275text(18, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 39)(20, "div", 40)(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 31)(24, "p")(25, "span", 41);
    \u0275\u0275text(26, "Due Date: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(28, "mat-progress-bar", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 37)(30, "h4", 38);
    \u0275\u0275text(31, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 43)(33, "span", 44);
    \u0275\u0275element(34, "img", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 46)(36, "p", 4);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 47);
    \u0275\u0275text(39, "ESEM, Agile, Level3");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image:url('", ctx_r1.selectedProject().image, "')"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedProject().projectName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedProject().company);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(18, _c0, ctx_r1.selectedProject().status === "Active", ctx_r1.selectedProject().status === "On Hold", ctx_r1.selectedProject().status === "Completed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedProject().status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(22, _c1, ctx_r1.selectedProject().priority === "Low", ctx_r1.selectedProject().priority === "Medium", ctx_r1.selectedProject().priority === "High"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedProject().priority, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedProject().progress, " %");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedProject().dueDate);
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275interpolate(ctx_r1.selectedProject().progress));
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image:url('", ctx_r1.selectedProject().managerImage, "')"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.selectedProject().managerImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedProject().manager);
  }
}
function GanttChartComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.getTimelineSegmentClass($index_r4, ctx_r1.timelineMarkers().length));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", h_r3, " hrs");
  }
}
function GanttChartComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "img", 50);
    \u0275\u0275elementStart(2, "h3", 4);
    \u0275\u0275text(3, "No data found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 41);
    \u0275\u0275text(5, "No tasks or total assigned hours are zero for this project.");
    \u0275\u0275elementEnd()();
  }
}
function GanttChartComponent_Conditional_48_For_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 65);
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275interpolate1("width: ", 100 * (task_r5.assignHoursNum - task_r5.loggedHoursNum) * -1 / ctx_r1.VISUALIZATION_CAP_HOURS, "%"));
    \u0275\u0275property("matTooltip", \u0275\u0275interpolate3("Logged ", task_r5.loggedHoursNum, "h exceed ", (task_r5.assignHoursNum - task_r5.loggedHoursNum) * -1, "h more from assigned ", task_r5.assignHoursNum, "h task"));
  }
}
function GanttChartComponent_Conditional_48_For_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 66);
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275interpolate1("width: ", task_r5.assignHoursNum - ctx_r1.VISUALIZATION_CAP_HOURS, "%"));
    \u0275\u0275property("matTooltip", \u0275\u0275interpolate2("Total effort (", task_r5.assignHoursNum.toFixed(1), "h) exceeds ", ctx_r1.VISUALIZATION_CAP_HOURS, "h view cap"));
  }
}
function GanttChartComponent_Conditional_48_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "h4", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 55)(5, "div", 31)(6, "span", 56);
    \u0275\u0275element(7, "img", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 40)(9, "p", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 57)(12, "div", 58);
    \u0275\u0275element(13, "mat-progress-bar", 59);
    \u0275\u0275conditionalCreate(14, GanttChartComponent_Conditional_48_For_1_Conditional_14_Template, 1, 7, "div", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 61);
    \u0275\u0275element(16, "mat-progress-bar", 62);
    \u0275\u0275conditionalCreate(17, GanttChartComponent_Conditional_48_For_1_Conditional_17_Template, 1, 6, "div", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 64)(19, "h4", 4);
    \u0275\u0275text(20);
    \u0275\u0275elementStart(21, "span", 41);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "span", 36);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 35);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "titlecase");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    const \u0275$index_164_r6 = ctx.$index;
    const \u0275$count_164_r7 = ctx.$count;
    \u0275\u0275classProp("border-bottom", !(\u0275$index_164_r6 === \u0275$count_164_r7 - 1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", task_r5.taskId, ". ", task_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image:url('", task_r5.assignedToImage, "')"));
    \u0275\u0275advance();
    \u0275\u0275property("src", task_r5.assignedToImage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(task_r5.assignedTo);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", \u0275\u0275interpolate(task_r5.loggedWidthPercentage))("matTooltip", \u0275\u0275interpolate1("Logged: ", task_r5.loggedHoursNum.toFixed(1), "h"))("ngClass", \u0275\u0275pureFunction5(30, _c2, task_r5.status === "completed", task_r5.status === "ready to test", task_r5.status === "new", task_r5.status === "in-progress", task_r5.status === "resolved"));
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r5.isRunOverCap ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275interpolate(task_r5.assignedWidthPercentage))("matTooltip", \u0275\u0275interpolate1("Assigned: ", task_r5.assignHoursNum.toFixed(1), "h"));
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r5.isOverCap ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", task_r5.loggedHours, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" /", task_r5.assignHours);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(36, _c3, task_r5.status === "completed", task_r5.status === "ready to test", task_r5.status === "new", task_r5.status === "in-progress", task_r5.status === "resolved"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 26, task_r5.status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(42, _c4, task_r5.priority === "High", task_r5.priority === "Low", task_r5.priority === "Medium"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 28, task_r5.priority), " ");
  }
}
function GanttChartComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, GanttChartComponent_Conditional_48_For_1_Template, 29, 46, "div", 51, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.processedTasks());
  }
}
register();
var projectMembers = [
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
var GanttChartComponent = class _GanttChartComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.VISUALIZATION_CAP_HOURS = 40;
    this.projectData = [
      {
        id: 1,
        image: "assets/img/product1.jpg",
        projectName: "Redesign User Dashboard",
        company: "Innovate Solutions",
        status: "Active",
        priority: "High",
        managerImage: "assets/img/user-10.jpg",
        manager: "Jane Doe",
        dueDate: "2025-11-30",
        progress: 60,
        description: "Complete overhaul of the main user interface.",
        budget: 15e3,
        tasksCompleted: 6,
        totalTasks: 10,
        teamSize: 5,
        tasks: [
          { taskId: 101, projectId: 1, title: "Create wireframes", status: "completed", type: "Design", assignedTo: "Jane Johnson", priority: "Low", assignHours: "12h", loggedHours: "11h", description: "", assignedToImage: "assets/img/user-1.jpg", effortLogs: [] },
          { taskId: 102, projectId: 1, title: "Setup component library", status: "in-progress", type: "Development", assignedTo: "John Williams", priority: "High", assignHours: "43h", loggedHours: "15h 30m", description: "", assignedToImage: "assets/img/user-3.jpg", effortLogs: [] },
          { taskId: 103, projectId: 1, title: "Define data models", status: "new", type: "Backend", assignedTo: "Alice Brown", priority: "Medium", assignHours: "20h", loggedHours: "0h", description: "", assignedToImage: "assets/img/user-4.jpg", effortLogs: [] },
          { taskId: 104, projectId: 1, title: "Fix modal overflow bug", status: "ready to test", type: "Bug", assignedTo: "Bob Davis", priority: "High", assignHours: "4h", loggedHours: "10h", description: "", assignedToImage: "assets/img/user-5.jpg", effortLogs: [] },
          { taskId: 105, projectId: 1, title: "Review design system guide", status: "new", type: "Design", assignedTo: "Daniel Wilson", priority: "Medium", assignHours: "8h", loggedHours: "0h", description: "", assignedToImage: "assets/img/user-6.jpg", effortLogs: [] }
        ]
      },
      {
        id: 2,
        image: "assets/img/product2.jpg",
        projectName: "API Microservice Migration",
        company: "Innovate Solutions",
        status: "On Hold",
        priority: "Low",
        managerImage: "assets/img/user-9.jpg",
        manager: "Mike Tech",
        dueDate: "2026-03-01",
        progress: 25,
        description: "Move monolithic API to serverless microservices.",
        budget: 45e3,
        tasksCompleted: 1,
        totalTasks: 4,
        teamSize: 3,
        tasks: [
          { taskId: 201, projectId: 2, title: "Audit current API endpoints", status: "completed", type: "Backend", assignedTo: "Mike Williams", priority: "High", assignHours: "16h", loggedHours: "15h", description: "", assignedToImage: "assets/img/user-3.jpg", effortLogs: [] },
          { taskId: 202, projectId: 2, title: "Setup AWS Lambda infra", status: "new", type: "Backend", assignedTo: "Alice Brown", priority: "High", assignHours: "24h", loggedHours: "0h", description: "", assignedToImage: "assets/img/user-8.jpg", effortLogs: [] },
          { taskId: 203, projectId: 2, title: "Refactor Auth module", status: "in-progress", type: "Development", assignedTo: "Sara Davis", priority: "Medium", assignHours: "30h", loggedHours: "15h", description: "", assignedToImage: "assets/img/user-6.jpg", effortLogs: [] }
        ]
      }
    ];
    this.projects = signal(this.projectData, ...ngDevMode ? [{ debugName: "projects" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedProjectId = signal(this.projectData[0].id, ...ngDevMode ? [{ debugName: "selectedProjectId" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedProject = computed(() => this.projects().find((p) => p.id === this.selectedProjectId()), ...ngDevMode ? [{ debugName: "selectedProject" }] : (
      /* istanbul ignore next */
      []
    ));
    this.totalProjectHours = computed(() => {
      const project = this.selectedProject();
      if (!project)
        return 0;
      return project.tasks.reduce((sum, task) => sum + this.parseHoursStringToNumber(task.assignHours), 0);
    }, ...ngDevMode ? [{ debugName: "totalProjectHours" }] : (
      /* istanbul ignore next */
      []
    ));
    this.processedTasks = computed(() => {
      const project = this.selectedProject();
      const maxHours = this.VISUALIZATION_CAP_HOURS;
      if (!project || this.totalProjectHours() === 0)
        return [];
      return project.tasks.map((task) => {
        const assignHoursNum = this.parseHoursStringToNumber(task.assignHours);
        const loggedHoursNum = this.parseHoursStringToNumber(task.loggedHours);
        const scaledHours = Math.min(assignHoursNum, maxHours);
        const assignedWidthPercentage = scaledHours / maxHours * 100;
        const loggedWidthPercentage = assignHoursNum > 0 ? loggedHoursNum / maxHours * 100 : 0;
        return __spreadProps(__spreadValues({}, task), {
          assignHoursNum,
          loggedHoursNum,
          assignedWidthPercentage,
          loggedWidthPercentage: Math.min(100, loggedWidthPercentage),
          // Cap at 100%
          isOverCap: assignHoursNum > maxHours,
          isRunOverCap: loggedHoursNum > assignHoursNum
        });
      });
    }, ...ngDevMode ? [{ debugName: "processedTasks" }] : (
      /* istanbul ignore next */
      []
    ));
    this.timelineMarkers = computed(() => {
      const cap = this.VISUALIZATION_CAP_HOURS;
      return [0, Math.floor(cap * 0.25), Math.floor(cap * 0.5), Math.floor(cap * 0.75), cap];
    }, ...ngDevMode ? [{ debugName: "timelineMarkers" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  parseHoursStringToNumber(hoursString) {
    if (!hoursString)
      return 0;
    const match = hoursString.toLowerCase().match(/(\d+)\s*h(?:\s*(\d+)\s*m)?/);
    if (!match) {
      const numberPart = parseFloat(hoursString);
      return isNaN(numberPart) ? 0 : numberPart;
    }
    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    return hours + minutes / 60;
  }
  // Methods for Template Interaction
  selectProject(event) {
    const target = event.target;
    this.selectedProjectId.set(parseInt(target.value));
  }
  // Gets the Tailwind classes for timeline header segments.
  getTimelineSegmentClass(index, length) {
    const isLast = index === length - 1;
    const isFirst = index === 0;
    const segmentWidth = isFirst ? "d-none border-start" : "text-end";
    return `${segmentWidth} `;
  }
  createTask() {
    const project = this.selectedProject();
    if (!project)
      return;
    this.dialog.open(CreateEditTaskComponent, {
      width: "500px",
      maxWidth: "500px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: {
        projectName: project.projectName,
        projectId: project.id,
        members: projectMembers
      }
    });
  }
  static {
    this.\u0275fac = function GanttChartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GanttChartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GanttChartComponent, selectors: [["app-gantt-chart"]], decls: 49, vars: 4, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col-12", "col-md", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small"], ["routerLink", "/app/dashboard", 1, "me-2", "text-theme", "style-none"], [1, "material-icons-outlined", "align-middle", "text-sm"], [1, "material-icons-outlined", "align-middle", "text-sm", "me-2"], [1, "col-8", "col-md-6", "col-lg-4", "col-xl-3"], ["appearance", "outline", 1, "w-100", "inline-small", "mb-3", "mb-xl-0"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "col-auto", "mb-3", "mb-xl-0"], ["matButton", "filled", 1, "ms-1", 3, "click"], [1, "material-icons-outlined"], [1, "container", "fade-in"], [1, "mb-3", "mb-lg-4"], [1, "row", "border-bottom"], [1, "col-6", "col-lg-3", "order-1", "order-lg-1"], [1, "col-12", "col-lg-6", "order-3", "order-lg-2"], [1, "mb-1", "text-center"], [1, "text-secondary", "small", "text-center", "mb-3"], [1, "row", "border-top"], [1, "col", "py-1", "border-end", "border-start", 3, "class"], [1, "col-6", "col-lg-3", "order-2", "order-lg-3", "text-end"], [1, "text-center", "mb-4"], [1, "pb-0"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-lg-12", "col-xl-6"], [1, "row", "gx-3"], [1, "col-auto"], [1, "avatar", "avatar-80", "coverimg", "rounded", "mb-3"], [1, "col", "mb-3"], [1, "text-secondary", "mb-2"], [1, "badge", "badge-light", "me-1", 3, "ngClass"], [1, "badge", "me-1", 3, "ngClass"], [1, "col-12", "col-md-6", "col-xl-3"], [1, "mb-3"], [1, "row", "gx-3", "mb-3"], [1, "col"], [1, "text-secondary"], ["mode", "determinate", 1, "mb-3", 3, "value"], [1, "mb-3", "d-flex", "align-items-center"], [1, "avatar", "avatar-40", "coverimg", "rounded-circle", "align-middle", "me-2"], ["alt", "Team Image", 1, "d-none", 3, "src"], [1, "align-middle", "d-inline-block", "flex-grow-1"], [1, "text-secondary", "small"], [1, "col", "py-1", "border-end", "border-start"], [1, "text-truncated"], ["src", "assets/img/noproduct.png", "alt", "", 1, "width-300", "mt-4", "mt-lg-5"], [1, "row", "align-items-center", 3, "border-bottom"], [1, "row", "align-items-center"], [1, "col-6", "col-lg-3", "order-1", "order-lg-1", "py-3"], [1, "text-truncated", "mb-1"], [1, "row", "gx-2", "align-items-center"], [1, "avatar", "avatar-20", "coverimg", "rounded-circle", "align-middle"], [1, "col-12", "col-lg-6", "order-3", "order-lg-2", "px-lg-0", "pb-3", "py-lg-3"], [1, "position-relative", "mb-1"], ["mode", "determinate", 1, "height-15", 3, "ngClass", "value", "matTooltip"], [1, "h-100", "position-absolute", "top-0", "end-0", "bg-theme", "theme-red", 3, "style", "matTooltip"], [1, "position-relative", "opacity-50", "mb-0"], ["mode", "determinate", 1, "height-15", "theme-sky", 3, "value", "matTooltip"], [1, "h-100", "position-absolute", "top-0", "start-0", "bg-theme", "theme-orange", 3, "style", "matTooltip"], [1, "col-6", "col-lg-3", "order-2", "order-lg-3", "py-3", "text-end"], [1, "h-100", "position-absolute", "top-0", "end-0", "bg-theme", "theme-red", 3, "matTooltip"], [1, "h-100", "position-absolute", "top-0", "start-0", "bg-theme", "theme-orange", 3, "matTooltip"]], template: function GanttChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "Task Progress: Kanban");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5)(7, "span", 6)(8, "mat-icon", 7);
        \u0275\u0275text(9, "house");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-icon", 8);
        \u0275\u0275text(12, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Kanban Chart ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "mat-form-field", 10)(16, "mat-select", 11);
        \u0275\u0275listener("ngModelChange", function GanttChartComponent_Template_mat_select_ngModelChange_16_listener($event) {
          return ctx.selectedProjectId.set($event);
        });
        \u0275\u0275repeaterCreate(17, GanttChartComponent_For_18_Template, 2, 2, "mat-option", 12, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 13)(20, "button", 14);
        \u0275\u0275listener("click", function GanttChartComponent_Template_button_click_20_listener() {
          return ctx.createTask();
        });
        \u0275\u0275elementStart(21, "mat-icon", 15);
        \u0275\u0275text(22, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Task");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(24, "div", 16);
        \u0275\u0275conditionalCreate(25, GanttChartComponent_Conditional_25_Template, 40, 26, "mat-card", 17);
        \u0275\u0275elementStart(26, "mat-card", 17)(27, "mat-card-content")(28, "div", 18)(29, "div", 19)(30, "h4");
        \u0275\u0275text(31, "Task ");
        \u0275\u0275element(32, "br");
        \u0275\u0275text(33, "Assigned to");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 20)(35, "h4", 21);
        \u0275\u0275text(36, "Progress Timeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "p", 22);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 23);
        \u0275\u0275repeaterCreate(40, GanttChartComponent_For_41_Template, 3, 3, "div", 24, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 25)(43, "h4");
        \u0275\u0275text(44, "Logged/Assigned");
        \u0275\u0275element(45, "br");
        \u0275\u0275text(46, "Efforts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(47, GanttChartComponent_Conditional_47_Template, 6, 0, "div", 26)(48, GanttChartComponent_Conditional_48_Template, 2, 0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngModel", ctx.selectedProjectId());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.projects());
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.selectedProject() ? 25 : -1);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1("(Max ", ctx.VISUALIZATION_CAP_HOURS, "h View)");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.timelineMarkers());
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.processedTasks().length === 0 ? 47 : 48);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink, MatCardModule, MatCard, MatCardContent, MatIconModule, MatIcon, MatMenuModule, MatTooltipModule, MatTooltip, MatProgressBarModule, MatProgressBar, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatButton, MatButtonToggleModule, MatFormFieldModule, MatFormField, FormsModule, NgControlStatus, NgModel, MatListModule, MatInputModule, MatSelectModule, MatSelect, MatOption, MatChipsModule, DragDropModule, TitleCasePipe], styles: ["\n\nmat-progress-bar.height-15[_ngcontent-%COMP%] {\n  --mat-progress-bar-track-height: 15px;\n  --mat-progress-bar-active-indicator-height: 15px;\n}\n/*# sourceMappingURL=gantt-chart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GanttChartComponent, [{
    type: Component,
    args: [{ selector: "app-gantt-chart", standalone: true, imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatMenuModule, MatTooltipModule, MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, FormsModule, MatListModule, MatInputModule, MatSelectModule, MatChipsModule, DragDropModule], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col-12 col-md mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Task Progress: Kanban</h3>
                        <p class="small">
                            <span routerLink="/app/dashboard" class="me-2 text-theme style-none"> <mat-icon class="material-icons-outlined align-middle text-sm">house</mat-icon> Home</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            Kanban Chart
                        </p>
                    </div>

                    <div class="col-8 col-md-6 col-lg-4 col-xl-3">
                        <mat-form-field appearance="outline" class="w-100 inline-small mb-3 mb-xl-0">
                            <mat-select [ngModel]="selectedProjectId()" (ngModelChange)="selectedProjectId.set($event)">
                                @for (project of projects(); track project.id) {
                                <mat-option [value]="project.id">{{ project.projectName }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="col-auto mb-3 mb-xl-0">
                        <button matButton="filled" (click)="createTask()" class="ms-1"><mat-icon class="material-icons-outlined">add</mat-icon> Task</button>
                    </div>
                </div>
            </mat-card>
        </div>
        <!-- page content -->
        <div class="container fade-in">
            @if (selectedProject()){
            <mat-card class="mb-3 mb-lg-4">
                <mat-card-content class="pb-0">
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-12 col-lg-12 col-xl-6">
                            <div class="row gx-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-80 coverimg rounded mb-3" style="background-image:url('{{ selectedProject()!.image }}')">
                                        <!-- <img class="d-none" [src]="selectedProject()!.image" alt="Project Image" /> -->
                                    </div>
                                </div>
                                <div class="col mb-3">
                                    <h3 class="mb-1">{{ selectedProject()!.projectName }}</h3>
                                    <p class="text-secondary mb-2">{{ selectedProject()!.company }}</p>
                                    <span
                                        class="badge badge-light me-1"
                                        [ngClass]="{
                                            'theme-green': selectedProject()!.status === 'Active',
                                            'theme-orange': selectedProject()!.status === 'On Hold',
                                            'theme-red': selectedProject()!.status === 'Completed'
                                        }">
                                        {{ selectedProject()!.status }}
                                    </span>
                                    <span
                                        class="badge me-1"
                                        [ngClass]="{
                                            'theme-green': selectedProject()!.priority === 'Low',
                                            'theme-orange': selectedProject()!.priority === 'Medium',
                                            'theme-violet': selectedProject()!.priority === 'High'
                                        }">
                                        {{ selectedProject()!.priority }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-3">
                            <h4 class="mb-3">Progress</h4>
                            <div class="row gx-3 mb-3">
                                <div class="col">
                                    <p>{{ selectedProject()!.progress }} %</p>
                                </div>
                                <div class="col-auto">
                                    <p><span class="text-secondary">Due Date: </span> {{ selectedProject()!.dueDate }}</p>
                                </div>
                            </div>

                            <!-- Progress Bar -->
                            <mat-progress-bar class="mb-3" mode="determinate" value="{{ selectedProject()!.progress }}"></mat-progress-bar>
                        </div>
                        <div class="col-12 col-md-6 col-xl-3">
                            <!-- manager -->
                            <h4 class="mb-3">Manager</h4>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2" style="background-image:url('{{ selectedProject()!.managerImage }}')">
                                    <img class="d-none" [src]="selectedProject()!.managerImage" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">{{ selectedProject()!.manager }}</p>
                                    <p class="text-secondary small">ESEM, Agile, Level3</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>
            }

            <!-- Gantt -->

            <mat-card class="mb-3 mb-lg-4">
                <mat-card-content>
                    <div class="row border-bottom ">
                        <div class="col-6 col-lg-3 order-1 order-lg-1">
                            <h4>Task <br />Assigned to</h4>
                        </div>
                        <div class="col-12 col-lg-6 order-3 order-lg-2">
                            <h4 class="mb-1 text-center">Progress Timeline</h4>
                            <p class="text-secondary small text-center mb-3">(Max {{ VISUALIZATION_CAP_HOURS }}h View)</p>
                            <div class="row border-top">
                                @for (h of timelineMarkers(); track $index) {
                                <div class="col py-1 border-end border-start" [class]="getTimelineSegmentClass($index, timelineMarkers().length)">
                                    <span class=" text-truncated">{{ h }} hrs</span>
                                </div>
                                }
                            </div>
                        </div>
                        <div class="col-6 col-lg-3 order-2 order-lg-3 text-end">
                            <h4>Logged/Assigned<br />Efforts</h4>
                        </div>
                    </div>

                    <!-- Gantt Grid Body (Tasks) -->
                    @if (processedTasks().length === 0) {
                    <div class="text-center mb-4">
                        <img src="assets/img/noproduct.png" alt="" class="width-300 mt-4 mt-lg-5" />
                        <h3 class="mb-1">No data found</h3>
                        <p class="text-secondary">No tasks or total assigned hours are zero for this project.</p>
                    </div>
                    } @else { @for (task of processedTasks(); track task.taskId) {
                    <div class="row align-items-center " [class.border-bottom]="!$last">
                        <!--Task Title & Assignee -->
                        <div class="col-6 col-lg-3 order-1 order-lg-1 py-3">
                            <h4 class="text-truncated mb-1">{{ task.taskId }}. {{ task.title }}</h4>
                            <div class="row gx-2 align-items-center">
                                <div class="col-auto">
                                    <span class="avatar avatar-20 coverimg rounded-circle align-middle" style="background-image:url('{{ task.assignedToImage }}')">
                                        <img class="d-none" [src]="task.assignedToImage" alt="Team Image" />
                                    </span>
                                </div>
                                <div class="col">
                                    <p class="text-secondary">{{ task.assignedTo }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Chart Area (Max 40h View) -->
                        <div class="col-12 col-lg-6 order-3 order-lg-2 px-lg-0 pb-3 py-lg-3">
                            <div class="position-relative mb-1">
                                <mat-progress-bar
                                    mode="determinate"
                                    class="height-15"
                                    [ngClass]="{
                                        'theme-green': task.status === 'completed',
                                        'theme-orange': task.status === 'ready to test',
                                        'theme-sky opacity-50': task.status === 'new',
                                        'theme-violet': task.status === 'in-progress',
                                        'theme-cyan': task.status === 'resolved'
                                    }"
                                    value="{{ task.loggedWidthPercentage }}"
                                    matTooltip="Logged: {{ task.loggedHoursNum.toFixed(1) }}h"></mat-progress-bar>
                                @if (task.isRunOverCap) {
                                <div class="h-100 position-absolute top-0 end-0 bg-theme theme-red" style="width: {{ (100 * ((task.assignHoursNum - task.loggedHoursNum) * -1)) / VISUALIZATION_CAP_HOURS }}%" matTooltip="Logged {{ task.loggedHoursNum }}h exceed {{ (task.assignHoursNum - task.loggedHoursNum) * -1 }}h more from assigned {{ task.assignHoursNum }}h task"></div>
                                }
                            </div>
                            <div class="position-relative opacity-50 mb-0">
                                <mat-progress-bar mode="determinate" class="height-15 theme-sky" value="{{ task.assignedWidthPercentage }}" matTooltip="Assigned: {{ task.assignHoursNum.toFixed(1) }}h"></mat-progress-bar>

                                @if (task.isOverCap) {
                                <div class="h-100 position-absolute top-0 start-0 bg-theme theme-orange" style="width: {{ task.assignHoursNum - VISUALIZATION_CAP_HOURS }}%" matTooltip="Total effort ({{ task.assignHoursNum.toFixed(1) }}h) exceeds {{ VISUALIZATION_CAP_HOURS }}h view cap"></div>
                                }
                            </div>
                        </div>

                        <!-- Total Time Allocation / Status -->
                        <div class="col-6 col-lg-3 order-2 order-lg-3 py-3 text-end">
                            <h4 class="mb-1">
                                {{ task.loggedHours }} <span class="text-secondary"> /{{ task.assignHours }}</span>
                            </h4>
                            <span
                                class="badge me-1"
                                [ngClass]="{
                                    'theme-green': task.status === 'completed',
                                    'theme-orange': task.status === 'ready to test',
                                    'theme-sky': task.status === 'new',
                                    'theme-violet': task.status === 'in-progress',
                                    'theme-cyan': task.status === 'resolved'
                                }">
                                {{ task.status | titlecase }}
                            </span>
                            <span
                                class="badge badge-light me-1"
                                [ngClass]="{
                                    'theme-red': task.priority === 'High',
                                    'theme-green': task.priority === 'Low',
                                    'theme-orange': task.priority === 'Medium',
                                }">
                                {{ task.priority | titlecase }}
                            </span>
                        </div>
                    </div>
                    } }
                </mat-card-content>
            </mat-card>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA], styles: ["/* angular:styles/component:css;54d13a50ebd7d6bc9c59fd19bf6b189dd5471615fa09cef487248e22b03b7d67;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/pages/app/task-manage/gantt-chart.component.ts */\nmat-progress-bar.height-15 {\n  --mat-progress-bar-track-height: 15px;\n  --mat-progress-bar-active-indicator-height: 15px;\n}\n/*# sourceMappingURL=gantt-chart.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GanttChartComponent, { className: "GanttChartComponent", filePath: "src/app/pages/app/task-manage/gantt-chart.component.ts", lineNumber: 306 });
})();
export {
  GanttChartComponent
};
//# sourceMappingURL=gantt-chart.component-E3CFF43L.js.map
