function countSubarrays(nums: number[], k: number): number {
    let maxnum = Math.max(...nums);
    let ans = 0;
    let n = nums.length;
    let maxind = [-1]; // Initialize with -1 to handle edge case
    for (let i = 0; i < n; i++) {
        if (nums[i] === maxnum) {
            maxind.push(i);
        }
    }
    let indsize = maxind.length;
    for (let i = 1; i <= indsize - k; i++) {
        let l = maxind[i] - maxind[i - 1] - 1;
        let r = n - 1 - maxind[i + k - 1];
        ans += (l + 1) * (r + 1);
    }
    return ans;
};