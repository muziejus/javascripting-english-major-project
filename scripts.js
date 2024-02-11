let tipCalculator;
tipCalculator = function(total, tipRate) {
    //Calculate the percentage of the total as a variable "tipAmount"
    let tipAmount;
    tipAmount = tipRate * total;
    //Change #response to tell us the tip amount
    $("#response").html("Your tip is $" + tipAmount);
};
//Now execute the function, passing a total of $50 and rate of 20%
tipCalculator(100, 0.2);


