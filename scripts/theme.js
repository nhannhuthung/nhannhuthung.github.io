/* ---------------------------------------------------------------
   Theme: "light" = archival paper, "dark" = midnight gallery.

   Load this in <head> WITHOUT defer on every page, so the
   data-theme attribute is set before the first paint and the page
   never flashes the wrong palette. The palettes themselves live in
   styles/theme.css.
   --------------------------------------------------------------- */
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "☀" : "☾";
}

function toggleTheme() {
    const next =
        document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
}

// run now (before paint) for the attribute, and again on load for the button
applyTheme(localStorage.getItem("theme") || "light");
document.addEventListener("DOMContentLoaded", function () {
    applyTheme(localStorage.getItem("theme") || "light");
});
