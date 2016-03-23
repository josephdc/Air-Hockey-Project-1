
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

var gameBoards = [
      [
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
      ],
      [
        [0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,1,1],
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,0,0,0,0,0]
      ],
      [
        [0,0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,0,1],
        [1,1,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,1,0,0,0,1,0,0,0,0],
        [0,1,0,0,0,1,0,0,0,0],
        [0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,0,0]
      ],
      [
        [1,1,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,1,1,0,1,0,0],
        [0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,1,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,1,0,1,1,1,0,0,0],
        [0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1]
      ],
      [
        [0,0,0,0,0,0,0,0,1,0],
        [0,0,0,0,0,1,1,0,1,0],
        [1,1,1,0,0,0,0,0,1,0],
        [0,0,0,0,1,0,0,0,0,0],
        [1,1,1,0,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
      ],
    ]
var gameBoard = gameBoards[Math.floor(Math.random() * 5)]

gameBoardContainer.addEventListener("click", fireMissile, false);

console.log(gameBoardContainer)

function fireMissile(e) {

  if (e.target !== e.currentTarget) {

    var row = parseInt(e.target.id.substring(1,2));
    var col = parseInt(e.target.id.substring(2,3));

    if (gameBoard[row][col] == 0) {
      e.target.style.background = '#bbb';
      gameBoard[row][col] = 3;


    } else if (gameBoard[row][col] == 1) {
      e.target.style.background = 'red';
      gameBoard[row][col] = 2;
        alert("HIT HIT HIT!")
        sunkShip(row, col)

      hitCount++;
      if (hitCount == 17) {
        alert("All enemy battleships have been defeated! You WIN!");
      }

    } else if (gameBoard[row][col] > 1) {
      alert("STOP! Wasting your missiles you already fired at this location.");
    }
    }
    e.stopPropagation();

  function sunkShip(hitRow, hitCol){
    console.log(hitRow, hitCol  )
      if(gameBoard[0][3] == 2 && gameBoard[0][4] == 2 &&
        gameBoard [0][5] == 2 && gameBoard[0][6] == 2 &&
        hitRow == 0 && [3,4,5,6].indexOf(hitCol) > -1)
        alert("SHIP sunk!");


      if(gameBoard[3][6] == 2 && gameBoard[4][6] == 2 && gameBoard[5][6] == 2
        && hitCol == 6 && [3,4,5].indexOf(hitRow) > -1)
        alert("SHIP sunk!");


      if(gameBoard[5][6] == 2 && gameBoard[5][7] == 2 &&
        gameBoard[5][8] == 2 && gameBoard[5][9] == 2
        && hitRow == 5 && [6,7,8,9].indexOf(hitCol) > -1)
        alert("SHIP sunk!");

      if(gameBoard[5][0] == 2 && gameBoard[6][0] == 2 &&
        gameBoard[7][0] == 2 && gameBoard[8][0] == 2 && gameBoard[9][0] == 2
        && hitCol == 0 && [5,6,7,8,9].indexOf(hitRow) > -1)
      alert("SHIP sunk!");

      if(gameBoard[7][3] == 2 && gameBoard[8][3] == 2
        && hitCol == 3 && [7,8].indexOf(hitRow) > -1)
      alert("SHIP sunk!");
  }
}




