import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="section-shell flex flex-col justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row">
        <p>Copyright 2026 Prajwal Basutkar. Real Estate, Construction, and Civil Consultation.</p>
        <div className="flex gap-5">
          <a href="/#categories" className="hover:text-estate-green">Categories</a>
          <a href="/#services" className="hover:text-estate-green">Services</a>
          <a href="/#contact" className="hover:text-estate-green">Contact</a>
        </div>
      </div>
    </footer>
  );
}
