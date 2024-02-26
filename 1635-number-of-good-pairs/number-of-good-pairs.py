class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        seen, count = {}, 0
        for num in nums:
            temp = seen.get(num, 0)
            count += temp
            seen[num] = temp + 1
        return count
