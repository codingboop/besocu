export default function CTA() {
  return (
    <section id="cta">
      <div className="cta-prompt">
        <div className="notif-dot" />
        PRESS START TO BEGIN YOUR QUEST
        <span className="cursor-blink" />
      </div>
      <h2 className="cta-title">
        READY TO FLOAT<br />ABOVE THE NOISE?
      </h2>
      <p className="cta-sub">
        Join thousands of brands and creators building real influence — one authentic partnership at a time.
      </p>

      <div className="cta-buttons">
        <a href="#" className="btn-primary" style={{ fontSize: "12px", padding: "20px 40px" }}>
          ► I&apos;M A CREATOR
        </a>
        <a
          href="#"
          className="btn-primary"
          style={{ background: "var(--accent-cyan)", boxShadow: "4px 4px 0 #0891b2", fontSize: "12px", padding: "20px 40px" }}
        >
          ► I&apos;M A BRAND
        </a>
      </div>
    </section>
  );
}
