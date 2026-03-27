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
  MatTab,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-TCWW663Y.js";
import {
  MatButtonToggleModule
} from "./chunk-A5PEKAIR.js";
import {
  MatMenuModule
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
  MatListItem,
  MatListItemIcon,
  MatListModule,
  MatNavList
} from "./chunk-ALLV6QEF.js";
import {
  MatDivider
} from "./chunk-CWBJY2AK.js";
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import "./chunk-5NBIR3PL.js";
import {
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/task-manage/task-details.component.ts
var _c0 = (a0, a1, a2, a3, a4) => ({ "theme-blue": a0, "theme-green": a1, "theme-orange": a2, "theme-sky": a3, "theme-violet": a4 });
var _c1 = (a0, a1, a2, a3, a4) => ({ "theme-blue": a0, "theme-sky": a1, "theme-violet": a2, "theme-red": a3, "theme-cyan": a4 });
var _c2 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-red": a2 });
var _c3 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-violet": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function TaskDetailsComponent_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 73);
    \u0275\u0275text(1, "comment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Comments ");
    \u0275\u0275elementStart(3, "span", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.comments().length);
  }
}
function TaskDetailsComponent_For_105_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider", 63);
  }
}
function TaskDetailsComponent_For_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 30)(2, "div", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "p", 77);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 62);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, TaskDetailsComponent_For_105_Conditional_12_Template, 1, 0, "mat-divider", 63);
  }
  if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    const \u0275$index_185_r3 = ctx.$index;
    const \u0275$count_185_r4 = ctx.$count;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", comment_r2.user.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r2.user);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 5, comment_r2.timestamp, "MMM d, h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r2.text);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_185_r3 === \u0275$count_185_r4 - 1) ? 12 : -1);
  }
}
function TaskDetailsComponent_Conditional_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1, "No comments yet. Start a discussion!");
    \u0275\u0275elementEnd();
  }
}
function TaskDetailsComponent_ng_template_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 73);
    \u0275\u0275text(1, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Activity ");
    \u0275\u0275elementStart(3, "span", 74);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.activityLog().length);
  }
}
function TaskDetailsComponent_For_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 28)(2, "div", 30)(3, "div", 78)(4, "mat-icon", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 29)(7, "p", 79);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 80)(11, "span", 81);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "span", 81);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, ". ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const activity_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(activity_r5.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 5, activity_r5.timestamp, "MMM d, y, h:mm a"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(activity_r5.user);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", activity_r5.action, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r5.target);
  }
}
function TaskDetailsComponent_Conditional_196_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-card-content", 19)(2, "div", 82)(3, "div", 29)(4, "h3");
    \u0275\u0275text(5, "Project");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 30)(7, "button", 23);
    \u0275\u0275listener("click", function TaskDetailsComponent_Conditional_196_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openDialog());
    });
    \u0275\u0275elementStart(8, "mat-icon", 13);
    \u0275\u0275text(9, "edit");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 2)(11, "div", 30)(12, "div", 83);
    \u0275\u0275element(13, "img", 84);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 21)(15, "h4", 4);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 62);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 50);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 50);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("src", ctx_r0.project().image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.project().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.project().company);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c2, ctx_r0.project().status === "Active", ctx_r0.project().status === "On Hold", ctx_r0.project().status === "Completed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.project().status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(11, _c3, ctx_r0.project().priority === "Low", ctx_r0.project().priority === "Medium", ctx_r0.project().priority === "High"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.project().priority, " ");
  }
}
register();
var TaskDetailsComponent = class _TaskDetailsComponent {
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
    this.tasks = signal({
      description: "<p>This task involves integrating the application's authentication flow with the new Project Chimera Auth Service API. The primary goal is to deprecate the legacy Firebase/Auth0 dependency and fully transition to the new, centralized microservice for user identity management.</p><p>Key outcomes include robust token management, secure credential storage, and a seamless user experience during login and sign-up.</p><h4>Acceptance Criteria (AC)</h4><ul><li>The application's Login and Sign-up routes must successfully utilize the new /v1/auth/token endpoint to acquire an Access Token and a Refresh Token.</li><li>A secure, centralized mechanism (e.g., an HTTP-only cookie or backend session store) must be implemented for storing the tokens.</li><li>All API calls to secured resources must include the active Access Token in the Authorization: Bearer <token> header.</li><li>The system must include a Token Refresh mechanism: Upon receiving a 401 Unauthorized error, the Refresh Token must be automatically used to obtain a new Access Token without prompting the user to log in again.</li><li>All user data handling must comply with GDPR and internal security policies.</li></ul>",
      taskId: 101,
      projectId: 4,
      title: "Implement new auth API integration",
      status: "in-progress",
      type: "Backend",
      assignedTo: "Jack K",
      assignedToimage: "assets/img/user-9.jpg",
      priority: "High",
      assignHours: "20",
      loggedHours: "18",
      effortLogs: [
        { date: "2026-10-08", startTime: "09:00", endTime: "12:00", duration: "3.0 hrs" },
        { date: "2026-10-09", startTime: "13:00", endTime: "16:30", duration: "3.5 hrs" },
        { date: "2026-10-10", startTime: "10:00", endTime: "13:00", duration: "3.0 hrs" }
      ]
    }, ...ngDevMode ? [{ debugName: "tasks" }] : (
      /* istanbul ignore next */
      []
    ));
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
  openEffortLogDialog() {
    this.dialog.open(EffortLogDialogComponent, {
      width: "500px",
      maxWidth: "500px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: this.tasks()
    });
  }
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
    this.\u0275fac = function TaskDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TaskDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TaskDetailsComponent, selectors: [["app-task-details"]], viewQuery: function TaskDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5)(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 271, vars: 37, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col-12", "col-md", "mb-3", "mb-xl-0", "py-1", "order-1", "order-lg-1"], [1, "mb-1"], [1, "small"], ["routerLink", "/app/dashboard", 1, "me-2", "text-theme", "style-none"], [1, "material-icons-outlined", "align-middle", "text-sm"], [1, "material-icons-outlined", "align-middle", "text-sm", "me-2"], ["routerLink", "/app/projects", 1, "me-2", "text-theme", "style-none"], ["routerLink", "/app/time-tracking", 1, "me-2", "text-theme", "style-none"], [1, "col-auto", "order-2", "order-lg-5", "mb-3", "mb-xl-0"], ["matButton", "", 1, "ms-1", 3, "click"], [1, "material-icons-outlined"], ["matButton", "filled", 1, "ms-1", 3, "click"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-lg-8"], [1, "mb-3", "mb-lg-4"], [1, "pb-0"], [1, "row", "gx-3", "gx-lg-4", "align-items-center"], [1, "col", "mb-3"], [1, "col-auto", "mb-3"], ["matIconButton", "", 3, "click"], [3, "innerHTML"], ["matIconButton", "filled", 1, "ms-1", 3, "click"], ["mat-list-item", ""], ["matListItemIcon", ""], [1, "row", "gx-3"], [1, "col"], [1, "col-auto"], [1, "badge", "badge-light", "theme-blue", "me-1"], [1, "badge", "theme-green", "me-1"], [1, "badge", "badge-light", "theme-violet", "me-1"], [1, "badge", "theme-red", "me-1"], [1, "badge", "badge-light", "theme-red", "me-1"], [1, "badge", "theme-orange", "me-1"], [1, "p-0"], ["animationDuration", "300ms"], ["mat-tab-label", ""], [1, "px-3"], ["appearance", "outline", 1, "w-100", "my-3", "mt-lg-4"], ["matInput", "", "rows", "3", 3, "ngModelChange", "keyup.enter", "ngModel"], ["matIconButton", "", "matSuffix", "", "aria-label", "Send comment", 1, "text-theme", "me-2", 3, "click", "disabled"], [1, "text-center", "text-secondary"], [1, "activity"], [1, "col-12", "col-lg-4"], [1, "col", "mb-3", "maxwidth-dynamic", 2, "--mw-dynamic", "100px"], [1, "text-secondary"], [1, "badge", "me-1", 3, "ngClass"], [1, "badge", "badge-light", "me-1", 3, "ngClass"], [1, "text-theme", "small", 3, "click"], [1, "material-symbols-outlined", "align-middle"], ["matIconButton", ""], ["slides-per-view", "auto", "space-between", "20px", "autoplay", "true", 1, "swiper"], [1, "w-auto"], [1, "overflow-hidden", "mb-3"], [1, "coverimg", "avatar", "avatar-100", "rounded", "p-0"], ["src", "assets/img/document1.jpg", "alt", ""], ["src", "assets/img/document2.jpg", "alt", ""], ["src", "assets/img/document3.jpg", "alt", ""], ["src", "assets/img/document4.jpg", "alt", ""], [1, "text-secondary", "small"], [1, "mb-3"], [1, "mb-3", "d-flex", "align-items-center"], [1, "avatar", "avatar-40", "coverimg", "rounded-circle", "align-middle", "me-2"], ["alt", "Team Image", 1, "d-none", 3, "src"], [1, "align-middle", "d-inline-block", "flex-grow-1"], ["src", "assets/img/user-2.jpg", "alt", "Team Image", 1, "d-none"], ["src", "assets/img/user-3.jpg", "alt", "Team Image", 1, "d-none"], ["src", "assets/img/user-4.jpg", "alt", "Team Image", 1, "d-none"], ["src", "assets/img/user-5.jpg", "alt", "Team Image", 1, "d-none"], ["src", "assets/img/user-6.jpg", "alt", "Team Image", 1, "d-none"], [1, "me-2"], [1, "badge", "badge-light", "ms-2"], [1, "row", "gx-3", "mb-3"], [1, "avatar", "avatar-40", "bg-light-theme", "text-theme", "fw-bold", "rounded-circle"], [1, "fw-bold", "mb-1"], [1, "avatar", "avatar-40", "rounded-circle", "bg-light-theme", "text-theme"], [1, "text-secondary", "small", "mb-1"], [1, ""], ["routerLink", "./", 1, "text-theme"], [1, "row", "gx-3", "gx-lg-4", "align-items-center", "mb-3"], [1, "avatar", "avatar-80", "coverimg", "rounded", "mb-3"], ["alt", "Project Image", 1, "d-none", 3, "src"]], template: function TaskDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5)(7, "span", 6)(8, "mat-icon", 7);
        \u0275\u0275text(9, "house");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-icon", 8);
        \u0275\u0275text(12, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 9);
        \u0275\u0275text(14, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "mat-icon", 8);
        \u0275\u0275text(16, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 10);
        \u0275\u0275text(18, "Project Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-icon", 8);
        \u0275\u0275text(20, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Task Details ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 11)(23, "button", 12);
        \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_23_listener() {
          return ctx.createTask();
        });
        \u0275\u0275elementStart(24, "mat-icon", 13);
        \u0275\u0275text(25, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 14);
        \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_27_listener() {
          return ctx.createTask();
        });
        \u0275\u0275elementStart(28, "mat-icon", 13);
        \u0275\u0275text(29, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " Task");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(31, "div", 15)(32, "div", 16)(33, "div", 17)(34, "mat-card", 18)(35, "mat-card-content", 19)(36, "div", 20)(37, "div", 21)(38, "h3", 4);
        \u0275\u0275text(39, "Description");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 22)(41, "button", 23);
        \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_41_listener() {
          return ctx.createTask();
        });
        \u0275\u0275elementStart(42, "mat-icon", 13);
        \u0275\u0275text(43, "edit");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(44, "div", 24)(45, "br");
        \u0275\u0275elementStart(46, "div", 20)(47, "div", 21)(48, "h3", 4);
        \u0275\u0275text(49, "Sub Tasks (3)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 22)(51, "button", 25);
        \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_51_listener() {
          return ctx.createTask();
        });
        \u0275\u0275elementStart(52, "mat-icon", 13);
        \u0275\u0275text(53, "add");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "mat-nav-list")(55, "a", 26)(56, "mat-icon", 27);
        \u0275\u0275text(57, "check_small");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 28)(59, "div", 29)(60, "p");
        \u0275\u0275text(61, "Server-Side templating");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 30)(63, "span", 31);
        \u0275\u0275text(64, "Development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "span", 32);
        \u0275\u0275text(66, "Low");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(67, "a", 26)(68, "mat-icon", 27);
        \u0275\u0275text(69, "check_small");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 28)(71, "div", 29)(72, "p");
        \u0275\u0275text(73, "Client side integration");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 30)(75, "span", 33);
        \u0275\u0275text(76, "Backend");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "span", 34);
        \u0275\u0275text(78, "High");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(79, "a", 26)(80, "mat-icon", 27);
        \u0275\u0275text(81, "check_small");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 28)(83, "div", 29)(84, "p");
        \u0275\u0275text(85, "Responsive design support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 30)(87, "span", 35);
        \u0275\u0275text(88, "Design");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "span", 36);
        \u0275\u0275text(90, "Medium");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(91, "mat-card", 18)(92, "mat-card-content", 37)(93, "mat-tab-group", 38)(94, "mat-tab");
        \u0275\u0275template(95, TaskDetailsComponent_ng_template_95_Template, 5, 1, "ng-template", 39);
        \u0275\u0275elementStart(96, "div", 40)(97, "mat-form-field", 41)(98, "mat-label");
        \u0275\u0275text(99, "Add a comment...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "input", 42);
        \u0275\u0275twoWayListener("ngModelChange", function TaskDetailsComponent_Template_input_ngModelChange_100_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.newCommentText, $event) || (ctx.newCommentText = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function TaskDetailsComponent_Template_input_keyup_enter_100_listener() {
          return ctx.addComment();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "button", 43);
        \u0275\u0275listener("click", function TaskDetailsComponent_Template_button_click_101_listener() {
          return ctx.addComment();
        });
        \u0275\u0275elementStart(102, "mat-icon");
        \u0275\u0275text(103, "send");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(104, TaskDetailsComponent_For_105_Template, 13, 8, null, null, _forTrack0);
        \u0275\u0275conditionalCreate(106, TaskDetailsComponent_Conditional_106_Template, 2, 0, "p", 44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "mat-tab");
        \u0275\u0275template(108, TaskDetailsComponent_ng_template_108_Template, 5, 1, "ng-template", 39);
        \u0275\u0275elementStart(109, "div", 40)(110, "ul", 45);
        \u0275\u0275repeaterCreate(111, TaskDetailsComponent_For_112_Template, 17, 8, "li", null, _forTrack0);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(113, "div", 46)(114, "mat-card", 18)(115, "mat-card-content", 19)(116, "div", 16)(117, "div", 22)(118, "h3", 4);
        \u0275\u0275text(119, "Task Details");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "div", 28)(121, "div", 47)(122, "p", 48);
        \u0275\u0275text(123, "Status");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(124, "div", 21)(125, "span", 49);
        \u0275\u0275text(126);
        \u0275\u0275pipe(127, "titlecase");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(128, "div", 28)(129, "div", 47)(130, "p", 48);
        \u0275\u0275text(131, "Type");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "div", 21)(133, "span", 50);
        \u0275\u0275text(134);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(135, "div", 28)(136, "div", 47)(137, "p", 48);
        \u0275\u0275text(138, "Priority");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(139, "div", 21)(140, "span", 49);
        \u0275\u0275text(141);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(142, "div", 28)(143, "div", 47)(144, "p", 48);
        \u0275\u0275text(145, "Efforts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(146, "div", 21)(147, "p");
        \u0275\u0275text(148);
        \u0275\u0275elementStart(149, "span", 48);
        \u0275\u0275text(150);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(151, "div", 22)(152, "p", 51);
        \u0275\u0275listener("click", function TaskDetailsComponent_Template_p_click_152_listener() {
          return ctx.openEffortLogDialog();
        });
        \u0275\u0275elementStart(153, "span", 52);
        \u0275\u0275text(154, " more_time ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(155, "mat-card", 18)(156, "mat-card-content")(157, "div", 20)(158, "div", 21)(159, "h3", 4);
        \u0275\u0275text(160, "Documents (12)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(161, "div", 22)(162, "button", 53)(163, "mat-icon", 13);
        \u0275\u0275text(164, "upload");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(165, "swiper-container", 54)(166, "swiper-slide", 55)(167, "mat-card", 56)(168, "mat-card-content", 57);
        \u0275\u0275element(169, "img", 58);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(170, "swiper-slide", 55)(171, "mat-card", 56)(172, "mat-card-content", 57);
        \u0275\u0275element(173, "img", 59);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(174, "swiper-slide", 55)(175, "mat-card", 56)(176, "mat-card-content", 57);
        \u0275\u0275element(177, "img", 60);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(178, "swiper-slide", 55)(179, "mat-card", 56)(180, "mat-card-content", 57);
        \u0275\u0275element(181, "img", 61);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(182, "swiper-slide", 55)(183, "mat-card", 56)(184, "mat-card-content", 57);
        \u0275\u0275element(185, "img", 59);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(186, "swiper-slide", 55)(187, "mat-card", 56)(188, "mat-card-content", 57);
        \u0275\u0275element(189, "img", 60);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(190, "swiper-slide", 55)(191, "mat-card", 56)(192, "mat-card-content", 57);
        \u0275\u0275element(193, "img", 61);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(194, "p", 62);
        \u0275\u0275text(195, "Today 10 Document uploaded");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(196, TaskDetailsComponent_Conditional_196_Template, 23, 15, "mat-card", 18);
        \u0275\u0275elementStart(197, "mat-card", 18)(198, "mat-card-content", 19)(199, "div", 20)(200, "div", 21)(201, "h3", 4);
        \u0275\u0275text(202, "Team Members (7)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(203, "div", 22)(204, "button", 53)(205, "mat-icon", 13);
        \u0275\u0275text(206, "person_add");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(207, "h4", 63);
        \u0275\u0275text(208, "Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "div", 64)(210, "span", 65);
        \u0275\u0275element(211, "img", 66);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "span", 67)(213, "p", 4);
        \u0275\u0275text(214);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "p", 62);
        \u0275\u0275text(216, "ESEM, Agile, Level3");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(217, "br");
        \u0275\u0275elementStart(218, "h4", 63);
        \u0275\u0275text(219, "Assigned To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "div", 64)(221, "span", 65);
        \u0275\u0275element(222, "img", 66);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "span", 67)(224, "p", 4);
        \u0275\u0275text(225);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "p", 62);
        \u0275\u0275text(227, "Developer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(228, "br");
        \u0275\u0275elementStart(229, "h4", 63);
        \u0275\u0275text(230, "Other");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "div", 64)(232, "span", 65);
        \u0275\u0275element(233, "img", 68);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "span", 67)(235, "p", 4);
        \u0275\u0275text(236, "Ava Johnson");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "p", 62);
        \u0275\u0275text(238, "Software Developer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(239, "div", 64)(240, "span", 65);
        \u0275\u0275element(241, "img", 69);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "span", 67)(243, "p", 4);
        \u0275\u0275text(244, "Ben Smith");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(245, "p", 62);
        \u0275\u0275text(246, "Software Developer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(247, "div", 64)(248, "span", 65);
        \u0275\u0275element(249, "img", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "span", 67)(251, "p", 4);
        \u0275\u0275text(252, "Chloe Lee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "p", 62);
        \u0275\u0275text(254, "Backend Engineer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(255, "div", 64)(256, "span", 65);
        \u0275\u0275element(257, "img", 71);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(258, "span", 67)(259, "p", 4);
        \u0275\u0275text(260, "David Chen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(261, "p", 62);
        \u0275\u0275text(262, "AI Caretaker");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(263, "div", 64)(264, "span", 65);
        \u0275\u0275element(265, "img", 72);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(266, "span", 67)(267, "p", 4);
        \u0275\u0275text(268, "Ella Garcia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(269, "p", 62);
        \u0275\u0275text(270, "UX Designer");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("#", ctx.tasks().taskId, ": ", ctx.tasks().title);
        \u0275\u0275advance(39);
        \u0275\u0275property("innerHTML", ctx.tasks().description, \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(56);
        \u0275\u0275twoWayProperty("ngModel", ctx.newCommentText);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.newCommentText() || ctx.newCommentText().trim().length === 0);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.sortedComments());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.comments().length === 0 ? 106 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.sortedActivityLog());
        \u0275\u0275advance(14);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(21, _c0, ctx.tasks().status === "new", ctx.tasks().status === "ready to test", ctx.tasks().status === "in-progress", ctx.tasks().status === "resolved", ctx.tasks().status === "completed"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(127, 19, ctx.tasks().status), " ");
        \u0275\u0275advance(7);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(27, _c1, ctx.tasks().type === "Development", ctx.tasks().type === "Design", ctx.tasks().type === "Backend", ctx.tasks().type === "Bug", ctx.tasks().type === "Design Bug"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.tasks().type, " ");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(33, _c2, ctx.tasks().priority === "Low", ctx.tasks().priority === "Medium", ctx.tasks().priority === "High"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.tasks().priority, " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", ctx.tasks().loggedHours, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" / ", ctx.tasks().assignHours, " hours");
        \u0275\u0275advance(46);
        \u0275\u0275conditional(ctx.project() ? 196 : -1);
        \u0275\u0275advance(15);
        \u0275\u0275property("src", ctx.project().managerimage, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.project().manager);
        \u0275\u0275advance(8);
        \u0275\u0275property("src", ctx.tasks().assignedToimage, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.tasks().assignedTo);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink, MatCardModule, MatCard, MatCardContent, MatIconModule, MatIcon, MatTabsModule, MatTabLabel, MatTab, MatTabGroup, MatMenuModule, MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatButton, MatIconButton, MatButtonToggleModule, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatListModule, MatNavList, MatListItem, MatListItemIcon, MatDivider, MatInputModule, MatInput, MatSelectModule, MatChipsModule, TitleCasePipe, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TaskDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-task-details", standalone: true, imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatTabsModule, MatMenuModule, MatProgressBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, FormsModule, MatListModule, MatInputModule, MatSelectModule, MatChipsModule], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col-12 col-md mb-3 mb-xl-0 py-1 order-1 order-lg-1">
                        <h3 class="mb-1">#{{ tasks().taskId }}: {{ tasks().title }}</h3>
                        <p class="small">
                            <span routerLink="/app/dashboard" class="me-2 text-theme style-none"> <mat-icon class="material-icons-outlined align-middle text-sm">house</mat-icon> Home</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            <span routerLink="/app/projects" class="me-2 text-theme style-none">Projects</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            <span routerLink="/app/time-tracking" class="me-2 text-theme style-none">Project Details</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            Task Details
                        </p>
                    </div>

                    <div class="col-auto order-2 order-lg-5 mb-3 mb-xl-0">
                        <button matButton class="ms-1" (click)="createTask()"><mat-icon class="material-icons-outlined">edit</mat-icon> Edit</button>
                        <button matButton="filled" class="ms-1" (click)="createTask()"><mat-icon class="material-icons-outlined">add</mat-icon> Task</button>
                    </div>
                </div>
            </mat-card>
        </div>
        <!-- page content -->
        <div class="container fade-in">
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-lg-8">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col mb-3">
                                    <h3 class="mb-1">Description</h3>
                                </div>
                                <div class="col-auto mb-3">
                                    <button matIconButton (click)="createTask()"><mat-icon class="material-icons-outlined">edit</mat-icon></button>
                                </div>
                            </div>
                            <div [innerHTML]="tasks().description"></div>
                            <br />
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col mb-3">
                                    <h3 class="mb-1">Sub Tasks (3)</h3>
                                </div>
                                <div class="col-auto mb-3">
                                    <button matIconButton="filled" (click)="createTask()" class="ms-1"><mat-icon class="material-icons-outlined">add</mat-icon></button>
                                </div>
                            </div>
                            <mat-nav-list>
                                <a mat-list-item>
                                    <mat-icon matListItemIcon>check_small</mat-icon>
                                    <div class="row gx-3">
                                        <div class="col">
                                            <p>Server-Side templating</p>
                                        </div>
                                        <div class="col-auto">
                                            <span class="badge badge-light theme-blue me-1">Development</span>
                                            <span class="badge theme-green me-1">Low</span>
                                        </div>
                                    </div>
                                </a>
                                <a mat-list-item>
                                    <mat-icon matListItemIcon>check_small</mat-icon>
                                    <div class="row gx-3">
                                        <div class="col">
                                            <p>Client side integration</p>
                                        </div>
                                        <div class="col-auto">
                                            <span class="badge badge-light theme-violet me-1">Backend</span>
                                            <span class="badge theme-red me-1">High</span>
                                        </div>
                                    </div>
                                </a>
                                <a mat-list-item>
                                    <mat-icon matListItemIcon>check_small</mat-icon>
                                    <div class="row gx-3">
                                        <div class="col">
                                            <p>Responsive design support</p>
                                        </div>
                                        <div class="col-auto">
                                            <span class="badge badge-light theme-red me-1">Design</span>
                                            <span class="badge theme-orange me-1">Medium</span>
                                        </div>
                                    </div>
                                </a>
                            </mat-nav-list>
                        </mat-card-content>
                    </mat-card>

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
                </div>

                <div class="col-12 col-lg-4">
                    <!-- task details -->
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-auto mb-3">
                                    <h3 class="mb-1">Task Details</h3>
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col mb-3 maxwidth-dynamic" style="--mw-dynamic:100px">
                                    <p class="text-secondary">Status</p>
                                </div>
                                <div class="col mb-3">
                                    <span
                                        class="badge me-1"
                                        [ngClass]="{
                                            'theme-blue': tasks().status === 'new',
                                            'theme-green': tasks().status === 'ready to test',
                                            'theme-orange': tasks().status === 'in-progress',
                                            'theme-sky': tasks().status === 'resolved',
                                            'theme-violet': tasks().status === 'completed'
                                        }">
                                        {{ tasks().status | titlecase }}
                                    </span>
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col mb-3 maxwidth-dynamic" style="--mw-dynamic:100px">
                                    <p class="text-secondary">Type</p>
                                </div>
                                <div class="col mb-3">
                                    <span
                                        class="badge badge-light me-1"
                                        [ngClass]="{
                                            'theme-blue': tasks().type === 'Development',
                                            'theme-sky': tasks().type === 'Design',
                                            'theme-violet': tasks().type === 'Backend',
                                            'theme-red': tasks().type === 'Bug',
                                            'theme-cyan': tasks().type === 'Design Bug'
                                        }">
                                        {{ tasks().type }}
                                    </span>
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col mb-3 maxwidth-dynamic" style="--mw-dynamic:100px">
                                    <p class="text-secondary">Priority</p>
                                </div>
                                <div class="col mb-3">
                                    <span
                                        class="badge me-1"
                                        [ngClass]="{
                                            'theme-green': tasks().priority === 'Low',
                                            'theme-orange': tasks().priority === 'Medium',
                                            'theme-red': tasks().priority === 'High'
                                        }">
                                        {{ tasks().priority }}
                                    </span>
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col mb-3 maxwidth-dynamic" style="--mw-dynamic:100px">
                                    <p class="text-secondary">Efforts</p>
                                </div>
                                <div class="col mb-3">
                                    <p>
                                        {{ tasks().loggedHours }} <span class="text-secondary"> / {{ tasks().assignHours }} hours</span>
                                    </p>
                                </div>
                                <div class="col-auto mb-3">
                                    <p (click)="openEffortLogDialog()" class="text-theme small"><span class="material-symbols-outlined align-middle"> more_time </span></p>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>

                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col mb-3">
                                    <h3 class="mb-1">Documents (12)</h3>
                                </div>
                                <div class="col-auto mb-3">
                                    <button matIconButton><mat-icon class="material-icons-outlined">upload</mat-icon></button>
                                </div>
                            </div>

                            <swiper-container slides-per-view="auto" space-between="20px" autoplay="true" class="swiper">
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded p-0">
                                            <img src="assets/img/document1.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded p-0">
                                            <img src="assets/img/document2.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded p-0">
                                            <img src="assets/img/document3.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded p-0">
                                            <img src="assets/img/document4.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded p-0">
                                            <img src="assets/img/document2.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded p-0">
                                            <img src="assets/img/document3.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                                <swiper-slide class="w-auto">
                                    <mat-card class="overflow-hidden mb-3">
                                        <mat-card-content class="coverimg avatar avatar-100 rounded p-0">
                                            <img src="assets/img/document4.jpg" alt="" />
                                        </mat-card-content>
                                    </mat-card>
                                </swiper-slide>
                            </swiper-container>

                            <p class="text-secondary small">Today 10 Document uploaded</p>
                        </mat-card-content>
                    </mat-card>

                    <!-- project -->
                    @if (project()) {
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col">
                                    <h3>Project</h3>
                                </div>
                                <div class="col-auto">
                                    <button matIconButton (click)="openDialog()"><mat-icon class="material-icons-outlined">edit</mat-icon></button>
                                </div>
                            </div>
                            <div class="row gx-3 align-items-center">
                                <div class="col-auto">
                                    <div class="avatar avatar-80 coverimg rounded mb-3">
                                        <img class="d-none" [src]="project().image" alt="Project Image" />
                                    </div>
                                </div>
                                <div class="col mb-3">
                                    <h4 class="mb-1">{{ project().name }}</h4>
                                    <p class="text-secondary small">{{ project().company }}</p>
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
                        </mat-card-content>
                    </mat-card>
                    }

                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content class="pb-0">
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col mb-3">
                                    <h3 class="mb-1">Team Members (7)</h3>
                                </div>
                                <div class="col-auto mb-3">
                                    <button matIconButton><mat-icon class="material-icons-outlined">person_add</mat-icon></button>
                                </div>
                            </div>
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
                            <br />
                            <!-- assigned to -->
                            <h4 class="mb-3">Assigned To</h4>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" [src]="tasks().assignedToimage" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">{{ tasks().assignedTo }}</p>
                                    <p class="text-secondary small">Developer</p>
                                </span>
                            </div>
                            <br />
                            <!-- team -->
                            <h4 class="mb-3">Other</h4>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" src="assets/img/user-2.jpg" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">Ava Johnson</p>
                                    <p class="text-secondary small">Software Developer</p>
                                </span>
                            </div>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" src="assets/img/user-3.jpg" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">Ben Smith</p>
                                    <p class="text-secondary small">Software Developer</p>
                                </span>
                            </div>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" src="assets/img/user-4.jpg" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">Chloe Lee</p>
                                    <p class="text-secondary small">Backend Engineer</p>
                                </span>
                            </div>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" src="assets/img/user-5.jpg" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">David Chen</p>
                                    <p class="text-secondary small">AI Caretaker</p>
                                </span>
                            </div>
                            <div class="mb-3 d-flex align-items-center">
                                <span class="avatar avatar-40 coverimg rounded-circle align-middle me-2">
                                    <img class="d-none" src="assets/img/user-6.jpg" alt="Team Image" />
                                </span>
                                <span class="align-middle d-inline-block flex-grow-1">
                                    <p class="mb-1">Ella Garcia</p>
                                    <p class="text-secondary small">UX Designer</p>
                                </span>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TaskDetailsComponent, { className: "TaskDetailsComponent", filePath: "src/app/pages/app/task-manage/task-details.component.ts", lineNumber: 543 });
})();
export {
  TaskDetailsComponent
};
//# sourceMappingURL=task-details.component-M2WBJCIT.js.map
