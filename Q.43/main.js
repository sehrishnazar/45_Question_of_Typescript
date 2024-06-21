// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians()
//  with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Harry Potter", "David Blaine", "Derren Brown"];
// making a copy of origianl arry through .slice() function
var copy_magicians_name = magician_names.slice();
// Modifythe copied arry to include "the great" with their names
var copy_great_magicians = make_great(copy_magicians_name);
// show both arrys original and copied
// original
console.log("Original Array\n");
show_magicians(magician_names);
// copied
console.log("\ncopied array\n");
show_magicians(copy_great_magicians);
