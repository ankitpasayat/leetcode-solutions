function getConcatenation(nums: number[]): number[] {
    const result = [...nums];
    for (let i = 0; i < nums.length; i++) {
        result[nums.length + i] = nums[i];
    }
    return result;
};