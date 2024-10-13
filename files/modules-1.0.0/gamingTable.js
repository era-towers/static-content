function configureServerSentEvents(eventSource) {
    eventSource.addEventListener("player-character-hero-status-updated", event=>{
        jsonData = JSON.parse(event.data);
        $("#" + jsonData.character + '-status').click();
    }
    );
    eventSource.addEventListener("dice-rolled", event=>{
        jsonData = JSON.parse(event.data);
        companionDice = $("#" + jsonData.character + "-roll");
        if (companionDice.length !== 0) {
            rollTo(companionDice, jsonData.roll);
        }
    }
    );
    eventSource.addEventListener("game-master-roll", event=>{
        gameMasterDice = $(".game-master-dice");
        gameMasterDice.removeClass("keep-hidden");
        rollTo(gameMasterDice, "00");
    }
    );
}

function wereDiceAvailableForRolling() {
    rollingDice = $(".diceContainer").children(".rolling-dice");
    disabledBefore = ((rollingDice.attr("disabled")) == "disabled");
    rollingDice.attr("disabled", "disabled");
    return !disabledBefore;
}

function infoOrRoll(event, infoButton, infoAction, rollButton, rollAction) {
    if (event.originalEvent.action !== undefined) {
        return event.originalEvent.action;
    } else {
        if (event.target.classList.contains(infoButton)) {
            return storeAction(event, infoAction);
        } else {
            if (event.target.classList.contains(rollButton)) {
                return checkAndStoreAction(event, rollAction);
            } else {
                return [];
            }
        }
    }
}

function checkAndStoreAction(event, action) {
    if (wereDiceAvailableForRolling()) {
        return storeAction(event, action)
    }
    return [];
}

function storeAction(event, action) {
    itemReference = parseInt($(event.target).closest("tr").children("td.itemReference").html());
    action = [action, itemReference];
    event.originalEvent.action = action;
    return action;
}
