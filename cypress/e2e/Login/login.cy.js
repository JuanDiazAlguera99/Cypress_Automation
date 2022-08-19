describe("Test login credentials", () => {
  beforeEach("must be in login page", () => {
    cy.visit("/");
  });
  it("should not login with invalid credentials and show promt of invalid user", () => {
    cy.login("standard_user", "secret_");
    cy.errorLoginPromt();
<<<<<<< HEAD
=======
  });
  it("should login with valid credentiales", () => {
    cy.login("standard_user", "secret_sauce");
    cy.verifyUrl("https://www.saucedemo.com/inventory.html");
>>>>>>> qa
  });
  it("should login with valid credentiales", () => {
    cy.login("standard_user", "secret_sauce");
    cy.verifyUrl("https://www.saucedemo.com/inventory.html");
 });
});