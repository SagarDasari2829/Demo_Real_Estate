import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import InquiryForm from "../components/InquiryForm.jsx";
import { businessPhone, categories, getCategory, getProject, villages, whatsappNumber } from "../data/properties.js";

function PlaceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const project = getProject(projectId);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <main className="section-shell py-20">
        <h1 className="text-3xl font-extrabold text-estate-navy">Project not found</h1>
        <Link to="/" className="primary-button mt-6">Back to Home</Link>
      </main>
    );
  }

  const category = getCategory(project.category) || categories[0];
  const villageName = villages[project.village] || project.village;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `I want details for ${project.name}. Please share project information.`
  )}`;

  return (
    <main className="bg-slate-50">
      <section className="bg-estate-navy py-12 text-white sm:py-16">
        <div className="section-shell">
          <Link to={`/village/${project.village}?category=${project.category}`} className="text-sm font-semibold text-emerald-200 hover:text-white">
            Back to projects
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase text-emerald-200">{category.title}</p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="text-4xl font-extrabold sm:text-5xl">{project.name}</h1>
              <p className="mt-4 text-lg text-slate-200">
                Maharashtra - {project.taluka} - {villageName}
              </p>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-slate-200">Starting Price</p>
              <p className="text-2xl font-extrabold">{project.startingPrice}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-8">
          <div className="rounded-lg bg-white p-3 shadow-premium">
            <div className="aspect-[16/10] overflow-hidden rounded-md bg-slate-200">
              <img src={project.gallery[activeImage]} alt={project.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {project.gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`aspect-[4/3] overflow-hidden rounded-md border transition ${
                    activeImage === index ? "border-estate-green ring-4 ring-emerald-100" : "border-transparent"
                  }`}
                >
                  <img src={image} alt={`${project.name} ${index + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <section className="rounded-lg bg-white p-6 shadow-sm">
            <p className="eyebrow">Property Description</p>
            <h2 className="mt-3 text-3xl font-extrabold text-estate-navy">Project overview</h2>
            <p className="mt-5 leading-8 text-slate-600">{project.description}</p>
          </section>

          <section className="rounded-lg bg-white p-6 shadow-sm">
            <p className="eyebrow">Plot Sizes</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.plotSizes.map((size) => (
                <span key={size} className="rounded-md bg-estate-mint px-4 py-2 text-sm font-bold text-estate-green">
                  {size}
                </span>
              ))}
            </div>
          </section>

          <section>
            <p className="eyebrow">Nearby Places</p>
            <h2 className="mt-3 text-3xl font-extrabold text-estate-navy">Important places around the project.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.nearbyPlaces.map((place) => (
                <article key={place.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-estate-mint text-estate-green">
                    <PlaceIcon />
                  </span>
                  <h3 className="mt-4 font-extrabold text-estate-navy">{place.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{place.distance} from site</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-lg bg-white p-6 shadow-sm">
            <p className="eyebrow">Google Maps Location</p>
            <div className="mt-5 aspect-[16/9] overflow-hidden rounded-md border border-slate-200">
              <iframe
                title={`${project.name} map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(project.mapQuery)}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-premium">
            <p className="text-sm font-semibold uppercase text-estate-green">Project Information</p>
            <div className="mt-5 grid gap-3">
              {[
                ["Category", category.title],
                ["Location", villageName],
                ["Plot Count", project.plotCount],
                ["Starting Price", project.startingPrice],
                ["Office", "Solapur, Maharashtra"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase text-slate-400">{label}</p>
                  <p className="mt-1 font-bold text-estate-navy">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-estate-navy">Contact Business</h2>
            <div className="mt-5 grid gap-3">
              <a href={whatsappUrl} className="primary-button">WhatsApp</a>
              <a href={`tel:${businessPhone}`} className="light-button">Call Now</a>
              <a href="#project-inquiry" className="light-button">Inquiry Form</a>
            </div>
          </section>

          <section id="project-inquiry">
            <InquiryForm subject={project.name} />
          </section>
        </aside>
      </section>
    </main>
  );
}
