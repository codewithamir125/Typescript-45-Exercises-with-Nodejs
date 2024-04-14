
// Creating a guest list Arry
var guestList = ["Hamza", "usman", "Ayesha", "Areeba"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
//print the name of guest who cant come
console.log(dontCome, "Nai aa saktay ha");
//add or remove values from guest list arry
guestList.splice(0, 1, "Amir");
//Message print for Bigger table
console.log("Good News! We Have Found a Bigger Table For Dinner");
// Adding a new value at starting index of arry
guestList.unshift("Ali");
// Adding a new guest at Endind index of Arry
guestList.push("zain");
// Get a middle index of our guest list Arry
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Arry
guestList.splice(middleIndex, 0, "usama");
// Print Message of updated List
console.log("Updated List Of Our Guests");
// Sending a invitation message to our guests one by one with thear names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would u like to dinner with me?")); });
