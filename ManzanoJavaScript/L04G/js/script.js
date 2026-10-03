/*   numero <- 1

   Repita
      Se (numero % 2 <> 0) entao

         fatorial <- 1
         contadora <- 1

         Repita
            fatorial <- fatorial * contadora
            contadora <- contadora + 1
         Ate (contadora > numero)
         Escreval ("O fatorial de ", numero, "! é igual a: ", fatorial)

      Fimse
      
      numero <- numero + 1
   Ate ( numero > 10) */

alert("Fatorial dos números impares de 1 a 10")

let numero = 1

do {
    if (numero % 2 != 0) {
        let fatorial = 1
        let contadora = 1

        do {
            fatorial = fatorial * contadora
            contadora++
        } while (contadora <= numero)
        alert("O fatorial de " + numero + "! é igual a: " + fatorial)
    }
    numero++
} while (numero <= 10)