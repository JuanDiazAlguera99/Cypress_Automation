const add_to_cart_button = ".btn_inventory";
const shopping_cart_button = ".shopping_cart_link";
const chekout_button = '[data-test="checkout"]';
const first_name_field = '[data-test="firstName"]';
const last_name_field = '[data-test="lastName"]';
const postal_code_field = '[data-test="postalCode"]';
const continue_button = '[data-test="continue"]';
const inventory_item_name = ".inventory_item_name";
const finish_button = '[data-test="finish"]';
const finish_tittle = ".title";
const back_home_button = '[data-test="back-to-products"]';

Cypress.Commands.add("addProductToCart", (number) => {
  cy.get(add_to_cart_button).eq(number).click();
  cy.scrollTo(1000, 0);
});

Cypress.Commands.add("goToShoppingCart", () => {
  cy.clickButton(shopping_cart_button);
  cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");
});

Cypress.Commands.add("buyProduct", () => {
  cy.clickButton(chekout_button);
  cy.typeMessage(first_name_field, "juan");
  cy.typeMessage(last_name_field, "diaz");
  cy.typeMessage(postal_code_field, "1305");
  cy.clickButton(continue_button);
  cy.validateText(inventory_item_name, "Sauce Labs Backpack");
  cy.clickButton(finish_button);
  cy.validateText(finish_tittle, "Checkout: Complete!");
  cy.clickButton(back_home_button);
});
