## 2026-10-30 - External Link Accessibility & Security
**Learning:** External links (`target="_blank"`) in React components should always include `rel="noopener noreferrer"` for security and performance, along with descriptive `aria-label` attributes (e.g. `(opens in a new tab)`) so screen reader users are explicitly warned when navigation leaves the current page.
**Action:** When adding or auditing external anchor tags in home page components or theme templates, verify that `rel="noopener noreferrer"` and `aria-label="... (opens in a new tab)"` are consistently present.
