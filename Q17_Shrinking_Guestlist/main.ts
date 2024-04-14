
// Q17. Shrinking Guest List: You just found out that your new dinner table won’t arrive 
// in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message 
// saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them 
// know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know 
// they’re still invited.

// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.


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
// Get a middle index of our guest list Arr
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Arry
guestList.splice(middleIndex, 0), "usama";
// Print Message of updated List
console.log("Updated List Of Our Guests");
// Sending a invitation message to our guests one by one with thear names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would u like to dinner with me?")); });

//inform that only two guest can be invited for dinner
console.log("unfortunately, the new diner table wont arive at time,so i can only invite two guest to diner with me");

while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest} i cant invite you to dinner`);
}
// Sending a invitation to the last two guest in the list
console.log("invitation to the last 2 guests");

guestList.forEach(lasttwo => console.log(`luckly ${lasttwo}, you are still invited to the dinner`));

// Removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List", guestList)