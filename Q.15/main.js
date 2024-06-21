// Q.no 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var Guest = ["Honey", "Muzzmil", "Anabia"];
for (var i = 0; i < Guest.length; i++) {
    console.log(" Dear " + Guest[i] + "\nwould you like to join me for dinner?\n");
}
var not_present = "Honey";
var new_guest = "Jawaid";
Guest[0] = new_guest;
for (var i = 0; i < Guest.length; i++) {
    console.log(" Dear " + Guest[i] + "\nwould you like to join me for dinner?\n");
}
console.log("Miss , ".concat(not_present, " will not coming tomorrow for dinner. "));
