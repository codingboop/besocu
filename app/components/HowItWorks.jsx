"use client";

import { useState } from "react";

const brandSteps = [
  {
    num: "STEP 01",
    title: "DEFINE YOUR CAMPAIGN",
    body: "Set your goals, target audience, budget, and content style. Socu turns your brief into a precise creator match spec.",
  },
  {
    num: "STEP 02",
    title: "DISCOVER MATCHED CREATORS",
    body: "Browse Socu's vetted network filtered by niche, engagement rate, and audience fit. No cold outreach, no guesswork.",
  },
  {
    num: "STEP 03",
    title: "COLLABORATE AND PUBLISH",
    body: "Brief creators directly, review content, approve and publish. No middlemen, no agency markups, just clear communication.",
  },
  {
    num: "STEP 04",
    title: "MEASURE REAL IMPACT",
    body: "Track conversions, engagement quality, sentiment, and ROI through Socu's performance dashboard. Every rupee accounted for.",
  },
];

const influencerSteps = [
  {
    num: "STEP 01",
    title: "BUILD YOUR PROFILE",
    body: "Connect your social accounts and build a creator profile that showcases your niche, audience, and past performance.",
  },
  {
    num: "STEP 02",
    title: "BROWSE CAMPAIGNS",
    body: "Discover brand deals that match your audience and values. No cold emails, no chasing, just opportunities that fit.",
  },
  {
    num: "STEP 03",
    title: "PITCH OR GET DISCOVERED",
    body: "Apply with your pitch directly, or let brands find you. Your profile does the selling so you can focus on creating.",
  },
  {
    num: "STEP 04",
    title: "CREATE AND GET PAID",
    body: "Post your content and get paid based on verified performance. Nano creators finally earn what they deserve.",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState("brands");
  const isBrands = active === "brands";

  return (
    <section id="how">
      <div className="section-label reveal">HOW IT WORKS</div>
      <h2 className="section-title reveal">FROM BRIEF TO IMPACT</h2>
      <p className="section-desc reveal">Two paths. One platform. Zero middlemen.</p>

      {/* Toggle */}
      <div className="how-toggle reveal">
        <div className="how-toggle-inner">
          <button
            className={`how-toggle-btn${isBrands ? " how-toggle-btn--active-brands" : ""}`}
            onClick={() => setActive("brands")}
          >
            ► FOR BRANDS
          </button>
          <button
            className={`how-toggle-btn${!isBrands ? " how-toggle-btn--active-influencers" : ""}`}
            onClick={() => setActive("influencers")}
          >
            ► FOR INFLUENCERS
          </button>
        </div>
      </div>

      {/* Panel — key forces remount on switch, retriggering step animations */}
      <div
        key={active}
        className={`track-panel ${isBrands ? "track-brands" : "track-influencers"} track-panel--toggled`}
      >
        <div className="track-header">
          <span className={`track-tag ${isBrands ? "track-tag--brands" : "track-tag--influencers"}`}>
            {isBrands ? "► FOR BRANDS" : "► FOR INFLUENCERS"}
          </span>
          <div className="track-header-line" />
        </div>

        <div className={`steps-track ${isBrands ? "steps-track--brands" : "steps-track--influencers"}`}>
          {(isBrands ? brandSteps : influencerSteps).map((step, i) => (
            <div className="step" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className={`step-dot ${isBrands ? "step-dot--brands" : "step-dot--influencers"}`} />
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-body">{step.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
