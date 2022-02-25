// código do ator

// variaveis do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;

function mostraAtor() {
    // primeiro passamos a imagem carregada, valor do eixo X, valor do eixo Y, valor da altura da imagem, valor do 
    // comprimento da imagem
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yAtor += 3;
    }

    if (keyIsDown(LEFT_ARROW)) {
        xAtor -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        xAtor += 3;
    }
}

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        // O ultimo argumento seria o diametro do circulo (no caso nosso ator) no nosso caso seria 30 mas passamos a metade.
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);

        if (colisao) {
            colidiu();
        }
    }

}

function colidiu() {
    xAtor = 100;
    yAtor = 366;
}