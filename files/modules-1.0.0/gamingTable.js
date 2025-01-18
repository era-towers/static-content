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
					that.search("@"+item.category);
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

let mediaRecorder;
let verbalCommand;

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const constraints = {
        audio: true
    };
    let chunks = [];

    let onSuccess = function(stream) {
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.onstop = function(e) {
            const blob = new Blob(chunks,{
                type: mediaRecorder.mimeType
            });
            chunks = [];

            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function() {
                verbalCommand = document.querySelector("audio.verbalCommand");
                verbalCommand.src = reader.result;
                verbalCommand.click();
            }
        }

        mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
        }
    };

    let onError = function(err) {
        console.log("The following error occured: " + err);
    };

    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
} else {
    console.log("Could not get permission for user media")
}

function startRecording() {
    mediaRecorder.start();
}

function stopRecording() {
    mediaRecorder.stop();
}
