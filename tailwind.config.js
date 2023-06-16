/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-100": "#f5f5f5",
        white: "#fff",
        "neutral-600": "#525252",
        "neutral-200": "#e5e5e5",
        "neutral-400": "#a3a3a3",
        "blue-600": "#2563eb",
        "neutral-300": "#d4d4d4",
        "neutral-800": "#262626",
        "amber-200": "#fde68a",
        "amber-600": "#d97706",
        "blue-700": "#1d4ed8",
        "red-50": "#fef2f2",
        "red-400": "#f87171",
        "red-900": "#7f1d1d",
        black: "#000",
        "neutral-900": "#171717",
        "gray-900": "#111827",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "10xs": "3px",
        "12xs": "1px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      "3xl": "22px",
      lg: "18px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
