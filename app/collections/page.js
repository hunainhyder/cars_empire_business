import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import CollectionGrid from "@/components/CollectionGrid";

export const metadata = {
  title: "The Collection — Cars Empire",
  description: "Browse the full Cars Empire collection of prestige and high-performance cars currently available.",
};

export default function CollectionsPage() {
  return (
    <>
      <Header active="/collections" />

      <section className="page-banner">
        <div className="container">
          <p className="eyebrow">Available Now</p>
          <h1>The Collection</h1>
          <p className="crumb"><Link href="/">Home</Link> &nbsp;/&nbsp; Collection</p>
        </div>
      </section>

      <CollectionGrid />

      <CtaBand
        eyebrow="Can't See What You Want?"
        title={<>We Can <em>Source</em> It<br />For You</>}
        body="Tell us your perfect specification and our team will find it. Nationwide search, discreet service, no obligation."
      />

      <Footer />
    </>
  );
}
