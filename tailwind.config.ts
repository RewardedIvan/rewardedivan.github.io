import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				base: {
					100: '#050505',
					200: '#080808',
					300: '#0A0A0A',
					400: '#0D0D0D',
					500: '#0F0F0F',
					600: '#121212',
					700: '#141414',
					800: '#171717',
					900: '#1A1A1A'
				},

				primary: {
					100: '#13398C',
					200: '#143E99',
					300: '#1644A6',
					400: '#1849B3',
					500: '#1A4EBF',
					600: '#1B53CC',
					700: '#1D58D9',
					800: '#1F5EE6',
					900: '#2063F2'
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
