// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an arry containing magicians name
var magician_names = ["Harry Potter", "David Blaine", "Derren Brown"];
// call the function to print each magician name
show_magicians(magician_names);
