/// <reference types="cypress" />

describe("SweetShop - Login Page", () => {
    const validEmail = "you@example.com";
    const validPassword = "0192837465";
    const invalidEmail = "testemail";

    beforeEach(() => {
        cy.visitLoginPage();
    });

    it('TC_4.1: Verify the page title is "Login"', () => {
        cy.get("h1.display-3").should("contain.text", "Login");
    });

    it("TC_4.2: Verify the page has a description.", () => {
        cy.get('p.lead').invoke('text').then((text) => {
            expect(text.trim()).to.match(/Please enter your email address\s+and password in order to login to your account\./);
        });
    });

    it('TC_4.3: Verify the page contains "email" and "password" input fields.', () => {
        // Step 1: Check for an input field labeled "Email address"
        cy.get('input[type="email"]').should('be.visible');
        cy.get('input[type="email"]').should('have.attr', 'placeholder', 'you@example.com');
        // Step 2: Check for an input field labeled "Password"
        cy.get('input[type="password"]').should('be.visible');
        // Step 3: Try clicking inside each field to ensure they are interactive
        cy.get('input[type="email"]').click(); 
        cy.get('input[type="email"]').should('have.focus'); 
        cy.get('input[type="password"]').click(); 
        cy.get('input[type="password"]').should('have.focus'); 
    });

    it('TC_4.4: Verify the page contains a "Login" button.', () => {
        // Step 1: Locate the "Login" button on the page
        cy.get('button[type="submit"]').should('be.visible'); 
        cy.get('button[type="submit"]').should('have.text', 'Login'); 
        // Step 2: Ensure the button is clickable
        cy.get('button[type="submit"]').should('not.be.disabled'); 
        cy.get('button[type="submit"]').click(); 
    });

    it("TC_4.5: Verify links to Twitter, Facebook, LinkedIn", () => {
        // Step 1: Look for social media icons for Twitter, Facebook, and LinkedIn
        cy.get('.social').should('exist'); 
        // Verify the presence of each social media link
        cy.get('.social a').should('have.length', 3); 

        // Step 2: Click on the Twitter link and verify it opens the correct page
        cy.get('.social a').eq(0).click(); 
        cy.url().should('include', 'twitter.com'); 
        cy.go('back'); // Navigate back to the Login page

        // Click on the Facebook link and verify it opens the correct page
        cy.get('.social a').eq(1).click(); 
        cy.url().should('include', 'facebook.com'); 
        cy.go('back'); 

        // Click on the LinkedIn link and verify it opens the correct page
        cy.get('.social a').eq(2).click(); 
        cy.url().should('include', 'linkedin.com'); 
        cy.go('back'); 
    });

    it("TC_4.6: Positive with valid data.", () => {
        // Step 1: Enter a valid email and password
        cy.get('input[type="email"]').type(validEmail); 
        cy.get('input[type="password"]').type(validPassword); 

        // Step 2: Click on the "Login" button
        cy.get('button[type="submit"]').click(); 

        // Step 3: Verify that the user is successfully logged in and redirected to the account page
        cy.url().should('include', '/00efc23d-b605-4f31-b97b-6bb276de447e.html'); 
        cy.get('h1.display-3').should('contain.text', 'Your Account'); 
    });

    it("TC_4.7: Negative with wrong email format", () => {
        // Step 1: Enter an incorrect email format in the Email address field
        cy.get('input[type="email"]').type(invalidEmail); 

        // Step 2: Enter a valid password in the Password field
        cy.get('input[type="password"]').type(validPassword); 

        // Step 3: Click the "Login" button
        cy.get('button[type="submit"]').click(); 

        // Step 4: Observe the error message displayed
        cy.get('.invalid-feedback.invalid-email')
          .should('be.visible')
          .and('contain.text', 'Please enter a valid email address.');
    });

    it('TC_4.8: Negative with empty email', () => {
        // Step 1: Leave the Email field empty
        // Step 2: Enter a valid password in the Password field
        cy.get('input[type="password"]').type(validPassword); 

        // Step 3: Click the "Login" button
        cy.get('button[type="submit"]').click(); 

        // Step 4: Observe the error message displayed
        cy.get('.invalid-feedback.invalid-email') 
          .should('be.visible') 
          .and('contain.text', 'Please enter a valid email address.'); 
    });

    it('TC_4.9: Negative with empty password', () => {
        // Step 1: Enter a valid email in the Email field
        cy.get('input[type="email"]').type(validEmail); 

        // Step 2: Leave the Password field empty
        // Step 3: Click the "Login" button
        cy.get('button[type="submit"]').click(); 

        // Step 4: Observe the error message displayed
        cy.get('.invalid-feedback.invalid-password') 
          .should('be.visible') 
          .and('contain.text', 'Please enter a valid password.'); 
    });

    it('TC_4.10: Negative with empty email and empty password', () => {
        // Step 1: Leave both the Email and Password fields empty
        // Step 2: Click the "Login" button
        cy.get('button[type="submit"]').click(); // Click the Login button

        // Step 3: Observe the error messages displayed
        cy.get('.invalid-feedback.invalid-email') 
          .should('be.visible') 
          .and('contain.text', 'Please enter a valid email address.'); 

        cy.get('.invalid-feedback.invalid-password') 
          .should('be.visible') 
          .and('contain.text', 'Please enter a valid password.'); 
    });
});
