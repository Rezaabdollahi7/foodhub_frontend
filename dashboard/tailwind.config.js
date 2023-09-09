/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "move-right": {
                    from: { transform: "translateX(-100%)" },
                    to: { transform: "translateX(0%)" },
                },
                "move-left": {
                    from: { transform: "translateX(0%)" },
                    to: { transform: "translateX(-100%)" },
                },
                "opacity-0": {
                    from: { opacity: "100%" },
                    to: { opacity: "0%" },
                },
                "opacity-100": {
                    from: { opacity: "0%" },
                    to: { opacity: "100%" },
                },
            },
            animation: {
                "opacity-0": "opacity-0 0.3s ease-in-out forwards",
                "opacity-100": "opacity-100 0.3s ease-in-out forwards",
                "move-left": "move-left 0.3s ease-in-out forwards",
                "move-right": "move-right 0.3s ease-in-out forwards",
            },
            fontFamily: {
                title: ["Staatliches"],
            },
        },
    },
    plugins: [],
}
