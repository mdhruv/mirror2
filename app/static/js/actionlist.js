var actionlist_key = '1Yx6V2g1T5KCnBDpiDsmEX_78ErgydqFMHb_NvA2BxvM';

var updateActionList = function () {
	  Papa.parse('https://docs.google.com/spreadsheets/d/1Yx6V2g1T5KCnBDpiDsmEX_78ErgydqFMHb_NvA2BxvM/pub?output=csv', {
	      download: true,
	      header: true,
	      complete: function(results) {
			renderActionList(results.data)
	      }
	    })
};

function renderActionList(data) {
  html = '<div id="actionlist">'
  for(i = 0; i < data.length; i++) {
    for(prop in data[i]) {
	  if (i == 0) {
	    html += '<span id="actionlistTitle">' + data[0][prop] + '</span><br><ul>'
	  } else {
	    html += '<li>'  + data[i][prop] + '</li>'
	  }
    }
    html += '</ul>'
  }
  html += '</div>'
  $("#actionlist").html(html);
}

$(document).ready(function() {
	updateActionList()
    setInterval(updateActionList, 6000);
});
