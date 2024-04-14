
// Q44.Sandwiches: Write a function that accepts a array of items a person wants 
// on a sandwich. The function should have one parameter that collects as many items 
// as the function call provides, and it should print a summary of the sandwich that is being ordered.
// Call the function three times, 
// using a different number of arguments each time.




// Define a function with a rest parameter that acept items arguments represnting our sandwich
function make_sandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    
    items.forEach(singleItem => console.log(singleItem));
    
    console.log("\n Now Enjoy sandwich")
        
    }

// Call the function 3 times with 3 diffrent number of arguments

make_sandwich("Chiken", "Cheese", "Mayo", "Egg");

make_sandwich("Bread", "Butter");

make_sandwich("Bread", "Butter", "Mayo","Egg", "Cheese", "Chicken" , " Tomato")