//                           **************** ASSIGNMENT # 9 TO 11 *****************

// -------- USER INPUT & CONDITIONAL STATEMENT -------

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
//    “Welcome to city of lights”

const cityName = prompt("Enter your city name:");

if (cityName === "karachi") {
  alert("Welcome to city of lights 💡 ");
} else{
  (cityName === undefined)
  alert("Wellcome 💐 to your city ");
}





// 2. Write a program to take “gender” as input from user. 
//    If the user is male, give the message: Good Morning Sir. 
//    If the user is female, give the message: Good Morning Ma’am.
      
const gender = prompt("Enter your gender:");

if (gender === "male") {
  alert("Good Morning Sir 🤵🏼 ");
} else if (gender === "female") {
  alert("Good Morning Ma'am 🙋‍♀️");
}





// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

//     | Color         | Message               |
 //    |-------------- |-----------------------|
 //    | Red           | Stop                  |
 //    | Yellow        | Caution               |
 //    | Green         | Go                    |
             

const signalColor = prompt("Enter the color 🔴🟡🟢 of the road traffic signal: 🚦");

switch (signalColor) {
    case "red":
      alert(" Must Stop 🚷");
      break;
    case "yellow":
      alert("Ready to Move 🚸");
      break;
    case "green":
      alert("Move Now ❇️");
      break;
    default:
      alert("Invalid color ❌ Please enter red, yellow, or green 🔴🟡🟢");
}



// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
//    show the message “Please refill the fuel in your car”
          

const fuelRemaining = parseFloat(prompt("Enter the remaining fuel ⛽ in your car (in litres): 🚗"));

if (fuelRemaining < 0.25) {
  alert("Please refill the fuel in your 🚖 car");
} else {
  alert("Fuel ⛽ is sufficient");
}






// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
    
// a. var a = 4;
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true ✅");
}
// Explanation: 
// '++a' increments 'a' by 1 before the comparison, so a becomes 5. 
// The condition (5 === 5) is true, so the alert will be displayed.

// b. var b = 82;
var b = 82;
if (b++ === 83) {
    console.log("given condition for variable b is true ❎");
}
// Explanation: 
// 'b++' increments 'b' after the comparison, so the value of b used in the condition is still 82.
// The condition (82 === 83) is false, so the alert will NOT be displayed.

// c. var c = 12;
var c = 12;
if (c++ === 13) {
    console.log("condition 1 is true ❎");
}
// Explanation: 
// 'c++' increments 'c' after the comparison, so the value of c used in the condition is still 12. 
// The condition (12 === 13) is false, so no alert for this condition.

if (c === 13) {
    alert("condition 2 is true ✅");
}
// Explanation: 
// After the previous increment, c is now 13.
// The condition (13 === 13) is true, so the alert will be displayed.

if (++c < 14) {
    console.log("condition 3 is true ❎");
}
// Explanation: 
// '++c' increments 'c' before the comparison, so c becomes 14. 
// The condition (14 < 14) is false, so no alert for this condition.

if (c === 14) {
    alert("condition 4 is true ✅");
}
// Explanation: 
// c is now 14.
// The condition (14 === 14) is true, so the alert will be displayed.

// d. var materialCost = 20000;
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals ✅");
}
// Explanation: 
// totalCost is equal to the sum of laborCost and materialCost (20000 + 2000 = 22000).
// The condition (22000 === 22000) is true, so the alert will be displayed.

// e. if (true)
if (true) {
    alert("True ✅");
}
// Explanation: 
// The condition is always true, so the alert will be displayed.

if (false) {
    console.log("False ❎");
}
// Explanation: 
// The condition is false, so the alert will NOT be displayed.

// f. if("car" < "cat")
if ("car" < "cat") {
    alert("car is smaller than cat ✅");
}
// Explanation: 
// In JavaScript, string comparison is done lexicographically (alphabetical order).
// "car" is smaller than "cat" because 'r' comes before 't' in the alphabet. 
// The condition ("car" < "cat") is true, so the alert will be displayed.








// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
//    percentage on your page. Take percentage & compute grade as per following table:

//     Show the total marks, marks obtained, percentage, grade & remarks like:

 //    | Percentage | Grade | Remarks          |
 //    |-----------|--------|------------------|
 //    | 90-100    | A      | Excellent        |
 //    | 80-89     | B      | Very Good        |
 //    | 70-79     | C      | Good             |
 //    | 60-69     | D      | Satisfactory     |
 //    | < 60      | F      | Needs Improvement|
 //    |-----------|--------|------------------|


 const subject1Marks = parseInt(prompt("Enter marks obtained in subject 1:"));
 const subject2Marks = parseInt(prompt("Enter marks obtained in subject 2:"));
 const subject3Marks = parseInt(prompt("Enter marks obtained in subject 3:"));
 const totalMarks = parseInt(prompt("Enter total marks:"));
 const percentage = (subject1Marks + subject2Marks + subject3Marks) / totalMarks * 100; 
 

 let grade;
 if (percentage >= 90 && percentage <= 100) {
    grade = "A-one";
 } else if (percentage >= 80 && percentage <= 89) {
    grade = "A";
 } else if (percentage >= 70 && percentage <= 79) {
    grade = "B";
 } else if (percentage >= 60 && percentage <= 69) {
    grade = "C";
 } else if (percentage >= 50 && percentage <=59) {
    grade = "D";
 }   else {
    grade = "F";
 }
 
 let remarks;
 if (percentage >= 90 && percentage <= 100) {
     remarks = "Excellent";
 } else if (percentage >= 80 && percentage <= 89) {
     remarks = "Very Good";
 } else if (percentage >= 70 && percentage <= 79) {
     remarks = "Good";
 } else if (percentage >= 60 && percentage <= 69) {
     remarks = "Satisfactory";
 } else {
     remarks = "Needs Improvement";
 }
 alert(`Remarks: ${remarks}\nGrade: ${grade}\nPercentage: ${percentage}%`);







// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
//     a. If user guesses the same number, show “Bingo! Correct answer”.
//     b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.


const secretNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else { 
   (userGuess === secretNumber + 1) 
  alert("Close enough to the correct answer");
  } 




// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.


const number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0) {
  alert(`${number} is divisible by 3`);
} else {
  alert(`${number} is not divisible by 3`);
}









// 9. Write a program that checks whether the given input is an even number or an odd number.


const inputNumber = parseInt(prompt("Enter a number:"));

if (inputNumber % 2 === 0) {
  alert(`${inputNumber} is an even number`);
} else {
  alert(`${inputNumber} is an odd number`);
}








// 10. Write a program that takes temperature as input and shows a message based on following criteria
//     a. T > 40 then “It is too hot outside.”
//     b. T > 30 then “The Weather today is Normal.”
//     c. T > 20 then “Today’s Weather is cool.”
//     d. T > 10 then “OMG! Today’s weather is so Cool.”


const temperature = parseFloat(prompt("Enter temperature in Celsius:"));

if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The weather today is Normal.");
} else if (temperature > 20) {
  alert("Today's Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today's weather is so Cool.");
} else {
  alert("The weather today is freezing.");
}






// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//     a. First number
//     b. Second number
//     c. Operation (+, -, *, /, %)
//     Compute & show the calculated result to user.

const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));
const operation = prompt("Enter an operation (+, -, *, /, %):");

if (operation === "+") {
    alert(`${num1} + ${num2} = ${num1 + num2}`);
} else if (operation === "-") {
    alert(`${num1} - ${num2} = ${num1 - num2}`);
} else if (operation === "*") {
    alert(`${num1} * ${num2} = ${num1 * num2}`);
} else if (operation === "/") {
  if (num2 === 0) {
    alert("Error: Division by zero is not allowed");
  } else 
    alert(`${num1} / ${num2} = ${num1 / num2}`);
} else if (operation === "%") {
  if (num2 === 0) {
    alert("Error: Division by zero is not allowed");
  } else {
    alert(`${num1} % ${num2} = ${num1 % num2}`);
  }
} else {
  alert("Error: Invalid operation. Please enter a valid operation (+, -, *, /, %)");
}






//                  ------------ END --------------------