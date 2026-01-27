/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include all paths that contain NativeWind classes
  content: [
    "./App.tsx",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/navigation/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
