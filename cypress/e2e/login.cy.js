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
        cy.get(".social").should("exist"); 
        cy.get(".social a").should("have.length", 3); 

        cy.get(".social a").eq(0).click(); 
        cy.url().should("include", "twitter.com"); 
        cy.go("back");

        cy.get(".social a").eq(1).click(); 
        cy.url().should("include", "facebook.com"); 
        cy.go('back'); 

        cy.get(".social a").eq(2).click(); 
        cy.url().should("include", "linkedin.com"); 
        cy.go("back"); 
    });

    it("TC_4.4: Positive with valid data.", () => {
        cy.get('input[type="email"]').type(validEmail); 
        cy.get('input[type="password"]').type(validPassword); 

        cy.get(buttonLogin).click(); 

        cy.url().should("include", "/00efc23d-b605-4f31-b97b-6bb276de447e.html"); 
        cy.get("h1.display-3").should("contain.text", "Your Account"); 
    });

    it("TC_4.5: Negative with wrong email format", () => {
        cy.get('input[type="email"]').type(invalidEmail); 

        cy.get('input[type="password"]').type(validPassword); 

        cy.get(buttonLogin).click(); 

        cy.get(".invalid-feedback.invalid-email")
          .should("be.visible")
          .and("contain.text", "Please enter a valid email address.");
    });

    it("TC_4.6: Negative with empty email", () => {
        cy.get('input[type="password"]').type(validPassword); 

        cy.get(buttonLogin).click(); 

        cy.get(".invalid-feedback.invalid-email") 
          .should("be.visible") 
          .and("contain.text", "Please enter a valid email address."); 
    });

    it("TC_4.7: Negative with empty password", () => {
        cy.get('input[type="email"]').type(validEmail); 

        cy.get(buttonLogin).click(); 

        cy.get(".invalid-feedback.invalid-password") 
          .should("be.visible") 
          .and("contain.text", "Please enter a valid password."); 
    });

    it("TC_4.8: Negative with empty email and empty password", () => {
        cy.get(buttonLogin).click(); 

        cy.get(".invalid-feedback.invalid-email") 
          .should("be.visible") 
          .and("contain.text", "Please enter a valid email address."); 

        cy.get(".invalid-feedback.invalid-password") 
          .should("be.visible") 
          .and("contain.text", "Please enter a valid password."); 
    });
});
