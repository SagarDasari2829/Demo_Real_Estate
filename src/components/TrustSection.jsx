import React from "react";

const points = [
  "Verified Solapur plot options",
  "Quick WhatsApp and call support",
  "Civil engineering guidance",
  "Site visits and construction planning",
];

export default function TrustSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-extrabold text-estate-navy">
              Practical real estate advice backed by civil engineering discipline.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              From plot selection to layout planning, budgeting, and construction supervision, our
              team keeps the process transparent, fast, and easy for families and investors.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <span className="mb-4 grid h-9 w-9 place-items-center rounded-md bg-estate-mint text-lg font-black text-estate-green">
                  +
                </span>
                <p className="font-bold text-estate-navy">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
