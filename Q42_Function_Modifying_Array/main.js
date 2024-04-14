


// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "Thw great ".concat(name); });
}
// Define an aryy of magicians names
var magician_names = ["Harry Poter", "Hamza", "Usman"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
