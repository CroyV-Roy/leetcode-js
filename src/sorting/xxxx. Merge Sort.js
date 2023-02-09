var mergeSort = function (arr, left, right) {
    if (left >= right) return;
    let mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
    return arr;
}

const merge = function (arr, left, mid, right) {
    let p1 = left, p2 = mid + 1;
    let temp = [];
    let index = 0;

    while (p1 <= mid && p2 <= right) {
        if (arr[p1] <= arr[p2]) {
            temp[index++] = arr[p1];
        } else {
            temp[index++] = arr[p2];
        }
    }
    while (p1 <= mid) {
        temp[index++] = arr[p1];
    }
    while (p2 <= right) {
        temp[index++] = arr[p2];
    }

    for (let i = 0; i < temp.length; i++) {
        arr[left + i] = temp[i];
    }
}