/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */



describe('Teste Site Saucedemo', function () {
  beforeEach(function () {
    //acesso ao site 
    cy.visit('https://www.saucedemo.com/v1/')
  })

  // Verificacao de titulo da pagina
  it('verifica o título da aplicação', function () {
      //verificacao do titulo
      cy.title().should('be.equal', 'Swag Labs')
    })

    //CAMPOS OBRIGATÓRIOS DO FORMULÁRIO
  it('preenche os campos obrigatórios e envia o formulário', function () {
    
    //insere o longin e senha padrao
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')

    //clica no botao Enviar
    cy.contains('button', 'LOGIN').click()

    //verifica a mensagem de envio com sucesso
    cy.get('.success').should('be.visible')
  })

    
})