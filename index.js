function calculateDifference(a, b) {
  return Math.abs(a - b);
}

function isOdd(num) {
  return num % 2 !== 0;
}

function findMin(arr) {
  return Math.min(...arr);
}

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function sortArrayDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .filter((char) => vowels.includes(char)).length;
}

function findAverage(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
