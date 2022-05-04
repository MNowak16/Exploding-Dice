$("button#roll").on("click", rollDice);

function rollDice(event) {
    event.preventDefault();

    //randomize dice roll
    let die;
    for (let i = 0; i < 5; i++) {
        die = Math.floor(Math.random() * 6) + 1;
        $(`td#d${i + 1}`).text(die);
    }

    //explode 2's and 5's

    //count score

    //display score
}