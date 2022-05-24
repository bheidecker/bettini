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

  // src/assets/javascripts/app.js
  window.app = {};
  app.nav = new Nav();
})();
//# sourceMappingURL=main.js.map
