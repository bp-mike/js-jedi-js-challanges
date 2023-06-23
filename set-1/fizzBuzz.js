//Set 1 Challenge 1 FizzBuzz

//function fizzBuzz(str1, str2){ 
//     combinedLength = length of str1 + length of str2

//     if combinedLength is divisible by 3 and combinedLength is divisible by 5:
//         output "FizzBuzz" in the console
//     else if combinedLength is divisible by 3:
//         output "Fizz" in the console
//     else if combinedLength is divisible by 5:
//         output "Buzz" in the console
//     else:
//         output an empty string

// Function call with example parameters:

let x = prompt("Input string 1: ");
let y = prompt("Input string 2: ");

function fizzBUZZ(x, y) {
   let add = x.length + y.length;

   if (add % 3 == 0 && add % 5 == 0) {
      console.log("FizzBuzz");
   } else if (add % 3 == 0) {
      console.log("Fizz");
   } else if (add % 5 == 0) {
      console.log("Buzz");
   } else {
      console.log("Not divisible by 3, 5 or both");
   }
}

fizzBUZZ(x, y);
