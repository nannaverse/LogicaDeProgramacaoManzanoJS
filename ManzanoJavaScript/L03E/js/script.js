/* Escreval ("Resultado das potências do 3 de 0 ao 15")
  Escreval ("")
  
  resultado <-1

  enquanto (expoente <= 15) faca
  Escreval ("3 ^", expoente, " =", resultado)
  resultado <- resultado * 3
  expoente <- expoente + 1
  fimenquanto */

alert("Resultado das potências do 3 de 0 ao 15")

let resultado = 1
let expoente = 0

while (expoente <= 15){
    console.log("3 ^" + expoente + " =" + resultado)
    resultado = resultado * 3
    expoente++
}