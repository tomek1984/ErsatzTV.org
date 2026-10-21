import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./style.module.css";

export default function HomeHero() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.textSection}>
            <h1 className={clsx("hero__title", styles.title)}>
              Build Your Own Live TV Channels
            </h1>
            <p className={clsx("hero__subtitle", styles.subtitle)}>
              ErsatzTV lets you transform your media library into a
              personalized, live TV experience—complete with EPG, channel
              scheduling, and seamless streaming to all your devices. Rediscover
              your content, your way.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs">
                Get Started
              </Link>
            </div>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img
                src="/images/home/epg-example.png"
                alt="Electronic Program Guide (EPG) showing scheduled IPTV channels"
                className={styles.image}
              />
            </div>
            <span className={styles.caption}>
              Example: Electronic Program Guide (EPG) for your custom IPTV
              channels
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
