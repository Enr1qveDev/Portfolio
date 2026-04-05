function getLang() {
  return localStorage.getItem("lang") || "es";
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
}

function applyLang() {
  var lang = getLang();
  document.documentElement.setAttribute("lang", lang);

  var btn = document.getElementById("langBtn");
  if (btn) {
    btn.querySelector(".lang-label").textContent = lang.toUpperCase();
  }

  var nodes = document.querySelectorAll("[data-lang-es][data-lang-en]");
  nodes.forEach(function (el) {
    el.textContent = lang === "en" ? el.getAttribute("data-lang-en") : el.getAttribute("data-lang-es");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  applyLang();

  var btn = document.getElementById("langBtn");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var next = getLang() === "es" ? "en" : "es";
    setLang(next);
    applyLang();
  });
});
