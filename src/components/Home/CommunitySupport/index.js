import React from "react";
import Link from "@docusaurus/Link";
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
          <Link
            to="https://discord.ersatztv.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Discord (opens in a new tab)"
            className="button button--secondary button--md"
          >
            Join Discord
          </Link>
          <Link
            to="https://features.ersatztv.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vote on Feature Requests (opens in a new tab)"
            className="button button--secondary button--md"
          >
            Vote on Feature Requests
          </Link>
          <Link
            to="https://github.com/ErsatzTV/ErsatzTV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on GitHub (opens in a new tab)"
            className="button button--secondary button--md"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
