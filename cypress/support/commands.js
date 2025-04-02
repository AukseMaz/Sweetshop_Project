Cypress.Commands.add("visitMainPage", () => {
    cy.visit("https://sweetshop.netlify.app/");
});

Cypress.Commands.add("visitSweetsPage", () => {
    cy.visit("https://sweetshop.netlify.app/sweets");
});

Cypress.Commands.add("visitAboutPage", () => {
    cy.visit("https://sweetshop.netlify.app/about");
});

Cypress.Commands.add("visitLoginPage", () => {
    cy.visit("https://sweetshop.netlify.app/login");
});

Cypress.Commands.add("visitBasketPage", () => {
    cy.visit("https://sweetshop.netlify.app/basket");
});

Cypress.Commands.add('addItemToBasket', (itemIndex = 0) => {
    cy.get('.col-lg-3').eq(itemIndex).find('a.addItem').click();
});

Cypress.Commands.add("addRandomItemsToBasket", (minItems, maxItems) => {
    cy.get(".btn").then(($buttons) => {
        const totalItems = $buttons.length;
        const numberOfItems = Cypress._.random(minItems, maxItems);
        const randomIndexes = Cypress._.shuffle([...Array(totalItems).keys()]).slice(0, numberOfItems);

        randomIndexes.forEach((index) => {
            cy.wrap($buttons.eq(index)).click();
        });
        // Store count for later assertions
        cy.wrap(numberOfItems).as("selectedItemCount");
    });
});

Cypress.Commands.add('fillCheckoutForm', (email, firstName, lastName, address, address2, country, city, zip, cardName, cardNumber, expiration, cvv) => {
    cy.get("input#name").first().clear().type(firstName);
    cy.get("input#name").last().clear().type(lastName);
    cy.get("input#email").clear().type(email);
    cy.get("input#address").clear().type(address);
    cy.get("input#address2").clear().type(address2);
    cy.get("select#country").select(country);
    cy.get("select#city").select(city);
    cy.get("input#zip").clear().type(zip);
    cy.get("input#cc-name").clear().type(cardName);
    cy.get("input#cc-number").clear().type(cardNumber);
    cy.get("input#cc-expiration").clear().type(expiration);
    cy.get("input#cc-cvv").clear().type(cvv);
});


