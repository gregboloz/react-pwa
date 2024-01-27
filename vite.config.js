import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'vite.svg', 'react-h3aPdYU7.svg'],
      manifest: {
      name: 'React PWA',
      short_name: 'rpwa',
      description: 'Our Workshop',
      theme_color: '#ffffff',
      start_url: '/',
      icons: [
      {
      src: 'android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      },
      {
      src: 'android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      },
      {
      src: 'pwa-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any maskable',
      },
      {
      src: 'pwa-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable',
      },
      ],
      },
      })
  ]

})
