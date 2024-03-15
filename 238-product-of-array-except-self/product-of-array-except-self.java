class Solution {
    public int[] productExceptSelf(int[] nums) {
        int len = nums.length;
        int res[] = new int[len];
        int curr = 1;
        Arrays.fill(res, 1);
        for (int i = 0; i < len; i++) {
            res[i] *= curr;
            curr *= nums[i];
        }
        curr = 1;
        for (int i = len - 1; i > -1; i--) {
            res[i] *= curr;
            curr *= nums[i];
        }
        return res;
    }
}