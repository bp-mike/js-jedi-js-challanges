function longestCommonPrefix(strs) {
  // challenge 5
  // Sort the array to ensure the shortest string is at the beginning
  strs.sort();
  // Take the first and last string in the sorted array
  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];
  let output = "";

  // for every common character in each string add it to the output
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] == lastStr[i]) {
      output += firstStr[i];
    } else {
      break;
    }
  }
  return output;
}

// Example usage:
let strs = ["flower", "flow", "flight"];
let commonPrefix = longestCommonPrefix(strs);
console.log(commonPrefix);
