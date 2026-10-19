import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollectionBrowser from "@/components/CollectionBrowser";
import { collections, site } from "@/lib/cars";

export const metadata = {
  title: "Our Stock — Cars Empire",
  description: "Browse the full Cars Empire collection of prestige and high-performance cars currently available.",
};

export default function CollectionsPage({ searchParams }) {
  const category = (searchParams?.category || "all").toString();
  const q = (searchParams?.q || "").toString();
  const match = collections.find((c) => c.key === category);
  const heading = match ? `${match.label} cars` : "The full collection";

  return (
    <>
      <Header active="/collections" />

      <div className="container">
        <p className="crumb"><Link href="/">Home</Link> &nbsp;/&nbsp; Collections{match ? <> &nbsp;/&nbsp; {match.label}</> : null}</p>
        <div className="coll-head">
          <h1>{heading}</h1>
          <p>
            Hand-selected prestige and performance cars, inspected and fully prepared. Every car is
            offered at a clear price with finance, part-exchange and nationwide delivery available.
          </p>
        </div>
      </div>

      <div className="container">
        <CollectionBrowser initialCategory={category} initialTerm={q} />
      </div>

      {/* More collections */}
      <section className="section">
        <div className="container">
          <div className="sec-head"><h2 className="sec-title">More collections</h2></div>
          <div className="more-coll">
            {collections.map((c) => (
              <Link key={c.key} href={`/collections?category=${c.key}`}>{c.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Can&apos;t see what you want?</h2>
              <p>Tell us your perfect specification and our team will source it for you — no obligation.</p>
            </div>
            <a href={`mailto:${site.email}?subject=Car%20sourcing%20request`} className="btn btn--light">Find me a car</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
