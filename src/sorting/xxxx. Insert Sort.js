/**
 * @param {Array} arr
 * @return {Array}
 */
var insertSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        if (arr[i] < arr[j - 1]) {
            let tmp = arr[i];
            while (j >= 0 && arr[j - 1] > tmp) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = tmp;
        }
    }
    return arr;
};
