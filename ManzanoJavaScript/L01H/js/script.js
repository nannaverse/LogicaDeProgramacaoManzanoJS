/* Escreval ("----Calcule o volume de um Retângulo----")
 Escreval ("Digite o comprimento da caixa retangular: ")
 Leia (comprimento)
 Escreval ("Digite a largura da caixa retangular: ")
 Leia (largura)
 Escreval ("Digite a altura da caixa retangular: ")
 Leia (altura)
 volume <- comprimento * largura * altura

 Escreval ("O volume da caixa retangular é: ", volume) */

alert("Calcule o volume de um Retângulo")

let comprimento = parseFloat(prompt("Digite o comprimento da caixa retangular: "))
let largura = parseFloat(prompt("Digite a largura da caixa retangular:"))
let altura = parseFloat(prompt("Digite a altura da caixa retangular: "))

let volume = comprimento * largura * altura

alert("O volume da caixa retangular é: " + volume)