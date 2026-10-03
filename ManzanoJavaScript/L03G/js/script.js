/*  Escreval ("Sequência de Fibonacci até o 15º termo")

  // fibonacci 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610...

  sequencia1 <- 1
  sequencia2 <- 1

  Escreval (sequencia1)
  Escreval (sequencia2)

  contadora<- 3


  enquanto (contadora <= 15) faca
     resultado <- sequencia1 + sequencia2
     Escreval (resultado)

     sequencia1 <- sequencia2
     sequencia2 <- resultado

     contadora <- contadora + 1
  fimenquanto */

alert("Sequência de Fibonacci até o 15º termo")

let sequencia1 = 1
let sequencia2 = 1

console.log(sequencia1)
console.log(sequencia2)

let contadora = 3

while (contadora <= 15) {
    resultado = sequencia1 + sequencia2
    console.log(resultado)

    sequencia1 = sequencia2
    sequencia2 = resultado

    contadora++
}