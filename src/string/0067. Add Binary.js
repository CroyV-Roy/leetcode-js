/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);

    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = '';

    while(i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) sum += parseInt(a[i--], 10);
        if (j >= 0) sum += parseInt(b[j--], 10);
        carry = sum > 1 ? 1 : 0;
        result = sum % 2 + result;
    }

    if (carry != 0) result = carry + result;
    return result;
};
