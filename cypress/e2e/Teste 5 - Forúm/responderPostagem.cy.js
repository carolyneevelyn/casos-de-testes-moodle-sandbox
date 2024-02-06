/*
Cenário de Teste responder post em fórum de algum curso.
**/


describe('Responder postagem', () => {
  before(() => {
		cy.login()
	})


  it('Responder a uma postagem existente em um fórum', () => {
    // Visite a página de gerenciar cursos
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
    cy.get('.p-3 > .d-flex > .w-100').click()
    //botão responder
    cy.get('[href="https://sandbox.moodledemo.net/mod/forum/post.php?reply=1#mformforum"]').click()
    //Mensagem resposta
    cy.iframe('#id_message_ifr').type('Testeee')
    //botão de enviar
    cy.get('#id_submitbutton').click()
    ////Validando mensagem de sucessoao salvar mensagem no fórum
    cy.get('.alert').should('include.text', 'Your post was successfully added.You have 30 mins to edit it if you want to make any changes.');
  
  })

})