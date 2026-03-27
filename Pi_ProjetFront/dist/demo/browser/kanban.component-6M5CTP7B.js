import {
  CdkDrag,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
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
import "./chunk-6LUZEZUF.js";
import "./chunk-O4BMA6W6.js";
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
  NgClass
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/task-manage/kanban.component.ts
var _c0 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-red": a2 });
var _c1 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-violet": a2 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.title;
var _forTrack2 = ($index, $item) => $item.taskId;
function KanbanComponent_For_18_Template(rf, ctx) {
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
function KanbanComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 17)(1, "mat-card-content", 21)(2, "div", 18)(3, "div", 22)(4, "div", 23)(5, "div", 24);
    \u0275\u0275element(6, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 26)(8, "h3", 4);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 27);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 28);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 30)(17, "h4", 31);
    \u0275\u0275text(18, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 32)(20, "div", 33)(21, "p");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 24)(24, "p")(25, "span", 34);
    \u0275\u0275text(26, "Due Date: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(28, "mat-progress-bar", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 30)(30, "h4", 31);
    \u0275\u0275text(31, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 36)(33, "span", 37);
    \u0275\u0275element(34, "img", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 39)(36, "p", 4);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 40);
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
function KanbanComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-card", 41)(2, "mat-card-content", 21)(3, "div", 23)(4, "div", 42)(5, "div", 43)(6, "mat-icon", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 44)(9, "p", 45);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const summary_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", summary_r3.colorClass);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(summary_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(summary_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(summary_r3.value);
  }
}
function KanbanComponent_Conditional_29_For_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "mat-card", 55)(2, "mat-card-content")(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 56)(6, "mat-icon", 57);
    \u0275\u0275text(7, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 31)(11, "mat-icon", 57);
    \u0275\u0275text(12, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 23)(16, "div", 33)(17, "p", 56)(18, "span", 58);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 24)(21, "p", 56)(22, "span", 59);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 60)(25, "mat-icon", 15);
    \u0275\u0275text(26, "drag_handle");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(task_r5.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", task_r5.loggedHours, " / ", task_r5.assignHours);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(task_r5.assignedTo);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.getTypeBadgeClass(task_r5.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r5.type, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getPriorityClass(task_r5.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r5.priority, " ");
  }
}
function KanbanComponent_Conditional_29_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 54)(1, "div");
    \u0275\u0275text(2, "Drop here");
    \u0275\u0275elementEnd()();
  }
}
function KanbanComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "mat-card", 48)(2, "h4", 49)(3, "mat-icon", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 52);
    \u0275\u0275listener("cdkDropListDropped", function KanbanComponent_Conditional_29_For_2_Template_div_cdkDropListDropped_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.drop($event));
    });
    \u0275\u0275repeaterCreate(9, KanbanComponent_Conditional_29_For_2_For_10_Template, 27, 8, "div", 53, _forTrack2);
    \u0275\u0275conditionalCreate(11, KanbanComponent_Conditional_29_For_2_Conditional_11_Template, 3, 0, "mat-card", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", column_r6.titleClass);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(column_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", column_r6.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTasksForStatus(column_r6.id).length);
    \u0275\u0275advance();
    \u0275\u0275property("id", column_r6.id)("cdkDropListData", ctx_r1.getTasksForStatus(column_r6.id))("cdkDropListConnectedTo", ctx_r1.columnIds());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getTasksForStatus(column_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.getTasksForStatus(column_r6.id).length === 0 ? 11 : -1);
  }
}
function KanbanComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, KanbanComponent_Conditional_29_For_2_Template, 12, 8, "div", 47, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.kanbanColumns);
  }
}
function KanbanComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "h3", 61);
    \u0275\u0275text(2, "Please select a project to view the dashboard.");
    \u0275\u0275elementEnd()();
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
var KanbanComponent = class _KanbanComponent {
  constructor() {
    this.dialog = inject(MatDialog);
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
          { taskId: 101, projectId: 1, title: "Create wireframes", status: "completed", type: "Design", assignedTo: "Jane Johnson", priority: "High", assignHours: "12h", loggedHours: "12h", description: "", assignedToImage: "", effortLogs: [] },
          { taskId: 102, projectId: 1, title: "Setup component library", status: "in-progress", type: "Development", assignedTo: "John Williams", priority: "High", assignHours: "40h", loggedHours: "15h 30m", description: "", assignedToImage: "", effortLogs: [] },
          { taskId: 103, projectId: 1, title: "Define data models", status: "new", type: "Backend", assignedTo: "Alice Brown", priority: "Medium", assignHours: "20h", loggedHours: "0h", description: "", assignedToImage: "", effortLogs: [] },
          { taskId: 104, projectId: 1, title: "Fix modal overflow bug", status: "ready to test", type: "Bug", assignedTo: "Bob Davis", priority: "High", assignHours: "4h", loggedHours: "4h", description: "", assignedToImage: "", effortLogs: [] },
          { taskId: 105, projectId: 1, title: "Review design system guide", status: "new", type: "Design", assignedTo: "Daniel Wilson", priority: "Medium", assignHours: "8h", loggedHours: "0h", description: "", assignedToImage: "", effortLogs: [] }
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
          { taskId: 201, projectId: 2, title: "Audit current API endpoints", status: "completed", type: "Backend", assignedTo: "Mike", priority: "High", assignHours: "16h", loggedHours: "16h", description: "", assignedToImage: "", effortLogs: [] },
          { taskId: 202, projectId: 2, title: "Setup AWS Lambda infra", status: "new", type: "Backend", assignedTo: "Mike", priority: "High", assignHours: "24h", loggedHours: "0h", description: "", assignedToImage: "", effortLogs: [] },
          { taskId: 203, projectId: 2, title: "Refactor Auth module", status: "in-progress", type: "Development", assignedTo: "Sara", priority: "Medium", assignHours: "30h", loggedHours: "5h", description: "", assignedToImage: "", effortLogs: [] }
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
    this.columnIds = computed(() => this.kanbanColumns.map((c) => c.id), ...ngDevMode ? [{ debugName: "columnIds" }] : (
      /* istanbul ignore next */
      []
    ));
    this.kanbanColumns = [
      { id: "new", title: "To Do", icon: "assignment", titleClass: "theme-violet" },
      { id: "in-progress", title: "In Progress", icon: "autorenew", titleClass: "theme-blue" },
      { id: "ready to test", title: "Ready to Test", icon: "verified", titleClass: "theme-red" },
      { id: "completed", title: "Completed", icon: "done_all", titleClass: "theme-green" }
    ];
    this.summaryMetrics = computed(() => {
      const project = this.selectedProject();
      if (!project)
        return [];
      const totalTasks = project.tasks.length;
      const totalEffort = this.calculateEffortSum(project.tasks, "assignHours");
      const effortInvested = this.calculateEffortSum(project.tasks, "loggedHours");
      const totalBudget = project.budget.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 });
      return [
        { title: "Total Budget", value: totalBudget, icon: "account_balance_wallet", colorClass: "theme-blue" },
        { title: "Total Tasks", value: totalTasks, icon: "checklist", colorClass: "theme-green" },
        { title: "Total Effort", value: totalEffort, icon: "timer", colorClass: "theme-orange" },
        { title: "Effort Invested", value: effortInvested, icon: "trending_up", colorClass: "theme-red" }
      ];
    }, ...ngDevMode ? [{ debugName: "summaryMetrics" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  // helper functions
  calculateEffortSum(tasks, field) {
    const totalMinutes = tasks.reduce((sum, task) => {
      const value = task[field];
      const match = value.match(/(\d+)\s*h\s*(\d*)\s*m?|(\d+)/i);
      if (match) {
        let hours2 = 0;
        let minutes2 = 0;
        if (match[1]) {
          hours2 = parseInt(match[1], 10);
          minutes2 = parseInt(match[2] || "0", 10);
        } else if (match[3]) {
          hours2 = parseInt(match[3], 10);
        }
        return sum + hours2 * 60 + minutes2;
      }
      return sum;
    }, 0);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
  }
  getTasksForStatus(status) {
    const project = this.selectedProject();
    if (!project)
      return [];
    return project.tasks.filter((t) => t.status === status);
  }
  getPriorityClass(priority) {
    switch (priority) {
      case "High":
        return "theme-red";
      case "Medium":
        return "theme-orange";
      case "Low":
        return "theme-green";
      default:
        return "theme-yellow";
    }
  }
  getTypeBadgeClass(type) {
    switch (type) {
      case "Development":
        return "theme-blue";
      case "Design":
        return "theme-red";
      case "Backend":
        return "theme-violet";
      case "Bug":
      case "Design Bug":
        return "theme-orange";
      default:
        return "theme-blue";
    }
  }
  // drag and drop
  drop(event) {
    const previousStatus = event.previousContainer.id;
    const newStatus = event.container.id;
    const currentProject = this.selectedProject();
    if (!currentProject)
      return;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      const taskToMove = event.container.data[event.currentIndex];
      this.projects.update((projects) => {
        const projectIndex = projects.findIndex((p) => p.id === currentProject.id);
        if (projectIndex !== -1) {
          const updatedProjects = [...projects];
          const updatedProject = __spreadValues({}, updatedProjects[projectIndex]);
          const updatedTasks = [...updatedProject.tasks];
          const taskIndexInProject = updatedTasks.findIndex((t) => t.taskId === taskToMove.taskId);
          if (taskIndexInProject !== -1) {
            updatedTasks[taskIndexInProject] = __spreadProps(__spreadValues({}, updatedTasks[taskIndexInProject]), {
              status: newStatus
            });
            updatedProject.tasks = updatedTasks;
            updatedProjects[projectIndex] = updatedProject;
            return updatedProjects;
          }
        }
        return projects;
      });
    }
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
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
    this.\u0275fac = function KanbanComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _KanbanComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KanbanComponent, selectors: [["app-kanban"]], decls: 31, vars: 3, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col-12", "col-md", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small"], ["routerLink", "/app/dashboard", 1, "me-2", "text-theme", "style-none"], [1, "material-icons-outlined", "align-middle", "text-sm"], [1, "material-icons-outlined", "align-middle", "text-sm", "me-2"], [1, "col-8", "col-md-6", "col-lg-4", "col-xl-3", "mb-3", "mb-xl-0"], ["appearance", "outline", 1, "w-100", "inline-small"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "col-auto", "mb-3", "mb-xl-0"], ["matButton", "filled", 1, "ms-1", 3, "click"], [1, "material-icons-outlined"], [1, "container", "fade-in"], [1, "mb-3", "mb-lg-4"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-6", "col-md-6", "col-lg-3"], [1, "text-center", "p-12", "bg-white", "rounded-xl", "shadow-lg"], [1, "pb-0"], [1, "col-12", "col-lg-12", "col-xl-6"], [1, "row", "gx-3"], [1, "col-auto"], [1, "avatar", "avatar-80", "coverimg", "rounded", "mb-3"], [1, "col", "mb-3"], [1, "text-secondary", "mb-2"], [1, "badge", "badge-light", "me-1", 3, "ngClass"], [1, "badge", "me-1", 3, "ngClass"], [1, "col-12", "col-md-6", "col-xl-3"], [1, "mb-3"], [1, "row", "gx-3", "mb-3"], [1, "col"], [1, "text-secondary"], ["mode", "determinate", 1, "mb-3", 3, "value"], [1, "mb-3", "d-flex", "align-items-center"], [1, "avatar", "avatar-40", "coverimg", "rounded-circle", "align-middle", "me-2"], ["alt", "Team Image", 1, "d-none", 3, "src"], [1, "align-middle", "d-inline-block", "flex-grow-1"], [1, "text-secondary", "small"], [1, "mb-3", "mb-lg-4", 3, "ngClass"], [1, "col-12", "col-md-auto", "col-lg-12", "col-xl-auto", "mb-3"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded"], [1, "col-12", "col-md", "col-lg-12", "col-xl", "mb-3"], [1, "text-secondary", "small", "mb-1"], [1, ""], [1, "col-12", "col-sm-6", "col-lg-3", 3, "ngClass"], [1, "mb-3", "mb-lg-4", "p-2", "pb-0", "bg-light-theme", "shadow-none"], [1, "text-theme", "p-3", "mb-2"], [1, "align-middle", "material-icons-outlined", "me-2"], [1, "badge", "badge-light", "align-middle", "ms-2"], ["cdkDropList", "", 1, "", 3, "cdkDropListDropped", "id", "cdkDropListData", "cdkDropListConnectedTo"], ["cdkDrag", ""], [1, "height-100", "w-100", "d-flex", "align-items-center", "justify-content-center", "text-center", "text-theme", "opacity-50", "mb-2"], [1, "mb-2", 2, "cursor", "grab"], [1, "mb-2"], [1, "material-icons-outlined", "text-sm", "me-2", "text-theme"], [1, "badge", "badge-light", 3, "ngClass"], [1, "badge", "ms-1", 3, "ngClass"], [1, "text-secondary", "text-center", "position-absolute", "bottom-0", "start-0", "end-0", "opacity-50"], [1, "text-xl", "font-medium", "text-gray-600"]], template: function KanbanComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("ngModelChange", function KanbanComponent_Template_mat_select_ngModelChange_16_listener($event) {
          return ctx.selectedProjectId.set($event);
        });
        \u0275\u0275repeaterCreate(17, KanbanComponent_For_18_Template, 2, 2, "mat-option", 12, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 13)(20, "button", 14);
        \u0275\u0275listener("click", function KanbanComponent_Template_button_click_20_listener() {
          return ctx.createTask();
        });
        \u0275\u0275elementStart(21, "mat-icon", 15);
        \u0275\u0275text(22, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Task");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(24, "div", 16);
        \u0275\u0275conditionalCreate(25, KanbanComponent_Conditional_25_Template, 40, 26, "mat-card", 17);
        \u0275\u0275elementStart(26, "div", 18);
        \u0275\u0275repeaterCreate(27, KanbanComponent_For_28_Template, 13, 4, "div", 19, _forTrack1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(29, KanbanComponent_Conditional_29_Template, 3, 0, "div", 18)(30, KanbanComponent_Conditional_30_Template, 3, 0, "div", 20);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("ngModel", ctx.selectedProjectId());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.projects());
        \u0275\u0275advance(8);
        \u0275\u0275conditional(ctx.selectedProject() ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.summaryMetrics());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selectedProject() ? 29 : 30);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink, MatCardModule, MatCard, MatCardContent, MatIconModule, MatIcon, MatMenuModule, MatProgressBarModule, MatProgressBar, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatButton, MatButtonToggleModule, MatFormFieldModule, MatFormField, FormsModule, NgControlStatus, NgModel, MatListModule, MatInputModule, MatSelectModule, MatSelect, MatOption, MatChipsModule, DragDropModule, CdkDropList, CdkDrag], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KanbanComponent, [{
    type: Component,
    args: [{ selector: "app-kanban", standalone: true, imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, FormsModule, MatListModule, MatInputModule, MatSelectModule, MatChipsModule, DragDropModule], template: `
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

                    <div class="col-8 col-md-6 col-lg-4 col-xl-3 mb-3 mb-xl-0">
                        <mat-form-field appearance="outline" class="w-100 inline-small">
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

            <!-- Summary cards -->
            <div class="row gx-3 gx-lg-4">
                @for (summary of summaryMetrics(); track summary.title) {
                <div class="col-6 col-md-6 col-lg-3">
                    <mat-card class="mb-3 mb-lg-4" [ngClass]="summary.colorClass">
                        <mat-card-content class="pb-0">
                            <div class="row gx-3">
                                <div class="col-12 col-md-auto col-lg-12 col-xl-auto mb-3">
                                    <div class="avatar avatar-50 bg-light-theme text-theme rounded">
                                        <mat-icon class="material-icons-outlined">{{ summary.icon }}</mat-icon>
                                    </div>
                                </div>
                                <div class="col-12 col-md col-lg-12 col-xl mb-3">
                                    <p class="text-secondary small mb-1">{{ summary.title }}</p>
                                    <h2 class="">{{ summary.value }}</h2>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                }
            </div>

            <!-- Kanban wrapper -->
            @if (selectedProject()) {
            <div class="row gx-3 gx-lg-4">
                <!-- Kanban columns -->
                @for (column of kanbanColumns; track column.id) {
                <div class="col-12 col-sm-6 col-lg-3" [ngClass]="column.titleClass">
                    <mat-card class="mb-3 mb-lg-4 p-2 pb-0 bg-light-theme shadow-none">
                        <h4 class="text-theme p-3 mb-2">
                            <mat-icon class="align-middle material-icons-outlined me-2">{{ column.icon }}</mat-icon>
                            {{ column.title }} <span class="badge badge-light align-middle ms-2">{{ getTasksForStatus(column.id).length }}</span>
                        </h4>

                        <!-- CDK Drop list wrap -->
                        <div cdkDropList [id]="column.id" [cdkDropListData]="getTasksForStatus(column.id)" [cdkDropListConnectedTo]="columnIds()" (cdkDropListDropped)="drop($event)" class="">
                            <!-- task card -->
                            @for (task of getTasksForStatus(column.id); track task.taskId) {
                            <div cdkDrag>
                                <mat-card class="mb-2" style="cursor:grab">
                                    <mat-card-content>
                                        <p>{{ task.title }}</p>

                                        <p class="mb-2">
                                            <mat-icon class="material-icons-outlined text-sm me-2 text-theme">schedule</mat-icon>
                                            <span>{{ task.loggedHours }} / {{ task.assignHours }}</span>
                                        </p>
                                        <p class="mb-3">
                                            <mat-icon class="material-icons-outlined text-sm me-2 text-theme">person</mat-icon>
                                            <span>{{ task.assignedTo }}</span>
                                        </p>
                                        <div class="row gx-3">
                                            <div class="col">
                                                <p class="mb-2">
                                                    <span class="badge badge-light" [ngClass]="getTypeBadgeClass(task.type)">
                                                        {{ task.type }}
                                                    </span>
                                                </p>
                                            </div>
                                            <div class="col-auto">
                                                <p class="mb-2">
                                                    <span class="badge ms-1" [ngClass]="getPriorityClass(task.priority)">
                                                        {{ task.priority }}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <!-- drag handle -->
                                        <div class="text-secondary text-center position-absolute bottom-0 start-0 end-0 opacity-50">
                                            <mat-icon class="material-icons-outlined">drag_handle</mat-icon>
                                        </div>
                                    </mat-card-content>
                                </mat-card>
                            </div>
                            }

                            <!-- Placeholder for Empty List -->
                            @if (getTasksForStatus(column.id).length === 0) {
                            <mat-card class="height-100 w-100 d-flex align-items-center justify-content-center text-center text-theme opacity-50 mb-2">
                                <div>Drop here</div>
                            </mat-card>
                            }
                        </div>
                    </mat-card>
                </div>
                }
            </div>
            } @else {
            <div class="text-center p-12 bg-white rounded-xl shadow-lg">
                <h3 class="text-xl font-medium text-gray-600">Please select a project to view the dashboard.</h3>
            </div>
            }
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KanbanComponent, { className: "KanbanComponent", filePath: "src/app/pages/app/task-manage/kanban.component.ts", lineNumber: 285 });
})();
export {
  KanbanComponent
};
//# sourceMappingURL=kanban.component-6M5CTP7B.js.map
