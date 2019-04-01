console.log("-------------------------- Método Find --------------------------")
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

const daniela = alunos.find( aluno => aluno.matricula === '0009')
console.log(daniela)

const nobody = alunos.find( aluno => aluno.matricula === '1111')
console.log(nobody)

console.log("-------------------------- Método Find Index --------------------------")

const indexDaniela = alunos.findIndex( aluno => aluno.matricula === '0009')
console.log( indexDaniela )

const indexNobody = alunos.findIndex( aluno => aluno.matricula === '1111')
console.log(indexNobody)