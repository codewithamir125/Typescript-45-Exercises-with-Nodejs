
// Q16. More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.
 
// • Add one new guest to the beginning of your array.
 
//• Add one new guest to the middle of your array. • Use append() to add one new guest 
// to the end of your list. • Print a new set of invitation messages, one for each person in your list.


// Creating a guest list Arry
let guestList = ["Hamza", "usman","Ayesha","Areeba"];

// Making variable for those guest who cant come
let dontCome = guestList[0];

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
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of Arry
guestList.splice(middleIndex, 0, "usama")

// Print Message of updated List
console.log("Updated List Of Our Guests");

// Sending a invitation message to our guests one by one with thear names
guestList.forEach(oneguest => console.log (`Salam ${oneguest}, would u like to dinner with me?`));