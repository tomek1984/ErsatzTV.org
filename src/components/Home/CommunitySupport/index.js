import React from "react";
import styles from "./style.module.css";

export default function CommunitySupport() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2>Community & Support</h2>
        <p className={styles.description}>
          Join our active community to get help, share ideas, and contribute to
          the project. Connect with us on Discord or explore the code on GitHub!
        </p>
        <div className={styles.buttonGroup}>
          {/* Security: Use rel="noopener noreferrer" on external links to prevent reverse tabnabbing and referrer leakage */}
          <a
            href="https://discord.ersatztv.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Discord (opens in a new tab)"
            className="button button--secondary button--md"
          >
            Join Discord
          </a>
          <a
            href="https://features.ersatztv.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vote on Feature Requests (opens in a new tab)"
            className="button button--secondary button--md"
          >
            Vote on Feature Requests
          </a>
          <a
            href="https://github.com/ErsatzTV/ErsatzTV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub (opens in a new tab)"
            className="button button--secondary button--md"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
