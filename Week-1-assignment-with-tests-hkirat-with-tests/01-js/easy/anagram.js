/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  let obj1 = {}
  let obj2 = {}

  if (str1.length != str2.length) return false


  for (val of str1.toLowerCase()) {
    obj1[val] = (obj1[val] || 0) + 1
  }

  for (val of str2.toLowerCase()) {
    obj2[val] = (obj2[val] || 0) + 1
  }

  for (key in obj1) {
    if (!(key in obj2)) return false
    if (obj1[key] != obj2[key]) return false
  }
  return true

}

module.exports = isAnagram;
