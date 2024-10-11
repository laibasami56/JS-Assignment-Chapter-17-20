//Chapter : 17-20
document.write("<h1>Chapter 17-20 : ARRAYS AND LOOP </h1>");

//Question 01 : Declare and initialize an empty multidimensional array.
// (Array of arrays)

document.write("<h3>Question:01</h3>");

var multiArray = []; 

// Example: Adding arrays as elements to the multidimensional array
multiArray.push([]); 
multiArray.push([1, 2, 3]); 
multiArray.push(["a", "b", "c"]); 

document.write(multiArray); // Output the multidimensional array to the console

//Question 02 : Declare and initialize a multidimensional array
// representing the following matrix:

document.write("<h3>Question:02</h3>");

let matrixArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

document.write(matrixArray[0] );
document.write("<br>");

document.write(matrixArray[1]);
document.write("<br>");

document.write(matrixArray[2]);
document.write("<br>");


//Question 03 :  Write a program to print numeric counting from 1 to 10.

document.write("<h3>Question:03</h3>");

for ( i = 1; i <= 10; i++) {
    document.write(i + "<br>");
  }

//Question 04 :  Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

document.write("<h3>Question:04</h3>");


let table=prompt("Enter the number to show multiplication table :  ");
let tableLength =prompt("Enter Lenght multiplication of table :  ");

document.write("<h3>Multiplication Table of " + table + "</h3>");


for (let i = 1; i <= tableLength; i++) {
    
document.write(` ${table} X ${i} = ${table*i}`);
document.write("<br>");
    
}

//Question 05 :  Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

document.write("<h3>Question:05</h3>");

 // Declaring the fruits array
 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

 // Loop through the array and print each fruit
 for (var i = 0; i < fruits.length; i++) {
     document.write(fruits[i] + "<br>");
    }

    document.write("<br>");

    for (var j = 0; j < fruits.length; j++) {
        document.write("Element at index "+[j] + "is" + fruits[j] + "<br>");
       }

   //Question 06 :Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<h3>Question:06</h3>");

// a. Counting: 1 to 15
    document.write("<b>Counting:</b> ");
    for (var i = 1; i <= 15; i++) {
        document.write(i + (i < 15 ? ", " : ""));
    }
    document.write("<br><br>");

    // b. Reverse counting: 10 to 1
    document.write("<b>Reverse Counting:</b> ");
    for (var i = 10; i >= 1; i--) {
        document.write(i + (i > 1 ? ", " : ""));
    }
    document.write("<br><br>");

    // c. Even numbers: 0 to 20
    document.write("<b>Even:</b> ");
    for (var i = 0; i <= 20; i += 2) {
        document.write(i + (i < 20 ? ", " : ""));
    }
    document.write("<br><br>");

    // d. Odd numbers: 1 to 19
    document.write("<b>Odd:</b> ");
    for (var i = 1; i < 20; i += 2) {
        document.write(i + (i < 19 ? ", " : ""));
    }
    document.write("<br><br>");

    // e. Series: 2k to 20k
    document.write("<b>Series:</b> ");
    for (var i = 2; i <= 20; i += 2) {
        document.write(i + "k" + (i < 20 ? ", " : ""));
    }

// Question 07 : You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

    document.write("<h3>Question:07</h3>");

const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item
function searchItem() {
    const input = prompt("Enter the item you want to search for:").toLowerCase();

    // Check if the input is in the array
    if (A.includes(input)) {
        document.write(`${input} is available in the list.`);
    } else {
      document.write(`${input} is not found in the list.`);
    }
}

// Question 08 :Write a program to identify the largest number in the  given array.
// A = [24, 53, 78, 91, 12].


document.write("<h3>Question:08</h3>");


// Array of numbers
const B = [24, 53, 78, 91, 12];



const largestNumber = Math.max(...B);

document.write(`The largest number in the array is: ${largestNumber}`);


//Question 09 : Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]


document.write("<h3>Question:09</h3>");
   
// Array of numbers
const C = [24, 53, 78, 91, 12];



const smallestNumber = Math.min(...C);

document.write(`The Smallest number in the array is: ${smallestNumber}`);

//Question 10 : . Write a program to print multiples of 5 ranging 1 to 100. 

document.write("<h3>Question:10</h3>");


// Loop to print multiples of 5 from 1 to 100
console.log("Multiples of 5 from 1 to 100:");
for (let x = 1; x<= 100; x++) {
    if (x % 5 === 0) {
        document.write(x);
      document.write("  ")
    }
}


