/// <reference types="cypress" />

describe('TS_7 Checkout Process', () => {
    context('TC_7.1 Checkout Page Load', () => {
      beforeEach(() => {
        cy.visitSweetsPage();
      });
  
      it('TC_7.1.1 Verify the checkout page is accessible', () => {
        cy.get(".col-lg-3").each(($product) => {
            cy.verifyProductDetails($product); // Check product details
            cy.addProductToBasket($product); // Click 'Add to Basket'
        });
  
        // Navigate to the Basket page
        cy.navigateToPage('Basket', '/basket', 'Your Basket');
  
        // Click on the "Continue to checkout" button
        cy.contains('Continue to checkout').click();
  
        // Verify that the user is redirected to the Checkout page
        cy.url().should('include', '/checkout');
  
        // Verify the presence of the billing address form
        cy.get('form#billing-address').should('be.visible');
  
        // Verify the presence of the payment section
        cy.get('section#payment').should('be.visible');
  
        // Verify the presence of the order summary
        cy.get('section#order-summary').should('be.visible');
      });
    });
  });
  