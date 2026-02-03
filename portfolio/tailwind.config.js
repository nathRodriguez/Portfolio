/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: '#18122B', // Deep purple
                secondary: '#393053', // Muted purple
                accent: '#FF6B6B', // Vibrant coral
                highlight: '#4ADEDE', // Bright cyan
                section: '#232946', // Section background
            },
        },
    },
    plugins: [],
};
