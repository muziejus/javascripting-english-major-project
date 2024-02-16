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
Function expressions are inside a larger expression or statement; the name is optional

The above example has a function named map or line1.map. It has one parameter, word. It has one statement "return word.text". Map is a method. It finds the text properties in the line 1 array by executing the function word by word

Objects are a way of storing data; functions are a way of storing actions that you are going to take again and again
(Loralyn tutorial: https://www.youtube.com/watch?v=nDPv8R2lFa4)