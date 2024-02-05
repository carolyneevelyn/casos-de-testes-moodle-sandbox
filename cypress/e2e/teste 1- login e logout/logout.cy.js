/*
Cenário de Teste de Logout. Não foi possível validar mensagem de sucesso de logout porque não existe		
nenhuma mensagem após clicar o botão (sugestão de melhoria).
**/

describe('Logout', () => {
  before(() => {
		cy.login()
	})

	 it('Logout bem-sucedido após o login', () => {
		//Clicando no usuário logado
		cy.get('#user-menu-toggle').click()
		//Clicando no botão de Logout
		cy.get('#carousel-item-main :last-child').click()
		//Verificando se foi redirecionado para a Página Inicial
		cy.url().should('include', 'https://sandbox.moodledemo.net/')
	 })
	})
