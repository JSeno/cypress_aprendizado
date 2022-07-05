# Aprendizado Cypress.
--------------------------------------------------------------------------------


## Instalando Cypress.
--------------------------------------------------------------------------------


Antes de começar utilizar o cypress tenha certeza que tenha instalado o NodeJS.  

Agora precisa criar o arquivo package.json e para isso irei utilizar o comando: `npm init -y`  


### Agora adicionando o cypress como dependência do projeto.  
--------------------------------------------------------------------------------


Utilizando o comando: `npm install cypress`.  


Mas para o curso estarei utilizando a versão 3.6 com o comando: `npm install cypress@3.6.0`  


Para abrir o cypress precisa navegar na pasta: `node_modules/cypress/.bin/cypress open`  


Caso seja necessário no Windows, precisa adicionar um comando no arquivo package.json:  


 ```
 "scripts": {
        "cypress:open": "cypress open";
}
```  

Dentro da pasta raiz agora rode o comando:`npm run cypress:open`  
