"use strict";

function configureServerSentEvents(eventSource) {
    eventSource.addEventListener("player-character-hero-status-updated", event=>{
        const jsonData = JSON.parse(event.data);
        $("." + jsonData.character).click();
    }
    );
}
