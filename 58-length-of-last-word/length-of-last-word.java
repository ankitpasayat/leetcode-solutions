class Solution {
    public int lengthOfLastWord(String s) {
        String[] split_input = s.trim().split("\\s+");
        return split_input[split_input.length - 1].length();
    }
}