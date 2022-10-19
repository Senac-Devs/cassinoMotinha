function Dados() {
  let jogada = prompt("Digite 'Rodar' para jogar os dados!");
  let dado1;
  let dado2;
  if (jogada == "Rodar"
    || jogada == "rodar") {
    dado1 = parseInt(Math.random() * 6) + 1;
    dado2 = parseInt(Math.random() * 6) + 1;
    junto = (dado1 + dado2)
    console.log("\nVocê tirou " + junto);
  }
  else if (jogada != "Rodar"
    || jogada != "rodar") {
    console.log("Palavra inválida!\ntente de novo!");
    junto = Dados();
  }
  return junto;
};
function craps() {
  let junto;
  let tentativas = 5;
  junto = Dados(junto);
  if (junto == 7
    || junto == 11) {
    console.log("Natural! Você venceu!");
    return true;
  }
  else if (junto == 2
    || junto == 3
    || junto == 12) {
    console.log("Craps! Você perdeu!");
    return false;
  }
  else {
    console.log("Tire esse número novamente para vencer!");
    const ponto = junto;
    while (tentativas != 0) {
      junto = Dados();
      if (ponto == junto) {
        console.log("Você venceu!");
        return true;
      }
      else if (junto == 7) {
        console.log("Você perdeu!");
        return false;
      }
      else {
        tentativas--;
        console.log("\nVocê tem " + tentativas + " tentativas!");
      };
      if (tentativas == 0) {
        console.log("Suas tentativas acabaram!\nVocê perdeu!")
        return false;
      };
    };
  };
};