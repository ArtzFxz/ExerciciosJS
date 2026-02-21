console.log("=== Exemplo de Switch ===")
const prompt = require("prompt-sync")()

let dia = prompt(
    "Digite um numero de 1 a 7 para representar o dia da semana: \n"+
    "1 - Domingo\n"+
    "2 - Segunda\n"+
    "3 - Terça\n"+
    "4 - Quarta\n"+
    "5 - Quinta\n"+
    "6 - Sexta\n"+
    "7 - Sabado\n"
)

dia = Number(dia)