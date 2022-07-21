// reference types="Cypress" eu estou dizendo que estou usando o Cypress.

/// <reference types="cypress" /> 

// describe é um grupo de testes, ou seja, um conjunto de testes.
describe('Word with basic elements', () => {
    // Hooks são funções que são executadas antes e depois de cada teste.
    
    // o before nesse caso é executado antes de todos os testes. 
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    // o beforeEach é executado antes de cada teste.
    // beforeEach(() => {
    //     cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    // })

    // beforeEach(() => {
    //     cy.reload()
    // })


    // o it é um teste, ou seja, um caso de teste.
    it('Text', () => {
        

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
        
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

    })

    it('Text Fields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes') // Aqui devo utilizar \\ para que o cypress reconheça os : 
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')

        cy.get('[data-cy=dataSobrenome]')
            .type('Text12345{backspace}{backspace}')
            .should('have.value', 'Text123')

        cy.get('#elementosForm\\:sugestoes') // Aqui devo utilizar \\ para que o cypress reconheça os : 
            .clear()
            .type('Erro{selectall}acerto', {delay:100})
            .should('have.value', 'acerto')
    })

    it.only('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        // Para multiplo clicks tem que passar dentro do click.({multiple:true})
        cy.get('[name=formComidaFavorita]').click({multiple:true})
        cy.get('[name=formComidaPizza]').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })

})
