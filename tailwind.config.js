/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // === VOLCANIC AURORA PALETTE ===
        bg:        "#08070F",          // near-black deep space
        primary:   "#FF5C00",          // flame orange
        secondary: "#00E8C8",          // electric teal
        accent:    "#FFD200",          // neon gold
        glow:      "#FF5C00",

        "bg-light": "#F5F0EB",
        "card-dark": "rgba(14,12,26,0.85)",
        "card-light": "rgba(255,255,255,0.85)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter:   ["Inter", "sans-serif"],
      },
      animation: {
        "spin-slow":   "spin 8s linear infinite",
        float:         "float 6s ease-in-out infinite",
        "float-slow":  "float 9s ease-in-out infinite",
        "gradient-x":  "gradient-x 8s ease infinite",
        blob:          "blob 12s infinite",
        glow:          "glowPulse 2.5s ease-in-out infinite alternate",
        "fade-in":     "fadeIn 0.8s ease-out forwards",
        shimmer:       "shimmer 2.2s infinite",
        "pulse-slow":  "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-22px)" },
        },
        "gradient-x": {
          "0%,100%": { "background-size": "200% 200%", "background-position": "left center" },
          "50%":     { "background-size": "200% 200%", "background-position": "right center" },
        },
        blob: {
          "0%":   { transform: "translate(0px,0px) scale(1)" },
          "33%":  { transform: "translate(40px,-60px) scale(1.15)" },
          "66%":  { transform: "translate(-30px,25px) scale(0.88)" },
          "100%": { transform: "translate(0px,0px) scale(1)" },
        },
        glowPulse: {
          from: { "box-shadow": "0 0 12px rgba(255,92,0,0.5)" },
          to:   { "box-shadow": "0 0 40px rgba(255,92,0,0.9), 0 0 80px rgba(0,232,200,0.4)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" },
        },
      },
      backdropBlur: { xs: "2px" },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
