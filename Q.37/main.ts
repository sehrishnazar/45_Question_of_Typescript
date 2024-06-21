// Large Shirts: Modify the make_shirt() function so that shirts are large by default with 
// a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.

function make_shirt (size : string ="large", printMessage : string = "i love Typescript"){
    console.log(`You selected ${size} size with a message ${printMessage} printed on it`)
}
// calling a function by default values 
make_shirt ();
// calling a function now with Medium size and default message
make_shirt("Medium");
// calling a function now with small size and also different message
make_shirt ("small", "i love javascript");
