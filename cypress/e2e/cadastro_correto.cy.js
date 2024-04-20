const axios = require('axios');

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://desafio.qa.bridge.ufsc.br/')
    cy.get('[id="usuario"]').type('gustavoberettag@gmail.com')
    cy.get('[id="password"]').type('PoP3PqEo2PzUAgOOkIqxEF')
    cy.get('[id="termos-de-uso"]').click()
    //cy.contains('button','Acessar').click()
    cy.wait(3)
    cy.get('[class="btn-acessar"]').click()
  })
})