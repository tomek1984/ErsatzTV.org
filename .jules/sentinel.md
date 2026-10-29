## 2025-02-20 - [Reverse Tabnabbing and Referrer Leakage Protection]
**Vulnerability:** External `target="_blank"` links in homepage React components had `rel="noopener"`, which protected against tabnabbing but allowed referrer URL header leakage to third-party domains.
**Learning:** Docusaurus components and standard JSX links opening external tabs must include `rel="noopener noreferrer"` and descriptive `aria-label` tags for both security and accessibility compliance.
**Prevention:** Always enforce `rel="noopener noreferrer"` and `aria-label="... (opens in a new tab)"` on all external JSX anchor tags targeting `_blank`.
