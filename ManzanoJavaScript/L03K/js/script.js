/* Resposta <- "SIM"

enquanto (resposta <> "NAO")  faca
   Escreval ("Digite o nome do cômodo: ")
   Leia (nome)

   Escreval ("Digite a largura do cômodo (m): ")
   Leia (largura)

   Escreval ("Digite o comprimento do cômodo (m): ")
   leia (comprimento)
   area <- largura * comprimento

   Escreval ("A área do(a) ", nome, " é: ", area, "m^2")
   areaTotal <- areaTotal + area

   Escreval ("")
   Escreval ("Deseja continuar calculando? (SIM/NAO): ")
   Leia (resposta)
fimenquanto

Escreval ("")
Escreval ("Àrea total da sua residência: ", areaTotal, " m^2") */

alert("Calcule área residencial")

let resposta = "SIM"
let area = 0
let areaTotal = 0

while (resposta != "NAO") {
    let nome = prompt("Digite o nome do cômodo: ")
    let largura = parseFloat(prompt("Digite a largura do cômodo (m): "))
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo (m): "))

    area = largura * comprimento

    alert("A área do(a) " + nome + " é: " + area + "m^2")
    areaTotal = areaTotal + area

    resposta = prompt("Deseja continuar calculando? (SIM/NAO): ")

}

alert("Àrea total da sua residência: " + areaTotal + " m^2")