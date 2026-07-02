import { useState, useEffect } from "react";

const STORAGE_KEY = "meal-app-dark-mode";

/**
 * useDarkMode – persists dark mode preference in localStorage and toggles
 * a `data-theme="dark"` attribute on <html> so CSS can react.
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    // 1. Prefer saved user choice
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) return saved === "true";
    // 2. Fall back to OS preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem(STORAGE_KEY, String(isDark));
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return { isDark, toggle };
}
