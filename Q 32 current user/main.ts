let current_users : string []=[
    "sehrish", "Honey", "Muzzmil", "Miral", "anabia"
]
let new_users : string []=[
    "shiffan", "shaffy", "jawaid","majid","sehrish"
]

new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    if(our_condition){
        console.log(`sorry ${new_one_user}is already taken!`)
    }else{
    console.log(`This Username ${new_one_user} is available`)
}
});


