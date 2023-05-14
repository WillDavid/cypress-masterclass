/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach( () => {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', () => {
        const longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

        cy.get('#firstName').type('William')
        cy.get('#lastName').type('Almeida')
        cy.get('#email').type('william@gmail.com')
        cy.get('#open-text-area').type(longText, { delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

    
})
  