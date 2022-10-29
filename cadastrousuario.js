function cadastro() {
    let nome = document.getElementById("nome").value;
    alert("Seja bem vindo " + nome + " !");
    let idade = parseInt(document.getElementById("idade").value);
    if (idade >= 18) {
        alert("Certo! Você já pode jogar");
    } else {
        alert("Sinto muito,mas a mãe não deixa jogar!");
        return false;
    }

    let valor = parseFloat(document.getElementById("dinheiro").value);
    alert(idade + " " + valor);
}
