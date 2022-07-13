/// <reference types="Cypress" />

describe('Cypress basics', () => {
   it.only('Should visit a page and assert title', () => {
      cy.visit('https://www.wcaquino.me/cypress/componentes.html')

   // const title = cy.title()
   // console.log(title)

      // o .pause() pausa a execução do teste por um determinado tempo
      cy.pause()

      cy.title().should('be.equal', 'Campo de Treinamento')
      // o .debug para ver no console o que está sendo retornado, posso colocar ele em qualquer lugar
      cy.title().should('contain', 'Campo').debug()

      cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('contain', 'Campo')

   // TODO: Imprimir o log no console.
   //TODO: Escrever o nome no campo de texto.
   })

   it('Should find and interact with an element', () => {
      cy.visit('https://www.wcaquino.me/cypress/componentes.html')
      cy.get('#buttonSimple').click()
      // Criar uma assertiva para confirmar o teste. da automação
      cy.get('#buttonSimple').should('have.value', 'Obrigado!')

   })
   })