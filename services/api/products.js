/* eslint-disable camelcase */

export default (axios) => ({
  getProducts(page, per_page, filters) {
    return axios.get('/api/products', {
      params: {
        ...filters,
        page,
        per_page,
      },
    })
  },
  getProductsById(id) {
    return axios.get(`/api/products/${id}`)
  },
})
