/// <reference types="cypress" />

describe('TC_7.1 Checkout Page Load', () => {
  beforeEach(() => {
    cy.visitSweetsPage();
  });

  it('TC_7.1.1 Verify the Checkout section is visible', () => {
    cy.addItemToBasket()

    // Step 2: Navigate to the Basket page
    cy.visitBasketPage();

    // Verify that the Billing address section is displayed
    cy.get('h4.mb-3').contains('Billing address').should('be.visible');

    // Verify that the Payment section is displayed
    cy.get('h4.mb-3').contains('Payment').should('be.visible');

    // Verify that the Your Basket summary is displayed
    cy.get('span.text-muted').contains('Your Basket').should('be.visible');

    // Verify that the "Continue to checkout" button is visible and enabled
    cy.get('button.btn-primary.btn-lg.btn-block')
      .should('be.visible')
      .and('be.enabled');
  });
});



