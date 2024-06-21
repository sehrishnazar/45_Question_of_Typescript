"use strict";
// Q no.17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Guestlist = ["Honey", "Muzzmil", "Anabia"];
// for (let i=0; i<Guestlist.length; i++)
//     {console.log (` Dear ` + Guest[i] + `\nwould you like to join me for dinner?\n`)}
// let not_Present: string="Honey" ;
// let newGuest : string = "Jawaid" ;
// Guestlist [0] = newguest; 
// for (let i=0; i<Guestlist.length; i++)
// {console.log (` Dear `+ Guestlist[0] + `\nwould you like to join me for dinner?\n`)}
Guestlist.unshift("Miral", "Aswad", "shiffan");
//  for (let i=0; i<Guestlist.length; i++)
//  {console.log (` Dear `+ Guestlist[0] + `\nI found a bigger dinner table.\n`)}
console.log("\n unfortunately we can not arrange big table, only two people allow.");
while (Guestlist.length > 2) {
    var remove_guest = Guestlist.pop();
    console.log("sorry sir/madam, ".concat(remove_guest, "youb are not invited for the dinner"));
}
for (var i = 0; i < Guestlist.length; i++) {
    console.log(" Dear " + Guestlist[0] + "\n yes you are still invited on tomorrow dinner.\n");
}
Guestlist.splice(0, 2);
console.log(Guestlist);
// Q.no 18  Seeing the World: Think of at least five places in the world you’d like to visit.
var places = [
    "capetown", "Danmark", "Faisalbad", "Bankok", "Ahmedabad"
];
console.log("original " + places);
// • Print your array in alphabetical order without modifying the actual list.
console.log("copy " + __spreadArray([], places, true).sort());
// • Show that your array is still in its original order by printing it.
console.log("original " + places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("copy " + __spreadArray([], places, true).sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("copy " + __spreadArray([], places, true).sort().reverse());
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("original " + places.sort());
//// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("original " + places.sort().reverse());
// Q.no 19Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var app_1 = require("../Question no14/app");
console.log("\n printing number of guest invited\n");
console.log("we had finally invited ".concat(app_1.guest_list.length, " from excercise 14"));
// Q.no 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var languages = [
    "English", "Urdu", "Franch", "Arabic", "Korean"
];
console.log("list of languages:");
for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
    var top_1 = languages_1[_i];
    console.log(top_1);
}
