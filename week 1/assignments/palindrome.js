/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let newstr = "";
  let c = '';
  for (let i = str.length - 1; i >= 0; i--) {
    c = str.charAt(i);
    newstr += c; 
  }
  return str === newstr;
}

module.exports = isPalindrome;
