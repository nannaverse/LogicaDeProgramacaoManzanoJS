/*
Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um
automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto
(TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a
distância percorrida com a fórmula DISTANCIA <- TEMPO * VELOCIDADE. Possuindo o valor da
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula
LITROS_USADOS <- DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a
quantidade de litros (LITROS_USADOS) utilizada na viagem.

   Escreval ("Quantidade de litros de combustível gasto")
   Escreval ("")
   Escreval ("Digite o tempo gasto nessa viagem (em horas): ")
   Leia (periodo)
   Escreval ("Digite a velocidade média gasta nessa viagem: ")
   Leia (velocidade)
   distancia <- periodo * velocidade
   litrosUsados <- distancia / 12
   Escreval ("")
   Escreval ("Tempo gasto: ", periodo, "hora(s)")
   Escreval ("Velocidade gasta: ", velocidade, "km/h")
   Escreval ("Distância percorrida: ", distancia, "km")
   Escreval ("Litros de combustíveis usados: ", litrosUsados, "L")*/

alert("Quantidade de litros de combustível gasto")
let tempoGasto = parseInt (prompt("Digite o tempo gasto nessa viagem (em horas): "))
let velocidade = parseFloat(prompt("Digite a velocidade média gasta nessa viagem: "))

let distancia = tempoGasto * velocidade
let litrosUsados = distancia / 12

alert(`Tempo gasto: ${tempoGasto} em hora(s)`)
alert(`Velocidade gasta: ${velocidade} km/h`)
alert(`Distância percorrida: ${distancia} km`)
alert(`Litros de combustíveis usados: ${litrosUsados} L`)
