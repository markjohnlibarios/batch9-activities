var playerTurnState = 1;
var playerSelectState;
var winnerState = 0;
var clickCounter = 0;
var replayCounter = 0;
var body = document.getElementsByTagName('body')[0];
var board = document.querySelector('#board');
var fireworks = document.querySelector('#fireworks');
var boardArray = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

var replayArray = [];

var previous = document.querySelector('#previous');
var next = document.querySelector('#next');
var newGame = document.querySelector('#new-game');
var replay = document.querySelector('#replay');
var player1 = document.querySelector('#player-1');
var player2 = document.querySelector('#player-2');

player1.addEventListener('click', function() {
    changePiece();
});

player2.addEventListener('click', function() {
    changePiece();
});

function changePiece() {
    if (clickCounter == 0){
        if (playerTurnState == 1) {
            player1.innerHTML = 'Player 1 (X)';
            player2.innerHTML = 'Player 2 (O)';
            playerTurnState = 2;
            playerSelectState = 2;
        } else {
            player1.innerHTML = 'Player 1 (O)';
            player2.innerHTML = 'Player 2 (X)';
            playerTurnState = 1;
            playerSelectState = 1;
        }
    }
}

document.addEventListener('click', function(e) {
    var piece;
    var pieceColor;

    e = e || window.event;
    var target = e.target || e.srcElement;
    var text = target.textContent || target.innerText;   

    //check if slot is available to fill piece
    //if (target !== body && target !== board && text === '' && winnerState == 0){
    if (target.classList == 'slot' && text === '' && winnerState == 0){
        var playerState = playerTurn(playerTurnState);
        
        clickCounter++;
        //change player state if you want to change piece
        if (playerState == 1) {
            piece = 'X';
            pieceColor = 'red';
        } else {
            piece = 'O';
            pieceColor = 'white';
        }

        if (clickCounter == 1) {
            newGame.classList.add('show');
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
    //replayArray.push(`${targetSlot}`, `${piece}`);
    var obj = {};
    obj['slot'] = targetSlot;
    obj['piece'] = piece;
    replayArray.push(obj);
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

    replay.classList.add('show');
}

newGame.addEventListener('click', function(e) {
    replayArray = [];
    resetGame();
    removeControls();
});

replay.addEventListener('click', function() {
    resetGame();
    showControls();
});

function resetGame() {
    var slots = document.querySelectorAll('.slot');

    //clear board array
    for (const boardslot of boardArray) {
        for (let i = 0; i < boardslot.length; i ++){
            boardslot[i] = '';
        }
    }

    for (const slot of slots) {
        slot.innerHTML = '';
    }

    winnerState = 0;
    clickCounter = 0;
    playerTurnState = playerSelectState;
    fireworks.classList.remove('pyro');
}

function removeControls() {
    newGame.classList.remove('show');
    previous.classList.remove('show');
    next.classList.remove('show');
    replay.classList.remove('show');
}

function showControls() {
    previous.classList.add('show');
    next.classList.add('show');
}

function nextMove() {
    //console.log(replayArray[replayCounter].slot + ' ' + replayArray[replayCounter].piece);
    fillSlot(replayArray[replayCounter].slot, replayArray[replayCounter].piece);
}

function fillSlot(slot, piece) {
    replayCounter++;
    var fillThisSlot = document.getElementById(slot);
    fillThisSlot.innerHTML = piece;
}

function previousMove() {
    replayCounter--;
    removeSlot(replayArray[replayCounter].slot);
}

function removeSlot(slot) {
    var removeThisSlot = document.getElementById(slot);
    removeThisSlot.innerHTML = '';
}

next.addEventListener('click', function() {
    nextMove();
});

previous.addEventListener('click', function() {
    previousMove();
});

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
 * 2-4-6 arr[0][2], arr[1][1], arr[2][0] -
 */

 /***
  * logic for history tracking create an single dimensional array. push coordinate

  */

  /***
   * logic for history tracking create an single dimensional array. push coordinate
   * every click on the ()
   * previous - next can be determine easily
   */
//  = [] = [];