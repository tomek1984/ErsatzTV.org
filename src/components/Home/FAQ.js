import React from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Is ErsatzTV free?",
      a: "Yes! ErsatzTV is completely free and open source.",
    },
    {
      q: "What platforms are supported?",
      a: "ErsatzTV runs on Windows, Linux, and macOS.",
    },
    {
      q: "How can I contribute?",
      a: "You can contribute code, documentation, or feedback via GitHub.",
    },
  ];

  return (
    <section style={{ padding: "3rem 0", background: "#181c24" }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <h2 style={{ textAlign: "center", marginBottom: 32 }}>FAQ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map((f, i) => (
            <details
              key={i}
              style={{
                background: "#23283a",
                borderRadius: 8,
                padding: "16px 20px",
                border: "1px solid #2e354f",
              }}
            >
              <summary
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#fff",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                {f.q}
              </summary>
              <p
                style={{
                  color: "#aaa",
                  margin: "12px 0 0 0",
                  lineHeight: 1.6,
                  fontSize: 15,
                }}
              >
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
