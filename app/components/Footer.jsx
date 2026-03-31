export default function Footer() {
  return (
    <footer>
      <div>
        <span className="footer-logo">SOCU</span>
        <div className="footer-tagline">
          Beyond the Spray &amp; Pray.<br />A natural space for authentic<br />micro and nano influencers.
        </div>
      </div>

      <div>
        <div className="footer-col-title">NAVIGATION</div>
        <ul className="footer-links">
          <li><a href="#why">► Why Socu</a></li>
          <li><a href="#features">► Tools</a></li>
          <li><a href="#how">► How It Works</a></li>
          <li><a href="#levelup">► Level Up</a></li>
        </ul>
      </div>

      <div>
        <div className="footer-col-title">FOR YOU</div>
        <ul className="footer-links">
          <li><a href="#">► For Brands</a></li>
          <li><a href="#">► For Creators</a></li>
          <li><a href="#">► Pricing</a></li>
          <li><a href="#">► Blog</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">(c) 2026 SOCU. ALL RIGHTS RESERVED. LEVEL UP OR GO HOME.</div>
        <div className="footer-hearts">
          <div className="heart-px" />
          <div className="heart-px" style={{ animationDelay: "0.2s" }} />
          <div className="heart-px" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </footer>
  );
}
