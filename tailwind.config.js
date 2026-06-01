export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        estate: {
          navy: "#0e2a47",
          blue: "#1b76d1",
          green: "#0ea5e9",
          mint: "#e0f2fe",
          ink: "#162033",
          sky: "#0ea5e9",
        },
      },
      boxShadow: {
        premium: "0 18px 55px rgba(14, 42, 71, 0.13)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-estate":
          "linear-gradient(90deg, rgba(14,42,71,0.86), rgba(14,42,71,0.56), rgba(14,165,233,0.28)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85')",
      },
    },
  },
  plugins: [],
};
