
// Q37. Large Shirts: Modify the make_shirt() function so that shirts are large 
// by default with a message that reads I love TypeScript. Make a large 
// shirt and a medium shirt with the default message, and a shirt of any size 
// with a different message.


// Making A Function 

function make_shirt (size: string = "Large", printMessage: string = "I Love Typescipt"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
}

// Caalling a Function with by-default values
make_shirt();

// Calling a function now with medium size and default message
make_shirt("Medium");

// Calling  a function now with small size and also diffrent print message
make_shirt("Small", "I Love Javascript");