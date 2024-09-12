function configureServerSentEvents(eventSource) {
    eventSource.addEventListener("player-character-hero-status-updated", event=>{
        jsonData = JSON.parse(event.data);
        $("#" + jsonData.character + '-status').click();
    }
    );
	eventSource.addEventListener("dice-rolled", event=>{
        jsonData = JSON.parse(event.data);
        rollTo($("#" + jsonData.character + "-roll"), jsonData.roll);
    }
    );
}
