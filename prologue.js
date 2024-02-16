$("#prologue").html("<p>The text of the Prologue will go here.</p>");
$("#glosses").html("<p>The glosses will go here.</p>");

//step 2
$.getJSON("C:\Users\Amanda\Documents\GitHub\javascripting-english-major-project\prologue.json", function(data){ // Note the data variable!
    let prologueText; // Define the variable you didn’t need before.
    prologueText = "<blockquote><p>"; // Open the tags.
    // Now you can iterate over the data variable’s .lines property:
    data.lines.forEach(function(line){ // We get a variable, line.
      // Define a blank lineText.
      let lineText;
      lineText = "";
      // Now iterate over each line. This part should be familiar.
      line.forEach(function(word){
        let wordString;
        wordString = word.text;
        if (word.modern){
          wordString = "<a href='#' data-modern='" + word.modern + "'>" + wordString + "</a>";
        }
        lineText = lineText + wordString + " ";
      });
      // Add lineText with a line break to the prologueText.
      prologueText = prologueText + lineText + "<br/>";
    });
    // Close the prologueText tags.
    prologueText = prologueText + "</p></blockquote>";
    // Replace the content of #prologue.
    $("#prologue").html(prologueText);
  }); // Close the callback function & method.
  
//step 3
$("#prologue a").click(function(){
    let glossText, clickedWord, modernWord;
    clickedWord = $( this ).text();
    modernWord = $ ( this ).data("modern");
    glossText = "<h2>You clicked on: " + clickedWord + ", which means " + modernWord + "</h2>";
    $("#glosses").html(glossText);
});
///the jQuery selector $("#prologue a") selects every <a> tag in #prologue
//the click method tells it to execute a function when a user clicks
//the function is created using the append method