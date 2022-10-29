let segredo;
let tentativas = 0;
let fichasApostadas = 0;
function apostar() {
    if (fichasApostadas == 0) {
        fichasApostadas = parseInt(document.getElementById("fichas").value);
        if (fichasApostadas <= fichas) {
            fichas = fichas - fichasApostadas;
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
            return false;
        } else {
            tentativas++;

            let palpite = prompt("Insira o palpite");
            palpite = parseInt(palpite);

            if (palpite == segredo) {
                alert("Parabéns!");
                return true;
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
