function setup() {
  createCanvas(400, 500);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#D2EBB5");
  } else {
    background("rgb(238,178,178)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🐹", xJogador1, 100);
  text("🐸", xJogador2, 200);
  text("🐼", xJogador3, 300);
  text("🦊", xJogador4, 400);
}

function desenhaLinhaDeChegada() {
  rect(350, 0, 10, 500);
}

function verificaVencedor() {
  if (xJogador1 > 350) {
    text("Jogador 1 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador2 > 350) {
    text("Jogador 2 venceu!", 50, 200);
    noLoop();
  }
    if (xJogador3 > 350) {
    text("Jogador 3 venceu!", 50, 200);
    noLoop();
}
if (xJogador4 > 350) {
    text("Jogador 4 venceu!", 50, 200);
    noLoop(); 
}
}
function keyReleased() {
  if (key == "a") {
    xJogador1 += random(20);
  }
  if (key == "s") {
    xJogador2 += random(20);
  }
  if (key == "d") {
    xJogador3 += random(20);
  }
  if (key == "f") {
    xJogador4 += random(20);
  }
}
