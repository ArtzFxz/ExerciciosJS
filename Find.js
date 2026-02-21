console.log("=== Exemplo de Find ===")
let numeros = [10, 20, 30, 40, 50]
let encontrado = numeros.find(numero =>{
    return numero > 25
})

console.log("Numero encontrado:",encontrado)
let alunos = [
    { id: 1, nome: "Ana", nota: 8},
    { id: 2, nome: "Bruno", nota: 6},
    { id: 3, nome: "Carlos", nota: 9}
]

let alunoEncontrado = alunos.find(aluno =>{
    return aluno.id === 2
})

console.log("Aluno encontrado:", alunoEncontrado)