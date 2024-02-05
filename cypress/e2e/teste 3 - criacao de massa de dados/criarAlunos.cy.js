/*
Cenário de Teste para criar 10 (dez) usuários de forma automatizada
**/

describe('Criação de estudantes', () => {
  before(() => {
		cy.login()
	})


  it('Criar 10 estudantes na plataforma', () => {
    // Visite a página de criação de estudantes
    cy.visit(Cypress.env('urlUsuarios'));
    //Clicar no botão de adicionar novo usuário
    cy.get('#linkusers > .container-fluid > :nth-child(3) > .col-sm-9 > .list-unstyled > :nth-child(3) > a').click()

    // Loop para criar 10 estudantes
    for (let i = 1; i <= 10; i++) {
      // Preencha os campos do formulário
      cy.get('#id_username').type(`estudante${i}`);
      cy.get('a[data-passwordunmask="edit"]').type(`1234${i}`)
      cy.get('#id_firstname').type(`Name ${i}`);
      cy.get('#id_lastname').type(`Lastname ${i}`);
      cy.get('#id_email').type(`estudante${i}@exemplo.com`);
    // Enviando o formulário
      cy.get('#id_submitbutton').click()
    // Verificando se realmente foi salvo o Aluno
      cy.get('.alert').should('include.text', 'Changes saved');
    //Criar novo usuário
      cy.get('button[type="submit"]').eq(2).click()
    }
  });
});