/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let interse = [];
    let set = new Set(nums2);
    for (const num of nums1) {
        if (set.has(num)) {
            interse.push(num);
            set.delete(num);
        }
    }
    return interse;
};
