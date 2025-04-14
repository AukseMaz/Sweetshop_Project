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

Cypress.Commands.add("addRandomItemsToBasket", (minItems, maxItems) => {
    cy.get(".btn").then(($buttons) => {
        const totalItems = $buttons.length;
        const numberOfItems = Cypress._.random(minItems, maxItems);
        const randomIndexes = Cypress._.shuffle([...Array(totalItems).keys()]).slice(0, numberOfItems);

        randomIndexes.forEach((index) => {
            cy.wrap($buttons.eq(index)).click();
        });
        cy.wrap(numberOfItems).as("selectedItemCount");
    });
});

Cypress.Commands.add('fillCheckoutForm', (email, firstName, lastName, address, address2, country, city, zip, cardName, cardNumber, expiration, cvv) => {
    cy.get('input[id="name"]').first().clear().type(firstName);
    cy.get('input[id="name"]').last().clear().type(lastName);
    cy.get('input[id="email"]').clear().type(email);
    cy.get('input[id="address"]').clear().type(address);
    cy.get('input[id="address2"]').clear().type(address2);
    cy.get('select[id="country"]').select(country);
    cy.get('select[id="city"]').select(city);
    cy.get('input[id="zip"]').clear().type(zip);
    cy.get('input[id="cc-name"]').clear().type(cardName);
    cy.get('input[id="cc-number"]').clear().type(cardNumber);
    cy.get('input[id="cc-expiration"]').clear().type(expiration);
    cy.get('input[id="cc-cvv"]').clear().type(cvv);
  });
  


