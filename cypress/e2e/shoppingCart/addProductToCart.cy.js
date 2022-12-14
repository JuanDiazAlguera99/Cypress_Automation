describe("verify shopping cart its working correctly", () => {
  beforeEach("must be login in the page", () => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
    cy.verifyUrl("https://www.saucedemo.com/inventory.html");
  });
  it("will add a product to shopping cart", () => {
    cy.addProductToCart(0);
    cy.goToShoppingCart();
    cy.validatenumberOfProducts(0);
  });
  it("will add all products to shopping cart", () => {
    cy.addProductsToCart(6);
    cy.goToShoppingCart();
    cy.validatenumberOfProducts(5);
  });
});
