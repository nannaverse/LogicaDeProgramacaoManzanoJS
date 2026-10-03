/*    Escreval ("Digite o dividendo (inteiro): ")
   Leia (dividendo)
   Escreval ("Digite o divisor (inteiro): ")
   Leia (divisor)

   resto <- dividendo

   Se dividendo >= divisor entao
      Repita
         resto <- resto - divisor
         quociente <- quociente + 1

      Ate (resto < divisor)
   Fimse
   
   Escreval ("")
   Escreval ("O resultado inteiro da divisão (quociente) é: ", quociente)
   Escreval ("O resto da divisão é: ", resto) */

alert("Resultado Divisão")

let quociente = 0
let dividendo = parseInt(prompt("Digite o dividendo (inteiro): "))
let divisor = parseInt(prompt("Digite o divisor (inteiro): "))

let resto = dividendo

if (dividendo >= divisor) {
    do {
        resto = resto - divisor
        quociente++
    } while (resto >= divisor)
}

alert("O resultado inteiro da divisão (quociente) é: " + quociente)
alert("O resto da divisão é: " + resto)