import React from "react";
import { useState } from "react";

const navLinks = [
  ["Home", "/#home"],
  ["Categories", "/#categories"],
  ["About", "/#about"],
  ["Services", "/#services"],
  ["Contact", "/#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/92 backdrop-blur">
      <nav className="section-shell flex min-h-16 items-center justify-between gap-4">
        <a href="/#home" className="flex items-center gap-3" aria-label="Yesh Developer home">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-estate-navy text-lg font-black text-white">
            PB
          </span>
          <span>
            <span className="block text-base font-extrabold text-estate-navy">PRAJVAL BASUTKAR</span>
            <span className="block text-xs font-medium text-slate-500">Real Estate & Construction</span>
          </span>
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-estate-navy md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-xl leading-none">{open ? "x" : "="}</span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-semibold text-slate-600 transition hover:text-estate-sky"
            >
              {label}
            </a>
          ))}
          <a href="/#contact" className="primary-button min-h-10 px-4 py-2">
            Contact Us
          </a>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-shell grid gap-1 py-3">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-estate-mint hover:text-estate-green"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
