/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C5EAD",
        secondary: "#1591DC",
        accent: "#4BB8FA",
        "light-bg": "#C4E2F5",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "system-ui", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-16px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 20px rgba(75,184,250,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(75,184,250,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
