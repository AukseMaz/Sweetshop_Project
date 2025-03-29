/// <reference types="cypress" />

describe('Basket Functionality - Adding Products', () => {
    const sweetsUrl = 'https://sweetshop.netlify.app/sweets';
    const basketUrl = 'https://sweetshop.netlify.app/basket';
    beforeEach(() => {
        cy.visit(sweetsUrl);
    });

    it('TC_6.1: Add products to basket and verify the basket count is updated', () => {
        // Step 1: Ensure the basket count element exists
        cy.get('span.badge.badge-success', { timeout: 10000 }).should('exist'); // Wait for the basket count element to exist

        // Step 2: Get initial basket count
        cy.get('span.badge.badge-success')
            .invoke('text')
            .then((initialCount) => {
                const initial = parseInt(initialCount) || 0; // Convert the current count to an integer, default to 0 if empty

                // Step 3: Click the first "Add to Basket" button
                cy.get('a.btn.addItem').first().click();

                // Step 4: Verify the basket count increases by 1
                cy.get('span.badge.badge-success').should('contain.text', (initial + 1).toString());

                // Step 5: Click another "Add to Basket" button
                cy.get('a.btn.addItem').eq(1).click();

                // Step 6: Verify the basket count updates again
                cy.get('span.badge.badge-success').should('contain.text', (initial + 2).toString());
            });
    });

    it('TC_6.2: Add products to basket with delivery "Collect (FREE)"', () => {
        // Step 1: Select a product and click "Add to Basket"
        cy.get('.col-lg-3').first().within(() => {
            cy.get('a.addItem').click();
        });

        // Step 2: Navigate to the Basket page
        cy.visit(basketUrl);

        // Step 3: Verify the added product details
        cy.get('li.list-group-item').first().within(() => {
            cy.get('h6.my-0').should('contain.text', 'Chocolate Cups');
            cy.get('small.text-muted').should('contain.text', 'x 1');
            cy.get('span.text-muted').should('contain.text', '£1.00');
        });

        // Step 4. Select the "Collect (FREE)" option
        cy.get('label.custom-control-label[for="exampleRadios1"]').click();

        // Step 5: Verify the total price remains unchanged
        cy.get('.total-price, strong, .cart-total').invoke('text').then((totalText) => {
            const total = parseFloat(totalText.replace(/[^\d.]/g, '')); // Extract numeric value
            expect(total).to.equal(1.00); // Ensure total price is correct
        });
    });

    it('TC_6.3: Add products to basket with delivery "Standard Shipping (£1.99)"', () => {
        // Step 1: Add a product to the basket
        cy.get('.col-lg-3').first().within(() => {
            cy.get('a.addItem').click(); // Click the "Add to Basket" button for the first product
        });

        // Step 2: Navigate to the Basket page
        cy.visit(basketUrl);

        // Step 3: Verify the added product details
        cy.get('li.list-group-item').should('exist');

        cy.get('li.list-group-item').first().within(() => {
            cy.get('h6.my-0').should('contain.text', 'Chocolate Cups');
            cy.get('small.text-muted').should('contain.text', 'x 1');
            cy.get('span.text-muted').should('contain.text', '£1.00');
        });

        // Step 4: Select the "Standard Shipping (£1.99)" option
        cy.get('label.custom-control-label[for="exampleRadios2"]').click();

        // Step 5: Verify that the shipping cost of £1.99 is correctly added to the total
        cy.get('li.list-group-item.d-flex.justify-content-between').contains('Total (GBP)').parent().find('strong').invoke('text').then((totalText) => {
            const total = totalText.replace('£', '').trim(); // Remove the currency symbol and trim whitespace
            const expectedTotal = 1.00 + 1.99; // Assuming product price is £1.00
            expect(Number(total)).to.equal(expectedTotal); // Verify that the total price is correct
        });
    });

    it('TC_6.4: Remove item from basket with delivery "Collect (FREE)" and verify the basket count is updated', () => {

        cy.get('.col-lg-3').first().within(() => {
            cy.get('a.addItem').click(); // Click the "Add to Basket" button for the first product
        });

        // Navigate to the Basket page
        cy.visit(basketUrl);

        // Step 1: Choose the delivery method 'Collect (FREE)'
        cy.get('label.custom-control-label[for="exampleRadios1"]').click();

        // Step 2: Click the Delete item button
        cy.get('li.list-group-item').first().within(() => {
            cy.get('a.small').contains('Delete Item').click(); // Click the delete link for the first product
        });

        // Step 3: Observe the basket count in the navigation bar
        cy.get('.badge') // Adjust this selector based on the actual class used for the basket count
            .should('be.visible'); // Ensure the basket count is visible

        // Step 4: Verify that the count decreases by 1
        cy.get('.badge').invoke('text').then((text) => {
            const updatedCount = parseInt(text); // Convert the updated count to an integer
            expect(updatedCount).to.equal(0); // Verify that the count is now 0 after removing the product
        });

        // Step 5: Verify that the total price is updated correctly
        cy.get('li.list-group-item.d-flex.justify-content-between').within(() => {
            cy.get('span').should('contain.text', 'Total (GBP)'); // Ensure the label is correct
            cy.get('strong').invoke('text').then((totalText) => {
                const total = totalText.replace('£', '').trim(); // Remove the currency symbol and trim whitespace
                expect(Number(total)).to.equal(0.00); // Ensure total price is now £0.00 after removing the product
            });
        });
    });

    it('TC_6.5: Remove item from basket with delivery "Standard Shipping(£1.99)" and verify the basket count is updated', () => {
        cy.get('.col-lg-3').first().within(() => {
            cy.get('a.addItem').click(); // Click the "Add to Basket" button for the first product
        });

        // Navigate to the Basket page
        cy.visit(basketUrl);
        // Step 1: Choose the delivery method 'Collect (FREE)'
        cy.get('label.custom-control-label[for="exampleRadios2"]').click();

        // Step 2: Click the Delete item button
        cy.get('li.list-group-item').first().within(() => {
            cy.get('a.small').contains('Delete Item').click(); // Click the delete link for the first product
        });

        // Step 3: Observe the basket count in the navigation bar
        cy.get('.badge') // Adjust this selector based on the actual class used for the basket count
            .should('be.visible'); // Ensure the basket count is visible

        // Step 4: Verify that the count decreases by 1
        cy.get('.badge').invoke('text').then((text) => {
            const updatedCount = parseInt(text); // Convert the updated count to an integer
            expect(updatedCount).to.equal(0); // Verify that the count is now 0 after removing the product
        });

        // Step 5: Verify that the shipping cost of £1.99 is correctly added to the total
        cy.get('li.list-group-item.d-flex.justify-content-between').within(() => {
            cy.get('span').should('contain.text', 'Total (GBP)'); // Ensure the label is correct
            cy.get('strong').invoke('text').then((totalText) => {
                const total = totalText.replace('£', '').trim(); // Remove the currency symbol and trim whitespace
                const expectedTotal = 1.99; // Set expected total to £1.99 after deletion
                expect(Number(total)).to.equal(expectedTotal); // Verify that the total price is correct
            });
        });
    });

    it('TC_6.6: Remove item from basket with delivery "Standard Shipping(£1.99)" and verify the basket count is updated', () => {
        cy.get('.col-lg-3').first().within(() => {
            cy.get('a.addItem').click(); // Click the "Add to Basket" button for the first product
        });

        cy.visit(basketUrl);

        // Step 1: Choose the delivery method 'Collect (FREE)'
        cy.get('label.custom-control-label[for="exampleRadios1"]').click();

        // Step 2: Click on the "Empty Basket" link
        cy.get('a').contains('Empty Basket').click();

        // Step 3: Verify that the basket count resets to 0
        cy.get('.badge').should('be.visible').and('contain.text', '0');

        // Step 4: Verify that the basket input field contains (Total(GBP) £0.00)
        cy.get('li.list-group-item.d-flex.justify-content-between').within(() => {
            cy.get('span').should('contain.text', 'Total (GBP)'); // Ensure the label is correct
            cy.get('strong').invoke('text').then((totalText) => {
                const total = totalText.replace('£', '').trim(); // Remove the currency symbol and trim whitespace
                expect(Number(total)).to.equal(0.00); // Ensure total price is now £0.00 after emptying the basket
            });
        });
    });

    it('TC_6.7: Empty basket with delivery "Standard Shipping (£1.99)" and verify the basket is empty.', () => {
        cy.get('.col-lg-3').first().within(() => {
            cy.get('a.addItem').click(); // Click the "Add to Basket" button for the first product
        });

        cy.visit(basketUrl);

        // Step 1: Choose the delivery method 'Collect (FREE)'
        cy.get('label.custom-control-label[for="exampleRadios2"]').click();

        // Step 2: Click on the "Empty Basket" link
        cy.get('a').contains('Empty Basket').click();

        // Step 3: Verify that the basket count resets to 0
        cy.get('.badge').should('be.visible').and('contain.text', '0');

        // Step 4: Verify that the shipping cost of £1.99 is correctly added to the total
        cy.get('li.list-group-item.d-flex.justify-content-between').within(() => {
            cy.get('span').should('contain.text', 'Total (GBP)'); // Ensure the label is correct
            cy.get('strong').invoke('text').then((totalText) => {
                const total = totalText.replace('£', '').trim(); // Remove the currency symbol and trim whitespace
                const expectedTotal = 1.99; // Set expected total to £1.99 after deletion
                expect(Number(total)).to.equal(expectedTotal); // Verify that the total price is correct
            });
        });
    }); 
});
