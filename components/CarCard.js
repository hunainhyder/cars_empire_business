import { IconYear, IconMileage, IconFuel, IconGearbox } from "@/components/icons";

export default function CarCard({ car }) {
  return (
    <article className="car-card">
      <div className="car-media">
        {car.badge ? <span className="car-badge">{car.badge}</span> : null}
        {/* Placeholder art — swap for a real photo of the same name in /public/images */}
        <img src={car.image} alt={car.title} loading="lazy" />
      </div>
      <div className="car-body">
        <h3 className="car-title">{car.title}</h3>
        <p className="car-sub">{car.sub}</p>
        <ul className="car-specs">
          <li><IconYear />{car.year}</li>
          <li><IconMileage />{car.mileage}</li>
          <li><IconFuel />{car.fuel}</li>
          <li><IconGearbox />{car.gearbox}</li>
        </ul>
        <div className="car-foot">
          <div className="car-price"><small>Price</small>{car.price}</div>
          <a href="/#contact" className="car-enquire">Enquire</a>
        </div>
      </div>
    </article>
  );
}
