// # Exercício 3


// a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

function soma (numA,numB){
    const resul = numA + numB

    return `${numA} + ${numB} total ${resul}`
}
console.log(soma(8,4))

function subtra (numA,numB){
    const menos = numA - numB

    return `${numA} - ${numB} total ${menos}`
}
console.log(subtra(8,4))

function mult (numA,numB){
    const resul = numA * numB

    return `${numA} x ${numB} total ${resul}`
}
console.log(mult(8,4))

function divi (numA,numB){
    const resul = numA / numB

    return `${numA} / ${numB} total ${resul}`
}
console.log(divi(8,4))




// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

const numA = Number(prompt("digite um numero"))
const numB = Number(prompt("digite um numero"))

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
 function adicao (numA,numB){
    console.log("resultado de",numA,"+",numB," foi",numA + numB)
 }
adicao(numA,numB)

function menos (numA,numB){
    console.log("resultado de",numA,"-",numB," foi",numA - numB)
 }
menos(numA,numB)

function multiplicação (numA,numB){
    console.log("resultado de",numA,"x",numB," foi",numA * numB)
 }
multiplicação(numA,numB)

function divis (numA,numB){
    console.log("resultado de",numA,"/",numB," foi",numA / numB)
 }
divis(numA,numB)


// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

