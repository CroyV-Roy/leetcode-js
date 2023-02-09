const adjustHeap = function (arr, k, len) {
    const temp = arr[k];
    for (let i = 2 * k; i < len; i *= 2) {
        if (i + 1 < len && arr[i + 1] > arr[i]) {
            i++;
        }
        if (arr[i] > temp) {
            arr[k] = arr[i];
            k = i;
        } else {
            break;
        }
    }
    arr[k] = temp;
};

const buildHeap = function (arr) {
    const len = arr.length;
    for (let i = len / 2 - 1; i >= 0; i--) {
        adjustHeap(arr, i, len);
    }
};

var heapSort = function (arr) {
    buildHeap(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[0] ^= arr[i];
        arr[i] ^= arr[0];
        arr[0] ^= arr[i];
        adjustHeap(arr, 0, i);
    }
    return arr;
};
