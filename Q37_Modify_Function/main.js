"use strict";
// Making A Function 
function make_shirt(size = "Large", printMessage = "I Love Typescipt") {
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);
}
// Caalling a Function with by-default values
make_shirt();
// Calling a function now with medium size and default message
make_shirt("Medium");
// Calling  a function now with small size and also diffrent print message
make_shirt("Small", "I Love Javascript");
