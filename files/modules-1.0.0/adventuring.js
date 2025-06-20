"use strict";

function configureServerSentEvents(eventSource) {
    eventSource.addEventListener("dice-rolled", event => {
			$("#refresh-pending-declarations").click();
    });
    eventSource.addEventListener("declaration", event => {
			$("#refresh-pending-declarations").click();
    });
}
