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
  
    it("TC_1.2 Verify the page has the correct description", () => {
        cy.get(paragraphsDescription)
            .should("exist")
            .and("be.visible")
            .invoke('text')
            .then((text) => {
                const normalizedText = text.replace(/\s+/g, ' ').trim();
                expect(normalizedText).to.equal(
                    "An intentionally broken web application to help demonstrate Chrome DevTools. Sweet Shop is a project created to help demonstrate some of the great features of the Chrome DevTools which may be of use to people who help test web applications. Sweet Shop encompasses common issues found in real-world web applications!"
                );
            });
    });      
  
    it("TC_1.3 Verify the page has a footer and it matches the year 2018", () => {
        cy.contains(paragraphFooterText, "2018").should("be.visible");
    });
});



