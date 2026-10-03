  /* Escreval ("Potenciação")
   Escreval ("Digite a base dessa potência: ")
   Leia (B)
   Escreval ("Digite o expoente dessa potência: ")
   Leia (C)

   resultado <- 1
   contadora <- 1

   enquanto (contadora <= C ) faca
      resultado <- resultado * B
      contadora <- contadora + 1
   fimenquanto


   Escreval (B, " ^", C, " =", resultado)*/

   alert("Potenciação")

   let base = parseInt(prompt("Digite a base dessa potência: "))
   let expoente = parseInt(prompt("Digite o expoente dessa potência: "))

   let resultado = 1
   let contadora = 1

   while (contadora <= expoente){
    resultado = resultado * base
    contadora++
   }

   console.log(base + " ^ " + expoente + " =" + resultado)