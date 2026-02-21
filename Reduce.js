console.log("=== Aula Reduce ===");

let numeros = [10, 20, 30, 40]
console.log("Array original:", numeros);

// Estrutura do Reduce

// array.reduce(function(acumulador, elementoAtual){
//      return novoValor
// }, valorInicial)

let soma = numeros.reduce(function(acumulador, numero){
    return acumulador + numeros
},0)

console.log("Soma total: ",soma)

let alunos = [
    {nome: "Ana", nota:8},
    {nome: "Bruno", nota:6},
    {nome: "Carlos", nota:10}
]

let totalNotas = alunos.reduce((acumulador, aluno) =>{
    return acumulador + aluno.nota
},0)

let media = totalNotas / alunos.length
console.log("Média da turma:",media);
