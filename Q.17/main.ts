// Q no.17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let Guestlist : string[]=["Honey", "Muzzmil", "Anabia"]
// for (let i=0; i<Guestlist.length; i++)
//     {console.log (` Dear ` + Guest[i] + `\nwould you like to join me for dinner?\n`)}


    // let not_Present: string="Honey" ;
// let newGuest : string = "Jawaid" ;

// Guestlist [0] = newguest; 
// for (let i=0; i<Guestlist.length; i++)

    // {console.log (` Dear `+ Guestlist[0] + `\nwould you like to join me for dinner?\n`)}

    Guestlist.unshift("Miral","Aswad","shiffan");
    //  for (let i=0; i<Guestlist.length; i++)

    //  {console.log (` Dear `+ Guestlist[0] + `\nI found a bigger dinner table.\n`)}
console.log (`\n unfortunately we can not arrange big table, only two people allow.`)
while (Guestlist. length>2 ){
    let remove_guest = Guestlist.pop ();
    console.log (`sorry sir/madam, ${remove_guest}youb are not invited for the dinner`);
} 
     for (let i=0; i<Guestlist.length; i++)

     {console.log (` Dear `+ Guestlist[0] + `\n yes you are still invited on tomorrow dinner.\n`)}

     Guestlist . splice( 0,2)
     console .log (Guestlist) 



