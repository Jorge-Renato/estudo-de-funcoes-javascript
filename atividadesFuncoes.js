// // ### ** Atividade Funções com parâmetro 1 – Saudar Pessoa **

// //     Crie uma função chamada `saudarPessoa(nome)` que receba o nome de uma pessoa como parâmetro e exiba a mensagem:

// // ** "Olá, [nome]! Seja bem-vindo(a)!" **

// function saudacao(nome) {
//     console.log("ola " + nome + "! Seja bem vindo (a)!")
// }
// saudacao("Jorge")

// //------------------------------------------------------------------

// function fazerSuco(fruta) {
//     console.log("Fazer suco de " + fruta)
// }
// fazerSuco("morango")
// fazerSuco("abacaxi")

// //------------------------------------------------------------------

// function saudarPessoa(nome) {
//     console.log("ola, " + nome + "! Seja bem-vindo!")
// }
// saudarPessoa("Jorge")
// saudarPessoa("Ana")

// function dobro(numero) {
//     console.log("O dobro é " + numero * 2)
// }
// dobro(2);
// dobro(4);
// dobro(6);

// function mostrarAluno(nome, curso) {
//     console.log("Aluno: " + nome + " Curso: " + curso);
// }
// mostrarAluno("Jorge", "Desenvolvimento em JavaScript")


// function multiplicar(n1, n2) {
//     console.log(n1 * n2)
// }
// multiplicar(2, 2)

// //--------------------------------------------------------------------------

// //   ***** FUNÇÃO ANONIMA *******

// // A função anonina , diferente da função convencional,
// // ela é guardada dentro de uma variavel seja LET ou CONST, mas sempre recomendavel usar CONST
// //  para que não seja reatribuida e é uma boa pratica de codar

// // ex 1:

// // let multiplicar = function (n1, n2) {
// //     console.log(n1 * n2)
// // }
// // multiplicar(2, 5)


// // ex 2:

// const soma = function (num1, num2) {
//     console.log(num1 + num2)
// }
// soma(5, 5)

// exemplo 3:

// let mostrarMensagem = function(nome){
//     console.log("Ola " + nome + " Seja bem vindo!")
// }
// mostrarMensagem("Jorge");

//       ********* FUNÇÃO COM RETURN *********

// / Na função com return, definimos os parâmetros e o valor que será retornado.
// Para usar esse valor, é necessário armazenar o resultado em uma variável
// ou exibir o retorno diretamente no console.log.


// exemplo:

// function parimp(n) {
//     if (n % 2 == 0) {
//         return "par!"
//     } else {
//         return "impar!"
//     }
// }

// console.log( parimp(4))

// exercicio 1:

// function triplo(numero){
//     return 3 * numero
// }
// let resultado = triplo (15)
// console.log(resultado)

// exercicio 2:

// function nomeCompleto(nome, sobrenome) {
//     return nome + " " + sobrenome
// }
// let resultado = nomeCompleto("Jorge", "Renato")
// console.log(resultado)


// exercicio 3

// function resultadoFinal(n1, n2) {
//     let soma = n1+n2
//     let multiplicacao = soma * 2

//     return multiplicacao
// }
//  let final = resultadoFinal(2,5)
//  console.log(final)

// exercicio 4:

// function calcularNotaFinal(n1, n2) {
//     let soma = n1 + n2
//     let media = soma / 2
//     if(media >= 7){
//         return "aprovado!"
//     }else{
//         return "reprovado!"
//     }
// }
// const notaFinal = calcularNotaFinal(7, 6)
// console.log(notaFinal)

// exercicio 5:

// function calcularDesconto(preco, porcen) {

//     if (valor > 0.5) {
//         return "desconto invalido"
//     }

//     let valorFinal = preco - (preco * porcen)
//     return valorfinal
// }
// const desconto = calcularDesconto(75, 0.35)
// console.log(desconto)

// ************** EXERCICIOS **************

// function verificarIdade(idade){
// if(idade > 18){
//     console.log ("Maior de idade")
// } else{
//     console.log ("Menor de idade")
// }
// }
// verificarIdade(17)

// -----------------------------------------------------------------------------

// function verificarAprovação(n1, n2) {
//     let soma = n1 + n2
//     let media = soma / 2
//     if (media >= 7) {
//         console.log("Aprovado!")
//     } else {
//         console.log("Reprovado!")
//     }
// }
// verificarAprovação(10, 4)

// // -----------------------------------------------------------------------------

// const minhaFuncao = function (n) {
//     console.log("O dobro é: " +  n * 2)
// }
// minhaFuncao(4)

// -----------------------------------------------------------------------------

// function declarar(p1, p2) {
//     console.log(p1 + " " + p2)
// }
// declarar("Treinando", "Logica")

// -----------------------------------------------------------------------------

function maiorDeIdade(nome, idade) {
    if( idade >= 18){
        console.log(nome + " é maior de idade")
    }else{
        console.log(nome + "  é menor de idade")
    }
}
maiorDeIdade("Jorge", 32)
