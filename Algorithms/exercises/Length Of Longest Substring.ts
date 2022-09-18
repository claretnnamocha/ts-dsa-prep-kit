/**
 * Given a string s,
 * find the length of the longest substring without repeating characters.
 *
 *
 * Example 1:
 * ==============================
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 * Example 2:
 * ==============================
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 * Example 3:
 * ==============================
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring,
 * "pwke" is a subsequence and not a substring.
 *
 *
 * Constraints:
 * ==============================
 * 0 <= s.length <= 5 * 104
 * s consists of English letters, digits, symbols and spaces.
 */

const lengthOfLongestSubstring = (s: string) => {
  let table = {};
  let left = 0,
    right = 0,
    highest = 0;

  while (right < s.length) {
    const r = s[right];
    table[r] = (table[r] || 0) + 1;

    while (table[r] > 1) {
      const l = s[left];
      table[l] = (table[l] || 0) - 1;
      left++;
    }

    highest = Math.max(highest, right - left + 1);
    right++;
  }

  return highest;
};

export default lengthOfLongestSubstring;

/**
 * !Template for dynamic window
 */

/**
 ** const array = [];
 ** let rightIndex = 0,
 ** leftIndex = 0;
 *
 ** while (rightIndex < array.length) {
 *    todo: define `shrinkCondition`
 **   let shrinkCondition: boolean;
 *
 **   while (shrinkCondition) {
 *      todo: update `shrinkCondition`
 **     leftIndex++; // shrink
 **   }
 **   rightIndex++; // grow
 ** }
 */
