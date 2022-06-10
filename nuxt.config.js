import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  
  head: {
    //titleTemplate: '%s - nuxtjs-ccma',
    title: 'cloud cost management',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  router: {
    middleware: ['auth']
  },

  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey:"AIzaSyBy3CYsgCKMu08TViime8KP7eXEFZzMocE",
          authDomain:"cost4u-519e2.firebaseapp.com",
          projectId:"cost4u-519e2",
          storageBucket:"cost4u-519e2.appspot.com",
          messagingSenderId:"196904304776",
          appId:"1:196904304776:web:307d20336ef4f715b5df3d",
          measurementId:"G-J3DYTTS3JV"
        },
        services: {
          auth: {
            persistence: 'local',
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false,
          }
        }
      }
    ]
  ],
  axios: {},

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
  }
}
