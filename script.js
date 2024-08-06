var gameBoard =
[
   [null, null, null],
   [null, null, null],
   [null, null, null],
];
var player = 'X';
var gameStatus = 'Game On';


function checkTie() {
   for (let row = 0; row <= 2; row++) {
       for (let column = 0; column <= 2; column++) {
           if (gameBoard[row][column] === null) {
               return;
           }
       }
   }


   document.getElementById('printWinner').innerHTML = 'Tie!';
   gameStatus = 'Game Over';
   return;
}


function printChar(row, column, position) {
   if (gameStatus === 'Game Over') {
       return;
   }


   if (gameBoard[row][column] === null) {
       gameBoard[row][column] = player;
       document.getElementById(position).innerHTML = player;
       checkWin(player);


       if (gameStatus === 'Game On') {
           checkTie();
       }


       if (player === 'X') {
           player = 'O';
           return;
       }
       if (player === 'O') {
           player = 'X';
           return;
       }
   }
}




function checkWin(char) {
   let winnerAnnouncement = 'Player ' + player + ' wins!';
   if ((gameBoard[0][0] === char) && (gameBoard[0][1] === char) && (gameBoard[0][2] === char)) {
       document.getElementById('printWinner').innerHTML = winnerAnnouncement;
       gameStatus = 'Game Over';
       return;
   }
   if ((gameBoard[1][0] === char) && (gameBoard[1][1] === char) && (gameBoard[1][2] === char)) {
       document.getElementById('printWinner').innerHTML = winnerAnnouncement;
       gameStatus = 'Game Over';
       return;
   }
   if ((gameBoard[2][0] === char) && (gameBoard[2][1] === char) && (gameBoard[2][2] === char)) {
       document.getElementById('printWinner').innerHTML = winnerAnnouncement;
       gameStatus = 'Game Over';
       return;
   }


   if ((gameBoard[0][0] === char) && (gameBoard[1][0] === char) && (gameBoard[2][0] === char)) {
       document.getElementById('printWinner').innerHTML = winnerAnnouncement;
       gameStatus = 'Game Over';
       return;
   }
   if ((gameBoard[0][1] === char) && (gameBoard[1][1] === char) && (gameBoard[2][1] === char)) {
       document.getElementById('printWinner').innerHTML = winnerAnnouncement;
       gameStatus = 'Game Over';
       return;
   }
   if ((gameBoard[0][2] === char) && (gameBoard[1][2] === char) && (gameBoard[2][2] === char)) {
       document.getElementById('printWinner').innerHTML = winnerAnnouncement;
       gameStatus = 'Game Over';
       return;
   }


   if ((gameBoard[0][0] === char) && (gameBoard[1][1] === char) && (gameBoard[2][2] === char)) {
       document.getElementById('printWinner').innerHTML = winnerAnnouncement;
       gameStatus = 'Game Over';
       return;
   }
   if ((gameBoard[0][2] === char) && (gameBoard[1][1] === char) && (gameBoard[2][0] === char)) {
       document.getElementById('printWinner').innerHTML = winnerAnnouncement;
       gameStatus = 'Game Over';
       return;
   }
}
