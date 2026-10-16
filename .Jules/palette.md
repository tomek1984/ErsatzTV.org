## 2025-05-18 - Docusaurus Breadcrumb Accessibility and External Link Safety
**Learning:** Overridden Docusaurus theme components like `DocBreadcrumbs` often miss `aria-current="page"` on the active page item when rendered as a non-link `<span>`, preventing screen readers from identifying the active location in navigation trails.
**Action:** Always ensure the active breadcrumb item in custom Docusaurus theme overrides includes `aria-current="page"`, and external action links specify `rel="noopener noreferrer"` with screen-reader friendly target indicators (`(opens in a new tab)`).
