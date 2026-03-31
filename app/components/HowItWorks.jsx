const brandSteps = [
  {
    num: "FOR BRANDS / STEP 01",
    title: "DEFINE YOUR CAMPAIGN",
    body: "Set your goals, target audience, budget, and content style. Socu turns your brief into a precise creator match spec.",
    dotColor: "var(--accent-gold)",
  },
  {
    num: "FOR BRANDS / STEP 02",
    title: "DISCOVER MATCHED CREATORS",
    body: "Browse Socu's vetted network filtered by niche, engagement rate, and audience fit. No cold outreach, no guesswork.",
    dotColor: "var(--accent-cyan)",
  },
  {
    num: "FOR BRANDS / STEP 03",
    title: "COLLABORATE AND PUBLISH",
    body: "Brief creators directly, review content, approve and publish. No middlemen, no agency markups, just clear communication.",
    dotColor: "var(--accent-lime)",
  },
  {
    num: "FOR BRANDS / STEP 04",
    title: "MEASURE REAL IMPACT",
    body: "Track conversions, engagement quality, sentiment, and ROI through Socu's performance dashboard. Every rupee accounted for.",
    dotColor: "var(--accent-pink)",
  },
];

const influencerSteps = [
  {
    num: "FOR INFLUENCERS / STEP 01",
    title: "BUILD YOUR PROFILE",
    body: "Connect your social accounts and build a creator profile that showcases your niche, audience, and past performance.",
    dotColor: "var(--accent-gold)",
  },
  {
    num: "FOR INFLUENCERS / STEP 02",
    title: "BROWSE CAMPAIGNS",
    body: "Discover brand deals that match your audience and values. No cold emails, no chasing, just opportunities that fit.",
    dotColor: "var(--accent-cyan)",
  },
  {
    num: "FOR INFLUENCERS / STEP 03",
    title: "PITCH OR GET DISCOVERED",
    body: "Apply with your pitch directly, or let brands find you. Your profile does the selling so you can focus on creating.",
    dotColor: "var(--accent-lime)",
  },
  {
    num: "FOR INFLUENCERS / STEP 04",
    title: "CREATE AND GET PAID",
    body: "Post your content and get paid based on verified performance. Nano creators finally earn what they deserve.",
    dotColor: "var(--accent-pink)",
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="section-label reveal">HOW IT WORKS</div>
      <h2 className="section-title reveal">FROM BRIEF TO IMPACT</h2>
      <p className="section-desc reveal">Two paths. One platform. Zero middlemen.</p>

      <div className="steps-track">
        {brandSteps.map((step, i) => (
          <div className="step" key={`brand-${i}`}>
            <div className="step-dot" style={{ background: step.dotColor }} />
            <div className="step-num">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-body">{step.body}</div>
          </div>
        ))}
      </div>

      <div className="steps-track" style={{ marginTop: "64px" }}>
        {influencerSteps.map((step, i) => (
          <div className="step" key={`inf-${i}`}>
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
