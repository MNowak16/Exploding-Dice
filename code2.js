$("button#roll").on("click", playGame);

let score = 0;
let totalScore = 0;
let exploded = [false, false, false, false, false];

//let allDie = [5];

function playGame(event) {
    event.preventDefault();
    rollDice();
}

function rollDice() {
    let die = 0;
    let roll = [];

    if (exploded.includes(false)) {
        //roll dice
        for (let i = 0; i < 5; i++) {
            if (exploded[i] === false) {
                die = Math.floor(Math.random() * 6) + 1;
                $(`td#d${i + 1}`).text(die);

                //append die to roll array
                roll.push(die);

                //append exploded status to array
                if (die === 2 || die === 5) {
                    exploded[i] = true;
                    //add exploded die to allDie, so they don't change each roll
                    //allDie[i] = die;
                    //add exploded class to change color of die
                    $(`td#d${i +1}`).addClass("exploded");
                }
            }

        }

        calcScore(roll);
        //display score
        $("h2#score").text(`Score: ${totalScore}`);

        if (!exploded.includes(false)) {
            gameOver();
        }

        return roll;
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