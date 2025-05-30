"use strict";
let mapCanvas;
let lineStartX, lineStartY;
let scale;
let settingScale;
let distances;
let segments;

function setup() {
    settingScale = true;
    mapCanvas = element("mapOverlay");
    let mapImage = element("mapImage");
    createCanvas(mapImage.width, mapImage.height, mapCanvas);
    noLoop();
    clearSegments();
}

function windowResized() {
    let mapImage = element("mapImage");
    resizeCanvas(mapImage.width, mapImage.height);
    setScale();
}

function draw() {
    clear();
    drawLineInProgress();
}

function drawLineInProgress() {
    if (settingScale) {
        strokeWeight(4);
        stroke("red");
        line(lineStartX, lineStartY, mouseX, mouseY);
    } else {
        strokeWeight(2);
        stroke("blue");
        segments.forEach(drawSegment);
        line(lineStartX, lineStartY, mouseX, mouseY);
        drawScale();
    }
}

function drawSegment(segment, index, array) {
    line(segment.startX, segment.startY, segment.endX, segment.endY);
}

function drawScale() {
    strokeWeight(4);
    stroke("red");
    line(scale.startX, scale.startY, scale.endX, scale.endY);
}

function setScale() {
    scale = {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
    };
    clearInput("distanceInPixels");
    clearInput("scaleInPixels");
    clearSegments();
    settingScale = true;
}

function resetTrip() {
    clearInput("distanceInPixels");
    clearSegments();
    updateInput("totalDistanceAmount", 0);
    if (scale) {
        drawScale();
    }
}

function clearSegments() {
    setDistanceDetailTo("");
    distances = [];
    segments = [];
    clear();
}

function mousePressed() {
    if (mapCanvas.matches(':hover')) {
        lineStartX = mouseX;
        lineStartY = mouseY;
        loop();
    }
}

function mouseReleased() {
    noLoop();
    if (mapCanvas.matches(':hover')) {
        let lineLength = dist(lineStartX, lineStartY, mouseX, mouseY);
        if ((settingScale)) {
            updateInput("scaleInPixels", Math.round(lineLength));
            scale = {
                startX: lineStartX,
                startY: lineStartY,
                endX: mouseX,
                endY: mouseY
            };
            element("scaleDistance").focus();
            element("scaleDistance").select();
            settingScale = false;
        } else {
            updateInput("distanceInPixels", Math.round(lineLength));
            segments.push({
                startX: lineStartX,
                startY: lineStartY,
                endX: mouseX,
                endY: mouseY
            });
            computeDistance();
        }
    }
}

function clearInput(aClassName) {
    updateInput(aClassName, "");
}

function updateInput(aClassName, value) {
    let distanceInput = element(aClassName);
    distanceInput.innerHTML = value;
    $(distanceInput).val(value).change();
}

function computeDistance() {
    let scaleDistance = numberFrom("scaleDistance");
    let scaleInPixels = numberFrom("scaleInPixels");
    let distanceInPixels = numberFrom("distanceInPixels");
    let distance = ((distanceInPixels * scaleDistance) / scaleInPixels);
    if (isFinite(distance)) {
        addToDistances(distance);
    }
}

function addToDistances(distance) {
    distances.push(distance);
    let sum = 0;
    let text = "";
    distances.forEach( (segmentDistance) => {
        sum = sum + segmentDistance;
        text = text + "+" + segmentDistance.toFixed(0);
    }
    );
	sum = Math.round(sum);
    let scaleUnit = selectionOf("scaleUnit");
    setDistanceDetailTo(text.slice(1) + "=" +sum .toFixed(0) + " " + scaleUnit);
    updateInput("totalDistanceAmount", sum);
}

function numberFrom(aClassName) {
    return parseInt(valueOf(aClassName));
}

function valueOf(aClassName) {
    return (element(aClassName)).value;
}

function selectionOf(aClassName) {
    let dropdown = element(aClassName);
    return (dropdown.children[dropdown.value - 1]).innerHTML;
}

function setDistanceDetailTo(aText) {
    let distanceDetail = element("distanceDetail");
    distanceDetail.innerHTML = aText;
}

function element(aClassName) {
    return document.getElementsByClassName(aClassName)[0];
}
