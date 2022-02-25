// código do carro

// variaveis carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 263, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        // primeiro passamos a imagem carregada, valor do eixo X, valor do eixo Y, valor da altura da imagem, valor do 
        // comprimento da imagem
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);

    }

}

function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];

    }

}

function voltaPosicaoInicialCarro() {
    for (let i = 0; i < imagemCarros.length; i ++) {
        if (passouTodaATela(xCarros[i])) {
            xCarros[i] = 600;
        }

    }

}

function passouTodaATela(xCarro) {
    return xCarro < -50;
}