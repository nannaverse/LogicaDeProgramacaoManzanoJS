
// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).
 
//  Escreval("PROGRAMA SOMATORIO")
//    Escreval("")
//    para i de 1 ate 100 passo 1 faça
//         somatorio <- somatorio + i
//       i<- i + 1
//    fimpara
//    Escreval("A soma dos números de 1 a 100 é: ",somatorio)
 
alert("Programa somatório de número (1 à 100)")
somatorio = 0
for (let numero = 1; numero <= 100; numero++){
    somatorio = somatorio + numero
}
    console.log("O somatório dos números de 1 à 100 é :" + somatorio)
 