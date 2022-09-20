const shoppingCartButton = ".shopping_cart_link";
const filterButton = '[data-test="product_sort_container"]';
const invetoryItems = ".inventory_item";

Cypress.Commands.add("filterBy", (type, listName, text) => {
  cy.get(filterButton).select(listName);
  cy.get(invetoryItems)
    .eq(0)
    .within(() => {
      cy.validateText(`.inventory_item_${type}`, text);
    });
});
