// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

// ** This file is an example of how to write Cypress tests, you can safely delete it **
import { date } from 'quasar';

// This test will pass when run against a clean Quasar project
describe('Cards Page', () => {
  beforeEach(() => {
    cy.visit('/cards');
  });

  it('should add new card', () => {
    cy.dataCy('cards-page-new-card-button').should('contain.text', 'New Card').click();
    cy.dataCy('new-card-dialog').should('be.visible');
    cy.dataCy('new-card-input').type('Aspire');
    cy.dataCy('new-card-add-button').should('be.visible').click();
    cy.dataCy('new-card-dialog').should('not.exist');
    cy.dataCy('visa-card-name').should('contain.text', 'Aspire');
  });

  it('should check show card functionality', () => {
    cy.dataCy('card-carousel-wrapper-show-card-number-btn')
      .should('contain.text', 'Show card number')
      .click();

    cy.dataCy('visa-card-show-number')
      .should('be.visible')
      .should('contain.text', '1234123412341234');
    cy.dataCy('visa-card-cvv').should('contain.text', '123');
    cy.dataCy('visa-card-validity').should('contain.text', date.formatDate(new Date(), 'MM/YY'));

    cy.dataCy('card-carousel-wrapper-show-card-number-btn')
      .should('contain.text', 'Hide card number')
      .click();

    cy.dataCy('visa-card-hidden-num-1').should('be.visible').should('contain.text', '••••');
    cy.dataCy('visa-card-hidden-num-2').should('be.visible').should('contain.text', '••••');
    cy.dataCy('visa-card-hidden-num-3').should('be.visible').should('contain.text', '••••');
    cy.dataCy('visa-card-show-num-1').should('be.visible').should('contain.text', '1234');
    cy.dataCy('visa-card-cvv').should('contain.text', '***');
    cy.dataCy('visa-card-validity').should('contain.text', '••/••');

    cy.dataCy('visa-card-show-number').should('not.exist');
  });
});

// Workaround for Cypress AE + TS + Vite
// See: https://github.com/quasarframework/quasar-testing/issues/262#issuecomment-1154127497
export {};
