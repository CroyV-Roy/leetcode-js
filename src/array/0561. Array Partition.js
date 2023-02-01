/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums
        .sort((a, b) => a - b)
        .reduce((sum, cur, i) => {
            if (i % 2 === 0) {
                sum += cur;
            }
            return sum;
        }, 0);
};
