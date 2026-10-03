/*  Escreval ("Digite um número para descobrir a tabuada de 1 até 10: ")
   Leia (numero)
   multiplicacao <- 1
   enquanto (multiplicacao <= 10) faca
      valor <- numero * multiplicacao
      Escreval(numero, " x", multiplicacao, " =", valor)
      multiplicacao <- multiplicacao + 1
   fimenquanto */ 

   alert("Tabuada de 1 até 10: ")

   let numero = parseInt (prompt("Digite um número para descobrir a tabuada de 1 até 10: "))
   let multiplicacao = 1

   while (multiplicacao <= 10){
    let valor = numero * multiplicacao
    console.log(numero + " x" + multiplicacao + " =" + valor)
    multiplicacao++
   }