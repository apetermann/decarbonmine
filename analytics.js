/* ============================================================
   DeCarbonMine — privacy-first analytics + consent (LGPD/GDPR)
   ------------------------------------------------------------
   Nothing is loaded or tracked until BOTH:
     1) a provider is configured below, AND
     2) the visitor accepts the consent banner.
   To go live: set ANALYTICS.provider + id.
     - Plausible: { provider: "plausible", domain: "decarbonmine.com" }
     - GA4:       { provider: "ga4", id: "G-XXXXXXX" }
   ============================================================ */
(function () {
  "use strict";

  var ANALYTICS = {
    provider: null,          // null = disabled (no script loads). "plausible" | "ga4"
    id: "",                  // GA4 measurement id (G-XXXX)
    domain: "decarbonmine.com"
  };

  var CONSENT_KEY = "dcm-consent"; // "granted" | "denied"
  var t = function (k) { return (window.DCMi18n && window.DCMi18n.t) ? window.DCMi18n.t(k) : k; };

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(v) {
    try { localStorage.setItem(CONSENT_KEY, v); } catch (e) {}
  }

  /* ---- provider loaders (only called after consent) ---- */
  function loadProvider() {
    if (!ANALYTICS.provider) return; // disabled
    if (ANALYTICS.provider === "plausible") {
      var s = document.createElement("script");
      s.defer = true; s.setAttribute("data-domain", ANALYTICS.domain);
      s.src = "https://plausible.io/js/script.js";
      document.head.appendChild(s);
      window.DCMtrack = function (name, props) {
        if (window.plausible) window.plausible(name, props ? { props: props } : undefined);
      };
    } else if (ANALYTICS.provider === "ga4" && ANALYTICS.id) {
      var g = document.createElement("script");
      g.async = true; g.src = "https://www.googletagmanager.com/gtag/js?id=" + ANALYTICS.id;
      document.head.appendChild(g);
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", ANALYTICS.id, { anonymize_ip: true });
      window.DCMtrack = function (name, props) { gtag("event", name, props || {}); };
    }
  }

  /* ---- public no-op tracker until a provider is active ---- */
  if (!window.DCMtrack) {
    window.DCMtrack = function (name, props) {
      if (/[?&]debug/.test(location.search)) console.log("[track]", name, props || "");
    };
  }

  function enable() {
    setConsent("granted");
    loadProvider();
    window.DCMtrack("page_view", { path: location.pathname });
  }

  /* ---- consent banner ---- */
  function buildBanner() {
    var bar = document.createElement("div");
    bar.className = "consent";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Cookies");
    bar.innerHTML =
      '<p class="consent__text">' + t("consent.text") +
      ' <a href="privacidade.html">' + t("consent.privacy") + '</a></p>' +
      '<div class="consent__actions">' +
      '<button class="btn consent__decline" type="button">' + t("consent.decline") + '</button>' +
      '<button class="btn btn--solid consent__accept" type="button">' + t("consent.accept") + '</button>' +
      '</div>';
    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add("is-in"); });
    bar.querySelector(".consent__accept").addEventListener("click", function () {
      bar.classList.remove("is-in"); enable();
      setTimeout(function () { bar.remove(); }, 300);
    });
    bar.querySelector(".consent__decline").addEventListener("click", function () {
      bar.classList.remove("is-in"); setConsent("denied");
      setTimeout(function () { bar.remove(); }, 300);
    });
  }

  function init() {
    var c = getConsent();
    if (c === "granted") { loadProvider(); window.DCMtrack("page_view", { path: location.pathname }); }
    else if (c == null && ANALYTICS.provider) { buildBanner(); }
    // if denied, or no provider configured: do nothing (no banner, no tracking)

    /* auto-track CTA clicks (no-op until provider active) */
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a.btn, .nav__cta");
      if (a) window.DCMtrack("cta_click", { label: (a.textContent || "").trim().slice(0, 40), href: a.getAttribute("href") || "" });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
