console.log("=== Exemplo de FOR ===");
for(let i=1; i<=5; i++){
    console.log("Número: ", i);
}



console.log("=== Exemplo de WHILE ===");
let contador = 1
while(contador <= 5){
    console.log("Contador: ", contador)
    contador++
}



console.log("=== Exemplo de ForEach ===");
let alunos = ["Ana","Bruno","Carlos","Daniella"]
alunos.forEach(function(aluno){
    console.log("Aluno: ", aluno);
})

function somar(num1,num2){
    return num1 + num2
}
let result = somar(10,5)
console.log("Resultado da soma: ",result);


// Arrow Function
const multiplicar = (a,b) => {
    return a * b
}
console.log("Multiplicação: ",multiplicar(4,3))