/* Escreval ("Soma e Média de 10 valores númericos")

 contadora <- 1
 somatorio <- 0

 enquanto contadora <= 10 faca
    Escreval ("Digite o número ", contadora, "º : ")
    Leia (numero)
    
    somatoria <- somatoria + numero
    contadora <- contadora + 1
 fimenquanto
 
 media <- somatoria / 10
 
 Escreval ("Somatoria: ", somatoria, " Média Aritmética: ", media) */

alert("Soma e Média de 10 valores númericos")

let contadora = 1
let somatorio = 0

while (contadora <= 10) {
    let numero = parseInt(prompt("Digite o número " + contadora + "º : "))

    somatorio = somatorio + numero
    contadora++
}

let media = somatorio / 10

alert("Somatório: " + somatorio + " Média Aritmética: " + media)