import React from "react";
import CategoryCard from "../components/CategoryCard.jsx";
import Hero from "../components/Hero.jsx";
import AboutSection from "../components/AboutSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import TrustSection from "../components/TrustSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import { categories } from "../data/properties.js";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section id="categories" className="bg-white py-20 sm:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Choose your requirement</p>
            <h2 className="mt-3 text-3xl font-extrabold text-estate-navy sm:text-4xl">
              Discover properties and services by category, taluka, and village.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Start with the type of property you need, select your preferred taluka and village,
              then view available projects with images, nearby places, maps, and contact options.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      <AboutSection />
      <ServicesSection />
      <TrustSection />
      <ContactSection />
    </main>
  );
}
