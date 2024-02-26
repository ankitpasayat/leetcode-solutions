class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        int count = 0;
        char[] j = jewels.toCharArray();
        char[] s = stones.toCharArray();
        for (int i = 0; i < j.length; i++) {
            for (int k = 0; k < s.length; k++) {
                if (j[i] == s[k]) {
                    count += 1;
                }
            }
        }
        return count;
    }
}