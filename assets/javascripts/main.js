(() => {
  // node_modules/flowbite/dist/flowbite.js
  (() => {
    "use strict";
    var __webpack_exports__ = {};
    ;
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    var Default = {
      alwaysOpen: false,
      activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
      inactiveClasses: "text-gray-500 dark:text-gray-400",
      onOpen: function onOpen() {
      },
      onClose: function onClose() {
      },
      onToggle: function onToggle() {
      }
    };
    var Accordion2 = /* @__PURE__ */ function() {
      function Accordion3() {
        var items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck(this, Accordion3);
        this._items = items;
        this._options = _objectSpread(_objectSpread({}, Default), options);
        this._init();
      }
      _createClass(Accordion3, [{
        key: "_init",
        value: function _init() {
          var _this = this;
          if (this._items.length) {
            this._items.map(function(item) {
              if (item.active) {
                _this.open(item.id);
              }
              item.triggerEl.addEventListener("click", function() {
                _this.toggle(item.id);
              });
            });
          }
        }
      }, {
        key: "getItem",
        value: function getItem(id) {
          return this._items.filter(function(item) {
            return item.id === id;
          })[0];
        }
      }, {
        key: "open",
        value: function open(id) {
          var _this2 = this, _item$triggerEl$class, _item$triggerEl$class2;
          var item = this.getItem(id);
          if (!this._options.alwaysOpen) {
            this._items.map(function(i) {
              if (i !== item) {
                var _i$triggerEl$classLis, _i$triggerEl$classLis2;
                (_i$triggerEl$classLis = i.triggerEl.classList).remove.apply(_i$triggerEl$classLis, _toConsumableArray(_this2._options.activeClasses.split(" ")));
                (_i$triggerEl$classLis2 = i.triggerEl.classList).add.apply(_i$triggerEl$classLis2, _toConsumableArray(_this2._options.inactiveClasses.split(" ")));
                i.targetEl.classList.add("hidden");
                i.triggerEl.setAttribute("aria-expanded", false);
                i.active = false;
                if (i.iconEl) {
                  i.iconEl.classList.remove("rotate-180");
                }
              }
            });
          }
          (_item$triggerEl$class = item.triggerEl.classList).add.apply(_item$triggerEl$class, _toConsumableArray(this._options.activeClasses.split(" ")));
          (_item$triggerEl$class2 = item.triggerEl.classList).remove.apply(_item$triggerEl$class2, _toConsumableArray(this._options.inactiveClasses.split(" ")));
          item.triggerEl.setAttribute("aria-expanded", true);
          item.targetEl.classList.remove("hidden");
          item.active = true;
          if (item.iconEl) {
            item.iconEl.classList.add("rotate-180");
          }
          this._options.onOpen(this, item);
        }
      }, {
        key: "toggle",
        value: function toggle(id) {
          var item = this.getItem(id);
          if (item.active) {
            this.close(id);
          } else {
            this.open(id);
          }
          this._options.onToggle(this, item);
        }
      }, {
        key: "close",
        value: function close(id) {
          var _item$triggerEl$class3, _item$triggerEl$class4;
          var item = this.getItem(id);
          (_item$triggerEl$class3 = item.triggerEl.classList).remove.apply(_item$triggerEl$class3, _toConsumableArray(this._options.activeClasses.split(" ")));
          (_item$triggerEl$class4 = item.triggerEl.classList).add.apply(_item$triggerEl$class4, _toConsumableArray(this._options.inactiveClasses.split(" ")));
          item.targetEl.classList.add("hidden");
          item.triggerEl.setAttribute("aria-expanded", false);
          item.active = false;
          if (item.iconEl) {
            item.iconEl.classList.remove("rotate-180");
          }
          this._options.onClose(this, item);
        }
      }]);
      return Accordion3;
    }();
    window.Accordion = Accordion2;
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll("[data-accordion]").forEach(function(accordionEl) {
        var alwaysOpen = accordionEl.getAttribute("data-accordion");
        var activeClasses = accordionEl.getAttribute("data-active-classes");
        var inactiveClasses = accordionEl.getAttribute("data-inactive-classes");
        var items = [];
        accordionEl.querySelectorAll("[data-accordion-target]").forEach(function(el) {
          var item = {
            id: el.getAttribute("data-accordion-target"),
            triggerEl: el,
            targetEl: document.querySelector(el.getAttribute("data-accordion-target")),
            iconEl: el.querySelector("[data-accordion-icon]"),
            active: el.getAttribute("aria-expanded") === "true" ? true : false
          };
          items.push(item);
        });
        new Accordion2(items, {
          alwaysOpen: alwaysOpen === "open" ? true : false,
          activeClasses: activeClasses ? activeClasses : Default.activeClasses,
          inactiveClasses: inactiveClasses ? inactiveClasses : Default.inactiveClasses
        });
      });
    });
    const accordion = Accordion2;
    ;
    function collapse_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function collapse_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? collapse_ownKeys(Object(source), true).forEach(function(key) {
          collapse_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : collapse_ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function collapse_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function collapse_classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function collapse_defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function collapse_createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        collapse_defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        collapse_defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    var collapse_Default = {
      triggerEl: null,
      onCollapse: function onCollapse() {
      },
      onExpand: function onExpand() {
      },
      onToggle: function onToggle() {
      }
    };
    var Collapse = /* @__PURE__ */ function() {
      function Collapse2() {
        var targetEl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        var options = arguments.length > 1 ? arguments[1] : void 0;
        collapse_classCallCheck(this, Collapse2);
        this._targetEl = targetEl;
        this._triggerEl = options ? options.triggerEl : collapse_Default.triggerEl;
        this._options = collapse_objectSpread(collapse_objectSpread({}, collapse_Default), options);
        this._visible = false;
        this._init();
      }
      collapse_createClass(Collapse2, [{
        key: "_init",
        value: function _init() {
          var _this = this;
          if (this._triggerEl) {
            if (this._triggerEl.hasAttribute("aria-expanded")) {
              this._visible = this._triggerEl.getAttribute("aria-expanded") === "true" ? true : false;
            } else {
              this._visible = this._targetEl.classList.contains("hidden") ? false : true;
            }
            this._triggerEl.addEventListener("click", function() {
              _this._visible ? _this.collapse() : _this.expand();
            });
          }
        }
      }, {
        key: "collapse",
        value: function collapse2() {
          this._targetEl.classList.add("hidden");
          if (this._triggerEl) {
            this._triggerEl.setAttribute("aria-expanded", "false");
          }
          this._visible = false;
          this._options.onCollapse(this);
        }
      }, {
        key: "expand",
        value: function expand() {
          this._targetEl.classList.remove("hidden");
          if (this._triggerEl) {
            this._triggerEl.setAttribute("aria-expanded", "true");
          }
          this._visible = true;
          this._options.onExpand(this);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (this._visible) {
            this.collapse();
          } else {
            this.expand();
          }
        }
      }]);
      return Collapse2;
    }();
    window.Collapse = Collapse;
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll("[data-collapse-toggle]").forEach(function(triggerEl) {
        var targetEl = document.getElementById(triggerEl.getAttribute("data-collapse-toggle"));
        new Collapse(targetEl, {
          triggerEl
        });
      });
    });
    const collapse = Collapse;
    ;
    function carousel_toConsumableArray(arr) {
      return carousel_arrayWithoutHoles(arr) || carousel_iterableToArray(arr) || carousel_unsupportedIterableToArray(arr) || carousel_nonIterableSpread();
    }
    function carousel_nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function carousel_unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return carousel_arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return carousel_arrayLikeToArray(o, minLen);
    }
    function carousel_iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function carousel_arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return carousel_arrayLikeToArray(arr);
    }
    function carousel_arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function carousel_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function carousel_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? carousel_ownKeys(Object(source), true).forEach(function(key) {
          carousel_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : carousel_ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function carousel_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function carousel_classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function carousel_defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function carousel_createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        carousel_defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        carousel_defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    var carousel_Default = {
      defaultPosition: 0,
      indicators: {
        items: [],
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
      },
      interval: 3e3,
      onNext: function onNext() {
      },
      onPrev: function onPrev() {
      },
      onChange: function onChange() {
      }
    };
    var Carousel = /* @__PURE__ */ function() {
      function Carousel2() {
        var items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        carousel_classCallCheck(this, Carousel2);
        this._items = items;
        this._options = carousel_objectSpread(carousel_objectSpread(carousel_objectSpread({}, carousel_Default), options), {}, {
          indicators: carousel_objectSpread(carousel_objectSpread({}, carousel_Default.indicators), options.indicators)
        });
        this._activeItem = this.getItem(this._options.defaultPosition);
        this._indicators = this._options.indicators.items;
        this._interval = null;
        this._init();
      }
      carousel_createClass(Carousel2, [{
        key: "_init",
        value: function _init() {
          var _this = this;
          this._items.map(function(item) {
            item.el.classList.add("absolute", "inset-0", "transition-all", "transform");
          });
          if (this._getActiveItem()) {
            this.slideTo(this._getActiveItem().position);
          } else {
            this.slideTo(0);
          }
          this._indicators.map(function(indicator, position) {
            indicator.el.addEventListener("click", function() {
              _this.slideTo(position);
            });
          });
        }
      }, {
        key: "getItem",
        value: function getItem(position) {
          return this._items[position];
        }
      }, {
        key: "slideTo",
        value: function slideTo(position) {
          var nextItem = this._items[position];
          var rotationItems = {
            "left": nextItem.position === 0 ? this._items[this._items.length - 1] : this._items[nextItem.position - 1],
            "middle": nextItem,
            "right": nextItem.position === this._items.length - 1 ? this._items[0] : this._items[nextItem.position + 1]
          };
          this._rotate(rotationItems);
          this._setActiveItem(nextItem.position);
          if (this._interval) {
            this.pause();
            this.cycle();
          }
          this._options.onChange(this);
        }
      }, {
        key: "next",
        value: function next() {
          var activeItem = this._getActiveItem();
          var nextItem = null;
          if (activeItem.position === this._items.length - 1) {
            nextItem = this._items[0];
          } else {
            nextItem = this._items[activeItem.position + 1];
          }
          this.slideTo(nextItem.position);
          this._options.onNext(this);
        }
      }, {
        key: "prev",
        value: function prev() {
          var activeItem = this._getActiveItem();
          var prevItem = null;
          if (activeItem.position === 0) {
            prevItem = this._items[this._items.length - 1];
          } else {
            prevItem = this._items[activeItem.position - 1];
          }
          this.slideTo(prevItem.position);
          this._options.onPrev(this);
        }
      }, {
        key: "_rotate",
        value: function _rotate(rotationItems) {
          this._items.map(function(item) {
            item.el.classList.add("hidden");
          });
          rotationItems.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20");
          rotationItems.left.el.classList.add("-translate-x-full", "z-10");
          rotationItems.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10");
          rotationItems.middle.el.classList.add("translate-x-0", "z-20");
          rotationItems.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20");
          rotationItems.right.el.classList.add("translate-x-full", "z-10");
        }
      }, {
        key: "cycle",
        value: function cycle() {
          var _this2 = this;
          this._interval = setInterval(function() {
            _this2.next();
          }, this._options.interval);
        }
      }, {
        key: "pause",
        value: function pause() {
          clearInterval(this._interval);
        }
      }, {
        key: "_getActiveItem",
        value: function _getActiveItem() {
          return this._activeItem;
        }
      }, {
        key: "_setActiveItem",
        value: function _setActiveItem(position) {
          var _this3 = this;
          this._activeItem = this._items[position];
          if (this._indicators.length) {
            var _this$_indicators$pos, _this$_indicators$pos2;
            this._indicators.map(function(indicator) {
              var _indicator$el$classLi, _indicator$el$classLi2;
              indicator.el.setAttribute("aria-current", "false");
              (_indicator$el$classLi = indicator.el.classList).remove.apply(_indicator$el$classLi, carousel_toConsumableArray(_this3._options.indicators.activeClasses.split(" ")));
              (_indicator$el$classLi2 = indicator.el.classList).add.apply(_indicator$el$classLi2, carousel_toConsumableArray(_this3._options.indicators.inactiveClasses.split(" ")));
            });
            (_this$_indicators$pos = this._indicators[position].el.classList).add.apply(_this$_indicators$pos, carousel_toConsumableArray(this._options.indicators.activeClasses.split(" ")));
            (_this$_indicators$pos2 = this._indicators[position].el.classList).remove.apply(_this$_indicators$pos2, carousel_toConsumableArray(this._options.indicators.inactiveClasses.split(" ")));
            this._indicators[position].el.setAttribute("aria-current", "true");
          }
        }
      }]);
      return Carousel2;
    }();
    window.Carousel = Carousel;
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll("[data-carousel]").forEach(function(carouselEl) {
        var interval = carouselEl.getAttribute("data-carousel-interval");
        var slide = carouselEl.getAttribute("data-carousel") === "slide" ? true : false;
        var items = [];
        var defaultPosition = 0;
        if (carouselEl.querySelectorAll("[data-carousel-item]").length) {
          carousel_toConsumableArray(carouselEl.querySelectorAll("[data-carousel-item]")).map(function(carouselItemEl, position) {
            items.push({
              position,
              el: carouselItemEl
            });
            if (carouselItemEl.getAttribute("data-carousel-item") === "active") {
              defaultPosition = position;
            }
          });
        }
        var indicators = [];
        if (carouselEl.querySelectorAll("[data-carousel-slide-to]").length) {
          carousel_toConsumableArray(carouselEl.querySelectorAll("[data-carousel-slide-to]")).map(function(indicatorEl) {
            indicators.push({
              position: indicatorEl.getAttribute("data-carousel-slide-to"),
              el: indicatorEl
            });
          });
        }
        var carousel2 = new Carousel(items, {
          defaultPosition,
          indicators: {
            items: indicators
          },
          interval: interval ? interval : carousel_Default.interval
        });
        if (slide) {
          carousel2.cycle();
        }
        var carouselNextEl = carouselEl.querySelector("[data-carousel-next]");
        var carouselPrevEl = carouselEl.querySelector("[data-carousel-prev]");
        if (carouselNextEl) {
          carouselNextEl.addEventListener("click", function() {
            carousel2.next();
          });
        }
        if (carouselPrevEl) {
          carouselPrevEl.addEventListener("click", function() {
            carousel2.prev();
          });
        }
      });
    });
    const carousel = Carousel;
    ;
    function dismiss_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function dismiss_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? dismiss_ownKeys(Object(source), true).forEach(function(key) {
          dismiss_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : dismiss_ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function dismiss_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function dismiss_classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function dismiss_defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function dismiss_createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        dismiss_defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        dismiss_defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    var dismiss_Default = {
      triggerEl: null,
      transition: "transition-opacity",
      duration: 300,
      timing: "ease-out",
      onHide: function onHide() {
      }
    };
    var Dismiss = /* @__PURE__ */ function() {
      function Dismiss2() {
        var targetEl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        dismiss_classCallCheck(this, Dismiss2);
        this._targetEl = targetEl;
        this._triggerEl = options ? options.triggerEl : dismiss_Default.triggerEl;
        this._options = dismiss_objectSpread(dismiss_objectSpread({}, dismiss_Default), options);
        this._init();
      }
      dismiss_createClass(Dismiss2, [{
        key: "_init",
        value: function _init() {
          var _this = this;
          if (this._triggerEl) {
            this._triggerEl.addEventListener("click", function() {
              _this.hide();
            });
          }
        }
      }, {
        key: "hide",
        value: function hide2() {
          var _this2 = this;
          this._targetEl.classList.add(this._options.transition, "duration-".concat(this._options.duration), this._options.timing, "opacity-0");
          setTimeout(function() {
            _this2._targetEl.classList.add("hidden");
          }, this._options.duration);
          this._options.onHide(this, this._targetEl);
        }
      }]);
      return Dismiss2;
    }();
    window.Dismiss = Dismiss;
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll("[data-dismiss-target]").forEach(function(triggerEl) {
        var targetEl = document.querySelector(triggerEl.getAttribute("data-dismiss-target"));
        new Dismiss(targetEl, {
          triggerEl
        });
      });
    });
    const dismiss = Dismiss;
    ;
    function getWindow(node) {
      if (node == null) {
        return window;
      }
      if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
      }
      return node;
    }
    ;
    function isElement(node) {
      var OwnElement = getWindow(node).Element;
      return node instanceof OwnElement || node instanceof Element;
    }
    function isHTMLElement(node) {
      var OwnElement = getWindow(node).HTMLElement;
      return node instanceof OwnElement || node instanceof HTMLElement;
    }
    function isShadowRoot(node) {
      if (typeof ShadowRoot === "undefined") {
        return false;
      }
      var OwnElement = getWindow(node).ShadowRoot;
      return node instanceof OwnElement || node instanceof ShadowRoot;
    }
    ;
    var math_max = Math.max;
    var math_min = Math.min;
    var round = Math.round;
    ;
    function getBoundingClientRect(element, includeScale) {
      if (includeScale === void 0) {
        includeScale = false;
      }
      var rect = element.getBoundingClientRect();
      var scaleX = 1;
      var scaleY = 1;
      if (isHTMLElement(element) && includeScale) {
        var offsetHeight = element.offsetHeight;
        var offsetWidth = element.offsetWidth;
        if (offsetWidth > 0) {
          scaleX = round(rect.width) / offsetWidth || 1;
        }
        if (offsetHeight > 0) {
          scaleY = round(rect.height) / offsetHeight || 1;
        }
      }
      return {
        width: rect.width / scaleX,
        height: rect.height / scaleY,
        top: rect.top / scaleY,
        right: rect.right / scaleX,
        bottom: rect.bottom / scaleY,
        left: rect.left / scaleX,
        x: rect.left / scaleX,
        y: rect.top / scaleY
      };
    }
    ;
    function getWindowScroll(node) {
      var win = getWindow(node);
      var scrollLeft = win.pageXOffset;
      var scrollTop = win.pageYOffset;
      return {
        scrollLeft,
        scrollTop
      };
    }
    ;
    function getHTMLElementScroll(element) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    ;
    function getNodeScroll(node) {
      if (node === getWindow(node) || !isHTMLElement(node)) {
        return getWindowScroll(node);
      } else {
        return getHTMLElementScroll(node);
      }
    }
    ;
    function getNodeName(element) {
      return element ? (element.nodeName || "").toLowerCase() : null;
    }
    ;
    function getDocumentElement(element) {
      return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
    }
    ;
    function getWindowScrollBarX(element) {
      return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
    }
    ;
    function getComputedStyle(element) {
      return getWindow(element).getComputedStyle(element);
    }
    ;
    function isScrollParent(element) {
      var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
      return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
    }
    ;
    function isElementScaled(element) {
      var rect = element.getBoundingClientRect();
      var scaleX = round(rect.width) / element.offsetWidth || 1;
      var scaleY = round(rect.height) / element.offsetHeight || 1;
      return scaleX !== 1 || scaleY !== 1;
    }
    function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
      if (isFixed === void 0) {
        isFixed = false;
      }
      var isOffsetParentAnElement = isHTMLElement(offsetParent);
      var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
      var documentElement = getDocumentElement(offsetParent);
      var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
      var scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      var offsets = {
        x: 0,
        y: 0
      };
      if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }
        if (isHTMLElement(offsetParent)) {
          offsets = getBoundingClientRect(offsetParent, true);
          offsets.x += offsetParent.clientLeft;
          offsets.y += offsetParent.clientTop;
        } else if (documentElement) {
          offsets.x = getWindowScrollBarX(documentElement);
        }
      }
      return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
      };
    }
    ;
    function getLayoutRect(element) {
      var clientRect = getBoundingClientRect(element);
      var width = element.offsetWidth;
      var height = element.offsetHeight;
      if (Math.abs(clientRect.width - width) <= 1) {
        width = clientRect.width;
      }
      if (Math.abs(clientRect.height - height) <= 1) {
        height = clientRect.height;
      }
      return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width,
        height
      };
    }
    ;
    function getParentNode(element) {
      if (getNodeName(element) === "html") {
        return element;
      }
      return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
    }
    ;
    function getScrollParent(node) {
      if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
        return node.ownerDocument.body;
      }
      if (isHTMLElement(node) && isScrollParent(node)) {
        return node;
      }
      return getScrollParent(getParentNode(node));
    }
    ;
    function listScrollParents(element, list) {
      var _element$ownerDocumen;
      if (list === void 0) {
        list = [];
      }
      var scrollParent = getScrollParent(element);
      var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
      var win = getWindow(scrollParent);
      var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
      var updatedList = list.concat(target);
      return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
    }
    ;
    function isTableElement(element) {
      return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
    }
    ;
    function getTrueOffsetParent(element) {
      if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
        return null;
      }
      return element.offsetParent;
    }
    function getContainingBlock(element) {
      var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
      var isIE = navigator.userAgent.indexOf("Trident") !== -1;
      if (isIE && isHTMLElement(element)) {
        var elementCss = getComputedStyle(element);
        if (elementCss.position === "fixed") {
          return null;
        }
      }
      var currentNode = getParentNode(element);
      while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
        var css = getComputedStyle(currentNode);
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
          return currentNode;
        } else {
          currentNode = currentNode.parentNode;
        }
      }
      return null;
    }
    function getOffsetParent(element) {
      var window2 = getWindow(element);
      var offsetParent = getTrueOffsetParent(element);
      while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
        offsetParent = getTrueOffsetParent(offsetParent);
      }
      if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
        return window2;
      }
      return offsetParent || getContainingBlock(element) || window2;
    }
    ;
    var enums_top = "top";
    var bottom = "bottom";
    var right = "right";
    var left = "left";
    var auto = "auto";
    var basePlacements = [enums_top, bottom, right, left];
    var start = "start";
    var end = "end";
    var clippingParents = "clippingParents";
    var viewport = "viewport";
    var popper = "popper";
    var reference = "reference";
    var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
      return acc.concat([placement + "-" + start, placement + "-" + end]);
    }, []);
    var enums_placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
      return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
    }, []);
    var beforeRead = "beforeRead";
    var read = "read";
    var afterRead = "afterRead";
    var beforeMain = "beforeMain";
    var main = "main";
    var afterMain = "afterMain";
    var beforeWrite = "beforeWrite";
    var write = "write";
    var afterWrite = "afterWrite";
    var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
    ;
    function order(modifiers) {
      var map = /* @__PURE__ */ new Map();
      var visited = /* @__PURE__ */ new Set();
      var result = [];
      modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
      });
      function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
          if (!visited.has(dep)) {
            var depModifier = map.get(dep);
            if (depModifier) {
              sort(depModifier);
            }
          }
        });
        result.push(modifier);
      }
      modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) {
          sort(modifier);
        }
      });
      return result;
    }
    function orderModifiers(modifiers) {
      var orderedModifiers = order(modifiers);
      return modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
          return modifier.phase === phase;
        }));
      }, []);
    }
    ;
    function debounce(fn) {
      var pending;
      return function() {
        if (!pending) {
          pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
              pending = void 0;
              resolve(fn());
            });
          });
        }
        return pending;
      };
    }
    ;
    function mergeByName(modifiers) {
      var merged = modifiers.reduce(function(merged2, current) {
        var existing = merged2[current.name];
        merged2[current.name] = existing ? Object.assign({}, existing, current, {
          options: Object.assign({}, existing.options, current.options),
          data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged2;
      }, {});
      return Object.keys(merged).map(function(key) {
        return merged[key];
      });
    }
    ;
    var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
    var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
    var DEFAULT_OPTIONS = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    };
    function areValidElements() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
      });
    }
    function popperGenerator(generatorOptions) {
      if (generatorOptions === void 0) {
        generatorOptions = {};
      }
      var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
      return function createPopper2(reference2, popper2, options) {
        if (options === void 0) {
          options = defaultOptions;
        }
        var state = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
          modifiersData: {},
          elements: {
            reference: reference2,
            popper: popper2
          },
          attributes: {},
          styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
          state,
          setOptions: function setOptions(setOptionsAction) {
            var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
            cleanupModifierEffects();
            state.options = Object.assign({}, defaultOptions, state.options, options2);
            state.scrollParents = {
              reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
              popper: listScrollParents(popper2)
            };
            var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
            state.orderedModifiers = orderedModifiers.filter(function(m) {
              return m.enabled;
            });
            if (false) {
              var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers;
            }
            runModifierEffects();
            return instance.update();
          },
          forceUpdate: function forceUpdate() {
            if (isDestroyed) {
              return;
            }
            var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
            if (!areValidElements(reference3, popper3)) {
              if (false) {
              }
              return;
            }
            state.rects = {
              reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
              popper: getLayoutRect(popper3)
            };
            state.reset = false;
            state.placement = state.options.placement;
            state.orderedModifiers.forEach(function(modifier) {
              return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
            });
            var __debug_loops__ = 0;
            for (var index = 0; index < state.orderedModifiers.length; index++) {
              if (false) {
              }
              if (state.reset === true) {
                state.reset = false;
                index = -1;
                continue;
              }
              var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
              if (typeof fn === "function") {
                state = fn({
                  state,
                  options: _options,
                  name,
                  instance
                }) || state;
              }
            }
          },
          update: debounce(function() {
            return new Promise(function(resolve) {
              instance.forceUpdate();
              resolve(state);
            });
          }),
          destroy: function destroy() {
            cleanupModifierEffects();
            isDestroyed = true;
          }
        };
        if (!areValidElements(reference2, popper2)) {
          if (false) {
          }
          return instance;
        }
        instance.setOptions(options).then(function(state2) {
          if (!isDestroyed && options.onFirstUpdate) {
            options.onFirstUpdate(state2);
          }
        });
        function runModifierEffects() {
          state.orderedModifiers.forEach(function(_ref3) {
            var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
            if (typeof effect2 === "function") {
              var cleanupFn = effect2({
                state,
                name,
                instance,
                options: options2
              });
              var noopFn = function noopFn2() {
              };
              effectCleanupFns.push(cleanupFn || noopFn);
            }
          });
        }
        function cleanupModifierEffects() {
          effectCleanupFns.forEach(function(fn) {
            return fn();
          });
          effectCleanupFns = [];
        }
        return instance;
      };
    }
    var createPopper = null;
    ;
    var passive = {
      passive: true
    };
    function effect(_ref) {
      var state = _ref.state, instance = _ref.instance, options = _ref.options;
      var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
      var window2 = getWindow(state.elements.popper);
      var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.addEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.addEventListener("resize", instance.update, passive);
      }
      return function() {
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.removeEventListener("resize", instance.update, passive);
        }
      };
    }
    const eventListeners = {
      name: "eventListeners",
      enabled: true,
      phase: "write",
      fn: function fn() {
      },
      effect,
      data: {}
    };
    ;
    function getBasePlacement(placement) {
      return placement.split("-")[0];
    }
    ;
    function getVariation(placement) {
      return placement.split("-")[1];
    }
    ;
    function getMainAxisFromPlacement(placement) {
      return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
    }
    ;
    function computeOffsets(_ref) {
      var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
      var basePlacement = placement ? getBasePlacement(placement) : null;
      var variation = placement ? getVariation(placement) : null;
      var commonX = reference2.x + reference2.width / 2 - element.width / 2;
      var commonY = reference2.y + reference2.height / 2 - element.height / 2;
      var offsets;
      switch (basePlacement) {
        case enums_top:
          offsets = {
            x: commonX,
            y: reference2.y - element.height
          };
          break;
        case bottom:
          offsets = {
            x: commonX,
            y: reference2.y + reference2.height
          };
          break;
        case right:
          offsets = {
            x: reference2.x + reference2.width,
            y: commonY
          };
          break;
        case left:
          offsets = {
            x: reference2.x - element.width,
            y: commonY
          };
          break;
        default:
          offsets = {
            x: reference2.x,
            y: reference2.y
          };
      }
      var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
      if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch (variation) {
          case start:
            offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
            break;
          case end:
            offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
            break;
          default:
        }
      }
      return offsets;
    }
    ;
    function popperOffsets(_ref) {
      var state = _ref.state, name = _ref.name;
      state.modifiersData[name] = computeOffsets({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
      });
    }
    const modifiers_popperOffsets = {
      name: "popperOffsets",
      enabled: true,
      phase: "read",
      fn: popperOffsets,
      data: {}
    };
    ;
    var unsetSides = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };
    function roundOffsetsByDPR(_ref) {
      var x = _ref.x, y = _ref.y;
      var win = window;
      var dpr = win.devicePixelRatio || 1;
      return {
        x: round(x * dpr) / dpr || 0,
        y: round(y * dpr) / dpr || 0
      };
    }
    function mapToStyles(_ref2) {
      var _Object$assign2;
      var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
      var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
      var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x,
        y
      }) : {
        x,
        y
      };
      x = _ref3.x;
      y = _ref3.y;
      var hasX = offsets.hasOwnProperty("x");
      var hasY = offsets.hasOwnProperty("y");
      var sideX = left;
      var sideY = enums_top;
      var win = window;
      if (adaptive) {
        var offsetParent = getOffsetParent(popper2);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === getWindow(popper2)) {
          offsetParent = getDocumentElement(popper2);
          if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
            heightProp = "scrollHeight";
            widthProp = "scrollWidth";
          }
        }
        offsetParent = offsetParent;
        if (placement === enums_top || (placement === left || placement === right) && variation === end) {
          sideY = bottom;
          var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
          y -= offsetY - popperRect.height;
          y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
          sideX = right;
          var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
          x -= offsetX - popperRect.width;
          x *= gpuAcceleration ? 1 : -1;
        }
      }
      var commonStyles = Object.assign({
        position
      }, adaptive && unsetSides);
      var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x,
        y
      }) : {
        x,
        y
      };
      x = _ref4.x;
      y = _ref4.y;
      if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
      }
      return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
    }
    function computeStyles(_ref5) {
      var state = _ref5.state, options = _ref5.options;
      var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
      if (false) {
        var transitionProperty;
      }
      var commonStyles = {
        placement: getBasePlacement(state.placement),
        variation: getVariation(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
      };
      if (state.modifiersData.popperOffsets != null) {
        state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.popperOffsets,
          position: state.options.strategy,
          adaptive,
          roundOffsets
        })));
      }
      if (state.modifiersData.arrow != null) {
        state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.arrow,
          position: "absolute",
          adaptive: false,
          roundOffsets
        })));
      }
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
      });
    }
    const modifiers_computeStyles = {
      name: "computeStyles",
      enabled: true,
      phase: "beforeWrite",
      fn: computeStyles,
      data: {}
    };
    ;
    function applyStyles(_ref) {
      var state = _ref.state;
      Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name];
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name2) {
          var value = attributes[name2];
          if (value === false) {
            element.removeAttribute(name2);
          } else {
            element.setAttribute(name2, value === true ? "" : value);
          }
        });
      });
    }
    function applyStyles_effect(_ref2) {
      var state = _ref2.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;
      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      }
      return function() {
        Object.keys(state.elements).forEach(function(name) {
          var element = state.elements[name];
          var attributes = state.attributes[name] || {};
          var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
          var style = styleProperties.reduce(function(style2, property) {
            style2[property] = "";
            return style2;
          }, {});
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(attribute) {
            element.removeAttribute(attribute);
          });
        });
      };
    }
    const modifiers_applyStyles = {
      name: "applyStyles",
      enabled: true,
      phase: "write",
      fn: applyStyles,
      effect: applyStyles_effect,
      requires: ["computeStyles"]
    };
    ;
    function distanceAndSkiddingToXY(placement, rects, offset2) {
      var basePlacement = getBasePlacement(placement);
      var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;
      var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
        placement
      })) : offset2, skidding = _ref[0], distance = _ref[1];
      skidding = skidding || 0;
      distance = (distance || 0) * invertDistance;
      return [left, right].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
      } : {
        x: skidding,
        y: distance
      };
    }
    function offset(_ref2) {
      var state = _ref2.state, options = _ref2.options, name = _ref2.name;
      var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
      var data = enums_placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
        return acc;
      }, {});
      var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
      if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
      }
      state.modifiersData[name] = data;
    }
    const modifiers_offset = {
      name: "offset",
      enabled: true,
      phase: "main",
      requires: ["popperOffsets"],
      fn: offset
    };
    ;
    var hash = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    function getOppositePlacement(placement) {
      return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
      });
    }
    ;
    var getOppositeVariationPlacement_hash = {
      start: "end",
      end: "start"
    };
    function getOppositeVariationPlacement(placement) {
      return placement.replace(/start|end/g, function(matched) {
        return getOppositeVariationPlacement_hash[matched];
      });
    }
    ;
    function getViewportRect(element) {
      var win = getWindow(element);
      var html = getDocumentElement(element);
      var visualViewport = win.visualViewport;
      var width = html.clientWidth;
      var height = html.clientHeight;
      var x = 0;
      var y = 0;
      if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          x = visualViewport.offsetLeft;
          y = visualViewport.offsetTop;
        }
      }
      return {
        width,
        height,
        x: x + getWindowScrollBarX(element),
        y
      };
    }
    ;
    function getDocumentRect(element) {
      var _element$ownerDocumen;
      var html = getDocumentElement(element);
      var winScroll = getWindowScroll(element);
      var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
      var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
      var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
      var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
      var y = -winScroll.scrollTop;
      if (getComputedStyle(body || html).direction === "rtl") {
        x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
      }
      return {
        width,
        height,
        x,
        y
      };
    }
    ;
    function contains(parent, child) {
      var rootNode = child.getRootNode && child.getRootNode();
      if (parent.contains(child)) {
        return true;
      } else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;
        do {
          if (next && parent.isSameNode(next)) {
            return true;
          }
          next = next.parentNode || next.host;
        } while (next);
      }
      return false;
    }
    ;
    function rectToClientRect(rect) {
      return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
      });
    }
    ;
    function getInnerBoundingClientRect(element) {
      var rect = getBoundingClientRect(element);
      rect.top = rect.top + element.clientTop;
      rect.left = rect.left + element.clientLeft;
      rect.bottom = rect.top + element.clientHeight;
      rect.right = rect.left + element.clientWidth;
      rect.width = element.clientWidth;
      rect.height = element.clientHeight;
      rect.x = rect.left;
      rect.y = rect.top;
      return rect;
    }
    function getClientRectFromMixedType(element, clippingParent) {
      return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
    }
    function getClippingParents(element) {
      var clippingParents2 = listScrollParents(getParentNode(element));
      var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
      var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
      if (!isElement(clipperElement)) {
        return [];
      }
      return clippingParents2.filter(function(clippingParent) {
        return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
      });
    }
    function getClippingRect(element, boundary, rootBoundary) {
      var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
      var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
      var firstClippingParent = clippingParents2[0];
      var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = math_max(rect.top, accRect.top);
        accRect.right = math_min(rect.right, accRect.right);
        accRect.bottom = math_min(rect.bottom, accRect.bottom);
        accRect.left = math_max(rect.left, accRect.left);
        return accRect;
      }, getClientRectFromMixedType(element, firstClippingParent));
      clippingRect.width = clippingRect.right - clippingRect.left;
      clippingRect.height = clippingRect.bottom - clippingRect.top;
      clippingRect.x = clippingRect.left;
      clippingRect.y = clippingRect.top;
      return clippingRect;
    }
    ;
    function getFreshSideObject() {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }
    ;
    function mergePaddingObject(paddingObject) {
      return Object.assign({}, getFreshSideObject(), paddingObject);
    }
    ;
    function expandToHashMap(value, keys) {
      return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
      }, {});
    }
    ;
    function detectOverflow(state, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
      var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      var altContext = elementContext === popper ? reference : popper;
      var popperRect = state.rects.popper;
      var element = state.elements[altBoundary ? altContext : elementContext];
      var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
      var referenceClientRect = getBoundingClientRect(state.elements.reference);
      var popperOffsets2 = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement
      });
      var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
      var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
      var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
      };
      var offsetData = state.modifiersData.offset;
      if (elementContext === popper && offsetData) {
        var offset2 = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
          var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
          var axis = [enums_top, bottom].indexOf(key) >= 0 ? "y" : "x";
          overflowOffsets[key] += offset2[axis] * multiply;
        });
      }
      return overflowOffsets;
    }
    ;
    function computeAutoPlacement(state, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
      var variation = getVariation(placement);
      var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
        return getVariation(placement2) === variation;
      }) : basePlacements;
      var allowedPlacements = placements.filter(function(placement2) {
        return allowedAutoPlacements.indexOf(placement2) >= 0;
      });
      if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
        if (false) {
        }
      }
      var overflows = allowedPlacements.reduce(function(acc, placement2) {
        acc[placement2] = detectOverflow(state, {
          placement: placement2,
          boundary,
          rootBoundary,
          padding
        })[getBasePlacement(placement2)];
        return acc;
      }, {});
      return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
      });
    }
    ;
    function getExpandedFallbackPlacements(placement) {
      if (getBasePlacement(placement) === auto) {
        return [];
      }
      var oppositePlacement = getOppositePlacement(placement);
      return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
    }
    function flip(_ref) {
      var state = _ref.state, options = _ref.options, name = _ref.name;
      if (state.modifiersData[name]._skip) {
        return;
      }
      var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
      var preferredPlacement = state.options.placement;
      var basePlacement = getBasePlacement(preferredPlacement);
      var isBasePlacement = basePlacement === preferredPlacement;
      var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
      var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
        return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
          placement: placement2,
          boundary,
          rootBoundary,
          padding,
          flipVariations,
          allowedAutoPlacements
        }) : placement2);
      }, []);
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var checksMap = /* @__PURE__ */ new Map();
      var makeFallbackChecks = true;
      var firstFittingPlacement = placements[0];
      for (var i = 0; i < placements.length; i++) {
        var placement = placements[i];
        var _basePlacement = getBasePlacement(placement);
        var isStartVariation = getVariation(placement) === start;
        var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = detectOverflow(state, {
          placement,
          boundary,
          rootBoundary,
          altBoundary,
          padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
        if (referenceRect[len] > popperRect[len]) {
          mainVariationSide = getOppositePlacement(mainVariationSide);
        }
        var altVariationSide = getOppositePlacement(mainVariationSide);
        var checks = [];
        if (checkMainAxis) {
          checks.push(overflow[_basePlacement] <= 0);
        }
        if (checkAltAxis) {
          checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        }
        if (checks.every(function(check) {
          return check;
        })) {
          firstFittingPlacement = placement;
          makeFallbackChecks = false;
          break;
        }
        checksMap.set(placement, checks);
      }
      if (makeFallbackChecks) {
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop2(_i2) {
          var fittingPlacement = placements.find(function(placement2) {
            var checks2 = checksMap.get(placement2);
            if (checks2) {
              return checks2.slice(0, _i2).every(function(check) {
                return check;
              });
            }
          });
          if (fittingPlacement) {
            firstFittingPlacement = fittingPlacement;
            return "break";
          }
        };
        for (var _i = numberOfChecks; _i > 0; _i--) {
          var _ret = _loop(_i);
          if (_ret === "break")
            break;
        }
      }
      if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
      }
    }
    const modifiers_flip = {
      name: "flip",
      enabled: true,
      phase: "main",
      fn: flip,
      requiresIfExists: ["offset"],
      data: {
        _skip: false
      }
    };
    ;
    function getAltAxis(axis) {
      return axis === "x" ? "y" : "x";
    }
    ;
    function within(min, value, max) {
      return math_max(min, math_min(value, max));
    }
    function withinMaxClamp(min, value, max) {
      var v = within(min, value, max);
      return v > max ? max : v;
    }
    ;
    function preventOverflow(_ref) {
      var state = _ref.state, options = _ref.options, name = _ref.name;
      var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
      var overflow = detectOverflow(state, {
        boundary,
        rootBoundary,
        padding,
        altBoundary
      });
      var basePlacement = getBasePlacement(state.placement);
      var variation = getVariation(state.placement);
      var isBasePlacement = !variation;
      var mainAxis = getMainAxisFromPlacement(basePlacement);
      var altAxis = getAltAxis(mainAxis);
      var popperOffsets2 = state.modifiersData.popperOffsets;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
      })) : tetherOffset;
      var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, tetherOffsetValue);
      var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
      var data = {
        x: 0,
        y: 0
      };
      if (!popperOffsets2) {
        return;
      }
      if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? enums_top : left;
        var altSide = mainAxis === "y" ? bottom : right;
        var len = mainAxis === "y" ? "height" : "width";
        var offset2 = popperOffsets2[mainAxis];
        var min = offset2 + overflow[mainSide];
        var max = offset2 - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
          width: 0,
          height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide];
        var arrowLen = within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset2 + maxOffset - offsetModifierValue;
        var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset2, tether ? math_max(max, tetherMax) : max);
        popperOffsets2[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset2;
      }
      if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? enums_top : left;
        var _altSide = mainAxis === "x" ? bottom : right;
        var _offset = popperOffsets2[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [enums_top, left].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets2[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
      }
      state.modifiersData[name] = data;
    }
    const modifiers_preventOverflow = {
      name: "preventOverflow",
      enabled: true,
      phase: "main",
      fn: preventOverflow,
      requiresIfExists: ["offset"]
    };
    ;
    var toPaddingObject = function toPaddingObject2(padding, state) {
      padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
      })) : padding;
      return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    };
    function arrow(_ref) {
      var _state$modifiersData$;
      var state = _ref.state, name = _ref.name, options = _ref.options;
      var arrowElement = state.elements.arrow;
      var popperOffsets2 = state.modifiersData.popperOffsets;
      var basePlacement = getBasePlacement(state.placement);
      var axis = getMainAxisFromPlacement(basePlacement);
      var isVertical = [left, right].indexOf(basePlacement) >= 0;
      var len = isVertical ? "height" : "width";
      if (!arrowElement || !popperOffsets2) {
        return;
      }
      var paddingObject = toPaddingObject(options.padding, state);
      var arrowRect = getLayoutRect(arrowElement);
      var minProp = axis === "y" ? enums_top : left;
      var maxProp = axis === "y" ? bottom : right;
      var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
      var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
      var arrowOffsetParent = getOffsetParent(arrowElement);
      var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
      var centerToReference = endDiff / 2 - startDiff / 2;
      var min = paddingObject[minProp];
      var max = clientSize - arrowRect[len] - paddingObject[maxProp];
      var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
      var offset2 = within(min, center, max);
      var axisProp = axis;
      state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
    }
    function arrow_effect(_ref2) {
      var state = _ref2.state, options = _ref2.options;
      var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
      if (arrowElement == null) {
        return;
      }
      if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) {
          return;
        }
      }
      if (false) {
      }
      if (!contains(state.elements.popper, arrowElement)) {
        if (false) {
        }
        return;
      }
      state.elements.arrow = arrowElement;
    }
    const modifiers_arrow = {
      name: "arrow",
      enabled: true,
      phase: "main",
      fn: arrow,
      effect: arrow_effect,
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    };
    ;
    function getSideOffsets(overflow, rect, preventedOffsets) {
      if (preventedOffsets === void 0) {
        preventedOffsets = {
          x: 0,
          y: 0
        };
      }
      return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
      };
    }
    function isAnySideFullyClipped(overflow) {
      return [enums_top, right, bottom, left].some(function(side) {
        return overflow[side] >= 0;
      });
    }
    function hide(_ref) {
      var state = _ref.state, name = _ref.name;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var preventedOffsets = state.modifiersData.preventOverflow;
      var referenceOverflow = detectOverflow(state, {
        elementContext: "reference"
      });
      var popperAltOverflow = detectOverflow(state, {
        altBoundary: true
      });
      var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
      var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
      var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
      var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
      state.modifiersData[name] = {
        referenceClippingOffsets,
        popperEscapeOffsets,
        isReferenceHidden,
        hasPopperEscaped
      };
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
      });
    }
    const modifiers_hide = {
      name: "hide",
      enabled: true,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: hide
    };
    ;
    var defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
    var popper_createPopper = /* @__PURE__ */ popperGenerator({
      defaultModifiers
    });
    ;
    function dropdown_toConsumableArray(arr) {
      return dropdown_arrayWithoutHoles(arr) || dropdown_iterableToArray(arr) || dropdown_unsupportedIterableToArray(arr) || dropdown_nonIterableSpread();
    }
    function dropdown_nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function dropdown_unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return dropdown_arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return dropdown_arrayLikeToArray(o, minLen);
    }
    function dropdown_iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function dropdown_arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return dropdown_arrayLikeToArray(arr);
    }
    function dropdown_arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function dropdown_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function dropdown_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? dropdown_ownKeys(Object(source), true).forEach(function(key) {
          dropdown_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : dropdown_ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function dropdown_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function dropdown_classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function dropdown_defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function dropdown_createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        dropdown_defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        dropdown_defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    var dropdown_Default = {
      placement: "bottom",
      triggerType: "click",
      onShow: function onShow() {
      },
      onHide: function onHide() {
      }
    };
    var Dropdown = /* @__PURE__ */ function() {
      function Dropdown2() {
        var targetElement = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        var triggerElement = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        dropdown_classCallCheck(this, Dropdown2);
        this._targetEl = targetElement;
        this._triggerEl = triggerElement;
        this._options = dropdown_objectSpread(dropdown_objectSpread({}, dropdown_Default), options);
        this._popperInstance = this._createPopperInstace();
        this._visible = false;
        this._init();
      }
      dropdown_createClass(Dropdown2, [{
        key: "_init",
        value: function _init() {
          var _this = this;
          if (this._triggerEl) {
            this._triggerEl.addEventListener("click", function() {
              _this.toggle();
            });
          }
        }
      }, {
        key: "_createPopperInstace",
        value: function _createPopperInstace() {
          return popper_createPopper(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [{
              name: "offset",
              options: {
                offset: [0, 10]
              }
            }]
          });
        }
      }, {
        key: "_handleClickOutside",
        value: function _handleClickOutside(ev, targetEl) {
          var clickedEl = ev.target;
          if (clickedEl !== targetEl && !targetEl.contains(clickedEl) && !this._triggerEl.contains(clickedEl) && this._visible) {
            this.hide();
          }
          document.body.removeEventListener("click", this._handleClickOutside, true);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (this._visible) {
            this.hide();
            document.body.removeEventListener("click", this._handleClickOutside, true);
          } else {
            this.show();
          }
        }
      }, {
        key: "show",
        value: function show() {
          var _this2 = this;
          this._targetEl.classList.remove("hidden");
          this._targetEl.classList.add("block");
          this._popperInstance.setOptions(function(options) {
            return dropdown_objectSpread(dropdown_objectSpread({}, options), {}, {
              modifiers: [].concat(dropdown_toConsumableArray(options.modifiers), [{
                name: "eventListeners",
                enabled: true
              }])
            });
          });
          document.body.addEventListener("click", function(ev) {
            _this2._handleClickOutside(ev, _this2._targetEl);
          }, true);
          this._popperInstance.update();
          this._visible = true;
          this._options.onShow(this);
        }
      }, {
        key: "hide",
        value: function hide2() {
          this._targetEl.classList.remove("block");
          this._targetEl.classList.add("hidden");
          this._popperInstance.setOptions(function(options) {
            return dropdown_objectSpread(dropdown_objectSpread({}, options), {}, {
              modifiers: [].concat(dropdown_toConsumableArray(options.modifiers), [{
                name: "eventListeners",
                enabled: false
              }])
            });
          });
          this._visible = false;
          this._options.onHide(this);
        }
      }]);
      return Dropdown2;
    }();
    window.Dropdown = Dropdown;
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll("[data-dropdown-toggle]").forEach(function(triggerEl) {
        var targetEl = document.getElementById(triggerEl.getAttribute("data-dropdown-toggle"));
        var placement = triggerEl.getAttribute("data-dropdown-placement");
        new Dropdown(targetEl, triggerEl, {
          placement: placement ? placement : dropdown_Default.placement
        });
      });
    });
    const dropdown = Dropdown;
    ;
    function modal_toConsumableArray(arr) {
      return modal_arrayWithoutHoles(arr) || modal_iterableToArray(arr) || modal_unsupportedIterableToArray(arr) || modal_nonIterableSpread();
    }
    function modal_nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function modal_unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return modal_arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return modal_arrayLikeToArray(o, minLen);
    }
    function modal_iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function modal_arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return modal_arrayLikeToArray(arr);
    }
    function modal_arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function modal_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function modal_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? modal_ownKeys(Object(source), true).forEach(function(key) {
          modal_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : modal_ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function modal_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function modal_classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function modal_defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function modal_createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        modal_defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        modal_defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    var modal_Default = {
      placement: "center",
      backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
      onHide: function onHide() {
      },
      onShow: function onShow() {
      },
      onToggle: function onToggle() {
      }
    };
    var Modal = /* @__PURE__ */ function() {
      function Modal2() {
        var targetEl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        modal_classCallCheck(this, Modal2);
        this._targetEl = targetEl;
        this._options = modal_objectSpread(modal_objectSpread({}, modal_Default), options);
        this._isHidden = true;
        this._init();
      }
      modal_createClass(Modal2, [{
        key: "_init",
        value: function _init() {
          var _this = this;
          this._getPlacementClasses().map(function(c) {
            _this._targetEl.classList.add(c);
          });
        }
      }, {
        key: "_createBackdrop",
        value: function _createBackdrop() {
          if (this._isHidden) {
            var _backdropEl$classList;
            var backdropEl = document.createElement("div");
            backdropEl.setAttribute("modal-backdrop", "");
            (_backdropEl$classList = backdropEl.classList).add.apply(_backdropEl$classList, modal_toConsumableArray(this._options.backdropClasses.split(" ")));
            document.querySelector("body").append(backdropEl);
          }
        }
      }, {
        key: "_destroyBackdropEl",
        value: function _destroyBackdropEl() {
          if (!this._isHidden) {
            document.querySelector("[modal-backdrop]").remove();
          }
        }
      }, {
        key: "_getPlacementClasses",
        value: function _getPlacementClasses() {
          switch (this._options.placement) {
            case "top-left":
              return ["justify-start", "items-start"];
            case "top-center":
              return ["justify-center", "items-start"];
            case "top-right":
              return ["justify-end", "items-start"];
            case "center-left":
              return ["justify-start", "items-center"];
            case "center":
              return ["justify-center", "items-center"];
            case "center-right":
              return ["justify-end", "items-center"];
            case "bottom-left":
              return ["justify-start", "items-end"];
            case "bottom-center":
              return ["justify-center", "items-end"];
            case "bottom-right":
              return ["justify-end", "items-end"];
            default:
              return ["justify-center", "items-center"];
          }
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (this._isHidden) {
            this.show();
          } else {
            this.hide();
          }
          this._options.onToggle(this);
        }
      }, {
        key: "show",
        value: function show() {
          this._targetEl.classList.add("flex");
          this._targetEl.classList.remove("hidden");
          this._targetEl.setAttribute("aria-modal", "true");
          this._targetEl.setAttribute("role", "dialog");
          this._targetEl.removeAttribute("aria-hidden");
          this._createBackdrop();
          this._isHidden = false;
          this._options.onShow(this);
        }
      }, {
        key: "hide",
        value: function hide2() {
          this._targetEl.classList.add("hidden");
          this._targetEl.classList.remove("flex");
          this._targetEl.setAttribute("aria-hidden", "true");
          this._targetEl.removeAttribute("aria-modal");
          this._targetEl.removeAttribute("role");
          this._destroyBackdropEl();
          this._isHidden = true;
          this._options.onHide(this);
        }
      }]);
      return Modal2;
    }();
    window.Modal = Modal;
    var getModalInstance = function getModalInstance2(id, instances) {
      if (instances.some(function(modalInstance) {
        return modalInstance.id === id;
      })) {
        return instances.find(function(modalInstance) {
          return modalInstance.id === id;
        });
      }
      return false;
    };
    document.addEventListener("DOMContentLoaded", function() {
      var modalInstances = [];
      document.querySelectorAll("[data-modal-toggle]").forEach(function(el) {
        var modalId = el.getAttribute("data-modal-toggle");
        var modalEl = document.getElementById(modalId);
        var placement = modalEl.getAttribute("data-modal-placement");
        if (modalEl) {
          if (!modalEl.hasAttribute("aria-hidden") && !modalEl.hasAttribute("aria-modal")) {
            modalEl.setAttribute("aria-hidden", "true");
          }
        }
        var modal2 = null;
        if (getModalInstance(modalId, modalInstances)) {
          modal2 = getModalInstance(modalId, modalInstances);
          modal2 = modal2.object;
        } else {
          modal2 = new Modal(modalEl, {
            placement: placement ? placement : modal_Default.placement
          });
          modalInstances.push({
            id: modalId,
            object: modal2
          });
        }
        if (modalEl.hasAttribute("data-modal-show") && modalEl.getAttribute("data-modal-show") === "true") {
          modal2.show();
        }
        el.addEventListener("click", function() {
          modal2.toggle();
        });
      });
    });
    const modal = Modal;
    ;
    function tabs_toConsumableArray(arr) {
      return tabs_arrayWithoutHoles(arr) || tabs_iterableToArray(arr) || tabs_unsupportedIterableToArray(arr) || tabs_nonIterableSpread();
    }
    function tabs_nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function tabs_unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return tabs_arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return tabs_arrayLikeToArray(o, minLen);
    }
    function tabs_iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function tabs_arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return tabs_arrayLikeToArray(arr);
    }
    function tabs_arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function tabs_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function tabs_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? tabs_ownKeys(Object(source), true).forEach(function(key) {
          tabs_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : tabs_ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function tabs_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function tabs_classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function tabs_defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function tabs_createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        tabs_defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        tabs_defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    var tabs_Default = {
      defaultTabId: null,
      activeClasses: "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
      inactiveClasses: "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
      onShow: function onShow() {
      }
    };
    var Tabs = /* @__PURE__ */ function() {
      function Tabs2() {
        var items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        tabs_classCallCheck(this, Tabs2);
        this._items = items;
        this._activeTab = options ? this.getTab(options.defaultTabId) : null;
        this._options = tabs_objectSpread(tabs_objectSpread({}, tabs_Default), options);
        this._init();
      }
      tabs_createClass(Tabs2, [{
        key: "_init",
        value: function _init() {
          var _this = this;
          if (this._items.length) {
            if (!this._activeTab) {
              this._setActiveTab(this._items[0]);
            }
            this.show(this._activeTab.id, true);
            this._items.map(function(tab) {
              tab.triggerEl.addEventListener("click", function() {
                _this.show(tab.id);
              });
            });
          }
        }
      }, {
        key: "getActiveTab",
        value: function getActiveTab() {
          return this._activeTab;
        }
      }, {
        key: "_setActiveTab",
        value: function _setActiveTab(tab) {
          this._activeTab = tab;
        }
      }, {
        key: "getTab",
        value: function getTab(id) {
          return this._items.filter(function(t) {
            return t.id === id;
          })[0];
        }
      }, {
        key: "show",
        value: function show(id) {
          var _this2 = this, _tab$triggerEl$classL, _tab$triggerEl$classL2;
          var forceShow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var tab = this.getTab(id);
          if (tab === this._activeTab && !forceShow) {
            return;
          }
          this._items.map(function(t) {
            if (t !== tab) {
              var _t$triggerEl$classLis, _t$triggerEl$classLis2;
              (_t$triggerEl$classLis = t.triggerEl.classList).remove.apply(_t$triggerEl$classLis, tabs_toConsumableArray(_this2._options.activeClasses.split(" ")));
              (_t$triggerEl$classLis2 = t.triggerEl.classList).add.apply(_t$triggerEl$classLis2, tabs_toConsumableArray(_this2._options.inactiveClasses.split(" ")));
              t.targetEl.classList.add("hidden");
              t.triggerEl.setAttribute("aria-selected", false);
            }
          });
          (_tab$triggerEl$classL = tab.triggerEl.classList).add.apply(_tab$triggerEl$classL, tabs_toConsumableArray(this._options.activeClasses.split(" ")));
          (_tab$triggerEl$classL2 = tab.triggerEl.classList).remove.apply(_tab$triggerEl$classL2, tabs_toConsumableArray(this._options.inactiveClasses.split(" ")));
          tab.triggerEl.setAttribute("aria-selected", true);
          tab.targetEl.classList.remove("hidden");
          this._setActiveTab(tab);
          this._options.onShow(this, tab);
        }
      }]);
      return Tabs2;
    }();
    window.Tabs = Tabs;
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll("[data-tabs-toggle]").forEach(function(triggerEl) {
        var tabElements = [];
        var defaultTabId = null;
        triggerEl.querySelectorAll('[role="tab"]').forEach(function(el) {
          var isActive = el.getAttribute("aria-selected") === "true";
          var tab = {
            id: el.getAttribute("data-tabs-target"),
            triggerEl: el,
            targetEl: document.querySelector(el.getAttribute("data-tabs-target"))
          };
          tabElements.push(tab);
          if (isActive) {
            defaultTabId = tab.id;
          }
        });
        new Tabs(tabElements, {
          defaultTabId
        });
      });
    });
    const tabs = Tabs;
    ;
    function tooltip_toConsumableArray(arr) {
      return tooltip_arrayWithoutHoles(arr) || tooltip_iterableToArray(arr) || tooltip_unsupportedIterableToArray(arr) || tooltip_nonIterableSpread();
    }
    function tooltip_nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function tooltip_unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return tooltip_arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return tooltip_arrayLikeToArray(o, minLen);
    }
    function tooltip_iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function tooltip_arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return tooltip_arrayLikeToArray(arr);
    }
    function tooltip_arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function tooltip_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function tooltip_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? tooltip_ownKeys(Object(source), true).forEach(function(key) {
          tooltip_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : tooltip_ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function tooltip_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function tooltip_classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function tooltip_defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function tooltip_createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        tooltip_defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        tooltip_defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    var tooltip_Default = {
      placement: "top",
      triggerType: "hover",
      onShow: function onShow() {
      },
      onHide: function onHide() {
      }
    };
    var Tooltip = /* @__PURE__ */ function() {
      function Tooltip2() {
        var targetEl = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        var triggerEl = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        tooltip_classCallCheck(this, Tooltip2);
        this._targetEl = targetEl;
        this._triggerEl = triggerEl;
        this._options = tooltip_objectSpread(tooltip_objectSpread({}, tooltip_Default), options);
        this._popperInstance = this._createPopperInstace();
        this._init();
      }
      tooltip_createClass(Tooltip2, [{
        key: "_init",
        value: function _init() {
          var _this = this;
          if (this._triggerEl) {
            var triggerEvents = this._getTriggerEvents();
            triggerEvents.showEvents.forEach(function(ev) {
              _this._triggerEl.addEventListener(ev, function() {
                _this.show();
              });
            });
            triggerEvents.hideEvents.forEach(function(ev) {
              _this._triggerEl.addEventListener(ev, function() {
                _this.hide();
              });
            });
          }
        }
      }, {
        key: "_createPopperInstace",
        value: function _createPopperInstace() {
          return popper_createPopper(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [{
              name: "offset",
              options: {
                offset: [0, 8]
              }
            }]
          });
        }
      }, {
        key: "_getTriggerEvents",
        value: function _getTriggerEvents() {
          switch (this._options.triggerType) {
            case "hover":
              return {
                showEvents: ["mouseenter", "focus"],
                hideEvents: ["mouseleave", "blur"]
              };
            case "click":
              return {
                showEvents: ["click", "focus"],
                hideEvents: ["focusout", "blur"]
              };
            default:
              return {
                showEvents: ["mouseenter", "focus"],
                hideEvents: ["mouseleave", "blur"]
              };
          }
        }
      }, {
        key: "show",
        value: function show() {
          this._targetEl.classList.remove("opacity-0", "invisible");
          this._targetEl.classList.add("opacity-100", "visible");
          this._popperInstance.setOptions(function(options) {
            return tooltip_objectSpread(tooltip_objectSpread({}, options), {}, {
              modifiers: [].concat(tooltip_toConsumableArray(options.modifiers), [{
                name: "eventListeners",
                enabled: true
              }])
            });
          });
          this._popperInstance.update();
          this._options.onShow(this);
        }
      }, {
        key: "hide",
        value: function hide2() {
          this._targetEl.classList.remove("opacity-100", "visible");
          this._targetEl.classList.add("opacity-0", "invisible");
          this._popperInstance.setOptions(function(options) {
            return tooltip_objectSpread(tooltip_objectSpread({}, options), {}, {
              modifiers: [].concat(tooltip_toConsumableArray(options.modifiers), [{
                name: "eventListeners",
                enabled: false
              }])
            });
          });
          this._options.onHide(this);
        }
      }]);
      return Tooltip2;
    }();
    window.Tooltip = Tooltip;
    document.addEventListener("DOMContentLoaded", function() {
      document.querySelectorAll("[data-tooltip-target]").forEach(function(triggerEl) {
        var targetEl = document.getElementById(triggerEl.getAttribute("data-tooltip-target"));
        var triggerType = triggerEl.getAttribute("data-tooltip-trigger");
        var placement = triggerEl.getAttribute("data-tooltip-placement");
        new Tooltip(targetEl, triggerEl, {
          placement: placement ? placement : tooltip_Default.placement,
          triggerType: triggerType ? triggerType : tooltip_Default.triggerType
        });
      });
    });
    const tooltip = Tooltip;
    ;
    const flowbite = {
      Accordion: accordion,
      Collapse: collapse,
      Carousel: carousel,
      Dismiss: dismiss,
      Dropdown: dropdown,
      Modal: modal,
      Tabs: tabs,
      Tooltip: tooltip
    };
  })();

  // src/javascripts/nav.js
  var Nav = class {
    constructor(modalManager) {
      const target = document.getElementById("nav-mobile-target");
      document.getElementById("nav-mobile-open-btn").addEventListener("click", (event) => {
        target.classList.remove("hidden");
        modalManager.opened(event, () => {
          target.classList.add("hidden");
        });
      });
    }
  };

  // src/javascripts/accordion.js
  var Accordion = class {
    constructor() {
      document.querySelectorAll(".accordion-toggle-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const classList = btn.querySelector("svg").classList;
          classList.toggle("rotate-0");
          classList.toggle("-rotate-180");
          btn.closest(".accordion-element").querySelector("dd").classList.toggle("hidden");
        });
      });
    }
  };

  // src/javascripts/modalManager.js
  var ModalManager = class {
    constructor() {
      this.currentModal = null;
      this.currentEvent = null;
      window.addEventListener("keydown", (event) => {
        if (event.key == "Escape") {
          this.close();
        }
      });
      document.addEventListener("click", (event) => {
        if (this.currentEvent !== event) {
          this.close();
        }
        this.currentEvent = null;
      });
    }
    opened(event, closeCallback) {
      this.currentEvent = event;
      this.close();
      this.currentModal = closeCallback;
    }
    close() {
      if (this.currentModal) {
        this.currentModal();
        this.currentModal = null;
      }
    }
  };

  // src/javascripts/langSelector.js
  var LangSelector = class {
    constructor(modalManager) {
      const target = document.getElementById("lang-selector-menu");
      document.getElementById("lang-selector-open-btn").addEventListener("click", (event) => {
        if (target.classList.contains("hidden")) {
          target.classList.remove("hidden");
          modalManager.opened(event, () => {
            target.classList.add("hidden");
          });
        } else {
          modalManager.close();
        }
      });
    }
  };

  // src/javascripts/app.js
  window.app = {};
  app.modalManager = new ModalManager();
  app.nav = new Nav(app.modalManager);
  app.langSelector = new LangSelector(app.modalManager);
  app.specialties = new Accordion();
})();
//# sourceMappingURL=main.js.map
