function numIdenticalPairs(nums: number[]): number {
    let seen = [], count = 0;
    for (const num of nums) {
        const temp = seen[num] || 0;
        count += temp;
        seen[num] = temp + 1;
    }
    return count;
};