/**
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a contiguous subarray
 * [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target.
 * If there is no such subarray, return 0 instead.
 *
 * Example 1:
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 *
 * Example 2:
 * Input: target = 4, nums = [1,4,4]
 * Output: 1
 *
 * Example 3:
 * Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 * Output: 0
 *
 * Constraints:
 * 1 <= target <= 10^9
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^4
 */

export default function minSubArrayLen(target: number, nums: number[]): number {
  let rightIndex = 0,
    leftIndex = 0,
    min = Number.POSITIVE_INFINITY,
    sum = 0;

  while (rightIndex < nums.length) {
    const num = nums[rightIndex];
    sum += num;
    while (sum >= target) {
      let c = rightIndex - leftIndex + 1;
      min = Math.min(min, c);
      sum -= nums[leftIndex];
      leftIndex++;
    }
    rightIndex++;
  }

  return min === Number.POSITIVE_INFINITY ? 0 : min;
}
