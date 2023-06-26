function firstPalindrome(words) {
  // challenge 4
  // Iterate over each word in the  array
  for (let word of words) {
    // Check if the word is a palindrome using the isPalindrome below function
    if (isPalindrome(word)) {
      // If the word is a palindrome, return it as the first palindrome found
      return word;
    }
  }
  // If no palindrome is found, return an empty string
  return "";
}

function isPalindrome(word) {
  // Reverse the word by splitting it into an array of characters,
  // reversing the order, and joining them back into a string
  const reversed = word.split("").reverse().join("");
  // return true if the original word is equal to the reversed word, false otherwise
  return word === reversed;
}

// Example usage:
let words = [
  // "ada",
  "cool",
  //  "level",
  "hello",
  "racecar",
  "world",
];
let result = firstPalindrome(words);
console.log(result);
