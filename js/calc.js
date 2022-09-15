var numScreen = "0";
var screenWinum = "yes";
var usePoint = "no";
var numWait = 0;
var opWait = "";
var solution = "";
let porcentCalc = document.getElementById("porcentCalc");

// Function: numPress -> Presionar un numero
function ingNum(x) {
  if (x != ".") {
    if (numScreen == "0" || screenWinum == "yes") {
      document.calc.inputOp.value = x;
      numScreen = x;
    } else if (x != ".") {
      document.calc.inputOp.value += x;
      numScreen += x;
    }
  }
  if (x == "." && usePoint == "no" && numScreen == "0") {
    document.calc.inputOp.value = "0.";
    numScreen = x;
    usePoint = "yes";
  } else if (x == "." && usePoint == "no") {
    document.calc.inputOp.value += x;
    numScreen += x;
    usePoint = "yes";
  } else if (x == "." && usePoint == "yes") {
  }
  screenWinum = "no";
}
// Function: opPress -> Presionar un operador
function ingOp(y) {
  if (opWait == "") {
    numWait = document.calc.inputOp.value;
    document.calc.inputOp.value += y;
    opWait = y;
    screenWinum = "no";
    numScreen = "";
    usePoint = "no";
  }
}
// Function: calcResult -> Calcular el resultado
function calcResult() {
  if (opWait != "") {
    solution = numWait + opWait + numScreen;
    document.calc.inputRes.value = eval(solution);
    numScreen = eval(solution);
    screenWinum = "yes";
    opWait = "";
    usePoint = "no";
  }
}

// Function: multi -> Multiplicar
function multi() {
    if (opWait == "") {
        numWait = document.calc.inputOp.value;
        document.calc.inputOp.value += "*";
        opWait = "*";
        screenWinum = "no";
        numScreen = "";
        usePoint = "no";
    }
}

// Function: raiz -> Calcular la raiz cuadrada
function raiz() {
  if (opWait == "") {
    document.calc.inputRes.value = Math.sqrt(numScreen);
    screenWinum = "yes";
    opWait = "";
    usePoint = "no";
  }
}
// Function: seno -> Calcular el seno
function seno() {
  if (opWait == "") {
    document.calc.inputRes.value = Math.sin(numScreen);
    screenWinum = "yes";
    opWait = "";
    usePoint = "no";
  }
}
// Function: coseno -> Calcular el coseno
function coseno() {
    if (opWait == "") {
        document.calc.inputRes.value = Math.cos(numScreen);
        screenWinum = "yes";
        opWait = "";
        usePoint = "no";
    }
}

// Function: tangente -> Calcular la tangente
function tangente() {
    if (opWait == "") {
        document.calc.inputRes.value = Math.tan(numScreen);
        screenWinum = "yes";
        opWait = "";
        usePoint = "no";
    }
}

// Function: logaritmo -> Calcular el logaritmo
function log() {
    if (opWait == "") {
        document.calc.inputRes.value = Math.log10(numScreen);
        screenWinum = "yes";
        opWait = "";
        usePoint = "no";
    }
}

// Function: porcent -> Calcular el porcentaje
function porcent(num, porcentCalc) {
    if (opWait == "") {
        document.calc.inputRes.value = num * porcentCalc / 100;
        screenWinum = "yes";
        opWait = "";
        usePoint = "no";
    }

    return (num * porcent) / 100;
}

// Function: Clear -> Limpiar la pantalla
function clearInput() {
  numScreen = "0";
  screenWinum = "yes";
  usePoint = "no";
  numWait = 0;
  opWait = "";
  solution = "";
  document.calc.inputOp.value = "0";
  document.calc.inputRes.value = "";
}
