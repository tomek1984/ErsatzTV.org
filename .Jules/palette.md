## 2025-10-28 - External Links Accessibility Pattern
**Learning:** External links (with `target="_blank"`) in custom React components should always include `aria-label` (or visually hidden text) indicating that they open in a new tab/window, along with `rel="noopener noreferrer"` for security and screen reader clarity.
**Action:** Always verify `target="_blank"` links have explicit accessibility labels describing that the link opens an external site in a new tab.
