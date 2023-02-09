var basicSort = function (arr) {
    let bucket = new Array(arr.length).fill(0);
    // initial bucket
    for (let i = 0; i < arr.length; i++) {
        bucket[arr[i]]++;
    }

    let index = 0;
    for (let i = 0; i < bucket.length; i++) {
        while (bucket[i] > 0) {
            arr[index++] = bucket[i];
            bucket[i]--;
        }
    }
    return arr;
};