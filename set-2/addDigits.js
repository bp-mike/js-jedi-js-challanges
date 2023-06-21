function addDigits(num) { // challenge 1
    // while num has more than one digit:
        let sum = 0
        // while num is not equal to 0:
            // add the last digit of num to sum
            // remove the last digit from num
        // assign sum to num
    return num
}

// Example usage:
let num = 12345;
let result = addDigits(num);
console.log(result);


//My Solution
//lets the user input any number of choice
let x = prompt("Input number: ");

function separate(x) {
  let y = x.toString(); //converts it to string so separation is easier
	
  let sum = 0;
  let z = 0;
  for (z; z < y.length; z++) {
    sum = sum + parseInt(y[z]);
  }
  
  if (sum < 10) {
    return sum;
  } else {
    return separate(sum);
  }
}

var results = separate(x);
console.log(results);