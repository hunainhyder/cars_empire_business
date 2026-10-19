import Link from "next/link";

export default function CollectionTile({ item }) {
  return (
    <Link href={`/collections?category=${item.key}`} className="col-tile">
      <img src={item.image} alt={item.label} loading="lazy" />
      <span className="cap">
        <b>{item.label}</b>
        <span>{item.count} available</span>
      </span>
    </Link>
  );
}
