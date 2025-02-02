"use strict";

function configureServerSentEvents(eventSource) {
    eventSource.addEventListener("dice-rolled", event => {
        const jsonData = JSON.parse(event.data);
        const playerCharacterDice = $("#" + jsonData.character + "-roll");
        if (playerCharacterDice.length !== 0) {
			playerCharacterDice.removeClass("keep-hidden");
            rollTo(playerCharacterDice, jsonData.roll);
			$("#refresh-pending-rolls").click();
        }
    });
}
