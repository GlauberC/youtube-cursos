console.log("-------------------------- Método Reduce --------------------------")


// EXEMPLO 1
    const numR = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let soma = 0

    // Método antigo
        for(let i = 0; i<numR.length; i++){
            soma = soma + numR[i]
        }
        console.log(soma)

    // Método Novo
        soma = numR.reduce((somaAcumlador, numero) => somaAcumlador + numero, 0)
        console.log(soma)

// EXEMPLO 2
        const pessoas = [
            {nome: 'Glauber', idade: 29},
            {nome: 'João', idade: 17},
            {nome: 'Paula', idade: 19},
            {nome: 'Arthur', idade: 13},
            {nome: 'Kelly', idade: 25},
        ]
        
        const pessoasAgrupadas = pessoas.reduce((acumulador, pessoa) => {
            const propMaiorOuMenor = pessoa.idade >= 18 ? 'maiores' : 'menores'
            acumulador[propMaiorOuMenor].push(pessoa)
            return acumulador
        },
         {maiores: [], menores: []})
        console.log(pessoasAgrupadas)