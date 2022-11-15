function generatePolygon(){
    var userInput = parseInt(prompt("I think you will need a Polygon toy for your pet...Enter a number to find out what toy you can get!"));
    var polygonArray = ["Polygon with 0 sides does not exist", "Henagon", "Digon", "Trigon", "Tetragon", "Pentagon", "Hexagon", "Heptagon","Octagon", "Enneagon", "Decogon"];
    

if(isNaN(userInput))
{
    alert("Please enter a number!");
}
else{
    userInput = Math.abs(userInput);
    userInput = Math.round(userInput);
    alert("You get a " + polygonArray[userInput] + " toy!");
}




     
}