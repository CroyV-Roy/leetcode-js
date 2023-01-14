/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.length == 0 || nums == null) return 0;
    let low = 0, high = nums.length - 1;

    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};