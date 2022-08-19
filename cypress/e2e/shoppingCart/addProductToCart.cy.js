describe("verify shopping cart its working correctly", () => {
  before("must be login in the page", () => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
    cy.verifyUrl("https://www.saucedemo.com/inventory.html");
  });

  it("will add a product to shopping cart", () => {
    cy.addProductToCart();
    cy.goToShoppingCart();
  });
});
