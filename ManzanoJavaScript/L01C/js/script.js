/*c) Calcular e apresentar o valor do volume de uma lata de  óleo, utilizando a fórmula:  3.14 * raio ^ 2 * altura */

alert("Programa Volume")

largura = parseFloat (prompt("Digite a largura da lata de óleo: "))
altura = parseFloat(prompt("Digite a altura da lata de óleo: "))
raio = largura / 2
volume =  3.14 * raio ^ 2 * altura

alert(`O volume da lata de óleo é: ${volume}`)