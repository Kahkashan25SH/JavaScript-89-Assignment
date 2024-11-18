 //                    ********** ASSIGNMENT # 14 TO 16 ***********
 // -------ARRAYS-------




// 1. Declare an empty array using JS literal notation to store student names in future.

let StudentNames = [];





// 2. Declare an empty array using JS object notation to store student names in future.

let student_names = new Array();





// 3. Declare and initialize a strings array

let colors = ['red', 'blue', 'green', 'yellow', 'purple'];




// 4. Declare and initialize a numbers array.

let numbers = [1, 2, 3, 4, 5];





// 5. Declare and initialize a boolean array.

let boolean = [true, false, true, false];




// 6. Declare and initialize a mixed array.

let mixedArray = ['red', 1, true, 'blue', 2, false];




// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//    BS, BCOM, MS, M.Phil., PhD). Show the listed qualifications in your browser like:

let education = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil.', 'PhD']; 
console.log("Ans#_7: Qulification:");
console.log(education);



// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
//    Assume that total marks are 500 for each student, display the scores & percentages of students like:
 
                  console.log("Ans#-8");
                  

let studentNames = ['mohid', 'Ali', 'neha'];
let studentScores = [320, 230, 480];

for (let i = 0; i < studentNames.length; i++) {
    let percentage = (studentScores[i] / 500) * 100;
    console.log(`${studentNames[i]}: Score - ${studentScores[i]}, Percentage - ${percentage}%`);
}






// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array.Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.Display the updated array in  your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index.
//    Display the updated array in your browser.


let color = ["Red", "Blue", "Green", "Yellow"];
document.write("<b>Initial Colors:</b> " + colors.join(", ") + "<br><br>");

let addColorAtStart = prompt("Enter a color to add at the beginning:");
colors.unshift(addColorAtStart);
document.write("<b>After Adding Color at the Beginning:</b> " + colors.join(", ") + "<br><br>");

let addColorAtEnd = prompt("Enter a color to add at the end:");
colors.push(addColorAtEnd);
document.write("<b>After Adding Color at the End:</b> " + colors.join(", ") + "<br><br>");

colors.unshift("Pink", "Orange");
document.write("<b>After Adding Two Colors at the Beginning:</b> " + colors.join(", ") + "<br><br>");

colors.shift();
document.write("<b>After Deleting the First Color:</b> " + colors.join(", ") + "<br><br>");

colors.pop();
document.write("<b>After Deleting the Last Color:</b> " + colors.join(", ") + "<br><br>");

let addIndex = parseInt(prompt("At which index do you want to add a color? (0-based index):"), 10);
let colorToAdd = prompt("Enter the color to add:");
if (addIndex >= 0 && addIndex <= colors.length) {
    colors.splice(addIndex, 0, colorToAdd);
    document.write("<b>After Adding Color at Index " + addIndex + ":</b> " + colors.join(", ") + "<br><br>");
} else {
    document.write("<b>Invalid Index. No changes made.</b><br><br>");
}

let deleteIndex = parseInt(prompt("At which index do you want to delete color(s)? (0-based index):"), 10);
let deleteCount = parseInt(prompt("How many colors do you want to delete?"), 10);
if (deleteIndex >= 0 && deleteIndex < colors.length && deleteCount > 0) {
    colors.splice(deleteIndex, deleteCount);
    document.write("<b>After Deleting " + deleteCount + " Color(s) from Index " + deleteIndex + ":</b> " + colors.join(", ") + "<br><br>");
} else {
    document.write("<b>Invalid Index or Count. No changes made.</b><br><br>");
}



// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

let studentScore = [78, 45, 89, 62, 90, 55];
document.write("<b>Original Scores:</b> " + studentScores.join(", ") + "<br><br>");

studentScores.sort((a, b) => a - b); 
document.write("<b>Sorted Scores in Ascending Order:</b> " + studentScores.join(", "));






// 11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.

let cities = ['London', 'Paris', 'Tokyo', 'New York', 'Sydney', 'Berlin', 'Moscow'];
let selectedCities = [];

selectedCities.push(cities[0], cities[1], cities[2]);

console.log(selectedCities);








// 12. Write a program to create a single string from the below mentioned array: 
//     var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

let arr = ['This ', 'is ', 'my ', 'cat'];

let singleString = arr.join('');

console.log(singleString);






// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

let stack = [];
stack.push("Apple");
stack.push("Banana");
stack.push("Cherry");
stack.push("Date");

document.write("<b>Array after adding values (FIFO):</b> " + stack.join(", ") + "<br><br>");

let firstOut = stack.shift(); // Removes "Apple"
document.write("<b>Removed (First Out):</b> " + firstOut + "<br>");
document.write("<b>Updated Array:</b> " + stack.join(", ") + "<br><br>");

let secondOut = stack.shift(); // Removes "Banana"
document.write("<b>Removed (Second Out):</b> " + secondOut + "<br>");
document.write("<b>Updated Array:</b> " + stack.join(", ") + "<br>");






// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

// Initialize an empty array
let lifoArray = [];

// Add values to the array one by one (Last In)
lifoArray.push("Apple");
lifoArray.push("Banana");
lifoArray.push("Cherry");
lifoArray.push("Date");

document.write("<b>Array after adding values (LIFO):</b> " + lifoArray.join(", ") + "<br><br>");

// Access and remove values in LIFO order (Last Out)
let firstout = lifoArray.pop(); // Removes "Date"
document.write("<b>Removed (Last In - First Out):</b> " + firstOut + "<br>");
document.write("<b>Updated Array:</b> " + lifoArray.join(", ") + "<br><br>");

let secondout = lifoArray.pop(); // Removes "Cherry"
document.write("<b>Removed (Last In - First Out):</b> " + secondOut + "<br>");
document.write("<b>Updated Array:</b> " + lifoArray.join(", ") + "<br>");


// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your browser using document.write() method:


// Initialize an array with phone manufacturers
let phoneManufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Generate the dropdown menu
document.write("<select>");
for (let manufacturer of phoneManufacturer) {
    document.write(`<option value="${manufacturer}">${manufacturer}</option>`);
}
document.write("</select>");





