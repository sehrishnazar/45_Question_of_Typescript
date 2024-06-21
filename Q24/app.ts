// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
let car : string = "subaru";
let age : number =  25;
let numbers : number [] = [1, 2, 3, 4];


// String test
// Test 1 : Equality (True)
console.log ("is car == `subaru`? i predict true. ");
console.log (car == `subaru`); //(case sensitive


// test 2 : strict equality (false)
console.log ("is car === `subaru` ? i predict false");
console.log ( car === 'Subaru'); //false (case sensitive)

// test 3: Inequality (true)
console.log ("is car != `toyota` ? i predict true.")
console.log (car != `toyota`);

// test 4 : Inequality (false)

console.log("is car !== `subaru` ? i predict false")
console.log(car !==`Subaru`);




// ** Lowercase function test **
// Test :5 Lowercase conversion (true)
console.log ("is car.tolowercase () == `subaru` ? i predict true");
console.log (car . toLowerCase () == `subaru`);

// Test : 6 lowercase conversion (false)
console.log ("is car === car.tolowercase () ? i predict False");
console.log (car === car . toLowerCase () );



// **Numerical test **
// Test : 7 Equality (True)
console.log ("is age ==25 ? i predict true");
console.log (age == 25);




// Test : 8 Inequality (False)
console.log ("is age !=30 ? i predict true");
console.log (age != 30);



// Test : 9 Greater than (false)
console.log ("is age > 30 ? i predict False");
console.log (age > 30);




// Test :10 less than oe equal (true)

console.log ("is age <=25 ? i predict true");
console.log (age <= 25);





// **logical operator**
// Test : 11 AND (True)
console.log ( "is age >20 && age < 30 ? I predict true");
console.log (age >20 && age <30);


// Test : 12 OR (false)
console.log ( "is age >30 || age < 18 ? I predict true");
console.log ( age > 30 || age <18);





// Arry Test
// Test : 13 In arry (true)
console.log ( "is 3 in numbers? I predict true");
console.log ( 3 in numbers);

// Test : 14 not in Arry
console.log ( "is 5 not in numbers? I predict ");
console.log ( 5 in numbers);





















