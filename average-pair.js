/**
 * Accepts sorted array of numbers and target average.
 * Returns true if a pair of numbers in array averages to the target average.
 */
function averagePair(nums, targetAvg) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let average = (nums[start] + nums[end]) / 2;

    if (average === targetAvg) {
      return true;
    } else if (average > targetAvg) {
      end--;
    } else {
      start++;
    }
  }

  return false;
}

//Solution: O(n)
//Input: sorted arr of nums, average (number)
//Output: true or false
//Two pointers start at beg of end
//Take the average, compare to target average.
//POinter average is too high, decrement right point
//pointer is too low, increment left pointer
//logic pointers don't cross
//if pointer avg is the target return true
//otherwise false