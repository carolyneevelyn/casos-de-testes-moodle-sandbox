


describe('Criação de estudantes', () => {
  before(() => {
		cy.login()
	})


  it('Criar 10 estudantes na plataforma', () => {
    // Visite a página de criação de estudantes
    cy.visit('https://sandbox.moodledemo.net/mod/forum/discuss.php?d=1')
    //Responder tópico
    cy.get('[href="https://sandbox.moodledemo.net/mod/forum/post.php?reply=1#mformforum"]').click()
    //Mensagem de resposta
    cy.wait(5000)
    cy.get('iframe[id="id_message_ifr"]').then($iframe => {
      const body = $iframe.contents().find('body');
      
      // Agora você pode interagir com os elementos dentro do iframe
      body.find('#id_message_ifr').type('Texto a ser inserido');
    });
    //Postar no fórum
    cy.get('#id_submitbutton').click()

  })

})