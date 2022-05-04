$("button#roll").on("click", rollDice);

function rollDice(event) {
    event.preventDefault();

    //roll dice
    let die;
    let score = 0;
    let roll = [];

    for (let i = 0; i < 5; i++) {
        die = Math.floor(Math.random() * 6) + 1;
        $(`td#d${i + 1}`).text(die);

        //append die to roll
        roll.push(die);

        //count score
        //if 2 or 5 in array of die......
        if (roll.includes(2) || roll.includes(5)) {
            score = 0;
        } else {
            score += die;
        }

        //explode 2's and 5's
        if (die === 2 || die === 5) {
            $(`td#d${i +1}`).addClass("exploded");
        }
    }

    //display score
    $("h2#score").text(`Score: ${score}`);

    //if class != exploded, roll again

}