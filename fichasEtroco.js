function compraFichas(dinheiroRecebido) {
    quantidadeFichas = parseInt(dinheiroRecebido / 5)
    troco = dinheiroRecebido - quantidadeFichas * 5 
    return [quantidadeFichas, troco]
} 
