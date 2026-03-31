export default function Why() {
  return (
    <section id="why">
      <div className="section-label">MISSION LOG</div>
      <h2 className="section-title reveal">WHY SOCU?</h2>
      <p className="section-desc reveal">
        Traditional platforms emphasize millions of empty followers.<br />We nurture real influence.
      </p>

      <div className="vs-grid reveal">
        <div className="vs-card bad">
          <div className="vs-card-label">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
              <rect x="0" y="0" width="16" height="16" fill="#1a0a2e"/>
              <rect x="4" y="4" width="8" height="8" fill="#ef4444"/>
              <rect x="6" y="2" width="4" height="4" fill="#ef4444"/>
              <rect x="2" y="6" width="4" height="4" fill="#ef4444"/>
              <rect x="10" y="6" width="4" height="4" fill="#ef4444"/>
              <rect x="6" y="10" width="4" height="4" fill="#ef4444"/>
            </svg>
            THE RIGID WAY
          </div>
          <div className="vs-card-title">SPRAY &amp; PRAY ADVERTISING</div>
          <div className="vs-card-body">
            Spending endlessly on massive accounts with broad, disengaged audiences. It&apos;s a heavy, expensive anchor dragging your brand down.
          </div>
          <div className="feature-tag" style={{ background: "#ef4444", color: "white", fontSize: "7px", padding: "6px 12px", display: "inline-block", marginTop: "16px" }}>
            ⬇ LOW ROI
          </div>
        </div>

        <div className="vs-divider">
          <div className="vs-arrow" />
          <div className="vs-vs">VS</div>
          <div className="vs-arrow" />
        </div>

        <div className="vs-card good">
          <div className="vs-card-label">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
              <rect x="6" y="0" width="4" height="4" fill="#a3e635"/>
              <rect x="4" y="2" width="2" height="2" fill="#a3e635"/>
              <rect x="10" y="2" width="2" height="2" fill="#a3e635"/>
              <rect x="2" y="6" width="12" height="4" fill="#a3e635"/>
              <rect x="4" y="10" width="8" height="4" fill="#a3e635"/>
              <rect x="6" y="12" width="4" height="4" fill="#a3e635"/>
            </svg>
            THE NATURAL WAY
          </div>
          <div className="vs-card-title">ORGANIC COLLABORATION</div>
          <div className="vs-card-body">
            Collaborating organically with engaged nano and micro influencers in precise niches, lifting everyone higher and floating above the noise.
          </div>
          <div className="feature-tag tag-lime" style={{ fontSize: "7px", padding: "6px 12px", display: "inline-block", marginTop: "16px" }}>
            ⬆ HIGH AUTHENTICITY
          </div>
        </div>
      </div>
    </section>
  );
}
