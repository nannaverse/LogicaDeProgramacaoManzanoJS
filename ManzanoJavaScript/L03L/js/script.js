/* primeiroNumero <- verdadeiro

   enquanto positivo >= 0 faca
      Escreval ("Digite um número: ")
      Leia (positivo)

      se positivo >= 0 entao
         se primeiroNumero entao
            maiorNumero <- positivo
            menorNumero <- positivo
            primeiroNumero <- falso
         senao
            se positivo > maiorNumero entao
               maiorNumero <- positivo
            fimse

            se positivo < menorNumero entao
               menorNumero <- positivo
            fimse
         fimse
      fimse
   fimenquanto

   Escreval ("O maior número: ", maiorNumero )
   Escreval ("")
   Escreval ("O menor número: ", menorNumero) */

alert("Programa números positivos")

let positivo = 0
let maiorNumero
let menorNumero
let primeiroNumero = true

while (positivo >= 0) {
    positivo = parseInt(prompt("Digite um número: "))

    if (positivo >= 0) {
        if (primeiroNumero) {
            maiorNumero = positivo
            menorNumero = positivo
            primeiroNumero = false
        } else {
            if (positivo > maiorNumero) {
                maiorNumero = positivo
            }

            if (positivo < menorNumero) {
                menorNumero = positivo
            }
        }
    }
}


alert(`O maior número: ${maiorNumero}`)
alert(`O menor número: ${menorNumero}`)