
function inform(){
  
  document.getElementById("submit").innerHTML = "Your response has been recorded!"
  
}

$(document).ready(function() {
  $("#accordion").accordion({
      active: false,
      collapsible: true
  });
});