class Solution {
    public int minimumLength(String s) {
        int l = 0, r = s.length() - 1;
        while (l < r && s.charAt(l) == s.charAt(r)) {
            char ch = s.charAt(l);
            while (l <= r && s.charAt(l) == ch) {
                l += 1;
            }
            while (l <= r && s.charAt(r) == ch) {
                r -= 1;
            }
        }
        return (l > r) ? 0 : r - l + 1;
    }
}