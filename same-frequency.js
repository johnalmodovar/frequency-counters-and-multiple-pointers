"use strict";
/**
 * Accepts two positive integers, returns true if numbers have same frequency of digits.
 * Otherwise returns false.
 */
function sameFrequency(num1, num2) {
  const num1ToString = JSON.stringify(num1);
  const num2ToString = JSON.stringify(num2);

  const num1Freq = frequencyCounter(num1ToString);
  const num2Freq = frequencyCounter(num2ToString);

  for (let key in num1Freq) {
    if (!(key in num2Freq)) {
      return false;
    }

    if (num1Freq[key] !== num2Freq[key]) {
      return false;
    }
  }

  return true;
}

/**
 * Accept an iterable item, return object with frequency count of characters in that item
 */
function frequencyCounter(items) {
  let count = {};

  for (let item of items) {
    let current = count[item] || 0;
    count[item] = current + 1;
  }

  return count;
}

//input two positive integers
//output true or false
//frequency counter function
//pass each integer into freq counter
//compare the freq counter objects to see same freq for each digit
//don't the same digits or don't the same freqs return false
//otherwise return true

