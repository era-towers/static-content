var animationDuration = 1000;

function settleRollOn(dies, dieIndex, face) {
    $(dies[dieIndex]).attr('data-face', face);
}

function startRollingTo(dies, dieIndex, face) {
    $(dies[dieIndex]).addClass('rolling');
    setTimeout(function() {
        $(dies[dieIndex]).removeClass('rolling')

        settleRollOn(dies, dieIndex, face)
    }, animationDuration);

    return false;
}

function rollTo(container, rollString) {
    rollingDice = container.find(".rolling-dice");
    if ((rollingDice.length) == 0)
        return;
    rollingDice.removeClass('fading-dice');
    dies = container.find('.die');
    strings = (rollString + "").split(",");
    lastNumberString = strings[strings.length - 1].padStart(2, "0").slice(-2);
    startRollingTo(dies, 0, Number(lastNumberString[0]));
    startRollingTo(dies, 1, Number(lastNumberString[1]));
    setTimeout(() => {
        rollingDice.addClass('fading-dice');
    }, animationDuration * 1.5);
    setTimeout(() => {
        rollingDice.removeAttr('disabled');
    }, animationDuration * 2);
}