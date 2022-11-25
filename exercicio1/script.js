





// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.


const nome = prompt("digite seu nome")

function perNome (nome){
    

    return `Olá ${nome} `
}
console.log( perNome(nome))



// b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.


//criei um arrow com um parametro que quando add um valor ele automaticamente e multiplicado de 1 até 10 
const tabuada = (val) =>{
    return `
    
RESULTADO DA TABUADA arrow
    ${val} x 1 = ${val * 1}
    ${val} x 2 = ${val * 2}
    ${val} x 3 = ${val * 3}
    ${val} x 4 = ${val * 4}
    ${val} x 5 = ${val * 5}
    ${val} x 6 = ${val * 6}
    ${val} x 7 = ${val * 7}
    ${val} x 8 = ${val * 8}
    ${val} x 9 = ${val * 9}
    ${val} x 10 = ${val * 10}`
}
console.log (tabuada(5))

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
    function tabuada2 (val) {
    return `
    
RESULTADO DA TABUADA função
    ${val} x 1 = ${val * 1}
    ${val} x 2 = ${val * 2}
    ${val} x 3 = ${val * 3}
    ${val} x 4 = ${val * 4}
    ${val} x 5 = ${val * 5}
    ${val} x 6 = ${val * 6}
    ${val} x 7 = ${val * 7}
    ${val} x 8 = ${val * 8}
    ${val} x 9 = ${val * 9}
    ${val} x 10 = ${val * 10}`
    }
console.log (tabuada2(11))


