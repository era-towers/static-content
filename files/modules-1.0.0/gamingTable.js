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
            if (jsonData.hidden) {
                companionDice.addClass("hideDiceRolls");
                rollTo(companionDice, "00");
            } else {
                companionDice.removeClass("hideDiceRolls");
                rollTo(companionDice, jsonData.roll);
                $("#refresh-player-rolls").click();
            }
        }
    }
    );
    eventSource.addEventListener("game-master-roll", event => {
        const gameMasterDice = $(".game-master-dice");
        const jsonData = JSON.parse(event.data);
        gameMasterDice.removeClass("keep-hidden");
        if (jsonData.hidden) {
            gameMasterDice.addClass("hideDiceRolls");
            rollTo(gameMasterDice, "00");
        } else {
            gameMasterDice.removeClass("hideDiceRolls");
            rollTo(gameMasterDice, jsonData.roll);
        }
    }
    );
}

function resetPlayerDice() {
    const playerDice = $(".diceContainer");
    resetRollTo(playerDice, "00");
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

// AUTOCOMPLETE

$.widget("custom.categorizedautocomplete", $.ui.autocomplete, {
    _create: function() {
        this._super();
        this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
    },
    _renderMenu: function(ul, items) {
        var that = this
          , currentCategory = "";
        $.each(items, function(index, item) {
            var li;
            if (item.category != currentCategory) {
                ul.append("<li class='ui-autocomplete-category " + item.categoryClassification + "'>" + item.category + "</li>");
                currentCategory = item.category;
                ul.children().last().on('click', function() {
                    that.search("@" + item.category);
                });
            }
            li = that._renderItemData(ul, item);
            if (item.category) {
                li.attr("aria-label", item.category + " : " + item.label);
            }
        });
    }
});

// RECORDING

let verbalCommandBase64 = '';
let mediaStream;
let mediaRecorder;

async function startRecording() {
    if (mediaRecorder && mediaRecorder.state === "recording") {
        console.log("Recording is already in progress.");
        return;
    }
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });
        const chunks = [];
        mediaRecorder = new MediaRecorder(mediaStream,{
            mimeType: 'audio/webm'
        });
        mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
                chunks.push(e.data);
            }
        }
        ;
        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks,{
                type: mediaRecorder.mimeType
            });
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                verbalCommandBase64 = document.querySelector("audio.verbalCommand")
                verbalCommandBase64.src = reader.result;
                verbalCommandBase64.click();
            }
            ;
        }
        ;
        mediaRecorder.start();
    } catch (err) {
        console.error("Error requesting microphone access:", err);
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
        }
    } else {
        console.log("No active recording to stop.");
    }
}
