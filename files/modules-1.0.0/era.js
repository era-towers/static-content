function showRadMenu(menuId, listClass) {
    var menu = $("#".concat(menuId));
    if (menu.radmenu("items").data("shown")) {
        menu.radmenu("hide")
    } else {
        ($(".".concat(listClass))).parent().radmenu("hide");
        menu.radmenu("show")
    }
}

function markShownItems(items) {
    items.data("shown", true);
    items.show();
}

function clickRelatedImage(selection) {
    var targetId = selection.children("img").attr("id");
    var targetButton = $("#" + targetId, "ul");
    targetButton.click()
}

function changeEnterToTab(components) {
    components.keydown(function(e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        if (key == 13) {
            e.preventDefault();
            var inputs = $(this).closest('form').find(':input:visible');
            inputs.eq(inputs.index(this) + 1).focus();
            return false;
        }
    });
}

function interpretEnterAsRemoteClick(components, classToClick) {
    components.keydown(function(e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        if (key == 13) {
            e.preventDefault();
            var clickTargets = $("." + classToClick);
            e.target.blur();
            clickTargets.click();
        }
    });
}

function changeEnterToAccept(dialogClass, buttonSetClass) {
    /* https://stackoverflow.com/a/13522434 */
    $(document).delegate("." + dialogClass, 'keydown', function(e) {
        if (isSubmitUndefined(e) && isEnterInExpectedTag(e)) {
            $(this).find("." + buttonSetClass + ' button').eq(0).trigger('click');
            return false;
        }
    });
}

function isSubmitUndefined(event) {
    return ($(event.target).closest("form").prop("onsubmit") === null);
}

function isEnterInExpectedTag(event) {
    var tagName = event.target.tagName.toLowerCase();
    tagName = (tagName === 'input' && event.target.type === 'button') ? 'button' : tagName;
    return (event.which === $.ui.keyCode.ENTER && tagName !== 'textarea' && tagName !== 'select' && tagName !== 'button');
}

function closeTooltips(contentClass, dialogClass) {
    $("body").click(function(event) {
        $("." + contentClass).dialog("isOpen") && !$(event.target).is("." + dialogClass + ", a") && !$(event.target).closest("." + dialogClass).length ? $("." + contentClass).dialog("close") : null
    })
}

function uploadFileContents(fileFieldClass, fileContentClass) {
    var reader = new FileReader();
    reader.onload = () => {
        var fileContent = $("." + fileContentClass);
        fileContent.val(reader.result);
        fileContent.change();
    };
    var fileUpload = $("." + fileFieldClass)[0];
    reader.readAsDataURL(fileUpload.files[0]);
}

Willow.handleAjaxErrorCall = function(theXMLHttpRequest, textStatus, errorThrown) {
    var supportText = "\n\nIf you require assistance, please post your issue in the support forum:\nhttp://www.ironcrown.com/ICEforums/index.php?board=21.0\nor send a mail with the log file to:\nera-support.voriigkye@recursor.net\n\n";
    if (theXMLHttpRequest.getAllResponseHeaders()) {
        alert(
            "That action was not accepted by the server. Please confirm that it is in accordance with the current rule set." + supportText + "-- Technical Details --\nStatus: " + theXMLHttpRequest["status"] + "\nResponse: " + theXMLHttpRequest["responseText"] + "\nText Status: " + textStatus + "\nError Thrown: " + errorThrown)
    } else(alert("ERA Server is not responding. Please try restarting." + supportText + "-- Technical Details --\nText Status: " + textStatus + "\nError Thrown: " + errorThrown));
}

function drawDistinguisher(id, text) {
    imageElement = document.getElementById(id);
    
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const width = imageElement.width;
    const height = imageElement.height;

	canvas.width = width;
    canvas.height = height;
    context.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height);

    const fontSize = 2 * width / context.measureText(text).width;

	context.font = `${fontSize}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.fillStyle = 'white';
    context.strokeStyle = 'black';
    context.lineWidth = 4;

	const startingWidth = width * 0.75;
    const startingHeight = height * 0.3;

    context.strokeText(text, startingWidth, startingHeight);
	context.fillText(text, startingWidth, startingHeight);

    imageElement.src = canvas.toDataURL();
}

function drawTextOnImage(id, text) {
    imageElement = document.getElementById(id);
    
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const width = 80;
    const height = 80;

	canvas.width = width;
    canvas.height = height;
    context.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height);

    const lines = fittedLines(context, text, width * 0.6);
    const fontSize = 7.5 * width * lines.length / context.measureText(text).width;

	context.font = `${fontSize}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';

	const startingWidth = width / 2;
    const startingHeight = (height / 2) - ((lines.length - 1) * (fontSize / 2));

    lines.forEach((line, i) => {
        context.fillText(line, startingWidth, startingHeight + i * fontSize);
    });

    imageElement.src = canvas.toDataURL();
}


function fittedLines(context, text, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = context.measureText(`${currentLine} ${word}`).width;
        if (width < maxWidth) {
            currentLine += ` ${word}`;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}