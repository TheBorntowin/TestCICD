import {
  IncrementorComponent
} from "./chunk-5BURJXX5.js";
import {
  MatBadge,
  MatBadgeModule
} from "./chunk-GNK5HPR7.js";
import {
  MatChipsModule
} from "./chunk-5G2FMPWG.js";
import {
  MatListModule
} from "./chunk-ALLV6QEF.js";
import {
  MatDivider
} from "./chunk-CWBJY2AK.js";
import "./chunk-4HZNFH22.js";
import "./chunk-2GCDXJIV.js";
import "./chunk-NHVW6DX5.js";
import "./chunk-45QHUHCH.js";
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
  MatIconButton,
  MatMiniFabButton
} from "./chunk-ZLA4QS3A.js";
import {
  RouterLink
} from "./chunk-DYOMXT5J.js";
import "./chunk-6WJUNQHU.js";
import "./chunk-XPQBAS5O.js";
import "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/ecommerce/cart.component.ts
var CartComponent = class _CartComponent {
  ngOnInit() {
  }
  static {
    this.\u0275fac = function CartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 290, vars: 0, consts: [[1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "col-auto", "mb-3", "mb-xl-0"], ["matIconButton", "filled", "routerLink", "/app/cart", "matBadge", "3", "matBadgeColor", "warn"], [1, "material-icons-outlined"], ["matIconButton", "", "routerLink", "../checkout"], [1, "container", "fade-in"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-md"], [1, "mb-3", "mb-lg-4"], [1, "col", "col-md"], [1, "mb-2"], [1, "text-secondary"], [1, "col-auto"], ["matIconButton", ""], [1, "mb-3"], [1, "height-120", "w-100", "rounded", "coverimg", "mb-3", "position-relative"], ["src", "assets/img/product1.jpg", "alt", ""], [1, "position-absolute", "top-0", "end-0", "m-2", "z-index-1"], ["matMiniFab", "", 1, "text-theme", "theme-red"], [1, "material-symbols-outlined", "align-middle"], [1, "col", "col-lg", "col-xl"], [1, "row", "gx-3"], [1, "col-12", "col-md", "mb-3", "mb-md-0"], [1, "text-secondary", "small"], [1, "fw-bold", "mb-2"], [1, "text-secondary", "fw-normal"], [1, "badge", "badge-light", "theme-green", "align-middle"], [1, "text-theme", "theme-yellow", "align-middle"], [1, "ms-1", "align-middle", "text-secondary"], [1, "col-12", "col-md-auto", "position-relative"], ["matButton", "", 1, "theme-red"], ["matButton", ""], ["src", "assets/img/product3.jpg", "alt", ""], [1, "col-12", "col-md-4"], [1, "row", "gx-3", "mb-3"], [1, "col", "text-secondary"], [1, "col-auto", "fw-bold"], [1, "col-auto", "fw-bold", "text-theme", "theme-green"], [1, "text-theme", "theme-green"], ["matButton", "filled", "routerLink", "../checkout", 1, "w-100"], [1, "text-center", "py-3", "mb-3", "mb-lg-4"], [1, "col-12", "col-lg-6", "col-xxl-4"], [1, "h-100", "width-100", "rounded", "coverimg"], [1, "col"], [1, "material-icons-outlined", "text-sm", "text-theme", "theme-yellow"], [1, "row", "gx-1"], ["matIconButton", "", 1, "text-theme", "theme-red"], [1, "material-symbols-outlined"], ["matIconButton", "filled"], ["src", "assets/img/product2.jpg", "alt", ""]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
        \u0275\u0275text(5, "Your Cart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Finalize and review summary...");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "button", 7)(10, "mat-icon", 8);
        \u0275\u0275text(11, "shopping_bag");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 6)(13, "button", 9)(14, "mat-icon", 8);
        \u0275\u0275text(15, "credit_card");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "mat-card", 13)(20, "mat-card-content")(21, "div", 11)(22, "div", 14)(23, "h4", 15);
        \u0275\u0275text(24, "Delivery Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 16);
        \u0275\u0275text(26, "2000, Las Vegas Blvd S, The Venetian Resort, NV, Las Vegas, 89104");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 17)(28, "button", 18)(29, "mat-icon", 8);
        \u0275\u0275text(30, "edit_note");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(31, "mat-card", 19)(32, "mat-card-content")(33, "div", 11)(34, "div", 17)(35, "div", 20);
        \u0275\u0275element(36, "img", 21);
        \u0275\u0275elementStart(37, "div", 22)(38, "button", 23)(39, "span", 24);
        \u0275\u0275text(40, " favorite ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(41, "app-incrementor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 25)(43, "div", 26)(44, "div", 27)(45, "h4", 15);
        \u0275\u0275text(46, "Mosaic Textured Bedsheets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "p", 28);
        \u0275\u0275text(48, "Seller: Avnit Suppliers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h3", 29);
        \u0275\u0275text(50, "$ 150.00 ");
        \u0275\u0275elementStart(51, "s", 30);
        \u0275\u0275text(52, "$ 180.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "p")(54, "span", 31);
        \u0275\u0275text(55, "Flat $10.00 OFF");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 12)(57, "p", 15)(58, "mat-icon", 32);
        \u0275\u0275text(59, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "mat-icon", 32);
        \u0275\u0275text(61, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "mat-icon", 32);
        \u0275\u0275text(63, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "mat-icon", 32);
        \u0275\u0275text(65, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "mat-icon", 32);
        \u0275\u0275text(67, "star");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "span", 33);
        \u0275\u0275text(69, "4.2 - 165 Review");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(70, "div", 34)(71, "button", 35)(72, "mat-icon");
        \u0275\u0275text(73, "delete");
        \u0275\u0275elementEnd();
        \u0275\u0275text(74, " Remove");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "button", 36)(76, "mat-icon");
        \u0275\u0275text(77, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275text(78, " Save for later");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(79, "mat-card", 19)(80, "mat-card-content")(81, "div", 11)(82, "div", 17)(83, "div", 20);
        \u0275\u0275element(84, "img", 37);
        \u0275\u0275elementStart(85, "div", 22)(86, "button", 23)(87, "span", 24);
        \u0275\u0275text(88, " favorite ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(89, "app-incrementor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 25)(91, "div", 26)(92, "div", 27)(93, "h4", 15);
        \u0275\u0275text(94, "Mosaic Textured Bedsheets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "p", 28);
        \u0275\u0275text(96, "Seller: Avnit Suppliers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "h3", 29);
        \u0275\u0275text(98, "$ 150.00 ");
        \u0275\u0275elementStart(99, "s", 30);
        \u0275\u0275text(100, "$ 180.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "p")(102, "span", 31);
        \u0275\u0275text(103, "Flat $10.00 OFF");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "div", 12)(105, "p", 15)(106, "mat-icon", 32);
        \u0275\u0275text(107, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "mat-icon", 32);
        \u0275\u0275text(109, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "mat-icon", 32);
        \u0275\u0275text(111, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "mat-icon", 32);
        \u0275\u0275text(113, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "mat-icon", 32);
        \u0275\u0275text(115, "star");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "span", 33);
        \u0275\u0275text(117, "4.2 - 165 Review");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(118, "div", 34)(119, "button", 35)(120, "mat-icon");
        \u0275\u0275text(121, "delete");
        \u0275\u0275elementEnd();
        \u0275\u0275text(122, " Remove");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "button", 36)(124, "mat-icon");
        \u0275\u0275text(125, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275text(126, " Save for later");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(127, "div", 38)(128, "mat-card")(129, "mat-card-header", 19)(130, "h4");
        \u0275\u0275text(131, "Price Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "mat-card-content")(133, "div", 39)(134, "div", 40);
        \u0275\u0275text(135, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 41);
        \u0275\u0275text(137, "$ 450.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(138, "div", 39)(139, "div", 40);
        \u0275\u0275text(140, "Discount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "div", 42);
        \u0275\u0275text(142, "- $ 100.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "div", 39)(144, "div", 40);
        \u0275\u0275text(145, "Coupon/Bank Offer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "div", 42);
        \u0275\u0275text(147, "- $ 50.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "div", 39)(149, "div", 40);
        \u0275\u0275text(150, "Platform Fee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "div", 41);
        \u0275\u0275text(152, "$ 0.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(153, "mat-divider", 19);
        \u0275\u0275elementStart(154, "div", 39)(155, "div", 40)(156, "h3");
        \u0275\u0275text(157, "Total");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div", 17)(159, "h3");
        \u0275\u0275text(160, "$ 300.00");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(161, "mat-divider", 19);
        \u0275\u0275elementStart(162, "h4", 43);
        \u0275\u0275text(163, "You will save $150 on this order");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "button", 44)(165, "mat-icon", 8);
        \u0275\u0275text(166, "credit_card");
        \u0275\u0275elementEnd();
        \u0275\u0275text(167, " Checkout");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(168, "div", 45)(169, "h2", 15);
        \u0275\u0275text(170, " You have few items,");
        \u0275\u0275element(171, "br");
        \u0275\u0275text(172, " saved for later ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "p", 16);
        \u0275\u0275text(174, "Add product to cart for checkout.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(175, "div", 11)(176, "div", 46)(177, "mat-card", 13)(178, "mat-card-content")(179, "div", 26)(180, "div", 17)(181, "div", 47);
        \u0275\u0275element(182, "img", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(183, "div", 48)(184, "h4", 19);
        \u0275\u0275text(185, "Mosaic Textured Bedsheets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "h3", 29);
        \u0275\u0275text(187, "$ 152.00 ");
        \u0275\u0275elementStart(188, "s", 30);
        \u0275\u0275text(189, "$ 180.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(190, "p")(191, "mat-icon", 49);
        \u0275\u0275text(192, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "mat-icon", 49);
        \u0275\u0275text(194, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "mat-icon", 49);
        \u0275\u0275text(196, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "mat-icon", 49);
        \u0275\u0275text(198, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "mat-icon", 49);
        \u0275\u0275text(200, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "span", 16);
        \u0275\u0275text(202, " 152 ratings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(203, "div", 50)(204, "div", 48)(205, "button", 51)(206, "span", 52);
        \u0275\u0275text(207, " favorite ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(208, "div", 17);
        \u0275\u0275element(209, "app-incrementor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(210, "div", 17)(211, "button", 53)(212, "mat-icon", 8);
        \u0275\u0275text(213, "shopping_bag");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(214, "div", 46)(215, "mat-card", 13)(216, "mat-card-content")(217, "div", 26)(218, "div", 17)(219, "div", 47);
        \u0275\u0275element(220, "img", 54);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(221, "div", 48)(222, "h4", 19);
        \u0275\u0275text(223, "Apparels that shines");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "h3", 29);
        \u0275\u0275text(225, "$ 80.00 ");
        \u0275\u0275elementStart(226, "s", 30);
        \u0275\u0275text(227, "$ 90.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(228, "p")(229, "mat-icon", 49);
        \u0275\u0275text(230, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "mat-icon", 49);
        \u0275\u0275text(232, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(233, "mat-icon", 49);
        \u0275\u0275text(234, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(235, "mat-icon", 49);
        \u0275\u0275text(236, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "mat-icon", 49);
        \u0275\u0275text(238, "star_half");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "span", 16);
        \u0275\u0275text(240, " 35 ratings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(241, "div", 50)(242, "div", 48)(243, "button", 51)(244, "span", 52);
        \u0275\u0275text(245, " favorite ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(246, "div", 17);
        \u0275\u0275element(247, "app-incrementor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "div", 17)(249, "button", 53)(250, "mat-icon", 8);
        \u0275\u0275text(251, "shopping_bag");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(252, "div", 46)(253, "mat-card", 13)(254, "mat-card-content")(255, "div", 26)(256, "div", 17)(257, "div", 47);
        \u0275\u0275element(258, "img", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(259, "div", 48)(260, "h4", 19);
        \u0275\u0275text(261, "Lovely shades");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(262, "h3", 29);
        \u0275\u0275text(263, "$ 198.00 ");
        \u0275\u0275elementStart(264, "s", 30);
        \u0275\u0275text(265, "$ 220.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(266, "p")(267, "mat-icon", 49);
        \u0275\u0275text(268, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(269, "mat-icon", 49);
        \u0275\u0275text(270, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(271, "mat-icon", 49);
        \u0275\u0275text(272, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(273, "mat-icon", 49);
        \u0275\u0275text(274, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(275, "mat-icon", 49);
        \u0275\u0275text(276, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(277, "span", 16);
        \u0275\u0275text(278, " 124 ratings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(279, "div", 50)(280, "div", 48)(281, "button", 51)(282, "mat-icon");
        \u0275\u0275text(283, "favorite");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(284, "div", 17);
        \u0275\u0275element(285, "app-incrementor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(286, "div", 17)(287, "button", 53)(288, "mat-icon", 8);
        \u0275\u0275text(289, "shopping_bag");
        \u0275\u0275elementEnd()()()()()()()()()()();
      }
    }, dependencies: [RouterLink, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatDivider, MatIconModule, MatIcon, MatBadgeModule, MatBadge, MatButtonModule, MatButton, MatMiniFabButton, MatIconButton, MatListModule, MatChipsModule, IncrementorComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartComponent, [{
    type: Component,
    args: [{ selector: "app-cart", standalone: true, imports: [RouterLink, MatCardModule, MatDivider, MatIconModule, MatBadgeModule, MatButtonModule, MatListModule, MatChipsModule, IncrementorComponent], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Your Cart</h3>
                        <p class="small opacity-50">Finalize and review summary...</p>
                    </div>
                    <div class="col-auto mb-3 mb-xl-0">
                        <button matIconButton="filled" routerLink="/app/cart" matBadge="3" matBadgeColor="warn"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                    </div>
                    <div class="col-auto mb-3 mb-xl-0">
                        <button matIconButton routerLink="../checkout"><mat-icon class="material-icons-outlined">credit_card</mat-icon></button>
                    </div>
                </div>
            </mat-card>
        </div>

        <div class="container fade-in">
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col col-md">
                                    <h4 class="mb-2">Delivery Address</h4>
                                    <p class="text-secondary">2000, Las Vegas Blvd S, The Venetian Resort, NV, Las Vegas, 89104</p>
                                </div>
                                <div class="col-auto">
                                    <button matIconButton><mat-icon class="material-icons-outlined">edit_note</mat-icon></button>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>

                    <!-- cart item -->

                    <mat-card class="mb-3">
                        <mat-card-content>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-auto">
                                    <div class="height-120 w-100 rounded coverimg mb-3 position-relative">
                                        <img src="assets/img/product1.jpg" alt="" />
                                        <div class="position-absolute top-0 end-0 m-2 z-index-1">
                                            <button matMiniFab class="text-theme theme-red">
                                                <span class="material-symbols-outlined align-middle"> favorite </span>
                                                <!-- <mat-icon>favorite</mat-icon> -->
                                            </button>
                                        </div>
                                    </div>
                                    <app-incrementor></app-incrementor>
                                </div>
                                <div class="col col-lg col-xl">
                                    <div class="row gx-3">
                                        <div class="col-12 col-md mb-3 mb-md-0">
                                            <h4 class="mb-2">Mosaic Textured Bedsheets</h4>
                                            <p class="text-secondary small">Seller: Avnit Suppliers</p>

                                            <h3 class="fw-bold mb-2">$ 150.00 <s class="text-secondary fw-normal">$ 180.00</s></h3>
                                            <p><span class="badge badge-light theme-green align-middle">Flat $10.00 OFF</span></p>
                                        </div>
                                        <div class="col-12 col-md">
                                            <p class="mb-2">
                                                <mat-icon class="text-theme theme-yellow align-middle">star</mat-icon>
                                                <mat-icon class="text-theme theme-yellow align-middle">star</mat-icon>
                                                <mat-icon class="text-theme theme-yellow align-middle">star</mat-icon>
                                                <mat-icon class="text-theme theme-yellow align-middle">star</mat-icon>
                                                <mat-icon class="text-theme theme-yellow align-middle">star</mat-icon>
                                            </p>
                                            <span class="ms-1 align-middle text-secondary">4.2 - 165 Review</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-auto position-relative">
                                    <button matButton class="theme-red"><mat-icon>delete</mat-icon> Remove</button>
                                    <button matButton><mat-icon>schedule</mat-icon> Save for later</button>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                    <mat-card class="mb-3">
                        <mat-card-content>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-auto">
                                    <div class="height-120 w-100 rounded coverimg mb-3 position-relative">
                                        <img src="assets/img/product3.jpg" alt="" />
                                        <div class="position-absolute top-0 end-0 m-2 z-index-1">
                                            <button matMiniFab class="text-theme theme-red">
                                                <span class="material-symbols-outlined align-middle"> favorite </span>
                                                <!-- <mat-icon>favorite</mat-icon> -->
                                            </button>
                                        </div>
                                    </div>
                                    <app-incrementor></app-incrementor>
                                </div>
                                <div class="col col-lg col-xl">
                                    <div class="row gx-3">
                                        <div class="col-12 col-md mb-3 mb-md-0">
                                            <h4 class="mb-2">Mosaic Textured Bedsheets</h4>
                                            <p class="text-secondary small">Seller: Avnit Suppliers</p>

                                            <h3 class="fw-bold mb-2">$ 150.00 <s class="text-secondary fw-normal">$ 180.00</s></h3>
                                            <p><span class="badge badge-light theme-green align-middle">Flat $10.00 OFF</span></p>
                                        </div>
                                        <div class="col-12 col-md">
                                            <p class="mb-2">
                                                <mat-icon class="text-theme theme-yellow align-middle">star</mat-icon>
                                                <mat-icon class="text-theme theme-yellow align-middle">star</mat-icon>
                                                <mat-icon class="text-theme theme-yellow align-middle">star</mat-icon>
                                                <mat-icon class="text-theme theme-yellow align-middle">star</mat-icon>
                                                <mat-icon class="text-theme theme-yellow align-middle">star</mat-icon>
                                            </p>
                                            <span class="ms-1 align-middle text-secondary">4.2 - 165 Review</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-auto position-relative">
                                    <button matButton class="theme-red"><mat-icon>delete</mat-icon> Remove</button>
                                    <button matButton><mat-icon>schedule</mat-icon> Save for later</button>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-md-4">
                    <mat-card>
                        <mat-card-header class="mb-3">
                            <h4>Price Total</h4>
                        </mat-card-header>
                        <mat-card-content>
                            <div class="row gx-3 mb-3">
                                <div class="col text-secondary">Price</div>
                                <div class="col-auto fw-bold">$ 450.00</div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col text-secondary">Discount</div>
                                <div class="col-auto fw-bold text-theme theme-green">- $ 100.00</div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col text-secondary">Coupon/Bank Offer</div>
                                <div class="col-auto fw-bold text-theme theme-green">- $ 50.00</div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col text-secondary">Platform Fee</div>
                                <div class="col-auto fw-bold">$ 0.00</div>
                            </div>

                            <mat-divider class="mb-3"></mat-divider>

                            <div class="row gx-3 mb-3">
                                <div class="col text-secondary"><h3>Total</h3></div>
                                <div class="col-auto"><h3>$ 300.00</h3></div>
                            </div>
                            <mat-divider class="mb-3"></mat-divider>

                            <h4 class="text-theme theme-green">You will save $150 on this order</h4>

                            <button matButton="filled" class="w-100" routerLink="../checkout"><mat-icon class="material-icons-outlined">credit_card</mat-icon> Checkout</button>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>

            <div class="text-center py-3 mb-3 mb-lg-4">
                <h2 class="mb-2">
                    You have few items,<br />
                    saved for later
                </h2>
                <p class="text-secondary">Add product to cart for checkout.</p>
            </div>

            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-lg-6 col-xxl-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3">
                                <div class="col-auto">
                                    <div class="h-100 width-100 rounded coverimg">
                                        <img src="assets/img/product1.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="col">
                                    <h4 class="mb-3">Mosaic Textured Bedsheets</h4>
                                    <h3 class="fw-bold mb-2">$ 152.00 <s class="text-secondary fw-normal">$ 180.00</s></h3>
                                    <p>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <span class="text-secondary"> 152 ratings</span>
                                    </p>
                                    <div class="row gx-1">
                                        <div class="col">
                                            <button matIconButton class="text-theme theme-red">
                                                <span class="material-symbols-outlined"> favorite </span>
                                                <!-- <mat-icon>favorite</mat-icon> -->
                                            </button>
                                        </div>
                                        <div class="col-auto">
                                            <app-incrementor></app-incrementor>
                                        </div>
                                        <div class="col-auto">
                                            <button matIconButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-lg-6 col-xxl-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3">
                                <div class="col-auto">
                                    <div class="h-100 width-100 rounded coverimg">
                                        <img src="assets/img/product2.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="col">
                                    <h4 class="mb-3">Apparels that shines</h4>
                                    <h3 class="fw-bold mb-2">$ 80.00 <s class="text-secondary fw-normal">$ 90.00</s></h3>
                                    <p>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star_half</mat-icon>
                                        <span class="text-secondary"> 35 ratings</span>
                                    </p>
                                    <div class="row gx-1">
                                        <div class="col">
                                            <button matIconButton class="text-theme theme-red">
                                                <span class="material-symbols-outlined"> favorite </span>
                                                <!-- <mat-icon>favorite</mat-icon> -->
                                            </button>
                                        </div>
                                        <div class="col-auto">
                                            <app-incrementor></app-incrementor>
                                        </div>
                                        <div class="col-auto">
                                            <button matIconButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-lg-6 col-xxl-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <mat-card-content>
                            <div class="row gx-3">
                                <div class="col-auto">
                                    <div class="h-100 width-100 rounded coverimg">
                                        <img src="assets/img/product3.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="col">
                                    <h4 class="mb-3">Lovely shades</h4>
                                    <h3 class="fw-bold mb-2">$ 198.00 <s class="text-secondary fw-normal">$ 220.00</s></h3>
                                    <p>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <span class="text-secondary"> 124 ratings</span>
                                    </p>
                                    <div class="row gx-1">
                                        <div class="col">
                                            <button matIconButton class="text-theme theme-red">
                                                <!--<span class="material-symbols-outlined"> favorite </span> -->
                                                <mat-icon>favorite</mat-icon>
                                            </button>
                                        </div>
                                        <div class="col-auto">
                                            <app-incrementor></app-incrementor>
                                        </div>
                                        <div class="col-auto">
                                            <button matIconButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/pages/app/ecommerce/cart.component.ts", lineNumber: 309 });
})();
export {
  CartComponent
};
//# sourceMappingURL=cart.component-XSCM2BC7.js.map
