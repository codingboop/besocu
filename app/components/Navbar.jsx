"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <nav>
      <div className="nav-logo">SOCU</div>

      <ul className="nav-links">
        <li><a href="#why">WHY SOCU</a></li>
        <li><a href="#features">TOOLS</a></li>
        <li><a href="#how">HOW IT WORKS</a></li>
        <li><a href="#levelup">LEVEL UP</a></li>
        <li><a href="#cta" className="nav-cta">► JOIN NOW</a></li>
      </ul>

      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className="nav-mobile-menu">
          <a href="#why" onClick={close}>WHY SOCU</a>
          <a href="#features" onClick={close}>TOOLS</a>
          <a href="#how" onClick={close}>HOW IT WORKS</a>
          <a href="#levelup" onClick={close}>LEVEL UP</a>
          <a href="#cta" className="nav-cta" onClick={close}>► JOIN NOW</a>
        </div>
      )}
    </nav>
  );
}
