 //                                 ********** ASSIGNMENT # 17 TO 20 ***********
 // ----- Array AND LOOPS --------



 // 1. Declare and initialize an empty multidimensional array (Array of arrays).
                                
 console.log("Ans_1");
 
 let multidimensionalArray = [[], [], [],];

 console.log(multidimensionalArray);




 // 2. Declare and initialize a multidimensional array representing the following matrix: 
 // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

  console.log("Ans-2");
  
 let matrix = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];

 console.log(matrix);





 // 3. Write a program to print numeric counting from 1 to 10.

  console.log("Ans-3");

  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }




 // 4. Write a program to print multiplication table of any number using for loop.
 //    Table number & length should be taken as an input from user.

 console.log("Ans-4");

 let num = parseInt(prompt("Enter the number for multiplication table: "));
 let length = parseInt(prompt("Enter the length of the table: "));
 console.log("Multiplication table of " + num);
 for (let i = 1; i <= length; i++) {
   console.log(num + " * " + i + " = " + num * i);
 }





 // 5. Write a program to print items of the following array using for loop:
//     fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]

  console.log("Ans-5");

 let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
 for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
 }





 // 6. Generate the following series in your browser. See
//     example output.
//  a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//  b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//  c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//  d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//  e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

 console.log("Ans-6 show the browser");
 
  document.write(" <b /> Ans-6 <br /> <hr />");

  let series = ["<h3 /> a.Counting: <br /> ", " <br /> b. Reverse counting:<br />  ", " <br /> c. Even: <br />  ", " <br /> d. Odd: <br /> ", "<br /> e. Series: <br /> "];

  for (let i = 0; i < series.length; i++) {
    document.write(series[i]);
    for (let j = 1; j <= 15; j++) {
      if (i === 0) {
        document.write(j + ", ");
      } else if (i === 1) {
        document.write((j * 1) + ", ");
      } else if (i === 2) {
        document.write(j * 2 + ", ");
      } else if (i === 3) {
        document.write((j * 2) - 1 + ", ");
      } else {
        document.write((j * 2) + "k, ");
      }
    }
    document.write("<br>");
  }






// 7. You have an array
//   A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//   Write a program to enable “search by user input” in an array.
//   After searching, prompt the user whether the given item is found in the list or not. Example:

 console.log("Ans-7 is depend users");
 
  let A = ["cake", "apple pie", "cookie", "chips", "patties"];

  let userInput = prompt("(Q#7) \n Wellcome to Bombay Bakery. What do you want to order sir/mam:");

  let found = A.includes(userInput);

  if (found) {

    alert(userInput + " is availble in our Bakery.")
  }
  else{
    alert(userInput + " We are Sorry. Pastry is not availble in our Bakery:");
}






// 8. Write a program to identify the largest number in the given array.
//     A1 = [24, 53, 78, 91, 12].

  console.log("Ans-8");

  let A1 = [24, 53, 78, 91, 12];
   console.log(`Array items: ${A1}`);
   
  let max = A1[0];
  for (let i = 1; i < A1.length; i++) {
    if (A1[i] > max) {
      max = A1[i];
    }
  }
  console.log("The largest number in the array is: " + max);






//  9. Write a program to identify the smallest number in the given array.
//    A2 = [24, 53, 78, 91, 12].

  console.log("Ans-9");

  let A2 = [24, 53, 78, 91, 12];
   console.log(`Array items: ${A2}`);

   let min = A2[0];
  for (let i = 1; i < A2.length; i++) {
    if (A2[i] < min) {
      min = A2[i];
    }
  }
  console.log("The smallest number in the array is: " + min);



  

  // 10. Write a program to print multiples of 5 ranging 1 to 100.

  console.log("Ans-10");

  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }









 

 

