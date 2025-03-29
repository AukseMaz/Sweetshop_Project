/// <reference types="cypress" />

describe('Sweet Shop spec', () => {
    const baseUrl = 'https://sweetshop.netlify.app/';
  
    beforeEach(() => {
        cy.visit(baseUrl); // Visit the main page before each test
    });
  });