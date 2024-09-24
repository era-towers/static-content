function configureServerSentEvents(eventSource) {
    eventSource.addEventListener("player-character-hero-status-updated", event => {
        jsonData = JSON.parse(event.data);
        $("#" + jsonData.character + '-status').click();
    });
    eventSource.addEventListener("dice-rolled", event => {
        jsonData = JSON.parse(event.data);
        companionDice = $("#" + jsonData.character + "-roll");
        if (companionDice.length !== 0) {
            rollTo(companionDice, jsonData.roll);
        }
    });
    eventSource.addEventListener("game-master-roll", event => {
		gameMasterDice = $(".game-master-dice");
		gameMasterDice.removeClass("keep-hidden");
        rollTo(gameMasterDice, "00");
    });
}

function wasDisabled(rollingDiceContainer) {
    rollingDice = $(rollingDiceContainer).children(".rolling-dice");
    disabledBefore = ((rollingDice.attr("disabled")) == "disabled");
    rollingDice.attr("disabled", "disabled");
    return disabledBefore;
}