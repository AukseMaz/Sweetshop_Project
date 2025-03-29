/// <reference types="cypress" />

describe('TC_1.1 Verify that "Sweets" page loads from main page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/')
    });

    it('Should navigate to the "Sweets" page correctly', () => {
        // Click on the "Sweets" navigation link
        cy.get('.collapse.navbar-collapse').contains('Sweets').click();
        // Verify the new URL contains "sweets"
        cy.url().should('include', '/sweets');
        // Verify the Sweets Page heading or content is available
        cy.get('h1.display-3').should('contain.text', 'Browse sweets');
    });
});

describe('TC_1.2 Verify that "About" page loads from main page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/')
    });

    it('Should navigate to the "About" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('About').click();
        cy.url().should('include', '/about');
        cy.get('h1.display-3').should('contain.text', 'Sweet Shop Project');
    });
});

describe('TC_1.3 Verify that "Login" page loads from main page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/')
    });

    it('Should navigate to the "Login" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Login').click();
        cy.url().should('include', '/login');
        cy.get('h1.display-3').should('contain.text', 'Login');
    });
});

describe('TC_1.4 Verify that "Basket" page loads from main page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/')
    });

    it('Should navigate to the "Basket" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Basket').click();
        cy.url().should('include', '/basket');
        cy.get('h1.display-3').should('contain.text', 'Your Basket');
    });
});

describe('TC_1.5 Verify that Main page loads from "Sweets" page correctly.', () => {
    beforeEach(() => {
        // Visit the Sweets page before each test
        cy.visit('https://sweetshop.netlify.app/sweets');
    });

    it('Should navigate to the Main page correctly', () => {
        // Step 1: Click on the Sweet Shop logo or Home link in the navigation bar
        cy.get('a.navbar-brand').click();
        // Step 2: Verify that the main page (homepage) loads successfully
        cy.url().should('include', '/');
        // Step 3: Verify that the main page is loaded correctly
        cy.get('h1.display-3').should('contain.text', 'Welcome to the sweet shop!');
    });
});

describe('TC_1.6 Verify that "About" page loads from "Sweets" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/sweets');
    });

    it('Should navigate to the "About" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('About').click();
        cy.url().should('include', '/about');
        cy.get('h1.display-3').should('contain.text', 'Sweet Shop Project');
    });
});

describe('TC_1.7 Verify that "Login" page loads from "Sweets" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/sweets');
    });

    it('Should navigate to the "Login" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Login').click();
        cy.url().should('include', '/login');
        cy.get('h1.display-3').should('contain.text', 'Login');
    });
});

describe('TC_1.8 Verify that "Basket" page loads from "Sweets" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/sweets');
    });

    it('Should navigate to the "Basket" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Basket').click();
        cy.url().should('include', '/basket');
        cy.get('h1.display-3').should('contain.text', 'Your Basket');
    });
});

describe('TC_1.9 Verify that main page loads from "About" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/about');
    });

    it('Should navigate to the Main page correctly', () => {
        // Step 1: Click on the Sweet Shop logo or Home link in the navigation bar
        cy.get('a.navbar-brand').click();
        // Step 2: Verify that the main page (homepage) loads successfully
        cy.url().should('include', '/');
        // Step 3: Verify that the main page is loaded correctly
        cy.get('h1.display-3').should('contain.text', 'Welcome to the sweet shop!');
    });
});

describe('TC_1.10 Verify that "Sweets" page loads from "About" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/about');
    });

    it('Should navigate to the "Sweets" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Sweets').click();
        cy.url().should('include', '/sweets');
        cy.get('h1.display-3').should('contain.text', 'Browse sweets');
    });
});

describe('TC_1.11 Verify that "Login" page loads from "About" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/about');
    });

    it('Should navigate to the "Login" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Login').click();
        cy.url().should('include', '/login');
        cy.get('h1.display-3').should('contain.text', 'Login');
    });
});

describe('TC_1.12 Verify that "Basket" page loads from "About" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/about');
    });

    it('Should navigate to the "Basket" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Basket').click();
        cy.url().should('include', '/basket');
        cy.get('h1.display-3').should('contain.text', 'Your Basket');
    });
});

describe('TC_1.13 Verify that main page loads from "Login" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/login');
    });

    it('Should navigate to the Main page correctly', () => {
        // Step 1: Click on the Sweet Shop logo or Home link in the navigation bar
        cy.get('a.navbar-brand').click();
        // Step 2: Verify that the main page (homepage) loads successfully
        cy.url().should('include', '/');
        // Step 3: Verify that the main page is loaded correctly
        cy.get('h1.display-3').should('contain.text', 'Welcome to the sweet shop!');
    });
});

describe('TC_1.14 Verify that "Sweets" page loads from "Login" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/login');
    });

    it('Should navigate to the "Sweets" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Sweets').click();
        cy.url().should('include', '/sweets');
        cy.get('h1.display-3').should('contain.text', 'Browse sweets');
    });
});

describe('TC_1.15 Verify that "About" page loads from "Login" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/login');
    });

    it('Should navigate to the "About" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('About').click();
        cy.url().should('include', '/about');
        cy.get('h1.display-3').should('contain.text', 'Sweet Shop Project');
    });
});

describe('TC_1.16 Verify that "Basket" page loads from "Login" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/login');
    });

    it('Should navigate to the "Basket" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Basket').click();
        cy.url().should('include', '/basket');
        cy.get('h1.display-3').should('contain.text', 'Your Basket');
    });
});

describe('TC_1.17 Verify that main page loads from "Basket" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/basket');
    });

    it('Should navigate to the Main page correctly', () => {
        // Step 1: Click on the Sweet Shop logo or Home link in the navigation bar
        cy.get('a.navbar-brand').click();
        // Step 2: Verify that the main page (homepage) loads successfully
        cy.url().should('include', '/');
        // Step 3: Verify that the main page is loaded correctly
        cy.get('h1.display-3').should('contain.text', 'Welcome to the sweet shop!');
    });
});

describe('TC_1.18 Verify that "Sweets" page loads from "Basket" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/basket');
    });

    it('Should navigate to the "Sweets" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Sweets').click();
        cy.url().should('include', '/sweets');
        cy.get('h1.display-3').should('contain.text', 'Browse sweets');
    });
});

describe('TC_1.19 Verify that "About" page loads from "Basket" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/basket');
    });

    it('Should navigate to the "About" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('About').click();
        cy.url().should('include', '/about');
        cy.get('h1.display-3').should('contain.text', 'Sweet Shop Project');
    });
});

describe('TC_1.20 Verify that "Login" page loads from "Basket" page correctly.', () => {
    beforeEach(() => {
        cy.visit('https://sweetshop.netlify.app/basket');
    });

    it('Should navigate to the "Login" page correctly', () => {
        cy.get('.collapse.navbar-collapse').contains('Login').click();
        cy.url().should('include', '/login');
        cy.get('h1.display-3').should('contain.text', 'Login');
    });
});