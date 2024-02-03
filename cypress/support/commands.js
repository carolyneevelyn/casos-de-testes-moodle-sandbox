Cypress.Commands.add('login', (username, password) => {

  cy.session([username, password], () => {
        cy.visit(Cypress.env('url'));
        cy.get('input[id="Input_UsernameVal"]').type(Cypress.env('username'));
        cy.get('input[id="Input_PasswordVal"]').type(Cypress.env('password'));
        

})
})