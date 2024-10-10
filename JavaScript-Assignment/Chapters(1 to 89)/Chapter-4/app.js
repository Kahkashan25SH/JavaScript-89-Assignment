//                             *********** ASSIGNMENT # 4 JAVASCRIPT **********

// -----VARIABLE NAMES: LEGAL & ILLEGAL --------

// 1. Declare 3 variables in one statement. 

var myName = "kahkashan",
myAge = 32, 
myGender = "FeMale";




// 2. Declare 5 legal & 5 illegal variable names. 

//            ------ Legal variable names: only used $ & _ sign --------


var $my_1stVariable = "kahkashan"; // This is legal as it start with dollor sign and contain an underscore.

var _myName = "kahkashan"; // This is legal as it starts with an underscore.

var myName123 = "kahkashan"; // This is legal as it last with a number.

var my_Name_ = "kahkashan"; // This is legal as it contains an underscore and last with an underscore.

var my$Name = "kahkashan"; // This is legal as it contains an dollor sign.



//            ------ Illegal variable names: dont used any character --------


// var 123myName = "sawera";     (Error)          // This is illegal as it starts with a number.

// var my@name = "sawera";       (Error)          // This is illegal as it contains special characters.

// var my-name = "sawera";       (Error)          // This is illegal as it contains a hyphen.

// var my%name = "sawera";        (Error)         // This is illegal as it contains a special character.

// var my#name = "sawera";        (Error)        // This is illegal as it contains a special character.

var veryLongVariableName = "This is a very long variable name that exceeds the maximum length of 30 characters"; 





// 3. Display this in your browser 

      // a) A heading stating “Rules for naming JS variables” 


document.body.innerHTML += "<h2>Rules for naming JS variables</h2>";


      // b) Variable names can only contain ______, ______, and ______. For example $my_1stVariable 

document.body.innerHTML += "Variable names can only contain, number, $ and _. For example $my_1stVariable <br />";

// //        c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 

document.body.innerHTML += "Variables must begin with a letter, $ or _. For example $name, _name or name <br />";

// //       d) Variable names are case _________ 

document.body.innerHTML += "Variable names are case sensitive <br />";

// //       e) Variable names should not be JS _________ 

document.body.innerHTML += "Variable names should not be JS keywords";

//                  ********* END ********
