function apostaMinima(apostar){
    const apostaMinima = 1;
    console.log(`Aposta mínima de ${apostaMinima} ficha`);
    if(apostar >= apostaMinima){
        console.log(`Vamos começar`);
        return true;
    }
    else{
        console.log(`Você não pode jogar, fichas insuficientes`);
        return false;
    };
};