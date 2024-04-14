
// Q27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for 
// the appropriate color alien.



// Define Variable
let alienColor = "Green" ;

// Using IF and Else- IF StatmentS
if(alienColor === "Green"){
    console.log("(version 1)you shot down green aliean you have earned 5 points.");
}
else if(alienColor === "yellow"){;
    console.log("you shot down yellow aliean you have earned 10 points.");
}
else if(alienColor === "Red"){;
    console.log("you shot down Red aliean you have earned 15 points.");
}

// Verion 2

let alienColor2 = "yellow";

if(alienColor2 === "Green"){
console.log("you shot down green aliean you have earned 5 points.");
}
else if(alienColor2 === "yellow"){
    console.log("(verion 2)you shot down yellow aliean you have earned 10 points.");
}
else if(alienColor2 === "Red"){
    console.log("you shot down Red aliean you have earned 15 points.");
}

// Version 3

let alienColor3 = "Red";

if(alienColor3 ===  "Green"){
    console.log("you shot down green alien you have earnd 5 points");
}
    else if(alienColor3 === "yellow"){
        console.log("you shot down yellow aliean you have earned 10 points");
    }
    else if(alienColor3 === "Red"){
        console.log("(verion 3)you shot down Red aliean you have earned 15 points.");
    }