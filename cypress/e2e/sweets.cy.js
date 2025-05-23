/// <reference types="cypress" />

describe("Sweet Shop - Sweets Page", () => {
    const productList = ".row.text-center";
    const availableProductList = ".col-lg-3";
    const productTitle = ".card-title";
    const productImage = ".card-img-top";
    const productPrice = "p small.text-muted";
    const addToBasketButton = "a.addItem";

    beforeEach(() => {
        cy.visitSweetsPage();
    });

    it('TC_2.1 Verify the page title is "Browse Sweets".', () => {
        cy.get("h1.display-3")
            .should("be.visible")
            .and("contain.text", "Browse sweets");
    });

    it("TC_2.2 Verify the list of available products is displayed.", () => {
        cy.get(productList).should("exist");

        cy.get(availableProductList).should("have.length.greaterThan", 0);
    });

    it('TC_2.3 Verify each product has a name, price, image and "Add to Basket" button.', () => {
        cy.get(productList).should("exist");
    
        cy.get(availableProductList).each(($product) => {
            cy.wrap($product).find(productTitle).should("exist");
    
            cy.wrap($product).find("p").should("exist");
            cy.wrap($product).find(productPrice)
                .should("exist")
                .and("contain.text", "£");
    
            cy.wrap($product).find(productImage)
                .should("have.attr", "src")
                .and("not.be.empty")
                .then(($img) => {
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                });
    
            cy.wrap($product).find(addToBasketButton).should("be.visible").and("contain.text", "Add to Basket");
            cy.wrap($product).find(addToBasketButton).click();
        });
    });
});
