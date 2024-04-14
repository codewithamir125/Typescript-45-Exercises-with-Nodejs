

var guestList = ["Hamza", "Amir", "Usman", "Ayesha"];
var dontCome = guestList[0];
console.log(dontCome, "Nai aa sakta");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Saalam ".concat(guest, ", would u like to dinner with me?")); });
