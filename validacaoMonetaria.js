function validaMonetario(dinheiro) {
    const precoFicha = 5;

    if (dinheiro >= precoFicha) {
        console.log("pode jogar!!!");
        return true;
    } else {
        console.log("valor insuficiente!!");
        return false;
    }
}
