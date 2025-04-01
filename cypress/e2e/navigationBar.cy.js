/// <reference types="cypress" />

describe('Pages load from main page correctly.', () => {
    beforeEach(() => {
        cy.visitMainPage();
    });

    it('TC_1.1 Should navigate to the "Sweets" page correctly', () => {
            // Click on the "Sweets" navigation link
            cy.get('.collapse.navbar-collapse').contains('Sweets').click();
            // Verify the new URL contains "sweets"
            cy.url().should('include', '/sweets');
            // Verify the Sweets Page heading or content is available
            cy.get('h1.display-3').should('contain.text', 'Browse sweets');
        });

    it('TC_1.2 Should navigate to the "About" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('About').click();
        cy.url().should('include', '/about');
        cy.get('h1.display-3').should('contain.text', 'Sweet Shop Project');
    });

    it('TC_1.3 Should navigate to the "Login" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Login').click();
        cy.url().should('include', '/login');
        cy.get('h1.display-3').should('contain.text', 'Login');
    });

    it('TC_1.4 Should navigate to the "Basket" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Basket').click();
        cy.url().should('include', '/basket');
        cy.get('h1.display-3').should('contain.text', 'Your Basket');
    });
});

describe('Pages load from "Sweets" page correctly.', () => {
    beforeEach(() => {
        cy.visitSweetsPage();
    });

    it('TC_1.5 Should navigate to the Main page correctly', () => {
        cy.get('a.navbar-brand').click();
        cy.url().should('include', '/');
        cy.get('h1.display-3').should('contain.text', 'Welcome to the sweet shop!');
    });

    it('TC_1.6 Should navigate to the "About" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('About').click();
        cy.url().should('include', '/about');
        cy.get('h1.display-3').should('contain.text', 'Sweet Shop Project');
    });

    it('TC_1.7 Should navigate to the "Login" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Login').click();
        cy.url().should('include', '/login');
        cy.get('h1.display-3').should('contain.text', 'Login');
    });

    it('TC_1.8 Should navigate to the "Basket" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Basket').click();
        cy.url().should('include', '/basket');
        cy.get('h1.display-3').should('contain.text', 'Your Basket');
    });
});

describe('Pages load from "About" page correctly.', () => {
    beforeEach(() => {
        cy.visitAboutPage();
    });

    it('TC_1.9 Should navigate to the Main page correctly', () => {
        cy.get('a.navbar-brand').click();
        cy.url().should('include', '/');
        cy.get('h1.display-3').should('contain.text', 'Welcome to the sweet shop!');
    });

    it('TC_1.10 Should navigate to the "Sweets" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Sweets').click();
        cy.url().should('include', '/sweets');
        cy.get('h1.display-3').should('contain.text', 'Browse sweets');
    });

    it('TC_1.11 Should navigate to the "Login" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Login').click();
        cy.url().should('include', '/login');
        cy.get('h1.display-3').should('contain.text', 'Login');
    });

    it('TC_1.12 Should navigate to the "Basket" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Basket').click();
        cy.url().should('include', '/basket');
        cy.get('h1.display-3').should('contain.text', 'Your Basket');
    });
});

describe('Pages load from "Login" page correctly.', () => {
    beforeEach(() => {
        cy.visitLoginPage();
    });

    it('TC_1.13 Should navigate to the Main page correctly', () => {
        cy.get('a.navbar-brand').click();
        cy.url().should('include', '/');
        cy.get('h1.display-3').should('contain.text', 'Welcome to the sweet shop!');
    });

    it('TC_1.14 Should navigate to the "Sweets" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Sweets').click();
        cy.url().should('include', '/sweets');
        cy.get('h1.display-3').should('contain.text', 'Browse sweets');
    });

    it('TC_1.15 Should navigate to the "About" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('About').click();
        cy.url().should('include', '/about');
        cy.get('h1.display-3').should('contain.text', 'Sweet Shop Project');
    });

    it('TC_1.16 Should navigate to the "Basket" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Basket').click();
        cy.url().should('include', '/basket');
        cy.get('h1.display-3').should('contain.text', 'Your Basket');
    });
});

describe('Pages load from "Basket" page correctly.', () => {
    beforeEach(() => {
        cy.visitBasketPage();
    });

    it('TC_1.17 Should navigate to the Main page correctly', () => {
        cy.get('a.navbar-brand').click();
        cy.url().should('include', '/');
        cy.get('h1.display-3').should('contain.text', 'Welcome to the sweet shop!');
    });

    it('TC_1.18 Should navigate to the "Sweets" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Sweets').click();
        cy.url().should('include', '/sweets');
        cy.get('h1.display-3').should('contain.text', 'Browse sweets');
    });

    it('TC_1.19 Should navigate to the "About" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('About').click();
        cy.url().should('include', '/about');
        cy.get('h1.display-3').should('contain.text', 'Sweet Shop Project');
    });

    it('TC_1.20 Should navigate to the "Login" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Login').click();
        cy.url().should('include', '/login');
        cy.get('h1.display-3').should('contain.text', 'Login');
    });
    
    it('TC_1.21 Verify that the logo icon is visible', () => {
        // Step 1: Check if the logo image exists
        cy.get('img[src="favicon.png"]') // Select the image based on its src attribute
          .should('exist') // Assert that the image exists in the DOM
          .and('be.visible');
    });
});
