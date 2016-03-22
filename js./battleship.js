
var rows = 10;
var cols = 10;
var squareSize = 50;

var gameBoardContainer = document.getElementById("gameboard");

for (i = 0; i < cols; i++) {
  for (j = 0; j < rows; j++) {

    var square = document.createElement("div");
    gameBoardContainer.appendChild(square);

    square.id = 's' + j + i;

    var topPosition = j * squareSize;
    var leftPosition = i * squareSize;

    square.style.top = topPosition + 'px';
    square.style.left = leftPosition + 'px';
  }
}

var hitCount = 0;

var gameBoard = [
        [0,0,0,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [1,0,0,0,0,0,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0],
        [1,0,0,1,0,0,0,0,0,0],
        [1,0,0,1,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0,0]
        ]

gameBoardContainer.addEventListener("click", fireMissile, false);

console.log(gameBoardContainer)

function fireMissile(e) {

  if (e.target !== e.currentTarget) {

    var row = e.target.id.substring(1,2);
    var col = e.target.id.substring(2,3);

    if (gameBoard[row][col] == 0) {
      e.target.style.background = '#bbb';
      gameBoard[row][col] = 3;


    } else if (gameBoard[row][col] == 1) {
      e.target.style.background = 'red';
      gameBoard[row][col] = 2;
        alert("HIT HIT HIT!")
        sunkShip()

      hitCount++;
      if (hitCount == 17) {
        alert("All enemy battleships have been defeated! You win!");
      }

    } else if (gameBoard[row][col] > 1) {
      alert("You already fired at this location.");
    }
    }
    e.stopPropagation();

  function sunkShip(){
      if((gameBoard[0][3] == 2 && gameBoard[0][4] == 2) &&
        (gameBoard [0][5] == 2 && gameBoard[0][6] == 2)){
      alert("SHIP sunk!");
  }
}
      if((gameBoard[3][6] == 2 && gameBoard[4][6] == 2) &&
        (gameBoard[5][6] == 2 )){
      alert("SHIP sunk!")
      }

      if((gameBoard[5][6] == 2 && gameBoard[5][7] == 2) &&
        (gameBoard[5][8] == 2 && gameBoard[5][9])){
      alert("SHIP sunk!")
}
      if((gameBoard[5][0] == 2 && gameBoard[6][0] == 2) &&
        (gameBoard[7][0] == 2 && gameBoard[8][0] == 2 &&
          gameBoard[9][0])){
      alert("Ship sunk!")
}
      if((gameBoard[7][3] == 2 && gameBoard[8][3] == 2)){
      alert("Ship sunk!")
}
}




