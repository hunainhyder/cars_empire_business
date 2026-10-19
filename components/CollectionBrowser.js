"use client";

import { useMemo, useState } from "react";
import CarCard from "@/components/CarCard";
import { IconSearch, IconFilter } from "@/components/icons";
import { cars, makeFilters, bodyFilters, sortOptions } from "@/lib/cars";

const PAGE_SIZE = 9;

export default function CollectionBrowser({ initialCategory = "all", initialTerm = "" }) {
  // A collection "category" from the mega-menu maps onto make, body or a tag.
  const [make, setMake] = useState("all");
  const [body, setBody] = useState("all");
  const [fuel, setFuel] = useState("all");
  const [minP, setMinP] = useState("");
  const [maxP, setMaxP] = useState("");
  const [term, setTerm] = useState(initialTerm);
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);
  const [category] = useState(initialCategory);

  const reset = () => {
    setMake("all"); setBody("all"); setFuel("all");
    setMinP(""); setMaxP(""); setTerm(""); setSort("featured"); setPage(1);
  };

  const matchesCategory = (car) => {
    if (!category || category === "all") return true;
    const inTags = car.tags.map((t) => t.toLowerCase()).includes(category.toLowerCase());
    return car.make === category || car.body === category || inTags;
  };

  const filtered = useMemo(() => {
    const q = term.trim().toLowerCase();
    const lo = minP === "" ? -Infinity : Number(minP);
    const hi = maxP === "" ? Infinity : Number(maxP);
    let list = cars.filter((c) =>
      matchesCategory(c) &&
      (make === "all" || c.make === make) &&
      (body === "all" || c.body === body) &&
      (fuel === "all" || c.fuel.toLowerCase() === fuel) &&
      c.price >= lo && c.price <= hi &&
      (!q || c.title.toLowerCase().includes(q) || c.brand.toLowerCase().includes(q))
    );
    const by = {
      featured: (a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0) || a.id - b.id,
      newest: (a, b) => b.year - a.year,
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      "miles-asc": (a, b) => a.mileageVal - b.mileageVal,
    };
    return [...list].sort(by[sort] || by.featured);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [make, body, fuel, minP, maxP, term, sort, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const shown = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  // Reset to page 1 whenever filters change the result set size/order.
  const onFilterChange = (setter) => (val) => { setter(val); setPage(1); };

  return (
    <div className="coll-wrap">
      {/* Sidebar */}
      <aside className="filters">
        <h4><IconFilter /> Filters</h4>

        <div className="fgroup">
          <label htmlFor="f-make">Make</label>
          <select id="f-make" className="fselect" value={make} onChange={(e) => onFilterChange(setMake)(e.target.value)}>
            {makeFilters.map((m) => <option key={m.key} value={m.key}>{m.label}</option>)}
          </select>
        </div>

        <div className="fgroup">
          <label htmlFor="f-body">Body type</label>
          <select id="f-body" className="fselect" value={body} onChange={(e) => onFilterChange(setBody)(e.target.value)}>
            {bodyFilters.map((b) => <option key={b.key} value={b.key}>{b.label}</option>)}
          </select>
        </div>

        <div className="fgroup">
          <label>Fuel</label>
          <div className="pills">
            {["all", "petrol", "diesel", "hybrid"].map((f) => (
              <button key={f} className={`pill${fuel === f ? " active" : ""}`} onClick={() => onFilterChange(setFuel)(f)}>
                {f === "all" ? "Any" : f[0].toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="fgroup">
          <label>Price (£)</label>
          <div className="fprice">
            <input type="number" inputMode="numeric" placeholder="No min" value={minP} onChange={(e) => onFilterChange(setMinP)(e.target.value)} aria-label="Minimum price" />
            <span>–</span>
            <input type="number" inputMode="numeric" placeholder="No max" value={maxP} onChange={(e) => onFilterChange(setMaxP)(e.target.value)} aria-label="Maximum price" />
          </div>
        </div>

        <button className="reset" onClick={reset}>Reset filters</button>
      </aside>

      {/* Main */}
      <div className="coll-main">
        <div className="coll-toolbar">
          <div className="search-box">
            <IconSearch />
            <input
              type="search"
              placeholder="Search by model or make…"
              aria-label="Search cars"
              value={term}
              onChange={(e) => onFilterChange(setTerm)(e.target.value)}
            />
          </div>
          <div className="sort-wrap">
            <label htmlFor="sort">Sort</label>
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              {sortOptions.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
            </select>
          </div>
        </div>

        <p className="coll-count"><b>{filtered.length}</b> {filtered.length === 1 ? "car" : "cars"} available</p>

        {shown.length > 0 ? (
          <div className="car-grid car-grid--3">
            {shown.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        ) : (
          <p className="no-results">No cars match your filters. <button onClick={reset}>Reset filters</button></p>
        )}

        {totalPages > 1 && (
          <nav className="pager" aria-label="Pagination">
            <button onClick={() => setPage(current - 1)} disabled={current === 1}>Prev</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button key={n} className={n === current ? "active" : ""} onClick={() => setPage(n)}>{n}</button>
            ))}
            <button onClick={() => setPage(current + 1)} disabled={current === totalPages}>Next</button>
          </nav>
        )}
      </div>
    </div>
  );
}
