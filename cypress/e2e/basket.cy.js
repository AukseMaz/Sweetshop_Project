/// <reference types="cypress" />

describe("Basket Functionality - Adding Products", () => {
    const deliveryCollectFree = 'label[for="exampleRadios1"]';
    const deliveryStandardShipping = 'label[for="exampleRadios2"]';
    const basketItemPrice = "li.list-group-item strong";
    const itemDeleteLink = "a.small";
    const emptyTotal = "li.list-group-item.d-flex.justify-content-between";
    const basketCountBadge = "span.badge, span.badge-pill";
    const completeBasket = 'ul[id="basketItems"]';

    beforeEach(() => {
        cy.visitSweetsPage();
    });

    it("TC_6.1 Add random products to basket and verify count is updated", () => {
        cy.addRandomItemsToBasket(3, 7);

        cy.get("@selectedItemCount").then((selectedItemCount) => {
            cy.get(basketCountBadge).should("contain", selectedItemCount);
        });
    });

    it('TC_6.2 Add random products and select "Collect(FREE)" delivery.', () => {
        cy.addRandomItemsToBasket(2, 5);

        cy.visitBasketPage();
        cy.get(deliveryCollectFree).click();
        cy.get(completeBasket).should("be.visible");
    });

    it('TC_6.3 Add random products and select "Standard shipping (£1.99)".', () => {
        cy.addRandomItemsToBasket(3, 6);
        cy.visitBasketPage();

        let initialTotal;
        cy.get(basketItemPrice)
            .invoke("text")
            .then((text) => {
                initialTotal = parseFloat(text.replace("£", "").trim());
            });

        cy.get(deliveryStandardShipping).click();

        cy.get(basketItemPrice)
            .invoke("text")
            .then((newText) => {
                const finalTotal = parseFloat(newText.replace("£", "").trim());
                expect(finalTotal).to.equal(initialTotal + 1.99);
            });
    });

    it("TC_6.4 Remove an item from the basket and verify count is updated.", () => {
        cy.addRandomItemsToBasket(3, 5);
        cy.visitBasketPage();

        cy.get("@selectedItemCount").then((initialCount) => {
            cy.get(basketCountBadge).should("contain", initialCount);

            cy.get(itemDeleteLink).first().click();
            cy.on("window:confirm", () => true);

            cy.get(basketCountBadge)
                .invoke("text")
                .then((countText) => {
                    const count = parseInt(countText.trim());
                    cy.wrap(count).as("selectedItemCount");
                });
        });
    });

    it("TC_6.5 Empty basket and verify it is empty.", () => {
        cy.addRandomItemsToBasket(3, 5);
        cy.visitBasketPage();

        function deleteAllItems() {
            cy.get("body").then(($body) => {
                if ($body.find(itemDeleteLink).length > 0) {
                    cy.get(itemDeleteLink).first().click();
                    cy.on("window:confirm", () => true);
                    cy.wait(500);
                    cy.reload();
                    cy.wait(500);
                    deleteAllItems();
                }
            });
        }

        deleteAllItems();
        cy.get(".basketCount", { timeout: 10000 }).should("not.exist");
    });

    it('TC_6.6 Empty the basket with the "Empty Basket" link and verify it is empty.', () => {
        cy.addRandomItemsToBasket(3, 5);
        cy.visitBasketPage();

        cy.contains('a', 'Empty Basket').click();
        cy.on("window:confirm", () => true);

        cy.get(basketCountBadge).should("contain.text", "0");

        cy.get(emptyTotal).within(() => {
            cy.get("span").should("contain.text", "Total (GBP)");
            cy.get("strong").invoke("text").then((totalText) => {
                const total = totalText.replace("£", "").trim();
                expect(Number(total)).to.equal(0.00);
            });
        });
    });
});