const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

var countPlayer1 = 0;
var countPlayer2 = 0;
var p1txt;
var p2txt;

var nPlayer1 = document.getElementById("player1");
nPlayer1.addEventListener("keyup", (event) => {
  p1txt = event.target.value;
});

var nPlayer2 = document.getElementById("player2");
nPlayer2.addEventListener("keyup", (event) => {
  p2txt = event.target.value;
});

const DRAW = 0; // Empate
const WIN = 1; // Gana el usuario
const LOSE = 2; // Gana la computadora

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const txtMessage = document.getElementById("message");
const txtPointsP1 = document.getElementById("txtPointsP1");
const txtPointsP2 = document.getElementById("txtPointsP2");
const txtComputer = document.getElementById("txtComputer");
const btnPlay = document.getElementById("play");
const computerImg = document.getElementById("computerImg");

// // Function: play -> Jugar 1 persona
btnPlay.addEventListener("click", () => {
  if (p1txt == undefined && p2txt == undefined) {
    txtMessage.innerHTML = "Ingrese un nombre.";
  } else if (p1txt != undefined && p2txt == undefined) {
    txtMessage.innerHTML = "Juego para 1 jugador.";
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
  } else {
    txtMessage.innerHTML = "Juego iniciado para 2 jugadores.";
    btnRock.addEventListener("click", () => {
      game2(ROCK);
    });

    btnPaper.addEventListener("click", () => {
      game2(PAPER);
    });

    btnScissors.addEventListener("click", () => {
      game2(SCISSORS);
    });

    document.getElementById("player1").value = "";
  }
});

function game(userChoice1) {
  const computerOption = calcComputerOption();
  const result = calcResult(userChoice1, computerOption);

  computerImg.src = `img/${computerOption}.png`;
  txtComputer.innerHTML = `${computerOption}`;

  switch (result) {
    case DRAW:
      txtMessage.innerHTML = "Empate.";
      txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
      //txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      break;
    case WIN:
      countPlayer1 += 1;
      txtMessage.innerHTML = "Ganaste. + 1 punto.";
      txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
      //txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      break;
    case LOSE:
      txtMessage.innerHTML = "Perdiste.";
      txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
      //txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      break;
  }
}

function game2(userChoice2) {
  const computerOption = calcComputerOption();
  const result = calcResult(userChoice2, computerOption);

  computerImg.src = `img/${computerOption}.png`;
  txtComputer.innerHTML = `${computerOption}`;

  

  switch (result) {
    case DRAW:
      txtMessage.innerHTML = "Empate.";
      txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
      txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      break;
    case WIN:
      countPlayer1 += 1;
      txtMessage.innerHTML = "Ganaste. + 1 punto.";
      txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
      txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      break;
    case LOSE:
      txtMessage.innerHTML = "Perdiste.";
      txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
      txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
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
function calcResult(userChoice1, computerOption) {
  if (userChoice1 === computerOption) {
    return DRAW;
  } else if (userChoice1 === ROCK && computerOption === SCISSORS) {
    return WIN;
  } else if (userChoice1 === PAPER && computerOption === ROCK) {
    return WIN;
  } else if (userChoice1 === SCISSORS && computerOption === PAPER) {
    return WIN;
  } else if (userChoice1 === ROCK && computerOption === PAPER) {
    return LOSE;
  } else if (userChoice1 === PAPER && computerOption === SCISSORS) {
    return LOSE;
  } else if (userChoice1 === SCISSORS && computerOption === ROCK) {
    return LOSE;
  }
}

// Function: play -> Jugar 2 personas
function finJuego() {
  if (countPlayer1 == 5) {
    txtMessage.innerHTML = `${p1txt} Ganaste la ronda`;
  } else if (countPlayer2 == 5) {
    txtMessage.innerHTML = `${p2txt} Ganaste la ronda.`;
  }
}
