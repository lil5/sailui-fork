const colors = require("tailwindcss/colors");

module.exports = {
	purge: [],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		colors: {
			primary: {
				light: colors.purple[300],
				DEFAULT: colors.purple[500],
				dark: colors.purple[800],
			},
			secondary: {
				light: colors.pink[300],
				DEFAULT: colors.pink[500],
				dark: colors.pink[800],
			},

			success: {
				light: colors.green[300],
				DEFAULT: colors.green[500],
				dark: colors.green[800],
			},
			info: {
				light: colors.blue[300],
				DEFAULT: colors.blue[500],
				dark: colors.blue[800],
			},
			warning: {
				light: colors.orange[300],
				DEFAULT: colors.orange[500],
				dark: colors.orange[800],
			},
			danger: {
				light: colors.red[300],
				DEFAULT: colors.red[500],
				dark: colors.red[800],
			},

			transparent: "transparent",
			white: colors.white,
			gray: colors.gray,
			black: colors.black,
		},
		boxShadow: {
			sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
			DEFAULT:
				"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
			md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
			inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
			none: "none",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
