export default function Features() {
  return (
    <section id="features">
      <div className="section-label">FOR BRANDS</div>
      <h2 className="section-title reveal">BUILD CAMPAIGNS THAT ACTUALLY CONVERT</h2>
      <p className="section-desc reveal">Stop paying for impressions that don&apos;t move the needle.</p>

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
          <div className="feature-title">CREATOR DISCOVERY</div>
          <div className="feature-body">
            Find nano, micro, and small influencers filtered by niche, engagement rate, audience demographics, and past performance. No guesswork, just the right fit.
          </div>
          <span className="feature-tag tag-cyan">FIND YOUR FIT</span>
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
          <div className="feature-title">IMPACT ANALYTICS</div>
          <div className="feature-body">
            Track what matters: conversions, engagement quality, sentiment, and ROI, not just reach. Every rupee backed by verified performance data.
          </div>
          <span className="feature-tag tag-lime">REAL METRICS</span>
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
          <div className="feature-title">CAMPAIGN BUILDER</div>
          <div className="feature-body">
            Design, launch, and manage influencer campaigns with the same precision as your best ad tools. Browse an open marketplace or let Socu&apos;s matching engine find the perfect fit.
          </div>
          <span className="feature-tag tag-pink">LAUNCH NOW</span>
        </div>
      </div>
    </section>
  );
}
