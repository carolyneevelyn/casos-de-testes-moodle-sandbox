/*
Cenário de Teste para tentar criar um curso sem o preenchimento dos campos obrigatórios.
**/


describe('Salvar curso sem preencher campos obrigatórios', () => {
  before(() => {
		cy.login()
	})

  it('Tentar criar Curso', () => {
    //Clicando no Menu "My courses"
    cy.get('li[data-key="mycourses"]').click()
    //Clicando no botão "Create course"
    cy.get('button[type="submit"]').eq(2).click()
    //Tentar salvar sem o preenchimento do campos obrigatórios
    cy.get('#id_saveanddisplay').click()
    //Verificar se houve mensagem de erro
    cy.get('#id_error_fullname').should('exist');
  })
})