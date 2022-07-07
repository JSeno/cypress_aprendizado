it('Sem testes ainda', () => {  }) // Aqui é onde eu defino os testes começo com o it e o nome do teste seguido do () => { }

// const getSomething = (callback) => { // Aqui é uma promise e se trata de um async function
//     setTimeout(() => { // Aqui estou simulando um delay de 1 segundo
//         callback(12); // Aqui estou chamando a função callback que é uma função que recebe um parametro
//         }, 1000); // Aqui estou dizendo que o delay deve durar 1 segundo já que 1000 é um valor em milisegundos
// };

// const system = () => { // Aqui é uma promise e se trata de um async function
//     console.log('init'); // Aqui é um texto que será mostrado no log
//     const something = getSomething(); // Aqui estou chamando a função getSomething que é uma promise
//     console.log(`Something is ${something}`); // Aqui é um texto que será mostrado no log e ele recebe o valor retornado pela promise
//     console.log('end'); // Aqui é um texto que será mostrado no log
// }

// const system = () => { // Aqui é se trata de um async function
//     console.log('init'); // Aqui é um texto que será mostrado no log
//     getSomething(some => {
//         console.log(`Something is ${some}`); // Aqui estou chamando a função getSomething que é uma promise
//         console.log('end'); // Aqui é um texto que será mostrado no log
//     })
// }

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000);   
    });
    }

    const system = () => {
        console.log('init');
        const prom = getSomething();
        prom.then(some => {
            console.log(`Something is ${some}`);
            
        });
        console.log('end'); 
    }

    system();


system(); // Aqui estou chamando a função system que é uma promise