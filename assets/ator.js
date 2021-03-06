// código do ator

// variaveis do ator
let xAtor = 85;
let yAtor = 366;

let colisao = false;

let meusPontos = 0;

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
        if (podeSeMoverParaBaixo()) {
            yAtor += 3;
        }

    }
    
    if (keyIsDown(LEFT_ARROW)) {
        if (podeSeMoverParaEsquerda()) {
            xAtor -= 3;
        }

    }

    if (keyIsDown(RIGHT_ARROW)) {
        if (podeSeMoverParaDireita()) {
            xAtor += 3;
        }
        
    }
    
}

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        // O ultimo argumento seria o diametro do circulo (no caso nosso ator) no nosso caso seria 30 mas passamos a metade.
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);

        if (colisao) {
            somDaColisao.play();
            perdePonto();
            voltaAtorParaPosicaoInicial();

        }

    }

}

function incluiPontos() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(meusPontos, width / 5, 27);

}

function marcaPonto() {
    if (yAtor < 15) {
        meusPontos += 1;
        somDoPonto.play();
        voltaAtorParaPosicaoInicial();

    }

}

function perdePonto() {
    if (meusPontos > 0) {
        meusPontos -= 1;

    }

}

function voltaAtorParaPosicaoInicial() {
    xAtor = 85;
    yAtor = 366;

}

function podeSeMoverParaBaixo() {
    return yAtor < 366;
}

function podeSeMoverParaDireita() {
    return xAtor + 30 < 500;
}

function podeSeMoverParaEsquerda() {
    return xAtor > 0;
}