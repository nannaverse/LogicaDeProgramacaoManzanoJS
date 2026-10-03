
/*  contadora <- 2

  Repita
  somaPares <- somaPares + contadora
  contadora <- contadora + 2
  Ate (contadora > 500)

  Escreval ("Soma de todos os valores pares de 1 até 500: ", somaPares) */

alert("Somatório dos valores pares existentes na faixa de 1 até 500")

let contadora = 2
let somaPares = 0

do {
    somaPares = somaPares + contadora
    contadora += 2
} while (contadora <= 500)

    console.log("Soma de todos os valores pares de 1 até 500: " + somaPares)