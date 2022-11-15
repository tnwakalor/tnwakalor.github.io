function scriptTest(){
     var name = document.getElementById("full-name").value;
     var feeling = document.getElementById("feeling").value;
     document.getElementById("demo").innerHTML = "Hello, " + name + "!" + " Tochway Consulting welcomes you to our website! We're glad you're doing " + feeling;
    
}


function refreshTime() {
     const timeDisplay = document.getElementById("date-time");
     const dateString = new Date().toLocaleString();
     const formattedString = dateString.replace(", ", " - ");
     timeDisplay.textContent = formattedString;
   }
   setInterval(refreshTime, 1000);


function calculatePets(){
     var firstNum = parseInt(prompt("Quick! Enter one of your favorite numbers!"));
     var secondNum = parseInt(prompt("Enter another one!"));

     
     totalPets = firstNum + secondNum;
     alert("You can only have " + totalPets + " Pets!");
     
}

function convertTemp(){
     var celsius = parseInt(prompt("Enter your temperature value"))
  
     var farenheit = (celsius * 1.8) + 32;

     alert(celsius + " celsius is " + farenheit + " farenheit!");
}

