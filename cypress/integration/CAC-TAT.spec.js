/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach( () => {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', () => {
        cy.get('#firstName').type('William')
        cy.get('#lastName').type('Almeida')
        cy.get('#email').type('william@gmail.com')
        cy.get('#open-text-area').type('Alguma coisa muito legal!')
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

    
})
  