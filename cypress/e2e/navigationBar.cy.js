/// <reference types="cypress" />

describe('Pages load from main page correctly.', () => {
    beforeEach(() => {
        cy.visitMainPage();
    });

    it('TC_1.1 Should navigate to the "Sweets" page correctly', () => {
        cy.navigateToPage('Sweets', '/sweets', 'Browse sweets');
    });

    it('TC_1.2 Should navigate to the "About" page correctly', () => {
        cy.navigateToPage('About', '/about', 'Sweet Shop Project');
    });

    it('TC_1.3 Should navigate to the "Login" page correctly', () => {
        cy.navigateToPage('Login', '/login', 'Login');
    });

    it('TC_1.4 Should navigate to the "Basket" page correctly', () => {
        cy.navigateToPage('Basket', '/basket', 'Your Basket');
    });
});

describe('Pages load from "Sweets" page correctly.', () => {
    beforeEach(() => {
        cy.visitSweetsPage();
    });

    it('TC_1.5 Should navigate to the Main page correctly', () => {
        cy.navigateToMainPage();
    });

    it('TC_1.6 Should navigate to the "About" page correctly', () => {
        cy.navigateToPage('About', '/about', 'Sweet Shop Project');
    });

    it('TC_1.7 Should navigate to the "Login" page correctly', () => {
        cy.navigateToPage('Login', '/login', 'Login');
    });

    it('TC_1.8 Should navigate to the "Basket" page correctly', () => {
        cy.navigateToPage('Basket', '/basket', 'Your Basket');
    });
});

describe('Pages load from "About" page correctly.', () => {
    beforeEach(() => {
        cy.visitAboutPage();
    });

    it('TC_1.9 Should navigate to the Main page correctly', () => {
        cy.navigateToMainPage();
    });

    it('TC_1.10 Should navigate to the "Sweets" page correctly', () => {
        cy.navigateToPage('Sweets', '/sweets', 'Browse sweets');
    });

    it('TC_1.11 Should navigate to the "Login" page correctly', () => {
        cy.navigateToPage('Login', '/login', 'Login');
    });

    it('TC_1.12 Should navigate to the "Basket" page correctly', () => {
        cy.navigateToPage('Basket', '/basket', 'Your Basket');
    });
});

describe('Pages load from "Login" page correctly.', () => {
    beforeEach(() => {
        cy.visitLoginPage();
    });

    it('TC_1.13 Should navigate to the Main page correctly', () => {
        cy.navigateToMainPage();
    });

    it('TC_1.14 Should navigate to the "Sweets" page correctly', () => {
        cy.navigateToPage('Sweets', '/sweets', 'Browse sweets');
    });

    it('TC_1.15 Should navigate to the "About" page correctly', () => {
        cy.navigateToPage('About', '/about', 'Sweet Shop Project');
    });

    it('TC_1.16 Should navigate to the "Basket" page correctly', () => {
        cy.navigateToPage('Basket', '/basket', 'Your Basket');
    });
});

describe('Pages load from "Basket" page correctly.', () => {
    beforeEach(() => {
        cy.visitBasketPage();
    });

    it('TC_1.17 Should navigate to the Main page correctly', () => {
        cy.navigateToMainPage();
    });

    it('TC_1.18 Should navigate to the "Sweets" page correctly', () => {
        cy.navigateToPage('Sweets', '/sweets', 'Browse sweets');
    });

    it('TC_1.19 Should navigate to the "About" page correctly', () => {
        cy.navigateToPage('About', '/about', 'Sweet Shop Project');
    });

    it('TC_1.20 Should navigate to the "Login" page correctly', () => {
        cy.navigateToPage('Sweets', '/sweets', 'Browse sweets');
    });
});
