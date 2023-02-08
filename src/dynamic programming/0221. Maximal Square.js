/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix.length) return 0;
    
    let maxsqlen = 0;
    let rowLen = matrix.length, colLen = matrix[0].length;
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (matrix[row][col] === '1') {
                matrix[row][col] = Number(matrix[row][col]);
                if (row != 0 && col != 0) {
                    matrix[row][col] = Math.min(matrix[row-1][col], matrix[row-1][col-1], matrix[row][col-1]) + 1;
                }
                maxsqlen = Math.max(maxsqlen, matrix[row][col]);
            }
        }
    }
    return maxsqlen ** 2;
};