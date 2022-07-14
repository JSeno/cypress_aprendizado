// reference types="Cypress" eu estou dizendo que estou usando o Cypress.

/// <reference types="cypress" /> 

// describe é um grupo de testes, ou seja, um conjunto de testes.
describe('Word with basic elements', () => {
    // o it é um teste, ou seja, um caso de teste.
    it('Text', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        // o get('Aqui coloco uma busca') o should é para verificar se o elemento existe.
        // Essa função está buscando no corpo se existe uma palavra com o texto 'Cuidado'.
        cy.get('body').should('contain', 'Cuidado')
        // cy.get('body').should('have.text', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        // cy.get('div').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') // Aqui é esperado o texto exato.
    })

    it('Links', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

    })

})
