/// <reference types="cypress" />
it('Show ISO-8859 characters correctly', () => {
	cy.visit('http://localhost:8000/test.html')
	cy.contains('ñ', { timeout: 0 })
})