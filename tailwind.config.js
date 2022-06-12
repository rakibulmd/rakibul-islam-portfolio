module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            boxShadow: {
                "3xl": "rgba(5, 150, 105, 0.3) 0px 10px 38px, rgba(5, 150, 105, 0.2) 0px 15px 12px",
            },
        },
    },
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
        ],
    },
    plugins: [require("daisyui")],
};
