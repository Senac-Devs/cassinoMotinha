function jogoAdivinhacao() {
    let segredo = Math.floor(Math.random() * 10);
    let jogoRodando = true;
    let tentativas = 0;

    while (jogoRodando) {
        if (tentativas == 5) {
            console.log("Você ultrapassou");
            return false;
        } else {
            tentativas++;

            let palpite = prompt("Insira o palpite");
            palpite = parseInt(palpite);

            if (palpite == segredo) {
                console.log("Parabéns!");
                return true;
            } else if (palpite > segredo) {
                console.log("Menos!");
            } else {
                console.log("Mais!");
            }
        }
    }
}
