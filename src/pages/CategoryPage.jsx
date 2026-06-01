import React from "react";
import { Link, useParams } from "react-router-dom";
import { categories, getCategory, talukas } from "../data/properties.js";

export default function CategoryPage() {
  const { category } = useParams();
  const activeCategory = getCategory(category) || categories[0];

  return (
    <main className="bg-slate-50">
      <section className="bg-estate-navy py-14 text-white sm:py-20">
        <div className="section-shell">
          <p className="text-sm font-semibold uppercase text-emerald-200">Category Selection</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{activeCategory.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">{activeCategory.description}</p>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Select Taluka</p>
            <h2 className="mt-3 text-3xl font-extrabold text-estate-navy">
              Choose a taluka to view villages and areas.
            </h2>
          </div>
          <Link to="/#categories" className="light-button self-start md:self-auto">
            Change Category
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {talukas.map((taluka) => (
            <Link
              key={taluka.id}
              to={`/taluka/${taluka.id}?category=${activeCategory.id}`}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-estate-green hover:shadow-premium"
            >
              <p className="text-2xl font-extrabold text-estate-navy">{taluka.name}</p>
              <p className="mt-2 text-sm text-slate-500">{taluka.villages.length} villages / areas available</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
