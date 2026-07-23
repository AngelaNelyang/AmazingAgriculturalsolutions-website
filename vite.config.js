import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
 base: '/AmazingAgriculturalsolutions-website/',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        testimonials: resolve(__dirname, 'testimonials.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
