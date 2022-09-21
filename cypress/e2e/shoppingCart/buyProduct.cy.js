describe("verify you can comple the buy process", () => {
  beforeEach("must be login in the page", () => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
    cy.verifyUrl("https://www.saucedemo.com/inventory.html");
  });
  it("will add a product to shopping cart and complete the process", () => {
    cy.addProductToCart(0);
    cy.goToShoppingCart();
    cy.validatenumberOfProducts(0);
    cy.buyProduct();
  });
  it("will add more than one product to shopping cart and complete the process", () => {
    cy.addProductsToCart(6);
    cy.goToShoppingCart();
    cy.validatenumberOfProducts(5);
    cy.buyProduct();
  });
});
