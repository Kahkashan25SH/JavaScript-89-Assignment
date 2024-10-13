//                          ********** ASSINGMENT # 6 TO 8 ****************

// ------ Math Expressions --------


// 1. Write a program to take a number in a variable, do the required arithmetic to display the following 
//    result in your browser: 

document.body.innerHTML += (`(Ans:1)<br/><br/> <b/>***** RESULT: ***** <br/><br/>`)

var a = 10;
document.body.innerHTML += (`The value of a is: ${a}<br/> .........................................<br/><br/>`)

++a;

document.body.innerHTML += (`The value of ++a is: 11 <br/>Now the value of a is: ${a}<br/><br/>`)

++a
document.body.innerHTML += (`The value of ++a is: 11 <br/>Now the value of a is: ${a}<br/><br/>`)

--a;
document.body.innerHTML+= (`The value of --a is: 11 <br/>Now the value of a is: ${a}<br/><br/>`)

a--;
document.body.innerHTML+= (`The value of a-- is: 11 <br/>Now the value of a is: ${a}<br/><hr>`)






// // 2. What will be the output in variables a, b & result after execution of the following script:
// //    var a = 2, b = 1;
// //    var result = --a - --b + ++b + b--;
// //    Explain the output at each stage:
// //    --a;
// //    --a - --b;
// //    --a - --b + ++b;
// //    --a - --b + ++b + b--;

document.body.innerHTML += (`(Ans:2)<br/><br/><b/>***** INCREEMENT & DECREEMENT: ***** <br/>`)

var a = 2,b = 1;
var result = --a - --b + ++b + b--;
document.body.innerHTML +=`<br/><br/> a is 1 <br/> b is 2 <br/> result is ${result}<br/><hr>`;








// 3. Write a program that takes input a name from user & greet the user.

document.body.innerHTML += `(Ans:3)<br/><br/> ***** Greetings Program ***** <br/><br/><hr>`;

var userName = prompt(`Enter your name:`)
alert(`Hello, ${userName}! How are you`);







// // 4. Write a program to take input a number from user & display it’s multiplication table on your browser.
// //    If user does not enter a new number, multiplication table of 5 should be displayed by default.


document.body.innerHTML += `(Ans:4)<br/><br/><b/> ***** Multiplication Table ***** <br/><br/>`;

var num = prompt(`Enter a number (default is 5):`, 5);

if (num &&!isNaN(num)) {

  for (let i = 1; i <= 10; i++) {

    document.body.innerHTML += `${num} * ${i} = ${num * i}<br/><hr/>`;

  }

} else {

  alert(`Invalid input. Please enter a number.<br/><hr/>`);
}






// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

document.body.innerHTML += `(Ans:5)<br/><br/><b/> ***** Student's Performance ***** <br/><br/>`;


// subject names

var subject1 = prompt(`Enter the name of the first subject:`);
var subject2 = prompt(`Enter the name of the second subject:`);
var subject3 = prompt(`Enter the name of the third subject:`);

// total marks for each subject
var totalMarks = 100;
var totalSubjectMarks = 300;

// obatined marks for each subject
var marksSubject1 = parseInt(prompt(`Enter the obtained marks of ${subject1}:`));
var marksSubject2 = parseInt(prompt(`Enter the obtained marks of ${subject2}:`));
var marksSubject3 = parseInt(prompt(`Enter the obtained marks of ${subject3}:`));


// percentage for each subject
var percentage1 = (marksSubject1 / totalMarks) * 100;
var percentage2 = (marksSubject2 / totalMarks) * 100;
var percentage3 = (marksSubject3 / totalMarks) * 100;

// total marks obtained and overall percentage
var totalMarksObtained = marksSubject1 + marksSubject2 + marksSubject3;
var overallPercentage = (totalMarksObtained / totalSubjectMarks) * 100;

// Displaying the table
document.body.innerHTML += `<table border='1'>
  <tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
  </tr>
  <tr>
    <td>${subject1}</td>
    <td>${totalMarks}</td>
    <td>${marksSubject1}</td>
    <td>${percentage1.toFixed(2)}%</td>
  </tr>
  <tr>
    <td>${subject2}</td>
    <td>${totalMarks}</td>
    <td>${marksSubject2}</td>
    <td>${percentage2.toFixed(2)}%</td>
  </tr>
  <tr>
    <td>${subject3}</td>
    <td>${totalMarks}</td>
    <td>${marksSubject3}</td>
    <td>${percentage3.toFixed(2)}%</td>
  </tr>
</table>`;

// Displaying total marks and overall percentage
document.body.innerHTML += `<br/>Total Marks Obtained: ${totalMarksObtained} out of ${totalSubjectMarks}<br/>`;
document.body.innerHTML += `Overall Percentage: ${overallPercentage.toFixed(2)}%<br/>`;


