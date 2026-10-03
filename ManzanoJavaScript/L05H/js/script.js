/*   Escreval ("Digite a base da potência: ")
   Leia (base)
   EScreval ("Digite o expoente da potência: ")
   Leia (expoente)
   
   potencia <- 1
   
   Para contadora de 1 ate expoente faca
   potencia <- potencia * base
   Fimpara
   
   Escreval ("O valor da potência é: ", potencia)*/

alert("Potência")

let base = parseInt(prompt("Digite a base da potência: "))
let expoente = parseInt(prompt("Digite o expoente da potência: "))

let potencia = 1

for (let contadora = 1; contadora <= expoente; contadora++){
    potencia = potencia * base
}

alert(`O valor da potência é: ${potencia}`)