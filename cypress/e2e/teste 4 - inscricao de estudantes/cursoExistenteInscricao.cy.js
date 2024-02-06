/*
Cenário de Teste para inscrever um estudante em algum curso existente.
**/

describe('Inscrição de Estudante', () => {
  before(() => {
		cy.login()
	})


  it('Inscrição de Estudante em um curso existente', () => {
    // Visite a página de gerenciar cursos
    cy.visit('https://sandbox.moodledemo.net/course/management.php')
    //Filtrar pelo curso
    cy.get('input[placeholder="Search courses"]').type('Teste')
    cy.get('button[class="btn  btn-primary search-icon"]').click()
    //Clicar em editar curso
    cy.get('i[title="Edit"]').click()
    //Clicar em Participantes
    cy.get('[data-key="participants"] > .nav-link').click()
    //Clicar em Matricular
    cy.get('#enrolusersbutton-1 > div > .btn').click()
    //Selecionar usuário/estudante
    cy.get('input[role="combobox"]').type('Max Manager')
    cy.wait(2000)
    cy.get('li[role="option"]').invoke('show')
      .contains('Max Manager').eq(0).click()
    //Clicar no botão matricular
    cy.get('.modal-footer > .btn-primary').click()
    //Mensagem de sucesso ao matricular 1 estudante
    cy.get('.toast-body').should('include.text', '1 enrolled users');
  })

})