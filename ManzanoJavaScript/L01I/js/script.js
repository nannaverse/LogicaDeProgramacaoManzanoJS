/*  Escreval ("Digite o primeiro número inteiro: ")
   Leia (A)
   Escreval ("Digite o segundo ´numero inteiro: ")
   Leia (B)
   quadradoDaDiferenca <- (A - B) ^ 2

   Escreval ("O quadrado da diferença desses números é: ", quadradoDaDiferenca) */

   alert("Quadrado da Diferença")

   let numero1 = parseInt(prompt("Digite o primeiro número inteiro: "))
   let numero2 = parseInt (prompt("Digite o segundo número inteiro: "))

   let quadradoDaDiferenca = (numero1 - numero2) ** 2 //potência ** 

   alert(`O quadrado da diferença desses números é: ${quadradoDaDiferenca}`)