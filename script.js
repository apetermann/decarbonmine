/* ============================================================
   DeCarbonMine — interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav scroll state + progress bar (rAF-throttled) ---------- */
  var nav = document.getElementById("nav");
  var progress = document.getElementById("progress");
  var ticking = false;
  var update = function () {
    var y = window.scrollY || window.pageYOffset;
    if (y > 24) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = h > 0 ? Math.min(y / h, 1) : 0;
      progress.style.transform = "scaleX(" + ratio + ")";
    }
    ticking = false;
  };
  var onScroll = function () {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  };
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  /* ---------- Mobile menu (class toggle) ---------- */
  var burger = document.getElementById("burger");
  if (nav && burger) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll(".nav__menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Hero background video (perf-aware) ----------
     Only loads/plays on wider screens without reduced-motion.
     On mobile or reduced-motion, the poster image is shown (no video bytes). */
  var heroVideo = document.getElementById("heroVideo");
  if (heroVideo) {
    var allowVideo = window.matchMedia("(min-width: 761px)").matches &&
                     !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn && (conn.saveData || /2g/.test(conn.effectiveType || ""))) allowVideo = false;

    if (allowVideo) {
      heroVideo.src = heroVideo.getAttribute("data-src");
      heroVideo.addEventListener("loadeddata", function () { heroVideo.classList.add("is-playing"); });
      var playPromise = heroVideo.play();
      if (playPromise && playPromise.catch) playPromise.catch(function () { /* autoplay blocked: poster stays */ });
    }
  }

  /* ---------- Brand video player (click to play, with sound) ---------- */
  var brandVideo = document.getElementById("brandVideo");
  var videoPlayer = document.getElementById("videoPlayer");
  var videoPlayBtn = document.getElementById("videoPlayBtn");
  if (brandVideo && videoPlayer && videoPlayBtn) {
    var startVideo = function () {
      videoPlayer.classList.add("is-playing");
      if (window.DCMtrack) window.DCMtrack("video_play");
      var p = brandVideo.play();
      if (p && p.catch) p.catch(function () { videoPlayer.classList.remove("is-playing"); });
    };
    videoPlayBtn.addEventListener("click", startVideo);
    brandVideo.addEventListener("play", function () { videoPlayer.classList.add("is-playing"); });
  }

  /* ---------- Contact form ----------
     To go live: replace FORM_ENDPOINT with your form handler URL
     (e.g. Formspree "https://formspree.io/f/xxxxxxx" or your own API).
     While it contains "REPLACE", the form runs in DEMO mode: it validates
     and shows the success state without sending a real request. */
  var FORM_ENDPOINT = "https://formspree.io/f/mykaerpy";

  var form = document.getElementById("contactForm");
  if (form) {
    var statusEl = form.querySelector(".form__status");
    var submitBtn = form.querySelector(".form__submit");
    var submitLabel = submitBtn ? submitBtn.querySelector("[data-i18n]") : null;

    var t = function (k) { return (window.DCMi18n && window.DCMi18n.t) ? window.DCMi18n.t(k) : k; };

    var setError = function (field, msgKey) {
      var wrap = field.closest(".field");
      var err = wrap.querySelector(".field__error");
      if (msgKey) {
        wrap.setAttribute("data-invalid", "true");
        field.setAttribute("aria-invalid", "true");
        if (err) err.textContent = t(msgKey);
      } else {
        wrap.removeAttribute("data-invalid");
        field.removeAttribute("aria-invalid");
        if (err) err.textContent = "";
      }
    };

    var emailOK = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); };

    var validate = function () {
      var ok = true;
      ["cName", "cCompany", "cMessage"].forEach(function (id) {
        var f = form.querySelector("#" + id);
        if (f && !f.value.trim()) { setError(f, "cont.err_required"); ok = false; }
        else if (f) setError(f, null);
      });
      var em = form.querySelector("#cEmail");
      if (em) {
        if (!em.value.trim()) { setError(em, "cont.err_required"); ok = false; }
        else if (!emailOK(em.value.trim())) { setError(em, "cont.err_email"); ok = false; }
        else setError(em, null);
      }
      return ok;
    };

    // clear error as user fixes it
    form.querySelectorAll("input, textarea, select").forEach(function (f) {
      f.addEventListener("input", function () {
        if (f.closest(".field").getAttribute("data-invalid") === "true") setError(f, null);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      statusEl.className = "form__status";
      if (!validate()) {
        var firstBad = form.querySelector('[data-invalid="true"] input, [data-invalid="true"] textarea, [data-invalid="true"] select');
        if (firstBad) firstBad.focus();
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = t("cont.f_sending");

      var done = function (success) {
        if (submitBtn) submitBtn.disabled = false;
        if (submitLabel) submitLabel.textContent = t("cont.f_submit");
        statusEl.className = "form__status " + (success ? "is-success" : "is-error");
        statusEl.textContent = t(success ? "cont.f_success" : "cont.f_error");
        if (success) { form.reset(); statusEl.setAttribute("role", "status"); if (window.DCMtrack) window.DCMtrack("contact_submit"); }
        else { statusEl.setAttribute("role", "alert"); }
      };

      // DEMO mode when endpoint not configured
      if (FORM_ENDPOINT.indexOf("REPLACE") !== -1) {
        console.warn("[DeCarbonMine] Contact form in DEMO mode — set FORM_ENDPOINT in script.js to send for real.");
        window.setTimeout(function () { done(true); }, 700);
        return;
      }

      var payload = {
        name: form.querySelector("#cName").value.trim(),
        email: form.querySelector("#cEmail").value.trim(),
        company: form.querySelector("#cCompany").value.trim(),
        segment: form.querySelector("#cSegment") ? form.querySelector("#cSegment").value : "",
        message: form.querySelector("#cMessage").value.trim()
      };

      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (r) { done(r.ok); })
        .catch(function () { done(false); });
    });
  }

  /* ---------- Scroll reveals (staggered) ---------- */
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      // Stagger items that share a parent grid/flow
      var siblings = Array.prototype.slice.call(
        el.parentElement.querySelectorAll(":scope > [data-reveal]")
      );
      var idx = siblings.indexOf(el);
      var delay = idx > -1 ? Math.min(idx * 80, 480) : 0;
      el.style.transitionDelay = delay + "ms";
      el.classList.add("is-visible");
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  reveals.forEach(function (el) { io.observe(el); });
})();
