$("button#roll").on("click", playGame);

let score = 0;
let totalScore = 0;

function playGame(event) {
    event.preventDefault();
    rollDice();
}

function rollDice() {
    let die = 0;
    let roll = [];

    //roll dice
    for (let i = 0; i < 5; i++) {
        die = Math.floor(Math.random() * 6) + 1;
        $(`td#d${i + 1}`).text(die);

        //append die to roll
        roll.push(die);

        //explode 2's and 5's
        if (die === 2 || die === 5) {
            $(`td#d${i +1}`).addClass("exploded");
        }
    }

    calcScore(roll);
    //display score
    $("h2#score").text(`Score: ${totalScore}`);

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
    totalScore += score;
    return Number(totalScore);
}
