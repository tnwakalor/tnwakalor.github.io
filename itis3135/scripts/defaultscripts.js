function scriptTest(){
     var name = document.getElementById("full-name");
     document.getElementById("demo").innerHTML = "Hello, " + name;
}

var dt = new Date();


function refreshTime() {
    const timeDisplay = document.getElementById("date-time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);