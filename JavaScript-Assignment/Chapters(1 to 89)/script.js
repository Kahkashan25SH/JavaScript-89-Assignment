//                                 ********** ASSIGNMENT # 21 TO 25 ***********
// ----- STRING METHODS --------

// 1. Write a program that takes two user inputs for first and last name using prompt 
//    and merge them in a new variable titled fullName. Greet the user using his full name.

let firstName = prompt("Q:1 \n Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Ans:1 \nHello, " + fullName);




// 2. Write a program to take a user input about his favorite mobile phone model. 
//    Find and display the length of user input in your browser.

let userInput = prompt("Q:2 \nEnter your favorite mobile phone model:");
let userInputLength = userInput.length;
alert("Ans:2 \n The length of your favorite mobile phone model is: " + userInputLength);




// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

let word = "Pakistani";
let letterIndex = word.indexOf("n");
alert("Ans:3 \nThe index of letter 'n' in the word 'Pakistani' is: " + letterIndex);





// 4. Write a program to find the last index of letter “l” in the word “Hello World”
//    and display the result in your browser.

let word2 = "Hello World";
let lastLetterIndex = word2.lastIndexOf("l");
alert("Ans:4 \nThe last index of letter 'l' in the word 'Hello World' is: " + lastLetterIndex);




// 5. Write a program to find the character at 3rd index in the word “Pakistani” 
//    and display the result in your browser.

let word3 = "Pakistani";
let thirdCharacter = word3[2];
alert("Ans:5 \nThe character at index 3 in the word 'Pakistani' is: " + thirdCharacter);




// 6. Repeat Q1 using string concat() method.

let word4 = "Pakistani";
let concatWord = word4.charAt(2) + word4.charAt(3) + word4.charAt(4);
alert("Ans:6 \nThe result using concat() method is: " + concatWord);




// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” 
//     and display the result in your browser.

let cityName = "Hyderabad";
let updatedCityName = cityName.replace("Hyder", "Islam");
alert("Ans:7 \nThe updated city name is: " + updatedCityName);




// 8. Write a program to replace all occurrences of “and” in the string with “&” 
//    and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

let message = "Ali and Sami are best friends. They play cricket and football together.";
let updatedMessage = message.replace(/and/g, "&");
alert("Ans:8 \nThe updated message is: " + updatedMessage);



// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

let stringNumber = "472";
let number = parseInt(stringNumber);
alert("Ans:9 \nValue: " + number);
alert("Ans:9 \nType: " + typeof number);




// 10. Write a program that takes user input. Convert and show the input in capital letters.

let userInputCapital = prompt("Q:10 \nEnter a string:");
let capitalizedInput = userInputCapital.toUpperCase();
alert("Ans:10 \nThe capitalized input is: " + capitalizedInput);




// 11. Write a program that takes user input. Convert and show the input in title case.

let userInputTitleCase = prompt("Q:11 \nEnter a string:");
let titleCaseInput = userInputTitleCase.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
alert("Ans:11 \nThe title case input is: " + titleCaseInput);





// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;
//     Remove the dot to display “3536” display in your browser.


let num = 35.36;

let stringNum = num.toString().replace(".", "");

alert("Ans:12 \nThe string representation of the number is: " + stringNum);





// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


let usernameInput = prompt("Q:13 \nEnter a username:");

let specialSymbolRegex = /[@.,!]/;

if (specialSymbolRegex.test(usernameInput)) {
    alert("Ans:13 \nInvalid username. Please enter a valid username with no special symbols.");
} else {
    alert("Ans:13 \nValid username: " + usernameInput);

}





// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

let array = ["cake", "apple pie", "cookie", "chips", "patties"];

let userSearchInput = prompt("Ans:14 \nWellcome to United Bakery.what do you want to order sir/mam:");

let lowercaseUserSearchInput = userSearchInput.toLowerCase();

let foundItem = array.some(item => item.toLowerCase() === lowercaseUserSearchInput);

if (foundItem) {
    alert("Ans:14 \nitem is found in the list.");
} else {
    alert("Ans:14 \nItem not found in the list.");   
}



// 15. Write a program to take password as an input from user. The password must qualify these requirements:
//     a. It should contain alphabets and numbers
//     b. It should not start with a number
//     c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


let passwordInput = prompt("Q:15 \nEnter a password:");

let passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?!.*[0-9].*[0-9]).{6,}$/;

if (passwordRegex.test(passwordInput)) {
    alert("Ans:15 \nValid password.");
} else {
    alert("Ans:15 \nInvalid password. Please enter a valid password with at least 6 characters, including at least one uppercase letter, one lowercase letter, and one number.");
}






// 16. Write a program to convert the following string to an array using string split method.
//     var university = “University of Karachi”;
// Display the elements of array in your browser

let university = "University of Karachi";

let universityArray = university.split("");

alert(universityArray);






// 17. Write a program to display the last character of a user input.

let userInputLastCharacter = prompt("Q:17 \nEnter a string:");

let lastCharacter = userInputLastCharacter[userInputLastCharacter.length - 1];

alert("Ans:17 \nThe last character of the string is: " + lastCharacter);





// 18. You have a string “The quick brown fox jumps over the lazy dog”.
//      Write a program to count number of occurrences of word “the” in given string.

let string = "The quick brown fox jumps over the lazy dog";

let wordCount = (string.match(/the/gi) || []).length;

alert("Ans:18 \nNumber of occurrences of the word 'the' in the given string is: " + wordCount);










// ---------------------------------------- The End ----------------------------------------