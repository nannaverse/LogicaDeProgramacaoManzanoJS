/*    Para contadora de 1 ate 10 passo 2 faca
   
   fatorial <- 1

      Para multiplicador de 1 ate contadora faca
         fatorial <- fatorial * multiplicador
      Fimpara

      Escreval ("O fatorial do ímpar ", contadora, "! é: ", fatorial)

   Fimpara */

alert("Resultado dos Fatoriais Ímpares de 1 a 10")

let fatorial

for (let contadora = 1; contadora <= 10; contadora += 2) {

    fatorial = 1

    for (let multiplicador = 1; multiplicador <= contadora; multiplicador++) {
        fatorial = fatorial * multiplicador
    }
    console.log("O fatorial do ímpar " + contadora + "! é: " + fatorial)
}