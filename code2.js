$("button#roll").on("click", playGame);

/*for(let oneDice of allDice) {
    //displays face of die
    console.log(oneDice.face);
    //displays exploded status
    console.log(oneDice.exploded);
}*/

//parallel arrays for die & exploded status
let roll = [];
let exploded = [];

let score = 0;
let totalScore = 0;

function playGame(event) {
    event.preventDefault();
    rollDice();

    /*    while (exploded.includes("false")) {
            rollDice();
        }*/
    //gameOver();
}

function rollDice() {
    //roll dice that do not have exploded class
    for (let i = 0; i < 5; i++) {
        let die = 0;

        die = Math.floor(Math.random() * 6) + 1;
        $(`td#d${i + 1}`).text(die);

        //append die to roll
        roll.push(die);

        //totalScore = current total score + current roll score
        totalScore += calcScore(roll);

        //display the total score
        $("h2#score").text(`Score: ${totalScore}`);

        //explode 2's and 5's
        if (die === 2 || die === 5) {
            $(`td#d${i +1}`).addClass("exploded");
            exploded.push("true");
        } else {
            exploded.push("false");
        }
    }
    return roll;
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
    return Number(score);
}

function gameOver() {
    $("h2#gameStatus").text("GAME OVER!!");
}