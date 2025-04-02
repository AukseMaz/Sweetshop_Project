/// <reference types="cypress" />

describe('Sweet Shop - Your Account', () => {
  const positiveLogin = "p.lead";
    const url = "https://sweetshop.netlify.app/00efc23d-b605-4f31-b97b-6bb276de447e.html";
    beforeEach(() => {
        cy.visit(url); 
    });

    it('TC_5.1: Positive login, verify user info is displayed.', () => {
     
        cy.get(positiveLogin) 
          .should("be.visible") 
          .and("contain.text", "Welcome back test@user.com"); 
    });
  });