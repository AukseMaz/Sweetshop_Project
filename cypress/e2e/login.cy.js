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
        cy.get("p.lead").invoke("text").then((text) => {
            expect(text.trim()).to.match(/Please enter your email address\s+and password in order to login to your account\./);
        });
    });

    it('TC_4.3: Verify the page contains "email" and "password" input fields.', () => {
        cy.get('input[type="email"]').should("be.visible").and("have.attr", "placeholder", "you@example.com");
        cy.get('input[type="password"]').should("be.visible");

        // Check fields are clickable
        cy.get('input[type="email"]').click().should("have.focus");
        cy.get('input[type="password"]').click().should("have.focus");
    });

    it('TC_4.4: Verify the page contains a "Login" button.', () => {
        cy.get('button[type="submit"]').should("be.visible").and("have.text", "Login").and("not.be.disabled");
        cy.clickLogin();
    });

    it("TC_4.5: Verify links to Twitter, Facebook, LinkedIn", () => {
        cy.get(".social a").should("have.length", 3);

        // Click and verify each social media link
        const socialMedia = ["twitter.com", "facebook.com", "linkedin.com"];
        cy.get(".social a").each(($el, index) => {
            cy.wrap($el).click();
            cy.url().should("include", socialMedia[index]);
            cy.go("back");
        });
    });

    it("TC_4.6: Positive with valid data.", () => {
        cy.fillLoginForm(validEmail, validPassword);
        cy.clickLogin();
        cy.verifySuccessfulLogin();
    });

    it("TC_4.7: Negative with wrong email format", () => {
        cy.fillLoginForm(invalidEmail, validPassword);
        cy.clickLogin();
        cy.verifyLoginError("email", "Please enter a valid email address.");
    });

    it("TC_4.8: Negative with empty email", () => {
        cy.fillLoginForm("", validPassword);
        cy.clickLogin();
        cy.verifyLoginError("email", "Please enter a valid email address.");
    });

    it("TC_4.9: Negative with empty password", () => {
        cy.fillLoginForm(validEmail, "");
        cy.clickLogin();
        cy.verifyLoginError("password", "Please enter a valid password.");
    });

    it("TC_4.10: Negative with empty email and empty password", () => {
        cy.fillLoginForm("", "");
        cy.clickLogin();
        cy.verifyLoginError("email", "Please enter a valid email address.");
        cy.verifyLoginError("password", "Please enter a valid password.");
    });
});
