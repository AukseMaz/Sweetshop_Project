
Cypress.Commands.add("visitAboutPage", () => {
    cy.visit("https://sweetshop.netlify.app/about");
});

Cypress.Commands.add("navigateToPage", (page, url, heading) => {
    cy.get('.collapse.navbar-collapse').contains(page).click(); // Click the navigation link
    cy.url().should('include', url); // Verify correct URL
    cy.get('h1.display-3').should('contain.text', heading); // Verify heading
});

Cypress.Commands.add("navigateToMainPage", () => {
    cy.get('a.navbar-brand').click();
    cy.url().should('include', '/');
    cy.get('h1.display-3').should('contain.text', 'Welcome to the sweet shop!');
});

// Command to visit the login page
Cypress.Commands.add("visitLoginPage", () => {
    cy.visit("https://sweetshop.netlify.app/login");
});

// Command to fill login form
Cypress.Commands.add("fillLoginForm", (email, password) => {
    if (email !== "") {
        cy.get('input[type="email"]').clear().type(email);
    }
    if (password !== "") {
        cy.get('input[type="password"]').clear().type(password);
    }
});

// Command to click login button
Cypress.Commands.add("clickLogin", () => {
    cy.get('button[type="submit"]').click();
});

// Command to verify login success
Cypress.Commands.add("verifySuccessfulLogin", () => {
    cy.url().should("include", "/00efc23d-b605-4f31-b97b-6bb276de447e.html");
    cy.get("h1.display-3").should("contain.text", "Your Account");
});

// Command to verify login error messages
Cypress.Commands.add("verifyLoginError", (field, message) => {
    cy.get(`.invalid-feedback.invalid-${field}`)
        .should("be.visible")
        .and("contain.text", message);
});

Cypress.Commands.add("visitSweetsPage", () => {
    cy.visit("https://sweetshop.netlify.app/sweets");
});

Cypress.Commands.add("visitBasketPage", () => {
    cy.visit("https://sweetshop.netlify.app/basket");
});

Cypress.Commands.add("visitMainPage", () => {
    cy.visit("https://sweetshop.netlify.app/");
});

// Command to verify the page title
Cypress.Commands.add("verifyPageTitle", (title) => {
    cy.get("h1.display-3").should("be.visible").and("contain.text", title);
});

// Command to verify the sweets list is displayed
Cypress.Commands.add("verifySweetsList", () => {
    cy.get(".row.text-center").should("exist"); // Check that the product grid exists
    cy.get(".col-lg-3").should("have.length.greaterThan", 0); // Ensure products are listed
});

// Command to verify product details
Cypress.Commands.add("verifyProductDetails", ($product) => {
    cy.wrap($product).find(".card-title").should("exist"); // Product name
    cy.wrap($product).find("p").should("exist"); // Product price
    cy.wrap($product).find("p small.text-muted").should("exist").and("contain.text", "£"); // Price format
    cy.wrap($product).find(".card-img-top").should("have.attr", "src").and("not.be.empty"); // Image
    cy.wrap($product).find("a.addItem").should("be.visible").and("contain.text", "Add to Basket"); // Button
});

// Command to add a product to the basket
Cypress.Commands.add("addProductToBasket", ($product) => {
    cy.wrap($product).find("a.addItem").click();
});

// Get Basket Count (returns the number of items in the basket)
Cypress.Commands.add("getBasketCount", () => {
    return cy.get("span.badge.badge-success").invoke("text").then((text) => parseInt(text) || 0);
});

// Add a product to the basket (by index)
Cypress.Commands.add("addProductToBasket", (index = 0) => {
    cy.get(".col-lg-3").eq(index).within(() => {
        cy.get("a.addItem").click();
    });
});

// Remove a product from the basket
Cypress.Commands.add("removeProductFromBasket", () => {
    cy.get("li.list-group-item").first().within(() => {
        cy.get("a.small").contains("Delete Item").click();
    });
});

// Empty the basket
Cypress.Commands.add("emptyBasket", () => {
    cy.get("a").contains("Empty Basket").click();
});

// Select a delivery method (options: "collect" or "shipping")
Cypress.Commands.add("selectDeliveryMethod", (method) => {
    const options = {
        collect: "exampleRadios1", // Collect (FREE)
        shipping: "exampleRadios2" // Standard Shipping (£1.99)
    };
    cy.get(`label.custom-control-label[for="${options[method]}"]`).click();
});

// Verify total price in the basket
Cypress.Commands.add("verifyTotalPrice", (expectedTotal) => {
    cy.get('li.list-group-item.d-flex.justify-content-between')
        .contains("Total (GBP)")
        .parent()
        .find("strong")
        .invoke("text")
        .then((totalText) => {
            const total = parseFloat(totalText.replace(/[^\d.]/g, "")); // Extract numeric value
            expect(total).to.equal(expectedTotal);
        });
});

// Verify product details in the basket
Cypress.Commands.add("verifyBasketProduct", (name, quantity, price) => {
    cy.get("li.list-group-item").first().within(() => {
        cy.get("h6.my-0").should("contain.text", name); // Verify product name
        cy.get("small.text-muted").should("contain.text", `x ${quantity}`); // Verify quantity
        cy.get("span.text-muted").should("contain.text", `£${price.toFixed(2)}`); // Verify price
    });
});
