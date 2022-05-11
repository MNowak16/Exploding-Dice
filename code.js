$("button#roll").on("click", playGame);

let score = 0;
let totalScore = 0;
//initialize exploded status of all dice and false/not-exploded
let exploded = [false, false, false, false, false];

function playGame(event) {
    event.preventDefault();
    rollDice();
}

function rollDice() {
    let die = 0;
    let roll = [];

    //roll each die independently with loop
    for (let i = 0; i < 5; i++) {
        //checks the exploded status of the dice. Rolls dice that have a false exploded status.
        //Exploded dice will remain the same and not be re-rolled
        if (exploded[i] === false) {
            die = Math.floor(Math.random() * 6) + 1;
            $(`td#d${i + 1}`).text(die);

            //append die to roll array
            roll.push(die);

            //append exploded status to array
            if (die === 2 || die === 5) {
                exploded[i] = true;
                $(`td#d${i +1}`).addClass("exploded");
            }
        }
    }

    calcScore(roll);
    //display score
    $("h2#score").text(`Score: ${totalScore}`);

    //give game over message if all die are exploded
    if (!exploded.includes(false)) {
        gameOver();
    }
}

function calcScore(roll) {
    //count score if 2 or 5 in array of die
    if (roll.includes(2) || roll.includes(5)) {
        score = 0;
    } else {
        score = roll.reduce(function (a, b) {
            return a + b;
        }, 0);
    }
    totalScore += score;
    return Number(totalScore);
}

function gameOver() {
    $("h2#gameStatus").text("GAME OVER!!");
}