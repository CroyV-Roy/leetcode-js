/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [];
    res[0] = 1;
    for (let i = 1; i <= rowIndex; i++) {
        res[i] = res[i-1] * (rowIndex - i + 1) / i;
    }
    return res;
};