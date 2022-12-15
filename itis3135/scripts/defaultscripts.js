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


function multiplyNum(){
     const animalArray = ["Dogs", "Cats", "Mice", "Guinea Pigs", "Lizards", "Parrots"];
     var firstInput = parseInt(document.getElementById("first-num").value);
     var secondInput = parseInt(document.getElementById("second-num").value);
     const rando = animalArray[Math.floor(Math.random()*animalArray.length)];
     
     product = firstInput * secondInput;

     document.getElementById("demo-two").innerHTML = "We will purchase " + product + " " + rando + "!"; 
}


$(document).ready(function() {
     // Select the slides container
     var slides = $('#slideshow .slides');
     
     // Set the initial slide index to 0
     var currentSlide = 0;
     
     // Set the initial CSS properties for the slides container
     slides.css({
       'width': '300px',
       'height': '200px',
       'overflow': 'hidden',
       
     });
     
     // Select the slides and set their initial CSS properties
     slides.find('img').css({
       'width': '300px',
       'height': '200px',
       'float': 'left'
     }); 


     // Function to show the next slide
  function nextSlide() {
     // Increment the current slide index
     currentSlide++;
     
     // If the current slide index is greater than the total number of slides, set it back to 0
     if (currentSlide > slides.find('img').length - 1) {
       currentSlide = 0;
     }
     
     // Animate the slides container to the left by the width of one slide
     slides.animate({
       'margin-left': '-=300px'
     }, 500);
}

   // Function to show the previous slide
   function prevSlide() {
     // Decrement the current slide index
     currentSlide--;
     
     // If the current slide index is less than 0, set it to the last slide
     if (currentSlide < 0) {
       currentSlide = slides.find('img').length - 1;
     }
     
     // Animate the slides container to the right by the width of one slide
     slides.animate({
       'margin-left': '+=300px'
     }, 500);
   
     }})
     

$(document).ready(function() {
     // Select all of the images on the page
     var images = $('img');
     
     // Attach a click event listener to each image
     images.on('click', function() {
       // Get the source URL of the image that was clicked
       var src = $(this).attr('src');
       
       // Create an overlay element to display the image
       var overlay = $('<div id="overlay"></div>');
       
       // Set the CSS for the overlay element
       overlay.css({
         'position': 'absolute',
         'top': '0',
         'left': '0',
         'width': '100%',
         'height': '100%',
         'background': 'rgba(0, 0, 0, 0.7)',
         'z-index': '10'
       });
       
       // Create an image element to show the full-sized image
       var image = $('<img>');
       
       // Set the source URL for the image element
       image.attr('src', src);
       
       // Set the CSS for the image element
       image.css({
         'position': 'absolute',
         'top': '50%',
         'left': '50%',
         'transform': 'translate(-50%, -50%)',
         'max-width': '90%',
         'max-height': '90%'
       });
       
       // Append the image to the overlay element
       overlay.append(image);
       
       // Append the overlay to the body of the page
       $('body').append(overlay);
     });
     
     // Attach a click event listener to the overlay element to close it when it is clicked
     $(document).on('click', '#overlay', function() {
       $(this).remove();
     });
   });
   

   
 
// create event handlers for the next and previous buttons
$("#next").click(nextSlide);
$("#previous").click(prevSlide);