// it da um scope de teste
/// <reference types="Cypress" /> // Com essa linha o vs reconhece que estou trabalhando com cypress

// Primeiro parametro é o nome do teste, o segundo é o que vai ser executado.
it('A external test...', () => {

})

// Describe é um grupo de testes, ou seja, um grupo de testes é um conjunto de testes.
// Primeiro parametro é o nome do grupo de testes, o segundo é o que vai ser executado.
describe.skip('Should group tests...', () => {

    describe('Should group more specific tests...', () => {
        it.skip('A specific test...', () => {
        })
    })
        
    describe.skip('Should group more specific tests...', () => {
        it('A specific test...', () => {
        })
    })

    it.only('A internal test...', () => {
    })

})

