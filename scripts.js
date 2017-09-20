// 1. Write a program so that when you reload your page, 
// it asks for a number and prints all the numbers from 1 to it, including it.

let input;
input = prompt("Enter your input");

for (let i = 1 ; i <= input ; i = i + 1){
  $("#response").append(i + "<br>");
}

// 2. Building on that program, create it so that instead of printing the number, 
// it prints something like:

// This is the #response div.
// 1 is odd.
// 2 is even.
// 3 is odd.

// for (let i = 1 ; i <= input ; i = i + 1){
//   if (i % 2 === 0){
//     $("#response").append(i + " is even.<br>");
//   } else {
//     $("#response").append(i + " is odd.<br>");
//   }
// }


// $("#response").append();

// 3. Building on the previous program, have it print the same, 
// except without that ugly “This is the #response div.” line.

// $("#response").html("");
// for (let i = 1 ; i <= input ; i = i + 1){
//   if (i % 2 === 0){
//     $("#response").append(i + " is even.<br>");
//   } if (i % !== 0) {
//     $("#response").append(i + " is odd.<br>");
//   }
// }
