/* par <- 2
   acumulador <- 0
   
   enquanto (par <= 500) faca
   acumulador <- par + acumulador
   par <- par + 2
   fimenquanto
   
   Escreval ("O somatório dos valores pares de 1 a 500 é: ", acumulador) */

alert("Soma dos pares de 1 até 500")

let par = 2 
let acumulador = 0 

while (par <= 500){
    acumulador = par + acumulador
    par += 2
}

console.log("O somatório dos valores pares de 1 a 500 é: " + acumulador)
