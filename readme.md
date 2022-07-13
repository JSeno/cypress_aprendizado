# ![Cypress](https://raw.githubusercontent.com/cypress-io/cypress-icons/master/src/favicon/favicon.ico) Aprendizado Cypress.   
&nbsp;

  
Aulas sobre o uso do cypress para testes automatizados, assistindo curso via udemy.&nbsp;  
&nbsp;  


## Instalando Cypress.
--------------------------------------------------------------------------------  
&nbsp;


Antes de começar utilizar o cypress tenha certeza que tenha instalado o NodeJS.  
&nbsp;

Agora precisa criar o arquivo package.json e para isso irei utilizar o comando: `npm init -y`  
&nbsp;

### Agora adicionando o cypress como dependência do projeto.  
--------------------------------------------------------------------------------  
&nbsp;

Utilizando o comando: `npm install cypress`.  
&nbsp;

Mas para o curso estarei utilizando a versão 3.6 com o comando: `npm install cypress@3.6.0`  
&nbsp;

Para abrir o cypress precisa navegar na pasta: `node_modules/cypress/.bin/cypress open`  
&nbsp;

Caso seja necessário no Windows, precisa adicionar um comando no arquivo `package.json`.    
&nbsp;

 ```json
 "scripts": {
        "cypress:open": "cypress open",
}
```  

&nbsp;

Dentro da pasta raiz agora rode o comando: `npm run cypress:open`  
&nbsp;

# Métodos que aprendi até agora:&nbsp;  
- `cy.visit('Página que quero visitar')` é própriamente a página que o cypress irá abrir para os testes.
- `cy.get(#class=id)` é a busca de um elemento na página pelo id de sua classe, esse método pode vir seguido de vários métodos como por exemplo .click().
- `cy.pause()` é uma pausa no teste que eu posso clicar para continuar ou fazendo passo a passo o teste.
- `cy.debug()` mostra um debug no console atráves do inspetor de elementos.
- `.should()` é um assert, devo jogar quais parâmetros esperar e ver se a resposta do cypress é o que eu espero.

