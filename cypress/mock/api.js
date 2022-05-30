export const mockedProductsEndpoint = () => {
  cy.intercept(
    {
      method: 'GET',
      url: 'https://preprod-dvs-api.dtone.com/v1/products?page=1&per_page=100',
    },
    { fixture: '../fixtures/products.json' }
  )
}
