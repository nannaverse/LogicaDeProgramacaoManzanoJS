/*   Escreval ("-------TROCA DE VARIÁVEIS-------")
   Escreval ("")
   Escreval ("Digite uma palavra: ")
   Leia (palavra)
   Escreval ("")
   Escreval ("Digite o antônimo dessa palavra: ")
   Leia (antonimo)
   palavraAntonimo <- palavra
   palavra <- antonimo
   antonimo <- palavraAntonimo
   Escreval ("")
   Escreval ("Palavra recebe Antônimo: ", palavra)
   Escreval ("")
   Escreval ("Antônimo recebe Palavra: ", antonimo) */

alert("Troca de variáveis")

let palavra = prompt("Digite uma palavra: ")
let antonimo = prompt("Digite o antônimo dessa palavra: ")

let palavraAntonimo = palavra
palavra = antonimo
antonimo = palavraAntonimo

alert(`Palavra recebe Antônimo: ${palavra}`)
alert(`Antônimo recebe Palavra ${antonimo}`)