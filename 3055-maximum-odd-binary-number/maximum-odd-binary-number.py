class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        zero, one = s.count("0"), s.count("1")
        return "1" * (one - 1) + "0" * (zero) + "1"
