import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import CollectionTile from "@/components/CollectionTile";
import Faq from "@/components/Faq";
import ScrollReveal from "@/components/ScrollReveal";
import { IconSearch, IconStar, IconTruck } from "@/components/icons";
import { cars, collections, makes, testimonials, site } from "@/lib/cars";

const STEPS = [
  { n: "01", t: "Browse the collection", d: "Explore our hand-selected stock online, or tell us the exact specification you're after." },
  { n: "02", t: "Reserve or enquire", d: "Arrange a viewing or secure your car with a refundable deposit — no pressure, no obligation." },
  { n: "03", t: "Finance & part-exchange", d: "We tailor finance to suit you and offer a fair valuation on your current car." },
  { n: "04", t: "Delivered to you", d: "Enclosed, fully insured delivery to your door, anywhere in the UK." },
];

const Stars = () => (
  <span className="stars">{[0, 1, 2, 3, 4].map((i) => <IconStar key={i} />)}</span>
);

export default function Home() {
  const featured = cars.slice(0, 10);
  const arrivals = cars.slice(5, 11);
  const popularMakes = ["Audi", "BMW", "Mercedes-AMG", "Porsche", "Land Rover", "Nissan"];

  return (
    <>
      <ScrollReveal />
      <Header active="/" />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-banner">
            <div className="topline">
              <span className="dot">Hand-selected stock</span>
              <span className="dot">Nationwide delivery included</span>
              <span className="dot">Finance &amp; part-exchange</span>
            </div>
            <h1>Discover your next car from our collection</h1>
            <p className="lede">
              A curated empire of the world&apos;s finest performance and luxury cars —
              meticulously sourced, impeccably presented and ready to drive.
            </p>
            <form className="hero-search" action="/collections" method="get">
              <div className="field">
                <IconSearch />
                <input type="search" name="q" placeholder="Search make or model, e.g. Porsche 911" aria-label="Search cars" />
              </div>
              <button type="submit" className="btn btn--accent">Search</button>
            </form>
            <div className="hero-chips">
              <span className="lbl">Popular:</span>
              {popularMakes.map((m) => (
                <Link key={m} href={`/collections?q=${encodeURIComponent(m)}`}>{m}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <h2 className="sec-title">Featured cars</h2>
            <Link href="/collections" className="sec-link">See all stock →</Link>
          </div>
          <div className="scroller">
            {featured.map((c) => <CarCard key={c.id} car={c} />)}
          </div>
        </div>
      </section>

      {/* BROWSE BY MAKE */}
      <section className="section-sm">
        <div className="container">
          <div className="sec-head">
            <h2 className="sec-title">Browse by make</h2>
            <Link href="/collections" className="sec-link">All makes →</Link>
          </div>
          <div className="make-row reveal">
            {makes.slice(0, 12).map((m) => (
              <Link href={`/collections?q=${encodeURIComponent(m)}`} className="make" key={m}>
                <span className="mono">{m[0]}</span>
                <span className="nm">{m}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <h2 className="sec-title">Collections</h2>
            <Link href="/collections" className="sec-link">See all collections →</Link>
          </div>
          <p className="sec-sub">The cars of the moment, grouped to make them easier to find.</p>
          <div className="col-strip reveal">
            {collections.slice(0, 7).map((c) => <CollectionTile key={c.key} item={c} />)}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div className="container">
          <div className="sec-head">
            <h2 className="sec-title">From our showroom to your driveway</h2>
          </div>
          <p className="sec-sub">Four simple steps, and we do the heavy lifting.</p>
          <div className="steps reveal">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="no">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-sm" id="about">
        <div className="container">
          <div className="sec-head">
            <h2 className="sec-title">An empire built on passion</h2>
          </div>
          <p className="sec-sub" style={{ maxWidth: "80ch" }}>
            For over two decades, Cars Empire has specialised in sourcing and supplying the most
            sought-after prestige and performance cars. Every car is personally inspected and chosen
            for its condition, provenance and specification — we buy with discernment and sell with
            integrity, so each car earns its place in the collection.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <h2 className="sec-title">What our customers say</h2>
            <Link href="#" className="sec-link">See all reviews →</Link>
          </div>
          <div className="reviews-head">
            <span className="score">5.0</span>
            <div>
              <Stars />
              <div style={{ fontSize: "0.82rem", color: "var(--muted)" }}>Based on verified customer reviews</div>
            </div>
          </div>
          <div className="reviews reveal">
            {testimonials.map((r) => (
              <div className="review" key={r.name}>
                <Stars />
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="who">
                  <span className="av">{r.name[0]}</span>
                  <div>
                    <b>{r.name}</b>
                    <span>{r.when}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ARRIVALS */}
      <section className="section-sm">
        <div className="container">
          <div className="sec-head">
            <h2 className="sec-title">Latest arrivals</h2>
            <Link href="/collections" className="sec-link">View all →</Link>
          </div>
          <div className="car-grid car-grid--3 reveal">
            {arrivals.map((c) => <CarCard key={c.id} car={c} />)}
          </div>
        </div>
      </section>

      {/* BUSINESS BAND */}
      <section className="section-sm">
        <div className="container">
          <div className="biz">
            <div>
              <div className="t">Buying for a business?</div>
              <p>Fleet, VAT-qualifying and contract-hire options for companies and sole traders.</p>
            </div>
            <div className="acts">
              <a href={`mailto:${site.email}`} className="btn btn--ghost-light">How it works</a>
              <a href={site.phoneHref} className="btn btn--accent">Talk to us</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Looking for a specific car?</h2>
              <p>Tell us what you&apos;re after and our team will find it — sourced to your exact specification.</p>
            </div>
            <a href={`mailto:${site.email}?subject=Car%20sourcing%20request`} className="btn btn--light">Find me a car</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="sec-head">
            <h2 className="sec-title">Questions, answered</h2>
          </div>
          <Faq />
        </div>
      </section>

      <Footer />
    </>
  );
}
