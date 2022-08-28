import { defineNuxtConfig } from 'nuxt'
import postcssPresetEnv from 'postcss-preset-env'
import postcssEasingGradients from 'postcss-easing-gradients'
import * as SITE_INFO from './content/site/info.json'
import { COLOR_MODE_FALLBACK } from './utils/globals.js'

export default defineNuxtConfig({
  target: 'static',
  generate: {
    fallback: true
  },
  // ? The env/runtimeConfig Property: https://v3.nuxtjs.org/guide/features/runtime-config/
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      url:
        process.env.NODE_ENV === 'production'
          ? process.env.URL || 'http://createADotEnvFileAndSetURL'
          : 'http://localhost:3000',
      lang: SITE_INFO.sitelang || 'en-US'
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: SITE_INFO.sitename || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: SITE_INFO.sitedescription || process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
        media: 'print',
        onload: `this.media='all'`
      }
    ], // ? Imports the font 'Inter', can be optimized by the netlify plugin 'Subfont' by uncommenting it in `netlify.toml`
    noscript: [
      {
        innerHTML:
          '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">'
      }
    ],
    __dangerouslyDisableSanitizers: ['noscript']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#526488' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.pcss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'nuxt-svgo' ], // No Nuxt 3 support yet: '@nuxtjs/pwa', '@nuxtjs/svg', 'nuxt-purgecss',
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-preset-env': postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': false
          }
        }),
        'postcss-easing-gradients': postcssEasingGradients
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Custom additions configuration
   */
  // ? The content property: https://content.nuxtjs.org/configuration
  content: {
    dir: 'content'
  },
  tailwindcss: {
    viewer: true,
    cssPath: '~/assets/css/main.pcss',
    exposeConfig: false // enables `import { theme } from '#tailwind.config'`
  },
  // purgeCSS: { // Disabled because of no current Nuxt 3 support
  //   mode: 'postcss',
  //   // ? Safelisting docs: https://purgecss.com/safelisting.html
  //   safelist: {
  //     // standard: [],
  //     deep: [/dark/, /light/, /btn/, /icon/, /main/],
  //     greedy: [
  //       /^card/,
  //       /image$/,
  //       /title$/,
  //       /^nuxt-content/,
  //       /code/,
  //       /pre/,
  //       /token/,
  //       /^content-placeholders/
  //     ]
  //   }
  // },
  colorMode: {
    classSuffix: '',
    preference: 'system', // default value of $colorMode.preference
    fallback: COLOR_MODE_FALLBACK, // fallback value if not system preference found
    componentName: 'ColorScheme',
    cookie: {
      options: {
        sameSite: 'lax'
      }
    }
  },
  // pwa: { // Disabled because of no current Nuxt 3 support
  //   icon: {
  //     source: 'public/icon.png',
  //     filename: 'icon.png'
  //   },
  //   manifest: { name: SITE_INFO.sitename || process.env.npm_package_name || '', lang: process.env.lang },
  //   meta: {
  //     name: SITE_INFO.sitename || process.env.npm_package_name || '',
  //     lang: process.env.lang,
  //     ogHost: process.env.URL,
  //     ogImage: '/preview.jpg'
  //   }
  // }
});
