function majorityElement(nums) { // challenge 3
        // Initialize count and majority variables
        let count = 0
        let majority = nums[0]
    
        // Iterate through each element in the array
        // for each element in nums
            // If count is 0, assign the current element as the majority candidate
            // if count is 0
                // assign element to majority
    
            // If the current element is equal to the majority candidate, increment the count
            // if element is equal to majority
                // increment count
            // If the current element is different from the majority candidate, decrement the count
            // else:
                // decrement count
    
        // Return the majority candidate
        return majority
  }
  
  // Example usage:
  let nums = [2, 2, 1, 1, 1, 2, 2];
  let result = majorityElement(nums);
  console.log(result);
  