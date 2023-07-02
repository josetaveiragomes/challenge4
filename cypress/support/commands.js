Cypress.Commands.add('example', (seedData = 'fixture:example') => {
  cy.server()
  cy.route('GET', '/api/todos', seedData)
  cy.visit('/')
})
