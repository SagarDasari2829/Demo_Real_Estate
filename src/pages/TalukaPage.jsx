import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { categories, getCategory, getTaluka, villages } from "../data/properties.js";

export default function TalukaPage() {
  const { taluka } = useParams();
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category") || categories[0].id;
  const activeCategory = getCategory(categoryId) || categories[0];
  const activeTaluka = getTaluka(taluka);

  if (!activeTaluka) {
    return (
      <main className="section-shell py-20">
        <h1 className="text-3xl font-extrabold text-estate-navy">Taluka not found</h1>
        <Link to="/" className="primary-button mt-6">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="bg-slate-50">
      <section className="bg-estate-navy py-14 text-white sm:py-20">
        <div className="section-shell">
          <p className="text-sm font-semibold uppercase text-emerald-200">{activeCategory.title}</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{activeTaluka.name} Taluka</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Select a village or area to view available projects and plots.
          </p>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <p className="eyebrow">Select Village / Area</p>
        <h2 className="mt-3 text-3xl font-extrabold text-estate-navy">
          Villages and areas in {activeTaluka.name}.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeTaluka.villages.map((villageId) => (
            <Link
              key={villageId}
              to={`/village/${villageId}?category=${activeCategory.id}`}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-estate-green hover:shadow-premium"
            >
              <p className="text-2xl font-extrabold text-estate-navy">{villages[villageId]}</p>
              <p className="mt-2 text-sm text-slate-500">View available projects</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
