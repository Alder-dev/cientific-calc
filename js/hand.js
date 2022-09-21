const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

var comprobar = true;

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
const btnRock2 = document.getElementById("rock2");
const btnPaper2 = document.getElementById("paper2");
const btnScissors2 = document.getElementById("scissors2");
const txtMessage = document.getElementById("message");
const txtPointsP1 = document.getElementById("txtPointsP1");
const txtPointsP2 = document.getElementById("txtPointsP2");
const txtComputer = document.getElementById("txtComputer");
const btnPlay = document.getElementById("play");
const btnStop = document.getElementById("stop");
const labelP1 = document.getElementById("labelPlayer1");
const labelP2 = document.getElementById("labelPlayer2");
const btnTurn = document.getElementById("turn");
const computerImg = document.getElementById("computerImg");

// // Function: play -> Jugar 1 persona
btnPlay.addEventListener("click", () => {
  if (p1txt == undefined && p2txt == undefined) {
    txtMessage.innerHTML = "Ingrese un nombre.";
  } else if (p1txt != undefined && p2txt == undefined) {
    txtMessage.innerHTML = "Juego para 1 jugador.";
    playng();
    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";

    btnStop.addEventListener("click", () => {
      txtMessage.innerHTML = "Juego Terminado";
        finJuego();
    })
  } else if (p1txt == undefined && p2txt != undefined) {
    txtMessage.innerHTML = "Juego para 1 jugador.";
    playng2();
    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";

    btnStop.addEventListener("click", () => {
        finJuego();
      })
  } else {
    txtMessage.innerHTML = "Juego para 2 jugadores.";
    labelP1.innerHTML = nPlayer1.value;
    labelP2.innerHTML = nPlayer2.value;
    playng();
      
      btnTurn.addEventListener("click", () => {
        if (comprobar == true){
        playng2();
        } else if (comprobar == false){
          txtMessage.innerHTML = `Siguiente turno`;
        }
      });

      btnStop.addEventListener("click", () => {
        if (countPlayer1 > countPlayer2) {
          txtMessage.innerHTML = `${p1txt} Ganaste la ronda`;
        } else if (countPlayer1 == countPlayer2) {
          txtMessage.innerHTML = "Ronda Empate";
        } 
        else {
          txtMessage.innerHTML = `${p2txt} Ganaste la ronda.`;
        }
        finJuego();
      })
  }
});

function playng() {
  btnRock.addEventListener("click", () => {
    game(ROCK);
  });
  
  btnPaper.addEventListener("click", () => {
    game(PAPER);
  });
  
  btnScissors.addEventListener("click", () => {
    game(SCISSORS);
  });
  return;
}

function playng2() {
  btnRock2.addEventListener("click", () => {
    game2(ROCK);
  });

  btnPaper2.addEventListener("click", () => {
    game2(PAPER);
  });

  btnScissors2.addEventListener("click", () => {
    game2(SCISSORS);
  });
  comprobar = false;
  return;
}

function game(userChoice1) {
  const computerOption = calcComputerOption();
  const result = calcResult(userChoice1, computerOption);

  computerImg.src = `img/${computerOption}.png`;
  txtComputer.innerHTML = `${computerOption}`;

  switch (result) {
    case DRAW:
      txtMessage.innerHTML = `${p1txt} Empate.`;
      if (p2txt == undefined) {
        txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
      } else {
        txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
        txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
        turn = 1;
      }
      break;
    case WIN:
      countPlayer1 += 1;
      txtMessage.innerHTML = `${p1txt} Ganaste. + 1 punto.`;
      if (p2txt == undefined) {
        txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
      } else {
        txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
        txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      }
      break;
    case LOSE:
      txtMessage.innerHTML = `${p1txt} Perdiste.`;
      if (p2txt == undefined) {
        txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
      } else {
        txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
        txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      }
      break;
  }
}

function game2(userChoice2) {
  const computerOption = calcComputerOption();
  const result2 = calcResult2(userChoice2, computerOption);

  computerImg.src = `img/${computerOption}.png`;
  txtComputer.innerHTML = `${computerOption}`;

  switch (result2) {
    case DRAW:
      txtMessage.innerHTML = `${p2txt} Empate.`;
      if (p1txt == undefined) {
        txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      } else {
        txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
        txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      }
      break;
    case WIN:
      countPlayer2 += 1;
      txtMessage.innerHTML = `${p2txt} Ganaste. + 1 punto.`;
      if (p1txt == undefined) {
        txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      } else {
        txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
        txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      }
      break;
    case LOSE:
      txtMessage.innerHTML = `${p2txt} Perdiste.`;
      if (p1txt == undefined) {
        txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      } else {
        txtPointsP1.innerHTML = `${p1txt} Puntos: ${countPlayer1}`;
        txtPointsP2.innerHTML = `${p2txt} Puntos: ${countPlayer2}`;
      }
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
  } else if (
    (userChoice1 === ROCK && computerOption === SCISSORS)
  ) {
    return WIN;
  } else if (
    (userChoice1 === PAPER && computerOption === ROCK)
  ) {
    return WIN;
  } else if (
    (userChoice1 === SCISSORS && computerOption === PAPER)
  ) {
    return WIN;
  } else if (
    (userChoice1 === ROCK && computerOption === PAPER)
  ) {
    return LOSE;
  } else if (
    (userChoice1 === PAPER && computerOption === SCISSORS)
  ) {
    return LOSE;
  } else if (userChoice1 === SCISSORS && computerOption === ROCK) {
    return LOSE;
  }
}

function calcResult2(userChoice2, computerOption) {
  if (userChoice2 === computerOption) {
    return DRAW;
  } else if (
    (userChoice2 === ROCK && computerOption === SCISSORS)
  ) {
    return WIN;
  } else if (
    (userChoice2 === PAPER && computerOption === ROCK)
  ) {
    return WIN;
  } else if (
    (userChoice2 === SCISSORS && computerOption === PAPER)
  ) {
    return WIN;
  } else if (
    (userChoice2 === ROCK && computerOption === PAPER)
  ) {
    return LOSE;
  } else if (
    (userChoice2 === PAPER && computerOption === SCISSORS)
  ) {
    return LOSE;
  } else if (userChoice2 === SCISSORS && computerOption === ROCK) {
    return LOSE;
  }
}
// Function: finJuego
function finJuego() {
    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";
    comprobar = true;
    countPlayer1 = 0;
    countPlayer2 = 0;
    p1txt = undefined;
    p2txt = undefined;
    nPlayer1 = undefined;
    nPlayer2 = undefined;
    txtPointsP1.innerHTML ="";
    txtPointsP2.innerHTML = "";
    txtComputer.innerHTML = "";
  return;
}
