import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-lg shadow-premium">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            alt="Modern residential construction"
            className="h-full min-h-[360px] w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">About Yesh Developer</p>
          <h2 className="mt-3 text-3xl font-extrabold text-estate-navy sm:text-4xl">
            A Solapur real estate and construction partner for confident decisions.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Prajwal Basutkar  Real Estate  & Advisors helps customers buy open plots, plan property development, build homes,
            and get practical civil engineering consultation. We focus on clear communication,
            guided site visits, construction-ready advice, and responsive support from inquiry to
            execution.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Open plot sales", "Property development", "Civil consultation"].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 p-4">
                <p className="font-bold text-estate-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
