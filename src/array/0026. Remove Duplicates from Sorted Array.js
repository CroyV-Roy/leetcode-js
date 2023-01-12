/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let index = 1;
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] != nums[i - 1]) {
    //         nums[index] = nums[i];
    //         index++;
    //     }
    // }
    let index = nums.length ? 1 : 0;
    nums.forEach(num => {
        if (num > nums[index - 1]) {
            nums[index] = num;
            index++;
        }
    });
    return index;
};