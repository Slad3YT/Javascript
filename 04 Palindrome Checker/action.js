function isPalindrome(str) {
    const alphanumericOnly = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = alphanumericOnly.split('').reverse().join('');
    return alphanumericOnly === reversed;
}

function checkPalindrome() {
    const userInput = document.getElementById('inputText').value;
    const resultElement = document.getElementById('result');
   

    if (isPalindrome(userInput)) {
        resultElement.textContent = `"${userInput}" is a palindrome.`;
    } else {
        resultElement.textContent = `"${userInput}" is not a palindrome.`;
    }
}