/*
Cenário de Teste de Login bem-sucedido utilizando credenciais corretas. Será necessário configurar 
o arquivo 'cypress.env.json' com as respectivas credenciais.
**/

describe('Login Bem-sucedido', () => {
  it('Utilizando credenciais corretas', () =>{
    //Visitando a página de login
    cy.visit(Cypress.env('url'));
    //Inserindo as credenciais corretas
    cy.get('#username').clear().type(Cypress.env('username'))
    cy.get('#password').clear().type(Cypress.env('password'))
    //Clicando no botão de Login
    cy.get('#loginbtn').click()
    //Verificando se o login foi redirecionado para a página de HOME
    cy.url().should('include', 'https://sandbox.moodledemo.net/');
    //Verificando se está exibindo o nome de usuário correto
    cy.get('h2.mb-3.mt-3').invoke('text').then((actualText) => {
      const expectedText = 'Hi, Admin! 👋';
      expect(actualText.trim()).to.equal(expectedText);
    })
  })
})
