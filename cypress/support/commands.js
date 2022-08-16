Cypress.Commands.add("validateText", (selector, text) => {
  cy.get(selector).should("have.text", text);
});

Cypress.Commands.add("clickButton", (selector) => {
  cy.get(selector).click();
});

Cypress.Commands.add("verifyUrl", (url) => {
  cy.url().should("eq", url);
});

Cypress.Commands.add("shouldBeVisible", (selector) => {
  cy.get(selector).should("be.visible");
});

Cypress.Commands.add("shouldNotExit", (selector) => {
  cy.get(selector).should("not.exist");
});

Cypress.Commands.add("typeMessage", (selector, message) => {
  cy.get(selector).clear().type(message);
});
