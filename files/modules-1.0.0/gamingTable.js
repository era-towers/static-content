function configureServerSentEvents(eventSource) {
    eventSource.addEventListener("dice-rolled", event=>{
        jsonData = JSON.parse(event.data);
        rollTo($("#" + jsonData.character), jsonData.roll);
    }
    );
    eventSource.addEventListener("player-character-heroes-changed", event=>{
        $("." + "refresh-mats").click();
    }
    );
}
