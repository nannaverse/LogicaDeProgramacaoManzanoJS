/*   Escreval ("----Conversão de Real (R$) para Dolar ($)----")
  Escreval ("Digite o valor da cotação em dólar: ")
  Leia (cotacao)
  Escreval ("Digite a quantidade de reais: ")
  Leia (quantidade)

  moedaEstrangeira <- quantidade / cotacao

  Escreval ("O valor convertido em real para dólar é: ", moedaEstrangeira) */

  alert("Conversão de Real (R$) para Dólar ($)")

  let cotacao = parseFloat (prompt("Digite o valor da cotação em dólar: "))
  let quantidade = parseFloat(prompt("Digite a quantidade de reais: "))

  const moedaEstrangeira = quantidade / cotacao 

  alert("O valor convertido em real para dólar é: " + moedaEstrangeira)