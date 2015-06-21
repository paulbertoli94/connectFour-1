$(document).ready(function(){

  console.log("jQuery online!")

  $("#newGame").click(function(){
    startGame();
  });

  $(".square").click(function(){
    nextMove(this);
  });

  startGame();


  var redWin= 0;
  var blueWin = 0;

});

function startGame(){
  document.turn = "Red";
  if(Math.random()< 0.5){
    document.turn= "Blue";
  }
  document.winner = null;
  setMessage(document.turn + " gets to start!");
}

function setMessage(msg){
  document.getElementById("message").innerText = msg;
}


function nextMove(square){
  if (document.winner !=null){
    setMessage(document.winner + " all ready won the game!");
  }
  else if (square.innerText==""){
    square.innerText = document.turn;
    switchTurn();
  } else {
    setMessage("That square has been taken");
  }
}

// function paintFunction (turn) {
// if (document.turn === red){
// code to paint red circle;
// } else{
//    code to paint blue circle;
// }
// }

function switchTurn(){

  if (document.turn ==="Red"){
    document.turn = "Blue";
    setMessage(document.turn + "'s" + " Turn!");
  }else {
    document.turn = "Red";
    setMessage(document.turn + "'s" + " Turn!");
  }
}

// function checkForWinner (turn){
// var result = false;
// if(checkRowAndDiagnols(){}
// return result;
// }

// function checkRowAndDiagnols(a,b,c,d, turn){
// var result = false;
// if(getBox(a)==turn && getBox(b)==turn && getBox(c)==turn &&getBox(d)===turn){
//  result = true;
// }
// return result;
// }

function getBox(number){
  return document.getElementById("s"+number).innerText;
}

function clearBox(number){
  return document.getElementById("s" + number).innerText = "";
}
