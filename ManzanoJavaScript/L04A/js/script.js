/* contadora <- 15
      
      Repita
      quadrado <- contadora * contadora
      Escreval ("O quadro de", contadora, " é: ", quadrado)
      contadora <- contadora + 1
      Ate (contadora > 200)
      
      do while repete até que se torne falso, diferente do repita
      */

alert("Quadrados dos números inteiros de 15 a 200.")

let contadora = 15

do {
    let quadrado = contadora * contadora;
    console.log(`O quadrado de ${contadora} é: ${quadrado}`);
    contadora++;
} while (contadora <= 200);


