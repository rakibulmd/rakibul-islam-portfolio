/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "3xl": "rgba(16, 185, 129, .3) 0px 10px 38px, rgba(16, 185, 129, .2) 0px 15px 12px;",
            },
        },
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
