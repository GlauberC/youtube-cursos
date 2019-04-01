console.log("-------------------------- Método Sort --------------------------")
alunos = [
    {matricula: '0005', nome: "Juliana", media: 5},
    {matricula: '0010', nome: "Gabriel", media: 6},
    {matricula: '0011', nome: "Wagner", media: 4},
    {matricula: '0001', nome: "Carlos", media: 6},
    {matricula: '0008', nome: "Thiago", media: 7},
    {matricula: '0009', nome: "Daniela", media: 9},
    {matricula: '0004', nome: "Pedro", media: 9},
    {matricula: '0002', nome: "Maria", media: 4},
    {matricula: '0006', nome: "Patricia", media: 10},
    {matricula: '0007', nome: "Fernando", media: 6},
    {matricula: '0003', nome: "João", media: 7},
    {matricula: '0012', nome: "Helba", media: 1}
]

// Ordenar por matricula

function sortMatricula(alunos){
    function compareMatricula(a, b){
        return a.matricula - b.matricula
    }
    
    console.log( alunos.sort(compareMatricula) )    
}

function sortMedia(alunos){
    // Ordenar por media

    function compareMedias(a, b){
        return a.media - b.media
    }

    console.log( alunos.sort( compareMedias ) ) 

}

sortMedia(alunos)