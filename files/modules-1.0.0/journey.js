let mapCanvas;
let lineStartX, lineStartY;
let scale;
let settingScale;

function setup() {
    settingScale = true;
    mapCanvas = element("mapOverlay");
    mapImage = element("mapImage");
    createCanvas(mapImage.width, mapImage.height, mapCanvas);
    noLoop();
}

function windowResized() {
    mapImage = element("mapImage");
    resizeCanvas(mapImage.width, mapImage.height);
    setScale();
}

function draw() {
    clear();
    if (settingScale) {
        strokeWeight(4);
        stroke("red");
    } else {
        strokeWeight(2);
        stroke("blue");
    }
    line(lineStartX, lineStartY, mouseX, mouseY);
    if (scale) {
        strokeWeight(4);
        stroke("red");
        line(scale.startX, scale.startY, scale.endX, scale.endY);
    }
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
    setComputedDistanceTo("");
    clear();
    settingScale = true;
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
        lineLength = dist(lineStartX, lineStartY, mouseX, mouseY);
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
            computeDistance();
        }
    }
}

function clearInput(aClassName) {
    updateInput(aClassName, "");
}

function updateInput(aClassName, value) {
    distanceInput = element(aClassName);
    $(distanceInput).val(value).change();
}

function computeDistance() {
    scaleDistance = numberFrom("scaleDistance");
    scaleInPixels = numberFrom("scaleInPixels");
    distanceInPixels = numberFrom("distanceInPixels");
    distance = ((distanceInPixels * scaleDistance) / scaleInPixels).toFixed(2);
    if (isFinite(distance)) {
        scaleUnit = valueOf("scaleUnit");
        setComputedDistanceTo(distance + " " + scaleUnit);
    } else {
        setComputedDistanceTo("");
    }

}

function numberFrom(aClassName) {
    return parseInt(valueOf(aClassName));
}

function valueOf(aClassName) {
    return (element(aClassName)).value;
}

function setComputedDistanceTo(aText) {
    computedDistance = element("computedDistance");
    computedDistance.innerHTML = aText;
}

function element(aClassName) {
    return document.getElementsByClassName(aClassName)[0];
}
