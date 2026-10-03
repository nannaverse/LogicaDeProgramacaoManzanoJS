/* Escreval ("Digite o valor da prestação (R$): ")
      Leia (valor)
      Escreval ("")
      Escreval ("Digite a taxa de juros diária: ")
      Leia (taxa)
      Escreval ("")
      Escreval ("Digite o tempo de atraso em dias: ")
      Leia (periodo)
      Escreval ("")
      prestacao <- valor + (valor * (taxa/100) * periodo)
      Escreval ("O valor a ser pago é: R$", prestacao)*/

alert("Prestação em atraso")

let valor = parseFloat(prompt("Digite o valor da prestação (R$): "))
let taxa = parseFloat (prompt("Digite a taxa de juros diária: "))
let periodo = parseInt (prompt("Digite o tempo de atraso em dias: "))

let prestacao = valor + (valor * (taxa/100) * periodo)

alert(`O valor a ser pago é: R$ ${prestacao}`)