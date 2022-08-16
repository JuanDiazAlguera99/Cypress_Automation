const username_field = '[data-test="username"]'
const password_field = '[data-test="password"]'
const login_button = '[data-test="login-button"]'

Cypress.Commands.add('login', (username, password) => {
    cy.get(username_field).type(username)
    cy.get(password_field).type(password)
    cy.get(login_button).click()
})