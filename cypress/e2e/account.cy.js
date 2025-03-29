/// <reference types="cypress" />

describe('Sweet Shop - Your Account', () => {
    const url = 'https://sweetshop.netlify.app/00efc23d-b605-4f31-b97b-6bb276de447e.html';
  
    beforeEach(() => {
        cy.visit(url); 
    });

    it('TC_5.1: Positive login, verify user info is displayed.', () => {
        // Step 1: Verify the user’s name displayed
        cy.get('p.lead') // Select the paragraph element containing the welcome message
          .should('be.visible') // Ensure the paragraph is visible
          .and('contain.text', 'Welcome back test@user.com'); // Verify that it contains the expected text
    });
  });