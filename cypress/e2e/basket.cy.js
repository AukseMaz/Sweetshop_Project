/// <reference types="cypress" />

describe("Basket Functionality - Adding Products", () => {
    const deliveryCollectFree = 'label.custom-control-label[for="exampleRadios1"]';
    const deliveryStandardShipping = 'label.custom-control-label[for="exampleRadios2"]';
    const basketCountElement = "span.badge.badge-success";
    const addedItemDetails = "li.list-group-item";
    const basketTotalItem = "li.list-group-item.d-flex.justify-content-between";

    beforeEach(() => {
        cy.visitSweetsPage();
    });

    it("TC_6.1: Add products to basket and verify the basket count is updated.", () => {
        // Ensure the basket count element exists
        cy.get(basketCountElement, { timeout: 10000 }).should("exist");

        // Get initial basket count
        cy.get(basketCountElement)
            .invoke("text")
            .then((initialCount) => {
                const initial = parseInt(initialCount) || 0; 

                // Click the first "Add to Basket" button
                cy.get("a.btn.addItem").first().click();

                // Verify the basket count increases by 1
                cy.get(basketCountElement).should("contain.text", (initial + 1).toString());

                // Click another "Add to Basket" button
                cy.get("a.btn.addItem").eq(1).click();

                // Verify the basket count updates again
                cy.get(basketCountElement).should("contain.text", (initial + 2).toString());
            });
    });

    it('TC_6.2: Add products to basket with delivery "Collect (FREE)".', () => {

        cy.addItemToBasket();
        cy.visitBasketPage();

        // Verify the added product details
        cy.get(addedItemDetails).first().within(() => {
            cy.get("h6.my-0").should("contain.text", "Chocolate Cups");
            cy.get("small.text-muted").should("contain.text", "x 1");
            cy.get("span.text-muted").should("contain.text", "£1.00");
        });

        // Select the "Collect (FREE)" option
        cy.get(deliveryCollectFree).click();

        // Verify the total price remains unchanged
        cy.get('.total-price, strong, .cart-total').invoke('text').then((totalText) => {
            const total = parseFloat(totalText.replace(/[^\d.]/g, '')); // Extract numeric value
            expect(total).to.equal(1.00); 
        });
    });

    it('TC_6.3: Add products to basket with delivery "Standard Shipping (£1.99)".', () => {
        
        cy.addItemToBasket();
        cy.visitBasketPage();

        // Verify the added product details
        cy.get(addedItemDetails).should('exist');

        cy.get(addedItemDetails).first().within(() => {
            cy.get('h6.my-0').should('contain.text', 'Chocolate Cups');
            cy.get('small.text-muted').should('contain.text', 'x 1');
            cy.get('span.text-muted').should('contain.text', '£1.00');
        });

        // Select the "Standard Shipping (£1.99)" option
        cy.get(deliveryStandardShipping).click();

        // Verify that the shipping cost of £1.99 is correctly added to the total
        cy.get(basketTotalItem).contains('Total (GBP)').parent().find('strong').invoke('text').then((totalText) => {
            const total = totalText.replace('£', '').trim(); 
            const expectedTotal = 1.00 + 1.99; 
            expect(Number(total)).to.equal(expectedTotal); 
        });
    });

    it('TC_6.4: Remove item from basket with delivery "Collect (FREE)" and verify the basket count is updated.', () => {
      
        cy.addItemToBasket();
        cy.visitBasketPage();
        cy.get(deliveryCollectFree).click();

        // Click the Delete item button
        cy.get(addedItemDetails).first().within(() => {
            cy.get('a.small').contains('Delete Item').click(); 
        });

        // Observe the basket count in the navigation bar
        cy.get(basketCountElement).should('be.visible'); 

        // Verify that the count decreases by 1
        cy.get(basketCountElement).invoke('text').then((text) => {
            const updatedCount = parseInt(text); 
            expect(updatedCount).to.equal(0); 
        });

        // Verify that the total price is updated correctly
        cy.get(basketTotalItem).within(() => {
            cy.get('span').should('contain.text', 'Total (GBP)'); 
            cy.get('strong').invoke('text').then((totalText) => {
                const total = totalText.replace('£', '').trim(); 
                expect(Number(total)).to.equal(0.00); 
            });
        });
    });

    it('TC_6.5: Remove item from basket with delivery "Standard Shipping(£1.99)" and verify the basket count is updated.', () => {
        
        cy.addItemToBasket();
        cy.visitBasketPage();
        cy.get(deliveryStandardShipping).click();

        // Click the Delete item button
        cy.get(addedItemDetails).first().within(() => {
            cy.get('a.small').contains('Delete Item').click(); 
        });

        // Observe the basket count in the navigation bar
        cy.get(basketCountElement).should('be.visible'); 

        // Verify that the count decreases by 1
        cy.get(basketCountElement).invoke('text').then((text) => {
            const updatedCount = parseInt(text); 
            expect(updatedCount).to.equal(0); 
        });

        // Verify that the shipping cost of £1.99 is correctly added to the total
        cy.get(basketTotalItem).within(() => {
            cy.get('span').should('contain.text', 'Total (GBP)'); 
            cy.get('strong').invoke('text').then((totalText) => {
                const total = totalText.replace('£', '').trim(); 
                const expectedTotal = 1.99; 
                expect(Number(total)).to.equal(expectedTotal); 
            });
        });
    });

    it('TC_6.6: Empty basket with delivery "Collect (FREE)" and verify the basket is empty.', () => {
    
        cy.addItemToBasket();
        cy.visitBasketPage();
        cy.get(deliveryCollectFree).click();

        // Click on the "Empty Basket" link
        cy.get('a').contains('Empty Basket').click();

        // Verify that the basket count resets to 0
        cy.get(basketCountElement).should('be.visible').and('contain.text', '0');

        // Verify that the basket input field contains (Total(GBP) £0.00)
        cy.get('li.list-group-item.d-flex.justify-content-between').within(() => {
            cy.get('span').should('contain.text', 'Total (GBP)'); 
            cy.get('strong').invoke('text').then((totalText) => {
                const total = totalText.replace('£', '').trim(); 
                expect(Number(total)).to.equal(0.00); 
            });
        });
    });

    it('TC_6.7: Empty basket with delivery "Standard Shipping (£1.99)" and verify the basket is empty.', () => {
        
        cy.addItemToBasket();
        cy.visitBasketPage();
        cy.get(deliveryStandardShipping).click();

        // Click on the "Empty Basket" link
        cy.get('a').contains('Empty Basket').click();

        // Verify that the basket count resets to 0
        cy.get(basketCountElement).should('be.visible').and('contain.text', '0');

        // Verify that the shipping cost of £1.99 is correctly added to the total
        cy.get('li.list-group-item.d-flex.justify-content-between').within(() => {
            cy.get('span').should('contain.text', 'Total (GBP)'); 
            cy.get('strong').invoke('text').then((totalText) => {
                const total = totalText.replace('£', '').trim(); 
                const expectedTotal = 1.99; 
                expect(Number(total)).to.equal(expectedTotal); 
            });
        });
    }); 
});