/* =========================================================
   CARS EMPIRE — interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---- Current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Sticky header background on scroll ---- */
  var header = document.getElementById("header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu toggle ---- */
  var burger = document.getElementById("burger");
  if (burger) {
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close when a link is tapped
    document.querySelectorAll(".mobile-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Reveal-on-scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Collections: filter + search ---- */
  var grid = document.getElementById("grid");
  if (grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".car-card"));
    var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
    var search = document.getElementById("search");
    var countEl = document.getElementById("count");
    var noResults = document.getElementById("noResults");
    var activeFilter = "all";

    function apply() {
      var term = (search && search.value ? search.value : "").trim().toLowerCase();
      var visible = 0;
      cards.forEach(function (card) {
        var make = card.getAttribute("data-make");
        var name = card.getAttribute("data-name") || "";
        var matchFilter = activeFilter === "all" || make === activeFilter;
        var matchSearch = !term || name.indexOf(term) !== -1;
        var show = matchFilter && matchSearch;
        card.style.display = show ? "" : "none";
        if (show) visible++;
      });
      if (countEl) countEl.textContent = visible;
      if (noResults) noResults.style.display = visible === 0 ? "block" : "none";
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("active"); });
        chip.classList.add("active");
        activeFilter = chip.getAttribute("data-filter");
        apply();
      });
    });

    if (search) search.addEventListener("input", apply);
  }
})();
