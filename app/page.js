import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import CtaBand from "@/components/CtaBand";
import ScrollReveal from "@/components/ScrollReveal";
import { cars } from "@/lib/cars";

const FEATURES = [
  {
    title: "Hand-Selected",
    body: "Every car is personally inspected and chosen for its condition, provenance and specification.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 15l-4.9 2.6.9-5.5-4-3.9 5.5-.8z" /></svg>
    ),
  },
  {
    title: "Tailored Finance",
    body: "Bespoke funding solutions, from HP to lease purchase, arranged to suit you.",
    icon: (
      <svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></svg>
    ),
  },
  {
    title: "Nationwide Delivery",
    body: "Enclosed, fully insured transport delivered discreetly to your door, anywhere in the UK.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M3 13l2-6h9l4 4h3v4M3 17h18" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>
    ),
  },
  {
    title: "Part Exchange",
    body: "Competitive, no-obligation valuations on your current car against any in our collection.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" /></svg>
    ),
  },
];

const BRANDS = ["Audi", "BMW", "Mercedes-AMG", "Porsche", "Lamborghini", "Bentley", "Land Rover"];

export default function Home() {
  const featured = cars.slice(0, 6);

  return (
    <>
      <ScrollReveal />
      <Header active="/" />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Hand-Selected · Prestige · Performance</p>
          <h1>Drive the<br /><em>Extraordinary</em></h1>
          <p>
            A curated empire of the world&apos;s finest performance and luxury cars —
            meticulously sourced, impeccably presented, ready to be driven.
          </p>
          <div className="hero-actions">
            <Link href="/collections" className="btn btn--primary">View Collection <span className="arrow">→</span></Link>
            <Link href="/#contact" className="btn btn--ghost">Enquire Now</Link>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><span className="line"></span></div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat"><div className="num">25<span>+</span></div><div className="label">Years Experience</div></div>
            <div className="stat"><div className="num">1200<span>+</span></div><div className="label">Cars Delivered</div></div>
            <div className="stat"><div className="num">40<span>+</span></div><div className="label">In Stock Now</div></div>
            <div className="stat"><div className="num">5<span>★</span></div><div className="label">Rated Service</div></div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section" id="featured">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Latest Arrivals</p>
              <h2 className="section-title">The Collection</h2>
            </div>
            <p className="lede">
              A rotating selection of the finest examples to pass through our showroom. Every car is
              inspected, prepared and presented to the highest standard.
            </p>
          </div>

          <div className="car-grid">
            {featured.map((car) => (
              <div className="reveal" key={car.id}><CarCard car={car} /></div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "56px" }} className="reveal">
            <Link href="/collections" className="btn btn--ghost">View Full Collection <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section features" id="about">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Our Story</p>
              <h2 className="section-title">An Empire Built<br />On Passion</h2>
            </div>
            <p className="lede">
              For over two decades, Cars Empire has specialised in sourcing and supplying the most
              sought-after prestige and performance cars. We buy with discernment and sell with
              integrity — every car earns its place.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section features" id="why" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="feature-grid reveal">
            {FEATURES.map((f) => (
              <div className="feature" key={f.title}>
                <div className="ico">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="brands">
        <div className="container">
          <div className="brand-row">
            {BRANDS.map((b) => <span key={b}>{b}</span>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        id="contact"
        eyebrow="Get In Touch"
        title={<>Found Your Next<br /><em>Statement</em> Car?</>}
        body="Speak with our team to arrange a viewing, discuss finance, or enquire about any car in our collection. We're here to help."
      />

      <Footer />
    </>
  );
}
