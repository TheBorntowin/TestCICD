import {
  MatToolbarModule
} from "./chunk-SFUPPXOD.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-SP2SPZAY.js";
import "./chunk-NGPLRGHK.js";
import "./chunk-R6SBTVDX.js";
import "./chunk-U4HYU23P.js";
import {
  MatListItem,
  MatListModule,
  MatNavList
} from "./chunk-ALLV6QEF.js";
import "./chunk-CWBJY2AK.js";
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
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule
} from "./chunk-MCRFC4L2.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-ZLA4QS3A.js";
import {
  MatFormFieldModule
} from "./chunk-6WJUNQHU.js";
import {
  MatFormField,
  MatLabel,
  MatPrefix,
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
  MatIcon,
  MatIconModule,
  NgIf
} from "./chunk-ZG6WBW2I.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  DOCUMENT,
  Inject,
  Renderer2,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-O4O7EFUR.js";

// src/app/pages/app/applications/chat/chat.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ChatComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 27);
    \u0275\u0275listener("click", function ChatComponent_For_29_Template_mat_list_item_click_0_listener() {
      const contact_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectContact(contact_r2));
    });
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 28)(3, "div", 29);
    \u0275\u0275element(4, "img", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 16)(6, "p", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 32);
    \u0275\u0275text(9, "Last Message");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const contact_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active-contact", ((tmp_10_0 = ctx_r2.activeContact()) == null ? null : tmp_10_0.id) === contact_r2.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", contact_r2.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contact_r2.name);
  }
}
function ChatComponent_ForEmpty_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "No contacts found.");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_mat_card_32_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 15);
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_mat_card_32_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 15);
    \u0275\u0275text(1, "search");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_mat_card_32_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 43)(1, "mat-label");
    \u0275\u0275text(2, "Search in Chat");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 51);
    \u0275\u0275elementStart(4, "mat-icon", 19);
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd()();
  }
}
function ChatComponent_mat_card_32_For_56_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 54);
    \u0275\u0275text(1, "done_all");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_mat_card_32_For_56_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 55);
    \u0275\u0275text(1, "done_all");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_mat_card_32_For_56_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 56);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function ChatComponent_mat_card_32_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 28)(2, "mat-card", 53)(3, "mat-card-content");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 6);
    \u0275\u0275conditionalCreate(6, ChatComponent_mat_card_32_For_56_Conditional_6_Template, 2, 0, "mat-icon", 54)(7, ChatComponent_mat_card_32_For_56_Conditional_7_Template, 2, 0, "mat-icon", 55)(8, ChatComponent_mat_card_32_For_56_Conditional_8_Template, 2, 0, "mat-icon", 56);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    \u0275\u0275classProp("justify-content-end", message_r5.sender === "user");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("theme-cyan", message_r5.sender === "user")("theme-violet", message_r5.sender === "other");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", message_r5.content, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-end", message_r5.sender === "user");
    \u0275\u0275advance();
    \u0275\u0275conditional(message_r5.status === "read" ? 6 : message_r5.status === "sent" ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", message_r5.time, " ");
  }
}
function ChatComponent_mat_card_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 33)(1, "mat-card-header")(2, "div", 34)(3, "div", 35)(4, "div", 28)(5, "button", 14);
    \u0275\u0275listener("click", function ChatComponent_mat_card_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.innersidebar());
    });
    \u0275\u0275elementStart(6, "mat-icon", 15);
    \u0275\u0275text(7, "notes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 36)(9, "div", 3)(10, "div", 28);
    \u0275\u0275element(11, "img", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 16)(13, "p", 31);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 32);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 28)(18, "button", 38);
    \u0275\u0275listener("click", function ChatComponent_mat_card_32_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSearch());
    });
    \u0275\u0275conditionalCreate(19, ChatComponent_mat_card_32_Conditional_19_Template, 2, 0, "mat-icon", 15)(20, ChatComponent_mat_card_32_Conditional_20_Template, 2, 0, "mat-icon", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 28)(22, "button", 39);
    \u0275\u0275listener("click", function ChatComponent_mat_card_32_Template_button_click_22_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(23, "mat-icon", 15);
    \u0275\u0275text(24, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-menu", 40, 0)(27, "button", 41)(28, "mat-icon", 15);
    \u0275\u0275text(29, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "View Contact");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 41)(33, "mat-icon", 15);
    \u0275\u0275text(34, "volume_mute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36, "Mute Chat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 41)(38, "mat-icon", 15);
    \u0275\u0275text(39, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Find in Chat");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "button", 41)(43, "mat-icon", 15);
    \u0275\u0275text(44, "report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "button", 42)(48, "mat-icon", 15);
    \u0275\u0275text(49, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51, "Delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(52, ChatComponent_mat_card_32_Conditional_52_Template, 6, 0, "mat-form-field", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "mat-card-content", 44)(54, "div", 45);
    \u0275\u0275repeaterCreate(55, ChatComponent_mat_card_32_For_56_Template, 10, 11, "div", 46, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "mat-card-actions")(58, "div", 34)(59, "mat-form-field", 47)(60, "button", 48)(61, "mat-icon", 15);
    \u0275\u0275text(62, "attach_file");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "mat-label");
    \u0275\u0275text(64, "Type a message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_mat_card_32_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.messageInput, $event) || (ctx_r2.messageInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ChatComponent_mat_card_32_Template_input_keyup_enter_65_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 50);
    \u0275\u0275listener("click", function ChatComponent_mat_card_32_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendMessage());
    });
    \u0275\u0275elementStart(67, "mat-icon", 15);
    \u0275\u0275text(68, "send");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const actionsMenu_r6 = \u0275\u0275reference(26);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("src", (tmp_2_0 = ctx_r2.activeContact()) == null ? null : tmp_2_0.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r2.activeContact()) == null ? null : tmp_3_0.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r2.activeContact()) == null ? null : tmp_4_0.status);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.isSearchVisible() ? 19 : 20);
    \u0275\u0275advance(3);
    \u0275\u0275property("matMenuTriggerFor", actionsMenu_r6);
    \u0275\u0275advance(30);
    \u0275\u0275conditional(ctx_r2.isSearchVisible() ? 52 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.dummyMessages());
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.messageInput);
  }
}
function ChatComponent_mat_card_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 57)(1, "mat-card-content")(2, "div", 35)(3, "div", 28)(4, "button", 14);
    \u0275\u0275listener("click", function ChatComponent_mat_card_33_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.innersidebar());
    });
    \u0275\u0275elementStart(5, "mat-icon", 15);
    \u0275\u0275text(6, "notes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(7, "img", 58);
    \u0275\u0275elementStart(8, "h3", 5);
    \u0275\u0275text(9, "No message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 59);
    \u0275\u0275text(11, "Select contact to see message");
    \u0275\u0275elementEnd()()();
  }
}
var ChatComponent = class _ChatComponent {
  constructor(renderer, document) {
    this.renderer = renderer;
    this.document = document;
    this.isSearchVisible = signal(false, ...ngDevMode ? [{ debugName: "isSearchVisible" }] : (
      /* istanbul ignore next */
      []
    ));
    this.contacts = [
      { id: 1, name: "Alice Smith", image: "assets/img/user-1.jpg", status: "online" },
      { id: 2, name: "Bob Johnson", image: "assets/img/user-2.jpg", status: "offline" },
      { id: 3, name: "Charlie Brown", image: "assets/img/user-3.jpg", status: "online" },
      { id: 4, name: "Diana Prince", image: "assets/img/user-4.jpg", status: "away" },
      { id: 5, name: "John Doe", image: "assets/img/user-5.jpg", status: "online" },
      { id: 6, name: "Jane Doe", image: "assets/img/user-6.jpg", status: "offline" },
      { id: 7, name: "Kevin Durant", image: "assets/img/user-7.jpg", status: "online" },
      { id: 8, name: "Lebron James", image: "assets/img/user-8.jpg", status: "offline" },
      { id: 9, name: "Stephen Curry", image: "assets/img/user-9.jpg", status: "online" },
      { id: 10, name: "Kobe Bryant", image: "assets/img/user-10.jpg", status: "away" }
    ];
    this.searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activeContact = signal(null, ...ngDevMode ? [{ debugName: "activeContact" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dummyMessages = signal([
      { sender: "other", content: "Hey, how are you?", time: "09:15 am", status: "read" },
      { sender: "user", content: "I'm doing great, thanks for asking! How about you?", time: "09:13 am", status: "read" },
      { sender: "other", content: "I'm doing fine as well. I was just wondering if you wanted to grab a coffee this week?", time: "09:12 am", status: "sent" },
      { sender: "user", content: "Sounds great! How about Thursday at 10 AM?", time: "09:11 am", status: "sent" },
      { sender: "other", content: "Thursday at 10 AM works for me. See you then!", time: "08:08 am", status: "sending" }
    ], ...ngDevMode ? [{ debugName: "dummyMessages" }] : (
      /* istanbul ignore next */
      []
    ));
    this.messageInput = signal("", ...ngDevMode ? [{ debugName: "messageInput" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredContacts = computed(() => {
      const query = this.searchQuery().toLowerCase();
      if (!query) {
        return this.contacts;
      }
      return this.contacts.filter((contact) => contact.name.toLowerCase().includes(query));
    }, ...ngDevMode ? [{ debugName: "filteredContacts" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngAfterInit() {
  }
  // Method to handle contact selection
  selectContact(contact) {
    this.activeContact.set(contact);
  }
  sendMessage() {
    const message = this.messageInput().trim();
    if (message) {
      this.dummyMessages.update((messages) => [...messages, { sender: "user", content: message, time: "now", status: "sending" }]);
      this.messageInput.set("");
    }
  }
  // toggle search
  toggleSearch() {
    this.isSearchVisible.update((value) => !value);
  }
  // inner sidebar toggle
  innersidebar() {
    const body = this.document.body;
    const className = "innermenu-close";
    if (body.classList.contains(className)) {
      this.renderer.removeClass(body, className);
    } else {
      this.renderer.addClass(body, className);
    }
  }
  static {
    this.\u0275fac = function ChatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatComponent, selectors: [["app-chat"]], decls: 34, vars: 4, consts: [["actionsMenu", "matMenu"], [1, "container-fluid", "fade-in", "mb-3", "mb-lg-4"], [1, "bg-light-theme", "shadow-none", "pt-3", "pb-lg-3", "px-3"], [1, "row", "gx-3", "align-items-center"], [1, "col", "mb-3", "mb-xl-0", "py-1"], [1, "mb-1"], [1, "text-secondary", "small"], [1, "col-auto", "mb-3", "mb-xl-0"], [1, "container"], [1, "inner-sidebar-wrap"], [1, "inner-sidebar", "px-0"], [1, "p-3"], [1, "row", "gx-3"], [1, "col-auto", "d-lg-none"], ["matIconButton", "", "aria-label", "Inner Menu", 3, "click"], [1, "material-icons-outlined"], [1, "col"], ["appearance", "outline", 1, "w-100", "inline-small"], ["matInput", "", "placeholder", "Search...", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [1, "overflow-y-auto", "height-dynamic", 2, "--h-dynamic", "calc(100vh - 330px)"], [1, "contact-list"], [3, "active-contact"], [1, ""], [1, "inner-sidebar-content", "pb-1"], ["class", "w-100 height-dynamic", "style", "--h-dynamic:calc(100vh - 250px)", 4, "ngIf"], ["class", "text-center height-dynamic", "style", "--h-dynamic:calc(100vh - 250px)", 4, "ngIf"], [3, "click"], [1, "col-auto"], [1, "avatar", "avatar-40", "rounded-circle", "coverimg"], [1, "", 3, "src"], [1, "mb-0"], [1, "opacity-75", "small"], [1, "w-100", "height-dynamic", 2, "--h-dynamic", "calc(100vh - 250px)"], [1, "w-100"], [1, "row", "gx-3", "align-items-center", "mb-3"], [1, "col", "col-lg"], [1, "avatar", "avatar-40", "rounded-circle", 3, "src"], ["matIconButton", "", 3, "click"], ["matIconButton", "", "aria-label", "Actions", 3, "click", "matMenuTriggerFor"], ["xPosition", "before"], ["mat-menu-item", ""], ["mat-menu-item", "", 1, "theme-red"], ["appearance", "outline", 1, "w-100", "inline-small", "border-light", "mb-3"], [1, "flex-grow-1", "overflow-y-auto", "height-dynamic", 2, "--h-dynamic", "calc(100% - 144px)"], [1, "chat-list"], [1, "row", "gx-3", "mb-3", 3, "justify-content-end"], ["appearance", "fill", 1, "bg-none", "w-100", "mb-0"], ["matIconButton", "", "matPrefix", ""], ["matInput", "", "placeholder", "Type a message...", 3, "ngModelChange", "keyup.enter", "ngModel"], ["matIconButton", "", "matSuffix", "", 3, "click"], ["matInput", "", "placeholder", "Search in Chat..."], [1, "row", "gx-3", "mb-3"], [1, "bg-light-theme", "mb-1", "shadow-none"], [1, "text-theme", "theme-cyan", "align-middle"], [1, "align-middle", "text-secondary"], [1, "align-middle"], [1, "text-center", "height-dynamic", 2, "--h-dynamic", "calc(100vh - 250px)"], ["src", "assets/img/nomessage.png", "alt", "", 1, "width-300", "mt-4", "mt-lg-5"], [1, "text-secondary"]], template: function ChatComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-card", 2)(2, "div", 3)(3, "div", 4)(4, "h3", 5);
        \u0275\u0275text(5, "Chat Messages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 6);
        \u0275\u0275text(7, "Communicate transparently and with ease");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275element(9, "app-page-right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "button", 14);
        \u0275\u0275listener("click", function ChatComponent_Template_button_click_16_listener() {
          return ctx.innersidebar();
        });
        \u0275\u0275elementStart(17, "mat-icon", 15);
        \u0275\u0275text(18, "arrow_back");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 16)(20, "mat-form-field", 17)(21, "mat-label");
        \u0275\u0275text(22, "Search...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function ChatComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-icon", 19);
        \u0275\u0275text(25, "search");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(26, "div", 20)(27, "mat-nav-list", 21);
        \u0275\u0275repeaterCreate(28, ChatComponent_For_29_Template, 10, 4, "mat-list-item", 22, _forTrack0, false, ChatComponent_ForEmpty_30_Template, 2, 0, "p", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 24);
        \u0275\u0275template(32, ChatComponent_mat_card_32_Template, 69, 7, "mat-card", 25)(33, ChatComponent_mat_card_33_Template, 12, 0, "mat-card", 26);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.filteredContacts());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.activeContact());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.activeContact());
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatListModule, MatNavList, MatListItem, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatLabel, MatPrefix, MatSuffix, MatFormFieldModule, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatToolbarModule, MatButtonModule, MatIconButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatComponent, [{
    type: Component,
    args: [{ selector: "app-chat", standalone: true, imports: [CommonModule, FormsModule, MatListModule, MatMenuModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule, MatToolbarModule, MatButtonModule], template: `
        <div class="container-fluid fade-in mb-3 mb-lg-4">
            <mat-card class="bg-light-theme shadow-none pt-3 pb-lg-3 px-3">
                <div class="row gx-3 align-items-center">
                    <div class="col mb-3 mb-xl-0 py-1">
                        <h3 class="mb-1">Chat Messages</h3>
                        <p class="text-secondary small">Communicate transparently and with ease</p>
                    </div>

                    <div class="col-auto mb-3 mb-xl-0">
                        <app-page-right></app-page-right>
                    </div>
                </div>
            </mat-card>
        </div>

        <div class="container">
            <div class="inner-sidebar-wrap">
                <div class="inner-sidebar px-0">
                    <div class="p-3">
                        <div class="row gx-3">
                            <div class="col-auto d-lg-none">
                                <button matIconButton (click)="innersidebar()" aria-label="Inner Menu">
                                    <mat-icon class="material-icons-outlined">arrow_back</mat-icon>
                                </button>
                            </div>
                            <div class="col">
                                <mat-form-field appearance="outline" class="w-100 inline-small">
                                    <mat-label>Search...</mat-label>
                                    <input matInput [(ngModel)]="searchQuery" placeholder="Search..." />
                                    <mat-icon matSuffix>search</mat-icon>
                                </mat-form-field>
                            </div>
                        </div>
                    </div>
                    <div class=" overflow-y-auto height-dynamic" style="--h-dynamic:calc(100vh - 330px)">
                        <mat-nav-list class="contact-list">
                            @for (contact of filteredContacts(); track contact.id) {
                            <mat-list-item (click)="selectContact(contact)" [class.active-contact]="activeContact()?.id === contact.id">
                                <div class="row gx-3 align-items-center">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 rounded-circle coverimg">
                                            <img [src]="contact.image" class="" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <p class="mb-0">{{ contact.name }}</p>
                                        <p class="opacity-75 small">Last Message</p>
                                    </div>
                                </div>
                            </mat-list-item>
                            } @empty {
                            <p class="">No contacts found.</p>
                            }
                        </mat-nav-list>
                    </div>
                </div>
                <div class="inner-sidebar-content pb-1">
                    <mat-card *ngIf="activeContact()" class="w-100 height-dynamic" style="--h-dynamic:calc(100vh - 250px)">
                        <mat-card-header>
                            <div class="w-100">
                                <div class="row gx-3 align-items-center mb-3">
                                    <div class="col-auto">
                                        <button matIconButton (click)="innersidebar()" aria-label="Inner Menu">
                                            <mat-icon class="material-icons-outlined">notes</mat-icon>
                                        </button>
                                    </div>
                                    <div class="col col-lg">
                                        <div class="row gx-3 align-items-center">
                                            <div class="col-auto">
                                                <img [src]="activeContact()?.image" class="avatar avatar-40 rounded-circle" />
                                            </div>
                                            <div class="col">
                                                <p class="mb-0">{{ activeContact()?.name }}</p>
                                                <p class="opacity-75 small">{{ activeContact()?.status }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <button matIconButton (click)="toggleSearch()">
                                            @if (isSearchVisible()) {
                                            <mat-icon class="material-icons-outlined">close</mat-icon>
                                            } @else {
                                            <mat-icon class="material-icons-outlined">search</mat-icon>
                                            }
                                        </button>
                                    </div>
                                    <div class="col-auto ">
                                        <button matIconButton [matMenuTriggerFor]="actionsMenu" aria-label="Actions" (click)="$event.stopPropagation()">
                                            <mat-icon class="material-icons-outlined">more_vert</mat-icon>
                                        </button>
                                        <mat-menu #actionsMenu="matMenu" xPosition="before">
                                            <button mat-menu-item><mat-icon class="material-icons-outlined">person</mat-icon><span>View Contact</span></button>
                                            <button mat-menu-item><mat-icon class="material-icons-outlined">volume_mute</mat-icon><span>Mute Chat</span></button>
                                            <button mat-menu-item><mat-icon class="material-icons-outlined">search</mat-icon><span>Find in Chat</span></button>
                                            <button mat-menu-item><mat-icon class="material-icons-outlined">report</mat-icon><span>Report</span></button>
                                            <button mat-menu-item class="theme-red"><mat-icon class="material-icons-outlined">delete</mat-icon><span>Delete</span></button>
                                        </mat-menu>
                                    </div>
                                </div>
                                @if (isSearchVisible()) {
                                <mat-form-field appearance="outline" class="w-100 inline-small border-light mb-3">
                                    <mat-label>Search in Chat</mat-label>
                                    <input matInput placeholder="Search in Chat..." />
                                    <mat-icon matSuffix>search</mat-icon>
                                </mat-form-field>
                                }
                            </div>
                        </mat-card-header>
                        <mat-card-content class="flex-grow-1 overflow-y-auto height-dynamic" style="--h-dynamic:calc(100% - 144px)">
                            <!-- Chat Messages -->
                            <div class="chat-list">
                                @for (message of dummyMessages(); track $index) {
                                <div [class.justify-content-end]="message.sender === 'user'" class="row gx-3 mb-3">
                                    <div class="col-auto">
                                        <mat-card [class.theme-cyan]="message.sender === 'user'" [class.theme-violet]="message.sender === 'other'" class="bg-light-theme mb-1 shadow-none">
                                            <mat-card-content>
                                                {{ message.content }}
                                            </mat-card-content>
                                        </mat-card>
                                        <p [class.text-end]="message.sender === 'user'" class="text-secondary small">
                                            @if (message.status === "read") {
                                            <mat-icon class="text-theme theme-cyan align-middle">done_all</mat-icon>
                                            } @else if((message.status === "sent")) {
                                            <mat-icon class="align-middle text-secondary">done_all</mat-icon>
                                            } @else{
                                            <mat-icon class="align-middle">check</mat-icon>
                                            }
                                            {{ message.time }}
                                        </p>
                                    </div>
                                </div>
                                }
                            </div>
                        </mat-card-content>
                        <mat-card-actions>
                            <!-- Chat Input Area -->
                            <div class="w-100">
                                <mat-form-field appearance="fill" class="bg-none w-100 mb-0">
                                    <button matIconButton matPrefix>
                                        <mat-icon class="material-icons-outlined">attach_file</mat-icon>
                                    </button>
                                    <mat-label>Type a message</mat-label>
                                    <input matInput [(ngModel)]="messageInput" placeholder="Type a message..." (keyup.enter)="sendMessage()" />

                                    <button matIconButton (click)="sendMessage()" matSuffix>
                                        <mat-icon class="material-icons-outlined">send</mat-icon>
                                    </button>
                                </mat-form-field>
                            </div>
                        </mat-card-actions>
                    </mat-card>
                    <mat-card *ngIf="!activeContact()" class="text-center height-dynamic" style="--h-dynamic:calc(100vh - 250px)">
                        <mat-card-content>
                            <div class="row gx-3 align-items-center mb-3">
                                <div class="col-auto">
                                    <button matIconButton (click)="innersidebar()" aria-label="Inner Menu">
                                        <mat-icon class="material-icons-outlined">notes</mat-icon>
                                    </button>
                                </div>
                            </div>
                            <img src="assets/img/nomessage.png" alt="" class="width-300 mt-4 mt-lg-5" />
                            <h3 class="mb-1">No message</h3>
                            <p class="text-secondary">Select contact to see message</p>
                        </mat-card-content>
                    </mat-card>
                </div>
            </div>
        </div>
    `, schemas: [CUSTOM_ELEMENTS_SCHEMA] }]
  }], () => [{ type: Renderer2 }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "src/app/pages/app/applications/chat/chat.component.ts", lineNumber: 204 });
})();
export {
  ChatComponent
};
//# sourceMappingURL=chat.component-GIAQKMGK.js.map
