## 2025-10-26 - Breadcrumb Navigation & Emoji Accessibility in Docusaurus
**Learning:** Swizzled Docusaurus breadcrumbs may miss `aria-current="page"` on active trailing spans, causing screen readers to omit page location context. Also, raw decorative emojis in card headers get verbosely read out by screen readers.
**Action:** Always ensure the active breadcrumb item rendered as a span has `aria-current="page"` and wrap decorative emojis in `<span role="img" aria-hidden="true">`.
