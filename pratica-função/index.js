


function calculoArea(altura,largura) {
  const area =altura*largura
  console.log( "tendo altura",altura,"e largura",largura,"sua area é ", area)
}

calculoArea(5,3)

const minhaFuncao = () =>{ 
    return "Olá, mundo!"
}

console.log(minhaFuncao());


function pratica (nome){
return (`Olá ${nome}`)

}

console.log (pratica("Maria"))
console.log (pratica("Luiz"))
console.log (pratica("João"))
console.log (pratica("Carlos"))

//pratica 2

/*Crie uma função que receba um número como parâmetro e:
verifique se ele é par
Some com o número 10
multiplique por ele mesmo
Retorne `o número ${numero} é par? ${verifica}. Somado com 1O o resultado é ${soma} e multiplicado por ele mesmo é  ${multiplica}`
Extra: Refaça o exercício com a sintaxe de expressão de função */

function prat1(num){
return `o mumero ${num} é par ${num % 2 ==0}
somado com 10 resultado é ${num+10} e multiplica por ele mesmo é ${num*num}`

}
const numInformado =Number( prompt("digita um numero "))
console.log(prat1(numInformado))


//pratica 3

/*Faça uma função
que receba como parâmetros, login e senha. 
No corpo da função declare duas variáveis do 
tipo string loginArmazenado e senhaArmazenada
 com lavores já pré estabelecidos. Usaremos essas
  variáveis para verificar se são iguais às que
   estamos recebendo como parâmetro. Retorne true
    se as duas variáveis forem verdadeiras.*/

const pratica3 = (login, senha) =>{
      const loginArmazenado = "Admin"
      const senhaArmazenada = "bananinha"

      return login === loginArmazenado &&
             senha === senhaArmazenada
}

console.log (pratica3("Admin","bananinha") )


//pratica 4

/*Declare uma função que:
Receba um nome, um ano de nascimento e o ano  Atual 
Retorne uma string com um boleano true para se o usuário for maior de idade e false para se for menor de idade. 
A string retornada deve ter a seguinte mensagem:
“Fulano é maior de idade? true”
Chame a função duas vezes, passando como argumento nomes e anos de nascimento diferentes.*/


function info (nome , dataNas ,anoAtu){

        const comparar = anoAtu - dataNas
        const maioroumenos = comparar >= 18

        console.log ("nome", nome)
        console.log ("nasceu em ", dataNas)
        console.log ("estamos em", anoAtu)
        console.log ("idade",comparar)
        

        return `${nome}, é maior de idade? ${maioroumenos}`

}

let nome = prompt ("qual seu nome")
let dataNas = Number(prompt("ano de nascimento"))
let anoAtu = Number(prompt("ano atual"))

console.log(info(nome,dataNas,anoAtu))