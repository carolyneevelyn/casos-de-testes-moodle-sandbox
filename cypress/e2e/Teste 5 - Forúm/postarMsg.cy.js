/*
Cenário de Teste para publicar um post em fórum de curso.
**/


describe('Post em Fórum', () => {
  before(() => {
		cy.login()
	})


  it('Verificar a funcionalidade de postagem em fórum', () => {
    // Visite a página de criação de estudantes
    cy.visit('https://sandbox.moodledemo.net/course/management.php')
    //Filtrar pelo curso
    cy.get('input[placeholder="Search courses"]').type('Teste')
    cy.get('button[class="btn  btn-primary search-icon"]').click()
    //Clicar em editar curso
    cy.get('i[title="Edit"]').click()
    //Cursos
    cy.get('[data-key="coursehome"] > .nav-link').click()
    //Anúncios
    cy.get('.aalink').eq(0).click()
    // Adicionar tópicos
    cy.wait(5000)
    cy.get('a[href="#collapseAddForm"]').click()
    // Adicionando assunto
    cy.get('#id_subject').type('teste')
    //Mensagem
    cy.iframe('#id_message_ifr').type('Mensagem Teste')
    //Clicar em postar
    cy.get('#id_submitbutton').click()
    //Validando mensagem de sucessoao salvar mensagem no fórum
    cy.get('.alert').should('include.text', 'Your post was successfully added.You have 30 mins to edit it if you want to make any changes.');
  })
})