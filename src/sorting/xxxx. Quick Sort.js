/**
 * @param {Array} arr
 * @returns {Array}
 */
var quickSort = function(arr) {
    if (arr.length <= 1) return arr;
    let right = [], left = [], key = arr.shift();
    for (let val of arr) {
        if (val > key) {
            right.push(val);
        } else {
            left.push(val);
        }
    }
    return quickSort(left).concat(key, quickSort(right));
}