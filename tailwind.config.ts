import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050609",
        ink: "#0A0D12",
        plasma: "#58F6FF",
        aurora: "#B6FF68",
        comet: "#C7D2FE",
        graphite: "#A7B0C0"
      },
      boxShadow: {
        glow: "0 0 80px rgba(88, 246, 255, 0.18)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.14), 0 24px 80px rgba(0,0,0,0.38)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 50% 0%, rgba(88,246,255,0.18), transparent 34%), radial-gradient(circle at 85% 12%, rgba(182,255,104,0.14), transparent 24%), linear-gradient(180deg, #050609 0%, #080A10 44%, #050609 100%)"
      },
      animation: {
        shimmer: "shimmer 7s linear infinite",
        float: "float 8s ease-in-out infinite",
        orbit: "orbit 22s linear infinite"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" }
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
