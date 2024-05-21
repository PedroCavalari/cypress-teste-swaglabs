<reference types="Cypress" />

  describe('Teste Site Saucedemo', function () {
    beforeEach(function () {
      //acesso ao site 
      cy.visit('https://www.saucedemo.com/v1/')
    })

    it('verifica o título da aplicação', function () {
        //verificacao do titulo
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
      })
      
  })