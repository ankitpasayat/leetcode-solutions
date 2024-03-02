function sortedSquares(nums: number[]): number[] {
    const result: number[] = new Array(nums.length);
    let insertIdx = nums.length - 1;
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    while (leftPointer <= rightPointer) {
        const a = Math.abs(nums[leftPointer]);
        const b = Math.abs(nums[rightPointer]);
        if (a >= b) {
            result[insertIdx--] = Math.pow(a, 2);
            leftPointer++;
        } else {
            result[insertIdx--] = Math.pow(b, 2);
            rightPointer--;
        }
    }
    return result;
};