function escolhaJogo() {
    let resposta = true
    while (resposta) {
      console.log("Opção 1 jogo de Adivinhação")
      console.log("Opção 2 jogo de Craps")
      escolha = parseFloat(prompt("Qual jogo voçê vai escolhe"))
  
      if (escolha == 1) {
        console.log("Boa Escolha! Jogo de Adivinhação")
        //coloca a função do jogo de adi1vinhação
      } else if (escolha == 2) {
        console.log("Boa Escolha! Jogo de Craps..")
        // coloca a função do jogo de Craps
      } else {
        console.log("Escolha Novamente. Número invalido")
      }
  
    }
  }
