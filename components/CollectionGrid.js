"use client";

import { useMemo, useState } from "react";
import CarCard from "@/components/CarCard";
import { IconSearch } from "@/components/icons";
import { cars, makeFilters } from "@/lib/cars";

export default function CollectionGrid() {
  const [filter, setFilter] = useState("all");
  const [term, setTerm] = useState("");

  const visible = useMemo(() => {
    const q = term.trim().toLowerCase();
    return cars.filter((car) => {
      const matchFilter = filter === "all" || car.make === filter;
      const matchSearch = !q || car.title.toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }, [filter, term]);

  return (
    <>
      <div className="toolbar">
        <div className="container">
          <div className="filters">
            {makeFilters.map((f) => (
              <button
                key={f.key}
                className={`chip${filter === f.key ? " active" : ""}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="search-box">
            <IconSearch />
            <input
              type="search"
              placeholder="Search models…"
              aria-label="Search models"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <section className="section section--tight">
        <div className="container">
          <p className="result-count"><b>{visible.length}</b> cars available</p>

          {visible.length > 0 ? (
            <div className="car-grid">
              {visible.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <p className="no-results">
              No cars match your search.{" "}
              <button
                type="button"
                onClick={() => { setFilter("all"); setTerm(""); }}
                style={{ color: "var(--gold)", background: "none", border: 0, cursor: "pointer", font: "inherit" }}
              >
                Reset filters
              </button>
            </p>
          )}
        </div>
      </section>
    </>
  );
}
