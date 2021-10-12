let playerOneMoveOneType = undefined,
    playerOneMoveTwoType = undefined,
    playerOneMoveThreeType = undefined,
    playerTwoMoveOneType = undefined,
    playerTwoMoveTwoType = undefined,
    playerTwoMoveThreeType = undefined,
    playerOneMoveOneValue = undefined,
    playerOneMoveTwoValue = undefined,
    playerOneMoveThreeValue = undefined,
    playerTwoMoveOneValue = undefined,
    playerTwoMoveTwoValue = undefined,
    playerTwoMoveThreeValue = undefined;

/* FUNKTION 1 */

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

    if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    }
// wenn kein Typ oder kein Wert eingegeben wird, wird die Funktion nicht ausgeführt

    if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }
// wenn kein gültiger Typ (Stein, Schere, Papier) eingegeben wird, wird die Funktion nicht ausgeführt --> Hilfsfunktion (!Operator)

    if (!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)) {
        return;
    }
// wenn kein gültiger Wert eingegeben wird, wird die Funktion nicht ausgeführt --> Hilfsfunktion (!Operator)

    if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
        return;
    }
// wenn die Summe aller Werte 99 übersteigt, wird kein Wert ausgegeben

    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === 'Player Two') {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;       
    }
// Variabeln werden den Funktionsparametern zugewiesen je nachdem ob Player One oder Player Two ausgewählt wird
}

function isValidMoveType(moveType) {
    return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors');
}
// Hilfsfunktion um sicherzustellen, dass Stein, Schere oder Papier eingegeben werden --> wie wird moveType definiert / angesprochen?

function isValidMoveValue(moveValue) {
    return (moveValue >= 1) && (moveValue <= 99);
}
// Hilfsfunktion um sicherzustellen, dass der Wert mind. 1 beträgt und maximal 99 --> wie wird moveValue definiert / angesprochen?



/* FUNKTION 2 */

function getRoundWinner(roundNumber) {
    switch (roundNumber) {
        case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
        case 3:
            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
        default:
            return null;
    }
}
// Funktion um den jeweiligen Rundensieger zu ermitteln

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;
    }
    
    if (playerOneMoveType === playerTwoMoveType) {
        if (playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        } else if (playerOneMoveValue < playerTwoMoveValue) {
            return 'Player Two';
        } else {
            return 'Tie';
        }
    }
    if (playerOneMoveType === 'rock') {
        if (playerTwoMoveType === 'scissors') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    } else if (playerOneMoveType === 'paper') {
        if (playerTwoMoveType === 'rock') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    } else {
        if (playerTwoMoveType === 'paper') {
            return 'Player One';
        } else {
            return 'Player Two';
        }
    }
}
// Hilfsfunktion um festzustellen wer gewonnen hat und was passiert wenn keine gültigen Werte eingegeben wurden

/* FUNKTION 3 */

function getGameWinner() {
    if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerOneMoveTwoType || !playerOneMoveTwoValue || !playerOneMoveThreeType || !playerOneMoveThreeValue || !playerTwoMoveOneType || !playerTwoMoveOneValue || !playerTwoMoveTwoType || !playerTwoMoveTwoValue || !playerTwoMoveThreeType || !playerTwoMoveThreeValue) {
        return null;
    }
    playerOneWins = 0;
    playerTwoWins = 0;

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);

    addWin(roundOneWinner) ;
    addWin(roundTwoWinner) ;
    addWin(roundThreeWinner) ;
    if (playerOneWins > playerTwoWins) {
        return 'Player One';
    } else if (playerOneWins < playerTwoWins) {
        return 'Player Two';
    } else {
        return 'Tie';
    }
}
// Funktion um den Spielsieger zu erklären

function addWin(winner) {
    if (winner === 'Player One') {
        playerOneWins = (playerOneWins + 1) || 1;
    } else if (winner === 'Player Two') {
        playerTwoWins = (playerTwoWins + 1) || 1;
    }
}
// Hilfsfunktion um die Anzahl der Siege zu erhöhen

/* ZUSATZGUNKTION */

function setComputerMoves() {
    const moves = ['rock', 'paper', 'scissors'];
    const moveOneType = moves[Math.floor(Math.random() * 3)]; 
    const moveTwoType = moves[Math.floor(Math.random() * 3)];
    const moveThreeType = moves[Math.floor(Math.random() * 3)];
    const moveOneValue = Math.floor(Math.random() * 96) + 1;
    const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
    const moveThreeValue = 99 - moveOneValue - moveTwoValue;
    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue);
}
// ermittelt Zufallswerte für Spieler 2

