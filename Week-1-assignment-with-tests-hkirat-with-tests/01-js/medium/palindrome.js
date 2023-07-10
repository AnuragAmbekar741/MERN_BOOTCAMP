/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase().replaceAll('?', "").replaceAll(',', "").replaceAll('!', "").replaceAll('.', "").trim()
  if (str.length == 0) return true
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] == str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false;
}

module.exports = isPalindrome;
``