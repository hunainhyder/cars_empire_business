import { site } from "@/lib/cars";

export default function CtaBand({ eyebrow, title, body, id }) {
  return (
    <section className="cta-band" id={id}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="hero-actions">
          <a href={site.phoneHref} className="btn btn--primary">Call {site.phone}</a>
          <a href={`mailto:${site.email}`} className="btn btn--light">Email the Team</a>
        </div>
      </div>
    </section>
  );
}
