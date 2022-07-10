/// <reference types="Cypress" />

describe('Cypress basics', () => {
   it('Should visit a page and assert title', () => {
     cy.visit('https://www.wcaquino.me/cypress/componentes.html')

     // const title = cy.title()
     // console.log(title)

     cy.title().should('be.equal', 'Campo de Treinamento')
     cy.title().should('contain', 'Campo')

     cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')

    // TODO: Imprimir o log no console.
    //TODO: Escrever o nome no campo de texto.

   });
});