// function will return 1 if win, 0 if draw, -1 if lose
export function didWeWin(player, computer) {
    if (player === computer) {
        return 0;
    } else if (player === 'paper' && computer === 'rock') {
        return 1;
    } else if (player === 'rock' && computer === 'scissors') {
        return 1;
    } else if (player === 'scissors' && computer === 'paper') {
        return 1;
    } else if (player === 'paper' && computer === 'scissors') {
        return -1;
    } else if (player === 'rock' && computer === 'paper') {
        return -1;
    } else if (player === 'scissors' && computer === 'rock') {
        return -1;
    } else {
        console.log('error');
        return;
    }
}