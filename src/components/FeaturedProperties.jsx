import React from "react";
import { properties } from "../data/properties.js";
import PropertyCard from "./PropertyCard.jsx";

export default function FeaturedProperties() {
  return (
    <section id="properties" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured listings</p>
            <h2 className="mt-3 text-3xl font-extrabold text-estate-navy sm:text-4xl">
              Verified open plots for homes, investment, and development.
            </h2>
          </div>
          <a href="#contact" className="light-button self-start md:self-auto">
            Request Full Catalog
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
