/*    Escreval ("Divisíveis por 4 menores que 200")

   contadora <- 1

   Repita
      se ( contadora % 4 = 0) entao
         Escreval (contadora)
      fimse
      contadora <- contadora + 1
   Ate (contadora > 199) */


alert("Divisíveis por 4 menores que 200")

contadora = 1

do {
    if (contadora % 4 === 0) {
        console.log(contadora)
    } contadora++
} while (contadora < 200)