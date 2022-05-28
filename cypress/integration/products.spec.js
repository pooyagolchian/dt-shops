import { mockedProductsEndpoint } from '../mock/api'

describe('DT SHPOS E2E testing', () => {
  it('should render all products and all element', () => {
    mockedProductsEndpoint()
    cy.visit('/')
    cy.location('pathname').should('eq', '/')
  })
})
