class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        int res = 0;
        for (char stone : stones.toCharArray()) {
            if (jewels.indexOf(stone) != -1) {
                res += 1;
            }
        }
        return res;
    }
}