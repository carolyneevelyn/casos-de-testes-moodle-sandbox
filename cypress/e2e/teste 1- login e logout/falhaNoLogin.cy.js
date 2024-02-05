/*
Cenário de Teste de Login com falha utilizando credenciais incorretas.
**/


describe('Login mal-sucedido', () => {
  // Credenciais incorretas de teste
  const usuarioIncorreto = {
    username: 'usuario_error',
    password: 'senha_error'
  };

  it('Falha no login com credenciais incorretas', () => {
    //Visitando a página de login
    cy.visit(Cypress.env('url'));
    //Inserindo as credenciais incorretas
    cy.get('#username').type(usuarioIncorreto.username);
    cy.get('#password').type(usuarioIncorreto.password);
    //Clicando no botão de Login
    cy.get('#loginbtn').click()
    //Verificando se uma mensagem de erro é exibida
    cy.get('.alert').should('be.visible');
  })
})