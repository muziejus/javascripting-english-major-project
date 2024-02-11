# Week 9: Building a Dataset


Printing the first line

~~~
$("#prologue").html("<p>The text of the Prologue will go here.</p>");
$("#glosses").html("<p>The glosses will go here.</p>");

let line1, line1text;

line1 = [{text: "Whan", modern: "When"}, {text: "that"}, {text: "Aprill,", modern: "April,"}, {text: "with"},
{text: "his"}, {text: "shoures", modern: "showers"}, {text: "soote", modern: "sweet"}];
//Added the property "modern" to the objects in the array line1

line1text = line1.map(function(word) {
    return word.text;
}).join(" ");
//.map creates a new array from line1's objects from thier "text" property
//joining the "text" properties prints the first line

$("#prologue").html("<p>" + line1text + "<br /></p>");
~~~
