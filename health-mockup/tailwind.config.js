/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }, colors: {
        firefly: '#0E1831', // Replace with the actual color you want for "firefly"
        'chetwode-blue': '#7C8EDE', // Replace with the actual color you want for "chetwode-blue"
      },
      boxShadow: {
        'inner': 'inset 0 0 0 20px rgba(var(--foreground-rgb), 0.05)',
      }
    },
  },
  plugins: [],
};
