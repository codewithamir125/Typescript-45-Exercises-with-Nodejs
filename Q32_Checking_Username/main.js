// Arry Of Current Useres
var current_users = ["Usman", "ali", "Areeba", "zain", "Usama"];
// Arry Of New Users
var new_users = ["Hamza", "Ayesha", "ALI", "Mahad", "Areeba"];
// Loop Through new_users to check  for usernames availabilty
new_users.forEach(function (new_one_users) {
    // Making A Condition for Userames Already Exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLocaleLowerCase() === new_one_users.toLocaleLowerCase(); });
    // Print Diffrent Messages Using If_Else Statment
    if (our_condition) {
        console.log("sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_users, " is available"));
    }
});
