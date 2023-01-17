/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count == 0) {
            count++;
            major = nums[i];
        } else if (nums[i] == major) {
            count++;
        } else {
            count--;
        }
    }
    return major;
};