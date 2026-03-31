"use client";

import { useEffect } from "react";

export default function Stats() {
  useEffect(() => {
    const statNumbers = document.querySelectorAll(".stat-number");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "vs-pulse 0.5s steps(2) 3";
          }
        });
      },
      { threshold: 0.5 },
    );
    statNumbers.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats">
      <div className="stats-grid reveal">
        <div className="stat-item">
          <span className="stat-number">3.8×</span>
          <span className="stat-label">BETTER ENGAGEMENT RATE</span>
        </div>
        <div className="stat-item">
          <span className="stat-number" style={{ color: "var(--accent-pink)" }}>10K+</span>
          <span className="stat-label">CREATORS WAITING</span>
        </div>
        <div className="stat-item">
          <span className="stat-number" style={{ color: "var(--accent-lime)" }}>94%</span>
          <span className="stat-label">AUTHENTIC AUDIENCE MATCH</span>
        </div>
        <div className="stat-item">
          <span className="stat-number" style={{ color: "var(--accent-cyan)" }}>0</span>
          <span className="stat-label">MIDDLEMEN. ZERO.</span>
        </div>
      </div>
    </section>
  );
}
