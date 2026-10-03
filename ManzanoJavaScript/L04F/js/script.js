/* 
   Repita
      Escreval ("Digite o ", quantidadeNumerosLidos + 1, "º número: ")
      Leia (numero)
      se numero >= 0 entao
         somatorio <- somatorio + numero
         quantidadeNumerosLidos <- quantidadeNumerosLidos + 1
      fimse

   Ate (numero < 0)

   se quantidadeNumerosLidos > 0 entao
      media <- somatorio/quantidadeNumerosLidos
      Escreval ("")
      Escreval ("Total de valores lidos: ", quantidadeNumerosLidos)
      Escreval ("Total do somatório: ", somatorio)
      Escreval ("Média Aritmética: ", media)
   senao
      Escreval ("")
      Escreval ("Nenhum número positivo foi digitado.")
   fimse */

   alert("Soma, Média Aritmética e números lidos")

   let somatorio = 0
   let quantidadeNumerosLidos = 0
   let media = 0

   do {
    numero = parseInt(prompt(`Digite o ${quantidadeNumerosLidos + 1}º número: `))
    if (numero>= 0){
        somatorio = somatorio + numero
        quantidadeNumerosLidos++
    }
   } while (numero >= 0)

    if (quantidadeNumerosLidos > 0){
        media = somatorio / quantidadeNumerosLidos
        console.log(`Total de valores lidos: ${quantidadeNumerosLidos}`)
        console.log(`Total do somatório: ${somatorio}`)
        console.log(`Média Aritmética: ${media}`)
    }else {
        console.log(`Nenhum número positivo foi digitado`)
    }
