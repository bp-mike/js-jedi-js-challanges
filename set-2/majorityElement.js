function majorityElement(nums) {// challenge 3
  // Initialize count and majority variables
  //  create  counts variable  to store  counts of each element.
  console.log(nums);
  console.log("array length = " + nums.length);
  const counts = {};
  // For each element, increment its count in the  counts object.
  for (let num of nums) {
    if (counts[num]) {
      counts[num]++;
      console.log({"new counts":counts});
    } else {
      counts[num] = 1;
      console.log({ count: counts[num] });
    }
  }

  // After counting the occurrences of each element,
  // For each element in counts, we check if its count is greater than nums.length / 2. and return the number
  for (let num in counts) {
    if (counts[num] > nums.length / 2) {
      return num; // Return the majority element
    }
  }
}

// Example usage:
let nums = [2, 2, 1, 1, 1, 2, 2];
let result = majorityElement(nums);
console.log(result);
