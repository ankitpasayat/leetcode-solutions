function productExceptSelf(nums: number[]): number[] {
    const len: number = nums.length;
    let res: number[] = new Array(len).fill(1);
    let curr: number = 1;
    for (let i = 0; i < len; i += 1) {
        res[i] *= curr;
        curr *= nums[i];
    }
    curr = 1;
    for (let i = len - 1; i > -2; i -= 1) {
        res[i] *= curr;
        curr *= nums[i];
    }
    return res;
};