/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                palette: {
                    1: "#2F4858",
                    2: "#F58F84",
                    3: "#F4E285",
                    4: "#5B8E7D",
                    5: "#99c1b9",
                    6: "#fdf0d5",
                    7: "#FFDB21",
                    8: "#DD9E93",
                    9: "#bc4b51",
                    10: "#DD9E93",
                    11: "#FFFFFF",
                },
            },
            boxShadow: {
                bs: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
            },
            boxShadowHover: {
                bsh: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
            },
        },
    },
    plugins: [],
};
