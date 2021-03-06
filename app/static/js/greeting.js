var gretting_key = '1bWKEX2i2KeVBxGNDZsA90rQ25U0L8G9mfRwpxcKBJQg';

var updateGreeting = function () {
  Papa.parse('https://docs.google.com/spreadsheets/d/1bWKEX2i2KeVBxGNDZsA90rQ25U0L8G9mfRwpxcKBJQg/pub?output=csv', {
      download: true,
      header: true,
      complete: function(results) {
		renderGreeting(results.data)
      }
    })
};

function renderGreeting(data) {
  var greetings = [];
  for(i = 0; i < data.length; i++) {
    for(prop in data[i]) {
	  greetings.push(data[i][prop])
    }
  }
  
  html = '<p id="greeting">'
  html += greetings[Math.floor(Math.random() * greetings.length)];
  html += '</p>'
  $("#greeting").html(html);
}

$(document).ready(function() {
	updateGreeting()
    setInterval(updateGreeting, 21600000);
});
