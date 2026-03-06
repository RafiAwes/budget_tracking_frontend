/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        card: "#1E293B",
        border: "#334155",
        sky: "#38BDF8",
        teal: "#2DD4BF",
        muted: "#64748B",
        "text-primary": "#E2E8F0",
        danger: "#F87171",
        success: "#34D399",
        violet: "#818CF8",
        pink: "#F472B6",
        orange: "#FB923C",
        yellow: "#FBBF24",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      borderRadius: {
        card: "16px",
      },
      backgroundImage: {
        "gradient-sky-teal": "linear-gradient(90deg, #38BDF8, #2DD4BF)",
        "gradient-card": "linear-gradient(135deg, #1E293B 0%, #162032 60%, #0d1e35 100%)",
      },
    },

  },
  plugins: [],
}

export default config;
