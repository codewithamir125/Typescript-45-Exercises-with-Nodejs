
// Q41.Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), 
// which prints the name of each magician in the array.


// Define a function to print each magician name from an arry

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}
// Define an arry conatining magicians name

let magician_names = ["Harry poter", "Hamza", "Usman"]

// Call the function to print each magician name

show_magicians(magician_names);