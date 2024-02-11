$("#prologue").html("<p>The text of the Prologue will go here.</p>");
$("#glosses").html("<p>The glosses will go here.</p>");

let line1, line1text;
line1 = [{text: "Whan", modern: "When"}, {text: "that"}, {text: "Aprill,", modern: "April,"}, {text: "with"},
{text: "his"}, {text: "shoures", modern: "showers"}, {text: "soote", modern: "sweet"}];
//line1 is an array of objects with two properties, "text" and "modern"

//Create a blank string that opens two tags: 
line1text = "<blockquote><p>";
line1.forEach(function(word){
    let wordString;
    wordString = word.text;
    if (word.modern){
        wordString = `<a href='#' data-modern='${word.modern}'>${wordString}</a>`;
    }
    line1text = line1text + wordString + " ";
});
line1text = line1text + "<br /></p></blockquote>";

$("#prologue").html(line1text);

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