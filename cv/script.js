(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  const STORAGE_KEY = "so_theme";

  function getSystemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    icon.textContent = theme === "light" ? "☀" : "☾";
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved || getSystemTheme();
  setTheme(initial);

  toggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });
})();
