import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				background: {
					50: '#B5B5B5',
					100: '#ACACAC',
					200: '#9A9A9A',
					300: '#888888',
					400: '#777777',
					500: '#656565',
					600: '#535353',
					700: '#414141',
					800: '#2F2F2F',
					900: '#1D1D1D',
					950: '#141414'
				},

				foreground: {
					50: '#A8A8A8',
					100: '#ADADAD',
					200: '#B8B8B8',
					300: '#BFBFBF',
					400: '#C9C9C9',
					500: '#D4D4D4',
					600: '#DEDEDE',
					700: '#E8E8E8',
					800: '#F0F0F0',
					900: '#FAFAFA',
					950: '#FFFFFF'
				}
			}
		}
	},

	plugins: [typography]
} as Config;
