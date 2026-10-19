import Link from "next/link";
import { site } from "@/lib/cars";
import { IconPin, IconPhone, IconMail, IconInstagram, IconFacebook, IconYouTube } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span><span className="brand-mark">CARS</span> EMPIRE</span>
            </Link>
            <p>
              Specialists in prestige and high-performance cars. Hand-selected, impeccably
              presented, and supplied with complete peace of mind.
            </p>
            <div className="socials">
              <a href="#" aria-label="Instagram"><IconInstagram /></a>
              <a href="#" aria-label="Facebook"><IconFacebook /></a>
              <a href="#" aria-label="YouTube"><IconYouTube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/collections">Collection</Link></li>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#why">Why Choose Us</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/#contact">Finance</Link></li>
              <li><Link href="/#contact">Part Exchange</Link></li>
              <li><Link href="/#contact">Nationwide Delivery</Link></li>
              <li><Link href="/#contact">Sourcing Service</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Visit Us</h4>
            <div className="line"><IconPin /><p>Empire House, 1 Showroom Way,<br />Business Park, London, EC1 2AB</p></div>
            <div className="line"><IconPhone /><p><a href={site.phoneHref}>{site.phone}</a></p></div>
            <div className="line"><IconMail /><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div>
          </div>
        </div>

        <div className="footer-bar">
          <p>© {year} Cars Empire Ltd. All rights reserved.</p>
          <div className="mini-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
