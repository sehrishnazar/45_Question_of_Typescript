// Alien Colors #3: Turn your if-else chain from Exercise 25-24 into an if-else chain.
var alien_color = "green";
// // • If the alien is green, print a message that the player earned 5 points.
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
}
// // • If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color == "yellow") {
    console.log("the player just earned 10 points.");
}
//• If the alien is red, print a message that the player earned 15 points.
else if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("please select right color");
}
// // • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// // Version : 2
alien_color = "red";
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("the player just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("please select right color");
}
// Version : 3
alien_color = "yellow";
if (alien_color == "green") {
    console.log("the player just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("the player just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("please select right color");
}
