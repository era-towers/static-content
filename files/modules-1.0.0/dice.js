"use strict";
const animationDuration = 1000;

function settleRollOn(dies, dieIndex, face) {
    $(dies[dieIndex]).attr('data-face', face);
}

function startRollingTo(dies, dieIndex, face) {
    $(dies[dieIndex]).addClass('rolling');
    setTimeout( () => {
        $(dies[dieIndex]).removeClass('rolling')
        settleRollOn(dies, dieIndex, face)
    }
    , animationDuration);
    return false;
}

function rollTo(container, rollString) {
    const rollingDice = container.find(".rolling-dice");
    if ((rollingDice.length) == 0)
        return;
    rollingDice.removeClass('fading-dice');
    const dies = container.find('.die');
    const strings = (rollString + "").split(",");
    const lastNumberString = strings[strings.length - 1].padStart(2, "0").slice(-2);
    startRollingTo(dies, 0, Number(lastNumberString[0]));
    startRollingTo(dies, 1, Number(lastNumberString[1]));
    setTimeout( () => {
        rollingDice.addClass('fading-dice');
        rollingDice.removeAttr('disabled');
    }
    , animationDuration * 1.5);
}

function resetRollTo(container, rollString) {
    const rollingDice = container.find(".rolling-dice");
    const dies = container.find('.die');
    const strings = (rollString + "").split(",");
    const lastNumberString = strings[strings.length - 1].padStart(2, "0").slice(-2);
    settleRollOn(dies, 0, Number(lastNumberString[0]));
    settleRollOn(dies, 1, Number(lastNumberString[1]));
}
