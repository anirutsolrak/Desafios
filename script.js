let armas = [];
let armaduras = [];
let pocoes = [];
let fim;

alert('Bem vindo ao organizador de inventário');

while (fim !== "nao") {
    let item = prompt('Qual item você deseja incluir no inventário');
    alert('Em qual categoria você deseja por esse item?');
    let categoria = prompt('armas? armaduras? pocoes?');

    if (categoria === "armas") {
        armas.push(item);
    } else if (categoria === "armaduras") {
        armaduras.push(item);
    } else if (categoria === "pocoes") {
        pocoes.push(item);
    }

    alert('Deseja incluir mais algum item no inventário?');
    fim = prompt('sim ou nao?');
}

alert('Gostaria de ver os itens armazenados?');
let confirmacao = prompt('sim ou nao?');

if (confirmacao === 'sim') {
    alert('Armas: ' + armas.join());
    alert('Armaduras: ' + armaduras.join());
    alert('Poções: ' + pocoes.join());
} else {
    alert('Até breve');
}
