var current_users = [
    "sehrish", "Honey", "Muzzmil", "Miral", "anabia"
];
var new_users = [
    "shiffan", "shaffy", "jawaid", "majid", "sehrish"
];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, "is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
