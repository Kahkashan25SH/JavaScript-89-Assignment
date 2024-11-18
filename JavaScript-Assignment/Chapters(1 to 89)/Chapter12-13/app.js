//                    ********** ASSIGNMENT # 12 TO 13 ***********

// ------IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS --------

//  1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
//     number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

                                       console.log(`Ans# 1`);
                                       

let inputChar = 'A'; 

if (typeof inputChar === 'number') {
  console.log('Input is a number');
} else if (inputChar >= 'A' && inputChar <= 'Z') {
  console.log('Input is an uppercase letter');
} else if (inputChar >= 'a' && inputChar <= 'z') {
  console.log('Input is a lowercase letter');
} else {
  console.log('Input is neither a number nor a letter');
}





//  2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

                                      console.log(`Ans# 2`);

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else if (num1 < num2) {
  console.log(`${num2} is greater than ${num1}`);
} else {
  console.log(`${num1} and ${num2} are equal`);
}








//  3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
                              console.log(`Ans# 3`);
                                       

let userInput =parseInt(prompt('Q3: (Enter a number:)'));

if (userInput > 0) {
  console.log('Number is positive');
} else if (userInput < 0) {
  console.log('Number is negative');
} else {
  console.log('Number is zero');
}






//  4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

                            console.log(`Ans# 4`);

let character = 'a'; // Replace this with your desired character

if (character.toLowerCase() === 'a' || character.toLowerCase() === 'e' || character.toLowerCase() === 'i' || character.toLowerCase() === 'o' || character.toLowerCase() === 'u') {
  console.log(true);
} else {
  console.log(false);
}









//  5. Write a program that
//     a. Store correct password in a JS variable.
//     b. Asks user to enter his/her password
//     c. Validate the two passwords:
//   i. Check if user has entered password. If not, then give message “ Please enter your password”
//  ii. Check if both passwords are same. If they are same, show message “Correct! The password you
//      entered matches the original password”. Show “Incorrect password” otherwise.

                                       console.log(`Ans# 5`);

let correctPassword = 'password123'; 

let userPassword = prompt('Q5:(Enter your password:) ');

if (!userPassword) {
  console.log('Please enter your password');
} else if (userPassword === correctPassword) {
  console.log('Correct! The password you entered matches the original password');
} else {
  console.log('Incorrect password');
}












//  6. This if/else statement does not work. Try to fix it:
//     var greeting;
//     var hour = 13;
//     if (hour < 18) {
//     greeting = "Good day";
//     else
//     greeting = "Good evening";
//     }

                                       console.log(`Ans# 6`);
let greeting;
let hour = 13;

if (hour < 18) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}
console.log(greeting); // Output: Good evening







//   7. Write a program that takes time as input from user in 24hours clock format like: 1900 = 7pm.
//      Implement the following case using if, else & else if statements

                                       console.log(`Ans# 7`);


let time24 = prompt("Q#7: (Enter time in 24-hour format:)");

time24 = parseInt(time24, 10);

if (isNaN(time24) || time24 < 0 || time24 > 2359) {
    console.log("Invalid input. Please enter time in 24-hour format (0000 to 2359).");
} else if (time24 === 0) {
    console.log("12:00 AM");
} else if (time24 > 0 && time24 < 1200) {
    let hours = Math.floor(time24 / 100);
    let minutes = time24 % 100;
    console.log(`${hours}:${minutes.toString().padStart(2, "0")} AM`);
} else if (time24 === 1200) {
    console.log("12:00 PM");
} else {
    let hours = Math.floor(time24 / 100) - 12;
    let minutes = time24 % 100;
    console.log(`${hours}:${minutes.toString().padStart(2, "0")} PM`);
}



//                      -------------------------- END -------------------------------------