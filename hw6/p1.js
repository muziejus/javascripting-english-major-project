let integersArray;
integersArray = [1,2,3,4];
let addTwo = integersArray.map(function(integer){
  return integer+2;
});
//the array called addTwo now is [3,4,5,6]
$("#response").html(addTwo);
