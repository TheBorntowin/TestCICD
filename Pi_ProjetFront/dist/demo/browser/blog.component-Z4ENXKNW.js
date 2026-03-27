import {
  MatToolbarModule
} from "./chunk-SFUPPXOD.js";
import {
  MatMenuModule
} from "./chunk-SP2SPZAY.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemTitle,
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
  MatCardImage,
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
import "./chunk-XPQBAS5O.js";
import {
  FormsModule
} from "./chunk-HGLJSDQ3.js";
import "./chunk-IRYVP2Q6.js";
import {
  CommonModule,
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O4O7EFUR.js";

// src/app/pages/website/blog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function BlogComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item", 25)(1, "div", 27);
    \u0275\u0275element(2, "img", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6, " By ");
    \u0275\u0275elementStart(7, "span", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 31)(11, "span", 32);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", blog_r1.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r1.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(blog_r1.author);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" on ", blog_r1.date, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", blog_r1.category, " ");
  }
}
function BlogComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "mat-card", 11)(2, "div", 33);
    \u0275\u0275element(3, "img", 28);
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-card-content", 15)(7, "h2", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 35);
    \u0275\u0275text(10, " By ");
    \u0275\u0275elementStart(11, "span", 6);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 18);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 19);
    \u0275\u0275text(17, " Read More ");
    \u0275\u0275elementStart(18, "mat-icon", 20);
    \u0275\u0275text(19, "arrow_forward");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const blog_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", blog_r2.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", blog_r2.category, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(blog_r2.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(blog_r2.author);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" on ", blog_r2.date, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r2.excerpt);
  }
}
var BlogComponent = class _BlogComponent {
  constructor() {
    this.blogs = signal([
      {
        id: 1,
        title: "The Future of Expressive Angular Interfaces",
        author: "Jane Doe",
        date: "Aug 21, 2026",
        imageUrl: "assets/img/product1.jpg",
        excerpt: "Exploring how modern web frameworks like Angular can embrace expressive design principles to create more human-centric and delightful user experiences. We dive into the use of subtle animations, fluid typography, and unconventional layouts.",
        category: "Design"
      },
      {
        id: 2,
        title: "Building a Dynamic Blog with Signals",
        author: "John Smith",
        date: "Aug 15, 2026",
        imageUrl: "assets/img/product2.jpg",
        excerpt: "Learn how to leverage Angular signals for a reactive and efficient data flow in your applications. This tutorial walks you through creating a simple, dynamic blog list that updates in real-time without complex state management.",
        category: "Development"
      },
      {
        id: 3,
        title: "Material Design Evolved: A New Perspective",
        author: "Alice Johnson",
        date: "Aug 10, 2026",
        imageUrl: "assets/img/product3.jpg",
        excerpt: "Material Design is evolving beyond its rigid grid-based past. We discuss how designers and developers are adding personality and character to their UIs, moving towards a more fluid and artistic expression of the design language.",
        category: "UI/UX"
      },
      {
        id: 4,
        title: "Designing for the Modern User: Usability vs. Delight",
        author: "Robert Brown",
        date: "Aug 05, 2026",
        imageUrl: "assets/img/product4.jpg",
        excerpt: "A deep dive into the delicate balance between creating a highly usable interface and one that delights the user. We explore case studies where simple design choices led to significant improvements in user satisfaction.",
        category: "UI/UX"
      },
      {
        id: 5,
        title: "Material CSS in Angular: A Developer's Guide",
        author: "Emily Davis",
        date: "Jul 30, 2026",
        imageUrl: "assets/img/product5.jpg",
        excerpt: "This guide provides a comprehensive overview of using Material CSS with Angular. From setup to practical examples, learn how to build beautiful, responsive UIs with utility-first CSS, drastically speeding up your development workflow.",
        category: "Development"
      },
      {
        id: 6,
        title: "The Power of Generative Design in UI",
        author: "Michael Wilson",
        date: "Jul 25, 2026",
        imageUrl: "assets/img/product6.jpg",
        excerpt: "Exploring how generative design principles and AI can automate and enhance the creation of user interfaces. We look at tools and techniques that help designers create unique and highly functional layouts with minimal manual effort.",
        category: "Technology"
      }
    ], ...ngDevMode ? [{ debugName: "blogs" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngAfterInit() {
  }
  static {
    this.\u0275fac = function BlogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blog"]], decls: 47, vars: 0, consts: [[1, "bg-theme-white-gradient", "bg-light-gradient", "position-relative", "pt-5", "mb-3", "mb-lg-4"], [1, "container", "py-4", "pt-lg-5", "z-index-1", "position-relative"], [1, "row", "gx-3", "gx-lg-4", "justify-content-center", "text-center"], [1, "col-12", "col-lg-8", "col-xl-6", "pt-3", "pt-lg-5"], [1, "opacity-75"], [1, "mb-3"], [1, "text-theme"], [1, "opacity-75", "mb-4", "mb-lg-5"], [1, "container"], [1, "row", "gx-3", "gx-lg-4"], [1, "col-12", "col-lg-6", "col-xl-8", "ms-auto"], [1, "mb-3", "mb-lg-4"], ["mat-card-image", "", "routerLink", "/web/blog-details", 1, "coverimg", "w-100", "height-300"], ["src", "assets/img/category1.jpg", "alt", "Blog post image", 1, "d-none"], [1, "position-absolute", "top-0", "start-0", "m-3", "badge", "theme-red"], [1, "pt-3", "pt-lg-4"], [1, "mb-2"], [1, "text-secondary", "mb-3", "mb-lg-4"], [1, "text-secondary", "mb-4"], ["routerLink", "/web/blog-details", "matButton", ""], ["iconPositionEnd", ""], [1, "col-12", "col-lg-6", "col-xl-4", "ms-auto"], [1, "mb-3", "mb-lg-4", "w-100"], [1, "text-theme", "mb-1"], [2, "--mat-list-list-item-three-line-container-height", "88px"], ["routerLink", "/web/blog-details"], [1, "col-12", "col-md-6", "col-lg-4"], ["matListItemIcon", "", "routerLink", "/web/blog-details", 1, "avatar", "avatar-70", "rounded", "coverimg"], ["alt", "Blog post image", 1, "d-none", 3, "src"], ["matListItemTitle", ""], ["matListItemLine", ""], ["matListItemLine", "", 2, "line-height", "20px"], [1, "badge", "badge-light"], ["mat-card-image", "", "routerLink", "/web/blog-details", 1, "coverimg", "w-100", "height-200"], [1, "position-absolute", "top-0", "start-0", "m-3", "badge", "badge-theme"], [1, "text-secondary", "mb-3"]], template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        \u0275\u0275text(5, "Our Blog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1", 5);
        \u0275\u0275text(7, " Read our ");
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "latest articles");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " and updates ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 7);
        \u0275\u0275text(12, "We publish our latest research, ideas, trends and product announcements for our genuine subscribers to read. We believe in trending design for our product.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "mat-card", 11)(17, "div", 12);
        \u0275\u0275element(18, "img", 13);
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275text(20, " United States ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "mat-card-content", 15)(22, "h2", 16);
        \u0275\u0275text(23, "Material CSS in Angular: A Developer's Guide");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 17);
        \u0275\u0275text(25, "By ");
        \u0275\u0275elementStart(26, "span", 6);
        \u0275\u0275text(27, "AdminUIUX");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " on Jul 30, 2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p", 18);
        \u0275\u0275text(30, "A deep dive into the delicate balance between creating a highly usable interface and one that delights the user. We explore case studies where simple design choices led to significant improvements in user satisfaction.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "a", 19);
        \u0275\u0275text(32, " Read More ");
        \u0275\u0275elementStart(33, "mat-icon", 20);
        \u0275\u0275text(34, "arrow_forward");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(35, "div", 21)(36, "mat-card", 22)(37, "mat-card-content")(38, "p", 23);
        \u0275\u0275text(39, "From the best Authors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "h2");
        \u0275\u0275text(41, "Trending Topics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "mat-list", 24);
        \u0275\u0275repeaterCreate(43, BlogComponent_For_44_Template, 13, 5, "mat-list-item", 25, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(45, BlogComponent_For_46_Template, 20, 6, "div", 26, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(43);
        \u0275\u0275repeater(ctx.blogs().slice(0, 5));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.blogs());
      }
    }, dependencies: [CommonModule, RouterLink, FormsModule, MatListModule, MatList, MatListItem, MatListItemIcon, MatListItemLine, MatListItemTitle, MatMenuModule, MatIconModule, MatIcon, MatInputModule, MatFormFieldModule, MatCardModule, MatCard, MatCardContent, MatCardImage, MatToolbarModule, MatButtonModule, MatButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogComponent, [{
    type: Component,
    args: [{ selector: "app-blog", standalone: true, imports: [CommonModule, RouterLink, FormsModule, MatListModule, MatMenuModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule, MatButtonModule], template: `
        <div class="bg-theme-white-gradient bg-light-gradient position-relative pt-5 mb-3 mb-lg-4">
            <div class="container py-4 pt-lg-5 z-index-1 position-relative ">
                <div class="row gx-3 gx-lg-4 justify-content-center text-center">
                    <div class="col-12 col-lg-8 col-xl-6 pt-3 pt-lg-5">
                        <h4 class="opacity-75">Our Blog</h4>
                        <h1 class="mb-3">
                            Read our
                            <span class="text-theme">latest articles</span> and updates
                        </h1>
                        <p class="opacity-75 mb-4 mb-lg-5">We publish our latest research, ideas, trends and product announcements for our genuine subscribers to read. We believe in trending design for our product.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-lg-6 col-xl-8 ms-auto">
                    <mat-card class="mb-3 mb-lg-4">
                        <!-- Blog Image -->
                        <div mat-card-image class="coverimg w-100 height-300" routerLink="/web/blog-details">
                            <img src="assets/img/category1.jpg" alt="Blog post image" class="d-none" />
                            <!-- Category Tag -->
                            <span class="position-absolute top-0 start-0 m-3 badge theme-red"> United States </span>
                        </div>
                        <mat-card-content class="pt-3 pt-lg-4">
                            <!-- Blog Content -->
                            <h2 class="mb-2">Material CSS in Angular: A Developer's Guide</h2>
                            <p class="text-secondary mb-3 mb-lg-4">By <span class="text-theme">AdminUIUX</span> on Jul 30, 2026</p>
                            <p class="text-secondary mb-4">A deep dive into the delicate balance between creating a highly usable interface and one that delights the user. We explore case studies where simple design choices led to significant improvements in user satisfaction.</p>

                            <a routerLink="/web/blog-details" matButton> Read More <mat-icon iconPositionEnd>arrow_forward</mat-icon> </a>
                        </mat-card-content>
                    </mat-card>
                </div>
                <div class="col-12 col-lg-6 col-xl-4 ms-auto">
                    <mat-card class="mb-3 mb-lg-4 w-100">
                        <mat-card-content>
                            <p class="text-theme mb-1">From the best Authors</p>
                            <h2>Trending Topics</h2>
                        </mat-card-content>
                        <mat-list style="--mat-list-list-item-three-line-container-height:88px">
                            @for (blog of blogs().slice(0, 5); track blog.id) {
                            <mat-list-item routerLink="/web/blog-details">
                                <div matListItemIcon routerLink="/web/blog-details" class="avatar avatar-70 rounded coverimg">
                                    <img [src]="blog.imageUrl" alt="Blog post image" class="d-none" />
                                </div>
                                <span matListItemTitle>{{ blog.title }}</span>
                                <span matListItemLine>
                                    By <span class="text-theme">{{ blog.author }}</span> on {{ blog.date }}
                                </span>
                                <span matListItemLine style="line-height:20px">
                                    <span class="badge badge-light">
                                        {{ blog.category }}
                                    </span>
                                </span>
                            </mat-list-item>
                            }
                        </mat-list>
                    </mat-card>
                </div>

                @for (blog of blogs(); track blog.id) {
                <!-- Blog Post Card -->
                <div class="col-12 col-md-6 col-lg-4">
                    <mat-card class="mb-3 mb-lg-4">
                        <!-- Blog Image -->
                        <div mat-card-image routerLink="/web/blog-details" class="coverimg w-100 height-200">
                            <img [src]="blog.imageUrl" alt="Blog post image" class="d-none" />
                            <!-- Category Tag -->
                            <span class="position-absolute top-0 start-0 m-3 badge badge-theme">
                                {{ blog.category }}
                            </span>
                        </div>
                        <mat-card-content class="pt-3 pt-lg-4">
                            <!-- Blog Content -->
                            <h2 class="mb-2">{{ blog.title }}</h2>
                            <p class="text-secondary mb-3">
                                By <span class="text-theme">{{ blog.author }}</span> on {{ blog.date }}
                            </p>
                            <p class="text-secondary mb-4">{{ blog.excerpt }}</p>

                            <a routerLink="/web/blog-details" matButton> Read More <mat-icon iconPositionEnd>arrow_forward</mat-icon> </a>
                        </mat-card-content>
                    </mat-card>
                </div>
                }
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "src/app/pages/website/blog.component.ts", lineNumber: 112 });
})();
export {
  BlogComponent
};
//# sourceMappingURL=blog.component-Z4ENXKNW.js.map
