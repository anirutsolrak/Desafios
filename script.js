document.getElementById("encriptar").addEventListener("click", encriptar);
document.getElementById("descriptar").addEventListener("click", descriptar);

// Defina suas substituições
let substituicoes = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar() {
    let input = document.getElementById("entrada").value.toLowerCase();
    console.log(input);

    let resultados = [];

    for (let index = 0; index < input.length; index++) {
        let letra = input[index];

        // Verifica se há uma substituição para a letra atual
        if (substituicoes[letra]) {
            resultados.push(substituicoes[letra]);
        } else {
            resultados.push(letra);
        }
    }

    document.getElementById("saida").value = resultados.join('');
}

function descriptar() {
    let input = document.getElementById("entrada").value.toLowerCase();
    console.log(input);

    let resultados = [];
    let index = 0;

    while (index < input.length) {
        let sequenciaEncontrada = false;

        // Verifica se há uma substituição reversa para a sequência atual
        for (let substituicao in substituicoes) {
            if (input.startsWith(substituicoes[substituicao], index)) {
                resultados.push(substituicao);
                index += substituicoes[substituicao].length;
                sequenciaEncontrada = true;
                break;
            }
        }

        // Se não houver substituição reversa, mantém a letra original
        if (!sequenciaEncontrada) {
            resultados.push(input[index]);
            index++;
        }
    }

    document.getElementById("saida").value = resultados.join('');
}