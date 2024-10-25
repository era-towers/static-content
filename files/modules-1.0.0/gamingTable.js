"use strict";

function configureServerSentEvents(eventSource) {
    eventSource.addEventListener("player-character-hero-status-updated", event => {
        const jsonData = JSON.parse(event.data);
        $("#" + jsonData.character + '-status').click();
    }
    );
    eventSource.addEventListener("dice-rolled", event => {
        const jsonData = JSON.parse(event.data);
        const companionDice = $("#" + jsonData.character + "-roll");
        if (companionDice.length !== 0) {
            rollTo(companionDice, jsonData.roll);
        }
    }
    );
    eventSource.addEventListener("game-master-roll", event => {
        const gameMasterDice = $(".game-master-dice");
        gameMasterDice.removeClass("keep-hidden");
        rollTo(gameMasterDice, "00");
    }
    );
}

function wereDiceAvailableForRolling() {
    const rollingDice = $(".diceContainer").children(".rolling-dice");
    const disabledBefore = ((rollingDice.attr("disabled")) == "disabled");
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
    const itemReference = parseInt($(event.target).closest("tr").children("td.itemReference").html());
    const actionWithReference = [action, itemReference];
    event.originalEvent.action = actionWithReference;
    return action;
}
