function validMountainArray(arr: number[]): boolean {
    let left = 0, right = arr.length - 1;
    while (arr[left] < arr[left + 1] || arr[right] < arr[right - 1]) {
        if (arr[left] < arr[left + 1]) {
            left += 1;
        }
        if (arr[right] < arr[right - 1]) {
            right -= 1;
        }
    }
    if (left !== right || left === arr.length - 1 || right === 0) {
        return false;
    }
    return true;
};