"use strict";

function configureServerSentEvents(eventSource) {
    eventSource.addEventListener("dice-rolled", event => {
        const jsonData = JSON.parse(event.data);
        showToast(jsonData.character + " rolled " + jsonData.roll);
        $("#refresh-pending-declarations").click();
    }
    );
    eventSource.addEventListener("declaration", event => {
        $("#refresh-pending-declarations").click();
    }
    );
}

function showToast(message) {
    let $container = $('#ui-toast-container');
    if ($container.length === 0) {
        $container = $('<div>', {
            id: 'ui-toast-container'
        }).appendTo('body');
    }

    const $toast = $('<div>', {
        class: 'ui-toast',
        text: message
    });

    $container.append($toast);

    $toast.show('drop', {
        direction: 'right'
    }, 400);

    setTimeout(function() {
        $toast.hide('fade', {}, 400, function() {
            $(this).remove();

            if ($container.children().length === 0) {
                $container.remove();
            }
        });
    }, 3000);
}
