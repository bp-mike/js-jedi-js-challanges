function twoSum(nums, target) {// challenge 3
  // Iterate over each element in the nums array using the outer loop
  for (let i = 0; i < nums.length; i++) {
    // Iterate over the remaining elements in the nums array using the inner loop
    // Start the inner loop from the next element after the outer loop to avoid using the same element twice
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the current pair of numbers add up to the target
      if (nums[i] + nums[j] === target) {
        // Return the indices of the two numbers that add up to the target
        return [i, j];
      }
    }
  }
  // Return an empty array if no solution is found
  return [];
}

// Example usage:
let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result);
