export default function Features() {
  return (
    <section id="features">
      <div className="section-label">TOOLS &amp; POWER-UPS</div>
      <h2 className="section-title reveal">TOOLS TO EXPAND NATURALLY</h2>
      <p className="section-desc reveal">Your full inventory for authentic influence.</p>

      <div className="features-grid">
        <div className="feature-card reveal" style={{ borderColor: "var(--accent-cyan)" }}>
          <svg className="feature-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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
          <div className="feature-number">TOOL 01</div>
          <div className="feature-title">EFFORTLESS DISCOVERY</div>
          <div className="feature-body">
            Breathe easy navigating a curated ecosystem of brands and creators that perfectly match your aesthetic and energy. No noise, just signal.
          </div>
          <span className="feature-tag tag-cyan">EXPLORE MAP</span>
        </div>

        <div className="feature-card reveal" style={{ borderColor: "var(--accent-lime)" }}>
          <svg className="feature-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="8" width="8" height="8" fill="#a3e635"/>
            <rect x="16" y="16" width="16" height="8" fill="#a3e635"/>
            <rect x="12" y="24" width="24" height="8" fill="#65a30d"/>
            <rect x="8" y="32" width="32" height="8" fill="#65a30d"/>
            <rect x="20" y="0" width="8" height="8" fill="#d9f99d"/>
            <rect x="18" y="20" width="12" height="4" fill="white" opacity="0.4"/>
          </svg>
          <div className="feature-number">TOOL 02</div>
          <div className="feature-title">ORGANIC GROWTH</div>
          <div className="feature-body">
            Build your presence without forcing it. Authenticity naturally floats to the top, outperforming every engineered trend and paid push.
          </div>
          <span className="feature-tag tag-lime">LEVEL UP</span>
        </div>

        <div className="feature-card reveal" style={{ borderColor: "var(--accent-pink)" }}>
          <svg className="feature-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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
          <div className="feature-number">TOOL 03</div>
          <div className="feature-title">TRANSPARENT CONNECTIONS</div>
          <div className="feature-body">
            No intermediaries blocking the view. Chat directly, clearly, and form genuine partnerships on your own terms. Pixel-clear communication.
          </div>
          <span className="feature-tag tag-pink">DIRECT LINK</span>
        </div>
      </div>
    </section>
  );
}
