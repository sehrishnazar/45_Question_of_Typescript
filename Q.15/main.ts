// Q.no 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let Guest : string[]=["Honey", "Muzzmil", "Anabia"]
for (let i=0; i<Guest.length; i++)
    {console.log (` Dear ` + Guest[i] + `\nwould you like to join me for dinner?\n`)}


    let not_present: string="Honey" ;
let new_guest : string = "Jawaid" ;

Guest [0] = new_guest; 
for (let i=0; i<Guest.length; i++)

    {console.log (` Dear `+ Guest[i] + `\nwould you like to join me for dinner?\n`)}
console.log (`Miss , ${not_present} will not coming tomorrow for dinner. `)


