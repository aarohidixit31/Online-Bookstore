// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',    // Indigo
        accent: '#F59E42',     // Gold/Amber
        surface: '#F7F4EF',    // Light Beige
        secondary: '#374151',  // Slate Gray
        // money :'#5f6876ff'
        tertiary: '#A3B18A',   // Olive Green
        error: '#DC2626',      // Rose
        success: '#4ADE80',    // Leaf Green
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
