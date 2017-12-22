let total;
total = prompt("What's the price of the item?");
let tipRate;
tipRate = prompt("What's the tip rate as a percentage or a decimal?");

let tipCalculator;
tipCalculator = function(total, tipRate){
  // step 1:
  let tipAmount;
  if(tipRate < 1){
  tipAmount = tipRate * total;
} else{
  tipAmount = tipRate * .01 * total;
}
  // and step 2:
  $("#response").html("Your tip is $" + tipAmount);
};

// Now call (or “execute”) the function, passing a
// total of $50.00 and a tipRate of 20%:

tipCalculator(total, tipRate);
