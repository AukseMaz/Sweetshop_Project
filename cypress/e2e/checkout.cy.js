describe('TC_7 Checkout Section', () => {
  const validEmail = "you@example.com";
  const invalidEmail = "testemail";
  const validFirstName = "John";
  const validLastName = "Doe";
  const validAddress = "1234 Main St";
  const validAddress2 = "Apt 101";
  const validCountry = "United Kingdom";
  const validCity = "Bristol";
  const validZip = "BS1 4ST";
  const validCardName = "John Doe";
  const validCardNumber = "4111111111111111";
  const validExpiration = "12/25";
  const validCVV = "123";
  const checkoutButton = 'button[type="submit"]';

  beforeEach(() => {
    cy.visitBasketPage();
  });

  it("TC_7.1 Verify the Checkout section is visible.", () => {
    cy.get("h4.mb-3").contains("Billing address").should("be.visible");
    cy.get("h4.mb-3").contains("Payment").should("be.visible");
    cy.get("span.text-muted").contains("Your Basket").should("be.visible");
    cy.get(checkoutButton).should("be.visible").and("be.enabled");
  });

  it("TC_7.2 Display all Billing address and Payment form input fields as visible and enabled.", () => {
    cy.get('input[id="name"]').first().should("be.visible").and("be.enabled");
    cy.get('input[id="name"]').last().should("be.visible").and("be.enabled");
    cy.get('input[id="email"]').should("be.visible").and("be.enabled");
    cy.get('input[id="address"]').should("be.visible").and("be.enabled");
    cy.get('input[id="address2"]').should("be.visible").and("be.enabled");
    cy.get('select[id="country"]').should("be.visible").and("be.enabled");
    cy.get('select[id="city"]').should("be.visible").and("be.enabled");
    cy.get('input[id="zip"]').should("be.visible").and("be.enabled");
    cy.get('input[id="cc-name"]').should("be.visible").and("be.enabled");
    cy.get('input[id="cc-number"]').should("be.visible").and("be.enabled");
    cy.get('input[id="cc-expiration"]').should("be.visible").and("be.enabled");
    cy.get('input[id="cc-cvv"]').should("be.visible").and("be.enabled");
  });  

  it("TC_7.3 Complete the checkout process with valid data.", () => {
    cy.fillCheckoutForm(validEmail, validFirstName, validLastName, validAddress, validAddress2, validCountry, validCity, validZip, validCardName, validCardNumber, validExpiration, validCVV);
    cy.get(checkoutButton).contains("Continue to checkout").click();
    cy.url().should("include", "/order-confirmation");
    cy.get(".order-summary").should("be.visible");
  });

  it("TC_7.4 Show errors when invalid data is entered.", () => {
    cy.fillCheckoutForm(invalidEmail, validFirstName, validLastName, validAddress, validAddress2, validCountry, validCity, validZip, validCardName, validCardNumber, validExpiration, validCVV);
    cy.get(checkoutButton).contains("Continue to checkout").click();
    cy.get(".invalid-feedback").contains("Please enter a valid email address for shipping updates.").should("be.visible");
    cy.url().should("eq", "https://sweetshop.netlify.app/basket");
  });

  it("TC_7.5 Show errors when no data is entered.", () => {
    cy.fillCheckoutForm(validEmail, validFirstName, validLastName, validAddress, validAddress2, validCountry, validCity, validZip, validCardName, validCardNumber, validExpiration, validCVV);

    cy.get("input#email").clear();
    cy.get(checkoutButton).contains("Continue to checkout").click();
    cy.get(".invalid-feedback").contains("Please enter a valid email address for shipping updates.").should("be.visible");
    cy.url().should("eq", "https://sweetshop.netlify.app/basket");
  });
});
