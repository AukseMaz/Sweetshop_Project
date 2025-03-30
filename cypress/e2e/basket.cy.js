/// <reference types="cypress" />

describe("Basket Functionality - Adding Products", () => {
    beforeEach(() => {
        cy.visitSweetsPage();
    });

    it("TC_6.1: Add products to basket and verify the basket count is updated", () => {
        cy.getBasketCount().then((initialCount) => {
            cy.addProductToBasket(0); // Add first product
            cy.get("span.badge.badge-success").should("contain.text", (initialCount + 1).toString());

            cy.addProductToBasket(1); // Add second product
            cy.get("span.badge.badge-success").should("contain.text", (initialCount + 2).toString());
        });
    });

    it('TC_6.2: Add products to basket with delivery "Collect (FREE)"', () => {
        cy.addProductToBasket();
        cy.visitBasketPage();

        cy.verifyBasketProduct("Chocolate Cups", 1, 1.00); // Verify product details
        cy.selectDeliveryMethod("collect");
        cy.verifyTotalPrice(1.00); // Total should remain £1.00
    });

    it('TC_6.3: Add products to basket with delivery "Standard Shipping (£1.99)"', () => {
        cy.addProductToBasket();
        cy.visitBasketPage();

        cy.verifyBasketProduct("Chocolate Cups", 1, 1.00);
        cy.selectDeliveryMethod("shipping");
        cy.verifyTotalPrice(2.99); // £1.00 product + £1.99 shipping
    });

    it('TC_6.4: Remove item from basket with delivery "Collect (FREE)" and verify the basket count is updated', () => {
        cy.addProductToBasket();
        cy.visitBasketPage();

        cy.selectDeliveryMethod("collect");
        cy.removeProductFromBasket();
        cy.get("span.badge.badge-success").should("contain.text", "0");
        cy.verifyTotalPrice(0.00);
    });

    it('TC_6.5: Remove item from basket with delivery "Standard Shipping(£1.99)" and verify the basket count is updated', () => {
        cy.addProductToBasket();
        cy.visitBasketPage();

        cy.selectDeliveryMethod("shipping");
        cy.removeProductFromBasket();
        cy.get("span.badge.badge-success").should("contain.text", "0");
        cy.verifyTotalPrice(1.99); // Shipping charge still applies
    });

    it('TC_6.6: Empty basket with delivery "Collect (FREE)" and verify the basket count resets', () => {
        cy.addProductToBasket();
        cy.visitBasketPage();

        cy.selectDeliveryMethod("collect");
        cy.emptyBasket();
        cy.get("span.badge.badge-success").should("contain.text", "0");
        cy.verifyTotalPrice(0.00);
    });

    it('TC_6.7: Empty basket with delivery "Standard Shipping (£1.99)" and verify the basket is empty.', () => {
        cy.addProductToBasket();
        cy.visitBasketPage();

        cy.selectDeliveryMethod("shipping");
        cy.emptyBasket();
        cy.get("span.badge.badge-success").should("contain.text", "0");
        cy.verifyTotalPrice(1.99); // Shipping charge still applies
    });
});
