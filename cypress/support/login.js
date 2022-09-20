const usernameField = '[data-test="username"]';
const passwordField = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';
const errorLoginText =
  "Epic sadface: Username and password do not match any user in this service";
const errorLoginSelector = '[data-test="error"]';
const mainUrl = "https://www.saucedemo.com/inventory.html";

Cypress.Commands.add("login", (username, password) => {
  cy.typeMessage(usernameField, username);
  cy.typeMessage(passwordField, password);
  cy.clickButton(loginButton);
});

Cypress.Commands.add("errorLoginPromt", () => {
  cy.validateText(errorLoginSelector, errorLoginText);
  cy.get(errorLoginSelector).should("be.visible");
});
