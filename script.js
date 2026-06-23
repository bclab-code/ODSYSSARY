document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById("sticky-nav");
  var toggle = nav ? nav.querySelector(".nav-toggle") : null;
  var hero = document.querySelector(".hero");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("ul a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (nav && hero) {
    var threshold = hero.offsetHeight * 0.6;

    var updateNav = function () {
      if (window.scrollY > threshold) {
        nav.classList.add("visible");
      } else {
        nav.classList.remove("visible");
        nav.classList.remove("open");
      }
    };

    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();
  }
});
