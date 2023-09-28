export const applyButtonTheme = (theme) => {
    var buttonTheme = {
        bg: "",
        bgOnHover: "",
        color: "",
        fontSize: "",
        className: ""
    }

    if (theme) {
        const firstChar = String(theme).charAt(0);
        const secondChar = String(theme).charAt(1);
        const thirdChar = String(theme).charAt(2);

        if (firstChar) {
            if (firstChar === "0") {
                buttonTheme = {
                    ...buttonTheme,
                    bg: "var(--bg-green-8)",
                    bgOnHover: "var(--bg-green-10)"
                }
            } else if (firstChar === "1") {
                buttonTheme = {
                    ...buttonTheme,
                    bg: "var(--bg-red-1)",
                    bgOnHover: "var(--bg-red-1)",
                    color: "var(--bg-red-10)",
                }
            }
        }

        if (secondChar) {
            if (secondChar === "0") {
                buttonTheme = {
                    ...buttonTheme,
                    fontSize: "10px"
                }
            } else if (secondChar === "1") {
                buttonTheme = {
                    ...buttonTheme,
                    fontSize: "18px"
                }
            }
        }

        if (thirdChar) {
            if (thirdChar === "0") {
                buttonTheme = {
                    ...buttonTheme,
                    className: "mobile-button-full-width"
                }
            }
        }
    }

    return buttonTheme;
} 