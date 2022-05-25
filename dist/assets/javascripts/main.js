(() => {
  // src/assets/javascripts/nav.js
  var Nav = class {
    constructor() {
      const target = document.getElementById("nav-mobile-target");
      document.getElementById("nav-mobile-open-btn").addEventListener("click", () => {
        target.classList.remove("hidden");
      });
      document.getElementById("nav-mobile-close-btn").addEventListener("click", () => {
        target.classList.add("hidden");
      });
      window.addEventListener("keydown", (event) => {
        if (event.key == "Escape") {
          target.classList.add("hidden");
        }
      });
    }
  };

  // src/assets/javascripts/specialties.js
  var Specialties = class {
    constructor() {
      document.querySelectorAll(".specialties-toggle-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          window.amit = btn;
          const classList = btn.querySelector("svg").classList;
          classList.toggle("rotate-0");
          classList.toggle("-rotate-180");
          btn.closest(".specialty-element").querySelector("dd").classList.toggle("hidden");
        });
      });
    }
  };

  // src/assets/javascripts/app.js
  window.app = {};
  app.nav = new Nav();
  app.specialties = new Specialties();
})();
//# sourceMappingURL=main.js.map
