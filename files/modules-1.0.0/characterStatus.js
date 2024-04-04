function configureServerSentEvents(eventSource) {
    eventSource.addEventListener("player-character-hero-status-updated", event=>{
        jsonData = JSON.parse(event.data);
        $("." + jsonData.character).click();
    }
    );
}
