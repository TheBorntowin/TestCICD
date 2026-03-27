import {
  EmployeeSelectComponent
} from "./chunk-HYNHQZY7.js";
import {
  PageRightComponent
} from "./chunk-BMFH3O7D.js";
import {
  CircleProgressBlueComponent
} from "./chunk-NEQRFG5O.js";
import {
  CreateEditProjectModal
} from "./chunk-SKOQXL7S.js";
import "./chunk-SCEBMLYD.js";
import "./chunk-OANSMTPI.js";
import "./chunk-RG7V5CFX.js";
import "./chunk-IJRF7KWR.js";
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
  MatDrawer,
  MatSidenavModule
} from "./chunk-Y47TWKU5.js";
import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-SFUPPXOD.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
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
  MatCardHeader,
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
  MatPrefix
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
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/projects/viewproject.component.ts
var _c0 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-red": a2 });
var _c1 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-violet": a2 });
function ViewProjectDrawerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-toolbar")(1, "h2", 0);
    \u0275\u0275text(2, "Project Details");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "span", 1);
    \u0275\u0275elementStart(4, "button", 2);
    \u0275\u0275listener("click", function ViewProjectDrawerComponent_Conditional_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer.emit());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 3)(8, "div", 4);
    \u0275\u0275element(9, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-card", 8)(15, "mat-card-content")(16, "h4", 9);
    \u0275\u0275text(17, "Status Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "p", 7);
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 12)(23, "span", 13);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 10)(26, "div", 11)(27, "p", 7);
    \u0275\u0275text(28, "Priority");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 12)(30, "span", 14);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 10)(33, "div", 11)(34, "p", 7);
    \u0275\u0275text(35, "Due Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 12)(37, "p");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 15)(40, "div", 11)(41, "p", 7);
    \u0275\u0275text(42, "Progress");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 12)(44, "p", 6);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "mat-progress-bar", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(47, "br");
    \u0275\u0275elementStart(48, "h4", 9);
    \u0275\u0275text(49, "Team Info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 10)(51, "div", 11)(52, "p", 7);
    \u0275\u0275text(53, "Manager");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 12)(55, "p")(56, "span", 17);
    \u0275\u0275element(57, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 18);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 10)(61, "div", 11)(62, "p", 7);
    \u0275\u0275text(63, "Team");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 12)(65, "p")(66, "span", 17);
    \u0275\u0275element(67, "img", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 20)(69, "p");
    \u0275\u0275text(70, "Ava Johnson");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "p")(72, "span", 17);
    \u0275\u0275element(73, "img", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 20)(75, "p");
    \u0275\u0275text(76, "Ben Smith");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "p")(78, "span", 17);
    \u0275\u0275element(79, "img", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 20)(81, "p");
    \u0275\u0275text(82, "Chloe Lee");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "p")(84, "span", 17);
    \u0275\u0275element(85, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span", 20)(87, "p");
    \u0275\u0275text(88, "David Chen");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "p")(90, "span", 17);
    \u0275\u0275element(91, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "span", 20)(93, "p");
    \u0275\u0275text(94, "Ella Garcia");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(95, "div", 25)(96, "div", 15)(97, "div", 26)(98, "button", 27);
    \u0275\u0275listener("click", function ViewProjectDrawerComponent_Conditional_0_Template_button_click_98_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDialog.emit());
    });
    \u0275\u0275elementStart(99, "mat-icon", 28);
    \u0275\u0275text(100, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, " Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 29)(103, "button", 30);
    \u0275\u0275listener("click", function ViewProjectDrawerComponent_Conditional_0_Template_button_click_103_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer.emit());
    });
    \u0275\u0275text(104, "Cancel");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image:url(", ctx_r1.project.image, ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.project.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.project.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.project.company);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(19, _c0, ctx_r1.project.status === "Active", ctx_r1.project.status === "On Hold", ctx_r1.project.status === "Completed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.project.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(23, _c1, ctx_r1.project.priority === "Low", ctx_r1.project.priority === "Medium", ctx_r1.project.priority === "High"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.project.priority, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.project.dueDate);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.project.progress, " %");
    \u0275\u0275advance();
    \u0275\u0275property("value", \u0275\u0275interpolate(ctx_r1.project.progress));
    \u0275\u0275advance(10);
    \u0275\u0275styleMap(\u0275\u0275interpolate1("background-image:url(", ctx_r1.project.managerimage, ")"));
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.project.managerimage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.project.manager, " ");
  }
}
var ViewProjectDrawerComponent = class _ViewProjectDrawerComponent {
  constructor() {
    this.project = null;
    this.closeDrawer = new EventEmitter();
    this.openDialog = new EventEmitter();
  }
  formatCurrency(value) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
  }
  static {
    this.\u0275fac = function ViewProjectDrawerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewProjectDrawerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewProjectDrawerComponent, selectors: [["app-view-project-drawer"]], inputs: { project: "project" }, outputs: { closeDrawer: "closeDrawer", openDialog: "openDialog" }, decls: 1, vars: 1, consts: [[1, "fw-bold"], [1, "spacer"], ["matIconButton", "", "aria-label", "theme close", 3, "click"], [1, "text-center"], [1, "avatar", "avatar-140", "coverimg", "rounded", "mb-3"], ["alt", "Project Image", 1, "d-none", 3, "src"], [1, "mb-1"], [1, "text-secondary"], [1, "m-3"], [1, "mb-3"], [1, "row", "gx-3", "mb-3"], [1, "col-4"], [1, "col-8"], [1, "badge", "badge-light", 3, "ngClass"], [1, "badge", 3, "ngClass"], [1, "row", "gx-3", "mb-2"], ["mode", "determinate", 1, "mb-2", 3, "value"], [1, "avatar", "avatar-20", "coverimg", "rounded-circle", "align-middle", "me-2"], [1, "align-middle"], ["src", "assets/img/user-2.jpg", "alt", "Team Image", 1, "d-none"], [1, "align-middle", "d-inline-block"], ["src", "assets/img/user-3.jpg", "alt", "Team Image", 1, "d-none"], ["src", "assets/img/user-4.jpg", "alt", "Team Image", 1, "d-none"], ["src", "assets/img/user-5.jpg", "alt", "Team Image", 1, "d-none"], ["src", "assets/img/user-6.jpg", "alt", "Team Image", 1, "d-none"], [1, "px-3"], [1, "col"], ["matButton", "filled", 3, "click"], [1, "material-icons-outlined"], [1, "col-auto"], ["matButton", "", 1, "theme-red", 3, "click"]], template: function ViewProjectDrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ViewProjectDrawerComponent_Conditional_0_Template, 105, 27);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.project ? 0 : -1);
      }
    }, dependencies: [CommonModule, NgClass, MatCardModule, MatCard, MatCardContent, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressBarModule, MatProgressBar, MatToolbarModule, MatToolbar], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewProjectDrawerComponent, [{
    type: Component,
    args: [{
      selector: "app-view-project-drawer",
      imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatToolbarModule],
      template: `
        @if (project) {
        <mat-toolbar>
            <h2 class="fw-bold">Project Details</h2>
            <span class="spacer"></span>
            <button matIconButton aria-label="theme close" (click)="closeDrawer.emit()">
                <mat-icon>close</mat-icon>
            </button>
        </mat-toolbar>
        <div class="text-center">
            <div class="avatar avatar-140 coverimg rounded mb-3" style="background-image:url({{ project.image }})">
                <img class="d-none" [src]="project.image" alt="Project Image" />
            </div>
            <h3 class="mb-1">{{ project.name }}</h3>
            <p class="text-secondary">{{ project.company }}</p>
        </div>
        <mat-card class="m-3">
            <mat-card-content>
                <h4 class="mb-3">Status Details</h4>
                <div class="row gx-3 mb-3">
                    <div class="col-4"><p class="text-secondary">Status</p></div>
                    <div class="col-8">
                        <span
                            class="badge badge-light"
                            [ngClass]="{
                                'theme-green': project.status === 'Active',
                                'theme-orange': project.status === 'On Hold',
                                'theme-red': project.status === 'Completed'
                            }">
                            {{ project.status }}
                        </span>
                    </div>
                </div>
                <div class="row gx-3 mb-3">
                    <div class="col-4"><p class="text-secondary">Priority</p></div>
                    <div class="col-8">
                        <span
                            class="badge"
                            [ngClass]="{
                                'theme-green': project.priority === 'Low',
                                'theme-orange': project.priority === 'Medium',
                                'theme-violet': project.priority === 'High'
                            }">
                            {{ project.priority }}
                        </span>
                    </div>
                </div>
                <div class="row gx-3 mb-3">
                    <div class="col-4"><p class="text-secondary">Due Date</p></div>
                    <div class="col-8">
                        <p>{{ project.dueDate }}</p>
                    </div>
                </div>
                <div class="row gx-3 mb-2">
                    <div class="col-4"><p class="text-secondary">Progress</p></div>
                    <div class="col-8">
                        <p class="mb-1">{{ project.progress }} %</p>
                        <!-- Progress Bar -->
                        <mat-progress-bar class="mb-2" mode="determinate" value="{{ project.progress }}"></mat-progress-bar>
                    </div>
                </div>

                <br />
                <h4 class="mb-3">Team Info</h4>
                <div class="row gx-3 mb-3">
                    <div class="col-4"><p class="text-secondary">Manager</p></div>
                    <div class="col-8">
                        <p>
                            <span class="avatar avatar-20 coverimg rounded-circle align-middle me-2" style="background-image:url({{ project.managerimage }})">
                                <img class="d-none" [src]="project.managerimage" alt="Project Image" />
                            </span>
                            <span class="align-middle">{{ project.manager }} </span>
                        </p>
                    </div>
                </div>
                <div class="row gx-3 mb-3">
                    <div class="col-4"><p class="text-secondary">Team</p></div>
                    <div class="col-8">
                        <p>
                            <span class="avatar avatar-20 coverimg rounded-circle align-middle me-2">
                                <img class="d-none" src="assets/img/user-2.jpg" alt="Team Image" />
                            </span>
                            <span class="align-middle d-inline-block">
                                <p>Ava Johnson</p>
                            </span>
                        </p>
                        <p>
                            <span class="avatar avatar-20 coverimg rounded-circle align-middle me-2">
                                <img class="d-none" src="assets/img/user-3.jpg" alt="Team Image" />
                            </span>
                            <span class="align-middle d-inline-block">
                                <p>Ben Smith</p>
                            </span>
                        </p>
                        <p>
                            <span class="avatar avatar-20 coverimg rounded-circle align-middle me-2">
                                <img class="d-none" src="assets/img/user-4.jpg" alt="Team Image" />
                            </span>
                            <span class="align-middle d-inline-block">
                                <p>Chloe Lee</p>
                            </span>
                        </p>
                        <p>
                            <span class="avatar avatar-20 coverimg rounded-circle align-middle me-2">
                                <img class="d-none" src="assets/img/user-5.jpg" alt="Team Image" />
                            </span>
                            <span class="align-middle d-inline-block">
                                <p>David Chen</p>
                            </span>
                        </p>
                        <p>
                            <span class="avatar avatar-20 coverimg rounded-circle align-middle me-2">
                                <img class="d-none" src="assets/img/user-6.jpg" alt="Team Image" />
                            </span>
                            <span class="align-middle d-inline-block">
                                <p>Ella Garcia</p>
                            </span>
                        </p>
                    </div>
                </div>
            </mat-card-content>
        </mat-card>
        <div class="px-3">
            <div class="row gx-3 mb-2">
                <div class="col">
                    <button matButton="filled" (click)="openDialog.emit()"><mat-icon class="material-icons-outlined">edit</mat-icon> Edit</button>
                </div>
                <div class="col-auto">
                    <button matButton class="theme-red" (click)="closeDrawer.emit()">Cancel</button>
                </div>
            </div>
        </div>
        }
    `
    }]
  }], null, { project: [{
    type: Input
  }], closeDrawer: [{
    type: Output
  }], openDialog: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewProjectDrawerComponent, { className: "ViewProjectDrawerComponent", filePath: "src/app/pages/app/projects/viewproject.component.ts", lineNumber: 149 });
})();

// src/app/pages/app/projects/projects-grid.component.ts
var _c02 = ["viewproject"];
var _c12 = () => [5, 10, 25, 100];
var _c2 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-red": a2 });
function ProjectsGridComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Project");
    \u0275\u0275elementEnd();
  }
}
function ProjectsGridComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275listener("dblclick", function ProjectsGridComponent_td_24_Template_td_dblclick_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDialog(item_r2));
    });
    \u0275\u0275elementStart(1, "p", 35);
    \u0275\u0275text(2, "Project");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "div", 37)(5, "div", 38);
    \u0275\u0275listener("click", function ProjectsGridComponent_td_24_Template_div_click_5_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openProjectDrawer(item_r2));
    });
    \u0275\u0275element(6, "img", 39);
    \u0275\u0275elementStart(7, "mat-icon", 40);
    \u0275\u0275text(8, "visibility");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 41)(10, "h4", 42);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "mat-icon", 43);
    \u0275\u0275listener("click", function ProjectsGridComponent_td_24_Template_mat_icon_click_12_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDialog(item_r2));
    });
    \u0275\u0275text(13, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 10);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("alt", \u0275\u0275interpolate(item_r2.name))("src", item_r2.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", item_r2.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r2.company);
  }
}
function ProjectsGridComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ProjectsGridComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44)(1, "p", 35);
    \u0275\u0275text(2, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c2, item_r4.status === "Active", item_r4.status === "On Hold", item_r4.status === "Completed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4.status, " ");
  }
}
function ProjectsGridComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Priority");
    \u0275\u0275elementEnd();
  }
}
function ProjectsGridComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44)(1, "p", 35);
    \u0275\u0275text(2, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(2, _c2, item_r5.priority === "Low", item_r5.priority === "Medium", item_r5.priority === "High"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.priority, " ");
  }
}
function ProjectsGridComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Manager");
    \u0275\u0275elementEnd();
  }
}
function ProjectsGridComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44)(1, "p", 35);
    \u0275\u0275text(2, "Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275element(4, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("alt", \u0275\u0275interpolate(item_r6.manager))("src", item_r6.managerimage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.manager);
  }
}
function ProjectsGridComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Due Date");
    \u0275\u0275elementEnd();
  }
}
function ProjectsGridComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44)(1, "p", 35);
    \u0275\u0275text(2, "Due Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r7.dueDate);
  }
}
function ProjectsGridComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 33);
    \u0275\u0275text(1, "Progress");
    \u0275\u0275elementEnd();
  }
}
function ProjectsGridComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44)(1, "p", 35);
    \u0275\u0275text(2, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r8.progress);
  }
}
function ProjectsGridComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 50);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ProjectsGridComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 51)(1, "button", 52);
    \u0275\u0275listener("click", function ProjectsGridComponent_td_42_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "mat-icon", 7);
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 2)(6, "button", 53);
    \u0275\u0275listener("click", function ProjectsGridComponent_td_42_Template_button_click_6_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDialog(item_r10));
    });
    \u0275\u0275elementStart(7, "mat-icon", 7);
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 53);
    \u0275\u0275listener("click", function ProjectsGridComponent_td_42_Template_button_click_11_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteOrder(item_r10));
    });
    \u0275\u0275elementStart(12, "mat-icon", 7);
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const actionsMenu_r11 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", actionsMenu_r11);
  }
}
function ProjectsGridComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function ProjectsGridComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 55);
  }
}
var ProjectsGridComponent = class _ProjectsGridComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.originalTabledata = [
      { id: 1, image: "assets/img/product1.jpg", name: "Q4 Marketing Campaign Launch", company: "Lindsey Group", status: "Active", priority: "High", managerimage: "assets/img/user-1.jpg", manager: "Alice Johnson", dueDate: "2025-10-30", progress: 75 },
      { id: 2, image: "assets/img/product3.jpg", name: "Internal Server Migration", company: "Britaniaca LLC", status: "On Hold", priority: "High", managerimage: "assets/img/user-2.jpg", manager: "Bob Smith", dueDate: "2025-11-15", progress: 10 },
      { id: 3, image: "assets/img/product2.jpg", name: "Website Redesign Phase 1", company: "Lawmakers Ltd.", status: "Completed", priority: "Medium", managerimage: "assets/img/user-3.jpg", manager: "Charlie Brown", dueDate: "2025-09-01", progress: 100 },
      { id: 4, image: "assets/img/product4.jpg", name: "Mobile App Feature X Development", company: "PrivateJet Company", status: "Active", priority: "Medium", managerimage: "assets/img/user-4.jpg", manager: "Dana Scully", dueDate: "2025-12-05", progress: 50 },
      { id: 5, image: "assets/img/product5.jpg", name: "Annual Budget Review", company: "Gilldrop Water", status: "Active", priority: "Low", managerimage: "assets/img/user-5.jpg", manager: "Eve Adams", dueDate: "2025-10-15", progress: 90 },
      { id: 6, image: "assets/img/product6.jpg", name: "HR System Integration", company: "Oil Trends", status: "Completed", priority: "High", managerimage: "assets/img/user-6.jpg", manager: "Frank Green", dueDate: "2025-08-20", progress: 100 },
      { id: 7, image: "assets/img/product7.jpg", name: "Client Feedback Collection Tool", company: "German Engineering Co.", status: "Active", priority: "High", managerimage: "assets/img/user-7.jpg", manager: "Gail Higgins", dueDate: "2025-11-20", progress: 45 },
      { id: 8, image: "assets/img/product8.jpg", name: "Vendor Contract Renewal", company: "Manhowar Lineup", status: "On Hold", priority: "Low", managerimage: "assets/img/user-8.jpg", manager: "Ian Davies", dueDate: "2025-12-01", progress: 20 }
    ];
    this.dataSource = new MatTableDataSource(this.originalTabledata);
    this.displayedColumns = ["name", "status", "priority", "manager", "dueDate", "progress", "actions"];
    this.selectedItem = null;
    this.selectedProject = signal(null, ...ngDevMode ? [{ debugName: "selectedProject" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, header) => {
      switch (header) {
        case "name":
          return item.name;
        case "status":
          return item.status;
        case "priority":
          return item.priority;
        case "manager":
          return item.manager;
        case "dueDate":
          return item.dueDate;
        default:
          return "";
      }
    };
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = Object.values(data).join(" ").toLowerCase();
      return dataStr.indexOf(filter) !== -1;
    };
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteOrder(order) {
    console.log("Deleting order:", order);
  }
  saveChanges() {
    if (this.selectedItem) {
      const index = this.originalTabledata.findIndex((i) => i === this.selectedItem);
      if (index !== -1) {
        const originalItem = this.originalTabledata[index];
        originalItem.name = this.selectedItem.name;
        originalItem.status = this.selectedItem.status;
        originalItem.manager = this.selectedItem.manager;
      }
      this.selectedItem = null;
      this.dataSource.data = [...this.originalTabledata];
    }
  }
  deleteProject(project) {
  }
  openDialog(project) {
    this.dialog.open(CreateEditProjectModal, {
      width: "990px",
      maxWidth: "990px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: __spreadValues({}, project)
    });
  }
  // drawer
  openProjectDrawer(customer) {
    this.selectedProject.set(customer);
    this.viewproject.open();
  }
  closeProjectDrawer() {
    this.viewproject.close();
    this.selectedProject();
  }
  static {
    this.\u0275fac = function ProjectsGridComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsGridComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsGridComponent, selectors: [["app-projects-grid"]], viewQuery: function ProjectsGridComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5)(MatPaginator, 5)(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.viewproject = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 50, vars: 6, consts: [["searchinput", ""], ["viewproject", ""], ["actionsMenu", "matMenu"], [1, "w-100"], [1, "row", "gx-3", "align-items-center"], [1, "col-auto", "mb-3"], [1, "avatar", "avatar-40", "text-theme", "rounded"], [1, "material-icons-outlined"], [1, "col", "mb-3"], [1, "mb-1"], [1, "text-secondary", "small"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3", "mb-3"], ["appearance", "outline", 1, "w-100", "inline-small"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "bg-none", "mb-3", "responsive-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "class", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "py-2 hoverview", 3, "dblclick", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-cell", "", "class", "py-2", 4, "matCellDef"], ["matColumnDef", "priority"], ["matColumnDef", "manager"], ["matColumnDef", "dueDate"], ["matColumnDef", "progress"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of orders", 1, "bg-none", 3, "pageSizeOptions"], ["mode", "over", "position", "end", 1, "position-fixed", 2, "--mat-sidenav-container-elevation-shadow", "0px 5px 15px rgba(0, 0, 0, 0.15)", "z-index", "12"], [3, "openDialog", "closeDrawer", "project"], ["mat-header-cell", "", "mat-sort-header", "", 1, ""], ["mat-cell", "", 1, "py-2", "hoverview", 3, "dblclick"], [1, "mat-mobile-label"], [1, "row", "gx-3"], [1, "col-auto"], [1, "avatar", "avatar-40", "rounded", 3, "click"], [1, "", 3, "src", "alt"], [1, "hoverview-icon", "bg-light-theme", "text-theme", "rounded", "circle", "avatar", "avatar-40", "position-absolute", "start-0", "top-0"], [1, "col"], [1, "mb-0"], [1, "material-icons-outlined", "text-sm", "text-theme", 3, "click"], ["mat-cell", "", 1, "py-2"], [1, "badge", 3, "ngClass"], [1, "badge", "badge-light", 3, "ngClass"], [1, "avatar", "avatar-30", "rounded-circle", "align-middle", "me-1", "d-inline-block", "coverimg"], [1, "px-1", "align-middle"], [1, ""], ["mat-header-cell", ""], ["mat-cell", "", 1, ""], ["matIconButton", "", "aria-label", "Actions", 3, "click", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ProjectsGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card")(1, "mat-card-header")(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "mat-icon", 7);
        \u0275\u0275text(7, "dashboard");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 8)(9, "h3", 9);
        \u0275\u0275text(10, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 10);
        \u0275\u0275text(12, "All projects grid list view");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 11)(14, "mat-form-field", 12)(15, "mat-label");
        \u0275\u0275text(16, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-icon", 13);
        \u0275\u0275text(18, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 14, 0);
        \u0275\u0275listener("keyup", function ProjectsGridComponent_Template_input_keyup_19_listener($event) {
          return ctx.applyFilter($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(21, "table", 15);
        \u0275\u0275elementContainerStart(22, 16);
        \u0275\u0275template(23, ProjectsGridComponent_th_23_Template, 2, 0, "th", 17)(24, ProjectsGridComponent_td_24_Template, 16, 5, "td", 18);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(25, 19);
        \u0275\u0275template(26, ProjectsGridComponent_th_26_Template, 2, 0, "th", 17)(27, ProjectsGridComponent_td_27_Template, 5, 6, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(28, 21);
        \u0275\u0275template(29, ProjectsGridComponent_th_29_Template, 2, 0, "th", 17)(30, ProjectsGridComponent_td_30_Template, 5, 6, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(31, 22);
        \u0275\u0275template(32, ProjectsGridComponent_th_32_Template, 2, 0, "th", 17)(33, ProjectsGridComponent_td_33_Template, 7, 4, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(34, 23);
        \u0275\u0275template(35, ProjectsGridComponent_th_35_Template, 2, 0, "th", 17)(36, ProjectsGridComponent_td_36_Template, 5, 1, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(37, 24);
        \u0275\u0275template(38, ProjectsGridComponent_th_38_Template, 2, 0, "th", 17)(39, ProjectsGridComponent_td_39_Template, 5, 1, "td", 20);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(40, 25);
        \u0275\u0275template(41, ProjectsGridComponent_th_41_Template, 2, 0, "th", 26)(42, ProjectsGridComponent_td_42_Template, 16, 1, "td", 27);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(43, ProjectsGridComponent_tr_43_Template, 1, 0, "tr", 28)(44, ProjectsGridComponent_tr_44_Template, 1, 0, "tr", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-card-content");
        \u0275\u0275element(46, "mat-paginator", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "mat-drawer", 31, 1)(49, "app-view-project-drawer", 32);
        \u0275\u0275listener("openDialog", function ProjectsGridComponent_Template_app_view_project_drawer_openDialog_49_listener() {
          return ctx.openDialog(ctx.selectedProject());
        })("closeDrawer", function ProjectsGridComponent_Template_app_view_project_drawer_closeDrawer_49_listener() {
          return ctx.closeProjectDrawer();
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(21);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(22);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(2);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(5, _c12));
        \u0275\u0275advance(3);
        \u0275\u0275property("project", ctx.selectedProject());
      }
    }, dependencies: [CommonModule, NgClass, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatSidenavModule, MatDrawer, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatPaginatorModule, MatPaginator, MatSortModule, MatSort, MatSortHeader, MatButtonModule, MatIconButton, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, FormsModule, MatListModule, MatInputModule, MatInput, MatSelectModule, MatChipsModule, ViewProjectDrawerComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsGridComponent, [{
    type: Component,
    args: [{ selector: "app-projects-grid", standalone: true, imports: [CommonModule, MatCardModule, MatIconModule, MatMenuModule, MatSidenavModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatFormFieldModule, FormsModule, MatListModule, MatInputModule, MatSelectModule, MatChipsModule, ViewProjectDrawerComponent], template: `
        <mat-card>
            <mat-card-header>
                <div class="w-100">
                    <div class="row gx-3 align-items-center">
                        <div class="col-auto mb-3">
                            <div class="avatar avatar-40 text-theme rounded">
                                <mat-icon class="material-icons-outlined">dashboard</mat-icon>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <h3 class="mb-1">Projects</h3>
                            <p class="text-secondary small">All projects grid list view</p>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                            <mat-form-field appearance="outline" class="w-100 inline-small">
                                <mat-label>Search</mat-label>
                                <mat-icon matPrefix>search</mat-icon>
                                <input matInput placeholder="Search" (keyup)="applyFilter($event)" #searchinput />
                            </mat-form-field>
                        </div>
                    </div>
                </div>
            </mat-card-header>
            <table mat-table [dataSource]="dataSource" matSort class="bg-none mb-3 responsive-table">
                <!-- Product Column -->
                <ng-container matColumnDef="name">
                    <th mat-header-cell *matHeaderCellDef mat-sort-header class="">Project</th>
                    <td mat-cell *matCellDef="let item" class="py-2 hoverview" (dblclick)="openDialog(item)">
                        <p class="mat-mobile-label">Project</p>
                        <div class="row gx-3">
                            <div class="col-auto">
                                <div class="avatar avatar-40 rounded" (click)="openProjectDrawer(item)">
                                    <img [src]="item.image" alt="{{ item.name }}" class="" />
                                    <mat-icon class="hoverview-icon bg-light-theme text-theme rounded circle avatar avatar-40 position-absolute start-0 top-0">visibility</mat-icon>
                                </div>
                            </div>
                            <div class="col">
                                <h4 class="mb-0">{{ item.name }} <mat-icon class="material-icons-outlined text-sm text-theme" (click)="openDialog(item)">edit</mat-icon></h4>
                                <p class="text-secondary small">{{ item.company }}</p>
                            </div>
                        </div>
                    </td>
                </ng-container>
                <ng-container matColumnDef="status">
                    <th mat-header-cell *matHeaderCellDef mat-sort-header class="">Status</th>
                    <td mat-cell *matCellDef="let item" class="py-2">
                        <p class="mat-mobile-label">Status</p>
                        <span
                            class="badge"
                            [ngClass]="{
                                'theme-green': item.status === 'Active',
                                'theme-orange': item.status === 'On Hold',
                                'theme-red': item.status === 'Completed'
                            }">
                            {{ item.status }}
                        </span>
                    </td>
                </ng-container>
                <ng-container matColumnDef="priority">
                    <th mat-header-cell *matHeaderCellDef mat-sort-header class="">Priority</th>
                    <td mat-cell *matCellDef="let item" class="py-2">
                        <p class="mat-mobile-label">Priority</p>
                        <span
                            class="badge badge-light"
                            [ngClass]="{
                                'theme-green': item.priority === 'Low',
                                'theme-orange': item.priority === 'Medium',
                                'theme-red': item.priority === 'High'
                            }">
                            {{ item.priority }}
                        </span>
                    </td>
                </ng-container>
                <ng-container matColumnDef="manager">
                    <th mat-header-cell *matHeaderCellDef mat-sort-header class="">Manager</th>
                    <td mat-cell *matCellDef="let item" class="py-2">
                        <p class="mat-mobile-label">Manager</p>

                        <div class="avatar avatar-30 rounded-circle align-middle me-1 d-inline-block coverimg">
                            <img [src]="item.managerimage" alt="{{ item.manager }}" class="" />
                        </div>
                        <span class="px-1 align-middle">{{ item.manager }}</span>
                    </td>
                </ng-container>
                <ng-container matColumnDef="dueDate">
                    <th mat-header-cell *matHeaderCellDef mat-sort-header class="">Due Date</th>
                    <td mat-cell *matCellDef="let item" class="py-2">
                        <p class="mat-mobile-label">Due Date</p>
                        <p class="">{{ item.dueDate }}</p>
                    </td>
                </ng-container>
                <ng-container matColumnDef="progress">
                    <th mat-header-cell *matHeaderCellDef mat-sort-header class="">Progress</th>
                    <td mat-cell *matCellDef="let item" class="py-2">
                        <p class="mat-mobile-label">Progress</p>
                        <p class="">{{ item.progress }}</p>
                    </td>
                </ng-container>
                <!-- Actions Column -->
                <ng-container matColumnDef="actions">
                    <th mat-header-cell *matHeaderCellDef>Actions</th>
                    <td mat-cell *matCellDef="let item" class="">
                        <button matIconButton [matMenuTriggerFor]="actionsMenu" aria-label="Actions" (click)="$event.stopPropagation()">
                            <mat-icon class="material-icons-outlined">more_vert</mat-icon>
                        </button>
                        <mat-menu #actionsMenu="matMenu">
                            <button mat-menu-item (click)="openDialog(item)">
                                <mat-icon class="material-icons-outlined">edit</mat-icon>
                                <span>Edit</span>
                            </button>
                            <button mat-menu-item (click)="deleteOrder(item)">
                                <mat-icon class="material-icons-outlined">delete</mat-icon>
                                <span>Delete</span>
                            </button>
                        </mat-menu>
                    </td>
                </ng-container>

                <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
            </table>

            <mat-card-content>
                <!-- Paginator -->
                <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" aria-label="Select page of orders" class="bg-none"></mat-paginator>
            </mat-card-content>
        </mat-card>

        <mat-drawer #viewproject mode="over" position="end" class="position-fixed" style="--mat-sidenav-container-elevation-shadow:0px 5px 15px rgba(0, 0, 0, 0.15);z-index:12">
            <app-view-project-drawer [project]="selectedProject()" (openDialog)="openDialog(selectedProject())" (closeDrawer)="closeProjectDrawer()"></app-view-project-drawer>
        </mat-drawer>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, { viewproject: [{
    type: ViewChild,
    args: ["viewproject"]
  }], paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsGridComponent, { className: "ProjectsGridComponent", filePath: "src/app/pages/app/projects/projects-grid.component.ts", lineNumber: 174 });
})();

// src/app/pages/app/projects/projects-cards.component.ts
var _c03 = (a0, a1, a2) => ({ "theme-green": a0, "theme-orange": a1, "theme-red": a2 });
var _forTrack0 = ($index, $item) => $item.id;
function ProjectsCardsComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, " edit_arrow_down ");
    \u0275\u0275elementEnd();
  }
}
function ProjectsCardsComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, " edit_arrow_up ");
    \u0275\u0275elementEnd();
  }
}
function ProjectsCardsComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "mat-card", 31)(2, "div", 32);
    \u0275\u0275element(3, "img", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-card-content")(10, "div", 2)(11, "div", 37)(12, "h3", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementStart(14, "mat-icon", 39);
    \u0275\u0275text(15, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 40);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 3)(19, "button", 41);
    \u0275\u0275listener("click", function ProjectsCardsComponent_For_68_Template_button_click_19_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(20, "mat-icon", 42);
    \u0275\u0275text(21, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-menu", null, 1)(24, "button", 43);
    \u0275\u0275listener("click", function ProjectsCardsComponent_For_68_Template_button_click_24_listener() {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDialog(project_r2));
    });
    \u0275\u0275elementStart(25, "mat-icon", 42);
    \u0275\u0275text(26, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 43);
    \u0275\u0275listener("click", function ProjectsCardsComponent_For_68_Template_button_click_29_listener() {
      const project_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteProject(project_r2));
    });
    \u0275\u0275elementStart(30, "mat-icon", 42);
    \u0275\u0275text(31, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(34, "mat-divider", 44);
    \u0275\u0275elementStart(35, "div", 2)(36, "div", 6)(37, "div", 2)(38, "div", 45)(39, "div", 46);
    \u0275\u0275element(40, "img", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 48)(42, "h4", 7);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 8);
    \u0275\u0275text(45, "Project Manager");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 49)(47, "p", 50);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 8);
    \u0275\u0275text(50, "Due Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 2)(52, "div", 51)(53, "div", 52);
    \u0275\u0275element(54, "img", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 54);
    \u0275\u0275element(56, "img", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 56);
    \u0275\u0275element(58, "img", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 6)(60, "p", 58);
    \u0275\u0275text(61, "+ 16");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "p", 8);
    \u0275\u0275text(63, "Team Members");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 3)(65, "button", 59)(66, "mat-icon", 42);
    \u0275\u0275text(67, "person_add");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(68, "mat-progress-bar", 60);
    \u0275\u0275elementStart(69, "p", 8);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const actionsMenu_r4 = \u0275\u0275reference(23);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", project_r2.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(16, _c03, project_r2.status === "Active", project_r2.status === "On Hold", project_r2.status === "Completed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", project_r2.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(20, _c03, project_r2.priority === "Low", project_r2.priority === "Medium", project_r2.priority === "High"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", project_r2.priority, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", project_r2.name, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(project_r2.company);
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", actionsMenu_r4);
    \u0275\u0275advance(21);
    \u0275\u0275property("alt", \u0275\u0275interpolate(project_r2.manager))("src", project_r2.managerimage, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r2.manager);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(project_r2.dueDate);
    \u0275\u0275advance(20);
    \u0275\u0275property("value", \u0275\u0275interpolate(project_r2.progress));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", project_r2.progress, "% Complete");
  }
}
function ProjectsCardsComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-card", 31)(2, "div", 61);
    \u0275\u0275element(3, "img", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "span", 63);
    \u0275\u0275text(6, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 64);
    \u0275\u0275text(8, "\xA0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-card-content")(10, "h3", 38);
    \u0275\u0275text(11, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 40);
    \u0275\u0275text(13, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "mat-divider", 65);
    \u0275\u0275elementStart(15, "div", 2)(16, "div", 6)(17, "div", 2)(18, "div", 45);
    \u0275\u0275element(19, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 48)(21, "h4", 7);
    \u0275\u0275text(22, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 8);
    \u0275\u0275text(24, "\xA0");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 49)(26, "p", 50);
    \u0275\u0275text(27, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 8);
    \u0275\u0275text(29, "\xA0");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 2)(31, "div", 51);
    \u0275\u0275element(32, "div", 66)(33, "div", 66)(34, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 6)(36, "p", 7);
    \u0275\u0275text(37, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p", 8);
    \u0275\u0275text(39, "\xA0");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 3)(41, "button", 59);
    \u0275\u0275element(42, "mat-icon", 42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(43, "mat-progress-bar", 67);
    \u0275\u0275elementStart(44, "p", 68);
    \u0275\u0275text(45, "\xA0");
    \u0275\u0275elementEnd()()()();
  }
}
function ProjectsCardsComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "img", 69);
    \u0275\u0275elementStart(2, "h3", 7);
    \u0275\u0275text(3, "No project found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 70);
    \u0275\u0275text(5, "Search for different project name or status");
    \u0275\u0275elementEnd()();
  }
}
var ProjectsCardsComponent = class _ProjectsCardsComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.originalTabledata = [
      { id: 1, image: "assets/img/product1.jpg", name: "Q4 Marketing Campaign Launch", company: "Lindsey Group", status: "Active", priority: "High", managerimage: "assets/img/user-1.jpg", manager: "Alice Johnson", dueDate: "2025-10-30", progress: 75 },
      { id: 2, image: "assets/img/product3.jpg", name: "Internal Server Migration", company: "Britaniaca LLC", status: "On Hold", priority: "High", managerimage: "assets/img/user-2.jpg", manager: "Bob Smith", dueDate: "2025-11-15", progress: 10 },
      { id: 3, image: "assets/img/product2.jpg", name: "Website Redesign Phase 1", company: "Lawmakers Ltd.", status: "Completed", priority: "Medium", managerimage: "assets/img/user-3.jpg", manager: "Charlie Brown", dueDate: "2025-09-01", progress: 100 },
      { id: 4, image: "assets/img/product4.jpg", name: "Mobile App Feature X Development", company: "PrivateJet Company", status: "Active", priority: "Medium", managerimage: "assets/img/user-4.jpg", manager: "Dana Scully", dueDate: "2025-12-05", progress: 50 },
      { id: 5, image: "assets/img/product5.jpg", name: "Annual Budget Review", company: "Gilldrop Water", status: "Active", priority: "Low", managerimage: "assets/img/user-5.jpg", manager: "Eve Adams", dueDate: "2025-10-15", progress: 90 },
      { id: 6, image: "assets/img/product6.jpg", name: "HR System Integration", company: "Oil Trends", status: "Completed", priority: "High", managerimage: "assets/img/user-6.jpg", manager: "Frank Green", dueDate: "2025-08-20", progress: 100 },
      { id: 7, image: "assets/img/product7.jpg", name: "Client Feedback Collection Tool", company: "German Engineering Co.", status: "Active", priority: "High", managerimage: "assets/img/user-7.jpg", manager: "Gail Higgins", dueDate: "2025-11-20", progress: 45 },
      { id: 8, image: "assets/img/product8.jpg", name: "Vendor Contract Renewal", company: "Manhowar Lineup", status: "On Hold", priority: "Low", managerimage: "assets/img/user-8.jpg", manager: "Ian Davies", dueDate: "2025-12-01", progress: 20 }
    ];
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedStatus = signal("All", ...ngDevMode ? [{ debugName: "selectedStatus" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selectedItem = null;
    this.sortColumn = signal("name", ...ngDevMode ? [{ debugName: "sortColumn" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sortDirection = signal("asc", ...ngDevMode ? [{ debugName: "sortDirection" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredTableItems = computed(() => {
      const query = this.searchQuery().toLowerCase();
      const status = this.selectedStatus();
      const column = this.sortColumn();
      const direction = this.sortDirection();
      const projects = this.originalTabledata;
      const filtered = projects.filter((project) => {
        const matchesSearch = project.name.toLowerCase().includes(query) || project.manager.toLowerCase().includes(query) || project.company.toLowerCase().includes(query);
        const matchesStatus = status === "All" || project.status === status;
        return matchesSearch && matchesStatus;
      });
      if (!column || !direction) {
        return filtered;
      }
      return [...filtered].sort((a, b) => {
        const isAsc = direction === "asc";
        let comparison = 0;
        if (column === "progress") {
          comparison = (a.progress || 0) - (b.progress || 0);
        } else if (column === "dueDate") {
          comparison = a.dueDate.localeCompare(b.dueDate);
        } else {
          const aValue = String(a[column]).toLowerCase();
          const bValue = String(b[column]).toLowerCase();
          if (aValue > bValue)
            comparison = 1;
          else if (aValue < bValue)
            comparison = -1;
        }
        return comparison * (isAsc ? 1 : -1);
      });
    }, ...ngDevMode ? [{ debugName: "filteredTableItems" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  // --- Methods ---
  /** Toggles the sort column or direction. Called from select/toggle button. */
  toggleSort(columnOrEvent) {
    let newColumn;
    if (typeof columnOrEvent === "string") {
      newColumn = columnOrEvent;
    } else {
      newColumn = columnOrEvent;
    }
    const currentColumn = this.sortColumn();
    const currentDirection = this.sortDirection();
    if (currentColumn === newColumn) {
      this.sortDirection.set(currentDirection === "asc" ? "desc" : "asc");
    } else {
      this.sortColumn.set(newColumn);
      this.sortDirection.set("asc");
    }
    this.logAction("Sort by " + newColumn + " " + this.sortDirection());
  }
  /** Toggles only the sort direction, useful for the button. */
  toggleSortDirection() {
    this.sortDirection.set(this.sortDirection() === "asc" ? "desc" : "asc");
    this.logAction("Sort direction changed to: " + this.sortDirection());
  }
  /** Updates the search query signal. */
  setSearchQuery(event) {
    const inputElement = event.target;
    this.searchQuery.set(inputElement.value);
    this.logAction("Search: " + inputElement.value);
  }
  /** Updates the selected status signal. */
  setSelectedStatus(status) {
    this.selectedStatus.set(status);
    this.logAction("Filter by Status: " + status);
  }
  getStatusClasses(status) {
    switch (status) {
      case "Active":
        return "status-active";
      case "On Hold":
        return "status-onhold";
      case "Completed":
        return "status-completed";
      default:
        return "";
    }
  }
  getPriorityClasses(priority) {
    switch (priority) {
      case "High":
        return "priority-high";
      case "Medium":
        return "priority-medium";
      case "Low":
        return "priority-low";
      default:
        return "";
    }
  }
  countStatus(status) {
    return this.originalTabledata.filter((p) => p.status === status).length;
  }
  logAction(action) {
    console.log(`User Action: ${action}`);
  }
  deleteProject(project) {
  }
  openDialog(project) {
    this.selectedItem = __spreadValues({}, project);
    this.dialog.open(CreateEditProjectModal, {
      width: "990px",
      maxWidth: "990px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: this.selectedItem
    });
  }
  static {
    this.\u0275fac = function ProjectsCardsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsCardsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsCardsComponent, selectors: [["app-projects-cards"]], decls: 71, vars: 17, consts: [["searchinput", ""], ["actionsMenu", "matMenu"], [1, "row", "gx-3", "align-items-center"], [1, "col-auto", "mb-3"], [1, "avatar", "avatar-40", "text-theme", "rounded"], [1, "material-symbols-outlined"], [1, "col", "mb-3"], [1, "mb-1"], [1, "text-secondary", "small"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3", "mb-3"], ["appearance", "outline", 1, "w-100", "inline-small"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search", 3, "keyup"], ["id", "sort-column", 1, "sort-select", 3, "ngModelChange", "ngModel"], ["value", "name"], ["value", "manager"], ["value", "dueDate"], ["value", "progress"], ["matIconButton", "", 1, "text-theme", 3, "click"], [1, "row", "gx-3"], [1, "col-6", "col-md-3"], [1, "mb-2", "mb-lg-3", 3, "click"], [1, "opacity-75"], [1, "mb-2", "mb-lg-3", "theme-green", 3, "click"], [1, "mb-2", "mb-lg-3", "theme-orange", 3, "click"], [1, "mb-2", "mb-lg-3", "theme-violet", 3, "click"], [1, "text-secondary", "small", "mb-3", "mb-lg-4"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-sm-6", "col-lg-4"], [1, "col-12", "col-sm-6", "col-lg-4", "loading-card"], [1, "col-12", "text-center", "mb-4", "pb-5"], [1, "overflow-hidden", "mb-3", "mb-lg-4"], ["mat-card-image", "", "routerLink", "/app/project-details", 1, "w-100", "height-200", "coverimg", "mb-3"], ["alt", "Project Image", "loading", "lazy", 1, "w-100", 3, "src"], [1, "position-absolute", "top-0", "end-0", "m-3", "z-index-1"], [1, "badge", "me-2", 3, "ngClass"], [1, "badge", "badge-light", 3, "ngClass"], ["routerLink", "/app/project-details", 1, "col", "mb-3", "hoverview"], [1, "mb-1", "text-truncated"], [1, "material-icons-outlined", "hoverview-icon", "d-inline-block", "align-middle", "text-theme"], [1, "text-secondary", "text-truncated"], ["matIconButton", "", "aria-label", "Actions", 3, "click", "matMenuTriggerFor"], [1, "material-icons-outlined"], ["mat-menu-item", "", 3, "click"], [1, "mb-3"], [1, "col-auto"], [1, "avatar", "avatar-40", "coverimg", "rounded-circle"], ["loading", "lazy", 1, "manager-avatar", 3, "src", "alt"], [1, "col"], [1, "col-auto", "text-end", "mb-3"], [1, "small", "mb-1"], [1, "col-auto", "avatar-group", "mb-3"], ["matTooltip", "John Dmitri", 1, "avatar", "avatar-30", "rounded-circle", "coverimg"], ["src", "assets/img/user-1.jpg", "alt", ""], ["matTooltip", "Ayub Shan", 1, "avatar", "avatar-30", "rounded-circle", "coverimg"], ["src", "assets/img/user-3.jpg", "alt", ""], ["matTooltip", "Liana Doe", 1, "avatar", "avatar-30", "rounded-circle", "coverimg"], ["src", "assets/img/user-4.jpg", "alt", ""], [1, "mb-0"], ["matIconButton", ""], ["mode", "determinate", 1, "mb-2", 3, "value"], ["mat-card-image", "", 1, "w-100", "height-200", "coverimg", "mb-3"], ["src", "", "alt", "Project Image", "loading", "lazy", 1, "w-100"], [1, "badge", "badge-light", "me-2"], [1, "badge"], [1, "mb-2"], [1, "avatar", "avatar-30", "rounded-circle"], ["mode", "determinate", "value", "50", 1, "mb-2"], [1, "text-secondary", "small", "text-center"], ["src", "assets/img/noproduct.png", "alt", "", 1, "width-300", "mt-4", "mt-lg-5"], [1, "text-secondary"]], template: function ProjectsCardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "span", 5);
        \u0275\u0275text(4, " stacks ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(5, "div", 6)(6, "h3", 7);
        \u0275\u0275text(7, "Top Project Cards");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 8);
        \u0275\u0275text(9, "Overview of top project highlights");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 9)(11, "mat-form-field", 10)(12, "mat-label");
        \u0275\u0275text(13, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "mat-icon", 11);
        \u0275\u0275text(15, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 12, 0);
        \u0275\u0275listener("keyup", function ProjectsCardsComponent_Template_input_keyup_16_listener($event) {
          return ctx.setSearchQuery($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 9)(19, "mat-form-field", 10)(20, "mat-select", 13);
        \u0275\u0275listener("ngModelChange", function ProjectsCardsComponent_Template_mat_select_ngModelChange_20_listener($event) {
          return ctx.toggleSort($event);
        });
        \u0275\u0275elementStart(21, "mat-option", 14);
        \u0275\u0275text(22, "Project Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "mat-option", 15);
        \u0275\u0275text(24, "Manager");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-option", 16);
        \u0275\u0275text(26, "Due Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-option", 17);
        \u0275\u0275text(28, "Progress");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "mat-icon", 11);
        \u0275\u0275text(30, "sort");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 3)(32, "button", 18);
        \u0275\u0275listener("click", function ProjectsCardsComponent_Template_button_click_32_listener() {
          return ctx.toggleSortDirection();
        });
        \u0275\u0275conditionalCreate(33, ProjectsCardsComponent_Conditional_33_Template, 2, 0, "span", 5)(34, ProjectsCardsComponent_Conditional_34_Template, 2, 0, "span", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 19)(36, "div", 20)(37, "mat-card", 21);
        \u0275\u0275listener("click", function ProjectsCardsComponent_Template_mat_card_click_37_listener() {
          return ctx.setSelectedStatus("All");
        });
        \u0275\u0275elementStart(38, "mat-card-content")(39, "h3", 7);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p", 22);
        \u0275\u0275text(42, "All");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "div", 20)(44, "mat-card", 23);
        \u0275\u0275listener("click", function ProjectsCardsComponent_Template_mat_card_click_44_listener() {
          return ctx.setSelectedStatus("Active");
        });
        \u0275\u0275elementStart(45, "mat-card-content")(46, "h3", 7);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 22);
        \u0275\u0275text(49, "Active");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "div", 20)(51, "mat-card", 24);
        \u0275\u0275listener("click", function ProjectsCardsComponent_Template_mat_card_click_51_listener() {
          return ctx.setSelectedStatus("On Hold");
        });
        \u0275\u0275elementStart(52, "mat-card-content")(53, "h3", 7);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p", 22);
        \u0275\u0275text(56, "On Hold");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(57, "div", 20)(58, "mat-card", 25);
        \u0275\u0275listener("click", function ProjectsCardsComponent_Template_mat_card_click_58_listener() {
          return ctx.setSelectedStatus("Completed");
        });
        \u0275\u0275elementStart(59, "mat-card-content")(60, "h3", 7);
        \u0275\u0275text(61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p", 22);
        \u0275\u0275text(63, "Completed");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(64, "p", 26);
        \u0275\u0275text(65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 27);
        \u0275\u0275repeaterCreate(67, ProjectsCardsComponent_For_68_Template, 71, 24, "div", 28, _forTrack0);
        \u0275\u0275conditionalCreate(69, ProjectsCardsComponent_Conditional_69_Template, 46, 0, "div", 29);
        \u0275\u0275conditionalCreate(70, ProjectsCardsComponent_Conditional_70_Template, 6, 0, "div", 30);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275property("ngModel", ctx.sortColumn());
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.sortDirection() === "asc" ? 33 : 34);
        \u0275\u0275advance(4);
        \u0275\u0275classMap(ctx.selectedStatus() === "All" ? "bg-theme text-white" : "text-theme");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.originalTabledata.length);
        \u0275\u0275advance(4);
        \u0275\u0275classMap(ctx.selectedStatus() === "Active" ? "bg-theme text-white" : "bg-light-theme text-theme");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.countStatus("Active"));
        \u0275\u0275advance(4);
        \u0275\u0275classMap(ctx.selectedStatus() === "On Hold" ? "bg-theme text-white" : "bg-light-theme text-theme");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.countStatus("On Hold"));
        \u0275\u0275advance(4);
        \u0275\u0275classMap(ctx.selectedStatus() === "Completed" ? "bg-theme text-white" : "bg-light-theme text-theme");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.countStatus("Completed"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Project with selected category (", ctx.filteredTableItems().length, ")");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.filteredTableItems());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.filteredTableItems().length != 0 ? 69 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filteredTableItems().length === 0 ? 70 : -1);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink, MatCardModule, MatCard, MatCardContent, MatCardImage, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatProgressBarModule, MatProgressBar, MatTooltipModule, MatTooltip, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatIconButton, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, FormsModule, NgControlStatus, NgModel, MatListModule, MatDivider, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatChipsModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsCardsComponent, [{
    type: Component,
    args: [{ selector: "app-projects-cards", standalone: true, imports: [CommonModule, RouterLink, MatCardModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatTooltipModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatFormFieldModule, FormsModule, MatListModule, MatInputModule, MatSelectModule, MatChipsModule], template: ` <div class="row gx-3 align-items-center">
            <div class="col-auto mb-3">
                <div class="avatar avatar-40 text-theme rounded">
                    <span class="material-symbols-outlined"> stacks </span>
                </div>
            </div>
            <div class="col mb-3">
                <h3 class="mb-1">Top Project Cards</h3>
                <p class="text-secondary small">Overview of top project highlights</p>
            </div>
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                <mat-form-field appearance="outline" class="w-100 inline-small">
                    <mat-label>Search</mat-label>
                    <mat-icon matPrefix>search</mat-icon>
                    <input matInput placeholder="Search" (keyup)="setSearchQuery($event)" #searchinput />
                </mat-form-field>
            </div>

            <!-- Sort Selectors for Card View -->
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                <mat-form-field appearance="outline" class="w-100 inline-small">
                    <mat-select id="sort-column" [ngModel]="sortColumn()" (ngModelChange)="toggleSort($event)" class="sort-select">
                        <mat-option value="name">Project Name</mat-option>
                        <mat-option value="manager">Manager</mat-option>
                        <mat-option value="dueDate">Due Date</mat-option>
                        <mat-option value="progress">Progress</mat-option>
                    </mat-select>
                    <mat-icon matPrefix>sort</mat-icon>
                </mat-form-field>
            </div>
            <div class="col-auto mb-3">
                <button (click)="toggleSortDirection()" matIconButton class="text-theme">@if(sortDirection() === "asc") {<span class="material-symbols-outlined"> edit_arrow_down </span> } @else {<span class="material-symbols-outlined"> edit_arrow_up </span>}</button>
            </div>
        </div>

        <div class="row gx-3">
            <div class="col-6 col-md-3">
                <mat-card class="mb-2 mb-lg-3" [class]="selectedStatus() === 'All' ? 'bg-theme text-white' : 'text-theme'" (click)="setSelectedStatus('All')">
                    <mat-card-content>
                        <h3 class="mb-1">{{ originalTabledata.length }}</h3>
                        <p class="opacity-75">All</p>
                    </mat-card-content>
                </mat-card>
            </div>
            <div class="col-6 col-md-3">
                <mat-card class="mb-2 mb-lg-3 theme-green" [class]="selectedStatus() === 'Active' ? 'bg-theme text-white' : 'bg-light-theme text-theme'" (click)="setSelectedStatus('Active')">
                    <mat-card-content>
                        <h3 class="mb-1">{{ countStatus("Active") }}</h3>
                        <p class="opacity-75">Active</p>
                    </mat-card-content>
                </mat-card>
            </div>
            <div class="col-6 col-md-3">
                <mat-card class="mb-2 mb-lg-3 theme-orange" [class]="selectedStatus() === 'On Hold' ? 'bg-theme text-white' : 'bg-light-theme text-theme'" (click)="setSelectedStatus('On Hold')">
                    <mat-card-content>
                        <h3 class="mb-1">{{ countStatus("On Hold") }}</h3>
                        <p class="opacity-75">On Hold</p>
                    </mat-card-content>
                </mat-card>
            </div>
            <div class="col-6 col-md-3">
                <mat-card class="mb-2 mb-lg-3 theme-violet" [class]="selectedStatus() === 'Completed' ? 'bg-theme text-white' : 'bg-light-theme text-theme'" (click)="setSelectedStatus('Completed')">
                    <mat-card-content>
                        <h3 class="mb-1">{{ countStatus("Completed") }}</h3>
                        <p class="opacity-75">Completed</p>
                    </mat-card-content>
                </mat-card>
            </div>
        </div>

        <p class="text-secondary small mb-3 mb-lg-4">Project with selected category ({{ filteredTableItems().length }})</p>

        <div class="row gx-3 gx-lg-4">
            <!-- Project Cards -->
            @for (project of filteredTableItems(); track project.id) {
            <div class="col-12 col-sm-6 col-lg-4">
                <mat-card class="overflow-hidden mb-3 mb-lg-4">
                    <!-- Top Image Area -->
                    <div mat-card-image class="w-100 height-200 coverimg mb-3" routerLink="/app/project-details">
                        <img [src]="project.image" alt="Project Image" class="w-100" loading="lazy" />
                    </div>

                    <div class="position-absolute top-0 end-0 m-3 z-index-1">
                        <span
                            class="badge me-2"
                            [ngClass]="{
                                'theme-green': project.status === 'Active',
                                'theme-orange': project.status === 'On Hold',
                                'theme-red': project.status === 'Completed'
                            }">
                            {{ project.status }}
                        </span>
                        <span
                            class="badge badge-light"
                            [ngClass]="{
                                'theme-green': project.priority === 'Low',
                                'theme-orange': project.priority === 'Medium',
                                'theme-red': project.priority === 'High'
                            }">
                            {{ project.priority }}
                        </span>
                    </div>

                    <!-- Content Body -->
                    <mat-card-content>
                        <div class="row gx-3 align-items-center">
                            <div class="col mb-3 hoverview" routerLink="/app/project-details">
                                <h3 class="mb-1 text-truncated">{{ project.name }} <mat-icon class="material-icons-outlined hoverview-icon d-inline-block align-middle text-theme">arrow_forward</mat-icon></h3>
                                <p class="text-secondary text-truncated">{{ project.company }}</p>
                            </div>
                            <div class="col-auto mb-3">
                                <button matIconButton [matMenuTriggerFor]="actionsMenu" aria-label="Actions" (click)="$event.stopPropagation()">
                                    <mat-icon class="material-icons-outlined">more_vert</mat-icon>
                                </button>
                                <mat-menu #actionsMenu="matMenu">
                                    <button mat-menu-item (click)="openDialog(project)">
                                        <mat-icon class="material-icons-outlined">edit</mat-icon>
                                        <span>Edit</span>
                                    </button>
                                    <button mat-menu-item (click)="deleteProject(project)">
                                        <mat-icon class="material-icons-outlined">delete</mat-icon>
                                        <span>Delete</span>
                                    </button>
                                </mat-menu>
                            </div>
                        </div>
                        <mat-divider class="mb-3"></mat-divider>

                        <!-- Manager & Due Date Footer -->
                        <div class="row gx-3 align-items-center">
                            <div class="col mb-3">
                                <div class="row gx-3 align-items-center">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 coverimg rounded-circle">
                                            <img [src]="project.managerimage" alt="{{ project.manager }}" class="manager-avatar" loading="lazy" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h4 class="mb-1">{{ project.manager }}</h4>
                                        <p class="text-secondary small">Project Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto text-end mb-3">
                                <p class="small mb-1">{{ project.dueDate }}</p>
                                <p class="text-secondary small">Due Date</p>
                            </div>
                        </div>

                        <div class="row gx-3 align-items-center">
                            <div class="col-auto avatar-group mb-3">
                                <div class="avatar avatar-30 rounded-circle coverimg" matTooltip="John Dmitri">
                                    <img src="assets/img/user-1.jpg" alt="" />
                                </div>
                                <div class="avatar avatar-30 rounded-circle coverimg" matTooltip="Ayub Shan">
                                    <img src="assets/img/user-3.jpg" alt="" />
                                </div>
                                <div class="avatar avatar-30 rounded-circle coverimg" matTooltip="Liana Doe">
                                    <img src="assets/img/user-4.jpg" alt="" />
                                </div>
                            </div>
                            <div class="col mb-3">
                                <p class="mb-0">+ 16</p>
                                <p class="text-secondary small">Team Members</p>
                            </div>
                            <div class="col-auto mb-3">
                                <button matIconButton><mat-icon class="material-icons-outlined">person_add</mat-icon></button>
                            </div>
                        </div>

                        <!-- Progress Bar -->
                        <mat-progress-bar class="mb-2" mode="determinate" value="{{ project.progress }}"></mat-progress-bar>
                        <p class="text-secondary small">{{ project.progress }}% Complete</p>
                    </mat-card-content>
                </mat-card>
            </div>
            } @if(filteredTableItems().length != 0) {
            <div class="col-12 col-sm-6 col-lg-4 loading-card">
                <mat-card class="overflow-hidden mb-3 mb-lg-4">
                    <!-- Top Image Area -->
                    <div mat-card-image class="w-100 height-200 coverimg mb-3">
                        <img src="" alt="Project Image" class="w-100" loading="lazy" />
                    </div>

                    <div class="position-absolute top-0 end-0 m-3 z-index-1">
                        <span class="badge badge-light me-2">&nbsp;</span>
                        <span class="badge">&nbsp;</span>
                    </div>

                    <!-- Content Body -->
                    <mat-card-content>
                        <h3 class="mb-1 text-truncated">&nbsp;</h3>
                        <p class="text-secondary text-truncated">&nbsp;</p>

                        <mat-divider class="mb-2"></mat-divider>

                        <!-- Manager & Due Date Footer -->
                        <div class="row gx-3 align-items-center">
                            <div class="col mb-3">
                                <div class="row gx-3 align-items-center">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 coverimg rounded-circle"></div>
                                    </div>
                                    <div class="col">
                                        <h4 class="mb-1">&nbsp;</h4>
                                        <p class="text-secondary small">&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto text-end mb-3">
                                <p class="small mb-1">&nbsp;</p>
                                <p class="text-secondary small">&nbsp;</p>
                            </div>
                        </div>

                        <div class="row gx-3 align-items-center">
                            <div class="col-auto avatar-group mb-3">
                                <div class="avatar avatar-30 rounded-circle"></div>
                                <div class="avatar avatar-30 rounded-circle"></div>
                                <div class="avatar avatar-30 rounded-circle"></div>
                            </div>
                            <div class="col mb-3">
                                <p class="mb-1">&nbsp;</p>
                                <p class="text-secondary small">&nbsp;</p>
                            </div>
                            <div class="col-auto mb-3">
                                <button matIconButton><mat-icon class="material-icons-outlined"></mat-icon></button>
                            </div>
                        </div>

                        <!-- Progress Bar -->
                        <mat-progress-bar class="mb-2" mode="determinate" value="50"></mat-progress-bar>
                        <p class="text-secondary small text-center ">&nbsp;</p>
                    </mat-card-content>
                </mat-card>
            </div>
            } @if(filteredTableItems().length === 0) {
            <div class="col-12 text-center mb-4 pb-5">
                <img src="assets/img/noproduct.png" alt="" class="width-300 mt-4 mt-lg-5" />
                <h3 class="mb-1">No project found</h3>
                <p class="text-secondary">Search for different project name or status</p>
            </div>
            }
        </div>`, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsCardsComponent, { className: "ProjectsCardsComponent", filePath: "src/app/pages/app/projects/projects-cards.component.ts", lineNumber: 289 });
})();

// src/app/pages/app/projects/projects.component.ts
function ProjectsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "mat-button-toggle-group", 57);
    \u0275\u0275listener("change", function ProjectsComponent_Conditional_14_Template_mat_button_toggle_group_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode.set($event.value));
    });
    \u0275\u0275elementStart(2, "mat-button-toggle", 58);
    \u0275\u0275text(3, "Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-button-toggle", 59);
    \u0275\u0275text(5, "Week");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-button-toggle", 60);
    \u0275\u0275text(7, "Month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 61);
    \u0275\u0275element(9, "app-employee-select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 62);
    \u0275\u0275element(11, "app-page-right");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.viewMode());
  }
}
function ProjectsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 11);
    \u0275\u0275text(1, "filter_alt_off");
    \u0275\u0275elementEnd();
  }
}
function ProjectsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 11);
    \u0275\u0275text(1, "filter_alt");
    \u0275\u0275elementEnd();
  }
}
register();
var ProjectsComponent = class _ProjectsComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.filterOn = true;
    this.currentWidth = signal(0, ...ngDevMode ? [{ debugName: "currentWidth" }] : (
      /* istanbul ignore next */
      []
    ));
    this.viewMode = signal("day", ...ngDevMode ? [{ debugName: "viewMode" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  // width check
  onResize(event) {
    this.checkWidthAndSetFilter();
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.checkWidthAndSetFilter();
  }
  toggleFilter() {
    this.filterOn = !this.filterOn;
  }
  checkWidthAndSetFilter() {
    const width = window.innerWidth;
    this.currentWidth.set(width);
    const shouldBeOff = width < 992;
    if (this.filterOn === shouldBeOff) {
      this.filterOn = !this.filterOn;
    }
  }
  openDialog() {
    this.dialog.open(CreateEditProjectModal, {
      width: "990px",
      maxWidth: "990px",
      panelClass: "custom-dialog-container",
      autoFocus: false,
      data: {}
    });
  }
  static {
    this.\u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], hostBindings: function ProjectsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function ProjectsComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, \u0275\u0275resolveWindow);
      }
    }, decls: 216, vars: 2, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "col-md", "mb-3", "mb-xl-0", "py-1", "order-1", "order-lg-1"], [1, "mb-1"], [1, "small"], ["routerLink", "/app/dashboard", 1, "me-2", "text-theme", "style-none"], [1, "material-icons-outlined", "align-middle", "text-sm"], [1, "material-icons-outlined", "align-middle", "text-sm", "me-2"], [1, "col-auto", "order-2", "order-lg-5", "mb-3", "mb-xl-0"], ["matIconButton", "", 3, "click"], [1, "material-icons-outlined"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-lg-6", "col-xl-4"], [1, "bg-theme", "text-white", "mb-3", "mb-lg-4"], [1, "mb-3"], [1, "opacity-75", "mb-md-4", "pb-lg-2"], ["matButton", "elevated", 3, "click"], ["matButton", "filled", 1, "ms-1"], ["slides-per-view", "1", "space-between", "20px", "autoplay", "false", "navigation", "true", 1, "swiper", "small-nav-v50"], [1, "mb-3", "mb-lg-4"], [1, "pb-0"], [1, "col-auto", "mb-3"], ["routerLink", "/app/project-details", 1, "avatar", "avatar-80", "rounded", "coverimg"], ["src", "assets/img/product3.jpg", "alt", ""], [1, "col", "mb-3"], ["routerLink", "/app/project-details", 1, "text-theme", "mb-1"], [1, "mb-2"], [1, "text-secondary", "small"], [1, "fw-medium", "mb-1", "text-theme"], [1, "text-secondary"], [1, "small", "text-secondary"], [1, "avatar", "avatar-50", "rounded-circle"], [1, "col-auto", "avatar-group", "mb-3"], [1, "avatar", "avatar-40", "rounded-circle", "coverimg"], ["src", "assets/img/user-1.jpg", "alt", ""], ["src", "assets/img/user-3.jpg", "alt", ""], ["src", "assets/img/user-4.jpg", "alt", ""], ["matIconButton", ""], ["src", "assets/img/product1.jpg", "alt", ""], [1, "pb-0", "position-relative"], ["slides-per-view", "1", "space-between", "0px", "autoplay", "false", "pagination", '{"el":".pagination-v"}', "pagination-clickable", "true", "direction", "vertical", 1, "swiper", "height-160"], [1, ""], ["slides-per-view", "3.8", "space-between", "20px", "autoplay", "true", 1, "swiper"], [1, "overflow-hidden", "mb-3"], [1, "coverimg", "height-50"], ["src", "assets/img/document1.jpg", "alt", ""], ["src", "assets/img/document2.jpg", "alt", ""], ["src", "assets/img/document3.jpg", "alt", ""], ["src", "assets/img/document4.jpg", "alt", ""], [1, "col-auto"], [1, "avatar", "avatar-40", "rounded", "coverimg"], [1, "col"], ["src", "assets/img/product2.jpg", "alt", ""], [1, "pagination-v", "position-absolute", "end-0", "bottom-0", "m-3"], [1, "col-12", "col-sm-6", "col-lg-auto", "mb-3", "mb-xl-0", "order-3", "order-lg-2"], [3, "change", "value"], ["value", "day"], ["value", "week"], ["value", "month"], [1, "col-12", "col-sm-6", "col-lg-3", "c", "col-xxl-2", "mb-3", "mb-xl-0", "order-4", "order-lg-3"], [1, "col-12", "col-sm-6", "col-lg-4", "col-xl-3", "col-xxl-auto", "mb-3", "mb-xl-0", "order-5", "order-lg-4"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5)(7, "span", 6)(8, "mat-icon", 7);
        \u0275\u0275text(9, "house");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-icon", 8);
        \u0275\u0275text(12, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Projects ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(14, ProjectsComponent_Conditional_14_Template, 12, 1);
        \u0275\u0275elementStart(15, "div", 9)(16, "button", 10);
        \u0275\u0275listener("click", function ProjectsComponent_Template_button_click_16_listener() {
          return ctx.toggleFilter();
        });
        \u0275\u0275conditionalCreate(17, ProjectsComponent_Conditional_17_Template, 2, 0, "mat-icon", 11)(18, ProjectsComponent_Conditional_18_Template, 2, 0, "mat-icon", 11);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "mat-card", 15)(23, "mat-card-content")(24, "h1", 16);
        \u0275\u0275text(25, " Let's create workspace");
        \u0275\u0275element(26, "br");
        \u0275\u0275text(27, " for a your project ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p", 17);
        \u0275\u0275text(29, "You can start with your very new project or you can create task within your current project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 18);
        \u0275\u0275listener("click", function ProjectsComponent_Template_button_click_30_listener() {
          return ctx.openDialog();
        });
        \u0275\u0275elementStart(31, "mat-icon", 11);
        \u0275\u0275text(32, "add_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 19)(35, "mat-icon", 11);
        \u0275\u0275text(36, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " New Task");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 14)(39, "swiper-container", 20)(40, "swiper-slide")(41, "mat-card", 21)(42, "mat-card-content", 22)(43, "div", 2)(44, "div", 23)(45, "div", 24);
        \u0275\u0275element(46, "img", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 26)(48, "h3", 27);
        \u0275\u0275text(49, "Lindsey Group");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "p", 28);
        \u0275\u0275text(51, "AI Automation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "p", 29);
        \u0275\u0275text(53, "Deadline 10/11/2027");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "div", 2)(55, "div", 26)(56, "h3", 30);
        \u0275\u0275text(57, "495");
        \u0275\u0275elementStart(58, "span", 31);
        \u0275\u0275text(59, "/690");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "p", 32);
        \u0275\u0275text(61, "Task Completed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 23);
        \u0275\u0275element(63, "app-circle-progress-blue", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 2)(65, "div", 34)(66, "div", 35);
        \u0275\u0275element(67, "img", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 35);
        \u0275\u0275element(69, "img", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 35);
        \u0275\u0275element(71, "img", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 26)(73, "p", 4);
        \u0275\u0275text(74, "+ 7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "p", 29);
        \u0275\u0275text(76, "Team Members");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 23)(78, "button", 39)(79, "mat-icon", 11);
        \u0275\u0275text(80, "person_add");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(81, "swiper-slide")(82, "mat-card", 21)(83, "mat-card-content", 22)(84, "div", 2)(85, "div", 23)(86, "div", 24);
        \u0275\u0275element(87, "img", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 26)(89, "h3", 27);
        \u0275\u0275text(90, "Manhowar Lineup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "p", 28);
        \u0275\u0275text(92, "Industrial Safety Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "p", 29);
        \u0275\u0275text(94, "Deadline 30/07/2028");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(95, "div", 2)(96, "div", 26)(97, "h3", 30);
        \u0275\u0275text(98, "541");
        \u0275\u0275elementStart(99, "span", 31);
        \u0275\u0275text(100, "/750");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "p", 32);
        \u0275\u0275text(102, "Task Completed");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 23);
        \u0275\u0275element(104, "app-circle-progress-blue", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 2)(106, "div", 34)(107, "div", 35);
        \u0275\u0275element(108, "img", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div", 35);
        \u0275\u0275element(110, "img", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 35);
        \u0275\u0275element(112, "img", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 26)(114, "p", 4);
        \u0275\u0275text(115, "+ 16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "p", 29);
        \u0275\u0275text(117, "Team Members");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "div", 23)(119, "button", 39)(120, "mat-icon", 11);
        \u0275\u0275text(121, "person_add");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(122, "div", 14)(123, "mat-card", 21)(124, "mat-card-header")(125, "div", 16)(126, "h3", 4);
        \u0275\u0275text(127, "Document Updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "p", 29);
        \u0275\u0275text(129, "Stat tuned with recent changes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(130, "mat-card-content", 41)(131, "swiper-container", 42)(132, "swiper-slide", 43)(133, "swiper-container", 44)(134, "swiper-slide", 43)(135, "mat-card", 45)(136, "mat-card-content", 46);
        \u0275\u0275element(137, "img", 47);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(138, "swiper-slide", 43)(139, "mat-card", 45)(140, "mat-card-content", 46);
        \u0275\u0275element(141, "img", 48);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(142, "swiper-slide", 43)(143, "mat-card", 45)(144, "mat-card-content", 46);
        \u0275\u0275element(145, "img", 49);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(146, "swiper-slide", 43)(147, "mat-card", 45)(148, "mat-card-content", 46);
        \u0275\u0275element(149, "img", 50);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(150, "div", 2)(151, "div", 51)(152, "div", 52);
        \u0275\u0275element(153, "img", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(154, "div", 53)(155, "p", 4);
        \u0275\u0275text(156, "Lindsey Group");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "p", 29);
        \u0275\u0275text(158, "AI Automation");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(159, "swiper-slide", 43)(160, "swiper-container", 44)(161, "swiper-slide", 43)(162, "mat-card", 45)(163, "mat-card-content", 46);
        \u0275\u0275element(164, "img", 49);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(165, "swiper-slide", 43)(166, "mat-card", 45)(167, "mat-card-content", 46);
        \u0275\u0275element(168, "img", 50);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(169, "swiper-slide", 43)(170, "mat-card", 45)(171, "mat-card-content", 46);
        \u0275\u0275element(172, "img", 47);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(173, "swiper-slide", 43)(174, "mat-card", 45)(175, "mat-card-content", 46);
        \u0275\u0275element(176, "img", 48);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(177, "div", 2)(178, "div", 51)(179, "div", 52);
        \u0275\u0275element(180, "img", 54);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(181, "div", 53)(182, "p", 4);
        \u0275\u0275text(183, "Manhowar Lineup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "p", 29);
        \u0275\u0275text(185, "Industrial Safety Project");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(186, "swiper-slide", 43)(187, "swiper-container", 44)(188, "swiper-slide", 43)(189, "mat-card", 45)(190, "mat-card-content", 46);
        \u0275\u0275element(191, "img", 50);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "swiper-slide", 43)(193, "mat-card", 45)(194, "mat-card-content", 46);
        \u0275\u0275element(195, "img", 49);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(196, "swiper-slide", 43)(197, "mat-card", 45)(198, "mat-card-content", 46);
        \u0275\u0275element(199, "img", 48);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(200, "swiper-slide", 43)(201, "mat-card", 45)(202, "mat-card-content", 46);
        \u0275\u0275element(203, "img", 47);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(204, "div", 2)(205, "div", 51)(206, "div", 52);
        \u0275\u0275element(207, "img", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(208, "div", 53)(209, "p", 4);
        \u0275\u0275text(210, "BookShow Your");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "p", 29);
        \u0275\u0275text(212, "Event Booking Platform");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(213, "div", 55);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(214, "app-projects-cards")(215, "app-projects-grid");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275conditional(ctx.filterOn ? 14 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.filterOn ? 17 : 18);
      }
    }, dependencies: [RouterLink, CommonModule, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatIconModule, MatIcon, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatButton, MatIconButton, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatFormFieldModule, FormsModule, MatListModule, MatInputModule, MatSelectModule, MatChipsModule, EmployeeSelectComponent, PageRightComponent, CircleProgressBlueComponent, ProjectsGridComponent, ProjectsCardsComponent], styles: ["\n\n[_nghost-%COMP%]     swiper-container.small-nav-v50::part(button-next), \n[_nghost-%COMP%]     swiper-container.small-nav-v50::part(button-prev) {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  top: 0;\n  margin-top: 1.4rem;\n  left: auto;\n  right: 1rem;\n}\n[_nghost-%COMP%]     swiper-container.small-nav-v50::part(button-prev) {\n  right: 2.5rem;\n}\n/*# sourceMappingURL=projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsComponent, [{
    type: Component,
    args: [{ selector: "app-projects", standalone: true, imports: [RouterLink, CommonModule, MatCardModule, MatIconModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatButtonToggleModule, MatFormFieldModule, FormsModule, MatListModule, MatInputModule, MatSelectModule, MatChipsModule, EmployeeSelectComponent, PageRightComponent, CircleProgressBlueComponent, ProjectsGridComponent, ProjectsCardsComponent], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col col-md mb-3 mb-xl-0 py-1 order-1 order-lg-1">
                        <h3 class="mb-1">Projects</h3>
                        <p class="small">
                            <span routerLink="/app/dashboard" class="me-2 text-theme style-none"> <mat-icon class="material-icons-outlined align-middle text-sm">house</mat-icon> Home</span>
                            <mat-icon class="material-icons-outlined align-middle text-sm me-2">chevron_right</mat-icon>
                            Projects
                        </p>
                    </div>
                    @if(filterOn) {
                    <div class="col-12 col-sm-6 col-lg-auto mb-3 mb-xl-0 order-3 order-lg-2">
                        <mat-button-toggle-group [value]="viewMode()" (change)="viewMode.set($event.value)">
                            <mat-button-toggle value="day">Day</mat-button-toggle>
                            <mat-button-toggle value="week">Week</mat-button-toggle>
                            <mat-button-toggle value="month">Month</mat-button-toggle>
                        </mat-button-toggle-group>
                    </div>

                    <div class="col-12 col-sm-6 col-lg-3 c col-xxl-2 mb-3 mb-xl-0 order-4 order-lg-3">
                        <app-employee-select></app-employee-select>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-auto mb-3 mb-xl-0 order-5 order-lg-4">
                        <app-page-right></app-page-right>
                    </div>
                    }
                    <div class="col-auto order-2 order-lg-5 mb-3 mb-xl-0">
                        <button matIconButton (click)="toggleFilter()">
                            @if(filterOn) {
                            <mat-icon class="material-icons-outlined">filter_alt_off</mat-icon>
                            } @else{
                            <mat-icon class="material-icons-outlined">filter_alt</mat-icon>}
                        </button>
                    </div>
                </div>
            </mat-card>
        </div>
        <!-- page content -->
        <div class="container fade-in">
            <!-- project summary -->
            <div class="row gx-3 gx-lg-4">
                <!-- create new project -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <mat-card class="bg-theme text-white mb-3 mb-lg-4">
                        <mat-card-content>
                            <h1 class="mb-3">
                                Let's create workspace<br />
                                for a your project
                            </h1>
                            <p class="opacity-75 mb-md-4 pb-lg-2">You can start with your very new project or you can create task within your current project</p>

                            <button matButton="elevated" (click)="openDialog()"><mat-icon class="material-icons-outlined">add_circle</mat-icon> Project</button>
                            <button matButton="filled" class="ms-1"><mat-icon class="material-icons-outlined">add</mat-icon> New Task</button>
                        </mat-card-content>
                    </mat-card>
                </div>
                <!-- Recent 5 files -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <swiper-container slides-per-view="1" space-between="20px" autoplay="false" navigation="true" class="swiper small-nav-v50">
                        <swiper-slide>
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content class="pb-0">
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto mb-3">
                                            <div class="avatar avatar-80 rounded coverimg" routerLink="/app/project-details">
                                                <img src="assets/img/product3.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col mb-3">
                                            <h3 class="text-theme mb-1" routerLink="/app/project-details">Lindsey Group</h3>
                                            <p class="mb-2">AI Automation</p>
                                            <p class="text-secondary small">Deadline 10/11/2027</p>
                                        </div>
                                    </div>

                                    <div class="row gx-3 align-items-center">
                                        <div class="col mb-3">
                                            <h3 class="fw-medium mb-1 text-theme">495<span class="text-secondary">/690</span></h3>
                                            <p class="small text-secondary">Task Completed</p>
                                        </div>
                                        <div class="col-auto mb-3">
                                            <app-circle-progress-blue class="avatar avatar-50 rounded-circle"></app-circle-progress-blue>
                                        </div>
                                    </div>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto avatar-group mb-3">
                                            <div class="avatar avatar-40 rounded-circle coverimg">
                                                <img src="assets/img/user-1.jpg" alt="" />
                                            </div>
                                            <div class="avatar avatar-40 rounded-circle coverimg">
                                                <img src="assets/img/user-3.jpg" alt="" />
                                            </div>
                                            <div class="avatar avatar-40 rounded-circle coverimg">
                                                <img src="assets/img/user-4.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col mb-3">
                                            <p class="mb-1">+ 7</p>
                                            <p class="text-secondary small">Team Members</p>
                                        </div>
                                        <div class="col-auto mb-3">
                                            <button matIconButton><mat-icon class="material-icons-outlined">person_add</mat-icon></button>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </swiper-slide>
                        <swiper-slide>
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content class="pb-0">
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto mb-3">
                                            <div class="avatar avatar-80 rounded coverimg" routerLink="/app/project-details">
                                                <img src="assets/img/product1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col mb-3">
                                            <h3 class="text-theme mb-1" routerLink="/app/project-details">Manhowar Lineup</h3>
                                            <p class="mb-2">Industrial Safety Project</p>
                                            <p class="text-secondary small">Deadline 30/07/2028</p>
                                        </div>
                                    </div>

                                    <div class="row gx-3 align-items-center">
                                        <div class="col mb-3">
                                            <h3 class="fw-medium mb-1 text-theme">541<span class="text-secondary">/750</span></h3>
                                            <p class="small text-secondary">Task Completed</p>
                                        </div>
                                        <div class="col-auto mb-3">
                                            <app-circle-progress-blue class="avatar avatar-50 rounded-circle"></app-circle-progress-blue>
                                        </div>
                                    </div>
                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto avatar-group mb-3">
                                            <div class="avatar avatar-40 rounded-circle coverimg">
                                                <img src="assets/img/user-1.jpg" alt="" />
                                            </div>
                                            <div class="avatar avatar-40 rounded-circle coverimg">
                                                <img src="assets/img/user-3.jpg" alt="" />
                                            </div>
                                            <div class="avatar avatar-40 rounded-circle coverimg">
                                                <img src="assets/img/user-4.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col mb-3">
                                            <p class="mb-1">+ 16</p>
                                            <p class="text-secondary small">Team Members</p>
                                        </div>
                                        <div class="col-auto mb-3">
                                            <button matIconButton><mat-icon class="material-icons-outlined">person_add</mat-icon></button>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </swiper-slide>
                    </swiper-container>
                </div>
                <!-- recent document updates -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-header>
                            <div class="mb-3">
                                <h3 class="mb-1">Document Updates</h3>
                                <p class="text-secondary small">Stat tuned with recent changes</p>
                            </div>
                        </mat-card-header>
                        <mat-card-content class="pb-0 position-relative">
                            <swiper-container slides-per-view="1" space-between="0px" autoplay="false" pagination='{"el":".pagination-v"}' pagination-clickable="true" direction="vertical" class="swiper height-160">
                                <swiper-slide class="">
                                    <swiper-container slides-per-view="3.8" space-between="20px" autoplay="true" class="swiper">
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document1.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document2.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document3.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document4.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                    </swiper-container>

                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 rounded coverimg">
                                                <img src="assets/img/product3.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <p class=" mb-1">Lindsey Group</p>
                                            <p class="text-secondary small">AI Automation</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="">
                                    <swiper-container slides-per-view="3.8" space-between="20px" autoplay="true" class="swiper">
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document3.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document4.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document1.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document2.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                    </swiper-container>

                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 rounded coverimg">
                                                <img src="assets/img/product2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <p class=" mb-1">Manhowar Lineup</p>
                                            <p class="text-secondary small">Industrial Safety Project</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="">
                                    <swiper-container slides-per-view="3.8" space-between="20px" autoplay="true" class="swiper">
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document4.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document3.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document2.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                        <swiper-slide class="">
                                            <mat-card class="overflow-hidden mb-3">
                                                <mat-card-content class="coverimg height-50">
                                                    <img src="assets/img/document1.jpg" alt="" />
                                                </mat-card-content>
                                            </mat-card>
                                        </swiper-slide>
                                    </swiper-container>

                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 rounded coverimg">
                                                <img src="assets/img/product3.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <p class=" mb-1">BookShow Your</p>
                                            <p class="text-secondary small">Event Booking Platform</p>
                                        </div>
                                    </div>
                                </swiper-slide>
                            </swiper-container>
                            <div class="pagination-v position-absolute end-0 bottom-0 m-3"></div>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>

            <app-projects-cards></app-projects-cards>
            <app-projects-grid></app-projects-grid>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA], styles: ["/* angular:styles/component:css;2413c5655cfc42a9a2e4b675549d0b32190ee44ca17c72f07a2aabcd085bcf69;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/pages/app/projects/projects.component.ts */\n:host ::ng-deep swiper-container.small-nav-v50::part(button-next),\n:host ::ng-deep swiper-container.small-nav-v50::part(button-prev) {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  top: 0;\n  margin-top: 1.4rem;\n  left: auto;\n  right: 1rem;\n}\n:host ::ng-deep swiper-container.small-nav-v50::part(button-prev) {\n  right: 2.5rem;\n}\n/*# sourceMappingURL=projects.component.css.map */\n"] }]
  }], null, { onResize: [{
    type: HostListener,
    args: ["window:resize", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/pages/app/projects/projects.component.ts", lineNumber: 375 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=projects.component-VESLAUAZ.js.map
