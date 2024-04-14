// Creating A Arry
var userNames = ["Aamir", "Ali", " Zeeshan", "Admin", "Usman"];
// Using ForEach Loop On Arry
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thank you for logging in Again."));
    }
});
