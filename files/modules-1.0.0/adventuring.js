function configureServerSentEvents(eventSource) {
    eventSource.addEventListener("dice-rolled", event => {
        jsonData = JSON.parse(event.data);
        playerCharacterDice = $("#" + jsonData.character + "-roll");
        if (playerCharacterDice.length !== 0) {
			playerCharacterDice.removeClass("keep-hidden");
            rollTo(playerCharacterDice, jsonData.roll);
        }
    });
}
