let leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];
weapons = turtles.map(function(turtle){
  return turtle.weapon;
}).sort();
// weapons is now ["bo", "katana", "nunchaku", "sai"]. Sorted!
$("#response").html(weapons);
let addAnd = function(anArray){
  for (let i = 0; i<=anArray.length; i+=1){
    if (i === anArray.length-1){
      console.log("happened");
      anArray[i]="and "+anArray[i];
      return anArray;
    }

  }
};
let run = addAnd(weapons);
console.log(run);
let commas = run.join(", ");
// weapons is now "bo, katana, nunchaku, sai". Sorted, with commas.
$("#response").html(commas);
