var timeoutIds, animationDuration = 1000;

function settleRollOn(dies, dieIndex, face) {
    clearTimeout(timeoutIds[dieIndex]);
    $(dies[dieIndex]).attr('data-face', face);
}

function startRollingTo(dies, dieIndex, face) {
    $(dies[dieIndex]).addClass('rolling');
    clearTimeout(timeoutIds[dieIndex]);
    timeoutIds[dieIndex] = setTimeout(function() {
        $(dies[dieIndex]).removeClass('rolling')

        settleRollOn(dies, dieIndex, face)
    }, animationDuration);

    return false;
}

function rollTo(container, rollString, fieldId) {
    rollingDice = container.find(".rolling-dice");
    rollingDice.removeClass('fading-dice');
    dies = container.find('.die');
    timeoutIds = [0, 0];
    strings = (rollString + "").split(",");
    lastNumberString = strings[strings.length - 1].padStart(2, "0").slice(-2);
    startRollingTo(dies, 0, Number(lastNumberString[0]));
    startRollingTo(dies, 1, Number(lastNumberString[1]));
    setTimeout(()=>{
        $("#" + fieldId).val(rollString).change();
    }
    , animationDuration);
    setTimeout(()=>{
        rollingDice.addClass('fading-dice');
    }
    , animationDuration * 1.5);
}
