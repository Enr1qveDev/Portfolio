function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  var icon = document.querySelector(".theme-icon");
  if (icon) icon.textContent = theme === "light" ? "☀" : "☾";
}

function getStoredTheme() {
  return localStorage.getItem("theme") || "dark";
}

document.addEventListener("DOMContentLoaded", function () {
  var current = getStoredTheme();
  applyTheme(current);

  var btn = document.getElementById("themeBtn");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
});
