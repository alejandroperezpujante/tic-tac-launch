import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
	content: ['./src/**/*.{astro,html,js,ts,vue}'],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			screens: {
				'high-dpi': {
					raw: 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-resolution: 2dppx)'
				}
			},
			colors: {
				background: 'oklch(var(--background) / <alpha-value>)',
				foreground: 'oklch(var(--foreground) / <alpha-value>)',
				border: 'oklch(var(--border) / <alpha-value>)',
				card: {
					DEFAULT: 'oklch(var(--card) / <alpha-value>)',
					foreground: 'oklch(var(--card-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
					foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
				}
			},
			fontFamily: {
				headline: ['Tiny5', ...fontFamily.sans]
			}
		}
	},
	plugins: []
}

export default config
