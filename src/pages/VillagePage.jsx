import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.jsx";
import { categories, getCategory, getProjectsByVillage, villages } from "../data/properties.js";

export default function VillagePage() {
  const { village } = useParams();
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category");
  const activeCategory = getCategory(categoryId) || null;
  const projects = getProjectsByVillage(village, activeCategory?.id);
  const villageName = villages[village] || "Selected Village";

  return (
    <main className="bg-slate-50">
      <section className="bg-estate-navy py-14 text-white sm:py-20">
        <div className="section-shell">
          <p className="text-sm font-semibold uppercase text-emerald-200">
            {activeCategory ? activeCategory.title : "Available Projects"}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{villageName}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            View projects, plot counts, pricing, maps, nearby places, and contact options.
          </p>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Available Projects</p>
            <h2 className="mt-3 text-3xl font-extrabold text-estate-navy">
              Projects in {villageName}
            </h2>
          </div>
          <Link to="/#categories" className="light-button self-start md:self-auto">
            Start Again
          </Link>
        </div>

        {projects.length ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-estate-navy">No matching projects yet</h3>
            <p className="mt-3 leading-7 text-slate-600">
              Contact Prajwal Basutkar for upcoming availability in {villageName}, or choose another
              category or taluka.
            </p>
            <a href="/#contact" className="primary-button mt-6">
              Contact Business
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
