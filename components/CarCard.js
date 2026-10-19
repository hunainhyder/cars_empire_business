"use client";

import { useState } from "react";
import { IconHeart, IconGauge, IconGear, IconCalendar } from "@/components/icons";
import { formatPrice, formatMiles, site } from "@/lib/cars";

export default function CarCard({ car }) {
  const [fav, setFav] = useState(false);
  const enquireHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Enquiry: ${car.title} (${car.ref})`
  )}`;

  return (
    <article className="car-card">
      <div className="car-media">
        {car.badge ? <span className="car-badge">{car.badge}</span> : null}
        <button
          className={`fav${fav ? " on" : ""}`}
          aria-label={fav ? "Remove from shortlist" : "Add to shortlist"}
          aria-pressed={fav}
          onClick={() => setFav((v) => !v)}
        >
          <IconHeart />
        </button>
        {/* Placeholder art — replace with a real photo of the same name in /public/images */}
        <img src={car.image} alt={car.title} loading="lazy" />
      </div>
      <div className="car-body">
        <div className="tag-row">
          {car.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
        <h3 className="car-title">{car.title}</h3>
        <p className="car-sub">{car.sub}</p>
        <div className="car-meta">
          <span><IconCalendar />{car.year}</span>
          <span><IconGauge />{formatMiles(car.mileageVal)}</span>
          <span><IconGear />{car.gearbox}</span>
        </div>
        <div className="car-foot">
          <div className="price-block">
            <div className="cap">Price</div>
            <div className="val">{formatPrice(car.price)}</div>
          </div>
          <a href={enquireHref} className="car-enquire">Enquire</a>
        </div>
      </div>
    </article>
  );
}
