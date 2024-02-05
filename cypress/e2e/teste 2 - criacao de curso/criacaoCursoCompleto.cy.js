/*
Cenário de Teste de criação de curso com todas as informações/campos preenchidos.
**/


describe('Criação de curso bem sucedida', () => {
  before(() => {
		cy.login()
	})

  it('Criação de Curso com todas as informações necessárias', () => {
    //Clicando no Menu "My courses"
    cy.get('li[data-key="mycourses"]').click()
    //Clicando no botão "Create course"
    cy.get('button[type="submit"]').eq(2).click()

    //Preenchendo as informações de curso

    //General:
    cy.get('#id_fullname').type('Curso Teste')
    cy.get('#id_shortname').type('test')
    //cy.get('#form_autocomplete_input-1707147866677').select('Languages')
    cy.get('#id_visible').select('Show')
    cy.get('#id_startdate_day').select('5')
    cy.get('#id_startdate_month').select('February')
    cy.get('#id_startdate_year').select('2024')
    cy.get('#id_startdate_hour').select('10')
    cy.get('#id_startdate_minute').select('20')
    cy.get('#id_enddate_day').select('5')
    cy.get('#id_enddate_month').select('March')
    cy.get('#id_enddate_year').select('2026')
    cy.get('#id_enddate_hour').select('12')
    cy.get('#id_enddate_minute').select('30')
    cy.get('#id_idnumber').type('1509')
    cy.get('#id_summary_editor_ifr')

    //Description: 
    cy.get('#id_summary_editor_ifr').type('teste!@#$%¨&*()_+')
    //Anexando imagem de curso
    const upload = 'input[type="file"]';
    cy.get('.fp-btn-add > .btn').click()
    cy.get(upload)
      .as('fileInput')
      .attachFile('cypress-test.jpg')
    //Verificando se o arquivo correto foi selecionado
    cy.get(upload)
      .as('fileLink')
      .should('be.visible')
      .and('have.value', 'C:\\fakepath\\cypress-test.jpg')
    //Clicando no botão "Save and Display"
    cy.get('#id_saveanddisplay').click({force: true})
    cy.get('.h2').should('have.text', 'Curso Teste')
  })
})