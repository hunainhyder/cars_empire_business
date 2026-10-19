"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/cars";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collection" },
  { href: "/#about", label: "About" },
  { href: "/#why", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
];

export default function Header({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container nav">
          <Link href="/" className="brand">
            <span>
              <span className="brand-mark">CARS</span> EMPIRE
              <small>PRESTIGE &amp; PERFORMANCE</small>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={active === l.href ? "active" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta">
            <span className="nav-phone"><span>CALL</span>{site.phone}</span>
            <button
              className="burger"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <nav className="mobile-nav" aria-label="Mobile">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <span className="m-phone">{site.phone}</span>
      </nav>
    </>
  );
}
