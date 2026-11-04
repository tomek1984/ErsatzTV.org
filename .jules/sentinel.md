# Sentinel Security Journal

## 2025-05-18 - Reverse Tabnabbing and Referrer Leakage via Incomplete `rel` Attribute
**Vulnerability:** External links (`<a target="_blank">`) in React landing components used `rel="noopener"`, which lacks `noreferrer`. This risks leaking sensitive path or token information in the `Referer` header to external destinations and exposes legacy browser users to window manipulation (reverse tabnabbing).
**Learning:** In Docusaurus projects where custom landing page components are built directly with standard HTML `<a>` tags instead of Docusaurus `<Link>`, developers may specify `target="_blank"` and forget `noreferrer` or omit an accessible `aria-label` stating that a new tab is opened.
**Prevention:** Always ensure all external links opening in a new tab specify `rel="noopener noreferrer"` and an `aria-label` indicating that the link opens in a new tab.
