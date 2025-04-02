/// <reference types="cypress" />

describe("Sweet Shop - Sweets Page", () => {
    const productList = ".row.text-center";
    const availableProductList = ".col-lg-3";
    const productPrice = "p small.text-muted";

    beforeEach(() => {
        cy.visitSweetsPage();
    });

    it('TC_2.1 Verify the page title is "Browse Sweets".', () => {
        cy.get("h1.display-3")
            .should("be.visible")
            .and("contain.text", "Browse sweets");
    });

    it("TC_2.2 Verify the list of available products is displayed.", () => {
        // Verify that a list of products is displayed on the page
        cy.get(productList).should("exist");

        // Check that multiple products are listed (not an empty page)
        cy.get(availableProductList).should("have.length.greaterThan", 0);

        // Verify specific product details (like names or images)
        cy.get(availableProductList).each(($el) => {
            cy.wrap($el).find(".card-title").should("exist"); 
            cy.wrap($el).find(".card-img-top").should("have.attr", "src").and("not.be.empty"); 
        });
    });

    it('TC_2.3 Verify each product has a name, price, image and "Add to Basket" button.', () => {
        // Verify that a list of products is displayed on the page
        cy.get(productList).should("exist");

        // For each displayed product, verify that it contains:
        cy.get(availableProductList).each(($product) => {
            // Check for product name
            cy.wrap($product).find(".card-title").should("exist");

            // Check for product price
            cy.wrap($product).find("p").should("exist");
            cy.wrap($product).find(productPrice)
                .should("exist")
                .and("contain.text", "£");

            // Iterate over each product
            cy.get(availableProductList).each(($product) => {
                // Check for product image
                cy.wrap($product).find(".card-img-top")
                    .should("have.attr", "src")
                    .and("not.be.empty")
                    .then(($img) => {
                        // Ensure the image has loaded successfully
                        expect($img[0].naturalWidth).to.be.greaterThan(0);
                    });
            });

            // Check for "Add to Basket" button
            cy.wrap($product).find("a.addItem").should("be.visible").and("contain.text", "Add to Basket");
            cy.wrap($product).find("a.addItem").click();
        });
    });
});
