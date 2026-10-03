 /* contadora <- 1

   Repita
      Escreval ("Digite o", contadora, "º número: ")
      Leia (numero)

      fatorial <- 1
      multiplicacao <- 1

      Repita
         fatorial <- fatorial * multiplicacao
         multiplicacao <- multiplicacao + 1
      Ate (multiplicacao > numero)
      
      somaTotal <- somaTotal + fatorial
      contadora <- contadora + 1
   Ate (contadora > 15)
   
   Escreval("Soma de todos os fatoriais: ", somaTotal)*/

   alert("Soma dos Fatoriais de 15 números inteiros")

   let contadora = 1
   let somaTotal = 0

do{
   let numero = parseInt(prompt("Digite o " + contadora + "º número: "))
   let fatorial = 1
   let multiplicacao = 1 
    
   do {
    fatorial = fatorial * multiplicacao 
    multiplicacao = multiplicacao + 1
   }while (multiplicacao <= numero)

    somaTotal = somaTotal + fatorial
    contadora++
}while (contadora <= 15)

    alert("Soma de todos os fatoriais: " + somaTotal)