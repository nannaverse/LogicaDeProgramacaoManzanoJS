/*  Para contadora de 1 ate 200 faca
      Se (contadora % 4 = 0) entao
         Escreval (contadora)
      fimse
   Fimpara */

alert("Divisíveis por 4 menor que 200")

for (let contadora = 1; contadora < 200; contadora++) {
    if (contadora % 4 == 0) {
        console.log(contadora)
    }
}