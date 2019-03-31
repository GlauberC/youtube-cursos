console.log("-------------------------- Método Map --------------------------")
// EXEMPLO 1

    // # Método Map: 
        const num = [2, 3, 6, 5, 1]
        console.log(num)
        
    // Maneira Antiga
        const novoNum = []
        for (let i =0; i< num.length; i++){
            novoNum.push(num[i] * 2)
        }
        console.log(novoNum)
    // Maneira Nova:
        let novoNum2 = num.map( numero => numero*2 )
        console.log(novoNum2)

// EXEMPLO 2
    const nomes = ["glauber", "pedro", "joão", "calos"]
    const nomesMaiusculo = nomes.map(nome => { return nome.toUpperCase()})
    console.log(nomesMaiusculo) 