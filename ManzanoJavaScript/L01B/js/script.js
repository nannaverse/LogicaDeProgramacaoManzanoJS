/* Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de
conversão é C <- (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/

alert("Programa Fahrenheit em Celsius")

let fahrenheit = parseInt(prompt("Digite a temperatura em graus Fahrenheit: "))
let celsius = (fahrenheit- 32) * (5/9)

alert(`A tempertura em graus Fahrenheit ${fahrenheit}°F em Celsius é ${celsius}°C`)