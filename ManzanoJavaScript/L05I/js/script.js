/*   Escreval ("Série de Fibonacci até o 15º termo:")
   Escreval ("")

   anterior <- 0
   atual <- 1

   Para contadora de 1 ate 15 faca
      Escreval (contadora, "º termo: ", atual)

      proximo <- anterior + atual

      // atualiza os valores
      anterior <- atual
      atual <- proximo
   Fimpara */

alert("Série de Fibonacci até o 15º termo:")

let anterior = 0
let atual = 1
let proximo

for (let contadora = 1; contadora <= 15; contadora++) {
    console.log(`${contadora} º termo ${atual}`)
    proximo = anterior + atual
    anterior = atual
    atual = proximo

}

