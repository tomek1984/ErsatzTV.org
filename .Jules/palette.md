# Palette's Journal

## 2026-11-09 - Accessible External Link Buttons with Docusaurus IconExternalLink
**Learning:** External links styled as action buttons on custom landing pages often omit `noreferrer` and screen reader announcements that they open in a new tab. In Docusaurus projects, importing `@theme/Icon/ExternalLink` provides consistent visual and screen-reader cues (`aria-label="(opens in new tab)"`) alongside the action label.
**Action:** When adding external action links styled as buttons, include `@theme/Icon/ExternalLink`, `rel="noopener noreferrer"`, and an explicit `aria-label` announcing destination and external opening behavior.
