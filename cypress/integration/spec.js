/// <reference types="cypress" />

const { chromeWebSecurity } = Cypress.config()

describe('Show ISO-8859 characters correctly', () => {
  it(`With chromeWebSecurity ${chromeWebSecurity ? 'enabled' : 'disabled'}`, () => {
    cy.visit('http://localhost:8000/test.html')
    cy.contains('ñ', { timeout: 0 })
  })
})