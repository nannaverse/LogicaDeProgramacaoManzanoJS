/* B) pagina 66
 
//    Escreval("Tabuada")
//    Escreval("")
//    Escreval("Você quer ver a tabuada de qual número?")
//    Leia(base)
//    Escreval("")
//    multiplo<-1
//    para multiplo de 1 ate 10 passo 1 faca
//       resultado<- base * multiplo
//       Escreval(base," x",multiplo," =",resultado)
//       multiplo<- multiplo + 1
//       fimpara
 
// ) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. */
 
let base = parseInt(prompt("Qual o numero voce deseja multiplicar"))
 
for(let multiplicador = 1; multiplicador <=10; multiplicador++){
    resultado = base * multiplicador
    console.log(base + " x " + multiplicador + " = " + resultado )
}
 