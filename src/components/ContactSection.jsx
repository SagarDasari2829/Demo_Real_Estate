import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Contact us</p>
            <h2 className="mt-3 text-3xl font-extrabold text-estate-navy sm:text-4xl">
              Tell us what you want to buy, build, or develop.
            </h2>
            <form className="mt-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" placeholder="Full name" />
                <input className="rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" placeholder="Phone number" />
              </div>
              <input className="rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" placeholder="Email address" />
              <select className="rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" defaultValue="">
                <option value="" disabled>
                  Interested in
                </option>
                <option>Open plot purchase</option>
                <option>House construction</option>
                <option>Property development</option>
                <option>Civil engineering consultation</option>
              </select>
              <textarea className="min-h-32 rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" placeholder="Share location, budget, timeline, or site details" />
              <button type="submit" className="primary-button w-full sm:w-auto">
                Send Enquiry
              </button>
            </form>
          </div>

          <div className="grid gap-5">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-estate-navy">Business Details</h3>
              <div className="mt-5 space-y-3 text-slate-600">
                <p><strong className="text-estate-navy">Phone:</strong> +91 84217 48442</p>
                <p><strong className="text-estate-navy">Email:</strong> hello@yeshdeveloper.com</p>
                <p><strong className="text-estate-navy">Office:</strong> Solapur, Maharashtra</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="tel:+918421748442" className="primary-button">
                  Call Now
                </a>
                <a href="https://wa.me/918421748442" className="light-button">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="grid min-h-72 place-items-center rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center shadow-sm">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-estate-green">
                  Google Maps
                </p>
                <p className="mt-3 text-lg font-bold text-estate-navy">Solapur property consultation</p>
                <p className="mt-2 text-sm text-slate-500">Call or WhatsApp for site visits and plot availability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
