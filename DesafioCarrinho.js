//! DESAFIO DO CARRINHO js

const carrinho = [
  { id: 1, nome: "Notebook", preco: 3000, quantidade: 1, promocao: true },
  { id: 2, nome: "Mouse", preco: 100, quantidade: 2, promocao: false },
  { id: 3, nome: "Teclado", preco: 200, quantidade: 1, promocao: true },
  { id: 4, nome: "Monitor", preco: 1200, quantidade: 1, promocao: false }
];


let totalPreco = carrinho.reduce((acumulador, car) =>{
    return acumulador + car.preco * car.quantidade
},0)


console.log("Valor Total do Carrinho: ",totalPreco);

const produtoPromo = carrinho.filter(promo => promo.promocao == true).map(promo => promo.nome)
console.log("PROMOÇÃO!",produtoPromo);



const encontrar = carrinho.find(produto => produto.id == 3)
console.log("Produto:",encontrar);

const subTotal = carrinho.map(subT => subT.preco * subT.quantidade)
console.log(subTotal);