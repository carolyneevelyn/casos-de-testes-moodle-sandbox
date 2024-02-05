describe('Criação de estudantes', () => {
  before(() => {
		cy.login()
	})


  it('Criar 10 estudantes na plataforma', () => {
    // Visite a página de criação de estudantes
    cy.visit('https://sandbox.moodledemo.net/mod/forum/view.php?id=1')
    // Adicionar tópicos
    cy.wait(5000)
    cy.get('a[href="#collapseAddForm"]').click()
    // Adicionando assunto
    cy.get('#id_subject').type('teste')
    //Mensagem
    cy.get('iframe[id="id_message_ifr"]').type('Mensagem Teste')
    //Clicar em postar
    cy.get('#id_submitbutton').click()
    //Validando mensagem de sucessoao salvar mensagem no fórum
    cy.get('.alert').should('include.text', 'Your post was successfully added.You have 30 mins to edit it if you want to make any changes.');
  })
})