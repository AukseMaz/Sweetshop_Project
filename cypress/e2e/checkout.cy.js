/// <reference types="cypress" />

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

  beforeEach(() => {
    cy.visitBasketPage();
  });

  it('TC_7.1 Verify the Checkout section is visible', () => {
    // Verify that the Billing address form is displayed
    cy.get('h4.mb-3').contains('Billing address').should('be.visible');

    // Verify that the Payment form is displayed
    cy.get('h4.mb-3').contains('Payment').should('be.visible');

    // Verify that the Your Basket summary is displayed
    cy.get('span.text-muted').contains('Your Basket').should('be.visible');

    // Verify that the "Continue to checkout" button is visible and enabled
    cy.get('button.btn-primary.btn-lg.btn-block')
      .should('be.visible')
      .and('be.enabled');
  });

  it('TC_7.2 Display all Billing address and Payment form input fields as visible and enabled', () => {
    // Verify First name input field
    cy.get('input#name').first().should('be.visible').and('be.enabled');

    // Verify Last name input field
    cy.get('input#name').last().should('be.visible').and('be.enabled');

    // Verify Email input field
    cy.get('input#email').should('be.visible').and('be.enabled');

    // Verify Address input field
    cy.get('input#address').should('be.visible').and('be.enabled');

    // Verify Address 2 input field (optional)
    cy.get('input#address2').should('be.visible').and('be.enabled');

    // Verify Country select field
    cy.get('select#country').should('be.visible').and('be.enabled');

    // Verify City select field
    cy.get('select#city').should('be.visible').and('be.enabled');

    // Verify Zip input field
    cy.get('input#zip').should('be.visible').and('be.enabled');

    // Verify Name on card input field
    cy.get('input#cc-name').should('be.visible').and('be.enabled');

    // Verify Credit card number input field
    cy.get('input#cc-number').should('be.visible').and('be.enabled');

    // Verify Expiration input field
    cy.get('input#cc-expiration').should('be.visible').and('be.enabled');

    // Verify CVV input field
    cy.get('input#cc-cvv').should('be.visible').and('be.enabled');
  });

  it('TC_7.3 Complete the checkout process with valid data', () => {
    
    // Fill in the Billing Address form
    cy.get('input#name').first().clear().type(validFirstName); 
    cy.get('input#name').last().clear().type(validLastName); 
    cy.get('input#email').clear().type(validEmail); 
    cy.get('input#address').clear().type(validAddress); 
    cy.get('input#address2').clear().type(validAddress2); 
    cy.get('select#country').select(validCountry); 
    cy.get('select#city').select(validCity); 
    cy.get('input#zip').clear().type(validZip); 

    // Fill in the Payment form
    cy.get('input#cc-name').clear().type(validCardName); 
    cy.get('input#cc-number').clear().type(validCardNumber); 
    cy.get('input#cc-expiration').clear().type(validExpiration); 
    cy.get('input#cc-cvv').clear().type(validCVV); 

    // Click the "Continue to checkout" button
    cy.get('button[type="submit"]').contains('Continue to checkout').click();

    // Verify that the user is taken to the next page (order confirmation/payment processing)
    // Assuming the next page contains an element that indicates successful navigation.
    cy.url().should('include', '/order-confirmation'); // Update with the correct URL or element if needed
    cy.get('.order-summary').should('be.visible'); // Example of a successful order page element
  });

  it('TC_7.4 Show errors when invalid data is entered', () => {
    // Fill in the Billing Address form with invalid data (invalid email)
    cy.get('input#name').first().clear().type(validFirstName); 
    cy.get('input#name').last().clear().type(validLastName); 
    cy.get('input#email').clear().type(invalidEmail); 
    cy.get('input#address').clear().type(validAddress); 
    cy.get('input#address2').clear().type(validAddress2); 
    cy.get('select#country').select(validCountry); 
    cy.get('select#city').select(validCity); 
    cy.get('input#zip').clear().type(validZip); 

    // Fill in the Payment form
    cy.get('input#cc-name').clear().type(validCardName); 
    cy.get('input#cc-number').clear().type(validCardNumber); 
    cy.get('input#cc-expiration').clear().type(validExpiration); 
    cy.get('input#cc-cvv').clear().type(validCVV); 

    // Click the "Continue to checkout" button
    cy.get('button[type="submit"]').contains('Continue to checkout').click();

    // Verify error messages for invalid email
    cy.get('.invalid-feedback').contains('Please enter a valid email address for shipping updates.').should('be.visible');
    
    // Verify that the user has not been redirected to the order confirmation page
    cy.url().should('eq', 'https://sweetshop.netlify.app/basket'); 
  });

  it('TC_7.5 Show errors when no data is entered', () => {
    // Fill in the Billing Address form with empty email address
    cy.get('input#name').first().clear().type(validFirstName); 
    cy.get('input#name').last().clear().type(validLastName); 
    cy.get('input#email').clear(); 
    cy.get('input#address').clear().type(validAddress); 
    cy.get('input#address2').clear().type(validAddress2); 
    cy.get('select#country').select(validCountry); 
    cy.get('select#city').select(validCity); 
    cy.get('input#zip').clear().type(validZip); 

    // Fill in the Payment form
    cy.get('input#cc-name').clear().type(validCardName); 
    cy.get('input#cc-number').clear().type(validCardNumber); 
    cy.get('input#cc-expiration').clear().type(validExpiration); 
    cy.get('input#cc-cvv').clear().type(validCVV); 

    // Click the "Continue to checkout" button
    cy.get('button[type="submit"]').contains('Continue to checkout').click();

    // Verify error messages for empty email field
    cy.get('.invalid-feedback').contains('Please enter a valid email address for shipping updates.').should('be.visible');
    
    // Verify that the user has not been redirected to the order confirmation page
    cy.url().should('eq', 'https://sweetshop.netlify.app/basket'); 
  });
});




