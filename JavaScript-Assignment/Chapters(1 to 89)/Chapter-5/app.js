// //                                  ********** ASSIGNMENT # 5 **********
// //  ------- MATH EXPRESSIONS ------
// ;
// // 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 

       var num1 = 3;
       var num2 = 5;
       var sum = num1 + num2;
       
    document.body.innerHTML += (`(Ans:1)<br/><br/>  sum of ${num1} and ${num2} is ${sum} <br /><hr>`); // Output: 8




// 2. Repeat task1 for subtraction, multiplication, division & modulus. 

//                  **** Subtraction ****
        var num1 = 3;
        var num2 = 5;
        var subtraction = num1 - num2;
        document.body.innerHTML += (`(Ans:2)<br/> <br/>  subtraction of ${num1} and ${num2} is ${subtraction}<br />`); // Output: -2

//                  **** Multiplication ****
        var num1 = 3;
        var num2 = 5;
        var multiplication = num1 * num2;
        document.body.innerHTML += (`multiplication of ${num1} and ${num2} is ${multiplication}<br />`); // Output: 15

//                  **** Division ****
        var num1 = 3;
        var num2 = 5;
        var division = num1 / num2; 
        document.body.innerHTML += (`division of ${num1} and ${num2} is ${division}<br />`); // Output: 0.6

//                 **** Modulus ****
        var num1 = 3;
        var num2 = 5;
        var modulus = num1 % num2; 
        document.body.innerHTML += (`modulus of ${num1} and ${num2} is ${modulus}<br /> <hr>`); // Output: 3






// 3. Do the following using JS Mathematic Expressions 

//   a. Declare a variable. 
          var variable ;

//   b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
        
           document.body.innerHTML += (`(Ans:3)<br/><br/>  Value after variable declaration is ${variable} <br />`); // Output: Value after variable declaration is: 5

//   c. Initialize the variable with some number.
           variable = 5;
    

// //   d. Show the value of variable in your browser like “Initial value: 5”. 
//          
           document.body.innerHTML += (`Initial value: ${variable} <br />`); // Output: Initial value: 5

// //   e. Increment the variable. 
           variable++;

// //   f. Show the value of variable in your browser like “Value after increment is: 6”. 
           document.body.innerHTML += (`Value after increment is: ${variable} <br />`); // Output: Value after increment is: 6

// //   g. Add 7 to the variable. 
           variable += 7;

// //   h. Show the value of variable in your browser like “Valueafter addition is: 13”.
           document.body.innerHTML += (`Value after addition is: ${variable}<br />`) ; // Output: Value after addition is: 13 

// //   i. Decrement the variable. 
           variable--;

//   j. Show the value of variable in your browser like “Value after decrement is: 12”.
           document.body.innerHTML += (`Value after decrement is:${variable} <br />`); // Output: Value after decrement is: 12 

        
//   k. Show the remainder after dividing the variable’s value by 3.
         var reminder = 5 % 3;  //  ouyput: after dividing by variable value is 3.

//   l. Output : “The remainder is : 0”.
         
           document.body.innerHTML += (`The remainder is : ${variable % 3}<br /> <hr>`); // Output: The remainder is :0
       




// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable
//    & calculate the cost of buying 5 tickets to a movie.Example output: 

       var ticketPrice = 600;
       var buyticket = 5;
       var totalCost = ticketPrice * buyticket ;

    document.body.innerHTML +=(`(Ans:4)<br/><br/>  Total cost to buy ${buyticket} tickets to a movie is ${totalCost} PKR.<br /><hr>`); // Output: Total cost 3000pkr.






// 5. Write a script to display multiplication table of any number in your browser. E.g  
      document.body.innerHTML+=(`(Ans:5)<br/> <br/> ***** TABLE OF 4 ***** <br />`);
    
     var number = 4;                                                // Output:        4 x 1 = 4
     for (var i = 1; i <= 10; i++) {                                              //  4 x 2 = 8
         document.body.innerHTML+=(`${number} x ${i} = ${number * i}<br />`);     //  4 x 3 = 12
     }                                                                            //  4 x 4 = 16
                                                                                  //  4 x 5 = 20
                                                                                  //  4 x 6 = 24
                                                                                  //  4 x 7 = 28
                                                                                  //  4 x 8 = 32
                                                                                  //  4 x 9 = 36
                                                                                  //  4 x 10 = 40         
                                                                     
//      ------------------------- to be continue... -----------------------------                                                       