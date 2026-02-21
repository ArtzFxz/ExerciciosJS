console.log("=== Exemplo de Array ===")

let frutas = ["Maçã","Banana","Uva","Laranja"]
console.log("Lista de frutas ",frutas)

// Indices:
// Maçã -> Posição 0
// Banana -> Posição 1
// Uva -> Posição 2
// Laranja -> Posição 3

console.log("Primeira fruta", frutas[0])
console.log("Segunda fruta", frutas[1])

frutas[1] = "Morango"
frutas.push("Abacaxi")

frutas.pop()

for(let i = 0; i < frutas.length; i++){
    console.log("Fruta,",frutas[i]);
    
}

frutas.forEach(function(fruta){
    console.log("Fruta:",fruta);
    
})