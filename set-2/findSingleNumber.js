function findSingleNumber(nums) { // challenge 4
    result = 0  // Variable to store the single non-duplicate number

    // Iterate through each element in the array
    // XOR operation to find the single non-duplicate number
    // for each element in nums
        // result = result XOR element

    return result
  }
  
  // Example usage:
  let nums = [1, 2, 2, 1, 4, 5, 5];
  let singleNumber = findSingleNumber(nums);
  console.log(singleNumber);
  