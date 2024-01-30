if (document.getElementById("operacao").value == "criptografar"){
document.getElementById("processar").addEventListener("click", encriptar);

function encriptar() {
    let a = 'ai';
    let e = 'enter';
    let i = 'imes';
    let o = 'ober';
    let u = 'ufat';

    let input = document.getElementById("entrada").value.toLowerCase();
    console.log(input);

    let resultados = [];

    for (let index = 0; index < input.length; index++) {
        switch (input[index]) {
            case 'a':
                resultados.push(a);
                break;
            case 'e':
                resultados.push(e);
                break;
            case 'i':
                resultados.push(i);
                break;
            case 'o':
                resultados.push(o);
                break;
            case 'u':
                resultados.push(u);
                break;
            default:
                resultados.push(input[index]);
        }
    }

    document.getElementById("saida").value = resultados.join('');
}
}
else if (document.getElementById("operacao").value == "criptografar"){document.getElementById("saida").value = ""}
else {"alert seleciona uma opcao"}