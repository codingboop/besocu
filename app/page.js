"use client";

import { useEffect } from "react";

const landingMarkup = `
<nav>
  <div class="nav-logo">SOCU</div>
  <ul class="nav-links">
    <li><a href="#why">WHY SOCU</a></li>
    <li><a href="#features">TOOLS</a></li>
    <li><a href="#how">HOW IT WORKS</a></li>
    <li><a href="#levelup">LEVEL UP</a></li>
    <li><a href="#cta" class="nav-cta">► JOIN NOW</a></li>
  </ul>
</nav>

<section id="hero">
  <div class="hero-sky"></div>
  <div class="stars" id="stars"></div>

  <div class="cloud" style="top:15%; animation-duration:28s; animation-delay:-5s;">
    <div class="cloud-row">
      <div class="cloud-px"></div><div class="cloud-px"></div><div class="cloud-px"></div><div class="cloud-px"></div>
    </div>
    <div class="cloud-row">
      <div class="cloud-px"></div><div class="cloud-px" style="background:white"></div><div class="cloud-px" style="background:white"></div><div class="cloud-px"></div><div class="cloud-px"></div><div class="cloud-px"></div>
    </div>
    <div class="cloud-row">
      <div class="cloud-px" style="background:white"></div><div class="cloud-px" style="background:white"></div><div class="cloud-px" style="background:white"></div><div class="cloud-px" style="background:white"></div><div class="cloud-px" style="background:white"></div><div class="cloud-px" style="background:white"></div><div class="cloud-px" style="background:white"></div><div class="cloud-px" style="background:white"></div>
    </div>
  </div>

  <div class="cloud" style="top:25%; animation-duration:35s; animation-delay:-15s;">
    <div class="cloud-row">
      <div class="cloud-px" style="background:#b4d4f0"></div><div class="cloud-px" style="background:#b4d4f0"></div><div class="cloud-px" style="background:#b4d4f0"></div>
    </div>
    <div class="cloud-row">
      <div class="cloud-px" style="background:#d4e8f8"></div><div class="cloud-px" style="background:#d4e8f8"></div><div class="cloud-px" style="background:#d4e8f8"></div><div class="cloud-px" style="background:#d4e8f8"></div><div class="cloud-px" style="background:#d4e8f8"></div>
    </div>
  </div>

  <div class="hero-content">
    <div class="notif-badge">
      <div class="notif-dot"></div>
      ► NEW LEVEL UNLOCKED — AUTHENTIC INFLUENCE
    </div>

    <div class="hero-tagline">▲ WORKOS PRESENTS ▲</div>
    <h1 class="hero-title">SOCU</h1>
    <div class="hero-sub">BEYOND THE SPRAY & PRAY</div>
    <p class="hero-desc">A natural space connecting authentic micro and nano influencers with brands. Float above the noise.</p>

    <div class="health-container">
      <span>BRAND HP</span>
      <div class="health-bar"><div class="health-fill"></div></div>
      <span>85/100</span>
    </div>

    <div class="hero-buttons">
      <a href="#cta" class="btn-primary">► START YOUR QUEST</a>
      <a href="#why" class="btn-secondary">▷ LEARN MORE</a>
    </div>
  </div>

  <div class="pixel-char">
    <svg width="64" height="80" viewBox="0 0 64 80" xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">
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

  <div class="hero-ground">
    <div class="ground-blocks" id="ground-blocks"></div>
  </div>
</section>

<div class="ticker">
  <div class="ticker-inner">
    ★ SOCU — FLOAT ABOVE THE NOISE &nbsp;&nbsp;&nbsp; ✦ AUTHENTIC INFLUENCE UNLOCKED &nbsp;&nbsp;&nbsp; ► NANO CREATORS + REAL BRANDS &nbsp;&nbsp;&nbsp; ★ BEYOND THE SPRAY & PRAY &nbsp;&nbsp;&nbsp; ✦ LEVEL UP YOUR BRAND QUEST &nbsp;&nbsp;&nbsp; ► JOIN THE NATURAL NETWORK &nbsp;&nbsp;&nbsp; ★ SOCU — FLOAT ABOVE THE NOISE &nbsp;&nbsp;&nbsp; ✦ AUTHENTIC INFLUENCE UNLOCKED &nbsp;&nbsp;&nbsp; ► NANO CREATORS + REAL BRANDS &nbsp;&nbsp;&nbsp;
  </div>
</div>

<section id="why">
  <div class="section-label">MISSION LOG</div>
  <h2 class="section-title reveal">WHY SOCU?</h2>
  <p class="section-desc reveal">Traditional platforms emphasize millions of empty followers.<br>We nurture real influence.</p>

  <div class="vs-grid reveal">
    <div class="vs-card bad">
      <div class="vs-card-label">
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">
          <rect x="0" y="0" width="16" height="16" fill="#1a0a2e"/>
          <rect x="4" y="4" width="8" height="8" fill="#ef4444"/>
          <rect x="6" y="2" width="4" height="4" fill="#ef4444"/>
          <rect x="2" y="6" width="4" height="4" fill="#ef4444"/>
          <rect x="10" y="6" width="4" height="4" fill="#ef4444"/>
          <rect x="6" y="10" width="4" height="4" fill="#ef4444"/>
        </svg>
        THE RIGID WAY
      </div>
      <div class="vs-card-title">SPRAY & PRAY ADVERTISING</div>
      <div class="vs-card-body">Spending endlessly on massive accounts with broad, disengaged audiences. It's a heavy, expensive anchor dragging your brand down.</div>
      <div class="feature-tag" style="background:#ef4444;color:white;font-size:7px;padding:6px 12px;display:inline-block;margin-top:16px;">⬇ LOW ROI</div>
    </div>

    <div class="vs-divider">
      <div class="vs-arrow"></div>
      <div class="vs-vs">VS</div>
      <div class="vs-arrow"></div>
    </div>

    <div class="vs-card good">
      <div class="vs-card-label">
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">
          <rect x="6" y="0" width="4" height="4" fill="#a3e635"/>
          <rect x="4" y="2" width="2" height="2" fill="#a3e635"/>
          <rect x="10" y="2" width="2" height="2" fill="#a3e635"/>
          <rect x="2" y="6" width="12" height="4" fill="#a3e635"/>
          <rect x="4" y="10" width="8" height="4" fill="#a3e635"/>
          <rect x="6" y="12" width="4" height="4" fill="#a3e635"/>
        </svg>
        THE NATURAL WAY
      </div>
      <div class="vs-card-title">ORGANIC COLLABORATION</div>
      <div class="vs-card-body">Collaborating organically with engaged nano and micro influencers in precise niches, lifting everyone higher and floating above the noise.</div>
      <div class="feature-tag tag-lime" style="font-size:7px;padding:6px 12px;display:inline-block;margin-top:16px;">⬆ HIGH AUTHENTICITY</div>
    </div>
  </div>
</section>

<section id="stats">
  <div class="stats-grid reveal">
    <div class="stat-item">
      <span class="stat-number">3.8×</span>
      <span class="stat-label">BETTER ENGAGEMENT RATE</span>
    </div>
    <div class="stat-item" style="--stat-color: var(--accent-pink);">
      <span class="stat-number" style="color:var(--accent-pink);">10K+</span>
      <span class="stat-label">CREATORS WAITING</span>
    </div>
    <div class="stat-item">
      <span class="stat-number" style="color:var(--accent-lime);">94%</span>
      <span class="stat-label">AUTHENTIC AUDIENCE MATCH</span>
    </div>
    <div class="stat-item">
      <span class="stat-number" style="color:var(--accent-cyan);">0</span>
      <span class="stat-label">MIDDLEMEN. ZERO.</span>
    </div>
  </div>
</section>

<section id="features">
  <div class="section-label">TOOLS & POWER-UPS</div>
  <h2 class="section-title reveal">TOOLS TO EXPAND NATURALLY</h2>
  <p class="section-desc reveal">Your full inventory for authentic influence.</p>

  <div class="features-grid">
    <div class="feature-card reveal" style="border-color:var(--accent-cyan);">
      <svg class="feature-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">
        <rect x="20" y="0" width="8" height="8" fill="#22d3ee"/>
        <rect x="16" y="8" width="16" height="8" fill="#22d3ee"/>
        <rect x="12" y="16" width="24" height="8" fill="#22d3ee"/>
        <rect x="8" y="24" width="32" height="8" fill="#0891b2"/>
        <rect x="12" y="32" width="8" height="8" fill="#0891b2"/>
        <rect x="28" y="32" width="8" height="8" fill="#0891b2"/>
        <rect x="8" y="40" width="8" height="8" fill="#0891b2"/>
        <rect x="32" y="40" width="8" height="8" fill="#0891b2"/>
        <rect x="20" y="20" width="8" height="8" fill="white" opacity="0.5"/>
      </svg>
      <div class="feature-number">TOOL 01</div>
      <div class="feature-title">EFFORTLESS DISCOVERY</div>
      <div class="feature-body">Breathe easy navigating a curated ecosystem of brands and creators that perfectly match your aesthetic and energy. No noise, just signal.</div>
      <span class="feature-tag tag-cyan">EXPLORE MAP</span>
    </div>

    <div class="feature-card reveal" style="border-color:var(--accent-lime);">
      <svg class="feature-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">
        <rect x="20" y="8" width="8" height="8" fill="#a3e635"/>
        <rect x="16" y="16" width="16" height="8" fill="#a3e635"/>
        <rect x="12" y="24" width="24" height="8" fill="#65a30d"/>
        <rect x="8" y="32" width="32" height="8" fill="#65a30d"/>
        <rect x="20" y="0" width="8" height="8" fill="#d9f99d"/>
        <rect x="18" y="20" width="12" height="4" fill="white" opacity="0.4"/>
      </svg>
      <div class="feature-number">TOOL 02</div>
      <div class="feature-title">ORGANIC GROWTH</div>
      <div class="feature-body">Build your presence without forcing it. Authenticity naturally floats to the top, outperforming every engineered trend and paid push.</div>
      <span class="feature-tag tag-lime">LEVEL UP</span>
    </div>

    <div class="feature-card reveal" style="border-color:var(--accent-pink);">
      <svg class="feature-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style="image-rendering:pixelated">
        <rect x="4" y="12" width="20" height="16" fill="#f472b6"/>
        <rect x="4" y="8" width="20" height="4" fill="#ec4899"/>
        <rect x="24" y="20" width="4" height="8" fill="#f472b6"/>
        <rect x="28" y="16" width="16" height="16" fill="#f472b6"/>
        <rect x="28" y="12" width="16" height="4" fill="#ec4899"/>
        <rect x="8" y="16" width="4" height="4" fill="white" opacity="0.4"/>
        <rect x="14" y="16" width="4" height="4" fill="white" opacity="0.4"/>
        <rect x="32" y="20" width="4" height="4" fill="white" opacity="0.4"/>
        <rect x="38" y="20" width="4" height="4" fill="white" opacity="0.4"/>
      </svg>
      <div class="feature-number">TOOL 03</div>
      <div class="feature-title">TRANSPARENT CONNECTIONS</div>
      <div class="feature-body">No intermediaries blocking the view. Chat directly, clearly, and form genuine partnerships on your own terms. Pixel-clear communication.</div>
      <span class="feature-tag tag-pink">DIRECT LINK</span>
    </div>
  </div>
</section>

<section id="how">
  <div class="section-label">QUEST LOG</div>
  <h2 class="section-title reveal">HOW TO PLAY</h2>
  <p class="section-desc reveal">Four steps to float above the noise.</p>

  <div class="steps-track">
    <div class="step">
      <div class="step-dot"></div>
      <div class="step-num">STEP 01 ///</div>
      <div class="step-title">CREATE YOUR PROFILE</div>
      <div class="step-body">Brand or creator — build your 8-bit identity. Sync your niche, vibe, and what makes you genuinely different from the noise.</div>
    </div>

    <div class="step">
      <div class="step-dot" style="background:var(--accent-cyan)"></div>
      <div class="step-num">STEP 02 ///</div>
      <div class="step-title">DISCOVER YOUR MATCH</div>
      <div class="step-body">Our algorithm maps compatible creators and brands. No spray, no pray — precise niche matching that surfaces real alignment.</div>
    </div>

    <div class="step">
      <div class="step-dot" style="background:var(--accent-lime)"></div>
      <div class="step-num">STEP 03 ///</div>
      <div class="step-title">CONNECT DIRECTLY</div>
      <div class="step-body">No agency middlemen. DM directly, agree on your terms, and build a partnership that makes sense for both parties — transparent from pixel one.</div>
    </div>

    <div class="step">
      <div class="step-dot" style="background:var(--accent-pink)"></div>
      <div class="step-num">STEP 04 ///</div>
      <div class="step-title">FLOAT & GROW</div>
      <div class="step-body">Create, post, earn trust, unlock new badges and brand tiers. Authentic content rises naturally — the algorithm rewards real engagement.</div>
    </div>
  </div>
</section>

<section id="levelup">
  <div class="section-label">ACHIEVEMENT SYSTEM</div>
  <h2 class="section-title reveal">LEVEL UP YOUR INFLUENCE</h2>
  <p class="section-desc reveal">Every partnership earns XP. Every authentic collab unlocks new tiers.</p>

  <div class="xp-bar-container reveal">
    <div class="xp-label">
      <span>► LVL 4 — MICRO CREATOR</span>
      <span>7,300 / 10,000 XP</span>
    </div>
    <div class="xp-track">
      <div class="xp-fill" id="xp-fill"></div>
    </div>
  </div>

  <div class="badges-grid reveal">
    <div class="badge" style="border-color:var(--accent-gold);">
      <span class="badge-icon">🌱</span>
      <div class="badge-name">FIRST COLLAB</div>
      <div class="badge-pts">+500 XP</div>
    </div>
    <div class="badge" style="border-color:var(--accent-cyan);">
      <span class="badge-icon">🎯</span>
      <div class="badge-name">NICHE SNIPER</div>
      <div class="badge-pts">+1200 XP</div>
    </div>
    <div class="badge" style="border-color:var(--accent-lime);">
      <span class="badge-icon">📈</span>
      <div class="badge-name">VIRAL MOMENT</div>
      <div class="badge-pts">+2500 XP</div>
    </div>
    <div class="badge" style="border-color:var(--accent-pink);">
      <span class="badge-icon">🤝</span>
      <div class="badge-name">TRUST BUILDER</div>
      <div class="badge-pts">+800 XP</div>
    </div>
    <div class="badge locked" style="border-color:#444;">
      <span class="badge-icon">👑</span>
      <div class="badge-name">BRAND LEGEND</div>
      <div class="badge-pts">+5000 XP</div>
    </div>
    <div class="badge locked" style="border-color:#444;">
      <span class="badge-icon">🚀</span>
      <div class="badge-name">ORBIT LEVEL</div>
      <div class="badge-pts">+10000 XP</div>
    </div>
  </div>
</section>

<section id="cta">
  <div class="cta-prompt">
    <div class="notif-dot"></div>
    PRESS START TO BEGIN YOUR QUEST
    <span class="cursor-blink"></span>
  </div>
  <h2 class="cta-title">READY TO FLOAT<br>ABOVE THE NOISE?</h2>
  <p class="cta-sub">Join thousands of brands and creators building real influence — one authentic partnership at a time.</p>

  <div class="cta-buttons">
    <a href="#" class="btn-primary" style="font-size:12px; padding:20px 40px;">
      ► I'M A CREATOR
    </a>
    <a href="#" class="btn-primary" style="background:var(--accent-cyan);box-shadow:4px 4px 0 #0891b2;font-size:12px;padding:20px 40px;">
      ► I'M A BRAND
    </a>
  </div>
</section>

<footer>
  <div>
    <span class="footer-logo">SOCU</span>
    <div class="footer-tagline">Beyond the Spray & Pray.<br>A natural space for authentic<br>micro and nano influencers.</div>
  </div>

  <div>
    <div class="footer-col-title">NAVIGATION</div>
    <ul class="footer-links">
      <li><a href="#why">► Why Socu</a></li>
      <li><a href="#features">► Tools</a></li>
      <li><a href="#how">► How It Works</a></li>
      <li><a href="#levelup">► Level Up</a></li>
    </ul>
  </div>

  <div>
    <div class="footer-col-title">FOR YOU</div>
    <ul class="footer-links">
      <li><a href="#">► For Brands</a></li>
      <li><a href="#">► For Creators</a></li>
      <li><a href="#">► Pricing</a></li>
      <li><a href="#">► Blog</a></li>
    </ul>
  </div>

  <div class="footer-bottom">
    <div class="footer-copy">(c) 2024 SOCU. ALL RIGHTS RESERVED. LEVEL UP OR GO HOME.</div>
    <div class="footer-hearts">
      <div class="heart-px"></div>
      <div class="heart-px" style="animation-delay:0.2s"></div>
      <div class="heart-px" style="animation-delay:0.4s"></div>
    </div>
  </div>
</footer>
`;

export default function Home() {
  useEffect(() => {
    const starsContainer = document.getElementById("stars");
    const groundBlocks = document.getElementById("ground-blocks");
    const xpFill = document.getElementById("xp-fill");

    if (!starsContainer || !groundBlocks || !xpFill) {
      return undefined;
    }

    starsContainer.innerHTML = "";
    for (let i = 0; i < 60; i += 1) {
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
      for (let i = 0; i < blockCount; i += 1) {
        const block = document.createElement("div");
        block.className = "ground-block";
        groundBlocks.appendChild(block);
      }
    };

    buildGround();
    window.addEventListener("resize", buildGround);

    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((el) => revealObserver.observe(el));

    const xpObserver = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        window.setTimeout(() => xpFill.classList.add("animated"), 300);
      }
    });
    xpObserver.observe(xpFill);

    const badgeHandlers = [];
    document.querySelectorAll(".badge:not(.locked)").forEach((badge) => {
      const clickHandler = () => {
        badge.style.transform = "scale(1.1) translateY(-12px)";
        badge.style.borderColor = "white";
        window.setTimeout(() => {
          badge.style.transform = "";
          badge.style.borderColor = "";
        }, 300);
      };
      badge.addEventListener("click", clickHandler);
      badgeHandlers.push({ badge, clickHandler });
    });

    const statNumbers = document.querySelectorAll(".stat-number");
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "vs-pulse 0.5s steps(2) 3";
          }
        });
      },
      { threshold: 0.5 },
    );
    statNumbers.forEach((el) => statObserver.observe(el));

    return () => {
      window.removeEventListener("resize", buildGround);
      revealObserver.disconnect();
      xpObserver.disconnect();
      statObserver.disconnect();
      badgeHandlers.forEach(({ badge, clickHandler }) => {
        badge.removeEventListener("click", clickHandler);
      });
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: landingMarkup }} />;
}
