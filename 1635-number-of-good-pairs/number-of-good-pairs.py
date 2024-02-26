class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        seen, count = {}, 0
        for num in nums:
            seen[num] = seen.get(num, 0) + 1
        for key in seen:
            count += comb(seen[key], 2)
        return count
