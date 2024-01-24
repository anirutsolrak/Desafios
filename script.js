function escolherCaminho(opcao) {
    let escolhaDoCaminho = document.getElementById("resultado");
    let escolhaA = document.getElementById("opcao1");
    let escolhaB = document.getElementById("opcao2");
    let botaoProximo = document.getElementById("opcao3");

    if (opcao === 1) {
        escolhaDoCaminho.textContent = 'Você escolheu o caminho da esquerda. Algo aconteceu!';
        escolhaA.disabled = true;
        escolhaB.disabled = true;
        botaoProximo.style.display = 'block'; // Torna o botão "Próximo" visível
    } else if (opcao === 2) {
        escolhaDoCaminho.textContent = 'Você escolheu o caminho da direita. Algo diferente aconteceu!';
        escolhaA.disabled = true;
        escolhaB.disabled = true;
        botaoProximo.style.display = 'block'; // Torna o botão "Próximo" visível
    }
if (botaoProximo.style.display === 'block') {
    escolhaA.disabled = false;
    escolhaB.disabled = false;
}
}