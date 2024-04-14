var userNames = ["Amir", "Ali", "Zeshan", "Admin", "Usman"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Aryy in empty we need to find some user!");
}
else {
    // using ForEach Loop on Arry
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thank you for logging in Again."));
        }
    });
}
