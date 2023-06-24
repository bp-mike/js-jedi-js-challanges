function sortArray(arr){ // challenge 5
    // // Initialize empty arrays for evens, odds, and chars
    // let evens = []
    // let odds = []
    // let chars = []

    // // Iterate through each element in the input array
    // // for each element in arr
    //     // if element is an even number
    //         // append element to evens
    //     // else if element is an odd number
    //         // append element to odds
    //     // else if element is a single-character string
    //         // append element to chars
    
    // // Sort the arrays in ascending order
    // // sort evens
    // // sort odds
    // // sort chars
    // // N.B - i suggest write a function to sort that can be re-used 3 times for sorting evens, odds and chars
    
    // // Create and return the result object
    // let result = {
    //     evens: evens,
    //     odds: odds,
    //     chars: chars
    // }
    // return result

    let evens = [];
  let odds = [];
  let chars = [];

  for (let item of arr) {
    if (typeof item === 'number' && Number.isInteger(item)) {
      if (item % 2 === 0) {
        evens.push(item);
      } else {
        odds.push(item);
      }
    } else if (typeof item === 'string' && item.length === 1) {
      chars.push(item);
    }
  }

  evens.sort((a, b) => a - b);
  odds.sort((a, b) => a - b);
  chars.sort();

  const result = {
    evens: evens,
    odds: odds,
    chars: chars
  };

  return result;
}

// Example usage:
let inputArray = [1, 3, 5, 2, 4, 6, 9, 8, 'a', 'c', 'b']
let result = sortArray(inputArray)
console.log(result)
