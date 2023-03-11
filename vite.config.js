import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  plugins: [sveltekit()],
  // allows vite access to ./posts
  define: {
		'process.env.NODE_ENV': '"production"',
	},
  server: {
    fs: {
      allow: ['./']
    }
  }
})
