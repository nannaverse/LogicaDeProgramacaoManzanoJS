/* celsius <- 10

      
      enquanto celsius <= 100 faca
      fahrenheit <- (9 * celsius + 160)/5
      Escreval ("Celsius ", celsius, "ºC e Fahrenheit: ", fahrenheit, "ºF")
      celsius <- celsius + 10
      fimenquanto */

alert("Celsius e Fahrenheit (10 em 10)")

let celsius = 10
let fahrenheit = 0

while (celsius <= 100) {
    fahrenheit = (9 * celsius + 160) / 5
    console.log("Celsius " + celsius + "ºC e Fahrenheit: " + fahrenheit + "ºF")
    celsius += 10
}