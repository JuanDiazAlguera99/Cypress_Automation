const username_field = '[data-test="username"]';
const password_field = '[data-test="password"]';
const login_button = '[data-test="login-button"]';
const error_login_text =
  "Epic sadface: Username and password do not match any user in this service";
const error_login_selector = '[data-test="error"]';
const new_url = "https://www.saucedemo.com/inventory.html";

Cypress.Commands.add("login", (username, password) => {
  cy.typeMessage(username_field, username);
  cy.typeMessage(password_field, password);
  cy.clickButton(login_button);
});

Cypress.Commands.add("errorLoginPromt", () => {
  cy.validateText(error_login_selector, error_login_text);
  cy.get(error_login_selector).should("be.visible");
});
