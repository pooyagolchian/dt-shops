import api from '~/services'

export default (context , inject)  =>{
  context.$axios.setBaseURL(`${context.$config.backendUrl}`)
  // $websiteApi
  inject('api', api(context))
}
