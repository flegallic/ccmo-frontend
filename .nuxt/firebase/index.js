import createApp from './app.js'

import authService from './service.auth.js'

const appConfig = {"apiKey":"AIzaSyBy3CYsgCKMu08TViime8KP7eXEFZzMocE","authDomain":"cost4u-519e2.firebaseapp.com","projectId":"cost4u-519e2","storageBucket":"cost4u-519e2.appspot.com","messagingSenderId":"196904304776","appId":"1:196904304776:web:307d20336ef4f715b5df3d","measurementId":"G-J3DYTTS3JV"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}