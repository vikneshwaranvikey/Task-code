/*
const amount = [100, 200, -100, -200, 300, 400, 1000, 500];

for (let i = 0; i < amount.length; i++) {
  console.log(amount[i]);
}

amount.forEach(function (value, index) {
  console.log(value + ":" + index);
});
*/
/*
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  console.log(index + ": " + item);
}
*/

//javascript
//-----------
//Prime no
//----------
/*
for (var limit = 2; limit <= 20; limit++) {
  var PN = true;

  for (var i = 2; i <= limit; i++) {
    if (limit % i == 0 && i != limit) {
      PN = false;
    }
  }
  if (PN == true) {
    document.write("<br>prime number :" + limit);
  }
}
*/
//Given number is prime or not.
//----------
/*
var no = 4;
var count = 0;
for (var i = 2; i < no; i++) {
  if (no % i == 0) {
    count++;
  }
}
if (count > 0) {
  console.log("This number is not Prime");
} else {
  console.log("This number is Prime");
}
*/

//Check if given number is positive, negative or zero.
//----------------------------------------------------
/*
const n = 0;
if (n > 0) {
  console.log("Positive");
} else if (n < 0) {
  console.log(`Negative`);
} else {
  console.log(`Zero`);
}
*/

// Find the largest among three numbers.
//--------------------------------------
/*
let a = 20;
let b = 100;
let c = 90;

if (a > b && a > c) {
  console.log("A is largest:  " + a);
} else if (b > a && b > c) {
  console.log("B is largest:  " + b);
} else {
  console.log("C is largest:  " + c);
}
*/

// Reverse the given string.
//---------------------------
//split is arry function
//reverse is arry function
//but join is convert string

/*
var string = "vikey";
var output = string.split("").reverse().join("");
console.log(output);
*/
//Display the sum of natural numbers upto 100.
//----------------------------------------------        //This Formula to run n*(n+1)/2
//var n=parseInt(window.prompt("Enteh the number:"));
/*
var n = 100;
var sum = 0;
for (var i = 1; i <= n; i++) {
  sum += i;
}

console.log(`The sum of ${n} natural number is ${sum}`);
*/

//(IF) condition alternat use (Switch Case)
//-----------------------------------------------------------------------------------------

/*
const n = 5;
switch (true) {
  case n > 0:
    console.log("Positive");
    break;
  case n < 0:
    console.log("Negative");
    break;
  default:
    console.log(`Zero`);
}
*/
/*
let a = 20;
let b = 50;
let c = 30;
switch (true) {
  case a > b && a > c:
    console.log("A is largest:  " + a);
    break;
  case b > a && b > c:
    console.log("B is largest:  " + b);
    break;
  default:
    console.log("C is largest:  " + c);
}
*/
