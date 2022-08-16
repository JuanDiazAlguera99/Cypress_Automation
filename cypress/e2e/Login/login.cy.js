describe("login credentials", () => {
  beforeEach("must be in login page", () => {
    cy.visit("/");
  });
  it("should not login with invalid credentials", () => {
    cy.login("standard_user", "secret_sauce");
  });
});
