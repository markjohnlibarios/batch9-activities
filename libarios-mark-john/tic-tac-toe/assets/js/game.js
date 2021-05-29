var playerTurnState = 1;
var playerSelectState = 1;
var winnerState = 0;
var clickCounter = 0;
var replayCounter = 0;
var slots = document.getElementsByClassName('slot');
var fireworks = document.querySelector('#fireworks');
var greetings = document.querySelector('#greetings');
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
var player1Turn = document.querySelector('#player1-turn');
var player2Turn = document.querySelector('#player2-turn');

player1.addEventListener('click', function() {
    changePiece();
});

player2.addEventListener('click', function() {
    changePiece();
});

function changePiece() {
    if (clickCounter == 0){
        if (playerTurnState == 1) {
            player1.innerHTML = 'X';
            player2.innerHTML = 'O';
            playerTurnState = 2;
            playerSelectState = 2;
        } else {
            player1.innerHTML = 'O';
            player2.innerHTML = 'X';
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
    var parentDiv = document.getElementById(target.id);
    var createPiece = document.createElement('i');
    createPiece.setAttribute('id', 'pc' + target.id);
    createPiece.setAttribute('class', 'blinker');

    //check if slot is available to fill piece
    if (target.classList == 'slot' && text === '' && winnerState == 0){
        var playerState = playerTurn(playerTurnState);
        
        clickCounter++;
        //change player state if you want to change piece
        if (playerState == 1) {
            piece = 'X';
            pieceColor = '#000';
        } else {
            piece = 'O';
            pieceColor = '#fff';
        }

        /*if (clickCounter == 1) {
            newGame.classList.add('show');
        }*/

        createPiece.innerHTML = piece;
        target.style.color = pieceColor;
        parentDiv.appendChild(createPiece);
        setPiece(target.id, piece);
        checkWin();
        displayTurn();
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

function displayTurn() {
    if (winnerState == 0) {
        if (player1Turn.classList == 'button active') {
            player1Turn.classList.remove('active');
            player1Turn.classList.add('inactive');
            player2Turn.classList.remove('inactive');
            player2Turn.classList.add('active');
        } else {
            player1Turn.classList.add('active');
            player1Turn.classList.remove('inactive');
            player2Turn.classList.add('inactive');
            player2Turn.classList.remove('active');
        }
    }
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
        gameFinish('win', 1, 2, 3);
    }
    else if (
        boardArray[1][0] == boardArray[1][1] && boardArray[1][1] == boardArray[1][2]
        && boardArray[1][0] != '' && boardArray[1][1] != '' && boardArray[1][2] != ''
    ) {
        gameFinish('win', 4, 5, 6);
    }
    else if (
        boardArray[2][0] == boardArray[2][1] && boardArray[2][1] == boardArray[2][2]
        && boardArray[2][0] != '' && boardArray[2][1] != '' && boardArray[2][2] != ''
    ) {
        gameFinish('win', 7, 8, 9);
    }
    else if (
        boardArray[0][0] == boardArray[1][0] && boardArray[1][0] == boardArray[2][0]
        && boardArray[0][0] != '' && boardArray[1][0] != '' && boardArray[2][0] != ''
    ) {
        gameFinish('win', 1, 4, 7);
    }
    else if (
        boardArray[0][0] == boardArray[1][1] && boardArray[1][1] == boardArray[2][2]
        && boardArray[0][0] != '' && boardArray[1][1] != '' && boardArray[2][2] != ''
    ) {
        gameFinish('win', 1, 5, 9);
    }
    else if (
        boardArray[0][1] == boardArray[1][1] && boardArray[1][1] == boardArray[2][1]
        && boardArray[0][1] != '' && boardArray[1][1] != '' && boardArray[2][1] != ''
    ) {
        gameFinish('win', 2, 5, 8);
    }
    else if (
        boardArray[0][2] == boardArray[1][2] && boardArray[1][2] == boardArray[2][2]
        && boardArray[0][2] != '' && boardArray[1][2] != '' && boardArray[2][2] != ''
    ) {
        gameFinish('win', 3, 6, 9);
    }
    else if (
        boardArray[0][2] == boardArray[1][1] && boardArray[1][1] == boardArray[2][0]
        && boardArray[0][2] != '' && boardArray[1][1] != '' && boardArray[2][0] != ''
    ) {
        gameFinish('win', 3, 5, 7);
    } else if (clickCounter == 9) {
        gameFinish('draw');
    }
}

function gameFinish(decision, p1, p2, p3) {
    var piece1 = document.getElementById('pc' + p1);
    var piece2 = document.getElementById('pc' + p2);
    var piece3 = document.getElementById('pc' + p3);

    winnerState = 1;

    if (decision == 'win') {
        fireworks.classList.add('pyro');
        
        piece1.classList.add('blink');
        piece2.classList.add('blink');
        piece3.classList.add('blink');

        greetings.classList.add('greetings-show');

        player1Turn.className = '';
        player2Turn.className = '';

        player1Turn.setAttribute('class', 'button inactive');
        player2Turn.setAttribute('class', 'button inactive');
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
    winnerState = 0;
    clickCounter = 0;
    playerTurnState = playerSelectState;

    for (const slot of slots) {
        slot.style.cursor = 'pointer';
    }

    player1Turn.className = '';
    player2Turn.className = '';

    player1Turn.setAttribute('class', 'button active');
    player2Turn.setAttribute('class', 'button inactive');
});

replay.addEventListener('click', function() {
    resetGame();
    showControls();
    replayCounter = 0;
    previous.classList.remove('show');
});

function resetGame() {
    var slots = document.querySelectorAll('.slot');

    //clear board array
    for (const boardslot of boardArray) {
        for (let i = 0; i < boardslot.length; i++){
            boardslot[i] = '';
        }
    }

    for (const slot of slots) {
        slot.innerHTML = '';
    }

    fireworks.classList.remove('pyro');
    greetings.classList.remove('greetings-show');
}

function removeControls() {
    newGame.classList.remove('show');
    previous.classList.remove('show');
    next.classList.remove('show');
    replay.classList.remove('show');
}

function showControls() {
    next.classList.add('show');
}

function nextMove() {
    if (replayCounter != replayArray.length){
        fillSlot(replayArray[replayCounter].slot, replayArray[replayCounter].piece);
    } 
    
    if (replayCounter == replayArray.length) {
        next.classList.remove('show');
    }

    if (replayCounter == 1) {
        previous.classList.add('show');
    }
}

function fillSlot(slot, piece) {
    replayCounter++;
    var fillThisSlot = document.getElementById(slot);
    fillThisSlot.innerHTML = piece;
}

function previousMove() {
    if (replayCounter != 0){
        replayCounter--;
        removeSlot(replayArray[replayCounter].slot);
        if (replayCounter == 0) {
            previous.classList.remove('show');
        }

        if (replayCounter != replayArray.length) {
            next.classList.add('show');
        }
    }
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