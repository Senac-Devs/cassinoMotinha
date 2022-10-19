function pagamentoAposta(ganhou,fichasApostadas) {
  if (ganhou) {
    fichasApostadas = fichasApostadas * 2;
  } else {
    fichasApostadas = 0
  };
  return fichasApostadas;
};
