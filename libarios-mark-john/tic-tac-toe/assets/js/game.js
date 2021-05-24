var playerTurnState = 1;
var winnerState = 0;
var clickCounter = 0;
var body = document.getElementsByTagName('body')[0];
var board = document.querySelector('#board');
var fireworks = document.querySelector('#fireworks');
var boardArray = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

document.addEventListener('click', function(e) {
    var playerState = playerTurn(playerTurnState);
    var piece;
    var pieceColor;

    e = e || window.event;
    var target = e.target || e.srcElement;
    var text = target.textContent || target.innerText;   

        //check if slot is available to fill piece
        if (target !== body && target !== board && text === '' && winnerState == 0){
            clickCounter++;

            //change player state if you want to change piece
            if (playerState == 1) {
                piece = 'X';
                pieceColor = 'red';
            } else {
                piece = 'O';
                pieceColor = 'white';
            }
            target.innerHTML = piece;
            target.style.color = pieceColor;
            setPiece(target.id, piece);
            checkWin();
        }
});

function playerTurn(playerState) {
    if (playerState == 1) {
        playerTurnState = 2;
    } else {
        playerTurnState = 1;
    }

    return playerTurnState;
}

function setPiece(targetSlot, piece) {
    var row;
    var column;
    if (targetSlot == 1 || targetSlot == 2 || targetSlot == 3) {
        row = 0;
        column = targetSlot - 1;
    } else if (targetSlot == 4 || targetSlot == 5 || targetSlot == 6) {
        row = 1;
        column = targetSlot - 4;
    } else {
        row = 2;
        column = targetSlot - 7;
    }

    boardArray[row][column] = piece;
}

function checkWin() {
    if (
        boardArray[0][0] == boardArray[0][1] && boardArray[0][1] == boardArray[0][2]
        && boardArray[0][0] != '' && boardArray[0][1] != '' && boardArray[0][2] != ''
    ) {
        gameFinish('win');
    }
    else if (
        boardArray[1][0] == boardArray[1][1] && boardArray[1][1] == boardArray[1][2]
        && boardArray[1][0] != '' && boardArray[1][1] != '' && boardArray[1][2] != ''
    ) {
        gameFinish('win');
    }
    else if (
        boardArray[2][0] == boardArray[2][1] && boardArray[2][1] == boardArray[2][2]
        && boardArray[2][0] != '' && boardArray[2][1] != '' && boardArray[2][2] != ''
    ) {
        gameFinish('win');
    }
    else if (
        boardArray[0][0] == boardArray[1][0] && boardArray[1][0] == boardArray[2][0]
        && boardArray[0][0] != '' && boardArray[1][0] != '' && boardArray[2][0] != ''
    ) {
        gameFinish('win');
    }
    else if (
        boardArray[0][0] == boardArray[1][1] && boardArray[1][1] == boardArray[2][2]
        && boardArray[0][0] != '' && boardArray[1][1] != '' && boardArray[2][2] != ''
    ) {
        gameFinish('win');
    }
    else if (
        boardArray[0][1] == boardArray[1][1] && boardArray[1][1] == boardArray[2][1]
        && boardArray[0][1] != '' && boardArray[1][1] != '' && boardArray[2][1] != ''
    ) {
        gameFinish('win');
    }
    else if (
        boardArray[0][2] == boardArray[1][2] && boardArray[1][2] == boardArray[2][2]
        && boardArray[0][2] != '' && boardArray[1][2] != '' && boardArray[2][2] != ''
    ) {
        gameFinish('win');
    }
    else if (
        boardArray[0][2] == boardArray[1][1] && boardArray[1][1] == boardArray[2][0]
        && boardArray[0][2] != '' && boardArray[1][1] != '' && boardArray[2][0] != ''
    ) {
        gameFinish('win');
    } else if (clickCounter == 9) {
        gameFinish('draw');
    }
}

function gameFinish(decision) {
    var slots = document.getElementsByClassName('slot');

    winnerState = 1;

    if (decision == 'win') {
        fireworks.classList.add('pyro');
    } else {
        console.log('Draw');
    }

    for (const slot of slots) {
        slot.style.cursor = 'auto';
    }
}

/***
 * check probabilities to win
 * [0, 1, 2]    [1, 2, 3]
 * [3, 4, 5]    [4, 5, 6]
 * [6, 7, 8]    [7, 8, 9]
 * 
 * 0-1-2 arr[0][0], arr[0][1], arr[0][2] -
 * 3-4-5 arr[1][0], arr[1][1], arr[1][2] -
 * 6-7-8 arr[2][0], arr[2][1], arr[2][2] -
 * 0-3-6 arr[0][0], arr[1][0], arr[2][0] -
 * 0-4-8 arr[0][0], arr[1][1], arr[2][2] -
 * 1-4-7 arr[0][1], arr[1][1], arr[2][1] -
 * 2-5-8 arr[0][2], arr[1][2], arr[2][2] -
 * 2-4-6 arr[0][2], arr[1][1], arr[2][0]
 */

 /***
  * logic for history tracking create an single dimensional array. push coordinate

  */

  /***
   * logic for history tracking create an single dimensional array. push coordinate
   * every click on the slot
   * previous - next can be determine easily
   */