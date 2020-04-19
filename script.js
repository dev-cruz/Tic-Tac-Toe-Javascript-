(function () {
    function startGame() {
        const boxes = document.querySelectorAll('.box');
        const boardPlays = [];
        let playerSymbol = 'X';
        boxes.forEach((box, index) => {
            box.onclick = () => {
                if (boardPlays[index] == undefined) {
                    box.innerHTML = playerSymbol;
                    boardPlays[index] = playerSymbol;
                    if (hasWinner(boardPlays, boxes))
                        disableBoard(boxes);
                    playerSymbol = playerSymbol == 'X' ? 'O' : 'X';
                }
            }
        })
    }

    function restartGame(boxes) {
        boxes.forEach((box) => {
            box.innerHTML = '';
            box.classList.remove('winner');
        })
        return startGame();
    }

    function hasWinner(array, boxes) {
        if (array[0] != undefined && array[0] == array[1] && array[0] == array[2]) {
            setWinner([boxes[0], boxes[1], boxes[2]], array[0]);
            return true;
        }

        else if (array[3] != undefined && array[3] == array[4] && array[4] == array[5]) {
            setWinner([boxes[3], boxes[4], boxes[5]], array[3]);
            return true;
        }

        else if (array[6] != undefined && array[6] == array[7] && array[6] == array[8]) {
            setWinner([boxes[6], boxes[7], boxes[8]], array[6]);
            return true;
        }

        else if (array[0] != undefined && array[0] == array[3] && array[0] == array[6]) {
            setWinner([boxes[0], boxes[3], boxes[6]], array[0]);
            return true;
        }

        else if (array[1] != undefined && array[1] == array[4] && array[1] == array[7]) {
            setWinner([boxes[1], boxes[4], boxes[7]], array[1]);
            return true;
        }

        else if (array[2] != undefined && array[2] == array[5] && array[2] == array[8]) {
            setWinner([boxes[2], boxes[5], boxes[8]], array[2]);
            return true;
        }

        else if (array[0] != undefined && array[0] == array[4] && array[0] == array[8]) {
            setWinner([boxes[0], boxes[4], boxes[8]], array[0]);
            return true;
        }

        else if (array[2] != undefined && array[2] == array[4] && array[2] == array[6]) {
            setWinner([boxes[2], boxes[4], boxes[6]], array[2]);
            return true;
        }
    }

    function setWinner(winnerBoxes, winnerSymbol) {
        const msgBox = document.querySelector('#winner-message');
        winnerBoxes.forEach(element => element.classList.add('winner'));
        let winner = winnerSymbol == 'X' ? 'Player 1' : 'Player 2';
        msgBox.innerHTML = `${winner} wins!!<br>Do you want to play again?`;
    }

    function disableBoard(board) {
        board.forEach(box => box.onclick = false);
        return endGame(board);
    }

    function endGame(board) {
        const popup = document.querySelector('#end-modal');
        const yesButton = document.querySelectorAll('.end-modal__button')[0];
        const noButton = document.querySelectorAll('.end-modal__button')[1];
        popup.style.display = 'flex';
        yesButton.onclick = () => {
            popup.style.display = 'none';
            restartGame(board);
        }
        noButton.onclick = () => {
            popup.style.display = 'none';
        }
    }
    startGame();
})()
