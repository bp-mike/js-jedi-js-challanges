function twoSum(nums, target){ // challenge 3
        // Create an empty object to store numbers and their indices
        // let numMap = {}

        // Iterate through the array of numbers
        // for each number (num) at index (index) in nums:
            // Calculate the complement needed to reach the target
            // let complement = target - num
            
            // Check if the complement exists in the numMap
            // if complement exists in numMap:
                // Found a solution, return the indices
                // return [numMap[complement], index]
            
            // Add the current number and its index to the numMap
            // numMap[num] = index
    
        // No solution found, return an empty array
        // return []
}

// Example usage:
let nums = [2, 7, 11, 15]
let target = 9
let result = twoSum(nums, target)
console.log(result)
