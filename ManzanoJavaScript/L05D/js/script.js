/*  Para contadora de 2 ate 500 passo 2 faca
         somatorio <- somatorio + contadora
   Fimpara
   
   Escreval ("Somatório dos números pares de 1 até 500: ", somatorio) */

alert("Somatório dos pare sexistentes de 1 até 500")

let somatorio = 0

for (let contadora = 2; contadora <= 500; contadora +=2) {
    somatorio = somatorio + contadora
}

alert(`Somatório dos números pares de 1 até 500: ${somatorio}`)