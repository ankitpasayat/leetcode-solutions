function maxSubarrayLength(nums: number[], k: number): number {
    const freq = {};
    const n = nums.length;
    let ans = 0;
    let i = 0;
    let j = 0;
    while (j < n) {
        freq[nums[j]] = (freq[nums[j]] || 0) + 1;
        while (freq[nums[j]] > k) {
            freq[nums[i]] -= 1;
            i += 1;
        }
        ans = Math.max(ans, j - i + 1);
        j += 1;
    }
    return ans;
};