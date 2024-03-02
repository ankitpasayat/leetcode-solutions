class Solution {
    public int[] sortedSquares(int[] nums) {
        int i = 0;
        int len = nums.length;
        int j = len - 1;
        int p = len - 1;
        int[] res = new int[len];
        while (i <= j) {
            if (Math.abs(nums[i]) < Math.abs(nums[j])) {
                res[p] = nums[j] * nums[j];
                j--;
                p--;
            } else {
                res[p] = nums[i] * nums[i];
                i++;
                p--;
            }
        }
        return res;
    }
}