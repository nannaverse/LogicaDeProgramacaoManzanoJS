/*  Para contadora de 0 ate 20 faca passo 1
      Se (contadora %2 <> 0) entao
         Escreval (contadora)
      Fimse
   Fimpara */

alert("Valores Númericos Impares")

for (let contadora = 0; contadora <= 20; contadora++) {
    if (contadora % 2 != 0) {
        console.log(contadora)
    }
}