import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={category.image}
          alt={category.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-extrabold text-estate-navy">{category.title}</h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">{category.description}</p>
        <Link to={`/category/${category.id}`} className="primary-button mt-5 w-full">
          Explore
        </Link>
      </div>
    </article>
  );
}
