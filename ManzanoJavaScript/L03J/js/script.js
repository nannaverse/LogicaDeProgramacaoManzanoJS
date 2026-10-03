 /* contadora <- 50

   enquanto contadora <= 70 faca
      soma <- soma + contadora

      quantidadePares <- quantidadepares + 1
      //para saber quantos dividir na media

      contadora <- contadora + 2
   fimenquanto

   media <- soma/quantidadePares
   
   Escreval ("Soma dos números pares: ", soma, "  Média Aritmética: ", media) */

   alert("Soma e Média Aritmética (Pares de 50 a 70)")

   let contadora = 50
   let soma = 0
   let quantidadePares = 0

   while (contadora <= 70){
    soma = soma + contadora
    quantidadePares = quantidadePares + 1
    contadora += 2
   }

  let media = soma / quantidadePares

   alert("Soma dos números pares: " + soma + " Média Aritmética: " + media)
