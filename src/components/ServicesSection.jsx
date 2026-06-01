import React from "react";

const services = [
  {
    title: "House Construction",
    text: "Residential construction support with estimation, material guidance, supervision, and practical site updates.",
  },
  {
    title: "Civil Engineering Guidance",
    text: "Structural advice, site feasibility, estimation, layout review, and practical engineering consultation.",
  },
  {
    title: "Planning & Development",
    text: "Open plot development, site planning, road access coordination, drainage planning, and phased execution.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-estate-navy py-20 text-white sm:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
            Construction services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            From plot purchase to finished home, one accountable team.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-lg border border-white/14 bg-white/8 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/12"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-estate-green text-sm font-black">
                0{index + 1}
              </span>
              <h3 className="mt-6 text-xl font-extrabold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-200">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
