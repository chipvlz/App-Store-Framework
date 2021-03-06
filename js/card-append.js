function appendCardCSS(path, element, JSONData) {
    if (JSONData == undefined) {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
            JSONData = data;
            console.log("Parsed a JSON");
            }
        });
    }
    element.css({
        "min-height": JSONData.minHeight,
        "background": "url(" + JSONData.background + ") center",
        "background-size": "cover"
    });
}
function appendCardText(path, element, type, JSONData) {
    if (JSONData == undefined) {
        $.ajax({
            url: path,
            async: false,
            dataType: 'json',
            success: function (data) {
            JSONData = data;
            console.log("Parsed a JSON");
            }
        });
    }
    var appendedText = JSONData[type];
    element.html("" + appendedText);
}
