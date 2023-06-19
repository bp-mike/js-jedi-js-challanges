function longestCommonPrefix(strs) { // challenge 5
    // if strs is empty:
    //  return an empty string

    // Start with the first string as the initial prefix
    // prefix = strs[0]  

    // Iterate through each string in the array
    // for i = 1 to length of strs - 1
        // while the current string does not start with the prefix
            // Keep removing the last character from the prefix until it matches
            // prefix = prefix - last character of prefix
    
        return prefix;
    }
  
  // Example usage:
  let strs = ["flower", "flow", "flight"];
  let commonPrefix = longestCommonPrefix(strs);
  console.log(commonPrefix);
  