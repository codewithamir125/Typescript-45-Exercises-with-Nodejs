// Define Variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = [" Apple", "Banana", "Orange"];
// Test for equality and inequality with srtings
console.log("is apple is euqal to apple?");
console.log(apple == "apple");
console.log("\n is apple is not euqal to apple?");
console.log(apple != "apple");
// Test using Lowercase Function;
console.log("\n is apple is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\n is apple is  not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical Tests
// Equal to
console.log("\n is 10 is equal to twenty");
console.log(ten == twenty);
// Not Equal to
console.log("\n is 10 is not equal to twenty");
console.log(ten != twenty);
// Greater than
console.log("\n is 10 is greater than zero");
console.log(ten > 0);
// Less Than
console.log("\n is 20 is less than 10");
console.log(twenty < 10);
// Greater than or Equal to
console.log("\n is 10 is greater than or equal to?");
console.log(ten >= 5);
// Less than or Equal to
// using && (and)
console.log("\n is twenty is Less than or equal to 10");
console.log(twenty <= 10);
// Tests  using "and" & "or" operators
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
// Tests Wether an item is include in Arry
console.log(" Is orange include in my fruits array");
console.log(fruits.includes("orange"));
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Not Include
console.log("\n is orange not include in my Fruits arry");
console.log(!fruits.includes("orange"));
