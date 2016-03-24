
var rows = 10;
var cols = 10;
var squareSize = 50;

var hits = 0;
var shipsSank = 0;
var missilesLaunched = 0;
var misslesRemaining = 0;
var sunkShips = [false,false,false,false,false];

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
      {
          board: [
            [0,0,0,1,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0],
            [0,0,0,0,0,0,1,0,0,0],
            [1,0,0,0,0,0,1,1,1,1],
            [1,0,0,0,0,0,1,0,0,0],
            [1,0,0,1,0,0,1,0,0,0],
            [1,0,0,1,0,0,0,0,0,0],
            [1,0,0,1,0,0,0,0,0,0]
          ],
          ships: [
            [[0, 3], [0, 4], [0, 5], [0, 6]],
            [[5, 0], [6, 0], [7, 0], [8, 0], [9, 0]],
            [[7, 3], [8, 3], [9, 3]],
            [[3, 6], [4, 6], [5, 6], [6, 6], [7, 6]],
            [[5, 7], [5, 8], [5, 9]]
          ]
      },
      {
        board: [
            [0,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,1,1,1],
            [0,0,0,1,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,1,1,1],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,1,1,1,1,0,0,0,0,0]
          ],
        ships: [
            [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]],
            [[2, 3], [3, 3], [4, 3], [5, 3]],
            [[3, 7], [3, 8], [3, 9]],
            [[6, 6], [6, 7], [6, 8], [6, 9]],
            [[9, 1], [9, 2], [9, 3], [9,4]]
        ]
      },
      {
          board: [
            [0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,1],
            [1,1,1,0,0,1,0,0,0,1],
            [0,0,0,0,0,1,0,0,0,0],
            [0,1,0,0,0,1,0,0,0,0],
            [0,1,0,0,0,1,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,0,1,1,1,1,1],
            [0,0,0,0,0,0,0,0,0,0]
          ],
          ships: [
            [[0, 9], [1, 9], [2, 9], [3, 9]],
            [[3, 0], [3, 1], [3, 2]],
            [[5, 1], [6, 1], [7, 1], [8, 1]],
            [[3, 5], [4, 5], [5, 5], [6, 5]],
            [[8, 5], [8, 6], [8, 7], [8, 8], [8,9]]
          ]
      },
      {
          board: [
            [1,1,1,1,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,1,0,0,1,1,1,0,0],
            [0,0,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,1,1,1]
          ],
          ships: [
            [[0, 0], [0, 1], [0, 2], [0, 3]],
            [[0, 7], [1, 7], [2, 7], [3, 7], [4, 7]],
            [[5, 2], [6, 2], [7, 2], [8, 2]],
            [[7, 5], [7, 6], [7, 7]],
            [[9, 6], [9, 7], [9, 8], [9, 9]]
          ]
      },
      {
          board: [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,0],
            [1,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0],
            [1,1,1,0,1,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,1,0,1,1,1,1],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
          ],
          ships: [
            [[2, 0], [2, 1], [2, 2], [2, 3]],
            [[4, 0], [4, 1], [4, 2]],
            [[3, 4], [4, 4], [5, 4], [6, 4], [7, 4]],
            [[1, 5], [1, 6], [1, 7], [1, 8]],
            [[7, 6], [7, 7], [7, 8], [7, 9]]
          ]
      }
]

gameBoard = gameBoards[Math.floor(Math.random() * 5)]

gameBoardContainer.addEventListener("click", fireMissile, false);

console.log(gameBoardContainer)

function fireMissile(e) {

  if (e.target !== e.currentTarget) {

    var row = parseInt(e.target.id.substring(1,2));
    var col = parseInt(e.target.id.substring(2,3));

    if (gameBoard.board[row][col] == 0) {
      e.target.style.background = '#bbb';
      gameBoard.board[row][col] = 3;


    } else if (gameBoard.board[row][col] == 1) {
      e.target.style.background = 'red';
      gameBoard.board[row][col] = 2;
        alert("HIT HIT HIT!")
        sunkShip(row, col)

      hitCount++;
      if (hitCount == 20) {
        alert("YOU WIN! All enemy battleships have been defeated!");
      }

    } else if (gameBoard.board[row][col] > 1) {
      alert("STOP...Wasting your missiles you already fired at this location.");
    }
    }
    e.stopPropagation();
  }

function sunkShip(){
  gameBoard.ships.forEach(function(ship, index) {
      sunk = true
      ship.forEach(function (position) {
        console.log(position)
          if (gameBoard.board[position[0]][position[1]] != 2){
          sunk = false
          }
        console.log(sunk)
        })
    if (sunk && !sunkShips[index])
  {
      alert ("You SANK a ship!")
      sunkShips[index] = true
      }
    })

  }





