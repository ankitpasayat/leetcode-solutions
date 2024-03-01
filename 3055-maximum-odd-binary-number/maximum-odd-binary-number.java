class Solution {
    public String maximumOddBinaryNumber(String s) {
        int ones = 0;
        for (char ch : s.toCharArray()) {
            if (ch == '1') {
                ones += 1;
            }
        }
        return "1".repeat(ones - 1) + "0".repeat(s.length() - ones) + "1";
    }
}