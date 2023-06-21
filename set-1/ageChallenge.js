function determineAgeCategory(){ // challenge 2
    // prompt the user to enter their year of birth
    // read the input and store it in a variable called yearOfBirth
    // calculate the current year and store it in a variable called currentYear
    // calculate the age by subtracting the year of birth from the current year and store it in a variable called age

    // if age is less than 18
        // output "You are a minor." in the console
    // else if age is between 18 and 36 (inclusive):
        // output "You are a youth." in the console
    // else:
        // output "You are an elder." in the console
}

determineAgeCategory()




///My Solution
let age = prompt("Input your age: ");

if (age >= 0 && age < 18) {
  console.log("You are a minor");
} else if (age >= 18 && age <= 36) {
  console.log("You are a youth");
} else if (age > 36 && age <= 180) {
  console.log("You are an elder");
} else {
  console.log("You entered an invalid number for age");
}