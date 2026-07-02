/**
 * DarkModeToggle – a settings-style button that switches between light and
 * dark mode. Placed in the app header next to the title.
 */
export function DarkModeToggle({ isDark, onToggle }) {
  return (
    <button
      id="dark-mode-toggle"
      className="dark-mode-toggle"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="dark-mode-toggle__track">
        <span className="dark-mode-toggle__thumb">
          <span className="dark-mode-toggle__icon" aria-hidden="true">
            {isDark ? "🌙" : "☀️"}
          </span>
        </span>
      </span>
      <span className="dark-mode-toggle__label">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
