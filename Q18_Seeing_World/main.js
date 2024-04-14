


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making arry of countries and print its original order
var countriesTovist = ["China", "Denmark", "Brazil", "Argentina"];
console.log("originalorder", countriesTovist);
// Print the Aryy in Alphabatical order without modifying the acutual aryy List
console.log("Alphabaticalorder:", __spreadArray([], countriesTovist, true).sort());
// Show that the Aryy is still in its original Order
console.log("stille in orognal order:", countriesTovist);
// Print the arry in reversed order without modifying the actual Aryy List
console.log("Reverseorder:", __spreadArray([], countriesTovist, true).reverse());
// Show that the Aryy is still in its original Order
console.log("stille in orognal order:", countriesTovist);
// We have Changed the Original Aryy Order Now
console.log("Original Aryy Reversed:", countriesTovist.reverse());
// Print the Aryy to show that its back to its orignal Order
console.log("Back to Orignal Order:", countriesTovist.reverse());
// Print the Aryy to show that its Order Has been changed in Aphabatical order now
console.log("Sorted in Alphabatical Order:", countriesTovist.sort());
// We have Changed Again the Original Aryy Order Now in Reverse order Again
console.log("Original Aryy Reversed:", countriesTovist.reverse());
