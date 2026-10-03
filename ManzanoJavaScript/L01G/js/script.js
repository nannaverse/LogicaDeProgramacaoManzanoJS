/* Escreval ("Digite o primeiro número: ")
 Leia (A)
 Escreval ("Digite o segundo número: ")
 Leia (B)
 Escreval ("Digite o terceiro número: ")
 Leia (C)
 Escreval ("Digite o quarto número: ")
 Leia (D)
 somaAB <- A + B
 somaAC <- A + C
 somaAD <- A + D
 somaBC <- B + C
 somaBD <- B + D
 somaCD <- C + D

 Escreval ("-----SOMA------")
 Escreval ("O valor da primeira soma é: ", somaAB)
 Escreval ("O valor da segunda soma é: ", somaAC)
 Escreval ("O valor da terceira soma é: ", somaAD)
 Escreval ("O valor da quarta soma é: ", somaBC)
 Escreval ("O valor da quinta soma é: ", somaBD)
 Escreval ("O valor da sexta soma é: ", somaCD)

 multiplicacaoAB <- A * B
 multiplicacaoAC <- A * C
 multiplicacaoAD <- A * D
 multiplicacaoBC <- B * C
 multiplicacaoBD <- B * D
 multiplicacaoCD <-  C * D

 Escreval ("-----MULTIPLICAÇÃO-----")
 Escreval ("O valor da primeira multiplicação é: ", multiplicacaoAB)
 Escreval ("O valor da segunda multiplicação é: ", multiplicacaoAC)
 Escreval ("O valor da terceira multiplicação é: ", multiplicacaoAD)
 Escreval ("O valor da quarta multiplicação é: ", multiplicacaoBC)
 Escreval ("O valor da quinta multiplicação é: ", multiplicacaoBD)
 Escreval ("O valor da sexta multiplicação é: ", multiplicacaoCD) */

alert("Propriedade Distributiva")

let A = parseInt(prompt("Digite o primeiro número: "))
let B = parseInt(prompt("Digite o segundo número: "))
let C = parseInt(prompt("Digite o terceiro número: "))
let D = parseInt(prompt("Digite o quarto número: "))

let somaAB = A + B
let somaAC = A + C
let somaAD = A + D
let somaBC = B + C
let somaBD = B + D
let somaCD = C + D

alert("--SOMA--")
alert("O valor da primeira soma é: " + somaAB)
alert("O valor da segunda soma é: " + somaAC)
alert("O valor da terceira soma é: " + somaAD)
alert("O valor da quarta soma é: " + somaBC)
alert("O valor da quinta soma é: " + somaBD)
alert("O valor da sexta soma é: " + somaCD)

let multiplicacaoAB = A * B
let multiplicacaoAC = A * C
let multiplicacaoAD = A * D
let multiplicacaoBC = B * C
let multiplicacaoBD = B * D
let multiplicacaoCD = C * D

alert("--MULTIPLICAÇÃO--")
alert("O valor da primeira multiplicação é: " + multiplicacaoAB)
alert("O valor da segunda multiplicação é: " + multiplicacaoAC)
alert("O valor da terceira multiplicação é: " + multiplicacaoAD)
alert("O valor da quarta multiplicação é: " + multiplicacaoBC)
alert("O valor da quinta multiplicação é: " + multiplicacaoBD)
alert("O valor da sexta multiplicação é: " +  multiplicacaoCD) 