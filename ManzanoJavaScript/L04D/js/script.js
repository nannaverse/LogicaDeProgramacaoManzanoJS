/* quadro <- 1
   graosQuadro <- 1

   Repita
   somaTotal <- somaTotal + graosQuadro
   graosQuadro <- graosQuadro * 2
   quadro <- quadro + 1
   Ate (quadro > 64)
   
   Escreval("O total de grãos de trigo no tabuleiro é: ", somaTotal) */

alert("Grãos do Tabuleiro")

let quadro = 1
let graosQuadro = 1
let somaTotal = 0

do {
    somaTotal = somaTotal + graosQuadro
    graosQuadro = graosQuadro * 2
    quadro++
} while (quadro <= 64)

    console.log("O total de grãos de trigo no tabuleiro é: " + somaTotal)