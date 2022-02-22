const player_1 = document.querySelector('.player1')
const player_2 = document.querySelector('.player2')
const limit = document.querySelector('#limit')
const btnOne = document.querySelector('#playerOne')
const btnTwo = document.querySelector('#playerTwo')
const reset = document.querySelector('#reset')

let scorePlayer1 = 0;
let scorePlayer2 = 0;

let changednum = 1
limit.addEventListener('change', () => {
    changednum = limit.value

    restart
})



let trueState = false;

btnOne.addEventListener('click', () => {
    if (!trueState) {
        scorePlayer1++
        if (changednum <= scorePlayer1) {
            trueState = true
            player_1.classList.add('green')
            player_2.classList.add('red')
        }
        player_1.innerHTML = scorePlayer1
    }
})


btnTwo.addEventListener('click', () => {
    if (!trueState) {
        scorePlayer2++;
        if (changednum <= scorePlayer2) {
            trueState = true
            player_1.classList.add('red')
            player_2.classList.add('green')
        }
        player_2.innerHTML = scorePlayer2
    }
})


function restart() {
    player_1.innerHTML = 0;
    player_2.innerHTML = 0;
    player_1.classList.remove('green')
    player_2.classList.remove('red')

    trueState = false
    scorePlayer1 = 0;
    scorePlayer2 = 0;
}


reset.addEventListener('click', () => {
    restart()
})