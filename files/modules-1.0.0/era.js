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
components.keydown( function(e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        if(key == 13) {
            e.preventDefault();
            var inputs = $(this).closest('form').find(':input:visible');
            inputs.eq( inputs.index(this)+ 1 ).focus();
            return false;
        }
    });
}

function interpretEnterAsRemoteClick(components,classToClick) {
components.keydown( function(e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        if(key == 13) {
            e.preventDefault();
            var clickTargets = $("." + classToClick);
			e.target.blur();
			clickTargets.click();
        }
    });
}

function changeEnterToAccept(dialogClass,buttonSetClass) {
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

function uploadFileContents (fileFieldClass, fileContentClass) {
        var reader = new FileReader();
		reader.onload = () => {
			var fileContent = $("."+fileContentClass);
			fileContent.val(reader.result);
			fileContent.change();
		};
		var fileUpload = $("."+fileFieldClass)[0];
		reader.readAsDataURL(fileUpload.files[0]);
}

Willow.handleAjaxErrorCall = function(theXMLHttpRequest, textStatus, errorThrown) {
	var supportText = "\n\nIf you require assistance, please post your issue in the support forum:\nhttp://www.ironcrown.com/ICEforums/index.php?board=21.0\nor send a mail with the log file to:\nera-support.voriigkye@recursor.net\n\n";
	if (theXMLHttpRequest.getAllResponseHeaders()) {alert(
	"That action was not accepted by the server. Please confirm that it is in accordance with the current rule set." + supportText + "-- Technical Details --\nStatus: " + theXMLHttpRequest["status"] +"\nResponse: " + theXMLHttpRequest["responseText"] +"\nText Status: "+ textStatus + "\nError Thrown: " + errorThrown )}
	else (alert("ERA Server is not responding. Please try restarting."+ supportText + "-- Technical Details --\nText Status: "+ textStatus + "\nError Thrown: " + errorThrown));
}
