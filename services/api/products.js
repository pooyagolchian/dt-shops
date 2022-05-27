/* eslint-disable camelcase */

export default (axios) => ({
  getAllActives(page, per_page) {
    return axios.get('/products', {
      params: {
        page,
        per_page,
      },
    })
  },
})


