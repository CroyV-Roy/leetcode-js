/**
 * @param {Array} arr
 * @returns {Array}
 */
var selectSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let k = i;
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] < arr[k]) {
                k = j;
            }
        }
        if (k != i) {
            arr[k] ^= arr[i];
            arr[i] ^= arr[k];
            arr[k] ^= arr[i];
        }
    }
    return arr;
};