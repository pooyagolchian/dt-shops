/* eslint-disable camelcase */

export default (axios) => ({
  getCountries(page, per_page) {
    return axios.get('/api/countries', {
      params: {
        page,
        per_page,
      },
    })
  },
  getOperators(page, per_page) {
    return axios.get('/api/operators', {
      params: {
        page,
        per_page,
      },
    })
  },
})
