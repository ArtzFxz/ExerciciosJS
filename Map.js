console.log("=== Aula de Map ===")

let numeros = [1, 2, 3, 4, 5]
console.log("Array original: ", numeros);

// Estrutura do map:
// array.map(function(elemento){
//  return transformacao})

let dobrados = numeros.map(function(numero){
    return numero * 2
})
console.log("Array dobrado: ",dobrados)

let triplicados = numeros.map( numero => numero * 3)
console.log("Array triplicado:", triplicados)

let alunos = [
    {nome: "Ana", nota:8},
    {nome: "Bruno", nota:6},
    {nome: "Carlos", nota:9}
]

let nomes = alunos.map( aluno => {
    return aluno.nome
})

console.log("Somente nomes:",nomes)
let nomess = ["Ana", "Maria", "Luana"]

let maiusculos = nomess.map(nome =>{
    return nome.toUpperCase()
})