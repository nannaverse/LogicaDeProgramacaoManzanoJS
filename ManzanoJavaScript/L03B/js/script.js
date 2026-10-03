/*  
   soma <- 1
   enquanto (soma <=100) faca
      resultado <- resultado + soma
      soma <- soma + 1
   fimenquanto
      Escreval ("O total da soma dos cem primeiros números é: ", resultado) */

alert("Soma de 100 números")

let soma = 1
let resultado = 0

while (soma <= 100){
    resultado = resultado + soma
    soma++
}

console.log("O total da soma dos cem primeiros números é: " + resultado)