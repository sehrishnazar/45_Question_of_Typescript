// Q.no 16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.



let Guest_list : string[]=["Honey", "Muzzmil", "Anabia"]
// for (let i=0; i<Guest.length; i++)
//     {console.log (` Dear ` + Guest[i] + `\nwould you like to join me for dinner?\n`)}


    let notPresent: string="Honey" ;
let newguest : string = "Jawaid" ;

Guest_list [0] = newguest; 
for (let i=0; i<Guest_list.length; i++)

    {console.log (` Dear `+ Guest_list[i] + `\nwould you like to join me for dinner?\n`)}

    Guest_list.unshift("Miral","Aswad","shiffan");
     for (let i=0; i<Guest_list.length; i++)

     {console.log (` Dear `+ Guest_list[i] + `\nI found a bigger dinner table.\n`)}
