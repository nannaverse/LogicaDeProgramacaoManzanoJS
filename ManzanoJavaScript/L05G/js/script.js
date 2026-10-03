/*   potencia <- 1

   Para contadora de 0 ate 15 faca
      Escreval ("3 elevado a ", contadora, " = ", potencia)
      potencia <- potencia * 3
   Fimpara
*/

alert("Potência do 3 de 1 até 15")

let potencia = 1

for (let contadora = 0; contadora <= 15; contadora++){
    console.log(`3 ^ ${contadora} = ${potencia}`)
    potencia *= 3
}