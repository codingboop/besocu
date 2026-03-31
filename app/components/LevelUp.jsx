"use client";

import { useEffect, useRef } from "react";

const badges = [
  { icon: "📊", name: "CREATOR DASHBOARD", pts: "TRACK YOUR GROWTH", color: "var(--accent-gold)", locked: false },
  { icon: "🎯", name: "CAMPAIGN MARKETPLACE", pts: "DEALS THAT FIT YOU", color: "var(--accent-cyan)", locked: false },
  { icon: "📣", name: "PITCH TOOLS", pts: "BRANDS COME TO YOU", color: "var(--accent-lime)", locked: false },
  { icon: "💸", name: "FAIR COMPENSATION", pts: "PAID ON IMPACT", color: "var(--accent-pink)", locked: false },
  { icon: "📈", name: "GROWTH TOOLKIT", pts: "OPTIMIZE YOUR REACH", color: "var(--accent-gold)", locked: false },
  { icon: "👑", name: "TOP CREATOR TIER", pts: "COMING SOON", color: "#444", locked: true },
];

export default function LevelUp() {
  const xpFillRef = useRef(null);

  useEffect(() => {
    const xpFill = xpFillRef.current;
    if (!xpFill) return;

    const xpObserver = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setTimeout(() => xpFill.classList.add("animated"), 300);
        xpObserver.disconnect();
      }
    });
    xpObserver.observe(xpFill);

    const badgeEls = document.querySelectorAll(".badge:not(.locked)");
    const handlers = [];
    badgeEls.forEach((badge) => {
      const handler = () => {
        badge.style.transform = "scale(1.1) translateY(-12px)";
        badge.style.borderColor = "white";
        setTimeout(() => {
          badge.style.transform = "";
          badge.style.borderColor = "";
        }, 300);
      };
      badge.addEventListener("click", handler);
      handlers.push({ badge, handler });
    });

    return () => {
      xpObserver.disconnect();
      handlers.forEach(({ badge, handler }) => badge.removeEventListener("click", handler));
    };
  }, []);

  return (
    <section id="levelup">
      <div className="section-label">FOR INFLUENCERS</div>
      <h2 className="section-title reveal">YOUR GROWTH. YOUR TERMS. YOUR EARNINGS.</h2>
      <p className="section-desc reveal">Whether you have 1,000 followers or 100,000, your voice has value here. Nano creators finally earn what they deserve.</p>

      <div className="xp-bar-container reveal">
        <div className="xp-label">
          <span>► NANO CREATOR - BUILDING INFLUENCE</span>
          <span>7,300 / 10,000 XP</span>
        </div>
        <div className="xp-track">
          <div className="xp-fill" ref={xpFillRef} />
        </div>
      </div>

      <div className="badges-grid reveal">
        {badges.map((badge, i) => (
          <div
            key={i}
            className={`badge${badge.locked ? " locked" : ""}`}
            style={{ borderColor: badge.color }}
          >
            <span className="badge-icon">{badge.icon}</span>
            <div className="badge-name">{badge.name}</div>
            <div className="badge-pts">{badge.pts}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
