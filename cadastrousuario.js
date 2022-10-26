function cadastro() {
    let nome = prompt("Insira seu nome de usuário");
    console.log("Seja bem vindo!");
    let idade = parseInt(
        prompt("Que tal inserir a sua idade, só pra gente conferir?")
    );
    if (idade >= 18) {
        console.log("Certo! Você já pode jogar");
    } else {
        console.log("Sinto muito,mas a mãe não deixa jogar!");
        return false;
    }

    let valor = parseFloat(
        prompt(
            "Vamos lá! Insira o valor em dinheiro e nós lhe daremos as fichas!"
        )
    );
    return valor;
}
