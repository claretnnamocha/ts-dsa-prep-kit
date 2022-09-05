/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 *
 * Example 1:
 * ==========================
 * Input: s = "()"
 * Output: true
 *
 *
 * Example 2:
 * ==========================
 * Input: s = "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 * ==========================
 * Input: s = "(]"
 * Output: false
 *
 *
 * Constraints:
 * ==========================
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 */

import Stack from "../../Data Structures/Stack";

const rightBrackets = [")", "]", "}"];
const leftBrackets = ["(", "[", "{"];

const evaluateChar = (ch: string) => {
  return rightBrackets.includes(ch) ? 1 : leftBrackets.includes(ch) ? -1 : 0;
};

export const isValid = function (s: string): boolean {
  const stack = new Stack();

  for (let index = 0; index < s.length; index++) {
    const ch = s[index];
    const evaluatedChar = evaluateChar(ch);

    if (evaluatedChar == -1) {
      stack.push(ch);
    } else if (evaluatedChar == 1) {
      const popped = stack.pop();
      if (leftBrackets.indexOf(popped) !== rightBrackets.indexOf(ch))
        return false;
    }
  }

  return stack.size() === 0;
};
