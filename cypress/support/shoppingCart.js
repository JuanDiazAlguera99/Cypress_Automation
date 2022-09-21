const addToCartButton = ".btn_inventory";
const shoppingCartButton = ".shopping_cart_link";
const chekoutButton = '[data-test="checkout"]';
const firstNameField = '[data-test="firstName"]';
const lastNameField = '[data-test="lastName"]';
const postalCodeField = '[data-test="postalCode"]';
const continueButton = '[data-test="continue"]';
const inventoryItemName = ".inventory_item_name";
const finishButton = '[data-test="finish"]';
const finishTittle = ".title";
const backHomeButton = '[data-test="back-to-products"]';
const shoppingCartItem = ".cart_item";

Cypress.Commands.add("addProductToCart", (number) => {
  cy.get(addToCartButton).eq(number).click();
  cy.scrollTo(1000, 0);
});

Cypress.Commands.add("addProductsToCart", (numberOfProdcuts) => {
  for (let i = 0; i < numberOfProdcuts; i++) {
    cy.get(addToCartButton).eq(i).click();
    cy.scrollTo(1000, 0);
  }
});

Cypress.Commands.add("validatenumberOfProducts", (numberOfProdcuts) => {
  cy.get(shoppingCartItem).eq(numberOfProdcuts);
});

Cypress.Commands.add("goToShoppingCart", () => {
  cy.clickButton(shoppingCartButton);
  cy.get('[data-test="remove-sauce-labs-backpack"]').should("be.visible");
});

Cypress.Commands.add("buyProduct", () => {
  cy.clickButton(chekoutButton);
  cy.typeMessage(firstNameField, "juan");
  cy.typeMessage(lastNameField, "diaz");
  cy.typeMessage(postalCodeField, "1305");
  cy.clickButton(continueButton);
  //cy.validateText(inventoryItemName, "Sauce Labs Backpack");
  cy.clickButton(finishButton);
  cy.validateText(finishTittle, "Checkout: Complete!");
  cy.clickButton(backHomeButton);
});
