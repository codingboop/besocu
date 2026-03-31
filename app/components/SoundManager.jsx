"use client";

import { useEffect } from "react";

function playPixelClick() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    // Layer 1: fast ascending square wave blip
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.type = "square";
    osc1.frequency.setValueAtTime(320, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(640, ctx.currentTime + 0.055);
    gain1.gain.setValueAtTime(0.18, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.09);

    // Layer 2: subtle high ping for crispness
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.type = "square";
    osc2.frequency.setValueAtTime(1280, ctx.currentTime);
    gain2.gain.setValueAtTime(0.06, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    osc2.start(ctx.currentTime);
    osc2.stop(ctx.currentTime + 0.04);

    osc1.onended = () => ctx.close();
  } catch {
    // Silently fail — audio unavailable
  }
}

export default function SoundManager() {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest("button, a, [role='button']")) {
        playPixelClick();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
