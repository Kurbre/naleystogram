/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/widgets/**/*.{js,ts,jsx,tsx}',
		'./src/features/**/*.{js,ts,jsx,tsx}',
		'./src/entities/**/*.{js,ts,jsx,tsx}',
		'./src/shared/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)', 'sans-serif'],
				kanit: ['var(--font-kanit)', 'sans-serif']
			},
			colors: {
				brand: {
					blue: '#0089DE'
				}
			}
		}
	},
	plugins: []
}
