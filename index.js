let valor;
let nome;
let idade;
let fichas = 0;

function cadastro() {
    nome = document.getElementById("nome").value;
    alert("Seja bem vindo " + nome + " !");
    idade = parseInt(document.getElementById("idade").value);
    if (idade >= 18) {
        alert("Certo! Você já pode jogar");
    } else {
        alert("Sinto muito,mas a mãe não deixa jogar!");
        return false;
    }

    valor = parseFloat(document.getElementById("dinheiro").value);
    alert(idade + " " + valor);
    let troco;
    [fichas, troco] = compraFichas(valor);
    document.getElementById("total-fichas").innerHTML = "fichas:" + fichas;
}
