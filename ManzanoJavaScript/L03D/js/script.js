/* impar <- 0

  enquanto impar <= 20 faca
     // sinal de diferente <>
     // impar = o resto da divisao por 2 tem que ser diferente de 0
     // % pega o resto da divisão
     se (impar % 2 <> 0) entao
        Escreval (impar)
     fimse
     impar <- impar + 1 */

alert("Impares de 0 a 20")

impar = 0

while (impar <= 20) {
    if (impar % 2 != 0) {
        console.log(impar)
    }
    impar++
}