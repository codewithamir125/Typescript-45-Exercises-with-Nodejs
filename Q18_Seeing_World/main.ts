
//Q18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order 
// has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order.
// Print the list to show that its order has changed.


// Making arry of countries and print its original order
let countriesTovist: string[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("originalorder", countriesTovist);

// Print the Aryy in Alphabatical order without modifying the acutual aryy List
console.log("Alphabaticalorder:", [...countriesTovist].sort());

// Show that the Aryy is still in its original Order
console.log("stille in orognal order:", countriesTovist);

// Print the arry in reversed order without modifying the actual Aryy List
console.log("Reverseorder:", [...countriesTovist].reverse());

// Show that the Aryy is still in its original Order
console.log("stille in orognal order:", countriesTovist);

// We have Changed the Original Aryy Order Now
console.log("Original Aryy Reversed:",countriesTovist.reverse());

// Print the Aryy to show that its back to its orignal Order
console.log("Back to Orignal Order:", countriesTovist.reverse());

// Print the Aryy to show that its Order Has been changed in Aphabatical order now
console.log("Sorted in Alphabatical Order:", countriesTovist.sort());


// We have Changed Again the Original Aryy Order Now in Reverse order Again
console.log("Original Aryy Reversed:",countriesTovist.reverse());