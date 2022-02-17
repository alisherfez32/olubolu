// import axios from 'axios'

// let dynamicRoutes = async () => {
//   const res = await axios.get('https://api.airtable.com/v0/app3WmB2b7AQQ6Ufv/Batches?api_key=keyvkxyqdCw2v2FEK');
//   return res.data.records.map(product => `/products/${product.fields.pageName}`);
// }

module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Olubolu • #1 in Used Clothes Wholesale. Check the PRICE LISTS for 100KG bales',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Olubolu • #1 in Used Clothes Wholesale. Check the PRICE LISTS for 100KG bales' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6173104639712614",
        crossorigin: "anonymous"  }
    ]
  },
  loading: {
    color: 'blue'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/moment',
    '~plugins/firebaseinit.js',
    '~plugins/spinner'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/color-mode',
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faHeart', 'faClock', 'faUserCircle', 'faYenSign', 'faPlus', 'faMinus', 'faDollarSign',
        'faCoffee', 'faEnvelope', 'faLock', 'faUser', 'faUserPlus', 'faEye', 'faCartPlus', 'faGlobe',
        'faSearch', 'faThumbtack', 'faBuilding', 'faTimes', 'faBinoculars', 'faAngleDown', 'faAngleUp',
        'faFileAlt', 'faHourglassHalf', 'faHourglassEnd', 'faMoon', 'faSun'],
      brands: ['faYoutube', 'faInstagram', 'faGithub', 'faTelegram', 'faFacebook', 'faWhatsapp', 'faWeixin', 'faLinkedin'],
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  target: 'static',
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
