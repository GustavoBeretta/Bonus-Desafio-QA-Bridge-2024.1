describe('Página de Login', () => {
  it('Faz login com a conta do Gustavo', () => {
    cy.visit('https://desafio.qa.bridge.ufsc.br/')
    cy.get('[id="usuario"]').type('gustavoberettag@gmail.com')
    cy.get('[id="password"]').type('PoP3PqEo2PzUAgOOkIqxEF')
    cy.get('[id="termos-de-uso"]').click()
    cy.get('[class="btn-acessar"]').click()
  })
})