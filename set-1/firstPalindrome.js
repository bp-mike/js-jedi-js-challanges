function firstPalindrome(words){ // challenge 4
    // for each word in words:
        // if word is a palindrome:(use the isPalindrome below to check if the word is a palindrome)
            // return word
    
    // No palindromic string found
    // return empty string
}

function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

// Example usage:
let words = ["level", "hello", "racecar", "world"]
let result = firstPalindrome(words)
console.log(result)
