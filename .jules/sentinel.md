## 2025-05-18 - Escaping Inline JSON Script Tags
**Vulnerability:** Inline `<script type="application/ld+json">` tags containing raw `JSON.stringify()` output can be broken out of if breadcrumb or title data contains `</script>` or `<`.
**Learning:** `JSON.stringify()` does not escape `<` or `>` by default. When rendered directly inside `<script>` blocks in React/Docusaurus, HTML parsers prioritize closing `</script>` tags over JavaScript string contexts, leading to potential XSS.
**Prevention:** Replace `<` with `\\u003c` in stringified JSON when embedding structured data or JSON into inline script blocks (`JSON.stringify(data).replace(/</g, '\\u003c')`).
