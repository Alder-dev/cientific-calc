const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

//var nPlayer1 = document.getElementById("player1").value;
//var nPlayer2 = document.getElementById("player2").value;

var countPlayer1 = 0;
var countPlayer2 = 0;
var nPlayer1 = "";

const DRAW = 0; // Empate
const WIN = 1; // Gana el usuario
const LOSE = 2; // Gana la computadora

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const txtMessage = document.getElementById("message");
const txtMessage2 = document.getElementById("message2");
const btnPlay = document.getElementById("play");

btnPlay.addEventListener("click", () => {
  if (nPlayer1 == "") {
    nPlayer1 = document.getElementById("player1").value;
    txtMessage.innerHTML = "Ingrese su nombre.";
  } else {
    txtMessage.innerHTML = "Juego iniciado.";
    document.getElementById("player1").value = "";

    btnRock.addEventListener("click", () => {
      game(ROCK);
    });

    btnPaper.addEventListener("click", () => {
      game(PAPER);
    });

    btnScissors.addEventListener("click", () => {
      game(SCISSORS);
    });
  }
});

function game(userChoice) {
  const computerOption = Math.floor(Math.random() * 3);

  const result = calcResult(userChoice, computerOption);

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
