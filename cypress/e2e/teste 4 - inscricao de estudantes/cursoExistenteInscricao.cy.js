

describe('Criação de estudantes', () => {
  before(() => {
		cy.login()
	})


  it('Criar 10 estudantes na plataforma', () => {
    // Visite a página de criação de estudantes
    cy.visit(Cypress.env('urlCursos'));
    // Gerenciar cursos
    cy.get('button[class="btn btn-secondary"]').click()

  })

})