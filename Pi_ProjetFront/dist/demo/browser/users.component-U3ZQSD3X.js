import {
  UserService
} from "./chunk-RKSB5HOU.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-OANSMTPI.js";
import {
  MatPaginator,
  MatPaginatorModule,
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-W2JGJKKS.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-35BPSZ5W.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-WAVP7W2J.js";
import {
  MatTooltipModule
} from "./chunk-6LUZEZUF.js";
import "./chunk-O4BMA6W6.js";
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
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
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
  AuthService
} from "./chunk-BMFQEZMK.js";
import "./chunk-DYOMXT5J.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import {
  MatError,
  MatFormField,
  MatLabel,
  MatPrefix
} from "./chunk-XPQBAS5O.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HGLJSDQ3.js";
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
  Inject,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-O4O7EFUR.js";

// src/app/users/user-dialog.component.ts
function UserDialogComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Full name is required");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Invalid email format");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_div_22_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required (min 6 characters)");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-form-field", 4)(2, "mat-label");
    \u0275\u0275text(3, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-icon", 5);
    \u0275\u0275text(5, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 14);
    \u0275\u0275template(7, UserDialogComponent_div_22_mat_error_7_Template, 2, 0, "mat-error", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.form.get("password")) == null ? null : tmp_1_0.invalid);
  }
}
function UserDialogComponent_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("value", r_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2);
  }
}
var UserDialogComponent = class _UserDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.form = new FormGroup({
      fullName: new FormControl(data.user?.fullName ?? "", Validators.required),
      email: new FormControl(data.user?.email ?? "", [Validators.required, Validators.email]),
      password: new FormControl("", data.mode === "create" ? [Validators.required, Validators.minLength(6)] : []),
      role: new FormControl(data.user?.role ?? data.availableRoles[0])
    });
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
  static {
    this.\u0275fac = function UserDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDialogComponent, selectors: [["app-user-dialog"]], decls: 36, vars: 9, consts: [["mat-dialog-title", ""], [1, "pt-2", 3, "formGroup"], [1, "row", "gx-3"], [1, "col-12", "col-lg-6"], ["appearance", "outline", 1, "w-100"], ["matPrefix", "", 1, "material-icons-outlined"], ["matInput", "", "formControlName", "fullName"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "type", "email"], ["class", "col-12 col-lg-6", 4, "ngIf"], ["formControlName", "role"], [3, "value", 4, "ngFor", "ngForOf"], ["matButton", "filled", "color", "primary", 3, "click", "disabled"], ["matButton", "", 1, "ms-auto", "theme-red", 3, "click"], ["matInput", "", "formControlName", "password", "type", "password"], [3, "value"]], template: function UserDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h4", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 1)(4, "div", 2)(5, "div", 3)(6, "mat-form-field", 4)(7, "mat-label");
        \u0275\u0275text(8, "Full Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-icon", 5);
        \u0275\u0275text(10, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "input", 6);
        \u0275\u0275template(12, UserDialogComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 3)(14, "mat-form-field", 4)(15, "mat-label");
        \u0275\u0275text(16, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-icon", 5);
        \u0275\u0275text(18, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 8);
        \u0275\u0275template(20, UserDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 7)(21, UserDialogComponent_mat_error_21_Template, 2, 0, "mat-error", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(22, UserDialogComponent_div_22_Template, 8, 1, "div", 9);
        \u0275\u0275elementStart(23, "div", 3)(24, "mat-form-field", 4)(25, "mat-label");
        \u0275\u0275text(26, "Role");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-icon", 5);
        \u0275\u0275text(28, "badge");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-select", 10);
        \u0275\u0275template(30, UserDialogComponent_mat_option_30_Template, 2, 2, "mat-option", 11);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(31, "mat-dialog-actions")(32, "button", 12);
        \u0275\u0275listener("click", function UserDialogComponent_Template_button_click_32_listener() {
          return ctx.onSave();
        });
        \u0275\u0275text(33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 13);
        \u0275\u0275listener("click", function UserDialogComponent_Template_button_click_34_listener() {
          return ctx.onCancel();
        });
        \u0275\u0275text(35, "Cancel");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.data.mode === "create" ? "Add New User" : "Edit User");
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("fullName")) == null ? null : tmp_2_0.invalid);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", (tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.hasError("required"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.hasError("email"));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data.mode === "create");
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.data.availableRoles);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.form.invalid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.mode === "create" ? "Create User" : "Save Changes", " ");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatPrefix, MatFormFieldModule, MatIconModule, MatIcon, MatButtonModule, MatButton, MatSelectModule, MatSelect, MatOption, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDialogComponent, [{
    type: Component,
    args: [{ selector: "app-user-dialog", standalone: true, imports: [CommonModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatSelectModule, ReactiveFormsModule], template: `
    <h4 mat-dialog-title>{{ data.mode === 'create' ? 'Add New User' : 'Edit User' }}</h4>
    <mat-dialog-content>
      <form [formGroup]="form" class="pt-2">
        <div class="row gx-3">
          <div class="col-12 col-lg-6">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Full Name</mat-label>
              <mat-icon matPrefix class="material-icons-outlined">person</mat-icon>
              <input matInput formControlName="fullName" />
              <mat-error *ngIf="form.get('fullName')?.invalid">Full name is required</mat-error>
            </mat-form-field>
          </div>
          <div class="col-12 col-lg-6">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Email</mat-label>
              <mat-icon matPrefix class="material-icons-outlined">email</mat-icon>
              <input matInput formControlName="email" type="email" />
              <mat-error *ngIf="form.get('email')?.hasError('required')">Email is required</mat-error>
              <mat-error *ngIf="form.get('email')?.hasError('email')">Invalid email format</mat-error>
            </mat-form-field>
          </div>
          <div class="col-12 col-lg-6" *ngIf="data.mode === 'create'">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Password</mat-label>
              <mat-icon matPrefix class="material-icons-outlined">lock</mat-icon>
              <input matInput formControlName="password" type="password" />
              <mat-error *ngIf="form.get('password')?.invalid">Password is required (min 6 characters)</mat-error>
            </mat-form-field>
          </div>
          <div class="col-12 col-lg-6">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Role</mat-label>
              <mat-icon matPrefix class="material-icons-outlined">badge</mat-icon>
              <mat-select formControlName="role">
                <mat-option *ngFor="let r of data.availableRoles" [value]="r">{{ r }}</mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </div>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button matButton="filled" color="primary" [disabled]="form.invalid" (click)="onSave()">
        {{ data.mode === 'create' ? 'Create User' : 'Save Changes' }}
      </button>
      <button matButton (click)="onCancel()" class="ms-auto theme-red">Cancel</button>
    </mat-dialog-actions>
  ` }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDialogComponent, { className: "UserDialogComponent", filePath: "src/app/users/user-dialog.component.ts", lineNumber: 73 });
})();

// src/app/users/users.component.ts
var _c0 = () => [5, 10, 25];
function UsersComponent_th_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "User");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_td_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 47)(1, "div", 4)(2, "div", 15)(3, "div", 48)(4, "mat-icon", 10);
    \u0275\u0275text(5, "person");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 17)(7, "h4", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(user_r1.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.email);
  }
}
function UsersComponent_th_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Role");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_td_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.getRoleBadgeClass(user_r2.role));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r2.role, " ");
  }
}
function UsersComponent_th_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_td_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50)(1, "span", 51)(2, "mat-icon", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", user_r4.isActive ? "theme-green" : "theme-red");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r4.isActive ? "check_circle" : "cancel", " ");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r4.isActive ? "Active" : "Inactive", " ");
  }
}
function UsersComponent_th_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 46);
    \u0275\u0275text(1, "Created");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_td_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50)(1, "p", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, user_r5.createdAt, "MMM d, yyyy"));
  }
}
function UsersComponent_th_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 54);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_td_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 50)(1, "button", 55)(2, "mat-icon");
    \u0275\u0275text(3, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 1)(6, "button", 56);
    \u0275\u0275listener("click", function UsersComponent_td_105_Template_button_click_6_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditDialog(user_r7));
    });
    \u0275\u0275elementStart(7, "mat-icon", 10);
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 56);
    \u0275\u0275listener("click", function UsersComponent_td_105_Template_button_click_11_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleStatus(user_r7));
    });
    \u0275\u0275elementStart(12, "mat-icon", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 57);
    \u0275\u0275listener("click", function UsersComponent_td_105_Template_button_click_16_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteUser(user_r7));
    });
    \u0275\u0275elementStart(17, "mat-icon", 58);
    \u0275\u0275text(18, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const menu_r8 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(user_r7.isActive ? "block" : "check_circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.isActive ? "Deactivate" : "Activate");
  }
}
function UsersComponent_tr_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 59);
  }
}
function UsersComponent_tr_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 60);
  }
}
function UsersComponent_tr_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 61)(1, "td", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const searchInput_r9 = \u0275\u0275reference(89);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.displayedColumns.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' No users matching "', searchInput_r9.value, '" ');
  }
}
var UsersComponent = class _UsersComponent {
  constructor() {
    this.userService = inject(UserService);
    this.authService = inject(AuthService);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
    this.dataSource = new MatTableDataSource([]);
    this.displayedColumns = ["fullName", "role", "isActive", "createdAt", "actions"];
  }
  get activeCount() {
    return this.dataSource.data.filter((u) => u.isActive).length;
  }
  get adminCount() {
    return this.dataSource.data.filter((u) => u.role === "ADMIN" || u.role === "SUPER_ADMIN").length;
  }
  // Admin cannot assign ADMIN role — only MANAGER, EMPLOYEE, VIEWER
  get availableRoles() {
    const currentRole = this.authService.currentUser()?.role;
    if (currentRole === "SUPER_ADMIN") {
      return ["SUPER_ADMIN", "ADMIN", "MANAGER", "EMPLOYEE", "TUTOR", "VIEWER"];
    }
    return ["MANAGER", "EMPLOYEE", "TUTOR", "VIEWER"];
  }
  ngOnInit() {
    this.loadUsers();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data, filter) => `${data.fullName} ${data.email} ${data.role}`.toLowerCase().includes(filter);
  }
  loadUsers() {
    this.userService.getAll().subscribe({
      next: (data) => this.dataSource.data = data,
      error: () => this.notify("Failed to load users", true)
    });
  }
  applyFilter(event) {
    const value = event.target.value.trim().toLowerCase();
    this.dataSource.filter = value;
    if (this.dataSource.paginator)
      this.dataSource.paginator.firstPage();
  }
  openAddDialog() {
    const ref = this.dialog.open(UserDialogComponent, {
      width: "560px",
      autoFocus: false,
      data: { mode: "create", availableRoles: this.availableRoles }
    });
    ref.afterClosed().subscribe((result) => {
      if (!result)
        return;
      this.userService.create({ fullName: result.fullName, email: result.email, password: result.password, role: result.role }).subscribe({
        next: (created) => {
          this.dataSource.data = [...this.dataSource.data, created];
          this.notify("User created successfully");
        },
        error: (err) => this.notify(err.error?.message || "Failed to create user", true)
      });
    });
  }
  openEditDialog(user) {
    const ref = this.dialog.open(UserDialogComponent, {
      width: "560px",
      autoFocus: false,
      data: { mode: "edit", user, availableRoles: this.availableRoles }
    });
    ref.afterClosed().subscribe((result) => {
      if (!result)
        return;
      this.userService.update(user.id, { fullName: result.fullName, email: result.email }).subscribe({
        next: (updated) => {
          if (result.role !== user.role) {
            this.userService.changeRole(updated.id, result.role).subscribe({
              next: (final) => {
                this.replaceUser(final);
                this.notify("User updated successfully");
              },
              error: () => this.notify("Failed to update role", true)
            });
          } else {
            this.replaceUser(updated);
            this.notify("User updated successfully");
          }
        },
        error: () => this.notify("Failed to update user", true)
      });
    });
  }
  toggleStatus(user) {
    this.userService.changeStatus(user.id, !user.isActive).subscribe({
      next: (updated) => {
        this.replaceUser(updated);
        this.notify(`User ${updated.isActive ? "activated" : "deactivated"}`);
      },
      error: () => this.notify("Failed to change status", true)
    });
  }
  deleteUser(user) {
    if (!confirm(`Delete "${user.fullName}"? This action cannot be undone.`))
      return;
    this.userService.delete(user.id).subscribe({
      next: () => {
        this.dataSource.data = this.dataSource.data.filter((u) => u.id !== user.id);
        this.notify("User deleted");
      },
      error: () => this.notify("Failed to delete user", true)
    });
  }
  getRoleBadgeClass(role) {
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
  replaceUser(updated) {
    this.dataSource.data = this.dataSource.data.map((u) => u.id === updated.id ? updated : u);
  }
  notify(message, isError = false) {
    this.snackBar.open(message, "Close", {
      duration: 3e3,
      panelClass: isError ? ["snack-error"] : ["snack-success"]
    });
  }
  static {
    this.\u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], viewQuery: function UsersComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5)(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 111, vars: 9, consts: [["searchInput", ""], ["menu", "matMenu"], [1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "col-auto", "mb-3", "mb-xl-0"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "material-icons-outlined"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-md-6", "col-lg-3"], [1, "mb-3", "mb-lg-4"], [1, "col-auto"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-blue"], [1, "col"], [1, "small", "text-secondary", "mb-1"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-green"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-red"], [1, "avatar", "avatar-50", "bg-light-theme", "text-theme", "rounded", "theme-yellow"], [1, "col-12"], [1, "w-100"], [1, "col-auto", "mb-3"], [1, "avatar", "avatar-40", "text-theme", "rounded"], [1, "col", "mb-3"], [1, "text-secondary", "small"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-3", "mb-3"], ["appearance", "outline", 1, "w-100", "inline-small"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search users...", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "bg-none", "mb-3", "responsive-table", 3, "dataSource"], ["matColumnDef", "fullName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "py-2", 4, "matCellDef"], ["matColumnDef", "role"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "isActive"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page", 1, "bg-none", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "py-2"], [1, "avatar", "avatar-40", "rounded-circle", "bg-light-theme", "text-theme", "d-flex", "align-items-center", "justify-content-center"], [1, "mb-0"], ["mat-cell", ""], [1, "badge", "badge-light", "d-inline-block", 3, "ngClass"], [1, "text-sm", "align-middle", 2, "font-size", "14px", "height", "14px", "width", "14px"], [1, "mb-0", "small"], ["mat-header-cell", ""], ["mat-icon-button", "", "aria-label", "Actions", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 1, "text-danger", 3, "click"], ["color", "warn", 1, "material-icons-outlined"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell", "text-center", "py-4"]], template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "mat-card", 3)(2, "div", 4)(3, "div", 5)(4, "h3", 6);
        \u0275\u0275text(5, "User Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 7);
        \u0275\u0275text(7, "Manage your team members and their roles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8)(9, "button", 9);
        \u0275\u0275listener("click", function UsersComponent_Template_button_click_9_listener() {
          return ctx.openAddDialog();
        });
        \u0275\u0275elementStart(10, "mat-icon", 10);
        \u0275\u0275text(11, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Add User ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "mat-card", 14)(17, "mat-card-content")(18, "div", 4)(19, "div", 15)(20, "div", 16)(21, "mat-icon", 10);
        \u0275\u0275text(22, "group");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 17)(24, "p", 18);
        \u0275\u0275text(25, "Total Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "h3");
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(28, "div", 13)(29, "mat-card", 14)(30, "mat-card-content")(31, "div", 4)(32, "div", 15)(33, "div", 19)(34, "mat-icon", 10);
        \u0275\u0275text(35, "check_circle");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 17)(37, "p", 18);
        \u0275\u0275text(38, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h3");
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(41, "div", 13)(42, "mat-card", 14)(43, "mat-card-content")(44, "div", 4)(45, "div", 15)(46, "div", 20)(47, "mat-icon", 10);
        \u0275\u0275text(48, "block");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 17)(50, "p", 18);
        \u0275\u0275text(51, "Inactive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "h3");
        \u0275\u0275text(53);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(54, "div", 13)(55, "mat-card", 14)(56, "mat-card-content")(57, "div", 4)(58, "div", 15)(59, "div", 21)(60, "mat-icon", 10);
        \u0275\u0275text(61, "admin_panel_settings");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "div", 17)(63, "p", 18);
        \u0275\u0275text(64, "Admins");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "h3");
        \u0275\u0275text(66);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(67, "div", 12)(68, "div", 22)(69, "mat-card", 14)(70, "mat-card-header")(71, "div", 23)(72, "div", 4)(73, "div", 24)(74, "div", 25)(75, "mat-icon", 10);
        \u0275\u0275text(76, "manage_accounts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "div", 26)(78, "h3", 6);
        \u0275\u0275text(79, "All Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "p", 27);
        \u0275\u0275text(81, "Team members & access control");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div", 28)(83, "mat-form-field", 29)(84, "mat-label");
        \u0275\u0275text(85, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "mat-icon", 30);
        \u0275\u0275text(87, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "input", 31, 0);
        \u0275\u0275listener("keyup", function UsersComponent_Template_input_keyup_88_listener($event) {
          return ctx.applyFilter($event);
        });
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(90, "table", 32);
        \u0275\u0275elementContainerStart(91, 33);
        \u0275\u0275template(92, UsersComponent_th_92_Template, 2, 0, "th", 34)(93, UsersComponent_td_93_Template, 11, 2, "td", 35);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(94, 36);
        \u0275\u0275template(95, UsersComponent_th_95_Template, 2, 0, "th", 34)(96, UsersComponent_td_96_Template, 3, 2, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(97, 38);
        \u0275\u0275template(98, UsersComponent_th_98_Template, 2, 0, "th", 34)(99, UsersComponent_td_99_Template, 5, 3, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(100, 39);
        \u0275\u0275template(101, UsersComponent_th_101_Template, 2, 0, "th", 34)(102, UsersComponent_td_102_Template, 4, 4, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(103, 40);
        \u0275\u0275template(104, UsersComponent_th_104_Template, 2, 0, "th", 41)(105, UsersComponent_td_105_Template, 21, 3, "td", 37);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(106, UsersComponent_tr_106_Template, 1, 0, "tr", 42)(107, UsersComponent_tr_107_Template, 1, 0, "tr", 43)(108, UsersComponent_tr_108_Template, 3, 2, "tr", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "mat-card-content");
        \u0275\u0275element(110, "mat-paginator", 45);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(27);
        \u0275\u0275textInterpolate(ctx.dataSource.data.length);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.activeCount);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.dataSource.data.length - ctx.activeCount);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate(ctx.adminCount);
        \u0275\u0275advance(24);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(16);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(3);
        \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(8, _c0));
      }
    }, dependencies: [CommonModule, NgClass, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatIconModule, MatIcon, MatButtonModule, MatButton, MatIconButton, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatPaginatorModule, MatPaginator, MatSortModule, MatSort, MatSortHeader, MatDialogModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatTooltipModule, MatChipsModule, MatSnackBarModule, DatePipe], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=users.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [
      CommonModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatDialogModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      MatChipsModule,
      MatSnackBarModule
    ], template: `
    <div class="container-fluid fade-in mb-3 mb-lg-4">
      <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
        <div class="row gx-3 align-items-center">
          <div class="col mb-3 mb-xl-0 py-1">
            <h3 class="mb-1">User Management</h3>
            <p class="small opacity-50">Manage your team members and their roles</p>
          </div>
          <div class="col-auto mb-3 mb-xl-0">
            <button mat-flat-button color="primary" (click)="openAddDialog()">
              <mat-icon class="material-icons-outlined">person_add</mat-icon>
              Add User
            </button>
          </div>
        </div>
      </mat-card>
    </div>

    <div class="container fade-in">
      <!-- Stats cards -->
      <div class="row gx-3 gx-lg-4">
        <div class="col-12 col-md-6 col-lg-3">
          <mat-card class="mb-3 mb-lg-4">
            <mat-card-content>
              <div class="row gx-3 align-items-center">
                <div class="col-auto">
                  <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-blue">
                    <mat-icon class="material-icons-outlined">group</mat-icon>
                  </div>
                </div>
                <div class="col">
                  <p class="small text-secondary mb-1">Total Users</p>
                  <h3>{{ dataSource.data.length }}</h3>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <mat-card class="mb-3 mb-lg-4">
            <mat-card-content>
              <div class="row gx-3 align-items-center">
                <div class="col-auto">
                  <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-green">
                    <mat-icon class="material-icons-outlined">check_circle</mat-icon>
                  </div>
                </div>
                <div class="col">
                  <p class="small text-secondary mb-1">Active</p>
                  <h3>{{ activeCount }}</h3>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <mat-card class="mb-3 mb-lg-4">
            <mat-card-content>
              <div class="row gx-3 align-items-center">
                <div class="col-auto">
                  <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-red">
                    <mat-icon class="material-icons-outlined">block</mat-icon>
                  </div>
                </div>
                <div class="col">
                  <p class="small text-secondary mb-1">Inactive</p>
                  <h3>{{ dataSource.data.length - activeCount }}</h3>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <mat-card class="mb-3 mb-lg-4">
            <mat-card-content>
              <div class="row gx-3 align-items-center">
                <div class="col-auto">
                  <div class="avatar avatar-50 bg-light-theme text-theme rounded theme-yellow">
                    <mat-icon class="material-icons-outlined">admin_panel_settings</mat-icon>
                  </div>
                </div>
                <div class="col">
                  <p class="small text-secondary mb-1">Admins</p>
                  <h3>{{ adminCount }}</h3>
                </div>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>

      <!-- Table card -->
      <div class="row gx-3 gx-lg-4">
        <div class="col-12">
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
                    <h3 class="mb-1">All Users</h3>
                    <p class="text-secondary small">Team members & access control</p>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                    <mat-form-field appearance="outline" class="w-100 inline-small">
                      <mat-label>Search</mat-label>
                      <mat-icon matPrefix>search</mat-icon>
                      <input matInput placeholder="Search users..." (keyup)="applyFilter($event)" #searchInput />
                    </mat-form-field>
                  </div>
                </div>
              </div>
            </mat-card-header>

            <table mat-table [dataSource]="dataSource" matSort class="bg-none mb-3 responsive-table">

              <!-- User Info Column -->
              <ng-container matColumnDef="fullName">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>User</th>
                <td mat-cell *matCellDef="let user" class="py-2">
                  <div class="row gx-3 align-items-center">
                    <div class="col-auto">
                      <div class="avatar avatar-40 rounded-circle bg-light-theme text-theme d-flex align-items-center justify-content-center">
                        <mat-icon class="material-icons-outlined">person</mat-icon>
                      </div>
                    </div>
                    <div class="col">
                      <h4 class="mb-0">{{ user.fullName }}</h4>
                      <p class="text-secondary small">{{ user.email }}</p>
                    </div>
                  </div>
                </td>
              </ng-container>

              <!-- Role Column -->
              <ng-container matColumnDef="role">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Role</th>
                <td mat-cell *matCellDef="let user">
                  <span class="badge badge-light d-inline-block" [ngClass]="getRoleBadgeClass(user.role)">
                    {{ user.role }}
                  </span>
                </td>
              </ng-container>

              <!-- Status Column -->
              <ng-container matColumnDef="isActive">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>
                <td mat-cell *matCellDef="let user">
                  <span class="badge badge-light d-inline-block" [ngClass]="user.isActive ? 'theme-green' : 'theme-red'">
                    <mat-icon class="text-sm align-middle" style="font-size:14px;height:14px;width:14px">
                      {{ user.isActive ? 'check_circle' : 'cancel' }}
                    </mat-icon>
                    {{ user.isActive ? 'Active' : 'Inactive' }}
                  </span>
                </td>
              </ng-container>

              <!-- Created Column -->
              <ng-container matColumnDef="createdAt">
                <th mat-header-cell *matHeaderCellDef mat-sort-header>Created</th>
                <td mat-cell *matCellDef="let user">
                  <p class="mb-0 small">{{ user.createdAt | date: 'MMM d, yyyy' }}</p>
                </td>
              </ng-container>

              <!-- Actions Column -->
              <ng-container matColumnDef="actions">
                <th mat-header-cell *matHeaderCellDef>Actions</th>
                <td mat-cell *matCellDef="let user">
                  <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Actions">
                    <mat-icon>more_vert</mat-icon>
                  </button>
                  <mat-menu #menu="matMenu">
                    <button mat-menu-item (click)="openEditDialog(user)">
                      <mat-icon class="material-icons-outlined">edit</mat-icon>
                      <span>Edit</span>
                    </button>
                    <button mat-menu-item (click)="toggleStatus(user)">
                      <mat-icon class="material-icons-outlined">{{ user.isActive ? 'block' : 'check_circle' }}</mat-icon>
                      <span>{{ user.isActive ? 'Deactivate' : 'Activate' }}</span>
                    </button>
                    <button mat-menu-item (click)="deleteUser(user)" class="text-danger">
                      <mat-icon class="material-icons-outlined" color="warn">delete</mat-icon>
                      <span>Delete</span>
                    </button>
                  </mat-menu>
                </td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
              <tr class="mat-row" *matNoDataRow>
                <td class="mat-cell text-center py-4" [attr.colspan]="displayedColumns.length">
                  No users matching "{{ searchInput.value }}"
                </td>
              </tr>
            </table>

            <mat-card-content>
              <mat-paginator [pageSizeOptions]="[5, 10, 25]" aria-label="Select page" class="bg-none"></mat-paginator>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;6b4f6d8ef6ccad8fb27c42219016a9a8ee8144b1cf1b8a3ab8aa73559d8ac346;C:/Users/msi/Downloads/billing-complete-v8/billing-project/Pi_ProjetFront/src/app/users/users.component.ts */\n.badge {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=users.component.css.map */\n"] }]
  }], null, { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }], sort: [{
    type: ViewChild,
    args: [MatSort]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/users/users.component.ts", lineNumber: 243 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=users.component-U3ZQSD3X.js.map
