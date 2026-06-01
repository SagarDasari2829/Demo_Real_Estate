import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { properties } from "../data/properties.js";

const contactPhone = "+918421748442";

const placeIcons = {
  industry: (
    <path d="M4 20V9l5 3V9l5 3V6h6v14H4Zm3-3h10v-3.5l-5-3V15l-5-3v5Z" />
  ),
  temple: <path d="M4 20h16v-2H4v2Zm2-4h12v-6l-6-4-6 4v6Zm4-2v-3h4v3h-4Z" />,
  hospital: <path d="M5 21V4h14v17h-5v-5h-4v5H5Zm5-10h2V9h2V7h-2V5h-2v2H8v2h2v2Z" />,
  school: <path d="m12 3 10 5-10 5L2 8l10-5Zm-6 9 6 3 6-3v5l-6 3-6-3v-5Z" />,
  market: <path d="M5 21V10H3l2-6h14l2 6h-2v11H5Zm4-2h6v-5H9v5Z" />,
  highway: <path d="M8 21 10 3h4l2 18h-3l-.3-4h-1.4l-.3 4H8Zm3.5-8h1l-.3-5h-.4l-.3 5Z" />,
  bus: <path d="M6 19V6c0-2 2.5-3 6-3s6 1 6 3v13h-2v2h-2v-2h-4v2H8v-2H6Zm3-9h6V6H9v4Zm0 5h2v-2H9v2Zm4 0h2v-2h-2v2Z" />,
  fuel: <path d="M6 21V4h9v7h1l3 3v7h-2v-6.2L14.2 12H15v9H6Zm2-10h5V6H8v5Z" />,
  college: <path d="M3 21v-2h18v2H3Zm2-4V8l7-4 7 4v9h-3v-7h-2v7h-4v-7H8v7H5Z" />,
  rail: <path d="M7 20h10l-2-3H9l-2 3Zm1-5h8c1.1 0 2-.9 2-2V6c0-2-2.7-3-6-3S6 4 6 6v7c0 1.1.9 2 2 2Zm1-5V6h6v4H9Z" />,
};

function Icon({ type }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      {placeIcons[type] || placeIcons.market}
    </svg>
  );
}

function InquiryForm({ propertyTitle }) {
  return (
    <form className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" placeholder="Full name" />
        <input className="rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" placeholder="Phone number" />
      </div>
      <input className="rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" defaultValue={propertyTitle} />
      <textarea className="min-h-28 rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-estate-green focus:ring-4 focus:ring-emerald-100" placeholder="I want site visit, price details, and documents." />
      <button type="submit" className="primary-button">
        Send Property Inquiry
      </button>
    </form>
  );
}

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const property = properties.find((item) => String(item.id) === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <main className="section-shell py-20">
        <h1 className="text-3xl font-extrabold text-estate-navy">Property not found</h1>
        <Link to="/" className="primary-button mt-6">
          Back to Home
        </Link>
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/918421748442?text=${encodeURIComponent(
    `I am interested in ${property.title}. Please share details.`
  )}`;

  return (
    <main className="bg-slate-50">
      <section className="bg-estate-navy py-12 text-white sm:py-16">
        <div className="section-shell">
          <Link to="/#properties" className="text-sm font-semibold text-emerald-200 hover:text-white">
            Back to properties
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase text-emerald-200">Property Details</p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="text-4xl font-extrabold sm:text-5xl">{property.title}</h1>
              <p className="mt-4 text-lg text-slate-200">
                {property.state} → {property.city} → {property.area}
              </p>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-slate-200">Plot Size</p>
              <p className="text-2xl font-extrabold">{property.size}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-10 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-8">
          <div className="rounded-lg bg-white p-3 shadow-premium">
            <div className="aspect-[16/10] overflow-hidden rounded-md bg-slate-200">
              <img
                src={property.gallery[activeImage]}
                alt={property.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {property.gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`aspect-[4/3] overflow-hidden rounded-md border transition ${
                    activeImage === index ? "border-estate-green ring-4 ring-emerald-100" : "border-transparent"
                  }`}
                >
                  <img src={image} alt={`${property.title} ${index + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <section className="rounded-lg bg-white p-6 shadow-sm">
            <p className="eyebrow">Location Hierarchy</p>
            <h2 className="mt-3 text-3xl font-extrabold text-estate-navy">
              {property.state} → {property.city} → {property.area}
            </h2>
          </section>

          <section>
            <p className="eyebrow">Nearby Places</p>
            <h2 className="mt-3 text-3xl font-extrabold text-estate-navy">Important places around the plot.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {property.nearbyPlaces.map((place) => (
                <article key={place.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-estate-mint text-estate-green">
                    <Icon type={place.icon} />
                  </span>
                  <h3 className="mt-4 font-extrabold text-estate-navy">{place.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{place.distance} from site</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-lg bg-white p-6 shadow-sm">
            <p className="eyebrow">Google Maps</p>
            <div className="mt-5 aspect-[16/9] overflow-hidden rounded-md border border-slate-200">
              <iframe
                title={`${property.title} map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(property.mapQuery)}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          <section className="rounded-lg bg-white p-6 shadow-sm">
            <p className="eyebrow">Investment Opportunity</p>
            <h2 className="mt-3 text-3xl font-extrabold text-estate-navy">Property Description</h2>
            <p className="mt-5 leading-8 text-slate-600">{property.description}</p>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-premium">
            <p className="text-sm font-semibold uppercase text-estate-green">Property Information</p>
            <div className="mt-5 grid gap-3">
              {[
                ["Plot Size", property.size],
                ["Property Type", property.propertyType],
                ["Road Touch", property.roadTouch],
                ["Water", property.waterAvailability],
                ["Electricity", property.electricityAvailability],
                ["Construction", property.constructionAllowed],
                ["Status", property.status],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase text-slate-400">{label}</p>
                  <p className="mt-1 font-bold text-estate-navy">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-estate-navy">Contact for this property</h2>
            <div className="mt-5 grid gap-3">
              <a href="#property-inquiry" className="primary-button">
                Contact Us
              </a>
              <a href={`tel:${contactPhone}`} className="light-button">
                Call Now
              </a>
              <a href={whatsappUrl} className="light-button">
                WhatsApp
              </a>
            </div>
          </section>

          <section id="property-inquiry">
            <InquiryForm propertyTitle={property.title} />
          </section>
        </aside>
      </section>
    </main>
  );
}
