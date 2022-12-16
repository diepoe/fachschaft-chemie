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
				cmu: ["'CMU Serif'", ...defaultTheme.fontFamily.serif],
				sligoil: ["'Sligoil Micro'", ...defaultTheme.fontFamily.mono]
			},
			gridTemplateColumns: {
				13: 'repeat(13, minmax(0, 1fr))',
				26: 'repeat(26, minmax(0, 1fr))'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
