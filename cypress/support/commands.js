Cypress.Commands.add('login', (username, password) => {

  cy.session([username, password], () => {
        cy.visit(Cypress.env('url'));
        cy.get('#username').type(Cypress.env('username'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('#loginbtn').click()
        cy.url().should('be.equal', 'https://sandbox.moodledemo.net/')
        

  })
})


import 'cypress-file-upload';
import 'cypress-iframe';

