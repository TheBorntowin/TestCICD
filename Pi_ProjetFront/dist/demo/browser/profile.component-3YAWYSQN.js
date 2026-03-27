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
  MatTableModule
} from "./chunk-WAVP7W2J.js";
import {
  register
} from "./chunk-S5VFQUTS.js";
import {
  MatToolbarModule
} from "./chunk-SFUPPXOD.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-TCWW663Y.js";
import {
  MatMenuModule
} from "./chunk-SP2SPZAY.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
  MatListModule
} from "./chunk-ALLV6QEF.js";
import "./chunk-CWBJY2AK.js";
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import {
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
import "./chunk-XPQBAS5O.js";
import {
  FormsModule
} from "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  MatIcon,
  MatIconModule,
  NgClass,
  SlicePipe,
  TitleCasePipe
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/profile/profile.component.ts
var _c0 = (a0, a1, a2, a3) => ({ "theme-green": a0, "theme-orange": a1, "theme-violet": a2, "theme-red": a3 });
var _c1 = (a0, a1) => ({ "theme-green": a0, "theme-orange": a1 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.swiftCode;
var _forTrack2 = ($index, $item) => $item.cardNumber;
function ProfileComponent_For_269_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 11)(2, "div", 12)(3, "div", 69);
    \u0275\u0275element(4, "img", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14)(6, "h4", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 71);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 52)(11, "p", 72)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " - ");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 5);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", \u0275\u0275interpolate(experience_r1.companyImage), \u0275\u0275sanitizeUrl)("alt", \u0275\u0275interpolate(experience_r1.company));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", experience_r1.company, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", experience_r1.position, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(experience_r1.start);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", experience_r1.end, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(experience_r1.duration);
  }
}
function ProfileComponent_For_282_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 42)(2, "p", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42)(7, "p", 33);
    \u0275\u0275text(8, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42)(12, "p", 33);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 34)(15, "span", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const device_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Device #", device_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(device_r2.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(device_r2.quantity);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c1, device_r2.status === "Active", device_r2.status === "Inactive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", device_r2.status, " ");
  }
}
function ProfileComponent_For_295_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 42)(2, "p", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 42)(7, "p", 33);
    \u0275\u0275text(8, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 42)(12, "p", 33);
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 34)(15, "span", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const application_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Application #", application_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(application_r3.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(application_r3.license);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c1, application_r3.status === "Active", application_r3.status === "Inactive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", application_r3.status, " ");
  }
}
function ProfileComponent_For_310_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "p", 33);
    \u0275\u0275text(2, "Bank Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 42)(6, "p", 33);
    \u0275\u0275text(7, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 42)(11, "p", 33);
    \u0275\u0275text(12, "Account Holder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 42)(16, "p", 33);
    \u0275\u0275text(17, "Branch Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 34);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 42)(21, "p", 33);
    \u0275\u0275text(22, "Swift Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 34);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bank_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bank_r4.bank);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bank_r4.accountNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bank_r4.accountHolder);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bank_r4.branch);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(bank_r4.swiftCode);
  }
}
function ProfileComponent_th_324_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 73);
    \u0275\u0275text(1, "Salary Title");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_td_325_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 74)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.getTitle(element_r5.date));
  }
}
function ProfileComponent_th_327_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 73);
    \u0275\u0275text(1, "Date Paid");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_td_328_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, element_r7.date, "dd-MMMM-yyyy"), " ");
  }
}
function ProfileComponent_th_330_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 73);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_td_331_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 74)(1, "p", 75);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(3, 1, element_r8.amount, "USD", "symbol", "1.2-2"));
  }
}
function ProfileComponent_th_333_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 73);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_td_334_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "a", 77)(2, "mat-icon");
    \u0275\u0275text(3, "file_download");
    \u0275\u0275elementEnd()()();
  }
}
function ProfileComponent_tr_335_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 78);
  }
}
function ProfileComponent_tr_336_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 79);
  }
}
function ProfileComponent_tr_337_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 80)(1, "td");
    \u0275\u0275text(2, "No salary history found for this period.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r5.displayedColumns.length);
  }
}
function ProfileComponent_For_349_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "swiper-slide", 68)(1, "mat-card", 81)(2, "mat-card-content")(3, "div", 82)(4, "div", 12)(5, "div", 83)(6, "mat-icon", 8);
    \u0275\u0275text(7, "diamond");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 84)(9, "p", 85);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "h3", 86);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18)(14, "div", 87)(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 88)(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(21, "div", 89)(22, "div", 14)(23, "p", 90);
    \u0275\u0275text(24, "Expense");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275elementStart(27, "small", 91);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 14)(30, "p", 90);
    \u0275\u0275text(31, "Limit Remain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const card_r9 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(card_r9.cardBank);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.formatCardNumber(card_r9.cardNumber));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", card_r9.cardExpMonth, "/", \u0275\u0275pipeBind2(17, 8, card_r9.cardExpYear, -2));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(card_r9.cardHolder);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", card_r9.cardExpense, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r9.cardExpensePer);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(card_r9.cardLimit);
  }
}
register();
var ProfileComponent = class _ProfileComponent {
  constructor() {
    this.profile = signal({
      firstName: "Admin",
      lastName: "UIUX",
      email: "adminuiux.public@invcorp.com",
      designation: "Lead UIUX designer",
      education: "Higher School Study",
      degree: "B. Tech. in Information Technology",
      softSkill: "English Language",
      techSkill: "Python",
      userId: "INV-12345",
      dob: "05/15/1988",
      memberSince: "2021",
      status: "Active",
      hiringType: "Full Time",
      phoneNumber: "(555) 123-4567",
      address1: "143 Material Way",
      address2: "Suite 200",
      city: "San Francisco",
      state: "CA",
      zipCode: "94107",
      country: "US",
      paymentMethod: "Corporate Visa ending in 4321",
      linkedInUrl: "https://linkedin.com/company/adminuiux",
      instaUrl: "https://www.instagram.com/adminuiux",
      googleUrl: "https://www.instagram.com/adminuiux",
      applications: [
        {
          id: "1",
          title: "Adobe Creative Cloud",
          license: "Team",
          status: "Active"
        },
        {
          id: "2",
          title: "Slack",
          license: "Team",
          status: "Active"
        },
        {
          id: "3",
          title: "Bolt.io",
          license: "1 User",
          status: "Inactive"
        }
      ],
      devices: [
        {
          id: "1",
          title: "MacBook Pro M4",
          quantity: "1",
          status: "Active"
        }
      ],
      banks: [
        {
          bank: "Adminuiux Bank of Earth",
          accountNumber: "00-001-007-1431548631243",
          accountHolder: "AdminUIUX",
          branch: "Earth",
          swiftCode: "1159201"
        }
      ],
      experiences: [
        {
          id: "1",
          company: "InstaModule",
          companyImage: "assets/img/document3.jpg",
          start: "08/2021",
          end: "12/2023",
          duration: "2 year 4 months",
          position: "Jr. Developer"
        },
        {
          id: "2",
          company: "EnergeticInfo",
          companyImage: "assets/img/document2.jpg",
          start: "1/2024",
          end: "11/2025",
          duration: "11 months",
          position: "Sr. Developer"
        },
        {
          id: "3",
          company: "TregicMegicGo",
          companyImage: "assets/img/document1.jpg",
          start: "12/2025",
          end: "*",
          duration: "Working now",
          position: "Team Lead"
        }
      ],
      cards: [
        {
          cardBank: "Chase",
          cardHolder: "Admin UIUX",
          cardNumber: "**** **** **** 1234",
          cardExpMonth: "10",
          cardExpYear: "2027",
          cardExpense: "1520.00",
          cardExpensePer: "12%",
          cardLimit: "13580.00"
        },
        {
          cardBank: "Bank of America",
          cardHolder: "Admin UIUX",
          cardNumber: "**** **** **** 5678",
          cardExpMonth: "03",
          cardExpYear: "2025",
          cardExpense: "1524.00",
          cardExpensePer: "14%",
          cardLimit: "4582.00"
        },
        {
          cardBank: "American Express",
          cardHolder: "Admin UIUX",
          cardNumber: "**** ****** 9012",
          cardExpMonth: "07",
          cardExpYear: "2026",
          cardExpense: "1652.00",
          cardExpensePer: "11%",
          cardLimit: "5231.00"
        }
      ]
    }, ...ngDevMode ? [{ debugName: "profile" }] : (
      /* istanbul ignore next */
      []
    ));
    this.displayedColumns = ["title", "date", "amount", "actions"];
    this.dataSource = signal(this.createMockData(), ...ngDevMode ? [{ debugName: "dataSource" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  createMockData() {
    const data = [];
    const baseAmount = 6500;
    const now = /* @__PURE__ */ new Date();
    for (let i = 0; i < 10; i++) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 28);
      const amount = baseAmount + (Math.random() * 500 - 250);
      data.push({
        date,
        amount: parseFloat(amount.toFixed(2)),
        id: `paystub-${date.getFullYear()}-${date.getMonth() + 1}`
      });
    }
    return data.reverse();
  }
  getTitle(date) {
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `Salary for ${month} ${year}`;
  }
  formatCardNumber(maskedNumber) {
    return maskedNumber.replace(/\s/g, " ");
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 350, vars: 39, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "text-secondary", "small"], [1, "col-auto", "mb-3", "mb-xl-0"], ["matButton", "filled", "routerLink", "../settings"], [1, "material-icons-outlined"], [1, "container"], [1, "bg-light-theme", "mb-3", "mb-lg-4", "theme-green"], [1, "row", "gx-3"], [1, "col-auto"], [1, "bg-theme", "text-white", "avatar", "avatar-40", "rounded"], [1, "col"], [1, "mb-2"], ["routerLink", "../settings", "matButton", "elevated"], ["type", "button", "matIconButton", ""], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-lg-4", "col-xl-3"], [1, "mb-3", "mb-lg-4", "overflow-hidden"], [1, "w-100", "position-relative", "bg-theme"], [1, "height-140", "w-100", "coverimg", "z-index-0"], ["src", "assets/img/background1.jpg", "alt", "", 1, "mw-100"], [1, "pb-0"], [1, "text-center", "mb-3"], [1, "position-relative", "z-index-0", "mb-3", "mb-lg-4", 2, "margin-top", "-80px"], [1, "avatar", "avatar-140", "coverimg", "rounded-circle", "mx-auto", "z-index-1"], ["src", "assets/img/user-6.jpg", "alt", ""], [1, "align-middle"], [1, "text-secondary"], [1, "row", "gx-3", "align-items-center", "mb-3"], [1, "material-icons-outlined", "align-middle", "text-secondary"], [1, "text-secondary", "small", "mb-1"], [1, ""], [1, "badge", "badge-light", 3, "ngClass"], [1, "material-symbols-outlined", "text-secondary"], [1, "col-12", "col-lg-8", "col-xl-9"], ["label", "Personal"], [1, "mb-3", "mb-lg-4", "mt-3"], [1, "row", "gx-3", "align-items-center", "mb-3", "mb-lg-4"], [1, "material-icons-outlined", "align-middle", "text-theme"], [1, "col-12", "col-lg-12", "col-xl-4", "mb-3", "mb-lg-4"], [1, "mb-3", "mb-lg-4"], [1, "col-12", "col-lg-12", "col-xl-6"], ["src", "assets/img/l-logo.png", "alt", "", 1, "avatar", "avatar-40", "rounded"], ["matIconButton", "", "target", "_blank", 1, "text-theme", 3, "href"], ["src", "assets/img/i-logo.webp", "alt", "", 1, "avatar", "avatar-40", "rounded"], ["src", "assets/img/g-logo.png", "alt", "", 1, "avatar", "avatar-40", "rounded"], ["routerLink", "/app/subscription", "matIconButton", ""], [1, "avatar", "avatar-40", "rounded", "bg-light-theme", "text-theme"], [1, "small", "opacity-75"], [1, "col-auto", "text-end"], ["label", "Work"], [1, "activity"], ["label", "Pay"], ["mat-table", "", 1, "w-100", "responsive-table", "bg-none", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "amount"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "text-center", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["slides-per-view", "auto", "space-between", "20px", "autoplay", "true", 1, "swiper", "mb-2", "overflow-visible"], [1, "width-240"], [1, "avatar", "avatar-40", "rounded-circle", "bg-light-theme", "text-theme"], [3, "src", "alt"], [1, "text-secondary", "mb-1"], [1, "small", "mb-1"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "text-theme", "theme-green", "fw-bold"], ["mat-cell", "", 1, "text-center"], ["target", "_blank", "matIconButton", "", "color", "primary", "matTooltip", "Download Pay Stub PDF", 1, "hover:bg-indigo-100", "transition", "duration-150"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["appearance", "outlined", 1, "mb-3"], [1, "row", "align-items-center"], [1, "avatar", "avatar-30", "rounded", "text-theme"], [1, "col", "text-end"], [1, "small", "fw-bold"], [1, "my-4", "text-theme"], [1, "col-auto", "small"], [1, "col", "text-end", "small"], [1, "row", "amount-data"], [1, "opacity-50", "small", "mb-1"], [1, "text-green"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Keep your profile updated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "button", 7)(10, "mat-icon", 8);
        \u0275\u0275text(11, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Edit");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(13, "div", 9)(14, "mat-card", 10)(15, "mat-card-content")(16, "div", 11)(17, "div", 12)(18, "div", 13)(19, "mat-icon", 8);
        \u0275\u0275text(20, "call");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 14)(22, "h3", 15);
        \u0275\u0275text(23, "Add a phone number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p");
        \u0275\u0275text(25, "Ensure you never lose access to your account and receive important account updates like billing and security alerts.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "a", 16);
        \u0275\u0275text(27, "Add Phone");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 12)(29, "button", 17)(30, "mat-icon");
        \u0275\u0275text(31, "close");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(32, "div", 18)(33, "div", 19)(34, "mat-card", 20)(35, "div", 21)(36, "figure", 22);
        \u0275\u0275element(37, "img", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "mat-card-content", 24)(39, "div", 25)(40, "div", 26)(41, "figure", 27);
        \u0275\u0275element(42, "img", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "h2", 4)(44, "span", 29);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "p", 30);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 31)(49, "div", 12)(50, "mat-icon", 32);
        \u0275\u0275text(51, "mail");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 14)(53, "p", 33);
        \u0275\u0275text(54, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p", 34);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 31)(58, "div", 12)(59, "mat-icon", 32);
        \u0275\u0275text(60, "call");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 14)(62, "p", 33);
        \u0275\u0275text(63, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p", 34);
        \u0275\u0275text(65);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "div", 31)(67, "div", 12)(68, "mat-icon", 32);
        \u0275\u0275text(69, "cake");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 14)(71, "p", 33);
        \u0275\u0275text(72, "Date of Birth");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "p", 34);
        \u0275\u0275text(74);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "div", 31)(76, "div", 12)(77, "mat-icon", 32);
        \u0275\u0275text(78, "event");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 14)(80, "p", 33);
        \u0275\u0275text(81, "Duration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p", 34);
        \u0275\u0275text(83);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 31)(85, "div", 12)(86, "mat-icon", 32);
        \u0275\u0275text(87, "badge");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 14)(89, "p", 33);
        \u0275\u0275text(90, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "p", 34)(92, "span", 35);
        \u0275\u0275text(93);
        \u0275\u0275pipe(94, "titlecase");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(95, "div", 31)(96, "div", 12)(97, "span", 36);
        \u0275\u0275text(98, " nest_clock_farsight_analog ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 14)(100, "p", 33);
        \u0275\u0275text(101, "Hiring");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "p", 34);
        \u0275\u0275text(103);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(104, "div", 37)(105, "mat-tab-group")(106, "mat-tab", 38)(107, "mat-card", 39)(108, "mat-card-header")(109, "div", 40)(110, "div", 12)(111, "mat-icon", 41);
        \u0275\u0275text(112, "person");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 14)(114, "h3");
        \u0275\u0275text(115, "Professional");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(116, "mat-card-content", 24)(117, "div", 11)(118, "div", 42)(119, "p", 33);
        \u0275\u0275text(120, "Education");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "p", 34);
        \u0275\u0275text(122);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "div", 42)(124, "p", 33);
        \u0275\u0275text(125, "Highest Degree");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "p", 34);
        \u0275\u0275text(127);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "div", 42)(129, "p", 33);
        \u0275\u0275text(130, "Tech Skill");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "p", 34);
        \u0275\u0275text(132);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "div", 42)(134, "p", 33);
        \u0275\u0275text(135, "Soft Skill");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "p", 34);
        \u0275\u0275text(137);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(138, "mat-card", 39)(139, "mat-card-header")(140, "div", 40)(141, "div", 12)(142, "mat-icon", 41);
        \u0275\u0275text(143, "location_on");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "div", 14)(145, "h3");
        \u0275\u0275text(146, "Home Address");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(147, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "mat-card-content", 24)(149, "div", 11)(150, "div", 42)(151, "p", 33);
        \u0275\u0275text(152, "Address Line 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "p", 34);
        \u0275\u0275text(154);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(155, "div", 42)(156, "p", 33);
        \u0275\u0275text(157, "Address Line 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "p", 34);
        \u0275\u0275text(159);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "div", 42)(161, "p", 33);
        \u0275\u0275text(162, "City");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "p", 34);
        \u0275\u0275text(164);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(165, "div", 42)(166, "p", 33);
        \u0275\u0275text(167, "State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "p", 34);
        \u0275\u0275text(169);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(170, "div", 42)(171, "p", 33);
        \u0275\u0275text(172, "State");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "p", 34);
        \u0275\u0275text(174);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(175, "mat-card", 43)(176, "mat-card-header")(177, "div", 40)(178, "div", 12)(179, "mat-icon", 41);
        \u0275\u0275text(180, "share");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(181, "div", 14)(182, "h3");
        \u0275\u0275text(183, "Social Connect");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(184, "mat-card-content", 24)(185, "div", 11)(186, "div", 44)(187, "div", 40)(188, "div", 12);
        \u0275\u0275element(189, "img", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "div", 12)(191, "p", 33);
        \u0275\u0275text(192, "LinkedIn company page");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "p");
        \u0275\u0275text(194);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(195, "div", 12)(196, "a", 46)(197, "mat-icon");
        \u0275\u0275text(198, "arrow_outward");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(199, "div", 44)(200, "div", 40)(201, "div", 12);
        \u0275\u0275element(202, "img", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "div", 12)(204, "p", 33);
        \u0275\u0275text(205, "Instagram profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "p");
        \u0275\u0275text(207);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(208, "div", 12)(209, "a", 46)(210, "mat-icon");
        \u0275\u0275text(211, "arrow_outward");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(212, "div", 44)(213, "div", 40)(214, "div", 12);
        \u0275\u0275element(215, "img", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "div", 12)(217, "p", 33);
        \u0275\u0275text(218, "Instagram profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(219, "p");
        \u0275\u0275text(220);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(221, "div", 12)(222, "a", 46)(223, "mat-icon");
        \u0275\u0275text(224, "arrow_outward");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(225, "mat-card", 43)(226, "mat-card-content", 34)(227, "div", 40)(228, "div", 12)(229, "mat-icon", 41);
        \u0275\u0275text(230, "subscriptions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(231, "div", 14)(232, "h3", 4);
        \u0275\u0275text(233, "My Subscription");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "p", 5);
        \u0275\u0275text(235, "3/5 User Active");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(236, "div", 12)(237, "a", 49)(238, "mat-icon", 8);
        \u0275\u0275text(239, "arrow_forward");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(240, "div", 2)(241, "div", 12)(242, "div", 50)(243, "mat-icon", 8);
        \u0275\u0275text(244, "redeem");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(245, "div", 14)(246, "h4", 4);
        \u0275\u0275text(247, "MultiStore");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "p", 51);
        \u0275\u0275text(249, "Due: 26 July 2027");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(250, "div", 52)(251, "h4", 4);
        \u0275\u0275text(252, "$20.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "p", 51);
        \u0275\u0275text(254, "per month");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(255, "mat-tab", 53)(256, "mat-card", 39)(257, "mat-card-header")(258, "div", 40)(259, "div", 12)(260, "mat-icon", 41);
        \u0275\u0275text(261, "assignment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(262, "div", 14)(263, "h3");
        \u0275\u0275text(264, "Experience");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(265, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(266, "mat-card-content")(267, "ul", 54);
        \u0275\u0275repeaterCreate(268, ProfileComponent_For_269_Template, 19, 9, "li", null, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(270, "mat-card", 39)(271, "mat-card-header")(272, "div", 40)(273, "div", 12)(274, "mat-icon", 41);
        \u0275\u0275text(275, "computer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(276, "div", 14)(277, "h3");
        \u0275\u0275text(278, "Devices");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(279, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(280, "mat-card-content", 24);
        \u0275\u0275repeaterCreate(281, ProfileComponent_For_282_Template, 17, 8, "div", 11, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(283, "mat-card", 39)(284, "mat-card-header")(285, "div", 40)(286, "div", 12)(287, "mat-icon", 41);
        \u0275\u0275text(288, "airplay");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(289, "div", 14)(290, "h3");
        \u0275\u0275text(291, "Applications");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(292, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(293, "mat-card-content", 24);
        \u0275\u0275repeaterCreate(294, ProfileComponent_For_295_Template, 17, 8, "div", 11, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(296, "mat-tab", 55)(297, "mat-card", 39)(298, "mat-card-header", 43)(299, "div", 40)(300, "div", 12)(301, "mat-icon", 41);
        \u0275\u0275text(302, "account_balance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(303, "div", 14)(304, "h3");
        \u0275\u0275text(305, "Bank Information");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(306, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(307, "mat-card-content", 34)(308, "div", 11);
        \u0275\u0275repeaterCreate(309, ProfileComponent_For_310_Template, 25, 5, null, null, _forTrack1);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(311, "mat-card", 39)(312, "mat-card-header", 43)(313, "div", 40)(314, "div", 12)(315, "mat-icon", 41);
        \u0275\u0275text(316, "receipt");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(317, "div", 14)(318, "h3");
        \u0275\u0275text(319, "Salary last 10");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(320, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(321, "mat-card-content", 34)(322, "table", 56);
        \u0275\u0275elementContainerStart(323, 57);
        \u0275\u0275template(324, ProfileComponent_th_324_Template, 2, 0, "th", 58)(325, ProfileComponent_td_325_Template, 3, 1, "td", 59);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(326, 60);
        \u0275\u0275template(327, ProfileComponent_th_327_Template, 2, 0, "th", 58)(328, ProfileComponent_td_328_Template, 3, 4, "td", 59);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(329, 61);
        \u0275\u0275template(330, ProfileComponent_th_330_Template, 2, 0, "th", 58)(331, ProfileComponent_td_331_Template, 4, 6, "td", 59);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(332, 62);
        \u0275\u0275template(333, ProfileComponent_th_333_Template, 2, 0, "th", 58)(334, ProfileComponent_td_334_Template, 4, 0, "td", 63);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(335, ProfileComponent_tr_335_Template, 1, 0, "tr", 64)(336, ProfileComponent_tr_336_Template, 1, 0, "tr", 65)(337, ProfileComponent_tr_337_Template, 3, 1, "tr", 66);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(338, "mat-card", 39)(339, "mat-card-content")(340, "div", 31)(341, "div", 12)(342, "mat-icon", 41);
        \u0275\u0275text(343, "credit_card");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(344, "div", 14)(345, "h3");
        \u0275\u0275text(346, "Payment Method");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(347, "swiper-container", 67);
        \u0275\u0275repeaterCreate(348, ProfileComponent_For_349_Template, 34, 11, "swiper-slide", 68, _forTrack2);
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(45);
        \u0275\u0275textInterpolate2("", ctx.profile().firstName, " ", ctx.profile().lastName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.profile().designation);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.profile().email);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.profile().phoneNumber);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.profile().dob);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("Employee since ", ctx.profile().memberSince);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(34, _c0, ctx.profile().status === "Active", ctx.profile().status === "Inactive", ctx.profile().status === "Leave", ctx.profile().status === "Left"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(94, 32, ctx.profile().status), " ");
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.profile().hiringType);
        \u0275\u0275advance(19);
        \u0275\u0275textInterpolate(ctx.profile().education);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.profile().degree);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.profile().techSkill);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.profile().softSkill);
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate(ctx.profile().address1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.profile().address2);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.profile().city);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("", ctx.profile().state, " - ", ctx.profile().zipCode);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.profile().country);
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate(ctx.profile().linkedInUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("href", \u0275\u0275interpolate(ctx.profile().linkedInUrl), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.profile().instaUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("href", \u0275\u0275interpolate(ctx.profile().instaUrl), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.profile().googleUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("href", \u0275\u0275interpolate(ctx.profile().googleUrl), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(46);
        \u0275\u0275repeater(ctx.profile().experiences);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.profile().devices);
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.profile().applications);
        \u0275\u0275advance(15);
        \u0275\u0275repeater(ctx.profile().banks);
        \u0275\u0275advance(13);
        \u0275\u0275property("dataSource", ctx.dataSource());
        \u0275\u0275advance(13);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.profile().cards);
      }
    }, dependencies: [CommonModule, NgClass, RouterLink, FormsModule, MatListModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatTabsModule, MatTab, MatTabGroup, MatMenuModule, MatIconModule, MatIcon, MatInputModule, MatFormFieldModule, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatToolbarModule, MatButtonModule, MatButton, MatIconButton, SlicePipe, TitleCasePipe, CurrencyPipe, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [CommonModule, RouterLink, FormsModule, MatListModule, MatTableModule, MatTabsModule, MatMenuModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule, MatButtonModule], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Profile</h3>
                        <p class="text-secondary small">Keep your profile updated</p>
                    </div>

                    <div class="col-auto mb-3 mb-xl-0">
                        <button matButton="filled" routerLink="../settings"><mat-icon class="material-icons-outlined">edit</mat-icon> Edit</button>
                    </div>
                </div>
            </mat-card>
        </div>

        <!-- content -->
        <div class="container">
            <!-- alert -->
            <mat-card class="bg-light-theme mb-3 mb-lg-4 theme-green">
                <mat-card-content>
                    <div class="row gx-3">
                        <div class="col-auto">
                            <div class="bg-theme text-white avatar avatar-40 rounded">
                                <mat-icon class="material-icons-outlined">call</mat-icon>
                            </div>
                        </div>
                        <div class="col">
                            <h3 class="mb-2">Add a phone number</h3>
                            <p>Ensure you never lose access to your account and receive important account updates like billing and security alerts.</p>

                            <a routerLink="../settings" matButton="elevated">Add Phone</a>
                        </div>
                        <div class="col-auto">
                            <button type="button" matIconButton><mat-icon>close</mat-icon></button>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>

            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-lg-4 col-xl-3">
                    <!-- profile details -->
                    <mat-card class="mb-3 mb-lg-4 overflow-hidden">
                        <div class="w-100 position-relative bg-theme">
                            <figure class="height-140 w-100 coverimg z-index-0">
                                <img src="assets/img/background1.jpg" class="mw-100" alt="" />
                            </figure>
                        </div>

                        <mat-card-content class="pb-0">
                            <div class="text-center mb-3">
                                <div class="position-relative z-index-0 mb-3 mb-lg-4" style="margin-top:-80px">
                                    <figure class="avatar avatar-140 coverimg rounded-circle mx-auto z-index-1">
                                        <img src="assets/img/user-6.jpg" alt="" />
                                    </figure>
                                </div>
                                <h2 class="mb-1">
                                    <span class="align-middle">{{ profile().firstName }} {{ profile().lastName }}</span>
                                </h2>
                                <p class="text-secondary">{{ profile().designation }}</p>
                            </div>

                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined align-middle text-secondary">mail</mat-icon>
                                </div>
                                <div class="col">
                                    <p class="text-secondary small mb-1">Email</p>
                                    <p class="">{{ profile().email }}</p>
                                </div>
                            </div>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined align-middle text-secondary">call</mat-icon>
                                </div>
                                <div class="col">
                                    <p class="text-secondary small mb-1">Phone</p>
                                    <p class="">{{ profile().phoneNumber }}</p>
                                </div>
                            </div>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined align-middle text-secondary">cake</mat-icon>
                                </div>
                                <div class="col">
                                    <p class="text-secondary small mb-1">Date of Birth</p>
                                    <p class="">{{ profile().dob }}</p>
                                </div>
                            </div>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined align-middle text-secondary">event</mat-icon>
                                </div>
                                <div class="col">
                                    <p class="text-secondary small mb-1">Duration</p>
                                    <p class="">Employee since {{ profile().memberSince }}</p>
                                </div>
                            </div>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-auto">
                                    <mat-icon class="material-icons-outlined align-middle text-secondary">badge</mat-icon>
                                </div>
                                <div class="col">
                                    <p class="text-secondary small mb-1">Status</p>
                                    <p class="">
                                        <span
                                            class="badge badge-light"
                                            [ngClass]="{
                                                'theme-green': profile().status === 'Active',
                                                'theme-orange': profile().status === 'Inactive',
                                                'theme-violet': profile().status === 'Leave',
                                                'theme-red': profile().status === 'Left',
                                            }">
                                            {{ profile().status | titlecase }}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-auto">
                                    <span class="material-symbols-outlined text-secondary"> nest_clock_farsight_analog </span>
                                </div>
                                <div class="col">
                                    <p class="text-secondary small mb-1">Hiring</p>
                                    <p class="">{{ profile().hiringType }}</p>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-lg-8 col-xl-9">
                    <mat-tab-group>
                        <mat-tab label="Personal">
                            <mat-card class="mb-3 mb-lg-4 mt-3">
                                <mat-card-header>
                                    <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                        <div class="col-auto">
                                            <mat-icon class="material-icons-outlined align-middle text-theme">person</mat-icon>
                                        </div>
                                        <div class="col">
                                            <h3>Professional</h3>
                                        </div>
                                    </div>
                                </mat-card-header>
                                <mat-card-content class="pb-0">
                                    <div class="row gx-3">
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Education</p>
                                            <p class="">{{ profile().education }}</p>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Highest Degree</p>
                                            <p class="">{{ profile().degree }}</p>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Tech Skill</p>
                                            <p class="">{{ profile().techSkill }}</p>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Soft Skill</p>
                                            <p class="">{{ profile().softSkill }}</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>

                            <!-- address -->
                            <mat-card class="mb-3 mb-lg-4 mt-3">
                                <mat-card-header>
                                    <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                        <div class="col-auto">
                                            <mat-icon class="material-icons-outlined align-middle text-theme">location_on</mat-icon>
                                        </div>
                                        <div class="col">
                                            <h3>Home Address</h3>
                                        </div>
                                        <div class="col-auto"></div>
                                    </div>
                                </mat-card-header>
                                <mat-card-content class="pb-0">
                                    <div class="row gx-3">
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Address Line 1</p>
                                            <p class="">{{ profile().address1 }}</p>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Address Line 2</p>
                                            <p class="">{{ profile().address2 }}</p>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">City</p>
                                            <p class="">{{ profile().city }}</p>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">State</p>
                                            <p class="">{{ profile().state }} - {{ profile().zipCode }}</p>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">State</p>
                                            <p class="">{{ profile().country }}</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>

                            <!-- social -->
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-header>
                                    <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                        <div class="col-auto">
                                            <mat-icon class="material-icons-outlined align-middle text-theme">share</mat-icon>
                                        </div>
                                        <div class="col">
                                            <h3>Social Connect</h3>
                                        </div>
                                    </div>
                                </mat-card-header>
                                <mat-card-content class="pb-0">
                                    <div class="row gx-3">
                                        <div class="col-12 col-lg-12 col-xl-6">
                                            <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                                <div class="col-auto">
                                                    <img src="assets/img/l-logo.png" alt="" class="avatar avatar-40 rounded" />
                                                </div>
                                                <div class="col-auto">
                                                    <p class="text-secondary small mb-1">LinkedIn company page</p>
                                                    <p>{{ profile().linkedInUrl }}</p>
                                                </div>
                                                <div class="col-auto">
                                                    <a href="{{ profile().linkedInUrl }}" matIconButton target="_blank" class="text-theme"><mat-icon>arrow_outward</mat-icon></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-6">
                                            <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                                <div class="col-auto">
                                                    <img src="assets/img/i-logo.webp" alt="" class="avatar avatar-40 rounded" />
                                                </div>
                                                <div class="col-auto">
                                                    <p class="text-secondary small mb-1">Instagram profile</p>
                                                    <p>{{ profile().instaUrl }}</p>
                                                </div>
                                                <div class="col-auto">
                                                    <a href="{{ profile().instaUrl }}" matIconButton target="_blank" class="text-theme"><mat-icon>arrow_outward</mat-icon></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-6">
                                            <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                                <div class="col-auto">
                                                    <img src="assets/img/g-logo.png" alt="" class="avatar avatar-40 rounded" />
                                                </div>
                                                <div class="col-auto">
                                                    <p class="text-secondary small mb-1">Instagram profile</p>
                                                    <p>{{ profile().googleUrl }}</p>
                                                </div>
                                                <div class="col-auto">
                                                    <a href="{{ profile().googleUrl }}" matIconButton target="_blank" class="text-theme"><mat-icon>arrow_outward</mat-icon></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>

                            <!-- subscription -->
                            <mat-card class="mb-3 mb-lg-4">
                                <mat-card-content class="">
                                    <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                        <div class="col-auto">
                                            <mat-icon class="material-icons-outlined align-middle text-theme">subscriptions</mat-icon>
                                        </div>
                                        <div class="col">
                                            <h3 class="mb-1">My Subscription</h3>
                                            <p class="text-secondary small">3/5 User Active</p>
                                        </div>
                                        <div class="col-auto">
                                            <a routerLink="/app/subscription" matIconButton>
                                                <mat-icon class="material-icons-outlined">arrow_forward</mat-icon>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="row gx-3 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 rounded bg-light-theme text-theme">
                                                <mat-icon class="material-icons-outlined">redeem</mat-icon>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h4 class="mb-1">MultiStore</h4>
                                            <p class="small opacity-75">Due: 26 July 2027</p>
                                        </div>
                                        <div class="col-auto text-end">
                                            <h4 class="mb-1">$20.00</h4>
                                            <p class="small opacity-75">per month</p>
                                        </div>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                        </mat-tab>
                        <mat-tab label="Work">
                            <!-- work -->
                            <mat-card class="mb-3 mb-lg-4 mt-3">
                                <mat-card-header>
                                    <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                        <div class="col-auto">
                                            <mat-icon class="material-icons-outlined align-middle text-theme">assignment</mat-icon>
                                        </div>

                                        <div class="col">
                                            <h3>Experience</h3>
                                        </div>
                                        <div class="col-auto"></div>
                                    </div>
                                </mat-card-header>
                                <mat-card-content>
                                    <ul class="activity">
                                        @for (experience of profile().experiences; track experience.id) {
                                        <li>
                                            <div class="row gx-3">
                                                <!-- icon -->
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 rounded-circle bg-light-theme text-theme">
                                                        <img src="{{ experience.companyImage }}" alt="{{ experience.company }}" />
                                                    </div>
                                                </div>

                                                <!-- Activity Content -->
                                                <div class="col">
                                                    <h4 class="mb-1">
                                                        {{ experience.company }}
                                                    </h4>
                                                    <p class="text-secondary mb-1">
                                                        {{ experience.position }}
                                                    </p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <p class="small mb-1">
                                                        <span>{{ experience.start }}</span> - <span>{{ experience.end }} </span>
                                                    </p>
                                                    <p class="text-secondary small">{{ experience.duration }}</p>
                                                </div>
                                            </div>
                                        </li>

                                        }
                                    </ul>
                                </mat-card-content>
                            </mat-card>
                            <!-- device -->
                            <mat-card class="mb-3 mb-lg-4 mt-3">
                                <mat-card-header>
                                    <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                        <div class="col-auto">
                                            <mat-icon class="material-icons-outlined align-middle text-theme">computer</mat-icon>
                                        </div>
                                        <div class="col">
                                            <h3>Devices</h3>
                                        </div>
                                        <div class="col-auto"></div>
                                    </div>
                                </mat-card-header>
                                <mat-card-content class="pb-0">
                                    @for (device of profile().devices; track device.id) {
                                    <div class="row gx-3">
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Device #{{ device.id }}</p>
                                            <p class="">{{ device.title }}</p>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Quantity</p>
                                            <p class="">{{ device.quantity }}</p>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Status</p>
                                            <p class="">
                                                <span
                                                    class="badge badge-light"
                                                    [ngClass]="{
                                                        'theme-green': device.status === 'Active',
                                                        'theme-orange': device.status === 'Inactive', }">
                                                    {{ device.status }}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    }
                                </mat-card-content>
                            </mat-card>

                            <!-- application -->
                            <mat-card class="mb-3 mb-lg-4 mt-3">
                                <mat-card-header>
                                    <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                        <div class="col-auto">
                                            <mat-icon class="material-icons-outlined align-middle text-theme">airplay</mat-icon>
                                        </div>
                                        <div class="col">
                                            <h3>Applications</h3>
                                        </div>
                                        <div class="col-auto"></div>
                                    </div>
                                </mat-card-header>
                                <mat-card-content class="pb-0">
                                    @for (application of profile().applications; track application.id) {
                                    <div class="row gx-3">
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Application #{{ application.id }}</p>
                                            <p class="">{{ application.title }}</p>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Quantity</p>
                                            <p class="">{{ application.license }}</p>
                                        </div>
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Status</p>
                                            <p class="">
                                                <span
                                                    class="badge badge-light"
                                                    [ngClass]="{
                                                        'theme-green': application.status === 'Active',
                                                        'theme-orange': application.status === 'Inactive', }">
                                                    {{ application.status }}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    }
                                </mat-card-content>
                            </mat-card>
                        </mat-tab>
                        <mat-tab label="Pay">
                            <!-- bank details -->
                            <mat-card class="mb-3 mb-lg-4 mt-3">
                                <mat-card-header class="mb-3 mb-lg-4">
                                    <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                        <div class="col-auto">
                                            <mat-icon class="material-icons-outlined align-middle text-theme">account_balance</mat-icon>
                                        </div>
                                        <div class="col">
                                            <h3>Bank Information</h3>
                                        </div>
                                        <div class="col-auto"></div>
                                    </div>
                                </mat-card-header>
                                <mat-card-content class="">
                                    <div class="row gx-3">
                                        @for (bank of profile().banks; track bank.swiftCode) {
                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Bank Name</p>
                                            <p class="">{{ bank.bank }}</p>
                                        </div>

                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Account Number</p>
                                            <p class="">{{ bank.accountNumber }}</p>
                                        </div>

                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Account Holder</p>
                                            <p class="">{{ bank.accountHolder }}</p>
                                        </div>

                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Branch Name</p>
                                            <p class="">{{ bank.branch }}</p>
                                        </div>

                                        <div class="col-12 col-lg-12 col-xl-4 mb-3 mb-lg-4">
                                            <p class="text-secondary small mb-1">Swift Code</p>
                                            <p class="">{{ bank.swiftCode }}</p>
                                        </div>
                                        }
                                    </div>
                                </mat-card-content>
                            </mat-card>
                            <!-- salary -->
                            <mat-card class="mb-3 mb-lg-4 mt-3">
                                <mat-card-header class="mb-3 mb-lg-4">
                                    <div class="row gx-3 align-items-center mb-3 mb-lg-4">
                                        <div class="col-auto">
                                            <mat-icon class="material-icons-outlined align-middle text-theme">receipt</mat-icon>
                                        </div>
                                        <div class="col">
                                            <h3>Salary last 10</h3>
                                        </div>
                                        <div class="col-auto"></div>
                                    </div>
                                </mat-card-header>

                                <mat-card-content class="">
                                    <table mat-table [dataSource]="dataSource()" class="w-100 responsive-table bg-none">
                                        <ng-container matColumnDef="title">
                                            <th mat-header-cell *matHeaderCellDef>Salary Title</th>
                                            <td mat-cell *matCellDef="let element">
                                                <h4>{{ getTitle(element.date) }}</h4>
                                            </td>
                                        </ng-container>

                                        <ng-container matColumnDef="date">
                                            <th mat-header-cell *matHeaderCellDef>Date Paid</th>
                                            <td mat-cell *matCellDef="let element">
                                                {{ element.date | date : "dd-MMMM-yyyy" }}
                                            </td>
                                        </ng-container>

                                        <ng-container matColumnDef="amount">
                                            <th mat-header-cell *matHeaderCellDef>Amount</th>
                                            <td mat-cell *matCellDef="let element">
                                                <p class="text-theme theme-green fw-bold">{{ element.amount | currency : "USD" : "symbol" : "1.2-2" }}</p>
                                            </td>
                                        </ng-container>

                                        <ng-container matColumnDef="actions">
                                            <th mat-header-cell *matHeaderCellDef>Actions</th>
                                            <td mat-cell *matCellDef="let element" class="text-center">
                                                <a target="_blank" matIconButton color="primary" matTooltip="Download Pay Stub PDF" class="hover:bg-indigo-100 transition duration-150">
                                                    <mat-icon>file_download</mat-icon>
                                                </a>
                                            </td>
                                        </ng-container>

                                        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                                        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

                                        <tr class="mat-row" *matNoDataRow>
                                            <td [attr.colspan]="displayedColumns.length">No salary history found for this period.</td>
                                        </tr>
                                    </table>
                                </mat-card-content>
                            </mat-card>

                            <!-- payment method -->
                            <mat-card class="mb-3 mb-lg-4 mt-3">
                                <mat-card-content>
                                    <div class="row gx-3 align-items-center mb-3">
                                        <div class="col-auto">
                                            <mat-icon class="material-icons-outlined align-middle text-theme">credit_card</mat-icon>
                                        </div>
                                        <div class="col">
                                            <h3>Payment Method</h3>
                                        </div>
                                    </div>
                                    <!-- Credit cards carousel card -->
                                    <swiper-container slides-per-view="auto" space-between="20px" autoplay="true" class="swiper mb-2 overflow-visible">
                                        @for (card of profile().cards; track card.cardNumber) {
                                        <swiper-slide class="width-240">
                                            <mat-card class="mb-3" appearance="outlined">
                                                <mat-card-content>
                                                    <div class="row align-items-center">
                                                        <div class="col-auto">
                                                            <div class="avatar avatar-30 rounded text-theme">
                                                                <mat-icon class="material-icons-outlined">diamond</mat-icon>
                                                            </div>
                                                        </div>
                                                        <div class="col text-end">
                                                            <p class="small fw-bold">{{ card.cardBank }}</p>
                                                        </div>
                                                    </div>
                                                    <h3 class="my-4 text-theme">{{ formatCardNumber(card.cardNumber) }}</h3>

                                                    <div class="row gx-3 gx-lg-4">
                                                        <div class="col-auto small">
                                                            <p>{{ card.cardExpMonth }}/{{ card.cardExpYear | slice : -2 }}</p>
                                                        </div>
                                                        <div class="col text-end small">
                                                            <p>{{ card.cardHolder }}</p>
                                                        </div>
                                                    </div>
                                                </mat-card-content>
                                            </mat-card>
                                            <div class="row amount-data">
                                                <div class="col">
                                                    <p class="opacity-50 small mb-1">Expense</p>
                                                    <p>
                                                        {{ card.cardExpense }} <small class="text-green">{{ card.cardExpensePer }}</small>
                                                    </p>
                                                </div>
                                                <div class="col">
                                                    <p class="opacity-50 small mb-1">Limit Remain</p>
                                                    <p>{{ card.cardLimit }}</p>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                        }
                                    </swiper-container>
                                </mat-card-content>
                            </mat-card>
                        </mat-tab>
                    </mat-tab-group>
                </div>
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/pages/app/profile/profile.component.ts", lineNumber: 701 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=profile.component-3YAWYSQN.js.map
