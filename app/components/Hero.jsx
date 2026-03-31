"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const starsRef = useRef(null);
  const groundRef = useRef(null);

  useEffect(() => {
    const starsContainer = starsRef.current;
    const groundBlocks = groundRef.current;
    if (!starsContainer || !groundBlocks) return;

    for (let i = 0; i < 60; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 60}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.animationDuration = `${1.5 + Math.random() * 2}s`;
      if (Math.random() > 0.7) {
        star.style.width = "8px";
        star.style.height = "8px";
      }
      starsContainer.appendChild(star);
    }

    const buildGround = () => {
      groundBlocks.innerHTML = "";
      const blockCount = Math.ceil(window.innerWidth / 40) + 2;
      for (let i = 0; i < blockCount; i++) {
        const block = document.createElement("div");
        block.className = "ground-block";
        groundBlocks.appendChild(block);
      }
    };

    buildGround();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildGround, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-sky" />
      <div className="stars" ref={starsRef} />

      <div className="cloud" style={{ top: "15%", animationDuration: "28s", animationDelay: "-5s" }}>
        <div className="cloud-row">
          <div className="cloud-px" /><div className="cloud-px" /><div className="cloud-px" /><div className="cloud-px" />
        </div>
        <div className="cloud-row">
          <div className="cloud-px" />
          <div className="cloud-px" style={{ background: "white" }} />
          <div className="cloud-px" style={{ background: "white" }} />
          <div className="cloud-px" /><div className="cloud-px" /><div className="cloud-px" />
        </div>
        <div className="cloud-row">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="cloud-px" style={{ background: "white" }} />
          ))}
        </div>
      </div>

      <div className="cloud" style={{ top: "25%", animationDuration: "35s", animationDelay: "-15s" }}>
        <div className="cloud-row">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="cloud-px" style={{ background: "#b4d4f0" }} />
          ))}
        </div>
        <div className="cloud-row">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="cloud-px" style={{ background: "#d4e8f8" }} />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="notif-badge">
          <div className="notif-dot" />
          ► NEW LEVEL UNLOCKED — AUTHENTIC INFLUENCE
        </div>

        <h1 className="hero-title">BEYOND THE SPRAY &amp; PRAY</h1>
        <p className="hero-desc">
          A natural space connecting authentic micro and nano influencers with brands. Float above the noise.
        </p>

        <div className="health-container">
          <span>BRAND HP</span>
          <div className="health-bar">
            <div className="health-fill" />
          </div>
          <span>85/100</span>
        </div>

        <div className="hero-buttons">
          <a href="#cta" className="btn-primary">► START YOUR QUEST</a>
          <a href="#why" className="btn-secondary">▷ LEARN MORE</a>
        </div>
      </div>

      <div className="pixel-char">
        <svg width="64" height="80" viewBox="0 0 64 80" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
          <rect x="24" y="8" width="16" height="8" fill="#f0e6ff"/>
          <rect x="20" y="16" width="24" height="8" fill="#c084fc"/>
          <rect x="16" y="24" width="32" height="8" fill="#a855f7"/>
          <rect x="16" y="32" width="32" height="8" fill="#7c3aed"/>
          <rect x="16" y="40" width="32" height="8" fill="#6d28d9"/>
          <rect x="28" y="0" width="8" height="8" fill="#fbbf24"/>
          <rect x="28" y="26" width="8" height="6" fill="#22d3ee"/>
          <rect x="30" y="28" width="4" height="2" fill="white" opacity="0.5"/>
          <rect x="8" y="36" width="8" height="12" fill="#7c3aed"/>
          <rect x="4" y="40" width="4" height="8" fill="#6d28d9"/>
          <rect x="48" y="36" width="8" height="12" fill="#7c3aed"/>
          <rect x="52" y="40" width="4" height="8" fill="#6d28d9"/>
          <rect x="24" y="48" width="4" height="8" fill="#f97316" opacity="0.9"/>
          <rect x="36" y="48" width="4" height="8" fill="#f97316" opacity="0.9"/>
          <rect x="28" y="52" width="8" height="8" fill="#fbbf24"/>
          <rect x="24" y="56" width="4" height="4" fill="#fef08a"/>
          <rect x="36" y="56" width="4" height="4" fill="#fef08a"/>
          <rect x="28" y="60" width="8" height="4" fill="white" opacity="0.7"/>
          <rect x="4" y="8" width="4" height="4" fill="#fbbf24"/>
          <rect x="56" y="20" width="4" height="4" fill="#22d3ee"/>
          <rect x="0" y="28" width="4" height="4" fill="#f472b6"/>
        </svg>
      </div>

      <div className="hero-ground">
        <div className="ground-blocks" ref={groundRef} />
      </div>
    </section>
  );
}
