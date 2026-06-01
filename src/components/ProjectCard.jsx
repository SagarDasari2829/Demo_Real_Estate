import React from "react";
import { Link } from "react-router-dom";
import { whatsappNumber } from "../data/properties.js";

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
      <Link to={`/project/${project.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-md bg-estate-mint px-3 py-1 text-xs font-bold text-estate-green">
            {project.plotCount}
          </span>
          <span className="text-sm font-bold text-estate-blue">{project.startingPrice}</span>
        </div>
        <h3 className="text-xl font-extrabold text-estate-navy">{project.name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Plot sizes: {project.plotSizes.join(", ")}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link to={`/project/${project.id}`} className="light-button">
            View Details
          </Link>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`I want details for ${project.name}`)}`}
            className="primary-button"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
