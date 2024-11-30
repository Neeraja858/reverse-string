// Function to reverse a string using arrays
function reverseString(input) {
    // Convert the string into an array of characters
    let charArray = input.split('');
    
    // Reverse the array
    charArray.reverse();
    
    // Join the array back into a string
    let reversedString = charArray.join('');
    
    return reversedString;
}

// Example usage
let originalString = "hello world";
let reversed = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversed);
