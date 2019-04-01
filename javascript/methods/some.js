console.log("-------------------------- Método some --------------------------")

casas = [
    {cidade: "Rio de janeiro" , preco: 1000000},
    {cidade: "Fortaleza", preco: 300000},
    {cidade: "Natal", preco: 220000},
    {cidade: "Belo Horizonte", preco: 600000},
    {cidade: "São Paulo" , preco: 950000},
    {cidade: "Recife", preco: 290000},
    {cidade: "Porto Alegre", preco: 850000},
    // {cidade: "Goianinha", preco: 35000},
]

const algumaMilhao =  casas.some( casa => casa.preco >= 1000000 )
console.log(algumaMilhao)

const muitoBarata =  casas.some( casa => casa.preco <= 100000 )
console.log(muitoBarata)