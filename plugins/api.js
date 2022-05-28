import api from '~/services'

export default (context, inject) => {
  context.$axios.defaults.headers.common = {
    Accept: 'application/json, text/plain, */*',
  }

  context.$axios.onRequest((config) => {
    config.auth = {
      username: `${context.$config.apiKey}`,
      password: `${context.$config.apiSecret}`,
    }
  })

  // $api - inject $api to project
  inject('api', api(context))
}
