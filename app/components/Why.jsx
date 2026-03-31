export default function Why() {
  return (
    <section id="why">
      <div className="section-label reveal">THE PROBLEM</div>
      <h2 className="section-title reveal">INFLUENCER MARKETING IS BROKEN</h2>
      <p className="section-desc reveal">
        Brands burn money. Influencers burn out. Audiences tune out.
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
            THE OLD WAY
          </div>
          <div className="vs-card-title">SPRAY AND PRAY ADVERTISING</div>
          <div className="vs-card-body">
            Brands dump budgets into mega-influencers chasing reach, not resonance. Campaigns feel like billboards, loud, expensive, and forgotten. The creators who actually move their communities are left without the tools or the deals to prove their worth.
          </div>
          <div className="feature-tag" style={{ background: "#ef4444", color: "white", fontSize: "7px", padding: "6px 12px", display: "inline-block", marginTop: "16px" }}>
            ⬇ BRANDS BURN MONEY
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
            THE SOCU WAY
          </div>
          <div className="vs-card-title">PRECISION CREATOR PARTNERSHIPS</div>
          <div className="vs-card-body">
            Socu is an end-to-end influencer marketing platform built for the era of authentic social influence. We give brands the precision of a performance ad tool with the human touch of real creator partnerships. We give influencers the infrastructure to grow, pitch, and get paid fairly.
          </div>
          <div className="feature-tag tag-lime" style={{ fontSize: "7px", padding: "6px 12px", display: "inline-block", marginTop: "16px" }}>
            ⬆ REAL IMPACT
          </div>
        </div>
      </div>
    </section>
  );
}
