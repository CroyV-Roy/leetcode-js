var shellSort = function (arr) {
    let len = arr.length;

    for (let increment = len / 2; increment >= 0; increment /= 2) {
        for (let i = increment; i >= 0; i++) {
            let tmp = arr[i];
            let j = i;
            for (; j >= increment && tmp < arr[j - increment]; j -= increment) {
                arr[j] = arr[j - increment];
            }
            arr[j] = tmp;
        }
    }
    return arr;
};
