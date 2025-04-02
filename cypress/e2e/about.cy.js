/// <reference types="cypress" />

describe("SweetShop - About Page", () => {
    const paragraphsDescription = ".lead";
    const paragraphFooterText = ".m-0.text-center";

    beforeEach(() => {
        cy.visitAboutPage();
    });

    it('TC_1.1 Verify the page has the title "Sweet Shop Project"', () => {
        cy.contains("h1", "Sweet Shop Project").should("be.visible");
    });
  
    it("TC_1.2 Verify the page has a description", () => {
        cy.get(paragraphsDescription).should("exist").and("be.visible").and("not.be.empty");
    });
  
    it("TC_1.3 Verify the page has a footer and it matches the year 2018", () => {
        cy.get(paragraphFooterText).should("be.visible");
        cy.contains(paragraphFooterText, "2018").should("be.visible");
    });
});



