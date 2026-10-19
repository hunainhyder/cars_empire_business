"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo, IconCaret } from "@/components/icons";
import CollectionTile from "@/components/CollectionTile";
import { collections, site } from "@/lib/cars";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Our Stock" },
  { href: "/#how", label: "How it works" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQs" },
];

export default function Header({ active }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const openMega = () => { clearTimeout(closeTimer.current); setMegaOpen(true); };
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 120); };

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="logo"><Logo /></span>
          <span><b>CARS</b> <span className="em">EMPIRE</span></span>
        </Link>

        <nav className="nav-main" aria-label="Primary">
          <Link href="/" className={active === "/" ? "active" : undefined}>Home</Link>

          <div
            className={`nav-item${megaOpen ? " open" : ""}`}
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <button aria-expanded={megaOpen} onClick={() => setMegaOpen((v) => !v)}>
              Collections <IconCaret className="caret" />
            </button>
            <div className="mega" onMouseEnter={openMega} onMouseLeave={closeMega}>
              <div className="mega-inner">
                <div className="mega-grid">
                  {collections.map((c) => <CollectionTile key={c.key} item={c} />)}
                </div>
                <Link href="/collections" className="btn btn--accent btn--block" onClick={() => setMegaOpen(false)}>
                  See all collections →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/collections" className={active === "/collections" ? "active" : undefined}>Our Stock</Link>
          <Link href="/#how">How it works</Link>
          <Link href="/#about">About</Link>
          <Link href="/#faq">FAQs</Link>
        </nav>

        <div className="nav-right">
          <span className="ship-pill"><span className="flag">UK</span> Showroom &amp; delivery</span>
          <a href={site.phoneHref} className="btn btn--dark">Contact</a>
          <button className="burger" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="mobile-nav">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
        <div className="msec">Collections</div>
        <div className="mcols">
          {collections.slice(0, 10).map((c) => (
            <Link key={c.key} href={`/collections?category=${c.key}`} onClick={() => setMenuOpen(false)}>{c.label}</Link>
          ))}
        </div>
        <a href={site.phoneHref} className="btn btn--accent btn--block" style={{ marginTop: 20 }}>Call {site.phone}</a>
      </div>
    </header>
  );
}
