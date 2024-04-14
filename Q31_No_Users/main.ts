
// Q31 .No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let userNames = [ "Amir", "Ali", "Zeshan", "Admin", "Usman"]

userNames = []

if (userNames.length === 0){
    console.log("Your Aryy is empty we need to find some user!")

}else{

// using ForEach Loop on Arry
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
      }else{
        console.log(`Hello ${oneUser}, Thank you for logging in Again.`)
      }
})
}