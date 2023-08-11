"use strict";

/**
 * compares word and letter counts and see if there's enough letters to make for word
 * @param {*} word
 * @param {*} letter
 * @returns boolean
 */

function canConstructWord(word, letter) {
  const wordCount = frequencyCounter(word);
  const letterCount = frequencyCounter(letter);

  if (letter.length === 0) return false;

  for (let char in wordCount) {

    if (!(char in letterCount)) {
      return false;
    }

    if (wordCount[char] > letterCount[char]) {
      return false;
    }
  }

  return true;
}


/**
 * counts how many times characters appear in items
 * @param {*} items
 * @returns object
 */

function frequencyCounter(items) {
  let counter = {};

  for (let item of items) {
    let currentCount = counter[item] || 0;
    counter[item] = currentCount + 1;
  }

  return counter;
}

/*
input: two strings => word and letters
output: boolean => T or F => letters are found in word

edge cases:
are the characters only letters? => assume only letters
will they take in numbers? => assume only letters
what if the strings are empty? => assume only letters
what if chars are upper cased and lower cased? => assume lower cased

ex:
('aa', 'abc') => false
('abc', 'dcba') => true
('aabb', 'bcabad') => true
('', '') => false

psuedo:
build a frequency counter => separate function
create object variable to house our frequency counter
  walk through the string (word and letters)
    if the letter is not in the object yet
      put it in the object and set the value to 1
    else
      increase the value by 1
return the object variable

run the frequency counter for both word and letter
walk through the word object
  if the key-value pair is in the letter object is not equal or more than the one in
  the word object
    return false => since we can't build the word
return true
*/

