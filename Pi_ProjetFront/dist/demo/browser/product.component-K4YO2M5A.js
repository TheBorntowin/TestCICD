import {
  IncrementorComponent
} from "./chunk-5BURJXX5.js";
import {
  register
} from "./chunk-S5VFQUTS.js";
import {
  MatBadge,
  MatBadgeModule
} from "./chunk-GNK5HPR7.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-TCWW663Y.js";
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
import "./chunk-45QHUHCH.js";
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
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/ecommerce/product.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.id;
function ProductComponent_For_179_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 34);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const review_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("theme-yellow", i_r1 <= review_r2.rating)("opacity-25", i_r1 > review_r2.rating);
  }
}
function ProductComponent_For_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "mat-card", 84)(2, "mat-card-content")(3, "div", 13)(4, "div", 35)(5, "div", 85);
    \u0275\u0275element(6, "img", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "h3", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275repeaterCreate(11, ProductComponent_For_179_For_12_Template, 2, 4, "mat-icon", 87, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 47);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const review_r2 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275property("src", review_r2.authorImage, \u0275\u0275sanitizeUrl)("alt", review_r2.authorName + " profile picture");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r2.authorName);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r2.comment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r2.date);
  }
}
register();
var ProductComponent = class _ProductComponent {
  constructor() {
    this.reviews = signal([
      {
        id: 1,
        authorName: "Michael Chen",
        authorImage: "assets/img/user-4.jpg",
        date: "September 1, 2026",
        rating: 5,
        comment: "Excellent product! The quality is top-notch and it exceeded my expectations. I highly recommend it to everyone."
      },
      {
        id: 2,
        authorName: "Sarah Johnson",
        authorImage: "assets/img/user-1.jpg",
        date: "August 28, 2026",
        rating: 4,
        comment: "Very happy with my purchase. The item works as described, although the delivery was a bit slower than expected. Overall, a great experience."
      },
      {
        id: 3,
        authorName: "Davi Rodriguez",
        authorImage: "assets/img/user-5.jpg",
        date: "August 20, 2026",
        rating: 5,
        comment: "Fantastic! This is exactly what I was looking for. The design is sleek and the functionality is perfect. Five stars!"
      },
      {
        id: 4,
        authorName: "Emily White",
        authorImage: "assets/img/user-2.jpg",
        date: "August 15, 2026",
        rating: 3,
        comment: "It's an okay product. It does the job, but I feel like it could be more durable. The features are good, but I have some concerns about its longevity."
      },
      {
        id: 5,
        authorName: "James Brown",
        authorImage: "assets/img/user-3.jpg",
        date: "August 10, 2026",
        rating: 5,
        comment: "Absolutely amazing! I am blown away by the quality and performance. This is the best item I've bought all year. Great value."
      }
    ], ...ngDevMode ? [{ debugName: "reviews" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function ProductComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductComponent, selectors: [["app-product"]], decls: 450, vars: 2, consts: [["swiperMain", ""], ["swiperThumbs", ""], [1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "small", "opacity-50"], [1, "col-auto", "mb-3", "mb-xl-0"], ["matIconButton", "filled", "routerLink", "/app/cart", "matBadge", "3", "matBadgeColor", "warn"], [1, "material-icons-outlined"], ["matIconButton", "", "routerLink", "../add-product"], [1, "container", "fade-in", "pt-3", "pb-lg-3", "mb-3"], [1, "row", "gx-3"], [1, "col", "col-md", "mb-3", "mb-md-0"], [1, "container", "fade-in"], [1, "mb-3", "mb-lg-4"], [1, "col-12", "col-md-5", "col-lg-4"], ["thumbs-swiper", ".swiperThumbs", 1, "mb-3"], ["src", "assets/img/product1.jpg", "alt", "", 1, "w-100", "rounded"], ["src", "assets/img/product2.jpg", "alt", "", 1, "w-100", "rounded"], ["src", "assets/img/product3.jpg", "alt", "", 1, "w-100", "rounded"], ["src", "assets/img/product4.jpg", "alt", "", 1, "w-100", "rounded"], ["src", "assets/img/product5.jpg", "alt", "", 1, "w-100", "rounded"], [1, "w-100", "swiperThumbs", "mb-3", "mb-md-0", 3, "slidesPerView", "spaceBetween"], [1, "width-80"], [1, "height-80", "w-100", "rounded", "coverimg"], ["src", "assets/img/product1.jpg", "alt", ""], ["src", "assets/img/product2.jpg", "alt", ""], ["src", "assets/img/product3.jpg", "alt", ""], ["src", "assets/img/product4.jpg", "alt", ""], ["src", "assets/img/product5.jpg", "alt", ""], [1, "col"], [1, "row", "gx-3", "align-items-center", "mb-3"], [1, "text-theme"], [1, "col-auto"], ["matIconButton", "", 1, "text-theme", "theme-red"], [1, "material-symbols-outlined"], [1, "mb-2"], [1, "text-secondary"], [1, "col", "mb-3", "mb-lg-4"], [1, "fw-bold", "mb-1"], [1, "text-secondary", "fw-normal"], [1, "badge", "badge-light", "theme-green", "align-middle"], [1, "col-auto", "text-end", "mb-3", "mb-lg-4"], [1, "mb-0"], [1, "material-icons-outlined", "text-theme", "theme-yellow"], [1, "mb-3"], [1, "mb-4"], ["matButton", "filled"], ["mat-stretch-tabs", "false", "mat-align-tabs", "center"], ["label", "Description"], [1, "my-3", "mb-lg-4", "mx-1"], ["label", "Review"], [1, "pb-0"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "text-center", "py-3", "mb-3", "mb-lg-4"], ["slides-per-view", "auto", "space-between", "20px", "autoplay", "true", 1, "swiper"], [1, "width-280"], [1, "position-absolute", "top-0", "end-0", "m-3", "z-index-1"], ["matMiniFab", "", 1, "text-theme", "theme-red"], [1, "material-symbols-outlined", "align-middle"], ["mat-card-image", "", "routerLink", "../product", 1, "height-180", "w-100", "rounded", "coverimg", "mb-3"], [1, "row", "gx-3", "mb-3"], ["routerLink", "../product", 1, "mb-2"], [1, "fw-bold", "mb-3"], [1, "material-icons-outlined", "text-sm", "text-theme", "theme-yellow"], ["matIconButton", "filled"], [1, "badge", "badge-light", "theme-cyan", "align-middle"], ["src", "assets/img/product6.jpg", "alt", ""], ["src", "assets/img/product7.jpg", "alt", ""], [1, "badge", "badge-light", "theme-violet", "align-middle"], [1, "col-12", "col-md-12", "col-lg-6", "col-xl-4"], [1, "badge", "badge-light", "theme-magenta"], [1, "text-theme", "theme-red", "mb-1"], [1, "text-secondary", "small", "mb-4"], [1, "col-5"], [1, "height-220", "w-100", "coverimg", "rounded"], ["src", "assets/img/product10.png", "alt", "", 1, "d-none"], ["matButton", "filled", 1, "theme-red"], ["src", "assets/img/product9.png", "alt", "", 1, "d-none"], [1, "col-12", "col-md-12", "col-xl-4"], ["src", "assets/img/product11.png", "alt", "", 1, "d-none"], ["appearance", "outlined", 1, "mb-3", "mb-lg-4"], [1, "avatar", "avatar-80", "coverimg", "rounded-circle"], [1, "w-20", "h-20", "rounded-full", "object-cover", "border-2", "border-indigo-400", "dark:border-indigo-500", 3, "src", "alt"], [1, "text-theme", 3, "theme-yellow", "opacity-25"]], template: function ProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "mat-card", 3)(2, "div", 4)(3, "div", 5)(4, "h3", 6);
        \u0275\u0275text(5, "E-Commerce Shop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 7);
        \u0275\u0275text(7, "Purchase from anywhere...");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8)(9, "button", 9)(10, "mat-icon", 10);
        \u0275\u0275text(11, "shopping_bag");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 8)(13, "button", 11)(14, "mat-icon", 10);
        \u0275\u0275text(15, "add");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
        \u0275\u0275element(18, "div", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 15)(20, "mat-card", 16)(21, "mat-card-content")(22, "div", 13)(23, "div", 17)(24, "swiper-container", 18, 0)(26, "swiper-slide");
        \u0275\u0275element(27, "img", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "swiper-slide");
        \u0275\u0275element(29, "img", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "swiper-slide");
        \u0275\u0275element(31, "img", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "swiper-slide");
        \u0275\u0275element(33, "img", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "swiper-slide");
        \u0275\u0275element(35, "img", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "swiper-container", 24, 1)(38, "swiper-slide", 25)(39, "div", 26);
        \u0275\u0275element(40, "img", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "swiper-slide", 25)(42, "div", 26);
        \u0275\u0275element(43, "img", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "swiper-slide", 25)(45, "div", 26);
        \u0275\u0275element(46, "img", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "swiper-slide", 25)(48, "div", 26);
        \u0275\u0275element(49, "img", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "swiper-slide", 25)(51, "div", 26);
        \u0275\u0275element(52, "img", 31);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(53, "div", 32)(54, "div", 33)(55, "div", 32)(56, "h4", 6);
        \u0275\u0275text(57, "Home Decor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "h5", 34);
        \u0275\u0275text(59, "Bedsheets");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 35)(61, "button", 36)(62, "span", 37);
        \u0275\u0275text(63, " favorite ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(64, "h2", 38);
        \u0275\u0275text(65, "Mosaic Textured Bedsheets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "p", 39);
        \u0275\u0275text(67, " Elevate your bedroom with our Mosaic Textured Bedsheets, featuring a visually striking and artful pattern that adds sophisticated depth and character to any decor, whether modern or traditional. Crafted from high-quality, breathable fabric like cotton or polyester, these sheets offer year-round comfort, with a soft feel that promotes restful sleep. Durable, easy-care, and designed to bring artistic flair and elegance to your space, they are the perfect choice for a stylish and comfortable retreat. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 4)(69, "div", 40)(70, "h1", 41);
        \u0275\u0275text(71, "$ 152.00 ");
        \u0275\u0275elementStart(72, "s", 42);
        \u0275\u0275text(73, "$ 180.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "p")(75, "span", 43);
        \u0275\u0275text(76, "Flat $10.00 OFF");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "div", 44)(78, "h4", 45)(79, "mat-icon", 46);
        \u0275\u0275text(80, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "mat-icon", 46);
        \u0275\u0275text(82, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "mat-icon", 46);
        \u0275\u0275text(84, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "mat-icon", 46);
        \u0275\u0275text(86, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "mat-icon", 46);
        \u0275\u0275text(88, "star");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "p")(90, "span", 39);
        \u0275\u0275text(91, "(4.8 - 152 ratings)");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(92, "h3", 47);
        \u0275\u0275text(93, "Available offers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "p", 38)(95, "b");
        \u0275\u0275text(96, "Bank Offer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(97, ": ");
        \u0275\u0275elementStart(98, "span", 39);
        \u0275\u0275text(99, "Get 10% off upto \u20B950 on minimum order value of \u20B9250 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "span", 34);
        \u0275\u0275text(101, "T&C");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "p", 38)(103, "b");
        \u0275\u0275text(104, "Bank Offer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(105, ": ");
        \u0275\u0275elementStart(106, "span", 39);
        \u0275\u0275text(107, "5% cashback on Bank Credit Card upto \u20B94,000 per statement quarter ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "span", 34);
        \u0275\u0275text(109, "T&C");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "p", 48)(111, "b");
        \u0275\u0275text(112, "Bank Offer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(113, ": ");
        \u0275\u0275elementStart(114, "span", 39);
        \u0275\u0275text(115, "5% cashback on AUO Credit Card upto \u20B94,000 per calendar quarter ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "span", 34);
        \u0275\u0275text(117, "T&C");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "div", 13)(119, "div", 35);
        \u0275\u0275element(120, "app-incrementor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "div", 35)(122, "button", 49)(123, "mat-icon", 10);
        \u0275\u0275text(124, "shopping_bag");
        \u0275\u0275elementEnd();
        \u0275\u0275text(125, " Add to Cart");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(126, "mat-tab-group", 50)(127, "mat-tab", 51)(128, "mat-card", 52)(129, "mat-card-content")(130, "h3");
        \u0275\u0275text(131, "Key Features");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "h4", 38);
        \u0275\u0275text(133, "Artistic Mosaic Design:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "p");
        \u0275\u0275text(135, "A captivating pattern of intersecting shapes and colors creates a sophisticated and timeless aesthetic, acting as a stunning focal point for your bedroom.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "h4", 38);
        \u0275\u0275text(137, "Premium Comfort:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "p");
        \u0275\u0275text(139, "Made from high-quality, breathable fabrics like cotton or polyester, these sheets provide a luxuriously soft, smooth, and skin-friendly surface for a restful night's sleep.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "h4", 38);
        \u0275\u0275text(141, "Year-Round Versatility:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "p");
        \u0275\u0275text(143, "The breathable fabric helps regulate temperature, keeping you cool in summer and cozy in winter, making them ideal for all seasons.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "h4", 38);
        \u0275\u0275text(145, "Durable Quality:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "p");
        \u0275\u0275text(147, "Expertly stitched and crafted with durable materials, these sheets are designed to maintain their beauty and softness through multiple washes.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "h4", 38);
        \u0275\u0275text(149, "Easy Care & Maintenance:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "p");
        \u0275\u0275text(151, "Simply machine wash in cold water on a gentle cycle to keep your bedding fresh and vibrant.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "h4", 38);
        \u0275\u0275text(153, "Harmonious Coordination:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "p");
        \u0275\u0275text(155, "Sets include matching pillow covers, creating a cohesive and stylish look for your bedroom.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "h4", 38);
        \u0275\u0275text(157, "Hypoallergenic & Skin-Friendly:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "p");
        \u0275\u0275text(159, "Natural fibers in cotton bedding are excellent for those with sensitive skin or allergies, resisting dust mites and mold.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "h3");
        \u0275\u0275text(161, "Enhance Your Bedroom");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "h4", 38);
        \u0275\u0275text(163, "Sophisticated Decor:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "p");
        \u0275\u0275text(165, "The intricate mosaic design adds a touch of artistic charm and elegance, blending seamlessly with both contemporary and traditional room styles.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "h4", 38);
        \u0275\u0275text(167, "A Perfect Gift:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "p");
        \u0275\u0275text(169, "With their versatile design and luxurious feel, these sheets make a thoughtful and practical gift for weddings, housewarmings, or any special occasion.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "h4", 38);
        \u0275\u0275text(171, "A Sanctuary of Comfort:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "p");
        \u0275\u0275text(173, "Transform your bedroom into a serene and restful retreat with a bedsheet that combines beauty with exceptional comfort and ease of care.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(174, "mat-tab", 53)(175, "mat-card", 52)(176, "mat-card-content", 54)(177, "div", 55);
        \u0275\u0275repeaterCreate(178, ProductComponent_For_179_Template, 17, 6, "div", 56, _forTrack0);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(180, "div", 57)(181, "h2", 38);
        \u0275\u0275text(182, "Best product for your desires");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "p", 39);
        \u0275\u0275text(184, "We are recommending you best product in category.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(185, "swiper-container", 58)(186, "swiper-slide", 59)(187, "mat-card", 16)(188, "div", 60)(189, "button", 61)(190, "span", 62);
        \u0275\u0275text(191, " favorite ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "div", 63);
        \u0275\u0275element(193, "img", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "mat-card-content")(195, "p")(196, "span", 43);
        \u0275\u0275text(197, "Flat $10.00 OFF");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(198, "div", 64)(199, "div", 32)(200, "h4", 65);
        \u0275\u0275text(201, "Mosaic Textured Bedsheets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(202, "h3", 66);
        \u0275\u0275text(203, "$ 152.00 ");
        \u0275\u0275elementStart(204, "s", 42);
        \u0275\u0275text(205, "$ 180.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(206, "p")(207, "mat-icon", 67);
        \u0275\u0275text(208, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "mat-icon", 67);
        \u0275\u0275text(210, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "mat-icon", 67);
        \u0275\u0275text(212, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "mat-icon", 67);
        \u0275\u0275text(214, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "mat-icon", 67);
        \u0275\u0275text(216, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "span", 39);
        \u0275\u0275text(218, " 152 ratings");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(219, "div", 13)(220, "div", 32);
        \u0275\u0275element(221, "app-incrementor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "div", 35)(223, "button", 68)(224, "mat-icon", 10);
        \u0275\u0275text(225, "shopping_bag");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(226, "swiper-slide", 59)(227, "mat-card", 16)(228, "div", 60)(229, "button", 61)(230, "mat-icon");
        \u0275\u0275text(231, "favorite");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(232, "div", 63);
        \u0275\u0275element(233, "img", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "mat-card-content")(235, "p")(236, "span", 69);
        \u0275\u0275text(237, "Flat $25.00 OFF");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(238, "div", 64)(239, "div", 32)(240, "h4", 65);
        \u0275\u0275text(241, "Mosaic Textured Bedsheets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "h3", 66);
        \u0275\u0275text(243, "$ 152.00 ");
        \u0275\u0275elementStart(244, "s", 42);
        \u0275\u0275text(245, "$ 180.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(246, "p")(247, "mat-icon", 67);
        \u0275\u0275text(248, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "mat-icon", 67);
        \u0275\u0275text(250, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "mat-icon", 67);
        \u0275\u0275text(252, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(253, "mat-icon", 67);
        \u0275\u0275text(254, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(255, "mat-icon", 67);
        \u0275\u0275text(256, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(257, "span", 39);
        \u0275\u0275text(258, " 152 ratings");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(259, "div", 13)(260, "div", 32);
        \u0275\u0275element(261, "app-incrementor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(262, "div", 35)(263, "button", 68)(264, "mat-icon", 10);
        \u0275\u0275text(265, "shopping_bag");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(266, "swiper-slide", 59)(267, "mat-card", 16)(268, "div", 60)(269, "button", 61)(270, "span", 62);
        \u0275\u0275text(271, " favorite ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(272, "div", 63);
        \u0275\u0275element(273, "img", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(274, "mat-card-content")(275, "p")(276, "span", 43);
        \u0275\u0275text(277, "Flat $10.00 OFF");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(278, "div", 64)(279, "div", 32)(280, "h4", 38);
        \u0275\u0275text(281, "Mosaic Textured Bedsheets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(282, "h3", 66);
        \u0275\u0275text(283, "$ 152.00 ");
        \u0275\u0275elementStart(284, "s", 42);
        \u0275\u0275text(285, "$ 180.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(286, "p")(287, "mat-icon", 67);
        \u0275\u0275text(288, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(289, "mat-icon", 67);
        \u0275\u0275text(290, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(291, "mat-icon", 67);
        \u0275\u0275text(292, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(293, "mat-icon", 67);
        \u0275\u0275text(294, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(295, "mat-icon", 67);
        \u0275\u0275text(296, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(297, "span", 39);
        \u0275\u0275text(298, " 152 ratings");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(299, "div", 13)(300, "div", 32);
        \u0275\u0275element(301, "app-incrementor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(302, "div", 35)(303, "button", 68)(304, "mat-icon", 10);
        \u0275\u0275text(305, "shopping_bag");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(306, "swiper-slide", 59)(307, "mat-card", 16)(308, "div", 60)(309, "button", 61)(310, "span", 62);
        \u0275\u0275text(311, " favorite ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(312, "div", 63);
        \u0275\u0275element(313, "img", 71);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(314, "mat-card-content")(315, "p")(316, "span", 72);
        \u0275\u0275text(317, "Card EMI Offer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(318, "div", 64)(319, "div", 32)(320, "h4", 38);
        \u0275\u0275text(321, "Mosaic Textured Bedsheets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(322, "h3", 66);
        \u0275\u0275text(323, "$ 152.00 ");
        \u0275\u0275elementStart(324, "s", 42);
        \u0275\u0275text(325, "$ 180.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(326, "p")(327, "mat-icon", 67);
        \u0275\u0275text(328, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(329, "mat-icon", 67);
        \u0275\u0275text(330, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(331, "mat-icon", 67);
        \u0275\u0275text(332, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(333, "mat-icon", 67);
        \u0275\u0275text(334, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(335, "mat-icon", 67);
        \u0275\u0275text(336, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(337, "span", 39);
        \u0275\u0275text(338, " 152 ratings");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(339, "div", 13)(340, "div", 32);
        \u0275\u0275element(341, "app-incrementor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(342, "div", 35)(343, "button", 68)(344, "mat-icon", 10);
        \u0275\u0275text(345, "shopping_bag");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(346, "swiper-slide", 59)(347, "mat-card", 16)(348, "div", 60)(349, "button", 61)(350, "span", 62);
        \u0275\u0275text(351, " favorite ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(352, "div", 63);
        \u0275\u0275element(353, "img", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(354, "mat-card-content")(355, "p")(356, "span", 72);
        \u0275\u0275text(357, "Card EMI Offer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(358, "div", 64)(359, "div", 32)(360, "h4", 65);
        \u0275\u0275text(361, "Mosaic Textured Bedsheets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(362, "h3", 66);
        \u0275\u0275text(363, "$ 152.00 ");
        \u0275\u0275elementStart(364, "s", 42);
        \u0275\u0275text(365, "$ 180.00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(366, "p")(367, "mat-icon", 67);
        \u0275\u0275text(368, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(369, "mat-icon", 67);
        \u0275\u0275text(370, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(371, "mat-icon", 67);
        \u0275\u0275text(372, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(373, "mat-icon", 67);
        \u0275\u0275text(374, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(375, "mat-icon", 67);
        \u0275\u0275text(376, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(377, "span", 39);
        \u0275\u0275text(378, " 152 ratings");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(379, "div", 13)(380, "div", 32);
        \u0275\u0275element(381, "app-incrementor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(382, "div", 35)(383, "button", 68)(384, "mat-icon", 10);
        \u0275\u0275text(385, "shopping_bag");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(386, "div", 55)(387, "div", 73)(388, "mat-card", 16)(389, "div", 4)(390, "div", 32)(391, "mat-card-content")(392, "p", 48)(393, "span", 74);
        \u0275\u0275text(394, "25% Offer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(395, "p", 75);
        \u0275\u0275text(396, "Smart Watch Series");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(397, "h2", 6);
        \u0275\u0275text(398, "Just at $ 999.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(399, "p", 76);
        \u0275\u0275text(400, "Offer valid till 30th Dec");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(401, "button", 49)(402, "mat-icon", 10);
        \u0275\u0275text(403, "shopping_bag");
        \u0275\u0275elementEnd();
        \u0275\u0275text(404, " Buy Now");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(405, "div", 77)(406, "div", 78);
        \u0275\u0275element(407, "img", 79);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(408, "div", 73)(409, "mat-card", 16)(410, "div", 4)(411, "div", 32)(412, "mat-card-content")(413, "p", 48)(414, "span", 74);
        \u0275\u0275text(415, "Flat $ 50.00 OFF");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(416, "p", 75);
        \u0275\u0275text(417, "Dress for Woman");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(418, "h2", 6);
        \u0275\u0275text(419, "Now $ 210.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(420, "p", 76);
        \u0275\u0275text(421, "Offer valid on App only");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(422, "button", 80)(423, "mat-icon", 10);
        \u0275\u0275text(424, "shopping_bag");
        \u0275\u0275elementEnd();
        \u0275\u0275text(425, " Buy Now");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(426, "div", 77)(427, "div", 78);
        \u0275\u0275element(428, "img", 81);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(429, "div", 82)(430, "mat-card", 16)(431, "div", 4)(432, "div", 32)(433, "mat-card-content")(434, "p", 48)(435, "span", 74);
        \u0275\u0275text(436, "25% Offer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(437, "p", 75);
        \u0275\u0275text(438, "SmartPhone Perks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(439, "h2", 6);
        \u0275\u0275text(440, "Upto 25% Off");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(441, "p", 76);
        \u0275\u0275text(442, "Offer valid till 30th Dec");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(443, "button", 49)(444, "mat-icon", 10);
        \u0275\u0275text(445, "shopping_bag");
        \u0275\u0275elementEnd();
        \u0275\u0275text(446, " Buy Now");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(447, "div", 77)(448, "div", 78);
        \u0275\u0275element(449, "img", 83);
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(36);
        \u0275\u0275property("slidesPerView", "auto")("spaceBetween", 10);
        \u0275\u0275advance(142);
        \u0275\u0275repeater(ctx.reviews());
      }
    }, dependencies: [RouterLink, MatCardModule, MatCard, MatCardContent, MatCardImage, MatIconModule, MatIcon, MatTabsModule, MatTab, MatTabGroup, MatBadgeModule, MatBadge, MatButtonModule, MatButton, MatMiniFabButton, MatIconButton, MatListModule, MatChipsModule, IncrementorComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductComponent, [{
    type: Component,
    args: [{ selector: "app-product", standalone: true, imports: [RouterLink, MatCardModule, MatIconModule, MatTabsModule, MatBadgeModule, MatButtonModule, MatListModule, MatChipsModule, IncrementorComponent], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">E-Commerce Shop</h3>
                        <p class="small opacity-50">Purchase from anywhere...</p>
                    </div>

                    <div class="col-auto mb-3 mb-xl-0">
                        <button matIconButton="filled" routerLink="/app/cart" matBadge="3" matBadgeColor="warn"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                    </div>
                    <div class="col-auto mb-3 mb-xl-0">
                        <button matIconButton routerLink="../add-product"><mat-icon class="material-icons-outlined">add</mat-icon></button>
                    </div>
                </div>
            </mat-card>
        </div>

        <div class="container fade-in pt-3 pb-lg-3 mb-3">
            <div class="row gx-3">
                <div class="col col-md mb-3 mb-md-0"></div>
            </div>
        </div>
        <div class="container fade-in">
            <mat-card class="mb-3 mb-lg-4">
                <mat-card-content>
                    <div class="row gx-3">
                        <div class="col-12 col-md-5 col-lg-4">
                            <!-- image swiper -->
                            <swiper-container class="mb-3" #swiperMain thumbs-swiper=".swiperThumbs">
                                <swiper-slide>
                                    <img src="assets/img/product1.jpg" alt="" class="w-100 rounded" />
                                </swiper-slide>
                                <swiper-slide>
                                    <img src="assets/img/product2.jpg" alt="" class="w-100 rounded" />
                                </swiper-slide>
                                <swiper-slide>
                                    <img src="assets/img/product3.jpg" alt="" class="w-100 rounded" />
                                </swiper-slide>
                                <swiper-slide>
                                    <img src="assets/img/product4.jpg" alt="" class="w-100 rounded" />
                                </swiper-slide>
                                <swiper-slide>
                                    <img src="assets/img/product5.jpg" alt="" class="w-100 rounded" />
                                </swiper-slide>
                            </swiper-container>

                            <!-- Thumbs Swiper -->
                            <swiper-container class="w-100 swiperThumbs mb-3 mb-md-0" #swiperThumbs [slidesPerView]="'auto'" [spaceBetween]="10">
                                <swiper-slide class="width-80">
                                    <div class="height-80 w-100 rounded coverimg">
                                        <img src="assets/img/product1.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="width-80">
                                    <div class="height-80 w-100 rounded coverimg">
                                        <img src="assets/img/product2.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="width-80">
                                    <div class="height-80 w-100 rounded coverimg">
                                        <img src="assets/img/product3.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="width-80">
                                    <div class="height-80 w-100 rounded coverimg">
                                        <img src="assets/img/product4.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="width-80">
                                    <div class="height-80 w-100 rounded coverimg">
                                        <img src="assets/img/product5.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                            </swiper-container>
                        </div>
                        <div class="col">
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col">
                                    <h4 class="mb-1">Home Decor</h4>
                                    <h5 class="text-theme">Bedsheets</h5>
                                </div>
                                <div class="col-auto">
                                    <button matIconButton class="text-theme theme-red">
                                        <span class="material-symbols-outlined"> favorite </span>
                                        <!-- <mat-icon>favorite</mat-icon> -->
                                    </button>
                                </div>
                            </div>
                            <h2 class="mb-2">Mosaic Textured Bedsheets</h2>
                            <p class="text-secondary">
                                Elevate your bedroom with our Mosaic Textured Bedsheets, featuring a visually striking and artful pattern that adds sophisticated depth and character to any decor, whether modern or traditional. Crafted from high-quality, breathable fabric like cotton or polyester, these sheets offer year-round comfort, with a soft feel that promotes restful sleep. Durable, easy-care, and designed to bring artistic flair and elegance to your space, they are the perfect choice for
                                a stylish and comfortable retreat.
                            </p>
                            <div class="row gx-3 align-items-center">
                                <div class="col mb-3 mb-lg-4">
                                    <h1 class="fw-bold mb-1">$ 152.00 <s class="text-secondary fw-normal">$ 180.00</s></h1>
                                    <p><span class="badge badge-light theme-green align-middle">Flat $10.00 OFF</span></p>
                                </div>
                                <div class="col-auto text-end mb-3 mb-lg-4">
                                    <h4 class="mb-0">
                                        <mat-icon class="material-icons-outlined text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-theme theme-yellow">star</mat-icon>
                                    </h4>
                                    <p><span class="text-secondary">(4.8 - 152 ratings)</span></p>
                                </div>
                            </div>
                            <h3 class="mb-3">Available offers</h3>
                            <p class="mb-2"><b>Bank Offer</b>: <span class="text-secondary">Get 10% off upto \u20B950 on minimum order value of \u20B9250 </span><span class="text-theme">T&C</span></p>
                            <p class="mb-2"><b>Bank Offer</b>: <span class="text-secondary">5% cashback on Bank Credit Card upto \u20B94,000 per statement quarter </span><span class="text-theme">T&C</span></p>
                            <p class="mb-4"><b>Bank Offer</b>: <span class="text-secondary">5% cashback on AUO Credit Card upto \u20B94,000 per calendar quarter </span><span class="text-theme">T&C</span></p>
                            <div class="row gx-3">
                                <div class="col-auto">
                                    <app-incrementor></app-incrementor>
                                </div>
                                <div class="col-auto">
                                    <button matButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>

            <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="center">
                <mat-tab label="Description">
                    <mat-card class="my-3 mb-lg-4 mx-1">
                        <mat-card-content>
                            <h3>Key Features</h3>
                            <h4 class="mb-2">Artistic Mosaic Design:</h4>
                            <p>A captivating pattern of intersecting shapes and colors creates a sophisticated and timeless aesthetic, acting as a stunning focal point for your bedroom.</p>
                            <h4 class="mb-2">Premium Comfort:</h4>
                            <p>Made from high-quality, breathable fabrics like cotton or polyester, these sheets provide a luxuriously soft, smooth, and skin-friendly surface for a restful night's sleep.</p>
                            <h4 class="mb-2">Year-Round Versatility:</h4>
                            <p>The breathable fabric helps regulate temperature, keeping you cool in summer and cozy in winter, making them ideal for all seasons.</p>
                            <h4 class="mb-2">Durable Quality:</h4>
                            <p>Expertly stitched and crafted with durable materials, these sheets are designed to maintain their beauty and softness through multiple washes.</p>
                            <h4 class="mb-2">Easy Care & Maintenance:</h4>
                            <p>Simply machine wash in cold water on a gentle cycle to keep your bedding fresh and vibrant.</p>
                            <h4 class="mb-2">Harmonious Coordination:</h4>
                            <p>Sets include matching pillow covers, creating a cohesive and stylish look for your bedroom.</p>
                            <h4 class="mb-2">Hypoallergenic & Skin-Friendly:</h4>
                            <p>Natural fibers in cotton bedding are excellent for those with sensitive skin or allergies, resisting dust mites and mold.</p>

                            <h3>Enhance Your Bedroom</h3>
                            <h4 class="mb-2">Sophisticated Decor:</h4>
                            <p>The intricate mosaic design adds a touch of artistic charm and elegance, blending seamlessly with both contemporary and traditional room styles.</p>
                            <h4 class="mb-2">A Perfect Gift:</h4>
                            <p>With their versatile design and luxurious feel, these sheets make a thoughtful and practical gift for weddings, housewarmings, or any special occasion.</p>
                            <h4 class="mb-2">A Sanctuary of Comfort:</h4>
                            <p>Transform your bedroom into a serene and restful retreat with a bedsheet that combines beauty with exceptional comfort and ease of care.</p>
                        </mat-card-content>
                    </mat-card>
                </mat-tab>
                <mat-tab label="Review">
                    <mat-card class="my-3 mb-lg-4 mx-1">
                        <mat-card-content class="pb-0">
                            <div class="row gx-3 gx-lg-4">
                                @for (review of reviews(); track review.id) {
                                <div class="col-12 col-md-6 col-lg-4">
                                    <mat-card class="mb-3 mb-lg-4" appearance="outlined">
                                        <!-- Author Image -->
                                        <mat-card-content>
                                            <div class="row gx-3">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-80 coverimg rounded-circle">
                                                        <img [src]="review.authorImage" [alt]="review.authorName + ' profile picture'" class="w-20 h-20 rounded-full object-cover border-2 border-indigo-400 dark:border-indigo-500" />
                                                    </div>
                                                </div>

                                                <div class="col">
                                                    <!-- Author Info & Rating -->
                                                    <h3 class="mb-1">{{ review.authorName }}</h3>
                                                    <p>@for(i of [1, 2, 3, 4, 5]; track i) {<mat-icon [class.theme-yellow]="i <= review.rating" [class.opacity-25]="i > review.rating" class="text-theme">star</mat-icon>}</p>
                                                    <!-- Review Comment -->
                                                    <p class="mb-3">{{ review.comment }}</p>
                                                    <p class="text-secondary">{{ review.date }}</p>
                                                </div>
                                            </div>
                                        </mat-card-content>
                                    </mat-card>
                                </div>
                                }
                            </div>
                        </mat-card-content>
                    </mat-card>
                </mat-tab>
            </mat-tab-group>

            <div class="text-center py-3 mb-3 mb-lg-4">
                <h2 class="mb-2">Best product for your desires</h2>
                <p class="text-secondary">We are recommending you best product in category.</p>
            </div>
            <swiper-container slides-per-view="auto" space-between="20px" autoplay="true" class="swiper">
                <swiper-slide class="width-280">
                    <mat-card class="mb-3 mb-lg-4">
                        <div class="position-absolute top-0 end-0 m-3 z-index-1">
                            <button matMiniFab class="text-theme theme-red">
                                <span class="material-symbols-outlined align-middle"> favorite </span>
                                <!-- <mat-icon>favorite</mat-icon> -->
                            </button>
                        </div>
                        <div mat-card-image routerLink="../product" class="height-180 w-100 rounded coverimg mb-3">
                            <img src="assets/img/product2.jpg" alt="" />
                        </div>
                        <mat-card-content>
                            <p><span class="badge badge-light theme-green align-middle">Flat $10.00 OFF</span></p>
                            <div class="row gx-3 mb-3">
                                <div class="col">
                                    <h4 class="mb-2" routerLink="../product">Mosaic Textured Bedsheets</h4>
                                    <h3 class="fw-bold mb-3 ">$ 152.00 <s class="text-secondary fw-normal">$ 180.00</s></h3>
                                    <p>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <span class="text-secondary"> 152 ratings</span>
                                    </p>
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col">
                                    <app-incrementor></app-incrementor>
                                </div>
                                <div class="col-auto">
                                    <button matIconButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </swiper-slide>
                <swiper-slide class="width-280">
                    <mat-card class="mb-3 mb-lg-4">
                        <div class="position-absolute top-0 end-0 m-3 z-index-1">
                            <button matMiniFab class="text-theme theme-red">
                                <!-- <span class="material-symbols-outlined align-middle"> favorite </span> -->
                                <mat-icon>favorite</mat-icon>
                            </button>
                        </div>
                        <div mat-card-image routerLink="../product" class="height-180 w-100 rounded coverimg mb-3">
                            <img src="assets/img/product3.jpg" alt="" />
                        </div>
                        <mat-card-content>
                            <p><span class="badge badge-light theme-cyan align-middle">Flat $25.00 OFF</span></p>
                            <div class="row gx-3 mb-3">
                                <div class="col">
                                    <h4 class="mb-2" routerLink="../product">Mosaic Textured Bedsheets</h4>
                                    <h3 class="fw-bold mb-3 ">$ 152.00 <s class="text-secondary fw-normal">$ 180.00</s></h3>
                                    <p>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <span class="text-secondary"> 152 ratings</span>
                                    </p>
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col">
                                    <app-incrementor></app-incrementor>
                                </div>
                                <div class="col-auto">
                                    <button matIconButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </swiper-slide>
                <swiper-slide class="width-280">
                    <mat-card class="mb-3 mb-lg-4">
                        <div class="position-absolute top-0 end-0 m-3 z-index-1">
                            <button matMiniFab class="text-theme theme-red">
                                <span class="material-symbols-outlined align-middle"> favorite </span>
                                <!-- <mat-icon>favorite</mat-icon> -->
                            </button>
                        </div>
                        <div mat-card-image routerLink="../product" class="height-180 w-100 rounded coverimg mb-3">
                            <img src="assets/img/product6.jpg" alt="" />
                        </div>
                        <mat-card-content>
                            <p><span class="badge badge-light theme-green align-middle">Flat $10.00 OFF</span></p>
                            <div class="row gx-3 mb-3">
                                <div class="col">
                                    <h4 class="mb-2">Mosaic Textured Bedsheets</h4>
                                    <h3 class="fw-bold mb-3 ">$ 152.00 <s class="text-secondary fw-normal">$ 180.00</s></h3>
                                    <p>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <span class="text-secondary"> 152 ratings</span>
                                    </p>
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col">
                                    <app-incrementor></app-incrementor>
                                </div>
                                <div class="col-auto">
                                    <button matIconButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </swiper-slide>
                <swiper-slide class="width-280">
                    <mat-card class="mb-3 mb-lg-4">
                        <div class="position-absolute top-0 end-0 m-3 z-index-1">
                            <button matMiniFab class="text-theme theme-red">
                                <span class="material-symbols-outlined align-middle"> favorite </span>
                                <!-- <mat-icon>favorite</mat-icon> -->
                            </button>
                        </div>
                        <div mat-card-image routerLink="../product" class="height-180 w-100 rounded coverimg mb-3">
                            <img src="assets/img/product7.jpg" alt="" />
                        </div>
                        <mat-card-content>
                            <p><span class="badge badge-light theme-violet align-middle">Card EMI Offer</span></p>
                            <div class="row gx-3 mb-3">
                                <div class="col">
                                    <h4 class="mb-2">Mosaic Textured Bedsheets</h4>
                                    <h3 class="fw-bold mb-3 ">$ 152.00 <s class="text-secondary fw-normal">$ 180.00</s></h3>
                                    <p>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <span class="text-secondary"> 152 ratings</span>
                                    </p>
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col">
                                    <app-incrementor></app-incrementor>
                                </div>
                                <div class="col-auto">
                                    <button matIconButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </swiper-slide>
                <swiper-slide class="width-280">
                    <mat-card class="mb-3 mb-lg-4">
                        <div class="position-absolute top-0 end-0 m-3 z-index-1">
                            <button matMiniFab class="text-theme theme-red">
                                <span class="material-symbols-outlined align-middle"> favorite </span>
                                <!-- <mat-icon>favorite</mat-icon> -->
                            </button>
                        </div>
                        <div mat-card-image routerLink="../product" class="height-180 w-100 rounded coverimg mb-3">
                            <img src="assets/img/product1.jpg" alt="" />
                        </div>
                        <mat-card-content>
                            <p><span class="badge badge-light theme-violet align-middle">Card EMI Offer</span></p>
                            <div class="row gx-3 mb-3">
                                <div class="col">
                                    <h4 class="mb-2" routerLink="../product">Mosaic Textured Bedsheets</h4>
                                    <h3 class="fw-bold mb-3 ">$ 152.00 <s class="text-secondary fw-normal">$ 180.00</s></h3>
                                    <p>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <mat-icon class="material-icons-outlined text-sm text-theme theme-yellow">star</mat-icon>
                                        <span class="text-secondary"> 152 ratings</span>
                                    </p>
                                </div>
                            </div>
                            <div class="row gx-3">
                                <div class="col">
                                    <app-incrementor></app-incrementor>
                                </div>
                                <div class="col-auto">
                                    <button matIconButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon></button>
                                </div>
                            </div>
                        </mat-card-content>
                    </mat-card>
                </swiper-slide>
            </swiper-container>

            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-12 col-lg-6 col-xl-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <div class="row gx-3 align-items-center">
                            <div class="col">
                                <mat-card-content>
                                    <p class="mb-4"><span class="badge badge-light theme-magenta">25% Offer</span></p>
                                    <p class="text-theme theme-red mb-1">Smart Watch Series</p>
                                    <h2 class="mb-1">Just at $ 999.00</h2>
                                    <p class="text-secondary small mb-4">Offer valid till 30th Dec</p>
                                    <button matButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon> Buy Now</button>
                                </mat-card-content>
                            </div>
                            <div class="col-5">
                                <div class="height-220 w-100 coverimg rounded">
                                    <img src="assets/img/product10.png" alt="" class="d-none" />
                                </div>
                            </div>
                        </div>
                    </mat-card>
                </div>
                <div class="col-12 col-md-12 col-lg-6 col-xl-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <div class="row gx-3 align-items-center">
                            <div class="col">
                                <mat-card-content>
                                    <p class="mb-4"><span class="badge badge-light theme-magenta">Flat $ 50.00 OFF</span></p>
                                    <p class="text-theme theme-red mb-1">Dress for Woman</p>
                                    <h2 class="mb-1">Now $ 210.00</h2>
                                    <p class="text-secondary small mb-4">Offer valid on App only</p>
                                    <button matButton="filled" class="theme-red"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon> Buy Now</button>
                                </mat-card-content>
                            </div>
                            <div class="col-5">
                                <div class="height-220 w-100 coverimg rounded">
                                    <img src="assets/img/product9.png" alt="" class="d-none" />
                                </div>
                            </div>
                        </div>
                    </mat-card>
                </div>
                <div class="col-12 col-md-12 col-xl-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <div class="row gx-3 align-items-center">
                            <div class="col">
                                <mat-card-content>
                                    <p class="mb-4"><span class="badge badge-light theme-magenta">25% Offer</span></p>
                                    <p class="text-theme theme-red mb-1">SmartPhone Perks</p>
                                    <h2 class="mb-1">Upto 25% Off</h2>
                                    <p class="text-secondary small mb-4">Offer valid till 30th Dec</p>
                                    <button matButton="filled"><mat-icon class="material-icons-outlined">shopping_bag</mat-icon> Buy Now</button>
                                </mat-card-content>
                            </div>
                            <div class="col-5">
                                <div class="height-220 w-100 coverimg rounded">
                                    <img src="assets/img/product11.png" alt="" class="d-none" />
                                </div>
                            </div>
                        </div>
                    </mat-card>
                </div>
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductComponent, { className: "ProductComponent", filePath: "src/app/pages/app/ecommerce/product.component.ts", lineNumber: 486 });
})();
export {
  ProductComponent
};
//# sourceMappingURL=product.component-K4YO2M5A.js.map
