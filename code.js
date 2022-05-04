$("button#roll").on("click", rollDice);

function rollDice(event) {
    event.preventDefault();

    //roll dice
    let die;
    let score = 0;

    for (let i = 0; i < 5; i++) {
        die = Math.floor(Math.random() * 6) + 1;
        $(`td#d${i + 1}`).text(die);

        //count score
        if (die !== 2 && die !== 5) {
            score += die;
        }

        //explode 2's and 5's
        if (die === 2 || die === 5) {
            $(`td#d${i +1}`).addClass("exploded");
        }
    }

    //display score
    $("h2#score").text(`Score: ${score}`);
}