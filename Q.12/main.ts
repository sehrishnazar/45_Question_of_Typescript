// Q.12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let Names : string []= [
    "Hafsa", "Sidra","Honey", "Muzzmil"
]
let messages : string= "how are you ";
for (let i = 0; i< Names.length; i++)
{console.log(messages +  Names[i] );}
