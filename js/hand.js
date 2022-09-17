const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

//var nPlayer1 = document.getElementById("player1").value;
//var nPlayer2 = document.getElementById("player2").value;

var countPlayer1 = 0;
var countPlayer2 = 0;
var p1txt;
var nPlayer1 = document.getElementById("player1");
nPlayer1.addEventListener("keyup", (event) => {
  p1txt = event.target.value;
  console.log(p1txt);
});

const DRAW = 0; // Empate
const WIN = 1; // Gana el usuario
const LOSE = 2; // Gana la computadora

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const txtMessage = document.getElementById("message");
const txtMessage2 = document.getElementById("message2");
const btnPlay = document.getElementById("play");
const computerImg = document.getElementById("computerImg");

btnPlay.addEventListener("click", () => {
  if (p1txt == undefined || p1txt == 0) {
    console.log(`Vacio ${p1txt}`);
    p1txt = undefined;
    txtMessage.innerHTML = "Ingrese su nombre.";
  } else {
    txtMessage.innerHTML = "Juego iniciado.";
    
    btnRock.addEventListener("click", () => {
      game(ROCK);
    });

    btnPaper.addEventListener("click", () => {
      game(PAPER);
    });

    btnScissors.addEventListener("click", () => {
      game(SCISSORS);
    });

    document.getElementById("player1").value = "";
    p1txt = undefined;
  }
});

function game(userChoice) {
  const computerOption = calcComputerOption();
  const result = calcResult(userChoice, computerOption);

  computerImg.src = `img/${computerOption}.png`;

  switch (result) {
    case DRAW:
      txtMessage.innerHTML = "Empate.";
      txtMessage2.innerHTML = `${player1} Puntos: ${countPlayer1}`;
      //console.log(`Puntos player 2: ${countPlayer2}`);
      break;
    case WIN:
      countPlayer1++;
      txtMessage.innerHTML = "Ganaste. + 1 punto.";
      txtMessage2.innerHTML = `${player1} Puntos: ${countPlayer1}`;
      //console.log(`Puntos player 2: ${countPlayer2}`);
      break;
    case LOSE:
      txtMessage.innerHTML = "Perdiste.";
      txtMessage2.innerHTML = `${player1} Puntos: ${countPlayer1}`;
      //console.log(`Puntos player 2: ${countPlayer2}`);
      break;
  }
}

function calcComputerOption() {
  const opcNum = Math.floor(Math.random() * 3);
  switch (opcNum) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSORS;
  }
}

// // Function: calcResult -> Calcular el resultado
function calcResult(userChoice, computerOption) {
  if (userChoice === computerOption) {
    return DRAW;
  } else if (userChoice === ROCK && computerOption === SCISSORS) {
    return WIN;
  } else if (userChoice === PAPER && computerOption === ROCK) {
    return WIN;
  } else if (userChoice === SCISSORS && computerOption === PAPER) {
    return WIN;
  } else if (userChoice === ROCK && computerOption === PAPER) {
    return LOSE;
  } else if (userChoice === PAPER && computerOption === SCISSORS) {
    return LOSE;
  } else if (userChoice === SCISSORS && computerOption === ROCK) {
    return LOSE;
  }
}
