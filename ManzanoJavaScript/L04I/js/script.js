/* primeiraLeitura <- verdadeiro

   Repita
      Escreval ("Digite o", contadora+1, "º número: ")
      Leia (numero)
      contadora <- contadora + 1
      
      Se (numero >= 0) entao
         Se primeiraLeitura = verdadeiro entao
            maior <- numero
            menor <- numero
            primeiraLeitura <- falso
         Senao
            Se (numero > maior) entao
               maior <- numero
            Fimse

            Se (numero < menor) entao
               menor <- numero

            Fimse
         Fimse
      Fimse
   Ate (numero < 0 )

   se (primeiraLeitura = falso) entao
      Escreval ("")
      Escreval ("Maior valor digitado: ", maior)
      Escreval ("Menor valor digitado: ", menor)
   senao
      Escreval ("")
      Escreval ("Nenhum valor positivo foi informado.")
   fimse
   */

alert("Programa Maior e Menor valor de números apresentados");

let primeiraLeitura = true
let contadora = 0
let maior
let menor
let numero

do {
    numero = parseInt(prompt(`Digite o ${contadora + 1}º número: `));
    contadora++;

    if (numero >= 0) {
        if (primeiraLeitura === true) {
            maior = numero;
            menor = numero;
            primeiraLeitura = false;
        } else {
            if (numero > maior) {
                maior = numero;
            }
            if (numero < menor) {
                menor = numero;
            }
        }
    }
} while (numero >= 0);

if (primeiraLeitura === false) {
    console.log("");
    console.log("Maior valor digitado: ", maior);
    console.log("Menor valor digitado: ", menor);
} else {
    console.log("");
    console.log("Nenhum valor positivo foi informado.");
}