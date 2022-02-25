// código do ator

// variaveis do ator
let xAtor = 100;
let yAtor = 366;

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