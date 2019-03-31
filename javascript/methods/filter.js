console.log("-------------------------- Método Filter --------------------------")
const numF = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// EXEMPLO 1

    let mult2 = [];

    // Método antigo

    for(let i = 0; i < numF.length; i++){
        if (numF[i] % 2 === 0){
            mult2.push(numF[i])
        }
    }
    console.log(mult2)
    mult2 = [];

    // Método Novo

    mult2 = numF.filter( numero => numero % 2 === 0)
    console.log(mult2)

// EXEMPLO 2

    const nomesF = ["Glauber", "Pedro", "João", "Calos", "Joana", 'Juliana']

    const nomesComJ = nomesF.filter( nome => nome[0] === 'J')
    console.log(nomesComJ)


