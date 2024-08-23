import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
	site: 'https://tic-tac-launch.perezpujantealejandro.dev',
	integrations: [
		vue({ devtools: true }),
		tailwind({ applyBaseStyles: false, configFile: 'tailwind.config.ts' }),
		sitemap(),
		compress()
	],
	vite: {
		plugins: [icons({ compiler: 'vue3' })]
	}
})
