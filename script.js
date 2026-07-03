/* Oak Grove Nutrition — interactions */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- Mobile nav toggle (side drawer + scrim) ---- */
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("nav-list");
  var scrim = null;

  if (toggle && navList) {
    // Move the drawer + a scrim to <body> so no backdrop-filter / transform
    // ancestor (the header) can collapse their position:fixed boxes.
    // Only relocate on mobile; restore into the header on desktop so the
    // inline nav sits in the header row as normal.
    var navHome = navList.parentNode;       // original <nav.main-nav>
    var navAnchor = navList.nextSibling;     // to restore original DOM order
    scrim = document.createElement("div");
    scrim.className = "nav-scrim";
    document.body.appendChild(scrim);

    var mq = window.matchMedia("(max-width: 720px)");
    var placeNav = function () {
      if (mq.matches) {
        if (navList.parentNode !== document.body) document.body.appendChild(navList);
      } else if (navList.parentNode !== navHome) {
        navHome.insertBefore(navList, navAnchor);
      }
    };
    placeNav();
    if (mq.addEventListener) mq.addEventListener("change", placeNav);
    else if (mq.addListener) mq.addListener(placeNav);

    var setOpen = function (open) {
      navList.classList.toggle("open", open);
      scrim.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    };
    var closeNav = function () { setOpen(false); };

    toggle.addEventListener("click", function () {
      setOpen(!navList.classList.contains("open"));
    });
    scrim.addEventListener("click", closeNav);
    navList.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navList.classList.contains("open")) closeNav();
    });
    // Reset + relocate on resize
    window.addEventListener("resize", function () {
      if (window.innerWidth > 720 && navList.classList.contains("open")) closeNav();
      placeNav();
    });
  }

  /* ---- Sticky header: shrink + hide-on-down / reveal-on-any-up ---- */
  var header = document.querySelector(".site-header");
  var lastY = window.scrollY;
  var onScroll = function () {
    var y = window.scrollY;
    if (y > 20) header.classList.add("scrolled");
    else header.classList.remove("scrolled");

    var navOpen = navList && navList.classList.contains("open");
    if (!navOpen) {
      if (y > lastY && y > 120) header.classList.add("nav-hidden");   // scrolling down
      else if (y < lastY) header.classList.remove("nav-hidden");      // any upward scroll
    }
    lastY = y;
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---- Inquiry form (demo — no backend) ---- */
  var form = document.getElementById("inquiryForm");
  var status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var message = form.message.value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk || !message) {
        status.textContent = "Please add your name, a valid email, and a message.";
        status.classList.add("err");
        return;
      }
      status.textContent = "Thanks, " + name.split(" ")[0] + "! This is a demo form — please call (225) 494-4094 or email us to reach the club.";
      status.classList.add("ok");
      form.reset();
    });
  }
})();
