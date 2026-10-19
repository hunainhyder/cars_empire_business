import Link from "next/link";
import { Logo, IconPin, IconPhone, IconMail, IconInstagram, IconFacebook, IconYouTube } from "@/components/icons";
import { site, collections } from "@/lib/cars";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <span className="logo"><Logo /></span>
              <span><b>CARS</b> <span className="em">EMPIRE</span></span>
            </Link>
            <p>Specialists in prestige and high-performance cars — hand-selected, impeccably presented and supplied with complete peace of mind.</p>
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
              <li><Link href="/collections">Our Stock</Link></li>
              <li><Link href="/#how">How it works</Link></li>
              <li><Link href="/#about">About us</Link></li>
              <li><Link href="/#faq">FAQs</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Collections</h4>
            <ul>
              {collections.slice(0, 6).map((c) => (
                <li key={c.key}><Link href={`/collections?category=${c.key}`}>{c.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in touch</h4>
            <div className="footer-line"><IconPin /><p>Empire House, 1 Showroom Way,<br />Business Park, London, EC1 2AB</p></div>
            <div className="footer-line"><IconPhone /><p><a href={site.phoneHref}>{site.phone}</a></p></div>
            <div className="footer-line"><IconMail /><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div>
          </div>
        </div>

        <div className="footer-bar">
          <p>© {year} Cars Empire Ltd. All rights reserved.</p>
          <div className="mini">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
