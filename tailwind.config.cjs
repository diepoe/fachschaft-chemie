const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				flask: "url('/src/lib/assets/img/flask-line.svg')",
				reagenzglas: "url('/src/lib/assets/img/reagenzglas.png')",
				wissenschaftler: "url('/src/lib/assets/img/emoji_chemiker.png')"
			},
			fontFamily: {
				sligoil: ["'Sligoil Micro'", ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: []
};
