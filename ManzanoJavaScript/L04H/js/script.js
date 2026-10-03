/*    Escreval ("----Área total dos cômodos da Residência----")


   Repita
      Escreval ("Digite o nome do cômodo: ")
      Leia (nome)
      Escreval ("Digite a largura do cômodo (m): ")
      Leia (largura)
      Escreval ("Digite o comprimento do cômodo (m): ")
      Leia (comprimento)
      area <- largura * comprimento
      Escreval ("Deseja acrescentar outros cômodos? (SIM/NAO): ")
      Leia (resposta)
      quantidadeComodos <- quantidadeComodos + area
   Ate (resposta = "NAO")

   Escreval ("Área total do(s) cômodo(s): ", quantidadeComodos, "m^2") */

alert("Área total dos cômodos da Residência")

let quantidadeComodos = 0
let resposta
let nome

do {
    nome = prompt("Digite o nome do cômodo: ")
    let largura = parseFloat(prompt("Digite a largura do cômodo (m): "))
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (m): "))
    let area = largura * comprimento
    resposta = prompt("Deseja acrescentar outros cômodos? (SIM/NAO): ")
    quantidadeComodos = quantidadeComodos + area
} while (resposta !== "NAO")

alert("Área total do(s) cômodo(s): " + quantidadeComodos + "m^2")