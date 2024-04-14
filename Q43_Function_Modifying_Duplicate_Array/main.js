// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify arry
function make_great(magicians) {
    return magicians.map(function (name) { return "Thw great ".concat(name); });
}
// Define an aryy of magicians names
var magician_names = ["Harry Poter", "Hamza", "Usman"];
// Making a copy of original arryy through .slice() function
var copy_magician_names = magician_names.slice();
// Modifiy the copied aryy to include "The Great" with their name
var copy_great_magicians = make_great(copy_magician_names);
// Show both aryys original and copied
// Original
console.log("Original Arry\n");
show_magicians(magician_names);
// Copied
console.log("\nCopied Arry");
show_magicians(copy_great_magicians);
