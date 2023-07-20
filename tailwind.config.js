/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "light-orange": "#FFF2E1",
        "main-orange": "#F48C06",
        "navy-blue": "#2F327D",
        "aqua-blue": "#23BDEE",
        "gray-text": "#696984",
        "purple-icon": "#5B72EE",
        "yellow-type": "#F4C467",
        "purple-footer": "#252641"
      },
      backgroundImage: {
        "instructor": "url('./src/assets/instructor.png')",
        "student": "url('./src/assets/students.png')",
      }
    },
  },
  plugins: [],
}

