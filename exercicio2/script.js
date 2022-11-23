// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function somas (numA,numB){
    const soma = numA + numB

    return `${numA} + ${numB} total ${soma}`
}
console.log(somas(8,4))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function MaiorQ (numA,numB){
    const maiorOuMenor = numA > numB

    return `o ${numA} é > que o ${numB}  ${maiorOuMenor}`
}
console.log(MaiorQ(3,2))

// c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

function ePar (numA){
    const resp =  (numA % 2 ===0)

    return `o numero ${numA} é par ${resp}`
}
console.log(ePar(4))

// d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  

function D (salario){
const inss = salario - (salario * 0.1)

return `seu salario de ${salario} descontado o INSS ${inss}`

}
console.log (D(2000))



