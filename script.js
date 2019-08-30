function init() {
        function startGame() {
            const boxes = document.querySelectorAll('.box');
            let boardPlays = [];
            let player = 1; 
            boxes.forEach((box, index) => {
                box.onclick = () => {
                    if(boardPlays[index] == undefined){
                        box.innerHTML = play(player);
                        boardPlays[index] = play(player);
                        if (hasWinner(boardPlays, boxes))
                            disableBoardPlays(boxes);
                        (player == 1)? player = 2: player = 1;
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

    function play(player) {
        if(player == 1) {
            return 'X';
        }
        else
            return 'O'
    }
    
    function hasWinner(array, boxes) {
        if( array[0] != undefined && array[0] == array[1] && array[0] == array[2]){
            setWinner([boxes[0], boxes[1], boxes[2]], array[0]);
            return true;
        }

        else if(array[3] != undefined && array[3] == array[4] && array[4] == array[5]){
            setWinner([boxes[3], boxes[4], boxes[5]], array[3]);
            return true;  
        }

        else if(array[6] != undefined && array[6] == array[7] && array[6] == array[8]){
            setWinner([boxes[6], boxes[7], boxes[8]], array[6]);
            return true; 
        }

        else if(array[0] != undefined && array[0] == array[3] && array[0] == array[6]){
            setWinner([boxes[0], boxes[3], boxes[6]], array[0]);
            return true;  
        }

        else if(array[1] != undefined && array[1] == array[4] && array[1] == array[7]){
            setWinner([boxes[1], boxes[4], boxes[7]], array[1]);
            return true; 
        }

        else if(array[2] != undefined && array[2] == array[5] && array[2] == array[8]){
            setWinner([boxes[2], boxes[5], boxes[8]], array[2]);
            return true; 
        }

        else if(array[0] != undefined && array[0] == array[4] && array[0] == array[8]){
            setWinner([boxes[0], boxes[4], boxes[8]], array[0]);
            return true;
        }
            
        else if(array[2] != undefined && array[2] == array[4] && array[2] == array[6]){
            setWinner([boxes[2], boxes[4], boxes[6]], array[2]);
            return true;  
        }
    }
    
    function setWinner(array, value) {
        let winner = ''
        // this message will be displayed at the end of the game...
        const msg = document.querySelector('#pop-up span');  
        array.forEach(element => element.classList.add('winner'));
        (value == 'X')? winner = 'Player 1': winner = 'Player 2';
        msg.innerHTML = `${winner} wins!!<br>Do you want to play again?`;
    }

    function disableBoardPlays(board) {
        board.forEach(box => box.onclick = false);
        return endGame(board);
    }

    function endGame(board) {
        const popUp = document.querySelector('#pop-up');
        const msg = document.querySelector('#pop-up span');
        const yes = document.querySelectorAll('#pop-up button')[0];
        const no = document.querySelectorAll('#pop-up button')[1];
        popUp.style.display = 'flex';
        yes.onclick = () => {
            popUp.style.display = 'none';
            restartGame(board);
        }
        no.onclick = () => {
            msg.innerHTML = 'Okay, see you later ;)<br>(press f5 case you change your mind)';
            yes.style.display = 'none';
            no.style.display = 'none';
        }
    }
    startGame();
}
init();
