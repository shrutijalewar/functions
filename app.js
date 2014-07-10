var prompt = require("sync-prompt").prompt;

function increment(x){
  x = x+1
    //x++ alternative way to write it.
    return x;
}

var z = increment (3);
console.log(z);
z = increment(7);
console.log(z);
z = increment(9);
console.log(z);

function square(y){
  y = y*y;
  return y;
  }
var z = square (2);
console.log(z);

var z = square(125);
console.log(z)

 function area (l,w){
  var a = l*w;
  return a;
  //or return l*w
 }

var room = area(10,10);
  console.log(room);

function vol (l,w,h){
var v = area (l,w) * h;
return v;
}

var e = vol(10, 10, 6);
  console.log (e);

var m;
m = area(square(increment(3) + increment(4)),square(2));

console.log(m);

function say(){
return "say Hello";
}
console.log(say());

function sayHello(){
  console.log("hello");
}

say()

var word = "string" ;

function UP(a){return a.toUpperCase()};

console.log(UP(word));


function CanDrink(age){
if(age < 21){return false;}else
{return true;}
}

//return (age , 21);

var age = 21
console.log(CanDrink(age));

function LetterGrade(gradeN){
  if(gradeN > 89 && gradeN < 101){return "A";}
 else if(gradeN < 90 && gradeN > 79){return 'B';}
  else if(gradeN < 80 && gradeN > 69){return 'C';}
 else if(gradeN < 70 && gradeN > 59){return 'D';}
 else if(gradeN < 60 ){return 'E';}}

 console.log(LetterGrade(79));
 

function addTax(ex,tax){return ex + (tax/100 * ex);}

console.log(addTax(55,10));


function Sum(num){
 var  asum = 0;for(a = 0; a < num.length; a++){asum += num[a]};
return asum;
}
num = [4,5,6,2,4,];
console.log(Sum(num));

function factorial(f)
{
  if(f === 0 || f === 1){return 1;}
  if(f > 0){return factorial(f-1) * f }
}
console.log(factorial(5));

console.log(factorial(10));
console.log(factorial(4));
console.log(factorial(21));

// for loop for factorial function
 
function factorial(f) {
  var product = 1;
  for (var i = 2; i <= f; i++){
    product *= i;
  }
  return product;
  }


console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(10));



function rollDie(){
  return Math.floor(Math.random() * 6) + 1;

}

console.log(rollDie());


function isPair(roll1, roll2){
  return roll1 === roll2;
}

var z;

for(var i = 0; i < 10; i++){
  z = rollDie();
  console.log('roll: ', z);
}

//got to check this out and correct it

function countPairs(n){ var pairs = 0;
  for( var i = 1; i = n; i++){
if(isPair(rollDie(), rollDie())){
pairs++;
}
  }}

console.log(countPairs(100));



