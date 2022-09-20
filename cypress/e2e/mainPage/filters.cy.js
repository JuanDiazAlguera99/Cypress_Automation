describe("filters work correctly", () => {
  before("login to main page", () => {
    cy.visit("/");
    cy.login("standard_user", "secret_sauce");
  });
  it("validates filter by name works correctly", () => {
    cy.filterBy("name", "az", "Sauce Labs Backpack");
    cy.filterBy("name", "za", "Test.allTheThings() T-Shirt (Red)");
  });
  it("validates filter by price work correctly", () => {
    cy.filterBy("price", "lohi", "$7.99");
    cy.filterBy("price", "hilo", "$49.99");
  });
});
