let userInput;
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if ( userInput === "burrito" ) {
    $("#response").html("Brilliant choice!");
} else {
    $("#response").html("Don't you want a burrito?");
}

