"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}' // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        // Black background
        foreground: '#ffffff' // White text

      }
    }
  },
  plugins: []
};
//# sourceMappingURL=tailwind.config.dev.js.map
