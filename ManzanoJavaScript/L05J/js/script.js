/* Para celsius de 10 ate 100 passo 10 faca
   fahrenheit <- (9 * celsius + 160) / 5
   Escreval ("Temperatura em Celsius: ", celsius, "ºC")
   Escreval ("")
   Escreval ("Temperatura em Farenheit: ", fahrenheit, "ºF")
   Escreval ("")
   Fimpara */

alert("Graus Celsius e Fahrenheit de 10 em 10")

let fahrenheit = 0

for (let celsius = 10; celsius <= 100; celsius += 10) {
    fahrenheit = (9 * celsius + 160) / 5
    console.log("Temperatura em Celsius: " + celsius + "ºC")
    console.log("Temperatura em Farenheit: " + fahrenheit + "ºF")
}