import {
  UserService
} from "./chunk-RKSB5HOU.js";
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
import "./chunk-R6SBTVDX.js";
import {
  MatChipsModule
} from "./chunk-5G2FMPWG.js";
import "./chunk-NHVW6DX5.js";
import "./chunk-7XFTNJ2Y.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-ZLA4QS3A.js";
import {
  AuthService
} from "./chunk-BMFQEZMK.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-DYOMXT5J.js";
import "./chunk-XPQBAS5O.js";
import "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  CommonModule,
  DatePipe,
  MatIcon,
  MatIconModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-ZG6WBW2I.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/super-admin/super-admin.component.ts
function SuperAdminComponent_th_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "User");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminComponent_td_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42)(1, "div", 2)(2, "div", 10)(3, "div", 43)(4, "mat-icon", 44);
    \u0275\u0275text(5, "person");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 13)(7, "h4", 45);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 46);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const u_r1 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(u_r1.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r1.email);
  }
}
function SuperAdminComponent_th_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Role");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminComponent_td_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getRoleBadge(u_r2.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r2.role);
  }
}
function SuperAdminComponent_th_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminComponent_td_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", u_r4.isActive ? "theme-green" : "theme-red");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r4.isActive ? "Active" : "Inactive", " ");
  }
}
function SuperAdminComponent_th_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Joined");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminComponent_td_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, u_r5.createdAt, "MMM d, yyyy"));
  }
}
function SuperAdminComponent_tr_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 50);
  }
}
function SuperAdminComponent_tr_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 51);
  }
}
function SuperAdminComponent_p_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 52);
    \u0275\u0275text(1, "No users found.");
    \u0275\u0275elementEnd();
  }
}
function SuperAdminComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 53)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 54);
    \u0275\u0275element(7, "div", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getRoleBadge(r_r6.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.count);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.users.length ? r_r6.count / ctx_r2.users.length * 100 : 0, "%");
    \u0275\u0275property("ngClass", ctx_r2.getProgressClass(r_r6.role));
  }
}
var SuperAdminComponent = class _SuperAdminComponent {
  constructor() {
    this.userService = inject(UserService);
    this.authService = inject(AuthService);
    this.users = [];
    this.dataSource = new MatTableDataSource([]);
    this.cols = ["user", "role", "status", "created"];
  }
  get currentUser() {
    return this.authService.currentUser();
  }
  get activeUsers() {
    return this.users.filter((u) => u.isActive).length;
  }
  get adminUsers() {
    return this.users.filter((u) => u.role === "ADMIN" || u.role === "SUPER_ADMIN").length;
  }
  get roleStats() {
    const roles = ["SUPER_ADMIN", "ADMIN", "MANAGER", "EMPLOYEE", "VIEWER"];
    return roles.map((role) => ({
      role,
      count: this.users.filter((u) => u.role === role).length
    })).filter((r) => r.count > 0);
  }
  ngOnInit() {
    this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data;
        this.dataSource.data = data;
      }
    });
  }
  getRoleBadge(role) {
    const map = {
      SUPER_ADMIN: "theme-red",
      ADMIN: "theme-yellow",
      MANAGER: "theme-blue",
      EMPLOYEE: "theme-green",
      TUTOR: "theme-purple",
      VIEWER: "theme-cyan"
    };
    return map[role] ?? "theme-cyan";
  }
  getProgressClass(role) {
    const map = {
      SUPER_ADMIN: "bg-danger",
      ADMIN: "bg-warning",
      MANAGER: "bg-primary",
      EMPLOYEE: "bg-success",
      TUTOR: "bg-purple",
      VIEWER: "bg-info"
    };
    return map[role] ?? "bg-secondary";
  }
  static {
    this.\u0275fac = function SuperAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SuperAdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuperAdminComponent, selectors: [["app-super-admin"]], decls: 107, vars: 10, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4", "mb-3"], [1, "col-12", "col-md-6", "col-lg-3"], [1, "mb-3"], [1, "col-auto"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-blue"], [1, "material-icons-outlined"], [1, "col"], [1, "small", "text-secondary", "mb-1"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-green"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-yellow"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-red"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-lg-8"], [1, "mb-3", "mb-lg-4"], [1, "w-100"], [1, "col-auto", "mb-3"], [1, "avatar", "avatar-40", "text-theme", "rounded"], [1, "col", "mb-3"], [1, "text-secondary", "small"], ["mat-stroked-button", "", "routerLink", "/app/users"], ["mat-table", "", 1, "bg-none", "mb-3", "responsive-table", 3, "dataSource"], ["matColumnDef", "user"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "py-2", 4, "matCellDef"], ["matColumnDef", "role"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "created"], ["mat-cell", "", "class", "small text-secondary", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-secondary small text-center", 4, "ngIf"], [1, "col-12", "col-lg-4"], ["class", "mb-3", 4, "ngFor", "ngForOf"], ["mat-header-cell", ""], ["mat-cell", "", 1, "py-2"], [1, "avatar", "avatar-36", "rounded-circle", "bg-light-theme", "text-theme", "d-flex", "align-items-center", "justify-content-center"], [1, "material-icons-outlined", 2, "font-size", "18px"], [1, "mb-0"], [1, "text-secondary", "small", "mb-0"], ["mat-cell", ""], [1, "badge", "badge-light", "d-inline-block", 3, "ngClass"], ["mat-cell", "", 1, "small", "text-secondary"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-secondary", "small", "text-center"], [1, "d-flex", "justify-content-between", "mb-1"], [1, "progress", 2, "height", "6px", "border-radius", "4px", "background", "#f0f0f0"], [1, "progress-bar", 2, "border-radius", "4px", "transition", "width 0.5s ease", 3, "ngClass"]], template: function SuperAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "Platform Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "mat-card", 9)(12, "mat-card-content")(13, "div", 2)(14, "div", 10)(15, "div", 11)(16, "mat-icon", 12);
        \u0275\u0275text(17, "group");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 13)(19, "p", 14);
        \u0275\u0275text(20, "Total Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "h3");
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(23, "div", 8)(24, "mat-card", 9)(25, "mat-card-content")(26, "div", 2)(27, "div", 10)(28, "div", 15)(29, "mat-icon", 12);
        \u0275\u0275text(30, "check_circle");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 13)(32, "p", 14);
        \u0275\u0275text(33, "Active Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "h3");
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(36, "div", 8)(37, "mat-card", 9)(38, "mat-card-content")(39, "div", 2)(40, "div", 10)(41, "div", 16)(42, "mat-icon", 12);
        \u0275\u0275text(43, "admin_panel_settings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 13)(45, "p", 14);
        \u0275\u0275text(46, "Admins");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "h3");
        \u0275\u0275text(48);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(49, "div", 8)(50, "mat-card", 9)(51, "mat-card-content")(52, "div", 2)(53, "div", 10)(54, "div", 17)(55, "mat-icon", 12);
        \u0275\u0275text(56, "block");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 13)(58, "p", 14);
        \u0275\u0275text(59, "Inactive Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "h3");
        \u0275\u0275text(61);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(62, "div", 18)(63, "div", 19)(64, "mat-card", 20)(65, "mat-card-header")(66, "div", 21)(67, "div", 2)(68, "div", 22)(69, "div", 23)(70, "mat-icon", 12);
        \u0275\u0275text(71, "manage_accounts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 24)(73, "h3", 4);
        \u0275\u0275text(74, "All Platform Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "p", 25);
        \u0275\u0275text(76, "Every registered account across the platform");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "div", 22)(78, "a", 26);
        \u0275\u0275text(79, "Manage Users");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(80, "table", 27);
        \u0275\u0275elementContainerStart(81, 28);
        \u0275\u0275template(82, SuperAdminComponent_th_82_Template, 2, 0, "th", 29)(83, SuperAdminComponent_td_83_Template, 11, 2, "td", 30);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(84, 31);
        \u0275\u0275template(85, SuperAdminComponent_th_85_Template, 2, 0, "th", 29)(86, SuperAdminComponent_td_86_Template, 3, 2, "td", 32);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(87, 33);
        \u0275\u0275template(88, SuperAdminComponent_th_88_Template, 2, 0, "th", 29)(89, SuperAdminComponent_td_89_Template, 3, 2, "td", 32);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(90, 34);
        \u0275\u0275template(91, SuperAdminComponent_th_91_Template, 2, 0, "th", 29)(92, SuperAdminComponent_td_92_Template, 3, 4, "td", 35);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(93, SuperAdminComponent_tr_93_Template, 1, 0, "tr", 36)(94, SuperAdminComponent_tr_94_Template, 1, 0, "tr", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "mat-card-content");
        \u0275\u0275template(96, SuperAdminComponent_p_96_Template, 2, 0, "p", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "div", 39)(98, "mat-card", 20)(99, "mat-card-header")(100, "div", 24)(101, "h3", 4);
        \u0275\u0275text(102, "Role Distribution");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "p", 25);
        \u0275\u0275text(104, "Users per role");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(105, "mat-card-content");
        \u0275\u0275template(106, SuperAdminComponent_div_106_Template, 8, 6, "div", 40);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("Welcome, ", ctx.currentUser == null ? null : ctx.currentUser.fullName, " \u2014 you have full platform access");
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate(ctx.users.length);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.activeUsers);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.adminUsers);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.users.length - ctx.activeUsers);
        \u0275\u0275advance(19);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(13);
        \u0275\u0275property("matHeaderRowDef", ctx.cols);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.cols);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.users.length === 0);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.roleStats);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatIconModule, MatIcon, MatButtonModule, MatButton, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatChipsModule, RouterModule, RouterLink, DatePipe], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n}\n/*# sourceMappingURL=super-admin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuperAdminComponent, [{
    type: Component,
    args: [{ selector: "app-super-admin", standalone: true, imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatTableModule, MatChipsModule, RouterModule], template: `
    <div class="container-fluid fade-in mb-3 mb-lg-4">
      <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
        <div class="row gx-3 align-items-center">
          <div class="col mb-3 mb-xl-0 py-1">
            <h3 class="mb-1">Platform Overview</h3>
            <p class="small opacity-50">Welcome, {{ currentUser?.fullName }} \u2014 you have full platform access</p>
          </div>
        </div>
      </mat-card>
    </div>

    <div class="container fade-in">

      <!-- Stats -->
      <div class="row gx-3 gx-lg-4 mb-3">
        <div class="col-12 col-md-6 col-lg-3">
          <mat-card class="mb-3">
            <mat-card-content>
              <div class="row gx-3 align-items-center">
                <div class="col-auto">
                  <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-blue">
                    <mat-icon class="material-icons-outlined">group</mat-icon>
                  </div>
                </div>
                <div class="col">
                  <p class="small text-secondary mb-1">Total Users</p>
                  <h3>{{ users.length }}</h3>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <mat-card class="mb-3">
            <mat-card-content>
              <div class="row gx-3 align-items-center">
                <div class="col-auto">
                  <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-green">
                    <mat-icon class="material-icons-outlined">check_circle</mat-icon>
                  </div>
                </div>
                <div class="col">
                  <p class="small text-secondary mb-1">Active Users</p>
                  <h3>{{ activeUsers }}</h3>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <mat-card class="mb-3">
            <mat-card-content>
              <div class="row gx-3 align-items-center">
                <div class="col-auto">
                  <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-yellow">
                    <mat-icon class="material-icons-outlined">admin_panel_settings</mat-icon>
                  </div>
                </div>
                <div class="col">
                  <p class="small text-secondary mb-1">Admins</p>
                  <h3>{{ adminUsers }}</h3>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <mat-card class="mb-3">
            <mat-card-content>
              <div class="row gx-3 align-items-center">
                <div class="col-auto">
                  <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-red">
                    <mat-icon class="material-icons-outlined">block</mat-icon>
                  </div>
                </div>
                <div class="col">
                  <p class="small text-secondary mb-1">Inactive Users</p>
                  <h3>{{ users.length - activeUsers }}</h3>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <!-- Users by Role -->
      <div class="row gx-3 gx-lg-4">
        <div class="col-12 col-lg-8">
          <mat-card class="mb-3 mb-lg-4">
            <mat-card-header>
              <div class="w-100">
                <div class="row gx-3 align-items-center">
                  <div class="col-auto mb-3">
                    <div class="avatar avatar-40 text-theme rounded">
                      <mat-icon class="material-icons-outlined">manage_accounts</mat-icon>
                    </div>
                  </div>
                  <div class="col mb-3">
                    <h3 class="mb-1">All Platform Users</h3>
                    <p class="text-secondary small">Every registered account across the platform</p>
                  </div>
                  <div class="col-auto mb-3">
                    <a mat-stroked-button routerLink="/app/users">Manage Users</a>
                  </div>
                </div>
              </div>
            </mat-card-header>

            <table mat-table [dataSource]="dataSource" class="bg-none mb-3 responsive-table">
              <ng-container matColumnDef="user">
                <th mat-header-cell *matHeaderCellDef>User</th>
                <td mat-cell *matCellDef="let u" class="py-2">
                  <div class="row gx-3 align-items-center">
                    <div class="col-auto">
                      <div class="avatar avatar-36 rounded-circle bg-light-theme text-theme d-flex align-items-center justify-content-center">
                        <mat-icon class="material-icons-outlined" style="font-size:18px">person</mat-icon>
                      </div>
                    </div>
                    <div class="col">
                      <h4 class="mb-0">{{ u.fullName }}</h4>
                      <p class="text-secondary small mb-0">{{ u.email }}</p>
                    </div>
                  </div>
                </td>
              </ng-container>
              <ng-container matColumnDef="role">
                <th mat-header-cell *matHeaderCellDef>Role</th>
                <td mat-cell *matCellDef="let u">
                  <span class="badge badge-light d-inline-block" [ngClass]="getRoleBadge(u.role)">{{ u.role }}</span>
                </td>
              </ng-container>
              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef>Status</th>
                <td mat-cell *matCellDef="let u">
                  <span class="badge badge-light d-inline-block" [ngClass]="u.isActive ? 'theme-green' : 'theme-red'">
                    {{ u.isActive ? 'Active' : 'Inactive' }}
                  </span>
                </td>
              </ng-container>
              <ng-container matColumnDef="created">
                <th mat-header-cell *matHeaderCellDef>Joined</th>
                <td mat-cell *matCellDef="let u" class="small text-secondary">{{ u.createdAt | date:'MMM d, yyyy' }}</td>
              </ng-container>
              <tr mat-header-row *matHeaderRowDef="cols"></tr>
              <tr mat-row *matRowDef="let row; columns: cols"></tr>
            </table>

            <mat-card-content>
              <p class="text-secondary small text-center" *ngIf="users.length === 0">No users found.</p>
            </mat-card-content>
          </mat-card>
        </div>

        <!-- Role Distribution -->
        <div class="col-12 col-lg-4">
          <mat-card class="mb-3 mb-lg-4">
            <mat-card-header>
              <div class="col mb-3">
                <h3 class="mb-1">Role Distribution</h3>
                <p class="text-secondary small">Users per role</p>
              </div>
            </mat-card-header>
            <mat-card-content>
              <div *ngFor="let r of roleStats" class="mb-3">
                <div class="d-flex justify-content-between mb-1">
                  <span class="badge badge-light d-inline-block" [ngClass]="getRoleBadge(r.role)">{{ r.role }}</span>
                  <strong>{{ r.count }}</strong>
                </div>
                <div class="progress" style="height:6px; border-radius:4px; background:#f0f0f0">
                  <div class="progress-bar" [ngClass]="getProgressClass(r.role)"
                       [style.width.%]="users.length ? (r.count / users.length) * 100 : 0"
                       style="border-radius:4px; transition: width 0.5s ease">
                  </div>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

    </div>
  `, styles: ["/* angular:styles/component:css;d9e99e1e1009d4a20169ba00152bff5bb3acc355c8c8582d29f28ecd079b3584;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/pages/app/super-admin/super-admin.component.ts */\n.badge {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.progress-bar {\n  height: 6px;\n}\n/*# sourceMappingURL=super-admin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuperAdminComponent, { className: "SuperAdminComponent", filePath: "src/app/pages/app/super-admin/super-admin.component.ts", lineNumber: 204 });
})();
export {
  SuperAdminComponent
};
//# sourceMappingURL=super-admin.component-ERY32P4L.js.map
