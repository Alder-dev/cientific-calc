var numScreen = "0";
var screenWinum = "yes";
var usePoint = "no";
var numWait = 0;
var opWait = "";
var solution = "";

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
    numWait = numScreen;
    document.calc.inputOp.value += y;
    opWait = y;
    screenWinum = "yes";
    numScreen = "";
    usePoint = "no";
  }
}

function calcResult(){
    
}