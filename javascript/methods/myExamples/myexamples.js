function filtrarCasasBaratas(){
    const casas = [
        {cidade: "Rio de janeiro" , preco: 1000000},
        {cidade: "Fortaleza", preco: 300000},
        {cidade: "Natal", preco: 220000},
        {cidade: "Belo Horizonte", preco: 600000},
        {cidade: "São Paulo" , preco: 950000},
        {cidade: "Recife", preco: 290000},
        {cidade: "Porto Alegre", preco: 850000},
    ]
    
    // Filtrar as cidades que custam menos de 500000
    
    const baratas = casas.filter(casa => casa.preco < 500000 )
    console.log(baratas)
}





function alunosAprovadosReprovados(){
    const alunos = [
        {matricula: '0001', nome: "Carlos", media: 6},
        {matricula: '0002', nome: "Maria", media: 4},
        {matricula: '0003', nome: "João", media: 7},
        {matricula: '0004', nome: "Pedro", media: 9},
        {matricula: '0005', nome: "Juliana", media: 5},
        {matricula: '0006', nome: "Patricia", media: 10},
        {matricula: '0007', nome: "Fernando", media: 6},
        {matricula: '0008', nome: "Thiago", media: 7},
        {matricula: '0009', nome: "Daniela", media: 9},
        {matricula: '0010', nome: "Gabriel", media: 6},
        {matricula: '0011', nome: "Wagner", media: 4},
        {matricula: '0012', nome: "Helba", media: 1}
    ]

    //Separar entre Aprovados > 6 ,Recuperação 5 e 6, reprovado <5

    const alunosSeparados = alunos.reduce( (situacao, aluno) => {
        let AprRepRec = aluno.media >= 7 ? 'aprovados' : ( aluno.media < 5 ? 'reprovados' : 'recuperacao' )
        situacao[AprRepRec].push(aluno)
        return situacao
    } , {aprovados: [], recuperacao: [], reprovados: []})

    console.log(alunosSeparados)

}
