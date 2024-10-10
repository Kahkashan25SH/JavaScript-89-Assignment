
// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
//    a.  Store a Celsius temperature into a variable.
//    b. Convert it to Fahrenheit & output “NNoC is NNoF”.    
//    c. Now store a Fahrenheit temperature into a variable. 
//    d. Convert it to Celsius & output “NNoF is NNoC”.                                                           

var celsius = 25;

var fahrenheit = (celsius * 9 / 5) + 32;

document.body.innerHTML+=(`(Ans#6)<br /> <br /> ${celsius}C is ${fahrenheit}F <br />`);

var fahrenheit = 70;

var celsius = (fahrenheit - 32) * 5 / 9;

document.body.innerHTML+=(`${fahrenheit}F is ${celsius}C <hr>`);






// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
//     a. Price of item 1 
//     b. Price of item 2 
//     c. Ordered quantity of item 1 
//     d. Ordered Quantity of item 2 
//     e. Shipping charges 
//     Compute the total cost & show the receipt in your browser. 

 document.body.innerHTML+=(`Ans#7) <br /><br /><b>***** SHOOPING CART ***** <br /><br />`);

 var item1Price  = 650;
 var item1Quantity = 3;

 var item2Price = 100;
 var item2Quantity = 7;

 var shippingCharges = 100;
 var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

 document.body.innerHTML+=(`price of item 1 is ${item1Price} <br /> Quntity of item 1 is ${item1Quantity} <br /> price of item 2 is ${item2Price} <br /> Quntity of item 2 is ${item2Quantity} <br /> shipping charges ${shippingCharges} <br /><br /> The total cost of your purchase is ${totalCost}.<hr>`);






// 8. Store total marks & marks obtained by a student in 2 variables.Compute the percentage & show the result in your browser. 
document.body.innerHTML+=(`(Ans#8)<br /><br /><b>***** MARK SHEET ***** <br /><br />`);

var totalMarks = 980;
var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;

document.body.innerHTML+=(`Total marks: ${totalMarks} <br /> Marks obtained: ${marksObtained}<br /> Pecentage: ${percentage}%.<hr/>`);





// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
//    Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
//    and 1 Saudi Riyal = 28 Pakistani Rupee) 

document.body.innerHTML+=(`(Ans#9)<br /><br /><b>***** CURRENCY IN PKR *****<br /> <br />`);

      var usDollars = 10;
      var saudiRiyals = 25;
      var totalInPakistaniRupees = (usDollars * 104.80) + (saudiRiyals * 28);

document.body.innerHTML+=(`Total Currency in PKR: ${totalInPakistaniRupees}.<br /><hr>`);






// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
//     a. Add 5 
//     b. Multiply by 10 
//     c. Divide the result by 2 
//     Perform all calculations in a single expression 

document.body.innerHTML+=(`(Ans#10)<br /><br /><b>***** ARITHMETIC SEQUENCE *****<br /> <br />`);

       var initialize = 10;
       var result = (initialize + 5) * 10 / 2;

    document.body.innerHTML+=(`The final result is ${result}<br/><hr>`); // output: 75




// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
//        console.log(`***** AGE CALCULATOR *****`);

//     a. Store the current year in a variable. 
//        var currentYear = 2016;

//     b. Store their birth year in a variable. 
//        var birthYear = 1992;

//     c. Calculate their 2 possible ages based on the stored values. 
//        var age1 = currentYear - birthYear;
//        var age2 = currentYear - (birthYear + 1);

//     Output them to the screen like so: “They are either NN or NN years old”.
document.body.innerHTML+=(`(Ans#11)<br /><br /><b>***** AGE CALCULATOR *****<br /><br />`)

       var currentYear = 2016;
       var birthYear = 1992;
       var age1 = currentYear - birthYear;

    document.body.innerHTML+=(`Current year: ${currentYear}<br /> Birth Year: ${birthYear}<br /> Your age is: ${age1}<br /><hr>`);







// 12. The Geometrizer: Calculate properties of a circle. 
//     a. Store a radius into a variable. 
//     b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
//     (Hint : Circumference of a circle = 2 π r , π = 3.142) 
//     Calculate the area based on the radius, and output “The area is NN”.
//     (Hint : Area of a circle = π r2, π = 3.142)


document.body.innerHTML+=(`(Ans#12) <br /><br /><b>***** THE GEOMETRIZER *****<br /><br />`)
       var radius = 20;
       var circumference = 2 * 3.142 * radius;
       var area = 3.142 * (radius * radius);

    
       document.body.innerHTML+=(`Radius of a circle:${radius}<br/>  The Circumference is ${circumference}<br/> The area is ${area}<hr>`);
    




// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
//     a. Store your favorite snack into a variable 
//     b. Store your current age into a variable. 
//     c. Store a maximum age into a variable. 
//     d. Store an estimated amount per day (as a number). 
//     e. Calculate how many would you eat total for the rest of your life. 
//     Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.


document.body.innerHTML+=(`(Ans#13) <br /><br /><b>***** LIFETIME SUPPLY CALCULATOR *****<br /><br />`)

       var favoriteSnack = "chocolate chip";
       var currentAge = 15;
       var maximumAge = 65;
       var AmountPerDay = 3;
       
       document.body.innerHTML+=(`Favorite Snack: ${favoriteSnack}<br/> Current Age: ${currentAge}<br/> Estimated Maximum Age: ${maximumAge}<br/> Amount of snacks per Day: ${AmountPerDay}<br />You will need 150 ${favoriteSnack} to last you until the ripe old age of ${maximumAge}<br />`); // output: You will need 150 chocolate chip to last you until the ripe old age of 65.



//                 ----------------------- END ----------------------