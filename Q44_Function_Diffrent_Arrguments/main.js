


// Define a function with a rest parameter that acept items arguments represnting our sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\n Now Enjoy sandwich");
}
// Call the function 3 times with 3 diffrent number of arguments
make_sandwich("Chiken", "Cheese", "Mayo", "Egg");
make_sandwich("Bread", "Butter");
make_sandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", " Tomato");
