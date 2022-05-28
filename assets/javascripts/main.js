(() => {
  // src/javascripts/nav.js
  var Nav = class {
    constructor(modalManager) {
      const target = document.getElementById("nav-mobile-target");
      document.getElementById("nav-mobile-open-btn")?.addEventListener("click", (event) => {
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
      document.querySelectorAll(".accordion-element dt").forEach((row) => {
        row.addEventListener("click", () => {
          const classList = row.querySelector("svg").classList;
          classList.toggle("rotate-0");
          classList.toggle("-rotate-180");
          row.closest(".accordion-element").querySelector("dd").classList.toggle("hidden");
        });
      });
    }
  };

  // src/javascripts/carousel.js
  var Carousel = class {
    static setup(array) {
      document.querySelectorAll("[data-carousel]").forEach((carousel) => {
        array.push(new Carousel(carousel));
      });
    }
    constructor(carousel) {
      this.carousel = carousel;
      this.slideCount = this.getSlides().length;
      this.showSlide(0);
      this.setupSlideNavButtons();
      this.setupSideButtons();
    }
    getSlides() {
      return this.carousel.querySelectorAll("[data-carousel-item]");
    }
    getSlideNavButtons() {
      return this.carousel.querySelectorAll("[data-carousel-slide-to]");
    }
    getNextButton() {
      return this.carousel.querySelector("[data-carousel-next]");
    }
    getPrevButton() {
      return this.carousel.querySelector("[data-carousel-prev]");
    }
    setupSlideNavButtons() {
      const slideNavButtons = this.getSlideNavButtons();
      slideNavButtons.forEach((slideNavButton) => {
        slideNavButton.addEventListener("click", () => {
          this.showSlide(slideNavButton.dataset.carouselSlideTo);
        });
      });
    }
    setupSideButtons() {
      this.getNextButton().addEventListener("click", () => {
        const nextSlide = (this.selectedSlide + 1) % this.slideCount;
        this.showSlide(nextSlide);
      });
      this.getPrevButton().addEventListener("click", () => {
        const prevSlide = (this.selectedSlide - 1 + this.slideCount) % this.slideCount;
        this.showSlide(prevSlide);
      });
    }
    showSlide(index) {
      this.selectedSlide = index;
      const slides = this.getSlides();
      slides.forEach((item) => item.classList.add("hidden"));
      slides[index].classList.remove("hidden");
      const slideNavButtons = this.getSlideNavButtons();
      slideNavButtons.forEach((button2) => {
        button2.classList.remove("bg-white");
        button2.classList.add("bg-white/50");
        button2.classList.add("hover:bg-white");
      });
      const button = slideNavButtons[index];
      button.classList.add("bg-white");
      button.classList.remove("bg-white/50");
      button.classList.remove("hover:bg-white");
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
    constructor(modalManager, langRedirect) {
      const target = document.getElementById("lang-selector-menu");
      document.getElementById("lang-selector-open-btn")?.addEventListener("click", (event) => {
        if (target.classList.contains("hidden")) {
          target.classList.remove("hidden");
          modalManager.opened(event, () => {
            target.classList.add("hidden");
          });
        } else {
          modalManager.close();
        }
      });
      target?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          langRedirect.setLanguageInStore(link.dataset.lang);
        });
      });
    }
  };

  // src/javascripts/langRedirect.js
  var LangRedirect = class {
    constructor(languages) {
      this.allLanguages = languages;
      [this.default, ...this.nonDefault] = languages;
      if (!document.body.dataset.hasOwnProperty("skipLangRedirect")) {
        this.ensureCorrectLanguage();
      }
    }
    ensureCorrectLanguage() {
      let langFromStore = this.getLanguageFromStore();
      if (!langFromStore) {
        const browserLang = this.getLanguageFromBrowser();
        if (this.allLanguages.includes(browserLang)) {
          langFromStore = browserLang;
        } else {
          langFromStore = "en";
        }
        this.setLanguageInStore(langFromStore);
      }
      this.redirect(langFromStore);
    }
    getLanguageFromUrl() {
      const path = window.location.pathname;
      let foundLang;
      this.nonDefault.forEach((lang) => {
        if (path.startsWith(`/${lang}/`)) {
          foundLang = lang;
        }
      });
      return foundLang || this.default;
    }
    getLanguageFromStore() {
      return window.localStorage.getItem("lang");
    }
    getLanguageFromBrowser() {
      return window.navigator.language.slice(0, 2);
    }
    setLanguageInStore(lang) {
      window.localStorage.setItem("lang", lang);
      console.log(`Set language in local storage to ${lang}`);
    }
    redirect(lang) {
      const urlLang = this.getLanguageFromUrl();
      if (lang === urlLang) {
        return;
      }
      const path = window.location.pathname;
      const pathWithoutLang = path.replace(`/${urlLang}/`, "/");
      if (lang === this.default) {
        const href2 = `${window.location.origin}${pathWithoutLang}`;
        console.log(`Redirecting to: ${href2}`);
        window.location.replace(href2);
        return;
      }
      const href = `${window.location.origin}/${lang}${pathWithoutLang}`;
      console.log(`Redirecting to: ${href}`);
      window.location.replace(href);
    }
  };

  // src/javascripts/app.js
  window.app = {};
  app.modalManager = new ModalManager();
  app.langRedirect = new LangRedirect(["de", "en"]);
  app.nav = new Nav(app.modalManager);
  app.langSelector = new LangSelector(app.modalManager, app.langRedirect);
  app.carousels = [];
  Carousel.setup(app.carousels);
  app.accordion = new Accordion();
})();
//# sourceMappingURL=main.js.map
