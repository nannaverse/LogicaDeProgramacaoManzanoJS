/*   Escreval ("----Conversão de Dolar ($) para Real (R$)----")
  Escreval ("Digite o valor da cotação em dólar: ")
  Leia (cotacao)
  Escreval ("Digite a quantidade de dólar(es): ")
  Leia (quantidade)
  
  moedaBrasileira <- cotacao * quantidade

  Escreval ("O valor convertido em dólar para real é: ", moedaBrasileira) */

  alert("Conversão Dólar ($) para Real (R$)")

  let cotacao = parseFloat (prompt("Digite o valor da cotação do dólar: "))
  let quantidade = parseFloat (prompt("Digite a quantidade de dólar(es): "))

  moedaBrasileira = cotacao * quantidade

  alert(`O valor convertido em dólar para real é: ${moedaBrasileira}`)