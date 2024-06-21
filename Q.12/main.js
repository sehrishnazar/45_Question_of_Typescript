// Q.12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var Names = [
    "Hafsa", "Sidra", "Honey", "Muzzmil"
];
var messages = "how are you ";
for (var i = 0; i < Names.length; i++) {
    console.log(messages + Names[i]);
}
