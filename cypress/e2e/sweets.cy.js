/// <reference types="cypress" />

describe("Sweet Shop - Sweets Page", () => {
    beforeEach(() => {
        cy.visitSweetsPage();
    });

    it('TC_2.1: Verify the page title is "Browse Sweets".', () => {
        cy.verifyPageTitle("Browse sweets"); // Using the custom command
    });

    it("TC_2.2: Verify the list of available products is displayed.", () => {
        cy.verifySweetsList(); // Using the custom command
    });

    it("TC_2.3: Verify each product has a name, price, image, and 'Add to Basket' button.", () => {
        cy.verifySweetsList(); // Ensure products exist first

        cy.get(".col-lg-3").each(($product) => {
            cy.verifyProductDetails($product); // Check product details
            cy.addProductToBasket($product); // Click 'Add to Basket'
        });
    });
});
