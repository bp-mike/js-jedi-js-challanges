function sortArray(arr) {
  // challenge 5
  // Initialize empty arrays for evens, odds, and chars
  let evens = [];
  let odds = [];
  let chars = [];

  // Iterate through each element in the input array
  for (let item of arr) {
    if (typeof item === "number" && Number.isInteger(item)) {
      if (item % 2 === 0) {
        evens.push(item);
      } else {
        odds.push(item);
      }
    } else if (typeof item === "string" && item.length === 1) {
      chars.push(item);
    }
  }
  // Sort the arrays in ascending order
  evens = bubbleSort(evens);
  odds = bubbleSort(odds);
  chars = bubbleSort(chars);
  // Create and return the result object
  const result = {
    evens: evens,
    odds: odds,
    chars: chars,
  };

  return result;
}

// bubbleSort function thhat takes an array
function bubbleSort(arr) {
  const length = arr.length;
  // initializes  swapped to true, it keeps track of whether any swaps were made during the sorting process
  let swapped = true;

  while (swapped) {
    // resets swapped to false at the start of each iteration, assuming no swaps will be made unless proven otherwise.
    swapped = false;

    //   this loop compares adjacent arr and swapps them if they are in the wrong order.
    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
        swapped = true;
      }
    }
  }

  return arr;
}

// Example usage:
let inputArray = [1, 3, 5, 2, 4, 6, 9, 8, "a", "c", "b"];
let result = sortArray(inputArray);
console.log(result);
