module.exports = {
    content: [
        './**/*.html',
        './**/*.tsx',
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            colors: {
                "gray1": "#52525B",
                "gray2": "#A1A1AA",
                "gray3": "#D4D4D8",
                "gray4": "#E4E4E7",
                "gray5": "#F4F4F5",
                "gray6": "#FAFAFA",
                "black": "#18181B",
                "blue": "#0026ff",
            },
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            color: "#0026ff",
                            fontWeight: 400,
                            textUnderlineOffset: 6,
                            textDecorationThickness: 1,
                        }
                    }
                }
            }
        }
    },
    variants: {},
    plugins: [
        require("@tailwindcss/typography"),
    ],
}
