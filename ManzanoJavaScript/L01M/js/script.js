/*   Escreval ("Digite o primeiro número: ")
  Leia (A)
  Escreval ("Digite o segundo número: ")
  Leia (B)
  EScreval ("Digite o terceiro número: ")
  Leia (C)

  quadradoDaSoma<- (A + B + C) ^ 2
  
  Escreval ("Soma dos quadrados dos três termos: ", quadradoDaSoma) */

alert("Quadrado da soma de 3 valores")

let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))

let quadradoDaSoma = (numero1 + numero2 + numero3) ** 2

alert(`Quadrados da soma dos três termos: ${quadradoDaSoma}`)