class Solution:
    def minPartitions(self, n: str) -> int:
        digits = [int(d) for d in n]
        max_digit = max(digits)
        return max_digit
