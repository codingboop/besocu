import RevealObserver from "./components/RevealObserver";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Why from "./components/Why";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import LevelUp from "./components/LevelUp";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <Hero />
      <Ticker />
      <Why />
      <Stats />
      <Features />
      <HowItWorks />
      <LevelUp />
      <CTA />
      <Footer />
    </>
  );
}
