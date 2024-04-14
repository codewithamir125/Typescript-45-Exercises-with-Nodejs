
// Q32. Checking Usernames: Do the following to create a program that simulates how 
// websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the 
// new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. If a username  
// has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used,  
// 'JOHN' should not be accepted.


// Arry Of Current Useres
let current_users = [ "Usman", "ali", "Areeba", "zain", "Usama"]

// Arry Of New Users
let new_users = ["Hamza", "Ayesha", "ALI", "Mahad", "Areeba"]

// Loop Through new_users to check  for usernames availabilty

new_users.forEach(new_one_users => {
   
   // Making A Condition for Userames Already Exist and save in our_condition variable
    let our_condition = current_users.some(current_one_users => current_one_users.toLocaleLowerCase() === new_one_users.toLocaleLowerCase())

   // Print Diffrent Messages Using If_Else Statment
    if(our_condition){
        console.log(`sorry ${new_one_users} is already taken!`)

    }else{
        console.log(`This username ${new_one_users} is available`)
    }
})