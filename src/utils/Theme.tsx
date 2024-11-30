export const checkAppThemeForUser = () => {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    document.documentElement.classList.add(storedTheme);
  } else if (systemPrefersDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};
