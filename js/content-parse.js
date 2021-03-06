function parseContent(depictionFolder) {
  var depictionPath;
  var currentApp;
  var lastPath;
  $(".app, .bottom-bar, .append").each(function(){
    $(this).find(".description").not(".noappend").each(function() {
      currentApp = this.getAttribute("app");
      depictionPath = depictionFolder + currentApp + ".json";
      lastPath = depictionFolder + currentApp + ".json";
      $.ajax({
        url: depictionPath,
        async: false,
        dataType: 'json',
        success: function (data) {
          JSONData = data;
          console.log("yeet");
          console.log(depictionPath);
        }
      });
      $(this).attr("data-depictionJSON", depictionPath);
    });
    $(this).find(".app-name").not(".noappend").each(function() {
      currentApp = this.getAttribute("app") || "default";
      depictionPath = depictionFolder + currentApp + ".json";
      if (depictionPath !== lastPath) {
        $.ajax({
          url: depictionPath,
          async: false,
          dataType: 'json',
          success: function (data) {
            JSONData = data;
            console.log(depictionPath);
          }
        });
      }
      lastPath = depictionFolder + currentApp + ".json";
      $(this).attr("data-depictionJSON", depictionPath);
      appendAppName(depictionPath, $(this), JSONData);
    });
    $(this).find(".subtitle").not(".noappend").each(function() {
      currentApp = this.getAttribute("app") || "default";
      depictionPath = depictionFolder + currentApp + ".json";
      if (depictionPath !== lastPath) {
        $.ajax({
          url: depictionPath,
          async: false,
          dataType: 'json',
          success: function (data) {
            JSONData = data;
            console.log(depictionPath);
          }
        });
      }
      lastPath = depictionFolder + currentApp + ".json";
      $(this).attr("data-depictionJSON", depictionPath);
      appendSubtitleContent(depictionPath, $(this), JSONData);
    });
    $(this).find(".app-icon-wrapper").not(".noappend").each(function() {
      currentApp = this.getAttribute("app") || "default";
      depictionPath = depictionFolder + currentApp + ".json";
      if (depictionPath !== lastPath) {
        $.ajax({
          url: depictionPath,
          async: false,
          dataType: 'json',
          success: function (data) {
            JSONData = data;
            console.log(depictionPath);
          }
        });
      }
      lastPath = depictionFolder + currentApp + ".json";
      $(this).attr("data-depictionJSON", depictionPath);
      appendIcon(depictionPath, $(this), "app-icon", JSONData);
    });
    $(this).find(".btn-download").not(".noappend").each(function() {
      currentApp = this.getAttribute("app") || "default";
      depictionPath = depictionFolder + currentApp + ".json";
      if (depictionPath !== lastPath) {
        $.ajax({
          url: depictionPath,
          async: false,
          dataType: 'json',
          success: function (data) {
            JSONData = data;
            console.log(depictionPath);
          }
        });
      }
      lastPath = depictionFolder + currentApp + ".json";
      $(this).attr("data-depictionJSON", depictionPath);
      appendBtnDownloadContent(depictionPath, $(this), JSONData);
    });
    $(this).find(".bottom-bar").each(function() {
      currentApp = this.getAttribute("app") || "default";
      depictionPath = depictionFolder + currentApp + ".json";
      if (depictionPath !== lastPath) {
        $.ajax({
          url: depictionPath,
          async: false,
          dataType: 'json',
          success: function (data) {
            JSONData = data;
            console.log(depictionPath);
          }
        });
      }
      lastPath = depictionFolder + currentApp + ".json";
      $(this).attr("data-depictionJSON", depictionPath);
      appendBottomBarColor(depictionPath, $(this), JSONData);
    });
  });
}
function parseJSON(path) {
  $.ajax({
    url: path,
    async: false,
    dataType: 'json',
    success: function (data) {
      JSONData = data;
      console.log("OOOOOOOOOOF");
    }
  });
  return JSONData;
}
