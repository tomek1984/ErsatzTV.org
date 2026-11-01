# Sentinel Journal

## 2025-03-31 - Tabnabbing Protection in React Landing Components
**Vulnerability:** External links with `target="_blank"` used only `rel="noopener"`, omitting `noreferrer`. Older browsers or WebViews could leak `window.opener` references or referer headers to third-party endpoints.
**Learning:** Docusaurus automatically injects `rel="noopener noreferrer"` into standard markdown and config navbar/footer links, but custom React components manually using `<a>` tags bypass this safeguard unless explicitly styled or using Docusaurus's `<Link>` / `rel="noopener noreferrer"`.
**Prevention:** Always verify custom JSX `<a>` tags targeting `_blank` include both `rel="noopener noreferrer"` and appropriate accessibility `aria-label` attributes indicating that the link opens in a new tab.
