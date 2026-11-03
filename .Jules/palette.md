## 2025-05-18 - Accessible External Links

**Learning:** External links with `target="_blank"` lack screen reader context about opening a new tab or window and were missing `noreferrer` security protections.
**Action:** Always provide `rel="noopener noreferrer"` and an `aria-label` stating "(opens in a new tab)" for links targeting external destinations with `target="_blank"`.
