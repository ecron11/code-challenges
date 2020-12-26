//This function finds the longest word in a sentence separated by spaces.
//It does not account for punctuation

function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestWord = "";
  

  words.forEach((word) => { 
    if (word.length > longestWord.length) {
    longestWord = word}
  });

  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");