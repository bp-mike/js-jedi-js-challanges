function containsDuplicate(nums) {
  // challenge 2

  // sort the array in ascending order
  nums.sort();

  // iterate over the sorted array to check neighbor items are equal
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }

  // No duplicates found, return false
  return false;
}

// Example usage:
let nums = [1, 2, 3, 4, 5, 4];
let result = containsDuplicate(nums);
console.log(result);
