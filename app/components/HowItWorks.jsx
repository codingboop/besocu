const steps = [
  {
    num: "STEP 01 ///",
    title: "CREATE YOUR PROFILE",
    body: "Brand or creator — build your 8-bit identity. Sync your niche, vibe, and what makes you genuinely different from the noise.",
    dotColor: "var(--accent-gold)",
  },
  {
    num: "STEP 02 ///",
    title: "DISCOVER YOUR MATCH",
    body: "Our algorithm maps compatible creators and brands. No spray, no pray — precise niche matching that surfaces real alignment.",
    dotColor: "var(--accent-cyan)",
  },
  {
    num: "STEP 03 ///",
    title: "CONNECT DIRECTLY",
    body: "No agency middlemen. DM directly, agree on your terms, and build a partnership that makes sense for both parties — transparent from pixel one.",
    dotColor: "var(--accent-lime)",
  },
  {
    num: "STEP 04 ///",
    title: "FLOAT & GROW",
    body: "Create, post, earn trust, unlock new badges and brand tiers. Authentic content rises naturally — the algorithm rewards real engagement.",
    dotColor: "var(--accent-pink)",
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="section-label">QUEST LOG</div>
      <h2 className="section-title reveal">HOW TO PLAY</h2>
      <p className="section-desc reveal">Four steps to float above the noise.</p>

      <div className="steps-track">
        {steps.map((step, i) => (
          <div className="step" key={i}>
            <div className="step-dot" style={{ background: step.dotColor }} />
            <div className="step-num">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-body">{step.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
