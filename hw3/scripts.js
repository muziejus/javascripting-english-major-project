let userInput;
userInput = prompt("Please enter a number", "Type your answer here.");
for (let i = 1; i <= userInput; i = i +1){
  if (i%2==1){
    $("#response").append("<br />" + i + " is odd");
  } else{
    $("#response").append("<br />" + i + " is even");
  }

}

//right now most of my mistakes are github mistakes. It always confuses me. Think I'm starting to get the hang of it though
