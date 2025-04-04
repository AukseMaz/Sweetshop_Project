/// <reference types="cypress" />

describe("SweetShop - Login Page", () => {
    const paragraphDescription = "p.lead";
    const validEmail = "you@example.com";
    const validPassword = "0192837465";
    const invalidEmail = "testemail";
    const buttonLogin = 'button[type="submit"]';

    beforeEach(() => {
        cy.visitLoginPage();
    });

    it('TC_4.1: Verify the page title is "Login"', () => {
        cy.get("h1.display-3").should("contain.text", "Login");
    });

    it("TC_4.2: Verify the page has a description.", () => {
        cy.get(paragraphDescription).invoke("text").then((text) => {
            expect(text.trim()).to.match(/Please enter your email address\s+and password in order to login to your account\./);
        });
    });

    it("TC_4.3: Verify links to Twitter, Facebook, LinkedIn", () => {
        // Step 1: Look for social media icons for Twitter, Facebook, and LinkedIn
        cy.get(".social").should("exist"); 
        // Verify the presence of each social media link
        cy.get(".social a").should("have.length", 3); 

        // Step 2: Click on the Twitter link and verify it opens the correct page
        cy.get(".social a").eq(0).click(); 
        cy.url().should("include", "twitter.com"); 
        cy.go("back");

        // Click on the Facebook link and verify it opens the correct page
        cy.get(".social a").eq(1).click(); 
        cy.url().should("include", "facebook.com"); 
        cy.go('back'); 

        // Click on the LinkedIn link and verify it opens the correct page
        cy.get(".social a").eq(2).click(); 
        cy.url().should("include", "linkedin.com"); 
        cy.go("back"); 
    });

    it("TC_4.4: Positive with valid data.", () => {
        // Enter a valid email and password
        cy.get('input[type="email"]').type(validEmail); 
        cy.get('input[type="password"]').type(validPassword); 

        // Click on the "Login" button
        cy.get(buttonLogin).click(); 

        // Verify that the user is successfully logged in and redirected to the account page
        cy.url().should("include", "/00efc23d-b605-4f31-b97b-6bb276de447e.html"); 
        cy.get("h1.display-3").should("contain.text", "Your Account"); 
    });

    it("TC_4.5: Negative with wrong email format", () => {
        // Enter an incorrect email format in the Email address field
        cy.get('input[type="email"]').type(invalidEmail); 

        // Enter a valid password in the Password field
        cy.get('input[type="password"]').type(validPassword); 

        // Click the "Login" button
        cy.get(buttonLogin).click(); 

        // Observe the error message displayed
        cy.get(".invalid-feedback.invalid-email")
          .should("be.visible")
          .and("contain.text", "Please enter a valid email address.");
    });

    it("TC_4.6: Negative with empty email", () => {
        // Leave the Email field empty
        // Enter a valid password in the Password field
        cy.get('input[type="password"]').type(validPassword); 

        // Click the "Login" button
        cy.get(buttonLogin).click(); 

        // Observe the error message displayed
        cy.get(".invalid-feedback.invalid-email") 
          .should("be.visible") 
          .and("contain.text", "Please enter a valid email address."); 
    });

    it("TC_4.7: Negative with empty password", () => {
        // Enter a valid email in the Email field
        cy.get('input[type="email"]').type(validEmail); 

        // Leave the Password field empty
        // Click the "Login" button
        cy.get(buttonLogin).click(); 

        // Observe the error message displayed
        cy.get(".invalid-feedback.invalid-password") 
          .should("be.visible") 
          .and("contain.text", "Please enter a valid password."); 
    });

    it("TC_4.8: Negative with empty email and empty password", () => {
        // Leave both the Email and Password fields empty
        // Click the "Login" button
        cy.get(buttonLogin).click(); 

        // Observe the error messages displayed
        cy.get(".invalid-feedback.invalid-email") 
          .should("be.visible") 
          .and("contain.text", "Please enter a valid email address."); 

        cy.get(".invalid-feedback.invalid-password") 
          .should("be.visible") 
          .and("contain.text", "Please enter a valid password."); 
    });
});
