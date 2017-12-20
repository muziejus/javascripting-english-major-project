// 1. Set the content of #glosses.
$("#glosses").html("<p>The glosses will go here.</p>");
// 2. Set the content of #prologue.
$.getJSON("https://the-javascripting-english-major.org/prologue.json",
function(data){ // Note the data variable!
  console.log(data);
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
  $("#prologue a").click(function(){
    let glossText, clickedWord, modernWord, urlWord;
    clickedWord = $( this ).text();
    modernWord = $( this ).data("modern");
    urlWord = $( this ).data("url");//Not working. How do I do this?
    console.log(urlWord);//
    if(urlWord!==undefined){
      glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord + " You can also check out" + " <a href=\""+urlWord+"\""+"this link </a>" + "</h2>";
    }else{
      glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord +"</h2>";
    }
    console.log(glossText);
    $("#glosses").html(glossText);
  });
}); // Close the callback function & method.
// 3. Wait around for the user to click on an <a> tag inside #prologue
// and then change the content of #glosses.
