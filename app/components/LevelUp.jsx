"use client";

import { useEffect, useRef } from "react";

const badges = [
  { icon: "🌱", name: "FIRST COLLAB", pts: "+500 XP", color: "var(--accent-gold)", locked: false },
  { icon: "🎯", name: "NICHE SNIPER", pts: "+1200 XP", color: "var(--accent-cyan)", locked: false },
  { icon: "📈", name: "VIRAL MOMENT", pts: "+2500 XP", color: "var(--accent-lime)", locked: false },
  { icon: "🤝", name: "TRUST BUILDER", pts: "+800 XP", color: "var(--accent-pink)", locked: false },
  { icon: "👑", name: "BRAND LEGEND", pts: "+5000 XP", color: "#444", locked: true },
  { icon: "🚀", name: "ORBIT LEVEL", pts: "+10000 XP", color: "#444", locked: true },
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
      <div className="section-label">ACHIEVEMENT SYSTEM</div>
      <h2 className="section-title reveal">LEVEL UP YOUR INFLUENCE</h2>
      <p className="section-desc reveal">Every partnership earns XP. Every authentic collab unlocks new tiers.</p>

      <div className="xp-bar-container reveal">
        <div className="xp-label">
          <span>► LVL 4 — MICRO CREATOR</span>
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
