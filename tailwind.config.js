/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0f1034",
                    secondary: "#004875",
                    accent: "#461538",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
            "dark",
            "cupcake",
        ],
    },
};
