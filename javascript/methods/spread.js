console.log("-------------------------- Operator Spread --------------------------")

// Forma de usar 1
    let clan = ["João", "Paulo", "Kelly", "Natasha"]
    let novosIntegrantes = ['Kennedy', "Francisco", "Nathalia"]

    // Método antigo
    let concatenando = clan.concat(novosIntegrantes)
    console.log(concatenando)

    // Método novo
    let spread = ["João", "Paulo", ...novosIntegrantes, "Kelly", "Natasha", ]   // No fim ou no inicio ou até no meio
    console.log(spread)

// Forma de usar 2
    let frase = "Esta eh uma frase para teste"

    // Metodo antigo
    let caracteres = frase.split('')
    console.log(caracteres)

    // Método novo
    let charSpread = [...frase]
    console.log(charSpread)

// Forma de usar 3
    function somaN(n1, n2, n3){
        return n1 + n2 + n3
    }

    // Metodo antigo
        let resultado = somaN(1, 2, 3)
        console.log(resultado)

    // Método novo
    let dados = [1, 2, 3]
    resultado = somaN(...dados)
    console.log(resultado)
