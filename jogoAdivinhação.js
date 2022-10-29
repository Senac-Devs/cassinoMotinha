let segredo;
let tentativas = 0;
let fichasApostadas = 0;

function ganhou() {
    fichas = fichas + 2 * fichasApostadas;
    document.getElementById("total-fichas").innerHTML = "fichas:" + fichas;
    fichasApostadas = 0;
    tentativas = 0;
    document.getElementById("fichas").disabled = false;
}
function perdeu() {
    fichasApostadas = 0;
    tentativas = 0;
    document.getElementById("fichas").disabled = false;
}

function apostar() {
    if (fichasApostadas == 0) {
        fichasApostadas = parseInt(document.getElementById("fichas").value);
        if (fichasApostadas <= fichas) {
            fichas = fichas - fichasApostadas;
            document.getElementById("total-fichas").innerHTML =
                "fichas:" + fichas;
            document.getElementById("fichas").value = "";
            document.getElementById("fichas").disabled = true;
        } else {
            fichasApostadas = 0;
        }
    }
}

function geraSegredo() {
    return Math.floor(Math.random() * 10);
}
segredo = geraSegredo();

function jogoAdivinhacao() {
    apostar();
    if (fichasApostadas > 0) {
        if (tentativas == 5) {
            alert("Você ultrapassou");
            perdeu();
        } else {
            tentativas++;

            let palpite = prompt("Insira o palpite");
            palpite = parseInt(palpite);

            if (palpite == segredo) {
                alert("Parabéns!");
                ganhou();
            } else if (palpite > segredo) {
                alert("Menos!");
            } else {
                alert("Mais!");
            }
        }
    } else {
        alert("Fichas insuficientes");
    }
}
