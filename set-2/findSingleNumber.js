function findSingleNumber(nums) {
  // challenge 4
  // Sort the array in ascending order
  nums.sort();

  // Iterate through the sorted array
  for (let i = 0; i < nums.length - 1; i += 2) {
    // Check if adjacent elements are equal
    if (nums[i] !== nums[i + 1]) {
      // The current element doesn't have a duplicate
      return nums[i];
    }
  }
  // The last element doesn't have a duplicate
  return nums[nums.length - 1];
}

// Example usage:
let nums = [1, 2, 2, 1, 4, 5, 5];
let singleNumber = findSingleNumber(nums);
console.log(singleNumber);
