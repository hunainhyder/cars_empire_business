"use client";

import { useState } from "react";
import { faqs } from "@/lib/cars";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div className={`faq-item${open === i ? " open" : ""}`} key={f.q}>
          <button className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            {f.q}
            <span className="pm" aria-hidden="true" />
          </button>
          <div className="faq-a"><p>{f.a}</p></div>
        </div>
      ))}
    </div>
  );
}
