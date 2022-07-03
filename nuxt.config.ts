import { defineNuxtConfig } from 'nuxt'
import * as path from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  srcDir: 'src/',
  buildModules: [
    '@pinia/nuxt'
  ],
  alias: {
    '@': path.resolve(__dirname, './src')
  }
})
