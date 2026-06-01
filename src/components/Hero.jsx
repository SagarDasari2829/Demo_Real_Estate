import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const heroTaglines = [
  {
    text: "तुमच्या स्वप्नांसाठी, आमची साथ.",
    lang: "mr",
    glow: "0 0 24px rgba(244, 214, 146, 0.2)",
  },
  
];

function PremiumHeroTagline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTagline = heroTaglines[activeIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroTaglines.length);
    }, 2800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="mt-7 max-w-3xl">
      <motion.div
        className="group relative overflow-hidden rounded-[22px] p-px"
        animate={{ y: [0, -5, 0] }}
        whileHover={{ y: -7, scale: 1.01 }}
        transition={{
          y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.35, ease: "easeOut" },
        }}
      >
        <div className="absolute inset-0 rounded-[22px] bg-gradient-to-r from-white/18 via-[#d7b56d]/45 to-white/12 opacity-70 transition duration-500 group-hover:opacity-95" />
        <div className="relative overflow-hidden rounded-[21px] bg-[#07111f]/30 px-4 py-5 shadow-[0_14px_42px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-500 group-hover:bg-[#07111f]/38 sm:px-6 sm:py-6 lg:px-7">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.025] to-[#d7b56d]/[0.07]" />
          <div className="pointer-events-none absolute -inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
          <div
            aria-live="polite"
            className="relative flex min-h-[5.4rem] items-center text-[clamp(1.45rem,4.3vw,3.15rem)] font-extrabold leading-tight text-white sm:min-h-[6.2rem] lg:min-h-[6.8rem]"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={activeTagline.text}
                lang={activeTagline.lang}
                className="m-0 max-w-full font-['Noto_Sans_Devanagari','Mukta','Hind',sans-serif]"
                initial={{ opacity: 0, y: 20, filter: "blur(14px)" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  textShadow: activeTagline.glow,
                }}
                exit={{ opacity: 0, y: -18, filter: "blur(14px)" }}
                transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              >
                {activeTagline.text}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d7b56d]/45 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center bg-hero-estate bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-estate-navy/10" />
      <div className="section-shell relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-4xl animate-[fadeIn_0.8s_ease-out]">
          <p className="mb-5 inline-flex rounded-md bg-white/12 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100 backdrop-blur">
            Real estate discovery portal
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Discover plots and projects by category, taluka, and village.
          </h1>
          <PremiumHeroTagline />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
            Yesh Developer helps customers explore open plots, bungalows, agricultural land
            development, and construction services with clear project details and fast contact
            options.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#categories" className="primary-button">
              Explore Categories
            </a>
            <a href="#contact" className="secondary-button">
              Contact Business
            </a>
          </div>
        </div>

        <div className="mt-14 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            ["4", "Business categories"],
            ["7", "Talukas covered"],
            ["Fast", "WhatsApp and call support"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-md border border-white/18 bg-white/12 p-5 text-white backdrop-blur">
              <p className="text-3xl font-extrabold">{value}</p>
              <p className="mt-1 text-sm text-slate-100">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
